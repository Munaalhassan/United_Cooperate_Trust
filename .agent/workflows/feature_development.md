---
description: Comprehensive workflow for developing new database-driven features.
---

# 🚀 Full-Stack Feature Development Workflow

Follow these steps to implement any new feature that requires a database change and a corresponding UI.

## Phase 1: Research & Planning
1. **Analyze Requirements:** Understand the banking domain requirement (e.g., "Add Transaction History").
2. **Schema Design:** Determine necessary migrations (tables, columns, indexes).
3. **Draft Plan:** Update or create an `implementation_plan.md` in the artifacts directory.
4. **User Approval:** Explicitly ask the user for approval before modifying any code.

## Phase 2: Backend Implementation
1. **Migrations:** Create and run migrations (`php artisan make:migration ...`).
2. **Models & Factories:** Define the Eloquent model, relationships, and cast types. Create a factory for testing.
3. **Action/Service Layer:** Implement business logic in dedicated classes (e.g., `App\Actions\ProcessTransaction`).
4. **Controller:** Create a controller that invokes the Action and returns an `Inertia::render` response.
5. **Routes:** Define the web route in `routes/web.php`.

## Phase 3: Frontend Implementation
1. **Page Component:** Create the React page in `resources/js/Pages/[FeatureName]`.
2. **Type Safety:** Define TypeScript interfaces for the props passed from the controller.
3. **UI Components:** Use existing components or create new ones in `resources/js/Components`.
4. **Forms:** Utilize Inertia's `useForm()` hook for all data submissions.

## Phase 4: Verification
1. **Automated Tests:** Write a Pest test in `tests/Feature`.
2. **Manual Check:** Run the development server and verify the UI aesthetics match the [Guidelines](file:///Users/mac/Herd/united cooperate bank/.agent/guidelines.md).
3. **Build:** Run `npm run build` to ensure no TypeScript or Vite errors.
