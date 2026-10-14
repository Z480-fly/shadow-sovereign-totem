/**
 * Staff item + ActionForm / ModalForm menus
 */

import { world, system } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { debug } from "./utils.js";

const STAFF_ID = "sst:shadow_staff"; // replace with real item id

export function initStaffUI() {
  world.afterEvents.itemUse.subscribe(async (ev) => {
    const { source: player, itemStack } = ev;
    if (!itemStack || itemStack.typeId !== STAFF_ID) return;

    // Sneaking = weapon form menu (so bows/tridents can charge)
    if (player.isSneaking) {
      await openFormMenu(player);
    } else {
      await openMainMenu(player);
    }
  });

  debug("staff_ui module ready (skeleton)");
}

async function openMainMenu(player) {
  const form = new ActionFormData()
    .title("Shadow Sovereign")
    .body("Choose a category")
    .button("System Window")
    .button("Army")
    .button("Travel")
    .button("Tools")
    .button("Skills")
    .button("Settings");

  const res = await form.show(player);
  if (res.canceled) return;

  switch (res.selection) {
    case 0: await openSystem(player); break;
    case 1: await openArmy(player); break;
    case 2: await openTravel(player); break;
    case 3: await openTools(player); break;
    case 4: await openSkills(player); break;
    case 5: await openSettings(player); break;
  }
}

async function openSystem(player) {
  // TODO: show level, mana, stats, look-at info explanation
  player.sendMessage("§8[System] Window stub – spend points, view mana, etc.");
}

async function openArmy(player) {
  const form = new ActionFormData()
    .title("Army")
    .button("Roster")
    .button("Summon from shadow")
    .button("Send a rank back")
    .button("Fallen soldiers")
    .button("Guard someone")
    .button("Status");
  await form.show(player);
}

async function openTravel(player) {
  const form = new ActionFormData()
    .title("Travel")
    .button("Shadow Realm")
    .button("Dimensional Rift")
    .button("Shadow Constructs")
    .button("Go back");
  await form.show(player);
}

async function openTools(player) {
  const form = new ActionFormData()
    .title("Tools")
    .button("Powers")
    .button("Open a Gate")
    .button("Freeze / Unfreeze")
    .button("Staff form")
    .button("Kasaka's Venom Fang")
    .button("Bottle City")
    .button("Shadow Prison");
  await form.show(player);
}

async function openSkills(player) {
  player.sendMessage("§8[Skills] Stealth, Bloodlust, Astral Projection, Quicksilver, Killing Intent…");
}

async function openSettings(player) {
  player.sendMessage("§8[Settings] Owner-only options (debug, caps, allowed players, diagnostics)");
}

async function openFormMenu(player) {
  const form = new ActionFormData()
    .title("Staff Form")
    .button("Netherite Sword")
    .button("Netherite Axe")
    .button("Mace")
    .button("Trident")
    .button("Bow")
    .button("Crossbow")
    .button("Back to Staff")
    .button("Open main menu");
  await form.show(player);
}
