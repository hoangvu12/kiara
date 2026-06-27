import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { CatalogPage } from "@/pages/CatalogPage"
import { TestIntroPage } from "@/pages/TestIntroPage"
import { TestRunnerPage } from "@/pages/TestRunnerPage"
import { ResultsPage } from "@/pages/ResultsPage"
import { useLocale } from "@/lib/i18n/LocaleProvider"
import { FALLBACK_LOCALE, LANG_PARAM } from "@/lib/i18n/config"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/**
 * Keep the active language in the URL so any copied link carries it. Non-default
 * locales get ?lang=<code> on every page; English (the default) stays clean.
 */
function LocaleUrlSync() {
  const { locale } = useLocale()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const current = params.get(LANG_PARAM)
    if (locale === FALLBACK_LOCALE) {
      if (current === null) return
      params.delete(LANG_PARAM)
    } else {
      if (current === locale) return
      params.set(LANG_PARAM, locale)
    }
    const search = params.toString()
    navigate(
      { pathname: location.pathname, search: search ? `?${search}` : "" },
      { replace: true }
    )
  }, [locale, location.pathname, location.search, navigate])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LocaleUrlSync />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/test/:slug" element={<TestIntroPage />} />
        <Route path="/test/:slug/take" element={<TestRunnerPage />} />
        <Route path="/test/:slug/results" element={<ResultsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
