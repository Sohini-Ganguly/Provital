# ProVital React App

**ProVital** is a responsive React application showcasing lifestyle medicine’s six pillars and providing an appointment search interface. It features:

* **Hero Section** with animated image columns and a search form
* **How It Works** section with horizontal scroll, manual arrows (desktop), and auto-loop on mobile
* **Pillar Cards** displaying individual pillar details with frosted-glass stat badges
* **Responsive Navbar** with desktop dropdown and mobile full-screen drawer

---

## Table of Contents


1. [Technologies](#technologies)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Key Components](#key-components)
5. [Styling](#styling)
6. [Responsive Behavior](#responsive-behavior)
7. [License](#license)



## Technologies

* React 18
* SCSS for styling
* CSS `backdrop-filter` for frosted-glass effects
* Flexbox and CSS Grid

---

## Installation

1. **Clone** the repo:

   ```bash
   git clone https://github.com/your-username/provital-app.git
   cd provital-app
   ```
2. **Install** dependencies:

   ```bash
   npm install
   ```
3. **Run** the development server:

   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
/src
├── components
│   ├── HeroSection.jsx
│   ├── ImageColumns.jsx
│   ├── HowItWorks.jsx
│   ├── PillarCard.jsx
│   ├── Navbar.jsx
│   └── SearchSection.jsx
├── styles
│   ├── HeroSection.scss
│   ├── ImageColumns.scss
│   ├── HowItWorks.scss
│   ├── PillarCard.scss
│   ├── Navbar.scss
│   └── SearchSection.scss
├── App.jsx
└── index.js
```

---

## Key Components

### HeroSection

* **`HeroSection.jsx`**: Displays main headline, search form, and animated image columns.
* **`ImageColumns.jsx`**: Two side-by-side rows of images that loop horizontally on mobile.
* **Animation**: CSS `@keyframes scroll-left` for continuous loop on small screens.

### SearchSection

* **`SearchSection.jsx`**: Three input fields and a "Find now" button.
* **Responsive**: Stacks vertically on mobile; full-width inputs.

### Navbar

* **`Navbar.jsx`**: Desktop navbar with inline links and hover dropdown; mobile hamburger opens full-screen overlay.
* **Mobile Drawer**: Contains login rows and nav links with right arrows.

### HowItWorks

* **`HowItWorks.jsx`**: Six pillar tabs and scrollable card belt.
* **Desktop**: Manual scroll via left/right arrows and tab click scroll-into-view.
* **Mobile**: Automatic 1px/20ms loop scroll.

### PillarCard

* **`PillarCard.jsx`**: Shows an icon, frosted-glass stat badge, title, description.
* **Frosted-Glass Badge**: Uses `rgba(255,255,255,0.87)` + `backdrop-filter: blur(15px)` + dynamic padding.

---

## Styling

* **SCSS modules** for scoped component styles.
* **Flexbox** for layout and responsive stacking.
* **Backdrops & Shadows** for visual depth.

---

## Responsive Behavior

| Breakpoint        | Behavior                                                |
| ----------------- | ------------------------------------------------------- |
| > 768px (Desktop) | Manual scroll with arrows; inline search & nav.         |
| ≤ 768px (Mobile)  | Auto-loop carousel; stacked search form; mobile drawer. |

---


