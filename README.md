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
- glTF Transform (dev-only model optimization)
- Git LFS (3D assets)
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
- [x] Build homepage foundation and route architecture
- [x] Build initial 3D helmet viewer
- [x] Add studio lighting and camera
- [x] Create cinematic hero section (static; split reveal pending)
- [x] Optimize helmet geometry (meshopt compression)
- [ ] Refine cinematic lighting and helmet scale
- [ ] Evaluate the new Meshy helmet model
- [ ] Add the interactive split reveal
- [ ] Build Explore experience (orbit controls, hotspots)
- [ ] Build Customize experience
- [ ] Add GSAP animations
- [ ] Optimize textures (WebP / KTX2 evaluation)
- [ ] Polish responsive layouts and deploy

## Getting Started

The helmet models are stored with [Git LFS](https://git-lfs.com). Install it once before cloning, or the `.glb` files will be small pointer files instead of real models:

```bash
git lfs install
git clone https://github.com/AHagan24/APEX.git
cd APEX
npm install
npm run dev
```

Already cloned without LFS? Run `git lfs pull`.

Open http://localhost:3000.

## 3D Model Pipeline

The helmet exists in two versions, both tracked through Git LFS:

| File | Purpose |
|---|---|
| `assets/models/apex-helmet.source.glb` | The original, untouched model. The source of truth — never deployed. |
| `public/models/apex-helmet.glb` | The optimized model the site loads. **Generated — don't edit by hand.** |

Regenerate the optimized model after any change to the source:

```bash
npm run optimize:model
```

This runs [glTF Transform](https://gltf-transform.dev) with meshopt geometry compression (`--level medium`, 16-bit positions and UVs, 12-bit normals). Textures and materials are copied byte-for-byte. Current result: **68.25 MB → 33.44 MB**, with no visible difference from the original.

The `medium` level is deliberate: the default `high` level saves another ~3.4 MB but stores normals at 8 bits, which visibly shifts specular highlights on the glossy shell.

**Replacing the model** (e.g. a new Meshy export): overwrite the source file, run `npm run optimize:model`, then check the helmet's facing (`FACING_Y`) and size (`HELMET_HEIGHT`) in `src/components/three/HelmetModel.tsx`.

## 3D Architecture

```text
src/components/three/
├── HelmetScene.tsx    Client Component. Loads the canvas client-side only,
│                      shows the loading fallback, catches WebGL/model errors.
├── HelmetCanvas.tsx   R3F <Canvas>, camera, and the studio lighting rig.
└── HelmetModel.tsx    Loads the GLB (with the meshopt decoder), sizes and centers it.
```

- three.js is code-split out of the initial page load via `next/dynamic` with `ssr: false`.
- The canvas uses `frameloop="demand"`: the helmet is static, so the GPU only renders when something changes.
- Lighting is environment-based (Drei `Lightformer` softboxes rendered once into an environment map). The model's own materials are never overridden.
- Hero-specific depth (halo, lime haze, floor glow, contact shadow) is CSS in `Hero.tsx`, so `HelmetScene` stays reusable for Explore and Customize.

## Project Status

The homepage hero renders the optimized 3D helmet with studio lighting. Next: refining the cinematic lighting and helmet scale, and evaluating a new Meshy helmet model, before building the interactive split reveal.