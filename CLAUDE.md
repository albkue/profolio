# Portfolio Project — Claude Instructions

## Project goal

This is the personal portfolio website for **Sothy Eng**, a final-year Data Science and Engineering student and Software Developer Intern.

The portfolio must present Sothy as a credible backend, data engineering, and AI/computer-vision developer. It should feel premium, modern, technical, and personally distinctive.

The primary audience is recruiters, hiring managers, and technical collaborators.

## Design identity: “Khmer Noir Engineer”

The portfolio must follow a **premium dark editorial developer-portfolio** direction with subtle traditional Khmer-inspired details.

The intended feeling is:

- Premium and luxurious
- Clean and minimal
- Modern and technical
- Confident and knowledgeable
- Culturally Cambodian, but subtle and elegant
- Unique—not a generic developer template or admin dashboard

Do not make the design feel like a SaaS dashboard, corporate template, portfolio template, or overly traditional Khmer website.

## Non-negotiable design constraints

### Color — dual theme

The site ships **two themes**, driven by semantic CSS variables defined in `src/app/globals.css`. Components must use tokens (`background`, `foreground`, `surface`, `elevated`, `muted`, `hairline`, `gold`, `gold-hover`, `gold-contrast`) — never raw hex values — so both themes stay in sync.

- **Default theme: light.** Dark is the signature "Khmer Noir" look.
- Switching is done via `data-theme` on `<html>` (see `ThemeToggle.tsx`); the user's choice persists in `localStorage` and is applied pre-paint in `layout.tsx`.

#### Light mode (default) — "Khmer daylight"

- Page background: `#FAF9F5`
- Surface/card background: `#FFFFFF`
- Elevated surface: `#F3F1E9`
- Primary text: `#16181D`
- Secondary text: `#5F646D`
- Border: `#E5E1D6`
- Accent: antique gold `#8A6D14`
- Accent hover: `#6F570F`
- Text on gold surfaces: `#FAF9F5` (via `--gold-contrast`)

#### Dark mode (signature) — "Khmer Noir"

- Page background: `#0A0A0B`
- Surface/card background: `#111214`
- Elevated surface: `#16181C`
- Primary text: `#F2F2F0`
- Secondary text: `#8A8F98`
- Border: `#1F2126`
- Accent: muted gold `#C9A227`
- Accent hover: `#E3B93A`
- Text on gold surfaces: `#0A0A0B` (via `--gold-contrast`)

Rules:

- Use **only one accent color per theme**: muted gold. Do not introduce additional accent colors (e.g. blue) unless the user explicitly requests them.
- Both themes must express the same identity: warm paper + ink + gold in light; noir + gold in dark.
- Buttons on gold backgrounds must use `text-gold-contrast`, never `text-background`.
- Theme-aware effects (film grain, kbach pattern, hover shadows) read theme variables (`--grain-opacity`, `--pattern-opacity`, `--shadow-color`) — do not hardcode their intensity.
- Use gold sparingly for meaningful emphasis: active links, selected project numbers, key headings, primary CTA hover, and subtle dividers.
- Do not use large gold areas, bright gradients, neon colors, or rainbow accents.
- Maintain sufficient contrast for accessibility in **both** themes (≥4.5:1 for important text).
- Do not place low-contrast gray text on dark backgrounds — or low-contrast text on light backgrounds — for important information.

### Typography

Use a clear, modern type system:

- Headings: Space Grotesk, Satoshi, or Clash Display
- Body: Inter or Geist
- Technical labels, tags, numbers, and small metadata: JetBrains Mono

Rules:

- Create strong visual hierarchy through size, weight, spacing, and contrast.
- Hero headline must be visually dominant.
- Section headings must be clearly larger than body text.
- Use uppercase, letter-spaced monospace labels for section numbers and technical metadata.
- Do not use more than two main font families plus one monospace font.
- Do not use decorative, handwritten, or overly stylized fonts.

### Spacing and layout

- Use generous whitespace and a consistent spacing scale.
- Desktop-first layout, but fully responsive on tablet and mobile.
- Use a centered content container with consistent horizontal padding.
- Maintain clear vertical rhythm between sections.
- Avoid cramped sections, dense tables, and dashboard-like grids.
- Use cards, lists, timelines, and visual summaries instead of tables wherever possible.
- Keep navigation simple and predictable.

### Khmer visual identity

Use Khmer-inspired visual elements as a **subtle design system**, not as decoration everywhere.

Allowed:

