# Map / World Template Ideas – Shadow Sovereign Totem

Goal: a Minecraft Bedrock world that **showcases and is built around** the addon so players immediately understand the fantasy and have good places to fight, extract, and progress.

## Overall Concept
“The Shadow Monarch’s Domain” – a large overworld island (or continent) that has been partially corrupted by shadow energy. The player starts as a newly awakened monarch. The map funnels them through early extraction → first Gate → Shadow Realm discovery → mid-game power fantasy → late-game boss arenas.

## Recommended World Settings
- Game mode: Survival (or Adventure for a pure experience map).
- Difficulty: Normal or Hard.
- Keep the addon behavior + resource packs enabled.
- Optional: command blocks / ticking areas for map-specific events (not required for the addon itself).
- Seed or custom terrain: mixed biomes with clear “corrupted” zones (blackstone, sculk, deepslate, soul sand valleys, dark oak, etc.).

## Key Zones

### 1. Awakening Spawn (Safe Hub)
- Small ruined chapel / throne fragment.
- Free black totem in a chest + a staff.
- Tutorial signs or lectern book explaining:
  - Hold the totem
  - Kill mobs to extract
  - Open staff menu
  - First Gate location marked on a map item.
- Nearby easy mob farm / spawner (zombies / skeletons) so the first 5–10 soldiers are trivial.
- Protected from grief by barrier or adventure mode flags if desired.

### 2. Early Extraction Grounds
- Rolling hills + dark forest with increased spawn rates.
- Scattered “shadow rifts” (particle + sound only) that hint at later Gates.
- One or two iron golem / ravager pens for early Titan / Brute extracts.

### 3. Gate Plaza (Central Feature)
- Large blackstone / deepslate plaza with 5–7 permanent Gate frames (E to S rank markers).
- Each frame has a sign or lectern describing the expected difficulty and rewards.
- Walking into an open Gate (from the addon) takes the player to the temporary arena; the plaza itself stays as the “overworld side”.
- Spectator balconies or walls so friends can watch.

### 4. Shadow Realm Entry Point
- A tall obsidian / crying obsidian pillar or ruined portal that the staff “Shadow Realm” command can be themed around.
- Or simply a landmark the player is told to stand near when first entering the realm.
- Once the personal castle generates in the End, the overworld landmark can display a particle beam.

### 5. Mid-Game Power Zones
- **Warden Hollow**: deep dark inspired area for Warden extracts and Sonic power.
- **Blaze / Ghast Cliffs**: nether-access or overworld equivalent for fire powers.
- **Enderman Grove**: chorus-like forest for Enderman / Ender Step practice.
- **Wither Skeleton Catacombs**: for Reaper / Wither class.

### 6. Late-Game / Showcase Arenas
- Large open coliseum for high-rank Gates or player-vs-shadow tests.
- “Monarch’s Trial” – scripted (or just recommended) sequence of increasing Gate ranks.
- Optional final island with a pre-built Shadow Realm–style castle that the player can claim or compare to their own generated one.

### 7. Utility & Social
- Shared storage / trading hall near spawn.
- Gallery plaza in the overworld that mirrors the realm gallery (for players who want to display bottled cities publicly).
- AFK-friendly but not overpowered farms so mana / levels still matter.

## Progression Flow (Suggested)
1. Spawn → take black totem + staff → kill 10 easy mobs → first soldiers appear.
2. Open staff → System Window → understand ranks & mana.
3. Travel to Gate Plaza → open an E-rank Gate → clear → extract.
4. Level up a few times, spend points on INT for more capacity.
5. Discover Shadow Realm → see the castle generate → unlimited army inside.
6. Unlock skills and powers, try Astral Projection / Kasaka’s Venom Fang.
7. Climb Gate ranks, collect Champions, build a named elite core.
8. Optional: invite friends, use Guard duty, visit each other’s realms.

## Technical Notes for Map Makers
- The addon already handles personal Shadow Realms in the End (spaced 300 blocks). The map only needs good overworld / nether framing.
- Force-loaded areas are used by the addon for castle & bottle placement – avoid conflicting ticking areas if possible.
- Because soldiers and Beru follow through rifts and teleports, the map can freely use the Dimensional Rift and Ender Step features.
- For a pure adventure map you can pre-place a few “starter” named elite soldiers via structure blocks or commands if you later add admin tools.
- Resource pack changes (elytra wings, soldier models, totem textures) will apply globally while the pack is on – keep that in mind for screenshots and trailers.

## Deliverables for the Map Repo / Release
- World download (`.mcworld`) with the two packs already applied.
- Optional separate “map only” version that expects the addon to be installed.
- Short in-game book or external PDF that mirrors the README feature list.
- Recommended render / trailer locations (Gate Plaza at dusk, throne room with full army, Astral Projection over the castle, etc.).

These notes are intentionally high-level so you (or free buff) can expand them into actual terrain, structures, and loot tables.
