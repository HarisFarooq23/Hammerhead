# Team Hammerhead GIKI

A bold, dark motorsport team website for Team Hammerhead GIKI — Pakistan's university battery-electric vehicle racing team, competing in Shell Eco-Marathon.

## Run & Operate

- `pnpm --filter @workspace/hammerhead run dev` — run the frontend (dev, port assigned by workflow)
- `pnpm --filter @workspace/hammerhead run typecheck` — typecheck the frontend
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion
- Shader background: `@paper-design/shaders-react` (GrainGradient, WebGL — with CSS gradient fallback)
- Loader: ArcRevealHero with animated word cycling + curved curtain reveal
- Gallery: Apple Cards Carousel (custom React/Vite port, no Next.js)
- Typography: Rajdhani (Google Fonts) for display headings, Inter for body

## Where things live

- `artifacts/hammerhead/src/pages/Home.tsx` — full homepage composition
- `artifacts/hammerhead/src/components/ArcRevealHero.tsx` — session-once loader
- `artifacts/hammerhead/src/components/GrainBackground.tsx` — WebGL shader with CSS fallback
- `artifacts/hammerhead/src/components/AppleCarousel.tsx` — horizontal photo gallery
- `artifacts/hammerhead/src/components/Navbar.tsx` — fixed top navigation
- `artifacts/hammerhead/src/index.css` — Tailwind v4 theme tokens + font imports
- `attached_assets/` — team logo and photos (aliased as @assets in Vite and TS)

## Architecture decisions

- Presentation-first: no backend needed for the homepage
- WebGL is detected synchronously before rendering the shader (avoids crash in headless/no-WebGL environments)
- Loader uses sessionStorage key so it only plays once per browser session
- Images imported via `@assets/*` Vite alias pointing to `attached_assets/`
- Font utility `font-rajdhani` registered in Tailwind @theme block

## Product

A single-page homepage featuring:
1. ArcReveal intro loader with motorsport word sequence
2. Full-screen hero with animated GrainGradient shader background (orange/amber/pink)
3. Fixed navbar with logo, nav links, and Contact CTA
4. Photo gallery carousel (Shell Eco-Marathon team photos)
5. Footer

## User preferences

_Populate as you build._

## Gotchas

- `.JPG` (uppercase) requires explicit TypeScript declarations in `src/vite-env.d.ts`
- WebGL is unavailable in headless/screenshot browsers — the CSS gradient fallback handles this
- The ArcReveal loader makes the first screenshot look black — this is expected
- Framer Motion must be imported from `"framer-motion"`, not `"motion/react"`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
