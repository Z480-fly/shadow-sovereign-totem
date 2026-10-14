/**
 * Personal Shadow Realm in the End – castle generation, unlimited mana, gallery
 */

import { debug } from "./utils.js";

export function initRealm() {
  debug("realm module ready (skeleton)");
}

/**
 * First visit: force-load area, build courtyard + keep + towers + gallery once,
 * then verify throne / chests. Subsequent visits just teleport + line up army.
 */
export function enterRealm(player) {
  debug(`enterRealm ${player.name} (stub – generate or teleport)`);
  // TODO: calculate unique End coords (player uuid hash → offset * 300)
  // TODO: if not built → run build script with force-load
  // TODO: set unlimited mana flag while dimension === End && in own realm
}

export function leaveRealm(player) {
  debug(`leaveRealm ${player.name}`);
  // send excess soldiers back to shadow storage
}
