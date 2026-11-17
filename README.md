# OconeeConnect

Community LoRa mesh for Oconee County, South Carolina.

Public site (GitHub Pages): https://mapkar.github.io/OconeeConnect/

## Pages

| File | Purpose |
|---|---|
| `index.html` | BIOS-style landing (FleetCom look) |
| `home.html` | What the project is |
| `coverage.html` | Seneca / Walhalla / PSR backbone plan |
| `mesh.html` | LoRa and how the MeshCore mesh hops |
| `radios.html` | Handhelds and solar repeaters |
| `connect.html` | How to join the MeshCore mesh |
| `settings.html` | USA/Canada preset, roles, channels |
| `why.html` | Why mesh belongs in Oconee |
| `area.html` | County geography |
| `support.html` | Host a site / grow coverage |
| `site.css` / `site.js` | Shared chrome |

MeshCore is the network. USA/Canada (Recommended) preset: 910.525 MHz, 62.5 kHz bandwidth, SF 7, coding rate 5. Handhelds run Companion firmware; fixed high sites run Repeater firmware.

Meshtastic is not part of this mesh. The two firmwares do not exchange packets. If a node is still on Meshtastic, reflash it to MeshCore to join.

This repo is the public website only. Other code lives elsewhere.
