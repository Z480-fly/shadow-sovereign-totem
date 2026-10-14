# Shadow Sovereign Totem v2.3.1

**Minecraft Bedrock Edition addon** (stable Script API)

Solo Leveling–inspired shadow army system with totems, staff menu, Shadow Realm, powers, Gates, ranks, mana capacity, skills, and progression.

> **Status**: Design + source skeleton. Scripts are stubs / partial implementations based on the full design. Untested in-game as a complete package.

## Quick Install (iPhone / any device)
1. Download the `.mcaddon` (when packaged) or the behavior + resource packs.
2. Tap → Open in Minecraft.
3. In the world → **Add-ons** → enable **both** the Behavior Pack and Resource Pack.
4. No experiments required.
5. Uses `@minecraft/server` 2.10.0 and `@minecraft/server-ui` 2.0.0.

## Items (Creative → Equipment)
| Item | Description |
|------|-------------|
| **Shadow Sovereign Totem (black)** | Craft: 8 Totems of Undying around 1 Beacon. Saves from lethal hit (except void/`/kill`), becomes red. Also activates full monarch mode. |
| **Shadow Sovereign Totem (Awakened / red)** | Full power: Strength II, shadow soldiers, Captain Beru, powers, System window, skills. One-time life save. |
| **Shadow Sovereign Staff** | Hold + interact to open menu (works with or without totem). Weapon forms, tools, travel, army, skills, settings. |
| **Kasaka's Venom Fang** | Permanent evolving blade (Tools menu). |
| **Freeze Sword** | Freeze mobs / send to Gallery. |
| **Power Orbs** | Colored orbs for absorbed powers. |

## Core Features (v2.3.1)

### Totems & Monarch Mode
- Black or red totem activates soldiers, Beru, powers, System window, skills, Sovereign Wings (elytra retexture), soul particle halo.
- Totems stack to 64. Pop consumes one; black → red + Awakening Surge (+10% stats/mana for 5 min).
- Army is saved forever the moment a shadow rises. Mana only limits how many are **out** at once (unlimited inside your personal Shadow Realm).

### Soldiers & Army
- Extract from almost any kill (you or your soldiers).
- Classes with unique bodies + powers: Soldier, Archer, Brute, Trident, Warden, Guardian, Wyrm, Wither, Enderman, Mage, Blaze, Titan, Reaper, Player Shadow, etc.
- Ranks: E → S based on class.
- Mana cost by grade. Capacity = `60 + 6×level + 5×INT`.
- Named randomly, can be renamed / kept forever / released.
- Gear & enchanted books apply stats. Signature weapon perks (sword sweep, axe weaken, etc.).
- Guard duty for other players. Summon by rank from shadow storage.

### Captain Beru
- Ant-king model. 400 HP, regenerates, area blast, knockback-proof.
- Can be put in/out of shadow. Keeps armor, level, kills.

### Staff Menu (grouped)
- **System Window** – look-at info, levels, stat points (STR/AGI/VIT/INT/SEN), skills, mana, how-it-works.
- **Army** – roster, summon from shadow, send rank back, fallen, guard, status.
- **Travel** – Shadow Realm, Dimensional Rift (random / coords / saved), constructs.
- **Tools** – Powers, Gates, Freeze, Staff forms, Kasaka's Venom Fang, Bottle City, etc.
- **Settings** (owner) – debug, name tags, army/mana options, allowed players, diagnostics.

### Powers, Skills, Gates, Shadow Realm
- Absorb powers on kill → power items carried by soldiers.
- Skills unlock by level (Haste, Regeneration, Fire Ward, … Stealth, Bloodlust, Astral Projection, Quicksilver, Killing Intent).
- Gates open a temporary arena with ranked waves + elites + boss (extractable).
- Personal Shadow Realm in the End: dark castle, throne room, gallery for bottled cities & frozen statues, lecterns for menus. Unlimited mana inside.

### Other
- Scaled mobs (optional), Sovereign Wings (elytra), staff weapon forms (netherite tools/weapons with high enchants), species bans via Shadow Prison, etc.

## Repository Structure
```
shadow-sovereign-totem/
├── README.md                 ← you are here
├── CHANGELOG.md              ← full version history
├── docs/
│   ├── DESIGN.md             ← systems deep-dive
│   └── MAP_IDEAS.md          ← custom map / world template notes
├── behavior_pack/
│   ├── manifest.json
│   ├── pack_icon.png         (placeholder)
│   ├── scripts/
│   │   ├── main.js           ← entry
│   │   ├── army.js
│   │   ├── totem.js
│   │   ├── staff_ui.js
│   │   ├── powers.js
│   │   ├── skills.js
│   │   ├── realm.js
│   │   ├── gates.js
│   │   └── utils.js
│   ├── items/
│   ├── entities/
│   └── ...
├── resource_pack/
│   ├── manifest.json
│   ├── textures/
│   ├── models/
│   └── ...
└── .gitignore
```

## Development Notes
- Target: Bedrock 1.21+ with stable Script API (`@minecraft/server` 2.10.0+, `@minecraft/server-ui` 2.0.0).
- All systems are designed to be modular. Start with totem + army + staff UI, then layer powers / realm / gates.
- Debug chat lines (`[Totem debug]`) appear when a step fails (can be toggled in Settings).
- Performance focus: lighter effects, smarter target scanning, force-load only when needed.

## Map Integration
See [`docs/MAP_IDEAS.md`](docs/MAP_IDEAS.md) for a world designed around the addon (spawn, Gate arenas, Shadow Realm entry points, progression zones).

## Credits & License
Design by the original author. This repository contains documentation and a development skeleton derived from the provided design document.

Feel free to open issues or PRs.
