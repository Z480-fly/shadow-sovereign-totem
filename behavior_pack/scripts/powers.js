/**
 * Absorbed powers as inventory orbs + auto-aim use
 */

import { world } from "@minecraft/server";
import { debug } from "./utils.js";

export function initPowers() {
  world.afterEvents.itemUse.subscribe((ev) => {
    const { source: player, itemStack } = ev;
    if (!itemStack || !itemStack.typeId.startsWith("sst:power_")) return;

    // TODO: verify the power is still carried by a living soldier of this player
    // TODO: find nearest living entity in look direction and fire the power
    debug(`${player.name} used power ${itemStack.typeId} (stub)`);
  });

  debug("powers module ready (skeleton)");
}
