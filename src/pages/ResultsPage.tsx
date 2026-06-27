import { useEffect, useMemo, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { RotateCcw, Sparkles, Compass, Check } from "lucide-react"
import { getTestBySlug } from "@/lib/test-engine/registry"
import { clearAnswers, loadAnswers } from "@/lib/test-engine/storage"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DimensionQuadrant } from "@/components/DimensionQuadrant"
import { Layout } from "@/components/Layout"
import { useLocale } from "@/lib/i18n/LocaleProvider"
import { cn } from "@/lib/utils"

export function ResultsPage() {
  const { slug = "" } = useParams()
  const navigate = useNavigate()
  const { locale, t } = useLocale()
  // Stable identity across renders (the resolver builds a fresh object each call).
  const test = useMemo(() => getTestBySlug(slug, locale), [slug, locale])

  const [context, setContext] = useState<string>(test?.contexts?.[0]?.id ?? "")

  const answers = useMemo(() => (test ? loadAnswers(test.id) : null), [test])

  // Redirect to intro if there's nothing to score.
  useEffect(() => {
    if (test && (!answers || Object.keys(answers).length === 0)) {
      navigate(`/test/${test.slug}`, { replace: true })
    }
  }, [test, answers, navigate])

  if (!test) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl px-5 py-24 text-center">
          <p className="text-muted-foreground">{t.common.testNotFound}</p>
          <Button asChild className="mt-4">
            <Link to="/">{t.common.backToAll}</Link>
          </Button>
        </div>
      </Layout>
    )
  }

  if (!answers || Object.keys(answers).length === 0) {
    return <Layout>{null}</Layout>
  }

  const result = test.score(answers)
  const outcome = test.outcomes[result.outcomeId]
  const dims = result.dimensions

  const xDim = test.quadrant
    ? dims.find((d) => d.id === test.quadrant!.xDimension)
    : undefined
  const yDim = test.quadrant
    ? dims.find((d) => d.id === test.quadrant!.yDimension)
    : undefined

  const contextText = context ? outcome.contexts?.[context] : undefined

  function retake() {
    clearAnswers(test!.id)
    navigate(`/test/${test!.slug}/take`)
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-5 py-12">
        {/* Hero */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {test.resultKicker ?? t.results.kicker}
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
            {outcome.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground text-pretty">
            {outcome.tagline}
          </p>
        </div>

        {/* Dimensions are the real result; the style is just which corner they land in. */}
        <Card className="mt-10 p-6">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {test.scoresTitle ?? t.results.twoScores}
          </h2>
          <p className="text-sm text-muted-foreground mt-1 mb-5">
            {test.scoresHint ?? t.results.twoScoresHint}
          </p>
          <div className="space-y-5">
            {dims.map((d) => {
              const colorVar = test.dimensions.find((x) => x.id === d.id)?.colorVar
              return (
              <div key={d.id}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-medium">{d.label}</span>
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {d.score}/100 · <span>{t.levels[d.level]}</span>
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-[width] duration-700 ease-out"
                    style={{
                      width: `${d.score}%`,
                      backgroundColor: colorVar ? `var(${colorVar})` : "var(--primary)",
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">{d.description}</p>
              </div>
              )
            })}
          </div>
        </Card>

        {/* Quadrant map */}
        {test.quadrant && xDim && yDim && (
          <Card className="mt-6 p-6">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-5 text-center">
              {t.results.whereYouLand}
            </h2>
            <DimensionQuadrant
              x={xDim.score}
              y={yDim.score}
              pointLabel={t.results.youAreHere}
              xColor="var(--color-avoidance)"
              yColor="var(--color-anxiety)"
              calmColor="var(--color-secure)"
              xLowLabel={test.dimensions.find((d) => d.id === xDim.id)!.lowLabel}
              xHighLabel={test.dimensions.find((d) => d.id === xDim.id)!.highLabel}
              yLowLabel={test.dimensions.find((d) => d.id === yDim.id)!.lowLabel}
              yHighLabel={test.dimensions.find((d) => d.id === yDim.id)!.highLabel}
              quadrantLabels={{
                lowXLowY: test.outcomes[test.quadrant.quadrants.lowXLowY].name,
                highXLowY: test.outcomes[test.quadrant.quadrants.highXLowY].name,
                lowXHighY: test.outcomes[test.quadrant.quadrants.lowXHighY].name,
                highXHighY: test.outcomes[test.quadrant.quadrants.highXHighY].name,
              }}
              activeQuadrant={
                (Object.entries(test.quadrant.quadrants).find(
                  ([, v]) => v === result.outcomeId
                )?.[0] as "lowXLowY") ?? "lowXLowY"
              }
            />
          </Card>
        )}

        {/* What it means */}
        <div className="mt-8">
          <p className="text-base leading-relaxed text-foreground/90">
            {outcome.summary}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            {outcome.longDescription}
          </p>
        </div>

        {/* Context switcher */}
        {test.contexts && (
          <div className="mt-8">
            <p className="text-sm font-medium mb-2">{t.results.whatThisLooksLike}</p>
            <div className="flex flex-wrap gap-2">
              {test.contexts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setContext(c.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer",
                    context === c.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/40"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            {contextText && (
              <p className="mt-3 text-muted-foreground leading-relaxed bg-muted/40 border border-border/60 rounded-lg p-4 text-pretty">
                {contextText}
              </p>
            )}
          </div>
        )}

        {/* Strengths + growth */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-4 text-secure" />
              <h3 className="font-medium">{t.results.strengths}</h3>
            </div>
            <ul className="space-y-2">
              {outcome.strengths.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 text-secure shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="size-4 text-primary" />
              <h3 className="font-medium">{t.results.growth}</h3>
            </div>
            <ul className="space-y-2">
              {outcome.growth.map((g) => (
                <li key={g} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary shrink-0">›</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-muted-foreground leading-relaxed bg-muted/40 rounded-lg p-4 border border-border/60">
          {test.disclaimer}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button variant="outline" onClick={retake} className="flex-1">
            <RotateCcw /> {t.results.retake}
          </Button>
          <Button asChild className="flex-1">
            <Link to="/">{t.results.explore}</Link>
          </Button>
        </div>

        {/* Sources */}
        <details className="mt-8 group">
          <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors list-none flex items-center gap-2">
            <span className="transition-transform group-open:rotate-90">›</span>
            {t.common.sources}
          </summary>
          <ul className="mt-3 space-y-2 pl-5">
            {test.sources.map((s) => (
              <li key={s.url} className="text-sm">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline underline-offset-4"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </Layout>
  )
}
