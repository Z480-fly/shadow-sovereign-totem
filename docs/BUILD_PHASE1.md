# Build Phase 1 – Awakening Spawn + Gate Plaza

Concrete, Survival-friendly build order for the first slice of the Shadow Monarch's Domain,
**plus the complete in-game text set** (lectern books + every sign) ready to type into a world.

Everything here works with **vanilla settings + both addon packs enabled, no experiments**.
Recommended world: Survival, Hard, natural generation.

---

## 0. Verified reference (pulled from the live repo @ `94e8d89`)

Source of truth: `Shadow_Sovereign_Totem_RP/texts/en_US.lang`, `Shadow_Sovereign_Totem_BP/items/*.json`,
`Shadow_Sovereign_Totem_BP/recipes/shadow_sovereign_totem.json`.

### Item IDs used by this map
| Identifier | Display name (lang) | Color |
|---|---|---|
| `shadow_totem:shadow_sovereign_totem` | Shadow Sovereign Totem | §5 purple |
| `shadow_totem:shadow_sovereign_totem_awakened` | Shadow Sovereign Totem (Awakened) | §c red |
| `shadow_totem:shadow_staff` | Shadow Sovereign Staff | §5 purple |
| `shadow_totem:shadow_blade` | Shadow Blade | §c red |
| `shadow_totem:kasaka_fang` | Kasaka's Venom Fang | §5 purple |
| `shadow_totem:freeze_sword` | Freeze Sword | §b aqua |
| `shadow_totem:boss_cleaver` | Warlord's Cleaver | §6 gold |
| `shadow_totem:boss_greatsword` | Overlord's Greatsword | §6 gold |
| `shadow_totem:power_*` (17 items) | Ender Step, Fire Lance, Detonate, Withering Strike, Sonic Boom, Titan Slam, Fang Line, Web Bind, Bone Volley, Dragon's Wrath, Guardian Beam, Phantom Dive, Axe Rampage, Fire Barrage, Levitation Beam, War Cry, Hex | §d light purple |

**Black totem recipe** (real, exists in repo): 3×3 shaped — 8 `minecraft:totem_of_undying` ring + 1 `minecraft:beacon`
center (`["TTT","TBT","TTT"]`). The spawn chest is the shortcut, not a replacement.
Items stack to 64 and the totem works in the **main hand or off-hand**.

### Shadow classes and ranks (from `docs/DESIGN.md` + entity lang keys)
| Rank | Classes | Example entity ids |
|---|---|---|
| E | Plain Soldier | `shadow_totem:shadow_soldier` |
| D | Archer | `shadow_totem:shadow_archer` |
| C | Brute | `shadow_totem:shadow_brute` (also `shadow_trident`) |
| B | Mage, Blaze, Enderman | `shadow_totem:shadow_mage`, `:shadow_blaze`, `:shadow_enderman` |
| A | Guardian, Wither | `shadow_totem:shadow_guardian`, `:shadow_wither` |
| S | Warden, Wyrm, Titan, Reaper, Player Shadow | `shadow_totem:shadow_warden`, `:shadow_wyrm`, `:shadow_titan`, `:shadow_reaper`, `:shadow_player` |
| — | Captain Beru (free, spawns while holding a totem) | `shadow_totem:shadow_captain` |
| — | Astral Projection body | `shadow_totem:astral_body` ("Your Body") |
| — | Gate mobs | `gate:goblin`, `gate:orc`, `gate:knight`, `gate:demon`, `gate:warlord`, `gate:overlord` |

**Mana capacity** = `60 + 6 × playerLevel + 5 × INT`. Capacity only limits how many shadows are
**out at once**. Inside the player's Shadow Realm it is unlimited. At level 1 the cap is 66, and plain
soldiers cost ~2 — so the first ~10 soldiers are never mana-gated. That is why the pens below are small.

### Known repo gap (not fixable from git)
The RP in git is only `manifest.json` + `texts/en_US.lang` + `texts/languages.json`.
`item_texture.json`, the PNGs, entity defs, and `scripts/main.js` are **still only in the `.mcaddon`**,
and the repo has **no Releases yet**. Item JSONs reference icon keys such as `shadow_totem:black_icon`,
so item icons will render as missing textures until `item_texture.json` + `textures/items/*.png` arrive.
Nothing in this document depends on that — it is all vanilla blocks, signs, and books.

---

## 1. Part A – Awakening Spawn (Safe Hub)

