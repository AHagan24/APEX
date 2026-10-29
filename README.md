# APEX

An immersive, motorsport-inspired portfolio experience built with Next.js, React Three Fiber, and Three.js.

APEX combines realistic 3D visuals, interactive helmet customization, and cinematic animations with a futuristic Acidwave/Y2K design.

## Vision

Create a premium interactive website that feels like a motorsport experience rather than a traditional portfolio.

**Design direction:**
- Dark backgrounds, carbon fiber, metallic finishes, and acid lime (`#D7FF00`)
- Bold motorsport typography and futuristic UI
- Smooth transitions and responsive interactions
- High-quality 3D models with optimized performance

## Tech Stack

- Next.js (App Router)
- React and TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP (planned)

## Core Features

### 1. Cinematic Hero
A full-screen racing helmet experience with bold typography, dramatic lighting, and an interactive cursor-driven reveal.

### 2. Explore
A 360-degree interactive helmet viewer with rotation, zoom, and clickable hotspots highlighting helmet details.

### 3. Customize
An interactive helmet configurator allowing users to experiment with shell colors, visor tints, accents, and finishes.

### 4. Finale
A cinematic motorsport scene featuring a racing driver, an F1-inspired car, and the message "READY FOR GLORY."

## Development Roadmap

- [x] Initialize Next.js project
- [x] Install Three.js, React Three Fiber, and Drei
- [x] Add helmet GLB asset
- [ ] Build initial 3D helmet viewer
- [ ] Add lighting, camera, and controls
- [ ] Create cinematic hero section
- [ ] Build Explore experience
- [ ] Build Customize experience
- [ ] Add GSAP animations
- [ ] Optimize models and performance
- [ ] Polish responsive layouts and deploy

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

The helmet model is stored at `public/models/apex-helmet.glb`.

## Project Status

Early development. The initial focus is establishing the 3D rendering foundation before implementing advanced interactions and animations.