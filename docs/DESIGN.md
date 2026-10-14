# Design Deep-Dive – Shadow Sovereign Totem v2.3.1

This document explains the intended systems so collaborators (and future you) can implement or extend them cleanly.

## 1. Totem & Monarch Mode

- **Black Totem**: craftable (8 Undying + 1 Beacon). On lethal hit → vanilla-style recovery, becomes Red. Also fully activates monarch mode (soldiers, Beru, powers, System, skills, wings, halo).
- **Red / Awakened Totem**: same activation + one-time life save. Holding in main or off-hand is enough.
- **Stacking**: both stack to 64. Consuming one from the stack triggers the effect / surge.
- **Awakening Surge**: +10% to all stats + mana capacity for 5 minutes after any pop.
- **Short drop protection**: putting the totem away for < 5 s does **not** store the army. Longer / logout / death does.

## 2. Army & Mana

### Extraction
Any kill by the player **or** any of their soldiers can extract a shadow (unless extraction-fail setting is on and the mob is much stronger).

### Classes → Rank → Mana Cost (examples)
| Class              | Rank | Approx Mana |
|--------------------|------|-------------|
| Plain Soldier      | E    | 2           |
| Archer             | D    | 3           |
| Brute              | C    | 5           |
| Mid elites (Mage, Blaze, Enderman…) | B | 8 |
| Guardian / Wither  | A    | 10–12       |
| Warden / Wyrm / Player Shadow | S | 15–20 |
| Titan / Reaper     | S    | high        |
| Beru               | —    | free        |

### Mana Capacity
```
capacity = 60 + (6 × playerLevel) + (5 × INT points)
```
- Only limits how many shadows can be **out** at the same time.
- Inside the player’s personal Shadow Realm → unlimited (whole collection comes out).
- Leaving the realm sends excess back to “In shadow”.
- Stored shadows wait and can be summoned by rank or name (Army → Summon from shadow).

### Persistence
- Every shadow is saved the instant it rises (and on logout / death / longer totem drop).
- Transit list is used before any teleport so soldiers never spawn in the void.
- Elites / kept / named shadows keep rank, armor, level, kills, perks.

### Soldier Behavior
- Hunt all nearby hostiles (no LOS required) + anything that damages the owner.
- Only attack non-hostile mobs the owner has hit.
- Level from their own kills (every 5 kills → +1 level → more HP/resistance/Strength).
- Name tags show rank, level, armor tier, Armed level, Fire, Thorns, Totem, perk.

## 3. Captain Beru
- Spawns when a totem is held (unless “in shadow”).
- High HP, regen, knockback immunity, periodic area blast.
- Respawns ~30 s after death.
- Can be manually put into / called from shadow via staff menu.
- Keeps armor, level, kills across deaths and sessions.

## 4. Staff & UI

Menu is always available when holding the staff (sneak + use for weapon forms so bows/tridents charge normally).

Grouped categories:
- **System Window** – action-bar look-at info (25 blocks), levels, stat allocation, skills list, mana, help text.
- **Army** – roster (rename / keep / release / gear), summon by rank, send rank back, fallen revive, guard duty, status.
- **Travel** – enter/leave personal Shadow Realm, Dimensional Rift (random / coords / saved locations up to 20), Shadow Constructs (temporary reinforced deepslate structures).
- **Tools** – Powers list, Open Gate, Freeze tools, Staff forms, Kasaka’s Venom Fang, Bottle City, Shadow Prison management.
- **Settings** (first staff user = owner) – debug messages, System window toggle, name tags, restrict staff/blade, army size options, allowed players list, diagnostics, scale mobs, auto-enchant gear, auto-summon, extraction fail chance.

## 5. Powers
- On extraction of a qualifying kill, the new soldier carries the corresponding power.
- Power appears as a colored orb item in the player’s inventory.
- Using the orb fires the power (auto-aim nearest living entity in look direction).
- Power is lost if the carrying soldier dies, army is stored, or totem is put away long enough.
- Calling the army / elite rising again restores the items.
- Dropped power items are useless to other players (bound to living soldiers).

## 6. Skills
Unlocked by player level while a totem is held. Listed in System Window / Skills menu.

Examples:
- Passive: Haste, Regeneration, Fire Ward, Gill Lungs, Ironskin, Shadow Sight…
- Active: Leap, Second Wind, Stealth, Bloodlust, Astral Projection, Quicksilver, Killing Intent.

**Astral Projection** special rules: body stays (invisible), spirit flies with creative flight, can damage but cannot place/break, auto-return on body damage or 45 s timer.

## 7. Shadow Realm (Domain)
- Unique location per player in the End, spaced ~300 blocks apart.
- First visit generates a dark castle (courtyard 121×121, keep + throne room, 4 towers, gallery plaza with plinths, chests, crafting stations, lecterns).
- Atmosphere: soul particles + ambient cave sounds.
- Army lines up in the throne room on entry (Beru by throne, elites near dais).
- Unlimited mana while inside.
- Gallery holds bottled city miniatures and frozen statues.
- Lecterns open Rift / Prison / Bottled Cities menus.

## 8. Gates
- Tools → Open a Gate → rank E–S.
- Tears open a portal; walking in teleports to a temporary walled arena containing the wave + rare named Elites + Boss (Warlord / Overlord).
- Return portal stays open ~20 minutes.
- Monsters have custom bodies/powers and are extractable. Boss drops a weapon that can create a Champion soldier.

## 9. Other Systems
- **Shadow Prison** (via Shadow Blade / Kasaka?): sealed Nether prison with cells. Species ban while a prisoner of that type exists. Mining Fatigue for jailed players. Visit / release / lift all bans.
- **Player Shadow**: if a player kills you while you hold a red totem → they permanently gain a stronger named shadow of you (once per player).
- **Sovereign Wings**: while holding black/red totem, empty chest slot gets a real elytra with custom texture (pack-wide elytra retexture side-effect). Sneak while gliding = forward surge.
- **Staff weapon forms**: netherite sword / axe / mace / trident / bow / crossbow with high enchants. Form menu via sneak+use.
- **Bottled Cities**: capture an area as a compact 8×8×8 shelf miniature (place in world or gallery).

## 10. Implementation Priorities (for skeleton)
1. Totem detection + monarch mode activation / deactivation + short-drop grace.
2. Basic army spawn / despawn / persistence (scoreboard or dynamic properties).
3. Staff UI (ActionForm / ModalForm).
4. Mana calculation + summon limits.
5. Look-at System Window (entity query in look direction).
6. Personal realm generation (structure or command-based build with force-load).
7. Powers & skills hooks.
8. Gates & travel safety (transit list).

Use `@minecraft/server` system events, player inventory, dynamic properties, and scoreboards for persistence. Prefer component-based entity definitions for custom soldier models where possible.
