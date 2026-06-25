# Dark Luxury Editorial Portfolio — Full Redesign

Transform the existing light-themed corporate portfolio into a **cinematic, dark editorial creative-tech portfolio** inspired by modern creative agency websites and poster-style layouts.

## Current State

The project is a **Next.js 14 + Tailwind CSS 3 + TypeScript** app at `c:\laragon\www\RidBar Portofolio`. It currently uses:
- Light color scheme (`#eef3f5` cloud bg, `#101418` ink text, `#23c6a5` signal accent)
- Standard corporate layout with `Inter` font
- Existing components: [Header.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/Header.tsx), [ProjectCard.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/ProjectCard.tsx), [ProjectVisual.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/ProjectVisual.tsx), [SectionTitle.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/SectionTitle.tsx)
- Rich project data in [projects.ts](file:///c:/laragon/www/RidBar%20Portofolio/data/projects.ts) (8 projects, screenshots, tech stacks, etc.)
- Sub-pages: `/about`, `/contact`, `/projects`, `/projects/[slug]`, `/portfolio-pdf`, `/resume`
- 55+ real screenshot assets in `/public/screenshots/`

> [!IMPORTANT]
> **This is a complete visual overhaul of the landing page only.** Sub-pages (`/about`, `/contact`, `/projects/[slug]`) will NOT be modified in this phase. They will continue to work but will retain their current styling until a future phase.

## User Review Required

> [!WARNING]
> **Framer Motion dependency**: The plan adds `framer-motion` (~40KB gzipped) for premium animations. This is the standard React animation library and provides far superior results to CSS-only animations for staggered reveals, parallax, and scroll-triggered effects. If you prefer CSS-only animations to avoid the dependency, let me know.

> [!IMPORTANT]
> **Tailwind CSS version**: Your project uses Tailwind CSS v3.4.4. The plan will use Tailwind v3 syntax. You mentioned "responsive Tailwind CSS styling" — confirmed.

> [!IMPORTANT]
> **Font choice**: The plan uses **"Bebas Neue"** (bold condensed display) for headlines + **"Inter"** (already installed) for body text. Bebas Neue is free on Google Fonts and delivers the editorial poster aesthetic you described. Alternative: "Oswald" if you prefer slightly softer condensed type.

## Open Questions

> [!IMPORTANT]
> **Profile image**: You mentioned a "central visual area for a profile photo or abstract 3D object." I will create an **abstract geometric placeholder** (CSS/SVG-based industrial wireframe visual) that you can later replace with your own photo. Is this approach acceptable, or do you want me to generate an AI placeholder image instead?

> [!IMPORTANT]  
> **Featured projects in hero preview**: You listed 4 specific projects (CMB, OEE Dashboard, Production Scheduling System, Color Formulation Tool). However, your existing data has different project names. I will:
> - Map **CMB** → existing `cmb-manufacturing-execution` project
> - Map **OEE Dashboard** → existing `oee-production-monitoring` project  
> - **Create new entries** for "Production Scheduling System" and "Color Formulation Tool" in the featured projects section (these don't exist in current data)
> 
> Should I add these as new projects to `projects.ts`, or only display them as static preview cards on the landing page?

---

## Proposed Changes

### Design System — Colors, Typography, Tokens

The entire visual identity shifts from light corporate to dark luxury editorial.

#### [MODIFY] [tailwind.config.ts](file:///c:/laragon/www/RidBar%20Portofolio/tailwind.config.ts)

- **New color palette**:
  | Token | Value | Usage |
  |-------|-------|-------|
  | `void` | `#0A0A0A` | Page background — near-black |
  | `surface` | `#111111` | Card/section backgrounds |
  | `elevated` | `#1A1A1A` | Elevated panels, nav |
  | `muted` | `#2A2A2A` | Borders, subtle elements |
  | `dust` | `#666666` | Secondary text |
  | `fog` | `#999999` | Tertiary text |
  | `chalk` | `#E8E4E0` | Primary text — warm off-white |
  | `bone` | `#F5F2EE` | Headline text — bright off-white |
  | `ember` | `#DC2626` | Accent red — strong, vibrant |
  | `ember-dark` | `#991B1B` | Red hover/active state |

- **New font families**: `display` (Bebas Neue) and `body` (Inter)
- **Custom keyframes**: `marquee`, `reveal-up`, `fade-in`, `pulse-glow`
- **Extended spacing and screen breakpoints** for cinematic layouts

---

#### [MODIFY] [globals.css](file:///c:/laragon/www/RidBar%20Portofolio/app/globals.css)

Complete rewrite:
- Dark color scheme (`color-scheme: dark`)
- Background `#0A0A0A` 
- Smooth scrolling
- Custom selection color (red accent)
- Grid-line utility class (subtle dark grid overlay)
- Marquee animation keyframes
- Staggered animation classes (`.anim-reveal-1` through `.anim-reveal-8`)
- Custom scrollbar styling (thin, dark)
- Typography utility classes for the condensed display font
- Noise/grain texture overlay utility

---

### Layout — Root Layout

#### [MODIFY] [layout.tsx](file:///c:/laragon/www/RidBar%20Portofolio/app/layout.tsx)

- Import **Bebas Neue** alongside Inter from `next/font/google`
- Set CSS variables for both font families on `<html>`
- Update metadata title/description for SEO
- Add dark background class to `<body>`

---

### Navigation — Redesigned Header

#### [MODIFY] [Header.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/Header.tsx)

Complete redesign:
- **Dark transparent background** with backdrop blur
- **Left**: "RIDHA AKBAR" name in condensed caps
- **Right**: "About", "Projects", "Experience", "Contact" — minimal, spaced, uppercase micro-text
- **Mobile**: Hamburger menu with slide-in panel
- Sticky behavior with subtle border-bottom on scroll
- No PDF download button in main nav (moved elsewhere)

---

### Hero Section — New Cinematic Component

#### [NEW] [HeroSection.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/HeroSection.tsx)

The centerpiece of the redesign. Full-viewport cinematic hero with:

**Layout (Desktop)**:
```
┌──────────────────────────────────────────────────────────────────┐
│ NAV: RIDHA AKBAR                    About  Projects  Experience │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─ micro labels ─┐        ┌──────────────────┐                 │
│  │ SYS.001         │        │                  │   ┌──────────┐ │
│  │ 48°51'N         │        │  PROFILE IMAGE   │   │  VIEW    │ │
│  └─────────────────┘        │  / ABSTRACT 3D   │   │ PROJECTS │ │
│                              │                  │   │  (red    │ │
│  BUILDING SYSTEMS            │  (parallax)      │   │  circle) │ │
│  FOR REAL OPERATIONS.        │                  │   └──────────┘ │
│                              └──────────────────┘                │
│  I design and build digital tools that help                      │
│  manufacturing teams monitor, control, and                       │
│  improve production.                                             │
│                                                                  │
│  MUHAMMAD RIDHA AKBAR                                            │
│  ────────────────────                                            │
│  OPERATIONS SYSTEM BUILDER · LARAVEL DEVELOPER · INDUSTRIAL ENG │
│                                                                  │
│  ┌─ counter ─┐  ┌─ counter ─┐  ┌─ counter ─┐                   │
│  │ 08        │  │ 2024—25   │  │ ACTIVE    │                    │
│  │ SYSTEMS   │  │ PERIOD    │  │ STATUS    │                    │
│  └───────────┘  └───────────┘  └───────────┘                    │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│ ◀ Laravel • Manufacturing Systems • MES • OEE Dashboard • ... ▶ │
└──────────────────────────────────────────────────────────────────┘
```

**Elements**:
- Headline: `"BUILDING SYSTEMS\nFOR REAL OPERATIONS."` in Bebas Neue, ~8-12vw size, bone/chalk color
- Subtitle: Smaller Inter text below headline
- Name: `"MUHAMMAD RIDHA AKBAR"` in tracked uppercase, muted
- Role labels: Three pill/tag elements with borders
- **Red circular "VIEW PROJECTS" button**: ~120px circle, absolute positioned, with hover scale/glow animation
- **Central visual**: Placeholder div with CSS geometric pattern (concentric circles, grid lines, rotating elements) — clearly marked with comments for replacement
- **Decorative elements**:
  - Grid overlay (faint lines across hero)
  - Coordinate labels: `"48°51'N 2°21'E"`, `"SYS.001"` positioned in corners
  - System label: `"OPERATIONS // 2024"` 
  - Project counters: `"08 SYSTEMS BUILT"`, `"2024—25"`, `"STATUS: ACTIVE"`
  - Horizontal rules at strategic positions
  - Small blinking dot indicators
- **Marquee strip**: Bottom of hero, full-width scrolling text
- **Manufacturing visual references**: Small dashboard mock cards, workflow node diagram (CSS-drawn), data grid pattern

**Animations** (Framer Motion):
- Headline: Clip-path reveal from bottom, 0.6s ease-out, staggered per line
- Subtitle: Fade-in + translate-up, 0.4s delay
- Name + role labels: Stagger from left, 0.1s between each
- Decorative elements: Fade in with 0.8-1.2s delays
- Central visual: Subtle parallax on mouse move (`useMotionValue` + `useTransform`)
- Red button: Scale pulse on idle, magnetic hover effect
- Marquee: Infinite CSS translateX animation

---

### Featured Projects Section — New Component

#### [NEW] [FeaturedProjects.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/FeaturedProjects.tsx)

Below the hero — editorial project preview cards:

**Layout**:
```
┌──────────────────────────────────────────────────────────────────┐
│  SELECTED WORK                                    04 PROJECTS    │
│  ═══════════════                                                 │
│                                                                  │
│  ┌─────────────────────────┐  ┌─────────────────────────────┐   │
│  │ 01                      │  │ 02                          │   │
│  │ CMB                     │  │ OEE DASHBOARD               │   │
│  │ Computerized            │  │ Machine performance,        │   │
│  │ Monitoring Board        │  │ downtime, and operational   │   │
│  │                         │  │ efficiency analytics        │   │
│  │ [screenshot preview]    │  │                             │   │
│  │                         │  │ [screenshot preview]        │   │
│  │ Laravel · MySQL · Vite  │  │ Laravel · Chart.js · MySQL  │   │
│  └─────────────────────────┘  └─────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────┐  ┌─────────────────────────────┐   │
│  │ 03                      │  │ 04                          │   │
│  │ PRODUCTION SCHEDULING   │  │ COLOR FORMULATION           │   │
│  │ Mixer and extruder      │  │ Formula adjustment and      │   │
│  │ scheduling workflow     │  │ color estimation system     │   │
│  └─────────────────────────┘  └─────────────────────────────┘   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Each card**:
- Large project number (`01`, `02`, etc.) in condensed font
- Project title in Bebas Neue
- Description in Inter
- Screenshot preview using existing `/public/screenshots/` assets (where available)
- Tech stack tags at bottom
- Hover: card lifts, border glows red, screenshot zooms slightly
- Click: navigates to `/projects/[slug]`

**Scroll animation** (Framer Motion):
- Cards animate in as they enter viewport (staggered fade-up)

---

### Marquee Component — Reusable

#### [NEW] [Marquee.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/Marquee.tsx)

A reusable infinite horizontal scrolling text component:
- Takes an array of text items
- Renders them duplicated for seamless loop
- Uses CSS `@keyframes` for smooth performance
- Separator: `•` dot between items
- Styled: uppercase, tracked, small font, muted color with red accent dots
- Pausable on hover

---

### Abstract Visual Placeholder

#### [NEW] [HeroVisual.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/HeroVisual.tsx)

CSS/SVG-based industrial placeholder:
- Concentric circles with dashed borders (machine/gauge feel)
- Small data labels rotating around the circle
- Grid overlay within the visual area
- Subtle red accent pulse
- Central placeholder for profile image (clearly commented: `{/* REPLACE: Add your profile photo here */}`)
- Parallax wrapper that responds to mouse position

---

### Manufacturing Decorative Elements

#### [NEW] [TechDecorations.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/TechDecorations.tsx)

Collection of small decorative sub-components:
- `<Coordinates />` — small lat/lon label
- `<SystemLabel />` — `"SYS.001"` style label
- `<StatusDot />` — blinking green/red indicator
- `<DataGrid />` — small CSS grid pattern (looks like machine data)
- `<ProjectCounter count={8} />` — styled counter
- `<WorkflowNodes />` — small inline workflow diagram (circles + lines)

All used within the hero and sparingly in the projects section.

---

### Profile Data Update

#### [MODIFY] [profile.ts](file:///c:/laragon/www/RidBar%20Portofolio/data/profile.ts)

Add new fields:
- `heroHeadline`: `"BUILDING SYSTEMS\nFOR REAL OPERATIONS."`
- `heroSubtitle`: `"I design and build digital tools that help manufacturing teams monitor, control, and improve production."`
- `roles`: `["OPERATIONS SYSTEM BUILDER", "LARAVEL DEVELOPER", "INDUSTRIAL ENGINEER"]`
- `marqueeItems`: `["Laravel", "Manufacturing Systems", "MES", "OEE Dashboard", "Automation", "Production Monitoring", "MySQL"]`
- `socialLinks` placeholder object (GitHub, LinkedIn, email)
- `resumeLink` placeholder string
- Comments marking all customizable fields

---

### Landing Page — Complete Rewrite

#### [MODIFY] [page.tsx](file:///c:/laragon/www/RidBar%20Portofolio/app/page.tsx)

The entire landing page is recomposed:

```tsx
<main>
  <Header />              {/* Redesigned dark nav */}
  <HeroSection />          {/* Full-screen cinematic hero */}
  <FeaturedProjects />     {/* 4 editorial project cards */}
</main>
```

The existing skills, impact, timeline, and footer sections are **temporarily removed** from the landing page to keep it focused and editorial. They can be re-added in future phases or moved to the `/about` page.

> [!WARNING]
> **Sections removed from landing page**: Skills grid, Impact metrics, Delivery approach, and the bottom 3-card dark section. These still exist in the codebase and can be restored. The goal is a focused, cinematic landing page, not a long scrolling corporate page.

---

## File Summary

| Action | File | Purpose |
|--------|------|---------|
| MODIFY | [tailwind.config.ts](file:///c:/laragon/www/RidBar%20Portofolio/tailwind.config.ts) | New dark color palette, fonts, keyframes |
| MODIFY | [globals.css](file:///c:/laragon/www/RidBar%20Portofolio/app/globals.css) | Dark theme, animations, utilities |
| MODIFY | [layout.tsx](file:///c:/laragon/www/RidBar%20Portofolio/app/layout.tsx) | Add Bebas Neue font, dark body |
| MODIFY | [Header.tsx](file:///c:/laragon/www/RidBar%20Portofolio/components/Header.tsx) | Dark editorial nav redesign |
| NEW | `components/HeroSection.tsx` | Full-screen cinematic hero |
| NEW | `components/HeroVisual.tsx` | Abstract profile placeholder |
| NEW | `components/FeaturedProjects.tsx` | Editorial project cards |
| NEW | `components/Marquee.tsx` | Infinite scrolling text strip |
| NEW | `components/TechDecorations.tsx` | Decorative UI elements |
| MODIFY | [profile.ts](file:///c:/laragon/www/RidBar%20Portofolio/data/profile.ts) | New hero/role/social fields |
| MODIFY | [page.tsx](file:///c:/laragon/www/RidBar%20Portofolio/app/page.tsx) | Recomposed landing page |

**New dependency**: `framer-motion` (install via `npm install framer-motion`)

---

## Verification Plan

### Automated Tests
```bash
npm run build
```
Ensures no TypeScript errors, no broken imports, and successful static generation.

### Manual Verification
1. **`npm run dev`** — visual inspection on `http://localhost:3000`
2. **Desktop viewport** (1440px+): Verify cinematic hero layout, typography scale, parallax, animations
3. **Tablet viewport** (768px): Verify responsive breakpoints, column stacking
4. **Mobile viewport** (375px): Verify typography hierarchy, marquee, hamburger nav
5. **Animation check**: Page load reveals, scroll-triggered project cards, button hovers
6. **Navigation**: All nav links still work (`/about`, `/projects`, `/contact`, etc.)
7. **Performance**: Lighthouse check for Core Web Vitals — target 90+ performance score
8. **Screenshot**: Capture browser screenshots for visual walkthrough
