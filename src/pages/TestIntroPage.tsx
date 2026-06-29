import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, Clock, FlaskConical, ShieldCheck, Info, Check } from "lucide-react"
import { getTestBySlug } from "@/lib/test-engine/registry"
import { loadAnswers, loadPerspective, savePerspective } from "@/lib/test-engine/storage"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/Layout"
import { useLocale } from "@/lib/i18n/LocaleProvider"
import { cn } from "@/lib/utils"

export function TestIntroPage() {
  const { slug = "" } = useParams()
  const navigate = useNavigate()
  const { locale, t } = useLocale()
  const test = getTestBySlug(slug, locale)

  const perspectives = test?.perspectives ?? []
  const [perspectiveId, setPerspectiveId] = useState<string>(
    () => loadPerspective(test?.id ?? "") ?? perspectives[0]?.id ?? ""
  )

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

  const hasProgress = loadAnswers(test.id) != null
  const selected = perspectives.find((p) => p.id === perspectiveId)

  // Show the count for the chosen target, not the full item pool: a test can
  // carry more items than any one perspective asks (e.g. attachment holds both
  // the 36-item ECR-R and the 9-item ECR-RS).
  const questionCount =
    (perspectiveId && test.perspectiveQuestionIds?.[perspectiveId]?.length) ||
    test.questions.length

  function choosePerspective(id: string) {
    setPerspectiveId(id)
    savePerspective(test!.id, id)
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-5 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> {t.common.allTests}
        </Link>

        <div className="mt-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs">
              {test.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" /> {test.estimatedMinutes} {t.common.min}
            </span>
            <span>·</span>
            <span>
              {questionCount} {t.common.questions}
            </span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            {test.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground text-pretty">
            {test.description}
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-border/60 bg-muted/30 p-5 flex flex-col gap-4">
          <div className="flex gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FlaskConical className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium">{t.intro.science}</p>
              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                {test.scientificBasis}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium">{t.intro.howToRead}</p>
              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                {test.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Answering lens (e.g. romantic vs. close relationships in general) */}
        {perspectives.length > 1 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold tracking-tight">
              {t.intro.perspectiveTitle}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {t.intro.perspectiveHint}
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
              {perspectives.map((p) => {
                const active = perspectiveId === p.id
                return (
                  <button
                    key={p.id}
                    onClick={() => choosePerspective(p.id)}
                    aria-pressed={active}
                    className={cn(
                      "flex items-center justify-between gap-2 text-left rounded-lg border p-4 transition-colors cursor-pointer",
                      active
                        ? "border-primary bg-primary/10 ring-1 ring-primary/30"
                        : "border-border hover:border-primary/40 hover:bg-muted/30"
                    )}
                  >
                    <span className="text-sm font-medium">{p.label}</span>
                    {active && <Check className="size-4 text-primary shrink-0" />}
                  </button>
                )
              })}
            </div>
            {(selected?.instruction || selected?.note) && (
              <div className="mt-3 rounded-lg border border-border/60 bg-muted/40 p-4">
                {selected?.instruction && (
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {selected.instruction}
                  </p>
                )}
                {selected?.note && (
                  <div
                    className={cn(
                      "flex gap-2.5 text-xs text-muted-foreground/90 leading-relaxed",
                      selected?.instruction && "mt-3 pt-3 border-t border-border/50"
                    )}
                  >
                    <Info className="size-3.5 text-primary/80 shrink-0 mt-0.5" />
                    <p className="text-pretty">{selected.note}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="flex-1" onClick={() => navigate(`/test/${test.slug}/take`)}>
            {hasProgress ? t.intro.continue : t.intro.start} <ArrowRight />
          </Button>
        </div>

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
