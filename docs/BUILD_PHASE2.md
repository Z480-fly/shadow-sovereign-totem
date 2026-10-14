# Build Phase 2 – The Extraction Grounds

The second slice of the Shadow Monarch's Domain: the hunting zone east of the Blackstone Road.
Phase 1 ([`BUILD_PHASE1.md`](BUILD_PHASE1.md)) teaches the loop at the chapel and the Gate Plaza;
Phase 2 is where the player actually **grows an army** between Gates — where levels 5→15 are earned,
the first mid-rank shadows rise, and the Shadow Realm becomes reachable.

Same rules as Phase 1: vanilla generation, Survival, **both packs enabled, no experiments**,
and every block a player can place by hand.

---

## 0. Verified reference (live repo @ `94e8d89`)

Everything the player does here is addon behaviour, not map scripting. The map only supplies
terrain, danger, and instructions.

### Kills are the currency
- A kill by the player **or by any of their soldiers** extracts a shadow, unless the
  extraction-fail setting is on and the target is far stronger than the player.
- Soldiers hunt **all nearby hostiles without needing line of sight**, plus anything that damages you.
  They only attack non-hostile mobs you have already hit — so the pens below are safe for villagers/pets.
- **Every 5 kills by a soldier** raises that soldier a level: more health, resistance, and strength.

### What this zone should produce (levels 5 → 15)
| Class | Rank | Mana | Source mobs |
|---|---|---|---|
| Plain Soldier | E | ~2 | zombie, skeleton |
| Archer | D | ~3 | skeleton (archer body), stray |
| Brute | C | ~5 | spider, husk, piglin brute |
| Mage / Blaze / Enderman | B | ~8 | witch, blaze, enderman |
| Guardian / Wither | A | ~10–12 | guardian, wither skeleton |
| Warden / Wyrm / Titan / Reaper | S | 15–20 | warden, ravager, iron golem |
| Captain Beru | — | free | spawns whenever a totem is held |

Mana capacity `= 60 + 6 × level + 5 × INT` **only limits how many shadows are out at once**.
At level 10 with 10 INT it is 170 — the cap this zone is balanced around, with Beru free.

### Powers relevant here (real `shadow_totem:power_*` items)
`power_ender_step` (Ender Step) from Endermen · `power_fire_lance`, `power_fire_barrage` from Blaze ·
`power_wither_strike` from Wither Skeletons · `power_bone_volley` from Skeletons ·
`power_fangs`, `power_web_bind` from spiders/cave spiders · `power_sonic_boom` from the Warden ·
`power_titan_slam` from iron golems/ravagers.

Power orbs are **bound to the living soldier that carries them**. Killing that soldier, storing the army,
or leaving the totem down for long loses the orb until that soldier rises again — a second player cannot
use a dropped orb. Say this on a sign, or players will trade them and be confused.

### Skills unlock by level while a totem is held (real thresholds)
Haste 5 · Regeneration 10 · Stealth 12 · Fire Ward 15 · Bloodlust 15 · Astral Projection 18 ·
Gill Lungs 20 · Quicksilver 20 · Leap 25 · Killing Intent 25 · Ironskin 30 · Second Wind 40 · Shadow Sight 50

That is the progression spine of this zone — the milestone wall below is built directly on it.

### Known repo gap (unchanged)
`item_texture.json`, PNGs, entity defs, and `scripts/main.js` still live only in the `.mcaddon`, and the
repo has **no Releases yet** (verified). Item icons render as missing textures until then. Nothing in
Phase 2 depends on it — this zone is vanilla blocks, signs, and books.

---

## 1. Zone layout

**Location**: enter from the Phase 1 Road `+80` signpost, heading east. Footprint roughly **120 × 120**.
Terrain: rolling hills and a dark oak wood, with the canopy kept low enough to stay dim — dim ground
means spawns, and spawns are the point. A soul-lantern trail every ~15 blocks keeps it navigable
without lighting the whole zone.

