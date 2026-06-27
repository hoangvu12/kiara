import { Languages } from "lucide-react"
import { locales } from "@/lib/i18n/config"
import { useLocale } from "@/lib/i18n/LocaleProvider"

/**
 * Cycles through the available languages. With two locales this is a simple
 * toggle; it still works if more are added later.
 */
export function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  function next() {
    const i = locales.findIndex((l) => l.code === locale)
    const nextLocale = locales[(i + 1) % locales.length]
    setLocale(nextLocale.code)
  }

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  return (
    <button
      onClick={next}
      aria-label={`Language: ${current.label}. Click to switch.`}
      title={`Language: ${current.label}`}
      className="inline-flex h-9 items-center gap-1.5 rounded-md px-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
    >
      <Languages className="size-4.5" />
      <span className="text-xs font-medium tabular-nums">{current.short}</span>
    </button>
  )
}
