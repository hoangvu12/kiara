import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"
import { getTests } from "@/lib/test-engine/registry"
import { Card } from "@/components/ui/card"
import { Layout } from "@/components/Layout"
import { useLocale } from "@/lib/i18n/LocaleProvider"

export function CatalogPage() {
  const { locale, t } = useLocale()
  const tests = getTests(locale)

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-5 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
          {t.catalog.heroTitle}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
          {t.catalog.heroSubtitle}
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-20">
        <div className="grid gap-4">
          {tests.map((test) => (
            <Link key={test.id} to={`/test/${test.slug}`} className="group">
              <Card className="p-6 transition-all hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                        {test.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        {test.estimatedMinutes} {t.common.min}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {test.title}
                    </h2>
                    <p className="mt-1 text-muted-foreground text-pretty">
                      {test.tagline}
                    </p>
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground shrink-0 mt-1 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t.catalog.moreSoon}
        </p>
      </section>
    </Layout>
  )
}