### 2A. Hunter's Camp (entry, safe)
Spawn-proof bubble around the camp only (lanterns + torches), so the danger starts the moment the trail does.
- Two tents: stripped dark oak + white/light gray wool, campfire with a cauldron and a cook pot setup.
- **Two double chests**: arrows ×64, a bow, a crossbow, stone swords, bread ×32, torches ×32.
- **Lectern** with the *Field Manual: Extraction* book (section 2).
- Fence perimeter with one gap east; signpost back to the Blackstone Road.

### 2B. Dark Wood (the grind)
- Dense dark oak, low canopy, occasional unlit pockets — the spawn engine of the zone.
- Three clearings connected by the lantern trail; a cairn (cobblestone + soul soil) at each fork.
- No farms, no spawner blocks: the wood itself is the farm, so mana and levels still matter.

### 2C. Rift Hollows (north-east edge)
Three sealed rifts — flavor, navigation, and Phase 3 hooks. Each is a 2-block crying-obsidian crack
over soul soil, with a soul campfire wisp and a sign.
1. **Rift of the Void** → Endermen → `power_ender_step`.
2. **Rift of Embers** → Blaze Cliffs / fire powers (Phase 3).
3. **Rift of the Deep** → Warden Hollow (Phase 3, S-rank only).

A lectern here holds *Rift Watch* (section 4) explaining that rifts are sealed until the monarch
commands them — the real Gates are opened from the staff.

### 2D. Brute Pens (south-east, walled, deliberately dangerous)
Two walled pens with iron-bar windows so the player can study the target before opening the gate.
- **Iron Golem pen** — the Titan route (`shadow_totem:shadow_titan`, S-rank, 15–20 mana).
  Kill it with soldiers present, or it will kill them. Warn about extraction fail.
- **Ravager pen** — the Reaper/Brute route (`shadow_totem:shadow_reaper`, `shadow_totem:shadow_brute`).
- Both pens get the same three-line warning sign; this is the one place in Phase 2 where a
  low-level player can lose a whole army.

### 2E. The Extraction Pit (centre of the zone)
A sunken circular pit, **25 blocks across, 4 deep**, with rough stone steps down one side and a
**3-row viewing ledge** on the rim.
- Purpose: drop a wave in and let the army do the work while the player watches — the visual
  payoff of the whole addon, and the fastest soldier-levelling spot in the zone.
- **No hoppers, no auto-collection.** Soldiers do not pick up drops, and the pit should not
  become a resource printer — the reward is shadows and levels, not iron.
- A lectern on the ledge holds *Rift Watch* (rift lore + the orb-binding rule).

### 2F. Salvage Outpost (north side, mid-way)
The respawn anchor and resupply point for the zone.
- Small bunker: bed (set spawn), double chest, anvil, grindstone, smithing table, lanterns.
- Ladder up a **watchtower** with a clear sightline back west to the Gate Plaza.
- **Milestone wall**: the level thresholds above, as a lectern book plus three trail signs
  (section 5) so players always know what unlocks next.
- Signs pointing west (Gate Plaza) and east (Phase 3 Trials).

### 2G. Connection back to Phase 1
The Road `+80` signpost already reads `EXTRACTION / GROUNDS -> / PHASE 2 / EAST PATH`.
Phase 2 upgrades it into a proper trailhead: a stone arch, two lanterns, and the camp's own sign.

---

## 2. Camp lectern — *Field Manual: Extraction*

Author: `The System` · 7 pages.

> **Page 1**
> Everything east of this camp is hunting ground. Nothing here is scripted: you make your own waves out of whatever already lives in the dark wood.

> **Page 2 — START SMALL**
> Kill ten zombies here, not ten Wardens. Plain soldiers cost about 2 mana each, and at level 1 your capacity is 66. Your first army is never refused for lack of mana.

> **Page 3 — LET THEM WORK**
> Your soldiers hunt every hostile nearby, whether or not they can see it, and anything that hurts you. Their kills extract just like yours do.

> **Page 4 — THEY GROW**
> Every five kills raises one of your soldiers a level: more health, more resistance, more strength. The ones you keep forever are the ones that earned it.

> **Page 5 — YOUR LEVEL MATTERS MORE**
> Your own kills raise you, and levels give stat points. Put them into Intelligence: every 5 points is 5 more mana, and mana is how many shadows stand beside you.

