# SEB North Star PoC

Runnable UI architecture for a mobile-first financial market assistant. It combines familiar banking patterns with a modern AI chat experience.

## Included

- React 18 + TypeScript + Vite
- Tailwind CSS with light and dark themes
- React Router
- Overview dashboard, chat page, and markets page
- Mock market data and simulated chat replies
- Small UI foundation with Storybook
- Hidden `/portfolio` route prepared for a later phase
- Responsive, mobile-first layout
- Source and financial-information disclaimer patterns

## Run locally

Requirements: Node.js 20+ and npm 10+.

1. Unzip the project.
2. Open a terminal in `seb-north-star-poc`.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address printed by Vite, normally `http://localhost:5173`.

## Storybook

Run `npm run storybook`, then open `http://localhost:6006`.

## Production check

Run `npm run build`.

## Architecture

- `src/app`: routes and page composition
- `src/components/ui`: reusable UI primitives
- `src/components/layout`: application shell and navigation
- `src/features/chat`: assistant experience
- `src/features/markets`: market cards and presentation
- `src/features/portfolio`: future route, intentionally hidden
- `src/data`: replaceable mock data
- `src/styles`: global Tailwind styles

## Important PoC boundaries

- All financial data is fictional/mock data.
- Voice is represented by a microphone UI control only.
- Portfolio is not shown in navigation.
- Chat responses are simulated locally and do not call an AI backend.
- Replace mocked data with approved services only after architecture, compliance, and source decisions are confirmed.

## Dependency note

All Storybook packages are pinned to the same exact version (`8.6.19`) to avoid npm peer-dependency conflicts. If you previously tried installing the first archive, remove the old install metadata before retrying:

```bash
rm -rf node_modules package-lock.json
npm install
```
