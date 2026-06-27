/**
 * Supported languages. To add one:
 *   1. Add its code here and to `locales`.
 *   2. Add a UI dictionary in ui.ts.
 *   3. Add a content block in each test's content/ folder.
 * Everything else resolves by code with English as the fallback.
 */
export type Locale = "en" | "vi"

export const FALLBACK_LOCALE: Locale = "en"

export const locales: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
]

export const STORAGE_KEY = "kiara:locale"

/** Query param that pins the language in a shareable URL, e.g. ?lang=vi */
export const LANG_PARAM = "lang"

function isLocale(value: string | null): value is Locale {
  return !!value && locales.some((l) => l.code === value)
}

/** The language pinned in the current URL's ?lang param, if any and valid. */
export function urlLocale(): Locale | null {
  try {
    const value = new URLSearchParams(window.location.search).get(LANG_PARAM)
    return isLocale(value) ? value : null
  } catch {
    return null
  }
}

/**
 * Pick a starting language. A ?lang in the URL wins (so shared links open in the
 * right language), then a saved choice, then the browser, then the fallback.
 */
export function detectLocale(): Locale {
  const fromUrl = urlLocale()
  if (fromUrl) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // ignore
  }
  try {
    if (navigator.language?.toLowerCase().startsWith("vi")) return "vi"
  } catch {
    // ignore
  }
  return FALLBACK_LOCALE
}
