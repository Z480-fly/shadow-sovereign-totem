/**
 * Totem detection, monarch mode activation, short-drop grace, Awakening Surge
 */

import { world, system } from "@minecraft/server";
import { debug, getPlayerData, setPlayerData } from "./utils.js";

const TOTEM_BLACK = "sst:shadow_totem_black"; // replace with real item id
const TOTEM_RED = "sst:shadow_totem_red";

export function initTotem() {
  // Example: detect when a player holds a totem
  system.runInterval(() => {
    for (const player of world.getPlayers()) {
      const main = player.getComponent("minecraft:inventory")?.container?.getItem(player.selectedSlotIndex);
      // TODO: also check off-hand
      const holding = main && (main.typeId === TOTEM_BLACK || main.typeId === TOTEM_RED);

      const wasHolding = getPlayerData(player, "sst:holdingTotem", false);
      if (holding && !wasHolding) {
        onTotemEquip(player);
      } else if (!holding && wasHolding) {
        onTotemUnequip(player);
      }
      setPlayerData(player, "sst:holdingTotem", holding);
    }
  }, 5);

  // Lethal hit save would hook into entityHurt / beforeEvents or a custom component
  debug("totem module ready (skeleton)");
}

function onTotemEquip(player) {
  debug(`${player.name} entered monarch mode`);
  // TODO: apply Strength II, spawn Beru if needed, enable System window, wings, halo, skills
  setPlayerData(player, "sst:monarch", true);
}

function onTotemUnequip(player) {
  // Short-drop grace: only store army if away > 5 seconds
  const dropTime = Date.now();
  setPlayerData(player, "sst:totemDropAt", dropTime);

  system.runTimeout(() => {
    const stillDropped = !getPlayerData(player, "sst:holdingTotem", false);
    const droppedAt = getPlayerData(player, "sst:totemDropAt", 0);
    if (stillDropped && Date.now() - droppedAt >= 5000) {
      debug(`${player.name} stored army (totem away > 5s)`);
      // TODO: call army.storeAll(player)
      setPlayerData(player, "sst:monarch", false);
    }
  }, 100); // 5 seconds = 100 ticks
}
