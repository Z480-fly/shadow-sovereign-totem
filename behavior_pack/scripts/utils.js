/**
 * Shared helpers
 */

import { world } from "@minecraft/server";

let debugEnabled = true; // later driven by Settings

export function debug(msg) {
  if (!debugEnabled) return;
  world.sendMessage(`§7[Totem debug] ${msg}`);
}

export function setDebug(enabled) {
  debugEnabled = !!enabled;
}

/** Simple dynamic property helpers (per-player) */
export function getPlayerData(player, key, fallback = null) {
  try {
    const raw = player.getDynamicProperty(key);
    return raw === undefined ? fallback : raw;
  } catch {
    return fallback;
  }
}

export function setPlayerData(player, key, value) {
  try {
    player.setDynamicProperty(key, value);
  } catch (e) {
    debug(`Failed to set ${key}: ${e}`);
  }
}

/** Mana capacity formula from design */
export function calcManaCapacity(level, intPoints) {
  return 60 + 6 * level + 5 * intPoints;
}