**Location**: world spawn. Clear a ~40-block-radius flat area.

### A1. Ruined Chapel of the Monarch (≈15×20 footprint)
Palette: blackstone, polished blackstone bricks, chiseled blackstone, deepslate tiles,
cracked deepslate bricks, soul lanterns, soul campfires, a few wither roses.

- **Throne fragment** on a 3-block dais at the north end — stairs + slab throne, one side crumbled,
  debris blocks scattered around it.
- Two broken columns flanking the aisle (3 blocks tall, top blocks missing or shifted).
- Partial roof: leave the center open so soul-lantern light pools on the floor.
- Soul soil patches under the dais.

### A2. Monarch's Chest (against the north wall, beside the throne)
| Item | Count |
|---|---|
| `shadow_totem:shadow_sovereign_totem` | 1 |
| `shadow_totem:shadow_staff` | 1 |
| Iron Sword | 1 |
| Bread | 16 |
| Lanterns | 16 |
| Name Tag | 1 |

### A3. Training Pens (≈25 blocks east of the chapel)
1. **Pen of the Fallen** — zombie spawner room or a dark 9×9 sealed room with a viewing slit.
   Expect ~10 E-rank Plain Soldier extractions.
2. **Pen of Bones** — skeleton variant (future D-rank Archers).

### A4. Spawn lectern — book "The Monarch's Awakening"
Author: `The System` · 8 pages, each kept well under the in-game page character limit so it fits.

> **Page 1**
> You are awake, and the shadows are listening.
> This is the ruin of the first Monarch's chapel. Take what remains, then take the blackstone road north.
>
> — a voice you cannot place

> **Page 2 — THE TOTEM**
> Hold the Shadow Sovereign Totem in your hand or your off-hand.
> While you hold it you are the Monarch: your Captain answers, your army follows, and the System opens.

> **Page 3 — SET IT DOWN AND NOTHING IS LOST**
> Put the totem away for a moment and nothing is lost. But if you die, log out, or leave it behind for long, your army retreats into shadow — and returns the moment you hold a totem again.

> **Page 4 — EXTRACTION**
> Slay anything that lives. Slain creatures rise again as your shadow soldiers, saved the instant they stand.
> Let your soldiers kill too — their kills extract just the same.

> **Page 5 — MANA**
> Mana is not spent. It is how many shadows you can hold in the world at once.
> Capacity = 60 + 6 x level + 5 x INT.
> Raise Intelligence to raise the size of your army.

> **Page 6 — THE SYSTEM**
> Hold the Shadow Staff and use it to open the System: your look-at target, level, stats, the army roster, and every skill you have unlocked.
> The pens east of the chapel are for your first ten soldiers.

> **Page 7 — GATES**
> When your army stands, walk the road north to the Gate Plaza. Open a Gate from the Staff: Tools, then Open Gate.
> Start at rank E. Walk in, clear the wave, and extract the fallen. The return portal holds for 20 minutes.

> **Page 8 — THE REALM**
> Last: your own Shadow Realm. Staff, Travel, Enter Realm. A castle beyond the End where mana does not limit you.
> Everything you take rises for you there.
> Now go. The shadows wait.

### A5. Safety ring
Light the hub so nothing spawns within 40 blocks; hostiles only in the pens.
Optional low wall with one opening toward the road.

---

## 2. Part B – The Blackstone Road

Straight 5-wide road from the chapel **north ~120 blocks** to the plaza.
Palette: polished blackstone, blackstone bricks, chiseled blackstone every 8th block, soul lanterns on
fence posts every 10 blocks, cracked blocks + rubble at the edges so it reads as an old royal road.

Milestones: **+40** sealed shadow rift (2-block crying-obsidian crack, soul campfire under it) ·
**+80** side path east to the Extraction Grounds (Phase 2) · **+120** plaza south entrance.

---

## 3. Part C – Gate Plaza

Center 120 blocks north of spawn, on the road axis.

### C1. Plaza base
- Octagonal plaza, ~30-block diameter, blackstone-brick floor with a deepslate-tile inlay ring.
- 4-block perimeter wall with battlements; one wide south entrance, two small side doors.
- Center: 5-block circular dais with a soul-lantern beacon pillar inside a blackstone cage.

### C2. Gate arches (6 rank arches + the center dais = 7 arch structures)