> **Page 6 — THE FANG**
> Kasaka's Venom Fang lives on the staff's Tools list. Every kill it takes sharpens it, and its lore shows how far it has come. Bloodlust opens at level 15 and keeps you standing while it bites.

> **Page 7 — THE GALLERY**
> The Freeze Sword turns a mob to a statue and sends it to your realm's gallery, but only once your Shadow Realm exists. Freeze what you are proud of, not what is in your way.

---

## 3. Outpost lectern — *The Monarch's Milestones*

Author: `The System` · 5 pages.

> **Page 1**
> Skills do not arrive on request. They unlock as your level rises while a totem is held, one by one, and then they are yours to keep.

> **Page 2 — THE LADDER**
> 5 Haste. 10 Regeneration. 12 Stealth. 15 Fire Ward and Bloodlust. 18 Astral Projection. 20 Gill Lungs and Quicksilver. 25 Leap and Killing Intent. 30 Ironskin. 40 Second Wind. 50 Shadow Sight.

> **Page 3 — ASTRAL PROJECTION**
> Worth the wait. Your body stays where you left it, unseen, while your spirit flies free with creative flight. You can strike, but not build or break. If your body is struck, you snap back.

> **Page 4 — BEFORE A GATE OF RANK B OR HIGHER**
> Come back here and hunt until your army is full and your soldiers are levelled. A gate wave will not wait for you to grow into it.

> **Page 5 — THEN GO WEST**
> Blackstone Road, Gate Plaza, ranks E to S. The arch you choose is the wave you fight, so choose honestly. Your shadows do not mind dying. They mind being wasted.

---

## 4. Pit lectern — *Rift Watch*

Author: `The System` · 4 pages.

> **Page 1**
> Three rifts answer at this valley's edge, and all three are sealed. They open when the monarch below commands it, which is to say: not yet.

> **Page 2 — THE VOID**
> The Rift of the Void smells of Endermen. Extract one and its step becomes your power: Ender Step, an orb you can throw into the dark.

> **Page 3 — EMBERS AND THE DEEP**
> The Rift of Embers leads to the Blaze Cliffs and the fire powers. The Rift of the Deep is not for you until your army stands at S rank: behind it waits the Warden.

> **Page 4 — YOUR ORBS ARE BOUND**
> A power orb belongs to the soldier carrying it. If that soldier dies, if you store the army, or if the totem lies down too long, the orb is gone until that soldier rises again. No other player can use it. Do not trade them.

---

## 5. The complete sign set (21 signs)

Authored for the 4-line, ≤15-characters-per-line sign editor; every line fits without clipping.
Dyes tint the planks, glow ink sacs make the text readable in the dim wood — recommended here,
since most of this zone is deliberately unlit.

