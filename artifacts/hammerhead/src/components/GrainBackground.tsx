import { GrainGradient } from "@paper-design/shaders-react";

function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("webgl2") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export function GrainBackground() {
  const webglSupported = isWebGLSupported();

  if (!webglSupported) {
    return (
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, hsl(14 100% 35% / 0.7) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, hsl(340 82% 35% / 0.6) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, hsl(45 100% 30% / 0.4) 0%, transparent 50%), #050505",
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(0, 0%, 0%)"
        softness={0.76}
        intensity={0.45}
        noise={0}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={1}
        colors={["hsl(14, 100%, 57%)", "hsl(45, 100%, 51%)", "hsl(340, 82%, 52%)"]}
      />
    </div>
  );
}
