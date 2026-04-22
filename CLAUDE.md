# CLAUDE.md - AI Development Guidelines

This project is a high-fidelity Banking Application built with **Laravel 13**, **React**, and **Inertia.js**.
It follows the **Laravel Boost** conventions and the **United Cooperate Bank** design system.

## 🎨 Brand Design Tokens
- **Theme Color:** `#005eb8` (Primary Blue)
- **Secondary Color:** `#ffffff` (White)
- **Complementary Color:** `#0a2540` (Navy)
- **Typography:** **Montserrat** (Header/Body)
- **Backgrounds:** `#ffffff` (Main), `#f4f4f4` (Sidebars)

## 🛠 Tech Stack & Commands
- **Backend:** Laravel 13, Inertia.js, Fortify (Auth), Pest (Tests)
- **Frontend:** React, TypeScript, Tailwind CSS
- **Serve Site:** `php artisan serve` & `npm run dev`
- **Tinker:** `php artisan tinker`
- **Testing:** `php artisan test` (Pest)
- **Linting:** `php artisan pint`

## 🧱 Code Style & Quality
- **React Components:**
    - Use functional components with hooks.
    - Leverage `.agent/skills/react-quality-engineering` for patterns.
    - Strict TypeScript typing is required.
    - Use Inertia `<Head />`, `<Link />`, and `useForm` hooks.
- **Laravel Backend:**
    - Type-hint everything.
    - Use Action classes for complex logic.
    - Maintain strict PSR-12 compliance (Pint).

## 🚀 AI Mastery (Skill Consulting)
Before implementing complex UI or React logic, consult the following local skills:
- `[.agent/skills/react-quality-engineering/SKILL.md](file:///Users/mac/Herd/united cooperate bank/.agent/skills/react-quality-engineering/SKILL.md)`

---
*Created by Antigravity in accordance with Laravel Boost principles.*
