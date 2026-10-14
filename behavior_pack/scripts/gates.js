/**
 * Ranked Gates → temporary arena with waves, elites, boss
 */

import { debug } from "./utils.js";

export function initGates() {
  debug("gates module ready (skeleton)");
}

export function openGate(player, rank) {
  // rank = "E" | "D" | "C" | "B" | "A" | "S"
  debug(`Opening Gate rank ${rank} for ${player.name} (stub)`);
  // TODO: spawn portal entity / particles in front of player
  // TODO: on walk-in → teleport to pre-prepared or generated arena
  // TODO: spawn wave + rare elites + boss, keep return portal 20 min
}
