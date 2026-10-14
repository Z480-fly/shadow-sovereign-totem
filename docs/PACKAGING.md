# Packaging the Addon

## Folder layout required by Minecraft
```
Shadow_Sovereign_Totem.mcaddon          ← zip of the two packs below, renamed
├── behavior_pack/                      (or any name)
│   ├── manifest.json
│   ├── scripts/
│   ├── items/
│   └── ...
└── resource_pack/
    ├── manifest.json
    ├── textures/
    ├── texts/
    └── ...
```

## Steps
1. Make sure both `manifest.json` files have **unique UUIDs** (the ones in the skeleton are placeholders – generate new ones before release).
2. Add real textures under `resource_pack/textures/items/` and reference them in the item JSONs / terrain_texture or item_texture files.
3. Zip the **contents** of the two pack folders (or the two pack folders themselves) into a single `.zip`, then rename the extension to `.mcaddon`.
4. On device: tap the `.mcaddon` → Open in Minecraft → enable both packs in the world.

## UUID tip
Never reuse UUIDs across different packs. Generate them at https://www.uuidgenerator.net/ (or any UUID v4 tool).

## Script API versions
Current target in `behavior_pack/manifest.json`:
- `@minecraft/server` 2.10.0
- `@minecraft/server-ui` 2.0.0

Bump these only when you intentionally move to newer stable versions and have tested.
