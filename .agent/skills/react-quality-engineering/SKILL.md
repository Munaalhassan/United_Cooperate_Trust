---
name: react-quality-engineering
description: Top-notch React development patterns focusing on performance, semantic HTML, and high-fidelity banking UI implementation.
---

# 🚀 React Quality Engineering Mastery

This skill enables the agent to implement high-performance, accessible, and bulletproof React components specifically tailored for the United Cooperate Bank project.

## 🏗 Component Architecture
- **Composition over Inheritance:** Build complex UIs by nesting smaller, reusable components.
- **Pure Functional Components:** Use functional components with hooks exclusively.
- **Prop Logic:** Keep components focused; move business logic to custom hooks where possible.

## ⚡ Performance Optimization
- **Memoization:** Use `React.memo` for expensive components that re-render frequently.
- **Hook Efficiency:** Correctly utilize `useMemo` and `useCallback` to prevent unnecessary reference changes.
- **Selective Rendering:** Ensure DOM updates are targeted. Avoid top-level state changes for minor local UI updates.

## 🛡 Banking-Grade Security & Reliability
- **Form Validation:** Implement rigorous client-side validation before submission.
- **Sanitization:** Ensure all user inputs are handled safely within React's standard protection.
- **Strict Typing:** Leverage TypeScript for every component, ensuring prop-types and state are strictly defined.

## 🎨 Asset & Design Fidelity
- **Token Adherence:** Always refer to `.agent/instructions.md` for Brand Green (`#00ab4e`) and Montserrat typography.
- **CSS-in-JS / Tailwind:** Use utility-first or modular CSS that respects the brand tokens.
- **Micro-interactions:** Add subtle hover/active states to increase the premium feel of the bank interface.

## 🧠 Model Guidelines
When executing this skill, the model should:
1.  Prefer **Inertia.js** patterns for data fetching and routing.
2.  Maintain a clean `resources/js` structure (Components, Pages, Hooks, Lib).
3.  Write self-documenting code with clear TypeScript interfaces.