| Where | Line 1 | Line 2 | Line 3 | Line 4 | Dye / glow |
|---|---|---|---|---|---|
| Trailhead arch | `EXTRACTION` | `GROUNDS` | `EAST TRAIL` | `NIGHT HUNT` | black, glowing |
| Camp chest | `TAKE BOWS` | `ARROWS` | `FOOD` | `LIGHT` | plain |
| Camp lectern | `READ FIRST` | `FIELD MANUAL` | `THEN HUNT` | `NIGHT FALLS` | purple dye |
| Trail fork (north) | `TRAIL NORTH` | `DARK WOOD` | `DIM LIGHT` | `MORE SPAWNS` | black dye |
| Trail fork (cairn) | `KEEP TOTEM` | `IN HAND` | `ARMY STAYS` | `WITH YOU` | black, glowing |
| Rift of the Void | `RIFT OF` | `THE VOID` | `ENDERMEN` | `ENDER STEP` | black, glowing |
| Rift of Embers | `RIFT OF` | `EMBERS` | `BLAZE CLIFFS` | `PHASE 3` | orange dye |
| Rift of the Deep | `RIFT OF` | `THE DEEP` | `- NOT YET -` | `WARDEN HOLD` | black, glowing |
| Golem pen (outer) | `IRON GOLEM` | `PEN` | `S RANK TITAN` | `BIG MANA` | white dye |
| Ravager pen (outer) | `RAVAGER PEN` | `S RANK` | `REAPER RISK` | `HARD HIT` | gray dye |
| Pens (warning gate) | `EXTRACTION` | `CAN FAIL` | `IF TOO WEAK` | `LEVEL FIRST` | red dye, glowing |
| Extraction pit | `DEPTHS` | `DROP THEM IN` | `LET SOLDIERS` | `FIGHT` | black, glowing |
| Pit ledge | `VIEWING` | `LEDGE` | `WATCH YOUR` | `ARMY HUNT` | plain |
| Pit ledge (2) | `FREEZE SWORD` | `TAP A MOB` | `STATUE GOES` | `TO GALLERY` | light blue dye |
| Pit ledge (3) | `KASKA FANG` | `EVERY KILL` | `MAKES IT` | `SHARPER` | purple dye |
| Outpost door | `SALVAGE` | `OUTPOST` | `BED - ANVIL` | `RESPAWN HERE` | plain |
| Outpost bed | `SLEEP HERE` | `SET SPAWN` | `PLAZA WEST` | `TRIALS EAST` | plain |
| Milestone wall | `MILESTONES` | `LEVEL UP` | `SKILLS OPEN` | `READ LEDGER` | purple, glowing |
| Trail sign (west) | `GATE PLAZA` | `WEST` | `RANKS E TO S` | `STAFF TO OPEN` | black, glowing |
| Trail sign (east) | `TRIALS` | `EAST` | `AWAIT YOU` | `PHASE 3` | black dye |
| Phase 1 boundary | `ROAD +80` | `PHASE 2` | `NORTH-EAST` | `ENTER HERE` | plain |

---

## 6. Acceptance checklist

**Structure**
- [ ] Trailhead arch at the Phase 1 `+80` signpost; trail east is walkable end to end.
- [ ] Hunter's Camp: two tents, campfire, two stocked chests, lectern, one east gap.
- [ ] Dark Wood: low canopy, three clearings, cairns at forks, lantern trail every ~15 blocks, unlit pockets preserved.
- [ ] Rift Hollows: three rifts with campfires and signs, at the zone's north-east edge.
- [ ] Brute Pens: two walled pens with iron-bar windows and the warning sign at the gate.
- [ ] Extraction Pit: 25 across, 4 deep, stepped entry, 3-row viewing ledge, no hoppers anywhere.
- [ ] Salvage Outpost: bed, chest, anvil, grindstone, smithing table, watchtower with sightline to the plaza.
- [ ] Zone is dim by design — no torch-spam; soul lanterns only on the trail.

**Text**
- [ ] All 3 books authored in game (*Field Manual: Extraction*, *The Monarch's Milestones*, *Rift Watch*) on their lecterns.
- [ ] All 21 signs placed with the exact text above; no line clips.
- [ ] Skill thresholds on *The Monarch's Milestones* match the changelog (5/10/12/15/18/20/25/30/40/50).

**Playtest (Survival, both packs on, arriving from Phase 1)**
- [ ] Player arrives around level 5 with ~10 soldiers; the wood fills the army toward the mana cap.
- [ ] A soldier visibly levels up (check name tag rank/level text) after roughly 5 kills.
- [ ] Ender Step orb obtained from an Enderman; a second player confirms they cannot use a dropped orb.
- [ ] Freeze Sword on a mob does nothing to the gallery until the realm exists, then it produces a statue.
- [ ] Iron Golem pen: extracting it yields `shadow_totem:shadow_titan` and eats a real chunk of mana.
- [ ] Extraction fail is observable if enabled, and the warning sign matches what actually happens.
- [ ] Astral Projection (level 18) behaves as described: body invisible, creative flight, snap-back on body damage or 45 s.
- [ ] Player ends the zone around level 15 with a named, levelled core — ready for Gate ranks B+.

## 7. Deferred to Phase 3
- Warden Hollow (behind the Rift of the Deep), Blaze/Ghast Cliffs (Rift of Embers), Enderman Grove, Wither Skeleton Catacombs.
- The Trials approach east of the outpost, feeding Phase 4's Coliseum and Monarch's Trial.
- Optional: command-block / ticking-area events — keep clear of the addon's force-loaded castle and bottle zones.
