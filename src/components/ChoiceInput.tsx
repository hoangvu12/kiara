import type { ChoiceOption } from "@/lib/test-engine/types"
import { cn } from "@/lib/utils"

type Props = {
  options: ChoiceOption[]
  /** 1-based index of the selected option. */
  value?: number
  onChange: (value: number) => void
}

const LETTERS = ["A", "B", "C", "D", "E", "F"]

/**
 * Accessible single-select list for ability/choice items. One option per row,
 * with a letter badge. Unlike the Likert scale there is no "agree/disagree"
 * tone — every option is just a candidate answer, so styling is neutral until
 * selected. The stored value is the option's 1-based index.
 */
export function ChoiceInput({ options, value, onChange }: Props) {
  return (
    <div role="radiogroup" aria-label="Answer options" className="flex flex-col gap-2.5">
      {options.map((opt, i) => {
        const idx = i + 1
        const selected = value === idx
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(idx)}
            className={cn(
              "group flex items-start gap-3.5 rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer outline-none",
              "focus-visible:ring-[3px] focus-visible:ring-ring/40",
              selected
                ? "border-primary bg-primary/10 ring-1 ring-primary/30"
                : "border-border hover:border-primary/40 hover:bg-muted/40"
            )}
          >
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold transition-colors",
                selected
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground group-hover:border-primary/50"
              )}
            >
              {LETTERS[i] ?? idx}
            </span>
            <span className="text-base leading-snug pt-0.5 text-pretty">{opt.text}</span>
          </button>
        )
      })}
    </div>
  )
}
