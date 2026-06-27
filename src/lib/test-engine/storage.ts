import type { Answers } from "./types"

const answersKey = (testId: string) => `kiara:answers:${testId}`

export function saveAnswers(testId: string, answers: Answers): void {
  try {
    localStorage.setItem(answersKey(testId), JSON.stringify(answers))
  } catch {
    // localStorage unavailable (private mode / quota) — fail silently.
  }
}

export function loadAnswers(testId: string): Answers | null {
  try {
    const raw = localStorage.getItem(answersKey(testId))
    return raw ? (JSON.parse(raw) as Answers) : null
  } catch {
    return null
  }
}

export function clearAnswers(testId: string): void {
  try {
    localStorage.removeItem(answersKey(testId))
  } catch {
    // ignore
  }
}

const perspectiveKey = (testId: string) => `kiara:perspective:${testId}`

/** Remember which answering lens the user picked (e.g. romantic vs. general). */
export function savePerspective(testId: string, perspectiveId: string): void {
  try {
    localStorage.setItem(perspectiveKey(testId), perspectiveId)
  } catch {
    // ignore
  }
}

export function loadPerspective(testId: string): string | null {
  try {
    return localStorage.getItem(perspectiveKey(testId))
  } catch {
    return null
  }
}
