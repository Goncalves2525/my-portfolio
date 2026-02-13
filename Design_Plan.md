# Portfolio UI Overhaul - Design Plan

## Context

Ricardo's portfolio is built on the masterPortfolio React template. While functional, it currently looks like a generic template with flat cards, inconsistent shadows, oversized text, slow 2-second animations, hardcoded colors, and leftover template data (Google AdSense, Analytics, fake address).

The `better-ui` branch is dedicated to transforming this into a polished, modern, **dark-themed** portfolio that reflects a **DevOps/SysAdmin professional identity**.

### Design Direction
- **Theme:** Dark Navy (`#0F172A`) + Cyan/Teal (`#06B6D4`) accent
- **Font:** Inter (replacing proprietary Google Sans)
- **Scope:** Full overhaul of all visual elements + template cleanup

---

## Color Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| Body | Dark Navy | `#0F172A` | Page background |
| Card Background | Slate 800 | `#1E293B` | Card surfaces |
| Text Primary | Slate 100 | `#F1F5F9` | Main text |
| Text Secondary | Slate 400 | `#94A3B8` | Muted text, labels |
| Accent | Cyan 500 | `#06B6D4` | Links, buttons, highlights |
| Accent Hover | Cyan 400 | `#22D3EE` | Hover states |
| Accent Muted | Cyan 900 | `#164E63` | Subtle highlights, tags bg |
| Dark | Near Black | `#020617` | Footer bg, deepest layer |
| Card Border | - | `rgba(148, 163, 184, 0.08)` | Subtle card outlines |
| Card Shadow | - | `0 4px 24px rgba(0, 0, 0, 0.25)` | Default elevation |
| Card Shadow Hover | - | `0 12px 40px rgba(0, 0, 0, 0.35)` | Hover elevation |
| Nav Background | - | `rgba(15, 23, 42, 0.85)` | Glassmorphism header |
| Button | Cyan 500 | `#06B6D4` | Primary button fill |
| Footer Background | Near Black | `#020617` | Footer area |
| Footer Text | Cyan 500 | `#06B6D4` | Footer accent text |
| Splash Background | Near Black | `#020617` | Splash screen |
| Header Color | - | `#06B6D477` | Degree card headers |

---

## Typography System

### Font: Inter (Open Source)
Replacing Google Sans (proprietary) with Inter - a clean, geometric, highly readable font.

### Type Scale (rem-based)
| Variable | Size | Usage |
|----------|------|-------|
| `--text-xs` | 0.75rem (12px) | Tiny labels |
| `--text-sm` | 0.875rem (14px) | Secondary text, nav links |
| `--text-base` | 1rem (16px) | Body text |
| `--text-lg` | 1.125rem (18px) | Large body |
| `--text-xl` | 1.25rem (20px) | Card titles, subtitles |
| `--text-2xl` | 1.5rem (24px) | Sub-headings |
| `--text-3xl` | 1.875rem (30px) | Section headings (mobile) |
| `--text-4xl` | 2.25rem (36px) | Section headings (tablet) |
| `--text-5xl` | 3rem (48px) | Page headings |
| `--text-6xl` | 3.75rem (60px) | Hero title |

### Font Weights
| Variable | Weight | Usage |
|----------|--------|-------|
| `--font-normal` | 400 | Body text |
| `--font-medium` | 500 | Nav links, labels |
| `--font-semibold` | 600 | Buttons, card titles |
| `--font-bold` | 700 | Section headings |
| `--font-extrabold` | 800 | Hero title |

---

## Spacing System

### Scale (rem-based)
| Variable | Size | Px Equivalent |
|----------|------|---------------|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-20` | 5rem | 80px |
| `--space-24` | 6rem | 96px |

### Layout
- **Max content width:** 1200px (`--max-width`)
- **Container padding:** `var(--space-6)` (24px) on sides
- **Breakpoints:** 1200px (tablet), 768px (mobile) - standardized

---

## Transition System

| Variable | Duration | Usage |
|----------|----------|-------|
| `--transition-fast` | 150ms ease | Hover color changes |
| `--transition-base` | 250ms ease | General transitions |
| `--transition-slow` | 400ms cubic-bezier(0.16, 1, 0.3, 1) | Card hover lifts |

### React Reveal Animations
- **Before:** 2000ms duration, 40px distance (sluggish)
- **After:** 800ms duration, 20px distance (snappy)

---

## Phase-by-Phase Implementation

### Phase 0: Design System Foundation

**Goal:** Establish the design language that everything builds upon.

#### 0A. Theme Tokens (`src/theme.js`)
- Add all new color tokens to a new `darkNavyTheme` object
- Set as `chosenTheme`
- Keep existing themes untouched for backwards compatibility

#### 0B. Typography (`src/index.css` + `public/index.html`)
- Add Inter font via Google Fonts link in index.html
- Remove `@font-face` declarations for Google Sans in index.css
- Add all CSS custom properties (type scale, spacing, transitions, max-width)

#### 0C. Global Styles (`src/global.js`)
- Apply `max-width: var(--max-width)` + `margin: 0 auto` to all major containers
- Add `::selection` with accent color
- Update font-family to `var(--font-family)`
- Smoother body transition

---

### Phase 1: Navigation & Header

**Goal:** Sticky glassmorphism header that stays visible while scrolling.

**Changes to `src/components/header/Header.js` + `Header.css`:**
- Wrap `<header>` in sticky container with:
  - `position: sticky; top: 0; z-index: 1000`
  - `backdrop-filter: blur(12px)` (glassmorphism)
  - Semi-transparent navy background
  - Subtle border-bottom
- Nav links: Inter font, medium weight, rounded hover background
- Fix hamburger icon: `background: currentColor` (was hardcoded `#333`)
- Reduce Fade animation: 2000ms -> 600ms

