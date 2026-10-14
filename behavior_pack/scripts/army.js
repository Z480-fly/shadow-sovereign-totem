/**
 * Army management: extraction, mana limits, summon by rank, persistence, transit list
 */

import { world } from "@minecraft/server";
import { debug, getPlayerData, setPlayerData, calcManaCapacity } from "./utils.js";

export function initArmy() {
  // Example kill listener (player or soldier kills)
  world.afterEvents.entityDie.subscribe((ev) => {
    const dead = ev.deadEntity;
    const killer = ev.damageSource.damagingEntity;
    if (!killer || killer.typeId !== "minecraft:player") return;

    // TODO: check if killer (or one of their soldiers) is in monarch mode
    // TODO: decide class from dead.typeId, check mana, spawn shadow, save to storage
    debug(`Kill by ${killer.nameTag}: ${dead.typeId} (extraction stub)`);
  });

  debug("army module ready (skeleton)");
}

/** Placeholder API that other modules can call */
export function getManaUsed(player) {
  return getPlayerData(player, "sst:manaUsed", 0);
}

export function getManaCapacity(player) {
  const level = getPlayerData(player, "sst:level", 1);
  const intPts = getPlayerData(player, "sst:stat_int", 0);
  return calcManaCapacity(level, intPts);
}

export function storeAll(player) {
  // Move all out soldiers to "in shadow" storage (except when < 5 s drop)
  debug(`storeAll for ${player.name}`);
}

export function restoreFromTransit(player) {
  // Called after teleport once ground is under the player
  debug(`restoreFromTransit for ${player.name}`);
}
