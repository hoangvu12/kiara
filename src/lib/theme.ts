export type Theme = "light" | "dark"

const KEY = "kiara:theme"

export function getTheme(): Theme {
  try {
    return (localStorage.getItem(KEY) as Theme) || "dark"
  } catch {
    return "dark"
  }
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  try {
    localStorage.setItem(KEY, theme)
  } catch {
    // ignore
  }
}
