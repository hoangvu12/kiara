import { useEffect, useMemo, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getTestBySlug } from "@/lib/test-engine/registry"
import { loadAnswers, loadPerspective, saveAnswers } from "@/lib/test-engine/storage"
import type { Answers } from "@/lib/test-engine/types"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LikertScaleInput } from "@/components/LikertScale"
import { ChoiceInput } from "@/components/ChoiceInput"
import { Layout } from "@/components/Layout"
import { useLocale } from "@/lib/i18n/LocaleProvider"
import { cn } from "@/lib/utils"

export function TestRunnerPage() {
  const { slug = "" } = useParams()
  const navigate = useNavigate()
  const { locale, t } = useLocale()
  // Memoize so the resolved test keeps a stable identity across renders;
  // otherwise the resume effect below re-fires every render and resets the
  // question index (Back would appear to do nothing).
  const test = useMemo(() => getTestBySlug(slug, locale), [slug, locale])

  const [answers, setAnswers] = useState<Answers>({})
  const [index, setIndex] = useState(0)
  const [hydrated, setHydrated] = useState(false)

  // The chosen answering lens drives the instruction banner, any per-lens
  // question wording, and (for tests like attachment) which items get asked.
  const perspectiveId = useMemo(() => {
    if (!test) return undefined
    const pid = loadPerspective(test.id)
    const p =
      test.perspectives?.find((x) => x.id === pid) ?? test.perspectives?.[0]
    return p?.id
  }, [test])

  // The active question set: a per-perspective subset when the test defines one
  // (e.g. attachment asks 36 romantic items for a partner but 9 for a parent),
  // otherwise the full list.
  const questions = useMemo(() => {
    if (!test) return []
    const ids = perspectiveId
      ? test.perspectiveQuestionIds?.[perspectiveId]
      : undefined
    if (!ids) return test.questions
    const byId = new Map(test.questions.map((q) => [q.id, q]))
    return ids
      .map((id) => byId.get(id))
      .filter((q): q is NonNullable<typeof q> => q != null)
  }, [test, perspectiveId])

  // Resume from saved answers; jump to the first unanswered question. Answers
  // outside the active set (e.g. from a previously chosen target) are dropped so
  // they can't leak into scoring.
  useEffect(() => {
    if (!test) return
    const activeIds = new Set(questions.map((q) => q.id))
    const saved = loadAnswers(test.id) ?? {}
    const scoped = Object.fromEntries(
      Object.entries(saved).filter(([id]) => activeIds.has(id))
    )
    setAnswers(scoped)
    const firstUnanswered = questions.findIndex((q) => scoped[q.id] == null)
    setIndex(firstUnanswered === -1 ? questions.length - 1 : firstUnanswered)
    setHydrated(true)
  }, [test, questions])

  const total = questions.length
  const answeredCount = useMemo(
    () => questions.filter((q) => answers[q.id] != null).length,
    [answers, questions]
  )

  const banner = useMemo(() => {
    if (!test) return undefined
    const p = test.perspectives?.find((x) => x.id === perspectiveId)
    return p?.instruction ?? test.instructions
  }, [test, perspectiveId])

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

  const question = questions[index]
  const questionText =
    (perspectiveId &&
      test.questionsByPerspective?.[perspectiveId]?.[question.id]) ||
    question.text
  const currentValue = answers[question.id]
  const isLast = index === total - 1
  const isChoice = question.options != null && question.options.length > 0

  function select(value: number) {
    const next = { ...answers, [question.id]: value }
    setAnswers(next)
    saveAnswers(test!.id, next)
    // Auto-advance after a short beat so the selection is visible.
    window.setTimeout(() => {
      if (index < total - 1) setIndex((i) => i + 1)
    }, 220)
  }

  function finish() {
    saveAnswers(test!.id, answers)
    navigate(`/test/${test!.slug}/results`)
  }

  if (!hydrated) return <Layout>{null}</Layout>

  const progressPct = (answeredCount / total) * 100
  const canFinish = answeredCount === total

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-5 py-8">
        {/* Progress */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => (index === 0 ? navigate(`/test/${test.slug}`) : setIndex((i) => i - 1))}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous"
          >
            <ArrowLeft className="size-5" />
          </button>
          <Progress value={progressPct} className="flex-1" />
          <span className="text-sm text-muted-foreground tabular-nums w-14 text-right">
            {answeredCount}/{total}
          </span>
        </div>

        {banner && (
          <p className="mt-6 text-sm text-muted-foreground bg-muted/50 rounded-lg p-4 border border-border/60">
            {banner}
          </p>
        )}

        {/* Question */}
        <div key={question.id} className="mt-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {t.runner.question} {index + 1}
          </p>
          <h2
            className={cn(
              "mt-2 font-medium tracking-tight leading-snug",
              isChoice
                ? "text-xl sm:text-2xl text-pretty"
                : "text-2xl sm:text-3xl text-balance min-h-[5rem]"
            )}
          >
            {questionText}
          </h2>

          <div className="mt-8">
            {isChoice ? (
              <ChoiceInput
                options={question.options!}
                value={currentValue}
                onChange={select}
              />
            ) : (
              <LikertScaleInput
                scale={test.scale}
                value={currentValue}
                onChange={select}
              />
            )}
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-12 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
          >
            <ArrowLeft /> {t.runner.back}
          </Button>

          {isLast ? (
            <Button onClick={finish} disabled={!canFinish} size="lg">
              {t.runner.seeResults} <ArrowRight />
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
              disabled={currentValue == null}
            >
              {t.runner.next} <ArrowRight />
            </Button>
          )}
        </div>

        {canFinish && !isLast && (
          <div className="mt-6 text-center">
            <button
              onClick={finish}
              className="text-sm text-primary hover:underline underline-offset-4"
            >
              {t.runner.allAnswered}
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}
