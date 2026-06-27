import { cn } from "@/lib/utils"

type QuadrantKey = "lowXLowY" | "highXLowY" | "lowXHighY" | "highXHighY"

type Props = {
  /** 0–100 horizontal score (left = low). */
  x: number
  /** 0–100 vertical score (bottom = low). */
  y: number
  xLowLabel: string
  xHighLabel: string
  yLowLabel: string
  yHighLabel: string
  quadrantLabels: {
    lowXLowY: string
    highXLowY: string
    lowXHighY: string
    highXHighY: string
  }
  activeQuadrant: QuadrantKey
  /** "You are here" marker label. */
  pointLabel?: string
  /** Axis colors (CSS color values). x grows rightward, y grows upward. */
  xColor?: string
  yColor?: string
  /** Optional colour for a soft glow on the low-low ("calm") corner. */
  calmColor?: string
}

/**
 * Generic 2-dimension map. Plots a point at (x, y) on a square divided into four
 * quadrants. The background is a 2-axis colour field: it stays calm/dark near the
 * low-low corner and gains colour as each axis rises (x-colour rightward,
 * y-colour upward), so the high-high corner blends both. Used for attachment
 * (avoidance × anxiety) and reusable for any two-axis test.
 */
export function DimensionQuadrant({
  x,
  y,
  xLowLabel,
  xHighLabel,
  yLowLabel,
  yHighLabel,
  quadrantLabels,
  activeQuadrant,
  pointLabel,
  xColor = "var(--primary)",
  yColor = "var(--primary)",
  calmColor,
}: Props) {
  // Labels sit in each cell's OUTER corner so the centred point never overlaps.
  const cells: { key: QuadrantKey; label: string; pos: string; align: string }[] = [
    { key: "lowXHighY", label: quadrantLabels.lowXHighY, pos: "top-0 left-0", align: "items-start justify-start text-left" },
    { key: "highXHighY", label: quadrantLabels.highXHighY, pos: "top-0 right-0", align: "items-start justify-end text-right" },
    { key: "lowXLowY", label: quadrantLabels.lowXLowY, pos: "bottom-0 left-0", align: "items-end justify-start text-left" },
    { key: "highXLowY", label: quadrantLabels.highXLowY, pos: "bottom-0 right-0", align: "items-end justify-end text-right" },
  ]

  const px = Math.min(94, Math.max(6, x))
  const py = Math.min(94, Math.max(6, 100 - y))
  // Anchor the "you are here" pill on the OUTER side of the dot so it never
  // crosses the center axis into the neighbouring quadrant: above when the dot
  // sits in the top half, below when it sits in the bottom half.
  const labelBelow = y < 50

  const colorField = [
    calmColor &&
      `radial-gradient(circle at 0% 100%, color-mix(in oklab, ${calmColor} 30%, transparent), transparent 55%)`,
    `linear-gradient(to top, transparent 36%, color-mix(in oklab, ${yColor} 48%, transparent) 100%)`,
    `linear-gradient(to right, transparent 36%, color-mix(in oklab, ${xColor} 48%, transparent) 100%)`,
  ]
    .filter(Boolean)
    .join(", ")

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* y-axis high label */}
      <div className="mb-1.5 text-center text-[11px] font-medium" style={{ color: yColor }}>
        ↑ {yHighLabel}
      </div>

      <div
        className="relative aspect-square w-full rounded-xl border border-border overflow-hidden"
        style={{
          backgroundColor: "var(--card)",
          backgroundImage: colorField,
        }}
      >
        {/* Quadrant cells */}
        {cells.map((c) => {
          const active = c.key === activeQuadrant
          return (
            <div
              key={c.key}
              className={cn(
                "absolute w-1/2 h-1/2 flex p-3",
                c.pos,
                c.align,
                active && "ring-1 ring-inset ring-foreground/25 bg-foreground/[0.04]"
              )}
            >
              <span
                className={cn(
                  "text-xs leading-tight transition-colors max-w-[7.5rem]",
                  active
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted-foreground/45"
                )}
              >
                {c.label}
              </span>
            </div>
          )
        })}

        {/* Center axes */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/70 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border/70 -translate-y-1/2" />

        {/* Plotted point */}
        <div
          className="absolute size-4 rounded-full bg-primary ring-4 ring-background shadow-md -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
          style={{ left: `${px}%`, top: `${py}%` }}
        >
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
          {pointLabel && (
            <span
              className={cn(
                "absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-1.5 py-0.5 text-[10px] font-medium text-background shadow",
                labelBelow ? "top-[calc(100%+0.4rem)]" : "bottom-[calc(100%+0.4rem)]"
              )}
            >
              {pointLabel}
            </span>
          )}
        </div>
      </div>

      {/* y-axis low label */}
      <div className="mt-1.5 text-center text-[11px] text-muted-foreground">
        ↓ {yLowLabel}
      </div>

      {/* x-axis labels */}
      <div className="mt-2 flex justify-between text-[11px] px-1">
        <span className="text-muted-foreground">← {xLowLabel}</span>
        <span className="font-medium" style={{ color: xColor }}>
          {xHighLabel} →
        </span>
      </div>
    </div>
  )
}