- Thin Kbach-inspired geometric line patterns
- Minimal corner motifs
- Elegant section dividers
- A small monogram or emblem beside the name
- A very low-opacity background pattern in the hero and contact sections
- A subtle gold ornamental divider between major sections

Constraints:

- Khmer patterns must be geometric, minimal, refined, and low-opacity.
- Background patterns should be around 4–8% opacity.
- Never place a pattern directly behind body text if it reduces readability.
- Do not use temple photos, complex traditional artwork, religious symbols, or loud cultural patterns.
- Khmer identity should enhance the design; it must not overpower the developer/engineering identity.

## Required visual richness

The site must not feel too simple or empty. Add depth through composition, hierarchy, texture, and interaction—not through extra colors or clutter.

### Hero section

The hero must be the strongest visual section.

Required elements:

- Small uppercase monospace label: `01 — BACKEND & DATA ENGINEERING`
- Large editorial headline
- Short supporting introduction
- Primary CTA: `View Selected Work`
- Secondary CTA: `Download CV`
- Links to GitHub, LinkedIn, and Email
- Subtle dark radial gradient or soft glow behind the headline
- Very subtle Khmer-inspired geometric pattern
- Thin gold divider or corner ornament
- Optional status pill: `Open to opportunities`
- Optional bottom technology strip: `Spring Boot · Kafka · PostgreSQL · Redis · FastAPI · Docker`

Do not use a generic centered “Hello, I am a developer” layout.

### Selected work

The project section must feel premium and editorial.

Rules:

- Feature only 3–4 strong projects.
- Make the strongest project a large featured project.
- Show remaining projects as smaller but polished cards or rows.
- Do not display all projects with identical visual weight.
- Each project must include:
  - Project number in monospace, such as `01 /`
  - Project title
  - One-line problem statement
  - Short description
  - Tech-stack tags
  - Screenshot, UI preview, or architecture diagram
  - `View case study →` link
- Use real or realistic project visuals; do not use random stock images.
- On hover: slightly zoom the image, lift the card, and highlight the border or project number with gold.

### Project case studies

Each major project needs a detailed case study.

Required structure:

1. Project title
2. Short summary
3. Problem
4. My role and responsibilities
5. System architecture
6. Key technical decisions
7. Challenges and solutions
8. Results or impact
9. Tech stack
10. Screenshots, UI previews, or diagrams
11. GitHub, live demo, or private-project note

Rules:

- Do not invent fake achievements, metrics, employers, clients, or project results.
- If a metric is unavailable, describe the engineering outcome qualitatively.
- If a project is private, state: `Private / internal project — detailed walkthrough available on request.`
- Prefer architecture diagrams, sequence diagrams, and data-flow visuals over screenshots-only presentations.
- Do not fill case studies with unnecessary screenshots.

### Section headings

Every major section must have a consistent editorial structure:

```text
02 — SELECTED WORK
03 — EXPERIENCE
04 — SKILLS
05 — ABOUT
06 — CONTACT
```

Rules:

- Use monospace section numbers.
- Use a small uppercase label above the section heading.
- Use a large, clear section title.
- Add a thin divider or subtle Khmer-inspired motif where appropriate.
- Do not repeat the same heading style with no hierarchy.

### Background and depth

- Use layered dark surfaces rather than one flat background color.
- Add subtle grain/noise texture at very low opacity if it improves the premium feeling.
- Add soft radial gradients or subtle lighting behind major sections.
- Use borders, spacing, shadows, and surface elevation to create depth.
- Avoid heavy shadows, glassmorphism overload, neon glow, or excessive gradients.

## Motion system

The portfolio should feel alive, premium, and polished—but never flashy or distracting.

Use purposeful motion to:
- Guide attention to important content
- Show which elements are interactive
- Give feedback when the user hovers or clicks
- Create a smooth transition between sections

### Global motion rules
- Use subtle, smooth, professional animations.
- Use one consistent easing curve across the site.
- Prefer `cubic-bezier(0.22, 1, 0.36, 1)` or `ease-out`.
- Keep most interactions between 180–350ms.
- Keep scroll reveals between 400–700ms.
- Use small movement distances: 8–24px, not large slides.
- Animate only `opacity` and `transform` where possible for performance.
- Avoid animating `width`, `height`, `margin`, or `padding`.
- Do not animate every element with the same delay; use subtle stagger.
- Limit each section to one or two strong motion effects.
- Do not use motion that delays access to content or makes reading harder.

### Required animations