---

### Phase 2: Hero / Greeting Section

**Goal:** Impactful first impression with modern typography.

**Changes to `src/containers/greeting/Greeting.css` + `Greeting.js`:**
- Title: 60px (`--text-6xl`), weight 800, letter-spacing -0.03em
- Subtitle: 20px (`--text-xl`), line-height 1.7, max-width 540px (was 40px - way too large)
- `min-height: 60vh` with vertical centering
- Add floating animation on illustration: subtle `translateY(-12px)` over 6 seconds
- Use `gap: var(--space-12)` between columns
- Mobile: column stack, image on top, centered text

---

### Phase 3: Buttons

**Goal:** Theme-aware buttons with micro-interactions.

**Changes to `src/components/button/Button.css` + `Button.js`:**
- Replace hardcoded `#55198b` with `theme.buttonPrimary` (cyan)
- Hover: `translateY(-2px)` + cyan glow shadow
- Active: `translateY(0)` press feedback
- Inter font, semibold, 14px, 14px/28px padding
- Border-radius: 8px

---

### Phase 4: Card System

**Goal:** Consistent, modern card designs with hover elevation.

#### 4A. Certification Cards
**Files:** `src/components/certificationCard/CertificationCard.css` + `src/containers/certifications/Certifications.css`
- Layout: `display: inline-block` -> **CSS Grid** (`repeat(3, 1fr)`)
- Cards: dark card bg (#1E293B), subtle border, 12px radius
- Hover: `translateY(-4px)` + elevated shadow
- Remove dated dark overlay hover (the "Certificate" text) - replace with subtle glow
- Responsive: 3 -> 2 -> 1 columns

#### 4B. Degree Cards
**Files:** `src/components/degreeCard/DegreeCard.css`
- Card body: consistent 12px radius, dark shadows
- Logo: softer shadow, consistent 280px
- Hover elevation effect
- Inter font throughout

#### 4C. Experience Cards
**Files:** `src/components/experienceCard/ExperienceCard.css`
- Cards: 12px radius, consistent shadow
- Hover: `translateY(-2px)` + elevated shadow
- Company link: `currentColor` instead of hardcoded `#000`
- Duration/location: theme.secondaryText

#### 4D. Project Cards (GithubRepoCard)
**Files:** `src/components/githubRepoCard/GithubRepoCard.css` + `src/pages/projects/Projects.css`
- Layout: flex -> **CSS Grid** (`repeat(auto-fill, minmax(320px, 1fr))`)
- Cards: dark bg, consistent border/shadow/radius
- Hover: `translateY(-4px)` + elevated shadow
- Description: 3 lines instead of 2
- Keep existing category tag colors

---

### Phase 5: Skills Section

**Goal:** Better spacing and icon interaction.

**Changes to `src/containers/skills/Skills.css` + `src/components/softwareSkills/SoftwareSkill.css`:**
- Reduce `margin-bottom` from 100px to 64px (`--space-16`)
- Remove `margin-top: 100px` on images
- Section heading: 36px, bold, left-aligned on desktop
- Use `gap: var(--space-12)` between image and text
- Software icons: flex-wrap with gap, hover `translateY(-3px)`

---

### Phase 6: Page Headers

**Goal:** Unified heading styles across Education, Experience, Projects, Contact pages.

**Files:** 4 CSS files (EducationComponent.css, Experience.css, Projects.css, ContactComponent.css)
- Main heading: 48px (`--text-5xl`), bold, -0.02em tracking
- Sub-heading: 24px (`--text-2xl`), medium weight
- Body text: 16px (`--text-base`), 1.7 line-height
- Unified breakpoint at 1200px (was inconsistent 1380px/1200px)
- Mobile: 30px heading, column stack

---

### Phase 7: Footer

**Goal:** Professional footer with social links.

**Changes to `src/components/footer/Footer.js` + `Footer.css`:**
- Add `border-top` with subtle accent color
- Import and display SocialMedia component
- Text: "(c) 2026 Ricardo Goncalves. All rights reserved."
- Padding: 40px top/bottom
- Inter font, 14px

---

### Phase 8: Social Media Icons

**Goal:** Cleaner layout with hover micro-interactions.

**Changes to `src/components/socialMedia/SocialMedia.css`:**
- `display: flex; gap` instead of margins
- Icon circles: 2.4rem, cleaner sizing
- Hover: `translateY(-3px)` + shadow
- Smooth transitions

---

### Phase 9: Animations & Top Button

**Goal:** Snappier animations, better scroll-to-top button.

#### Animations (across ~10 component files)
- All `duration={2000}` -> `duration={800}`
- All `distance="40px"` -> `distance="20px"`
- Degree card Flip: -> `duration={1000}`

#### Top Button (`src/components/topButton/TopButton.css`)
- Round: 48px circle
- Hover: `translateY(-3px)` + shadow
- Consistent styling with card system

---

### Phase 10: Template Cleanup

**Goal:** Make the portfolio truly Ricardo's.

#### 10A. Remove tracking scripts (`public/index.html`)
- Remove Google AdSense (lines 26-32)
- Remove Google Ads gtag (line 34)
- Remove Google Analytics UA-158726526-1 (lines 39-47)
- Fix `og:url` from `https://ashutosh1919.github.io/`

#### 10B. Clean contact data (`src/portfolio.js`)
- Empty `blogSection` (links to ashutoshhathidara.com)
- Empty `addressSection` (fake San Jose, CA address)

#### 10C. Experience accordion (`src/containers/experienceAccordion/ExperienceAccordion.js`)
- Update baseui overrides for consistent border-radius and theme colors

#### 10D. Section containers (`src/containers/education/Educations.css`, `src/containers/projectsAccordion/ProjectsAccordion.css`)
- Consistent heading fonts and section spacing

---

## Files Modified (Complete List)

### Core Design System (3 files)
- `src/theme.js`
- `src/index.css`
- `src/global.js`

### HTML (1 file)
- `public/index.html`

### Components (14 files)
- `src/components/header/Header.js` + `Header.css`
- `src/components/footer/Footer.js` + `Footer.css`
- `src/components/button/Button.js` + `Button.css`
- `src/components/certificationCard/CertificationCard.js` + `CertificationCard.css`
- `src/components/degreeCard/DegreeCard.js` + `DegreeCard.css`
- `src/components/experienceCard/ExperienceCard.js` + `ExperienceCard.css`
- `src/components/githubRepoCard/GithubRepoCard.js` + `GithubRepoCard.css`
- `src/components/socialMedia/SocialMedia.css`
- `src/components/softwareSkills/SoftwareSkill.css`
- `src/components/topButton/TopButton.css`

### Containers (5 files)
- `src/containers/greeting/Greeting.js` + `Greeting.css`
- `src/containers/skills/Skills.css`
- `src/containers/certifications/Certifications.css`
- `src/containers/education/Educations.css`
- `src/containers/experienceAccordion/ExperienceAccordion.js`
- `src/containers/projectsAccordion/ProjectsAccordion.css`
- `src/containers/skills/SkillSection.js`

### Pages (8 files - animation updates)
- `src/pages/education/EducationComponent.js` + `EducationComponent.css`
- `src/pages/experience/Experience.js` + `Experience.css`
- `src/pages/projects/Projects.js` + `Projects.css`
- `src/pages/contact/ContactComponent.js` + `ContactComponent.css`

### Data (1 file)
- `src/portfolio.js`

**Total: ~35 files modified**

---

## Verification Checklist

After each phase:
- [ ] `npm start` runs without errors
- [ ] No console warnings/errors
- [ ] Dark theme renders correctly (light text on dark bg)
- [ ] Cards are readable with good contrast
- [ ] Hover effects work smoothly on all cards
- [ ] Mobile responsive at 768px and 375px
- [ ] Navigation works (sticky, hamburger on mobile)

Final verification:
- [ ] Navigate all 5 pages: Home, Education, Experience, Projects, Contact
- [ ] Test on desktop (1440px), tablet (1024px), mobile (375px)
- [ ] Check no hardcoded colors remain visible
- [ ] Verify all links work (social, certificates, projects)
- [ ] Splash screen (if enabled) uses new dark theme
