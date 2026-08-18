# Timers App

### [Live Demo](https://timers-app-ksyx.vercel.app/)

A responsive, Pixel-Perfect Single Page Application (SPA) built with React and TypeScript for creating, managing, and tracking multiple real-time timers simultaneously. The application fully implements background persistence, dynamic naming, custom state styling, and responsive design based on Figma layouts.

---

### Key Features

- **Pixel-Perfect & Adaptive Layout:** Responsive implementation matching Figma designs across Desktop, Tablet, and Mobile devices. Handles long timer names gracefully without breaking layout bounds.
- **Dynamic Timer Creation:** Instant timer creation via input button (`Create timer`) or pressing `Enter`. If submitted empty, auto-generates a dynamic name in the `From hh:mm` format based on current time.
- **Top-Stack Sorting:** Newly created timers are automatically placed at the top of the list (`Newest -> Oldest`).
- **Real-Time Controls & Visual States:** Toggle between `start` and `pause` controls with distinct visual styling for paused states, along with instant deletion via the `trash` button.
- **Accurate Time Formatting (`hh:mm:ss`):** Formats active time up to seconds in `hh:mm:ss` (e.g., `01:02:03` for 1 hour, 2 minutes, 3 seconds).
- **Persistent State Across Sessions:** Preserves timer state and background progress in `localStorage`. If the browser is closed and reopened 2 hours later, timers accurately reflect the elapsed 2 hours without stopping.

---

### Tech Stack

- **Framework & Language:** [React](https://reactjs.org/) (Functional Components, Hooks), [TypeScript](https://www.typescriptlang.org/) (Strict Typing)
- **Time Formatting:** [Moment.js](https://momentjs.com/) (UTC time formatting & dynamic timestamp creation)
- **Styling & Methodology:** [Sass (SCSS)](https://sass-lang.com/), [BEM Methodology](https://en.bem.info/methodology/) (Block-Element-Modifier)
- **Build Tooling:** [Vite](https://vitejs.dev/), [ESLint](https://eslint.org/)
- **Storage & Deployment:** Web Storage API (`localStorage`), [Vercel](https://vercel.com/)

---

### Breakpoint Management

The layout adapts seamlessly across three primary device viewports:

- **Desktop:** `1400px` and above (Full expanded view according to Figma specs).
- **Tablet:** From `480px` up to `1400px` (Fluid alignment and container optimization).
- **Mobile:** From `320px` to `480px` (Compact structural views for small touchscreens).

---

### Author

- **Maksym Shavryhin** — _Main Developer_ ([GitHub Profile](https://github.com/sh00tn1ck29))
