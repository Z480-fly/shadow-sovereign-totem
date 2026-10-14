# Real Addon Source

Repo: https://github.com/Z480-fly/shadow-sovereign-totem

## What is committed in git
- Design docs, CHANGELOG, MAP_IDEAS, PACKAGING
- Real BP + RP manifests (v2.3.1, min engine 1.26.10)
- All BP item JSON definitions + crafting recipe
- RP `en_US.lang`, `languages.json`, `item_texture.json`

## What you still need from the original .mcaddon (local zip)
These are either large or binary — keep them from your uploaded pack:

1. **`Shadow_Sovereign_Totem_BP/scripts/main.js`** (~179 KB) — the entire Script API implementation
2. **`Shadow_Sovereign_Totem_BP/entities/*.json`** (22 entity behavior defs)
3. **`Shadow_Sovereign_Totem_RP/entity/*.json`** (client entity files)
4. **`Shadow_Sovereign_Totem_RP/models/entity/*.geo.json`** (geometry)
5. **PNG textures** under `textures/items/`, `textures/entity/`, `textures/models/armor/elytra.png`
6. Pack icons

**Recommended:** Upload `Shadow_Sovereign_Totem.mcaddon` as a GitHub Release asset on this repo so free buff (and anyone) can download the complete pack in one click.

## Namespace
`shadow_totem:` (items, entities, powers)

## APIs
- `@minecraft/server` 2.10.0
- `@minecraft/server-ui` 2.0.0
