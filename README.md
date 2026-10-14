# Shadow Sovereign Totem v2.3.1

**Minecraft Bedrock Edition addon** (stable Script API)

Solo Leveling–inspired shadow army system with totems, staff menu, Shadow Realm, powers, Gates, ranks, mana capacity, skills, and progression.

> **Status**: Real packs from the uploaded `.mcaddon` are in this repo under `Shadow_Sovereign_Totem_BP/` and `Shadow_Sovereign_Totem_RP/`. Design docs and map notes are also present. Some binary textures still need to be copied from the original `.mcaddon` for a complete local build.

## Quick Install (iPhone / any device)
1. Use the original `Shadow_Sovereign_Totem.mcaddon` (or the one you build from these folders).
2. Tap → Open in Minecraft.
3. In the world → **Add-ons** → enable **both** the Behavior Pack and Resource Pack.
4. No experiments required.
5. Uses `@minecraft/server` 2.10.0 and `@minecraft/server-ui` 2.0.0. Min engine **1.26.10**.

## Items (Creative → Equipment)
| Item | Identifier | Description |
|------|------------|-------------|
| **Shadow Sovereign Totem (black)** | `shadow_totem:shadow_sovereign_totem` | Craft: 8 Totems of Undying around 1 Beacon. Saves from lethal hit (except void/`/kill`), becomes red. Activates monarch mode. |
| **Shadow Sovereign Totem (Awakened)** | `shadow_totem:shadow_sovereign_totem_awakened` | Full power: soldiers, Beru, powers, System, skills. One-time life save. |
| **Shadow Sovereign Staff** | `shadow_totem:shadow_staff` | Menu + weapon forms. |
| **Kasaka's Venom Fang** | `shadow_totem:kasaka_fang` | Evolving venom blade. |
| **Freeze Sword** | `shadow_totem:freeze_sword` | Freeze / Gallery. |
| **Power orbs & boss weapons** | various `shadow_totem:power_*`, `boss_*` | See BP `items/`. |

## Core Features (v2.3.1)
See [CHANGELOG.md](CHANGELOG.md) and [docs/DESIGN.md](docs/DESIGN.md) for the full design. The live script is the single file:

`Shadow_Sovereign_Totem_BP/scripts/main.js` (~179 KB)

## Repository Structure
```
shadow-sovereign-totem/
├── README.md
├── CHANGELOG.md
├── ADDON_SOURCE.md          ← notes about the real packs
├── docs/
│   ├── DESIGN.md
│   ├── MAP_IDEAS.md
│   └── PACKAGING.md
├── Shadow_Sovereign_Totem_BP/   ← REAL behavior pack
│   ├── manifest.json
│   ├── scripts/main.js
│   ├── items/
│   ├── entities/
│   └── recipes/
├── Shadow_Sovereign_Totem_RP/   ← REAL resource pack
│   ├── manifest.json
│   ├── models/entity/
│   ├── entity/
│   ├── texts/
│   └── textures/ (item_texture.json; PNGs from original .mcaddon)
├── behavior_pack/ / resource_pack/  ← older design skeleton (optional reference)
└── LICENSE
```

## For collaborators ("free buff" and others)
1. Clone this repo.
2. Read `docs/DESIGN.md` + `CHANGELOG.md` + `ADDON_SOURCE.md`.
3. The authoritative script is `Shadow_Sovereign_Totem_BP/scripts/main.js`.
4. To get a complete runnable pack including all PNG textures, take the original `.mcaddon` you were given and/or upload it as a GitHub Release asset.
5. Map ideas for a world built around the addon: `docs/MAP_IDEAS.md`.

## Map Integration
See [`docs/MAP_IDEAS.md`](docs/MAP_IDEAS.md).

## License
MIT – see [LICENSE](LICENSE).
