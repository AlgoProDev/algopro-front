import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  lottiePath: string;
  height?: number | string;
  width?: number | string;
}

const Loader: React.FC<LottieAnimationProps> = ({ lottiePath, height, width }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  let anim: AnimationItem | null = null;

  useEffect(() => {
    if (animationContainer.current) {
      anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: lottiePath,
      });
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, [lottiePath]);

  return <div ref={animationContainer} style={{ height, width }} />;
};

export default Loader;