The real Gate is opened from the staff (Tools → Open Gate) and teleports into the addon's temporary
arena — **the arches are markers and briefing points, not portals**. The signs must say so, or players
will stand in them wondering why nothing happens.

| # | Rank | Accent block | Armor-stand display |
|---|---|---|---|
| 1 | E | stone bricks | leather |
| 2 | D | deepslate tiles | chainmail |
| 3 | C | polished deepslate | iron |
| 4 | B | blackstone | golden |
| 5 | A | polished blackstone | diamond |
| 6 | S | crying obsidian accents | netherite |
| center | — | — | black totem on an item frame |

### C3. Spectator balcony
West wall: 3 stepped deepslate rows overlooking the dais — the social hub where friends watch the army march in.

### C4. Service nook (east side)
- **Storage wall** — 8 double chests (Weapons / Armor / Totems / Power Orbs / Boss Gear / Blocks / Food / Misc).
- **Crafting corner** — crafting table, anvil, grindstone, brewing stand.
- **Trade counter** — armorer + cleric villagers behind counters.

### C5. Plaza lectern — book "Gate Briefing"
Author: `The System` · 5 pages.

> **Page 1**
> A Gate is torn open, not built. The arches around this plaza mark the ranks you have earned the right to attempt. Hold the Shadow Staff and use it: Tools, then Open Gate.

> **Page 2 — RANKS**
> E Gate Goblins. D Orcs. C Knights. B Demons. A veterans and named elites. S Warlords and Overlords.
> The rank you open decides the wave, the boss, and the loot.

> **Page 3 — INSIDE**
> Walking into a Gate takes you to a walled arena: waves first, then rare named elites, then the boss. Stronger monsters, more experience, and every one of them can be extracted.

> **Page 4 — THE BOSS**
> A Gate Warlord drops the Warlord's Cleaver; an Overlord drops the Overlord's Greatsword.
> Those weapons can raise a Champion — a named soldier that keeps its gear, level, and kills forever.

> **Page 5 — BEFORE YOU GO**
> Bring your army through: soldiers follow, and your Captain answers the totem.
> The return portal stays open about 20 minutes. If it closes, leave from the staff menu.

### C6. Obelisk lectern — book "The Domain" (west of the plaza, ~60 blocks)
Author: `The System` · 4 pages.

> **Page 1**
> The Shadow Realm is your own domain: a castle beyond the End, raised the first time you enter. Reach it from the Staff: Travel, Enter Realm.

> **Page 2**
> Your realm is yours alone and sits far from every other player's. No one arrives uninvited, and nothing you store there can be taken.

> **Page 3**
> Inside, mana does not limit you. Your whole collection rises at once and lines up in the throne room, Captain at the throne, elites at the dais.

> **Page 4**
> The gallery holds what you choose to keep: bottled cities, frozen statues, trophies.
> The lecterns there open Rift, Prison, and Bottled Cities.

---

## 4. The complete sign set

Authored for the classic **4 lines × ≤15 characters** sign editor, so every line fits without clipping.
Use dyes to tint the sign (black/dark oak) and glow ink sacs to make text glow indoors; § formatting codes
cannot be typed in Bedrock's sign editor, so the colors below are described by dye, not by code.

