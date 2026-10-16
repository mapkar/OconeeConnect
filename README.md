# OconeeConnect

Community LoRa mesh for Oconee County, South Carolina.

Public site (GitHub Pages): https://mapkar.github.io/OconeeConnect/

## Pages

| File | Purpose |
|---|---|
| `index.html` | BIOS-style landing (FleetCom look) |
| `home.html` | What the project is |
| `coverage.html` | Seneca / Walhalla / PSR backbone plan |
| `mesh.html` | LoRa and how the Meshtastic mesh hops |
| `radios.html` | Handhelds and solar routers |
| `connect.html` | How to join the Meshtastic mesh |
| `meshtastic.html` | Region, preset, roles, channels |
| `why.html` | Why mesh belongs in Oconee |
| `area.html` | County geography |
| `support.html` | Host a site / grow coverage |
| `site.css` / `site.js` | Shared chrome |

Meshtastic is the network. Region US, LongFast, frequency slot 20, hop limit 3 unless a mapped backbone says otherwise. Infrastructure nodes are Meshtastic routers on purpose-chosen high sites; handhelds stay CLIENT.

MeshCore is not part of this mesh. It can run on the same boards and the same 915 MHz band, but the two firmwares do not exchange packets. If a node is still on MeshCore, just reflash it to Meshtastic to join.

This repo is the public website only. Other code lives elsewhere.
