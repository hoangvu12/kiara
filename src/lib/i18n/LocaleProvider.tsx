import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { detectLocale, STORAGE_KEY, urlLocale, type Locale } from "./config"
import { uiStrings, type UIStrings } from "./ui"

type LocaleContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
  /** UI chrome strings for the active locale. */
  t: UIStrings
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // A ?lang in the URL is known synchronously, so seed it for a correct first
  // paint (no English flash on a shared link). This is a client-only SPA, so
  // reading window here is safe.
  const [locale, setLocaleState] = useState<Locale>(() => urlLocale() ?? "en")

  // If the URL didn't pin a language, resolve from saved choice / browser.
  useEffect(() => {
    if (!urlLocale()) setLocaleState(detectLocale())
  }, [])

  // Keep <html lang> in sync for accessibility and correct text rendering.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function setLocale(l: Locale) {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // ignore
    }
  }

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: uiStrings[locale] }),
    [locale]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider")
  return ctx
}
