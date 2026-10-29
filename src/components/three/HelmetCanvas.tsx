import { Environment, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HelmetModel from "@/components/three/HelmetModel";

// Narrow FOV reads like a product shot: less perspective distortion.
const CAMERA_FOV = 25;
const CAMERA_POSITION: [number, number, number] = [0, 0.3, 6];

const ACID = "#d7ff00";

type HelmetCanvasProps = {
  onProgress?: (event: ProgressEvent) => void;
  onLoaded?: () => void;
};

export default function HelmetCanvas({ onProgress, onLoaded }: HelmetCanvasProps) {
  return (
    <Canvas
      // The helmet is static, so only render when something changes.
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ fov: CAMERA_FOV, position: CAMERA_POSITION }}
      onCreated={({ camera, gl }) => {
        camera.lookAt(0, 0, 0);
        gl.toneMappingExposure = 1.1;
      }}
      // Inline style, because R3F sets pointer-events inline. Lets hero links
      // stay clickable until the split reveal needs pointer input.
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} />

      <StudioEnvironment />

      <Suspense fallback={null}>
        <HelmetModel onProgress={onProgress} onLoaded={onLoaded} />
      </Suspense>
    </Canvas>
  );
}

// The helmet is almost entirely glossy metal, so its look comes from what it
// reflects. These virtual softboxes are rendered once into an environment map
// (no HDR file to download). Lightformers face the origin by default.
//
// Seen from the front, curved surfaces mostly reflect what's above and behind
// the helmet: the dome reflects overhead light, and the side edges reflect
// light from almost directly behind. Hence most of the rig sits up and back.
function StudioEnvironment() {
  return (
    <Environment resolution={512} frames={1}>
      {/* Overhead strip: the bright band across the top of the shell */}
      <Lightformer form="rect" intensity={8} position={[0, 5, 0.5]} scale={[10, 1, 1]} />
      {/* Wide back panel: rim highlights along the silhouette and dome */}
      <Lightformer form="rect" intensity={2} position={[0, 2, -6]} scale={[12, 3, 1]} />
      {/* Back-rim strips: crisp vertical edges on both sides */}
      <Lightformer form="rect" intensity={4} position={[-3, 1, -5]} scale={[0.8, 8, 1]} />
      <Lightformer form="rect" intensity={4} position={[3, 1, -5]} scale={[0.8, 8, 1]} />
      {/* Acid-lime accents: low left, plus a fainter back-right edge */}
      <Lightformer form="rect" color={ACID} intensity={3} position={[-5, -1.5, 2]} scale={[1.2, 5, 1]} />
      <Lightformer form="rect" color={ACID} intensity={1} position={[5, -2, -2]} scale={[1, 3, 1]} />
      {/* Very low front fill: keeps the carbon weave readable */}
      <Lightformer form="rect" intensity={0.4} position={[0, 0.5, 6]} scale={[4, 2, 1]} />
    </Environment>
  );
}
