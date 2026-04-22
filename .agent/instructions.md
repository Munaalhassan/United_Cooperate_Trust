# Project Development Guidelines: United Cooperate Bank

This document serves as the absolute Source of Truth for the design, structure, and technical requirements of this project. Any AI agent (Antigravity) working on this repository MUST consult this file, [CLAUDE.md](file:///Users/mac/Herd/united cooperate bank/CLAUDE.md), the [Agent Rules](file:///Users/mac/Herd/united cooperate bank/.agent/rules.md), and the [Workflows](file:///Users/mac/Herd/united cooperate bank/.agent/workflows) before implementing new features or UI components.

---

## 🏛 Reference Authority
- **Primary Source Site:** [unitedcooperatetrust.com](https://unitedcooperatetrust.com/about-us/our-bank.html)
- **Objective:** Replicate the professional and secure aesthetic of the reference site while leveraging the modern Laravel React Starter Kit.

---

## 🎨 Design System (Non-Negotiable)

### Typography
- **Core Font:** **Montserrat** (Google Fonts).
- **Secondary/Fallback:** `sans-serif`.
- **Headers:** Semi-bold/Bold weight.
- **Body:** Regular weight, clean tracking.

### Color Palette
- **Primary Brand Green:** `#00ab4e` (Used for Logos, Main Headers, and CTA buttons).
- **Primary Brand Navy:** `#34495e` (Used for E-Banking navigation and secondary UI elements).
- **Primary Text:** `#333333` (Off-black).
- **Backgrounds:**
    - Main: `#ffffff` (White).
    - Sidebar/Utility: `#f4f4f4` (Light Gray).

---

## 🧭 Navigation Structure

### Main Header Navigation
1.  **Home**
2.  **About Us**
3.  **Private Banking**
4.  **Corporate Banking**
5.  **Fund Services**
6.  **Contact Us**

### Utility & Quick Links
- **E-Banking:** Must link to Dashboard/Login.
- **Quick Services:** Registration/Portal access.
- **Media:** News and Events section.

---

## 🛠 Technical Stack
- **Backend:** Laravel 13.
- **Frontend Stack:** Inertia.js + React.
- **Language:** TypeScript.
- **Styling:** CSS / Tailwind (ensure harmony with brand colors).
- **Testing:** Pest.
- **Auth:** Standard React Starter Kit components (merged with Team support).

---

## 📜 Principles
1.  **Professionalism:** Maintain a high-trust, banking-sector feel. Avoid "generic" or placeholder aesthetics.
2.  **Consistency:** Ensure navigation labels match the sitemap above across all pages.
3.  **Modern React:** Use Functional Components, Hooks, and clean TypeScript types. Refined patterns are defined in `.agent/skills/react-quality-engineering`.
4.  **Performance:** Optimize font loading and asset delivery.
5.  **AI Coordination:** Respect all conventions in `CLAUDE.md`.

> [!IMPORTANT]
> **Before creating any new page or component, re-verify the color hex codes and font weights against this document.**
