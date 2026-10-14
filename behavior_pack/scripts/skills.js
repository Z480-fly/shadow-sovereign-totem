/**
 * Level-gated skills (passive + active)
 */

import { debug } from "./utils.js";

const SKILLS = [
  { id: "haste", level: 5, name: "Haste" },
  { id: "regeneration", level: 10, name: "Regeneration" },
  { id: "fire_ward", level: 15, name: "Fire Ward" },
  { id: "stealth", level: 12, name: "Stealth" },
  { id: "bloodlust", level: 15, name: "Bloodlust" },
  { id: "astral", level: 18, name: "Astral Projection" },
  { id: "quicksilver", level: 20, name: "Quicksilver" },
  { id: "killing_intent", level: 25, name: "Killing Intent" },
  // … add the rest from the design
];

export function initSkills() {
  debug("skills module ready (skeleton)");
}

export function getUnlockedSkills(playerLevel) {
  return SKILLS.filter((s) => playerLevel >= s.level);
}

/** Astral Projection special handling would live here */
export function activateAstral(player) {
  // body stay + invisible, spirit = creative flight, timer / damage snap-back
  debug(`Astral Projection activated for ${player.name} (stub)`);
}
