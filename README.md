# Portfolio (Nicholas Pysklywec)

Single-page React portfolio: masthead, hero, experience grid, projects table, modals, footer, and light/dark theme.

## Scripts

| Command        | Purpose                          |
| -------------- | -------------------------------- |
| `npm start`    | Dev server at http://localhost:3000 |
| `npm run build`| Production build → `build/`      |
| `npm test`     | Tests (Jest)                   |

---

## Where to edit content and UI

### Site-wide copy and metadata

| What | File |
| ---- | ---- |
| **Document title** (browser tab) | `src/App.js` → `document.title` in `useEffect` |
| **Page title & meta** | `public/index.html` (`<title>`, `<meta name="description">`, `theme-color`) |
| **Google Fonts** | `public/index.html` (the `<link href="fonts.googleapis.com"...>` tag) |

### Colors, typography base, dark mode tokens

| What | File |
| ---- | ---- |
| **Light/dark palette** (`--cream`, `--ink`, `--accent`, etc.) | `src/index.css` (`:root` and `[data-theme="dark"]`) |
| **Modal backdrop** | `src/index.css` → `--overlay-scrim` |

### Masthead (name, location line, nav links)

| What | File |
| ---- | ---- |
| **Dateline** (“Toronto, Canada · …”) | `src/Components/Header/Header.js` → `.masthead-dateline` |
| **Your name** (center) | `Header.js` → `.masthead-name` |
| **Nav items** (About, Experience, Projects, GitHub, Résumé) | `Header.js` → `NAV` array (`label`, `href`, `external`) |
| **Masthead layout & borders** | `src/Components/Header/Header.css` |

### Hero (headline, bio, stats, skill chips)

| What | File |
| ---- | ---- |
| **Kicker, headline, bio, CTAs** | `src/Pages/Mainpage/Home.js` (hero section JSX) |
| **“Core Technologies” chips** | `Home.js` → `CORE_TECH` array |
| **Company / project counts** in stat tiles | Driven by `src/data/jobs.json` and `src/data/projects.json` (lengths); labels in `Home.js` |
| **Hero layout, type scale, buttons** | `src/Pages/Mainpage/Home.css` |

### Jobs / experience (four cards)

| What | File |
| ---- | ---- |
| **All role text** (title, org, dates, description, skills) | `src/data/jobs.json` — edit JSON only; UI maps fields automatically |
| **Section title bar** (“Professional Experience”, subtitle) | `src/Pages/Jobs/JobDisplay.js` (experience `section-label-bar`) |
| **Card layout & styling** | `src/Pages/Jobs/JobDisplay.css` (`.experience-grid`, `.exp-card`, …) |

### Projects (table + detail modal)

| What | File |
| ---- | ---- |
| **Projects list, links, modal copy** | `src/data/projects.json` |
| **Table columns / modal structure** | `src/Pages/Jobs/JobDisplay.js` |
| **Table & modal styling** | `src/Pages/Jobs/JobDisplay.css` |

**Project images in modals:** JSON `information.images[].imageName` must match a key in `src/assets/img/images.js`. Add new files under `src/assets/img/photos/...`, import them in `images.js`, and export the key you use in JSON.

### Footer

| What | File |
| ---- | ---- |
| **All footer copy and links** | `src/Pages/Mainpage/Home.js` (footer section at bottom of `Home`) |

### Theme toggle (light / dark)

| What | File |
| ---- | ---- |
| **Toggle button in header** | `Header.js` embeds `<ThemeToggle variant="masthead" />` |
| **Toggle appearance** | `src/Components/ThemeToggle/ThemeToggle.js` + `ThemeToggle.css` |
| **Saved preference key** (`localStorage`) | `src/context/AppThemeContext.js` → `STORAGE_KEY` (`portfolio-theme`) |
| **Avoid flash before React loads** | `public/index.html` (small inline `<script>` that reads `localStorage`) |

### App shell

| What | File |
| ---- | ---- |
| **Root layout** (theme provider + page) | `src/App.js` |
| **React entry** | `src/index.js` |

---

## Data files (quick reference)

- **`src/data/jobs.json`** — each job: `name`, `org`, `description`, `date`, `loc`, `skills[]`, `img` (optional; not shown in current editorial cards).
- **`src/data/projects.json`** — each project: `name`, `short`, `description`, `skills[]`, `demo`, `github`, optional `information` (`title`, `mainDescription`, `images[]` with `imageName` / `imageDescription`).

---

## Deployment notes

- Build output: `npm run build` → `build/`.
- If the site lives in a **subpath** (e.g. GitHub Pages), set the `homepage` field in `package.json` and ensure your host serves `index.html` for unknown paths (SPA fallback).

---

## Create React App

This project started from [Create React App](https://github.com/facebook/create-react-app). See the [CRA deployment docs](https://facebook.github.io/create-react-app/docs/deployment) for hosting details.