| Where | Line 1 | Line 2 | Line 3 | Line 4 | Dye / glow |
|---|---|---|---|---|---|
| Chest (chapel) | `TAKE THE TOTEM` | `AND THE STAFF` | `HOLD ONE` | `YOU ARE MONARCH` | purple dye, glowing |
| Throne fragment | `THRONE OF THE` | `FIRST MONARCH` | `SIT - THEN` | `WALK NORTH` | black dye, glowing |
| Name tag hint (chest side) | `NAME TAG` | `RENAME YOUR` | `FIRST SHADOW` | `WHEN IT RISES` | plain |
| Pen of the Fallen | `PEN OF THE` | `FALLEN` | `KILL - THEY` | `RISE FOR YOU` | green dye |
| Pen of Bones | `PEN OF BONES` | `ARCHER RANK D` | `KILL 10 HERE` | `FIRST ARMY` | pale oak |
| Road +40 | `SHADOW RIFT` | `SEALED` | `NOT YET` | `YOURS` | black, glowing |
| Road +80 | `EXTRACTION` | `GROUNDS ->` | `PHASE 2` | `EAST PATH` | plain |
| Road +120 | `GATE PLAZA` | `ENTER` | `RANKS E TO S` | `STAFF TO OPEN` | black, glowing |
| Plaza dais | `HOLD THE STAFF` | `USE - TOOLS` | `- OPEN GATE` | `RETURN 20 MIN` | purple, glowing |
| Arch 1 | `RANK E` | `GOBLINS` | `SAFE START` | `EXTRACT ALL` | white dye |
| Arch 2 | `RANK D` | `ORCS` | `NAMED ELITES` | `STRONGER WAVES` | light gray dye |
| Arch 3 | `RANK C` | `KNIGHTS` | `BRUTES RISE` | `BRING ARMY` | gray dye |
| Arch 4 | `RANK B` | `DEMONS` | `DROPS POWERS` | `WATCH YOUR MANA` | black dye |
| Arch 5 | `RANK A` | `VETERANS` | `ONLY STRONG` | `MONARCHS` | black, glowing |
| Arch 6 | `RANK S` | `OVERLORD` | `DROPS CHAMPION` | `BLADE` | black, glowing |
| Balcony | `SPECTATOR` | `BALCONY` | `WATCH THE` | `ARMY MARCH` | plain |
| Storage wall | `STORAGE` | `TOTEMS - ORBS` | `BOSS GEAR` | `MISC` | plain |
| Storage wall (2) | `POWER ORBS` | `ARE BOUND TO` | `YOUR LIVING` | `SOLDIERS` | purple dye |
| Crafting corner | `CRAFT - REPAIR` | `SMELT` | `BREW` | `BEFORE GATES` | plain |
| Trade counter | `TRADES` | `ARMORER` | `CLERIC` | `EMERALDS ONLY` | plain |
| Obelisk (front) | `THE SHADOW` | `REALM` | `STAFF - TRAVEL` | `ENTER REALM` | black, glowing |
| Obelisk (back) | `NO MANA LIMIT` | `INSIDE YOUR` | `OWN DOMAIN` | `ALL RISE` | black, glowing |

> `A RANK 1-6` sign variant: if you prefer numerals, swap line 1 for `RANK 1`…`RANK 6` and put the
> difficulty name on line 2 — the plaza lectern book already spells out the ranks in full.

---

## 5. Acceptance checklist

**Structure**
- [ ] Chapel with chest (black totem + staff), lectern book, dais throne, two broken columns.
- [ ] Both pens functional; hub fully lit so hostiles spawn only in the pens.
- [ ] Road north with rift marker, both signposts, soul-lantern fencing.
- [ ] Plaza: dais, 6 rank arches + center arch, balcony, storage / crafting / trade nook.
- [ ] Obelisk west of the plaza with front + back signs and its lectern book.

**Text**
- [ ] All 3 books authored in game (`The Monarch's Awakening`, `Gate Briefing`, `The Domain`) and placed on lecterns.
- [ ] All 22 signs placed with the exact text above; every line fits on the sign with no clipping.
- [ ] Arch signs name the rank and the correct mobs; dais sign explains the staff menu path.

**Playtest (Survival, both packs enabled)**
- [ ] Hold totem → Beru appears → 10 zombie kills → ~10 soldiers (nothing rejected by mana).
- [ ] Staff opens the System: level, stats, mana shown; names/ranks on soldiers are readable.
- [ ] Staff → Tools → Open Gate rank E → walk in → wave cleared → at least one shadow extracted.
- [ ] Boss kill → `shadow_totem:boss_cleaver` / `boss_greatsword` dropped → Champion raised.
- [ ] Return portal still works ~20 min later.
- [ ] Staff → Travel → Enter Realm → castle generates → army lines up → mana limit gone inside.
- [ ] Power orb picked up from an extracted soldier is bound (useless if handed to a second player).
- [ ] Totem away for <5 s changes nothing; logout/death stores the army and it returns with the totem.

**Export**
- [ ] `.mcworld` with **both** packs applied (and a second copy that expects the addon installed separately).
- [ ] Pack icon + world icon set; world description mentions "requires Shadow Sovereign Totem v2.3.1".

## 6. Deferred to later phases
- Phase 2: Extraction Grounds (east path), shadow rifts, Titan/Brute pens.
- Phase 3: Warden Hollow, Blaze/Ghast Cliffs, Enderman Grove, Wither Skeleton Catacombs.
- Phase 4: Coliseum + Monarch's Trial gauntlet.
- Optional: command-block / ticking-area events — keep away from the addon's force-loaded castle and bottle zones.
