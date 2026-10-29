<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# APEX — Agent Instructions

## Project Context

APEX is an immersive, motorsport-inspired portfolio built with Next.js, TypeScript, Tailwind CSS, React Three Fiber, Three.js, and Drei.

The visual direction combines realistic motorsport aesthetics with Acidwave/Y2K styling, dark carbon fiber, chrome, and acid lime (`#D7FF00`).

## Development Philosophy

The developer is building this project to strengthen software engineering skills.

**Prioritize teaching and collaboration over generating complete solutions.**

- Work on one task at a time.
- Explain the purpose of new components and concepts.
- Prefer small, understandable code examples.
- Encourage the developer to implement functionality independently.
- Do not rewrite unrelated files.
- Do not introduce unnecessary dependencies.
- Ask before making major architectural changes.
- Explain tradeoffs when multiple approaches are available.

## Code Standards

- Use TypeScript with appropriate types.
- Prefer functional React components.
- Use Server Components by default.
- Add `"use client"` only when client-side interactivity is required.
- Keep components focused and reusable.
- Use the `@/*` import alias.
- Follow existing project conventions.
- Use Tailwind CSS for styling.
- Avoid `any` unless clearly justified.
- Keep code readable rather than unnecessarily abstract.

## 3D Development Rules

- Use React Three Fiber for React-based 3D scenes.
- Use Drei for appropriate helpers and controls.
- Keep 3D scene logic separate from page layout.
- Load the helmet from `/models/apex-helmet.glb`.
- Preserve the helmet's existing textures and materials.
- Avoid expensive effects until performance is measured.
- Properly clean up manually created Three.js resources.
- Consider loading states and mobile performance.
- Keep accessibility and reduced-motion preferences in mind.

## Animation Rules

- Use GSAP for complex timeline-based animations when introduced.
- Prefer simple CSS transitions for basic UI interactions.
- Avoid unnecessary continuous animations.
- Respect `prefers-reduced-motion`.

## Planned Architecture

```text
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── HelmetViewer.tsx
└── ...
public/
└── models/
    └── apex-helmet.glb
```

This structure can evolve as the project grows.

## Workflow

1. Define the task and expected outcome.
2. Identify the files involved.
3. Implement the smallest working version.
4. Test functionality in the browser.
5. Review code quality and performance.
6. Commit the completed milestone.

## Definition of Done

A task is complete when:
- The requested feature works.
- TypeScript and lint checks pass.
- There are no unexpected browser errors.
- Existing functionality remains intact.
- The developer understands the implementation.

## Current Priority

Render the existing helmet GLB inside a React Three Fiber Canvas with suitable lighting, camera positioning, and basic orbit controls.