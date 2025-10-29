## Quick summary

This is a small React + Vite single-page app using React Router v6 and Redux Toolkit.
Focus areas for automated changes: routing in `src/App.jsx`, Redux slices in `src/features/*`, and the local cart/user persistence patterns.

## What to know up front

- Run locally: `npm run dev` (starts Vite). Build: `npm run build`. Preview static build: `npm run preview`. Lint: `npm run lint`.
- Entrypoint: `src/main.jsx` — wraps `<App />` with `Provider(store)` and `BrowserRouter`.
- Routes: declared in `src/App.jsx` using React Router v6 (`<Routes>` + `<Route>`).
- Redux store: `src/app/store.js` registers two reducers: `cart` and `auth`.

## Important repo-specific patterns & gotchas

- Dual cart handling: The app uses two different cart mechanisms that are not synchronized:
  - Local React state in `src/App.jsx` (saved under localStorage key `cart`).
  - Redux `cart` slice (`src/features/cart/cartSlice.jsx`) which reads/writes localStorage key `cartItems`.
  When modifying cart behavior, preserve compatibility or intentionally unify them and update both places.

- Auth shape mismatch: `authSlice` stores `user` as whatever is dispatched (the login action currently stores a string name). UI (e.g. `src/components/Nav.jsx`) expects `user.username`. Be careful when changing the user object shape; update all consumers.

- Empty product data: `src/data/products.js` currently exports an empty array. Product pages (`src/pages/ProductPage.jsx`) expect objects with `id`, `img`, `name`, `price`, `desc`.

- Asset paths: app references `/assets/*` (public assets). Keep image names and paths consistent (e.g., `public/assets/TITAN.png.png` is used by `Nav.jsx`).

## Coding agent contract (short)

- Inputs: modify source files in `src/` only unless creating assets.
- Outputs: update routes in `src/App.jsx`, add/update slices under `src/features/*`, and update `src/data/products.js` when adding products.
- Error modes to avoid: breaking client-side routing, changing localStorage keys silently, or changing `user` shape without updating UI.

## Concrete examples (copyable guidance)

- Add a new page route: create `src/pages/MyPage.jsx`, then add `<Route path="/my" element={<MyPage />} />` in `src/App.jsx` and add a link in `src/components/Nav.jsx`.

- Add a new Redux slice: create `src/features/<name>/<name>Slice.jsx`, export actions and default reducer, then import and add it to `src/app/store.js` under a new key.

- To add a product for local testing: edit `src/data/products.js` and push an object with fields `{ id: 'p1', name: 'Foo', price: '$9.99', desc: '...', img: '/assets/foo.png' }`.

## Files to check when making behavior changes

- Routing & app-level state: `src/App.jsx`, `src/main.jsx`
- Global state: `src/app/store.js`, `src/features/auth/authSlice.jsx`, `src/features/cart/cartSlice.jsx`
- Product data & pages: `src/data/products.js`, `src/pages/ProductPage.jsx`
- Navigation and auth UI: `src/components/Nav.jsx`, `src/pages/Pages.jsx` (login UI)

## Build, lint, and debug notes

- Development: `npm run dev` (Vite HMR). Use browser console for runtime errors and Vite logs in terminal for bundling issues.
- Lint: `npm run lint` — fixes/changes should follow existing ESLint rules in repo (see `eslint.config.js`).
- If a runtime problem appears where a component expects `user.username` but `user` is a string, look at `features/auth/authSlice.jsx` (login action payload).

## Final guidance for agents

- Be conservative: preserve localStorage keys (`cart` vs `cartItems`) unless you intentionally consolidate them and update both places.
- When changing the `user` object shape, update `Nav.jsx`, any pages that read `state.auth.user`, and the login actions.
- Reference the files listed above for concrete examples rather than applying broad patterns.

If any of these sections are unclear or you'd like the file to include additional examples (tests, PR checklist, or CI steps), tell me where to expand and I'll iterate.
