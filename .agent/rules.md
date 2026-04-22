# Agentic Coding Rules: United Cooperate Bank

These rules are MANDATORY for all AI activities in this repository.

### 1. Planning First
- Never modify code without a plan.
- Propose an `implementation_plan.md` for any change involving more than one file.
- Explain the "Why" before the "How".

### 2. Framework Consistency (Inertia & React)
- **Forms:** Always use the `useForm` hook from `@inertiajs/react`. Do not use native `fetch` or `axios` manually for form submissions.
- **Navigation:** Always use the `<Link>` component for internal routing.
- **Components:** Functional components only. No class components.
- **Styling:** Adhere to brand colors (`#00ab4e`, `#34495e`) and typography (**Montserrat**). Use Tailwind utility classes where appropriate, but maintain brand fidelity.

### 3. Backend Integrity
- **Migrations:** Never modify an existing migration that has already been shared/pushed. Create a new one.
- **Validation:** Always implement server-side validation in Laravel. Do not rely solely on client-side checks.
- **Testing:** New features MUST come with at least one Pest feature test.

### 4. Communication
- Keep responses concise. Use GitHub-style markdown.
- Link to relevant docs or skills when suggesting a pattern.
- If unsure about a design choice, ask the USER for clarification before proceeding.

### 5. Skill Usage
- When working on the frontend, explicitly reference and "load" the `react-quality-engineering` skill.
