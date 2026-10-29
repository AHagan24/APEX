"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useState, type ReactNode } from "react";
import HelmetPlaceholder from "@/components/ui/HelmetPlaceholder";

// three.js ships in its own chunk and only ever runs in the browser.
// `ssr: false` is only allowed inside a Client Component, hence this wrapper.
const HelmetCanvas = dynamic(() => import("@/components/three/HelmetCanvas"), {
  ssr: false,
});

type SceneStatus = "loading" | "ready" | "error";

type HelmetSceneProps = {
  label: string;
  className?: string;
  children?: ReactNode;
};

export default function HelmetScene({ label, className = "", children }: HelmetSceneProps) {
  const [status, setStatus] = useState<SceneStatus>("loading");
  const [progress, setProgress] = useState<string | null>(null);

  // `total` is unknown when the server compresses the file on the fly, so fall
  // back to megabytes received. Whole numbers only: React skips re-rendering
  // when the string hasn't changed, so this updates ~100 times, not thousands.
  const handleProgress = useCallback((event: ProgressEvent) => {
    setProgress(
      event.lengthComputable
        ? `${Math.floor((event.loaded / event.total) * 100)}%`
        : `${Math.floor(event.loaded / 1_000_000)} MB`,
    );
  }, []);
  const handleLoaded = useCallback(() => setStatus("ready"), []);
  const handleError = useCallback(() => setStatus("error"), []);

  const statusText =
    status === "error"
      ? "3D unavailable"
      : progress === null
        ? "Loading"
        : `Loading ${progress}`;

  return (
    <div
      role="img"
      aria-label={label}
      data-state={status}
      className={`relative aspect-5/6 ${className}`}
    >
      <SceneErrorBoundary onError={handleError}>
        {/* Overscan: the canvas is 12% larger than the layout box, so the
            helmet renders bigger (and highlights near the edges aren't
            clipped) without the box itself growing and pushing the layout. */}
        <div className="absolute inset-[-6%]">
          <HelmetCanvas onProgress={handleProgress} onLoaded={handleLoaded} />
        </div>
      </SceneErrorBoundary>

      {/* Loading fallback: the CSS silhouette stays until the model is ready,
          and remains in place if WebGL or the model fails. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
          status === "ready" ? "opacity-0" : "opacity-100"
        }`}
      >
        <HelmetPlaceholder variant="stage" label={label} status={statusText} className="w-full" />
      </div>

      {children}
    </div>
  );
}

type SceneErrorBoundaryProps = {
  onError: () => void;
  children: ReactNode;
};

// Error boundaries still have to be class components in React. This catches a
// missing WebGL context or a failed model load so the Hero keeps rendering.
class SceneErrorBoundary extends Component<SceneErrorBoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
