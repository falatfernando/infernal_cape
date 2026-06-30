# fvlxt's OSRS Inferno Journey 🏆

An interactive progression dashboard chronicling fvlxt's 41 attempts to defeat **TzKal-Zuk** and obtain the prestigious **Infernal Cape** in Old School RuneScape (OSRS). 

This repository houses a custom-built, responsive single-page web application featuring custom statistical metrics, visual equipment trackers, and translations of the original run logs.

---

## 🚀 How to View the Dashboard

To view the interactive dashboard locally, start a web server in the repository root directory.

### Quick Start (Python)
Run the following command in your terminal:
```bash
python3 -m http.server 8000
```
Then, open your browser and navigate to:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 📊 Core Features

1. **Interactive SVG Dotplot**: 
   * Maps attempts (X-axis) against wave completions (Y-axis).
   * Hover over dots to view specific attempt details.
   * Click on a dot to lock its entry in the sidebar card.
   * Custom representations for unknown wave deaths (represented as dotted circles on the `Wave ??` line).
2. **Dynamic Lava Trendline**: 
   * Tracks a 3-attempt moving average as a glowing gradient line to visualize the learning curve.
   * Can be toggled on/off on the dashboard.
3. **Export to PNG**:
   * Instant PNG downloader to export the dotplot layout directly from the browser for posting on Reddit or social media.
4. **Supply Budget KPI**:
   * Visualizes the estimated supplies cost range (~24.6M to 41.0M GP) based on OSRS loadout supplies (~600k-1M GP per run).
5. **Gear & Loadout Display**:
   * Showcases the equipment and inventory setups (`gear.png` and `inv.png`) used during the runs.
6. **Filter & Live Search**:
   * Click category buttons in the legend to filter dots and logs (e.g. *Blob Deaths*, *Prayer Flick*, *Supplies*).
   * Search diary entries using the search bar at the bottom.

---

## 📁 Repository Structure

* **`index.html`**: Main structural markup, SVG templates, and loadout containers.
* **`style.css`**: Styling sheets defining obsidian glassmorphism details, glowing fire animations, and responsive grids.
* **`app.js`**: Core Javascript logic. Contains the translated log database, canvas particle animations, SVG rendering logic, and PNG export code.
* **`TzKal-Zuk.webp`**: The transparent final boss visual used in headers, panels, and favicon.
* **`gear.png` / `inv.png`**: Gear setups displayed in the loadout panel.

---

## 🤝 Credits & Support

* **Inferno Trainer**: Huge thanks to the [Inferno Trainer Simulator](https://www.infernotrainer.com/) for mechanical practice.
* **Support Team**: Huge appreciation to **Gabijooj** and **Renato** for support and guidance throughout the journey.
