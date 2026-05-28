import { useEffect, useState } from "react";
import { motion as motionTokens } from "./constants";

type SwarmMotionState = {
  translateX: number;
  translateY: number;
  scale: number;
};

export const useSwarmMotion = () => {
  const [hovered, setHovered] = useState(false);
  const [state, setState] = useState<SwarmMotionState>({
    translateX: 0,
    translateY: 0,
    scale: 1,
  });

  useEffect(() => {
    let frame: number;
    let t = 0;

    const loop = () => {
      t += 0.02;
      const amp = hovered
        ? motionTokens.swarm.hoverAmplitude
        : motionTokens.swarm.idleAmplitude;

      setState({
        translateX: Math.sin(t) * amp,
        translateY: Math.cos(t * 0.8) * amp,
        scale: hovered ? 1.04 : 1,
      });

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [hovered]);

  const style: React.CSSProperties = {
    transform: `translate3d(${state.translateX}px, ${state.translateY}px, 0) scale(${state.scale})`,
    transition: `transform ${motionTokens.duration.fast}s ${motionTokens.easing.out}`,
    willChange: "transform",
  };

  return {
    style,
    bind: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  };
};
