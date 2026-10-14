# Real Addon Source (from uploaded .mcaddon)

This repository now contains the **actual** Shadow Sovereign Totem v2.3.1 packs extracted from the uploaded `Shadow_Sovereign_Totem.mcaddon`.

## Folders
| Folder | Contents |
|--------|----------|
| `Shadow_Sovereign_Totem_BP/` | Behavior pack – Script API (`scripts/main.js`), items, entities, recipe |
| `Shadow_Sovereign_Totem_RP/` | Resource pack – models, client entity defs, lang, item_texture |

## Key facts
- **Namespace**: `shadow_totem:`
- **Script**: single file `Shadow_Sovereign_Totem_BP/scripts/main.js` (~179 KB)
- **Min engine**: 1.26.10
- **APIs**: `@minecraft/server` 2.10.0, `@minecraft/server-ui` 2.0.0
- **Craft**: 8 Totems of Undying + 1 Beacon → black totem

## What is / is not in git yet
- **In repo**: manifests, recipe, item JSONs (being added), entity JSONs, client entity defs, geo models, lang, item_texture.json, and the full `main.js`.
- **Binary assets** (PNG textures, pack icons): present in the original `.mcaddon`. Copy them from your local extract into the RP/BP `textures/` and root if you need a complete offline build, or upload the `.mcaddon` as a GitHub Release asset.

The earlier `behavior_pack/` / `resource_pack/` folders were a design skeleton; prefer the real `Shadow_Sovereign_Totem_*` folders for development.
