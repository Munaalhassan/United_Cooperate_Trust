---
description: Specific workflow for creating Inertia.js React pages.
---

# ⚛️ Inertia React Page Workflow

Use this workflow when creating a new standalone page without complex backend logic.

## 1. Route Definition
- Open `routes/web.php`.
- Add a new `Route::get()` or `Route::inertia()` call.
- Ensure the route is named (e.g., `->name('about.bank')`).

## 2. Controller (If needed)
- If the page requires data, create a Controller.
- Return `Inertia::render('Path/To/Component', [ 'data' => $data ])`.

## 3. React Page Creation
- Create the file in `resources/js/Pages/[Path]`.
- Use a **Functional Component** with a default export.
- Import `Head` from `@inertiajs/react` to set the page title.

## 4. Design & Style
- Apply **Montserrat** font weights.
- Use Brand Green (`#00ab4e`) for primary calls to action.
- Ensure the layout matches the [Reference Site](https://unitedcooperatetrust.com/about-us/our-bank.html).

## 5. Navigation Integration
- Update the main navigation component (e.g., `resources/js/Layouts/AppLayout.tsx`) to include the new link.
- Use the `<Link href={route('...')}>` component to maintain Inertia state.