1. Hero entrance
- Animate the hero label, headline, description, buttons, and technology strip in sequence.
- Use a subtle fade-up with 12–20px movement.
- Stagger each element by 80–120ms.
- The headline may use a line-by-line or word-by-word reveal, but it must remain readable and fast.

2. Scroll reveal
- Sections fade up when they enter the viewport.
- Use 400–600ms duration and 12–24px upward movement.
- Stagger project cards, skill groups, experience items, and contact elements slightly.
- Trigger each animation only once; do not replay it every time the user scrolls back.

3. Hover interactions
- Buttons: slight lift, background fill, arrow movement, or border highlight.
- Navigation links: animated underline that grows from left to right.
- Project cards: 2–4px lift, subtle shadow, and image zoom from 1.0 to 1.03–1.05.
- Project links: arrow moves slightly to the right.
- Tech tags: slight lift and border/accent highlight.
- Social icons: subtle scale or color transition.

4. Section transitions
- Add a thin divider line that draws horizontally when a section enters the viewport.
- Animate section numbers or labels with a small fade/slide.
- Do not use full-screen section transitions.

5. Project case-study page
- Animate the title, summary, architecture diagram, and content blocks with a subtle stagger.
- Use image reveal or slight scale-in for visuals.
- Keep navigation between projects smooth and fast.

6. Contact section
- Animate the large heading with a subtle reveal.
- Animate contact buttons and social links with slight stagger.
- If there is a form, animate field focus states and submit-button feedback.

### Forbidden motion
- Loading screens
- Full-page preloader
- Heavy parallax
- Mouse-following cursor effects
- 3D/WebGL effects
- Particles
- Auto-playing videos
- Flashing or rapidly repeating animations
- Excessive text scramble/decrypt effects
- Animations that block scrolling or content access

### Accessibility
- Always respect `prefers-reduced-motion`.
- When reduced motion is enabled, show content immediately without movement.
- Do not use animations that can trigger motion sickness.
- Ensure animations do not interfere with keyboard navigation or screen readers.

### Performance
- Use CSS transitions/animations or lightweight intersection-observer-based reveals.
- Lazy-load below-the-fold images.
- Avoid large animation libraries unless already necessary.
- Ensure animations remain smooth on mobile.

## Content constraints

- Use clear, concise, professional English.
- Do not use lorem ipsum in the final implementation.
- Do not exaggerate experience, skills, or achievements.
- Do not list every technology the user has ever encountered.
- Show only technologies relevant to the presented projects and role.
- Prefer evidence over claims: project context, architecture, contribution, and outcome.
- Keep the personal story short and professional.
- Do not include sensitive company information, private credentials, internal URLs, or confidential business details.

## Engineering constraints

- Use the existing project stack and structure; do not introduce a new framework unless explicitly requested.
- Prefer React/Next.js, TypeScript, and Tailwind CSS if applicable.
- Keep components reusable and avoid duplicated UI code.
- Use semantic HTML and accessible components.
- Add descriptive `alt` text for meaningful images.
- Ensure keyboard navigation and visible focus states.
- Optimize images and avoid large uncompressed assets.
- Keep the site fast; avoid unnecessary client-side JavaScript.
- Use responsive breakpoints consistently.
- Do not break existing routes, content, or functionality when improving the UI.

## Implementation workflow

Before making large visual changes:

1. Inspect the existing pages, components, styles, and content.
2. Identify what specifically makes the current design feel simple.
3. Propose a focused improvement plan.
4. Ask for confirmation before replacing major layout structures or removing existing content.
5. Implement changes incrementally.
6. Verify responsiveness, accessibility, contrast, performance, and visual consistency.

For every UI change:

- Preserve the existing information architecture unless the user asks for a redesign.
- Do not remove real project content, experience, links, or contact details.
- Do not replace real content with placeholder text.
- Do not add fake projects, fake metrics, or fake testimonials.
- Do not make broad refactors when a focused visual improvement is enough.

## Definition of done

A UI change is complete only when:

- The design still feels clean, premium, and minimal.
- The Khmer identity is subtle and elegant.
- The hero has a clear focal point.
- Projects look like polished case studies, not basic repository cards.
- Section hierarchy is obvious.
- The site remains readable and accessible.
- Mobile layout is usable and visually balanced.
- No new bright colors, heavy animations, or cluttered components were added.
- Existing functionality and real content are preserved.

## Responsive screen requirements

The portfolio must look intentional, polished, and fully usable on every screen size.

This is not “desktop-first with a mobile fallback.” Every layout must be designed to work across small phones, large phones, tablets, laptops, desktops, and ultra-wide screens.

