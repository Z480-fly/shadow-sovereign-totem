/**
 * Shadow Sovereign Totem v2.3.1 – Main entry point
 *
 * This is a skeleton. Wire up the real systems as they are implemented.
 */

import { world, system } from "@minecraft/server";

// Modular systems (stubs)
import { initTotem } from "./totem.js";
import { initArmy } from "./army.js";
import { initStaffUI } from "./staff_ui.js";
import { initPowers } from "./powers.js";
import { initSkills } from "./skills.js";
import { initRealm } from "./realm.js";
import { initGates } from "./gates.js";
import { debug } from "./utils.js";

world.afterEvents.worldLoad.subscribe(() => {
  debug("Shadow Sovereign Totem BP loaded (skeleton)");
});

// Initialize subsystems
initTotem();
initArmy();
initStaffUI();
initPowers();
initSkills();
initRealm();
initGates();

// Keep a low-frequency tick for future systems (mana regen display, etc.)
system.runInterval(() => {
  // Placeholder – real logic will live in the modules
}, 20);
