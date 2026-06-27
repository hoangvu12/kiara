import type { LikertScale } from "@/lib/test-engine/types"
import { cn } from "@/lib/utils"

type Props = {
  scale: LikertScale
  value?: number
  onChange: (value: number) => void
}

/**
 * Accessible Likert selector. Each point is a column with the circle on top and,
 * for the two anchors and the midpoint, a label centered directly beneath it.
 * Equal-width columns keep every label aligned under its circle.
 */
export function LikertScaleInput({ scale, value, onChange }: Props) {
  const points: number[] = []
  for (let v = scale.min; v <= scale.max; v++) points.push(v)
  const mid = (scale.min + scale.max) / 2
  const count = points.length

  return (
    <div
      role="radiogroup"
      aria-label="Response scale"
      className="grid w-full gap-1.5 sm:gap-2.5"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {points.map((v) => {
        const selected = value === v
        const tone = v < mid ? "disagree" : v > mid ? "agree" : "neutral"
        const label = scale.pointLabels?.[v - scale.min] ?? String(v)
        const showLabel = v === scale.min || v === scale.max || v === mid

        return (
          <div key={v} className="flex flex-col items-center gap-3">
            <button
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={label}
              title={label}
              onClick={() => onChange(v)}
              className={cn(
                "size-10 sm:size-12 rounded-full border-2 transition-all duration-150 cursor-pointer outline-none",
                "focus-visible:ring-[3px] focus-visible:ring-ring/40 hover:scale-110",
                selected && "border-transparent shadow-sm scale-110",
                !selected && tone === "agree" && "border-secure/45 hover:border-secure",
                !selected && tone === "disagree" && "border-anxiety/40 hover:border-anxiety/80",
                !selected && tone === "neutral" && "border-border hover:border-muted-foreground"
              )}
              style={{
                backgroundColor: selected
                  ? tone === "agree"
                    ? "var(--color-secure)"
                    : tone === "disagree"
                      ? "var(--color-anxiety)"
                      : "var(--muted-foreground)"
                  : undefined,
              }}
            />
            <span className="min-h-[2.4em] text-[11px] sm:text-xs leading-tight text-center text-muted-foreground">
              {showLabel ? label : ""}
            </span>
          </div>
        )
      })}
    </div>
  )
}