### Required screen coverage

Test and optimize for:

- Small mobile: 320px–375px
- Standard mobile: 390px–430px
- Large mobile: 430px–480px
- Small tablet: 600px–768px
- Tablet: 768px–1024px
- Laptop: 1024px–1440px
- Desktop: 1440px–1920px
- Ultra-wide: 1920px+

The site must remain usable and visually balanced from 320px to 2560px.

### Layout rules

- Use a mobile-first approach: create a clean single-column layout first, then enhance it for larger screens.
- Use fluid layouts with relative units: `rem`, `%`, `clamp()`, `min()`, `max()`, and viewport-aware spacing.
- Use CSS Grid and Flexbox for flexible layouts.
- Avoid fixed pixel widths for major containers, images, text blocks, and sections.
- Use `max-width` for readable content, but allow the container to shrink naturally on smaller screens.
- Ensure no horizontal scrolling at any viewport width.
- Ensure no content is cut off, overlapping, or overflowing outside its container.
- Ensure text remains readable without zooming.
- Ensure buttons, links, and interactive elements have a minimum touch target of 44x44px.
- Ensure enough spacing between clickable elements on touch devices.
- Do not hide important content on mobile unless it is truly redundant.
- Do not use tiny text, cramped cards, or overly dense sections on mobile.

### Typography rules

- Use fluid typography with `clamp()` for headings and major text.
- Hero headline must scale down gracefully on small screens.
- Do not allow long words, URLs, project titles, or tech tags to overflow.
- Use `overflow-wrap: break-word` or appropriate text wrapping where needed.
- Maintain readable line length and line height on every screen.
- Do not use extremely large fixed font sizes that break small screens.

### Navigation rules

- On mobile, use a clean hamburger menu, slide-in menu, or full-screen menu.
- Ensure the menu is easy to open and close.
- Ensure navigation links are large enough to tap.
- Ensure the active page or section is clearly visible.
- Keep the CV download and contact CTA accessible on mobile.
- Do not use a cramped horizontal navigation bar on small screens.

### Hero rules

- On mobile, stack the hero content vertically.
- Ensure the headline, description, CTAs, social links, and technology strip remain readable.
- Ensure the Khmer-inspired background pattern does not interfere with text readability.
- Do not use a fixed hero height that cuts off content on small screens.
- Use `min-height` rather than fixed `height` where appropriate.
- Ensure CTA buttons are full-width or comfortably large on small screens.

### Project section rules

- On mobile, display one project per row.
- On tablet, use a suitable one- or two-column layout depending on content.
- On desktop, use an intentional editorial layout with one featured project and supporting projects.
- Ensure project screenshots and architecture diagrams scale correctly.
- Use `aspect-ratio` for images to prevent layout shift.
- Ensure project text does not overlap images.
- Ensure “View case study” links are easy to tap.
- Do not use hover-only information; ensure important project details are visible without hovering.

### Images and media

- Make all images responsive using `max-width: 100%` and appropriate height handling.
- Use `aspect-ratio` to reserve space and prevent layout shift.
- Use responsive image sizes or `srcset` where appropriate.
- Lazy-load below-the-fold images.
- Ensure architecture diagrams remain readable on mobile; provide a zoomable/full-screen view or a mobile-friendly alternative if needed.
- Do not allow diagrams or screenshots to create horizontal scrolling.

### Animation rules

- Ensure animations work smoothly on mobile.
- Disable or simplify nonessential motion on small screens if needed.
- Respect `prefers-reduced-motion`.
- Do not use hover-only interactions for essential information.
- Ensure scroll animations do not cause layout shift or horizontal overflow.

### Dark/light mode

- Ensure the selected light mode remains readable and visually balanced on every screen.
- Ensure cards, borders, text, and accent colors have sufficient contrast on mobile and desktop.
- Ensure the Khmer-inspired patterns remain subtle on all screen sizes.

### Quality checks

Before considering a UI change complete, verify:

1. 320px width
2. 375px width
3. 390px width
4. 414px width
5. 768px width
6. 1024px width
7. 1280px width
8. 1440px width
9. 1920px width
10. 2560px width

For each width, check:

- No horizontal scrolling
- No overlapping elements
- No cut-off text or images
- No cramped spacing
- No broken navigation
- No unreadable text
- No oversized images
- No layout shift
- No inaccessible tap targets
- No broken animations
- No loss of important content

Use browser developer tools, responsive design mode, and real-device testing where possible.