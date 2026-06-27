import { Link } from "react-router-dom"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { useLocale } from "@/lib/i18n/LocaleProvider"

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useLocale()
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/60 sticky top-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-2xl px-5 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-lg flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-full bg-primary" />
            Kiara
          </Link>
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline text-xs text-muted-foreground mr-2">
              {t.header.tagline}
            </span>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground px-5">
        {t.footer}
      </footer>
    </div>
  )
}
