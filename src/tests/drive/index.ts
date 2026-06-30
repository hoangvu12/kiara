import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  driveDimensions,
  driveQuestions,
  driveScale,
  driveSources,
  scoreDrive,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * Drive test (BIS/BAS Scales). A twenty-item self-report, reproduced verbatim
 * from Carver's published instrument, on the two motivation systems behind
 * approach and avoidance. The three BAS facets (drive, fun seeking, reward
 * responsiveness) and the BIS scale render as four unipolar bars, each with a
 * "how this shows up" read when elevated. The named result is one of four
 * motivational profiles, from BIS (high/low) crossed with overall BAS (high/low):
 * the Go-Getter, the Striver, the Sentinel, and the Even Keel.
 */
export const driveTest: LocalizedTestDefinition = {
  id: "drive",
  slug: "drive",
  estimatedMinutes: 4,
  scale: driveScale,
  dimensions: driveDimensions,
  questions: driveQuestions,
  sources: driveSources,
  score: scoreDrive,
  content: { en, vi },
}
