# Changelog – Shadow Sovereign Totem

All notable changes to this project are documented here.

## [2.3.1] – Latest
- **Skills menu**: Stealth (Lv 12), Bloodlust (Lv 15), Astral Projection (Lv 18), Quicksilver (Lv 20), Killing Intent (Lv 25).
- **Astral Projection**: Body stays behind (invisible); you fly as a spirit with creative flight. Can hit targets but cannot break/place blocks. Snap back after 45s or if body is struck. Re-use skill to return early.
- **Kasaka's Venom Fang** (Tools): Permanent purple/red enchanted blade. Hits add venom + poison. Every kill raises its power (shown in lore). Returns on respawn or from menu with all kills preserved.
- **Travel / army reliability fixes**:
  1. Mana limit no longer forces soldiers back when leaving the Realm (only limits new summons).
  2. Army is saved to a safe “transit” list before every teleport and restored once ground exists (never into the void).
  3. Putting the totem down for < 5 seconds no longer stores anyone. Logging out / dying / longer breaks still save everything; they auto-return when you hold a totem again.
  4. Rank-sent-back shadows still wait for manual summon.
- Settings → Diagnostics now shows soldiers out / in shadow / in transit.

## [2.2.0]
- Unique body designs for every shadow class (hooded soldiers, archers with quivers, spiked brutes, ribbed wardens, winged wyrms, robed mages, flame-rod blazes, horned Titans, masked Reapers, haloed Player Shadow, etc.).
- New S-rank classes: **Shadow Titan** (iron golem / ravager), **Shadow Reaper** (wither skeleton / piglin brute).
- Six new powers: Phantom Dive, Axe Rampage, Fire Barrage, Levitation Beam, War Cry, Hex.
- Skills unlock with level while holding a totem: Haste (5), Regeneration (10), Fire Ward (15), Gill Lungs (20), Leap (25), Ironskin (30), Second Wind (40), Shadow Sight (50).
- Gates are now places: open a gate → walk into a walled arena with the wave + elites + boss. Return portal stays 20 minutes.
- Progress is kept on logout / leaving side. Beru keeps kills, level, armor even after falling.
- Staff opens its menu any time (with or without totem).
- Freeze Sword: hit to freeze (goes to Gallery if Realm exists).
- Cleanup: removed biome finder and old robe.
- Includes 2.1.0 features (summon by rank, sneak+use for weapon form menu, Riptide III trident, Wind Burst III mace).

## [2.1.0]
- Army → Summon from shadow: list by rank (S→E), summon 1/5/10/all or by name. Mana still limits out count (unlimited in Realm).
- Rank from class: Plain E, Archer D, Brute C, mid elites B, Guardian/Wither A, Warden/Wyrm/Player Shadow S.
- Staff weapon forms: sneak + use opens form menu so bows/crossbows/tridents charge normally.
- Trident: Riptide III + Impaling V. Mace: Wind Burst III + Density V + Fire Aspect II.

## [2.0.0]
- Beru detailed ant-king body (mandibles, antennae, crest, glowing sternum, pauldrons, claws, segmented tail, crimson seams).
- Soldiers hunt every nearby hostile (no line-of-sight required) + anything that hurts you. Gate monsters see 64 blocks.
- Enchanted books: tap soldier with book → apply enchants as stats (book consumed).
- Gate waves: rare named Elite monsters + Gate Boss (Warlord / Overlord). Boss weapon drops → Champion soldier.
- Freeze mob → statue in Gallery of your Shadow Realm.
- Soul particle halo while holding black/red totem.
- Texture fixes (goblin arms, Beru tail tip).

## [1.9.0]
- Creepers no longer scaled (farms stay vanilla).
- Staff forms: fully enchanted netherite sword/axe/mace/trident/bow/crossbow. Use in air (or sneak+use later) to open form menu.
- Auto-enchant soldier gear (Protection IV, Thorns III, Sharpness V, Fire Aspect II, Power V, Impaling V) – toggleable.
- Gate monsters have unique bodies + powers (Goblin, Orc, Knight, Demon).
- Sovereign Wings: real elytra with new texture while holding totem (retextures all elytra while pack is on). Sneak while gliding = surge.
- Freeze / Unfreeze tools.

## [1.8.0]
- No hard cap on shadows: every kill is extracted and saved. Mana only controls how many are **out**. Unlimited inside Shadow Realm (Domain).
- Gates (Tools): rank E–S waves of custom Gate Goblins/Orcs/Knights/Demons. Tougher, high XP, extractable.
- Stronger mob scaling (starts level 4, every 3 levels).
- Sovereign Robe (later replaced by Wings).
- Bottled cities always shelf-size (8×8×8). Biome finder removed.

## [1.7.0]
- Totems stack to 64. Pop uses one; black → red + Awakening Surge.
- Black totem also activates full monarch mode.
- Army follows through rifts, Ender Step, realm, biome travel (saved → respawned safely).
- Optional scaled mobs.
- Mana is pure capacity (not a spendable pool).

## [1.6.0]
- Bottling: Compact / Detailed miniatures. Detailed for 32/48 size.
- Mana capacity replaces special-soldier cap. Costs by grade. Capacity formula introduced.
- Extraction can fail vs much stronger mobs (toggle).
- Army cap options expanded.
- Signature weapon perks on soldiers.

## [1.5.0]
- Targeted powers auto-aim nearest living thing in look direction. Sounds + on-screen name.
- Every soldier saved forever the moment it rises. Dropping totem no longer loses them (storage system).
- Release forever option. Fallen soldiers with kills can be revived.
- System Window → How it works.

## [1.4.x]
- Random names for soldiers. Rename / Keep forever / Guard duty for other players.
- Find Biome fallback to `/locate`.
- Diagnostics menu.

## [1.3.0]
- Staff menu grouped (System / Army / Travel / Tools / Settings).
- Solo Leveling–style System Window (look-at info, ranks E–S, levels, stats).
- Level from monarch kills → stat points (STR/AGI/VIT/INT/SEN).
- Soldiers level from their own kills.
- Owner settings (debug, name tags, restrictions, army cap, allowed players).

## [1.2.x]
- Personal Shadow Realm castle in the End (courtyard, keep, towers, gallery, crafting stations).
- Bottle City system (save / miniature / release / gallery).
- Power items as inventory orbs carried by soldiers.
- Safer API imports, force-loading for builds.

## [1.1.x]
- Absorbed powers (Enderman step, Blaze lance, Creeper detonate, Warden sonic, etc.).
- New totem models (hooded black, crimson awakened).
- Biome finder (later removed).
- Shadow Blade → Shadow Prison (Nether cells, mining fatigue for players, species ban).
- Player Shadow (permanent stronger soldier if a player kills you while holding red totem).
- Beru armor persistence, Put Beru in shadow.

## [1.0.x]
- Initial totem (black → red), soldiers from kills, Captain Beru, staff menu basics (realm, store/call army, rift, constructs).
- Gear application via tapping, elites saved, lighter effects.

---
*Older pre-1.0 history omitted for brevity.*
