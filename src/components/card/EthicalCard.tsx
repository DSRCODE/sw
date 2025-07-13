"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

const EthicalCard = ({
  className,
  title,
  description,
  animationFile,
}: {
  className: string;
  title: string;
  description: string;
  animationFile: Record<string, unknown>;
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && animationContainer.current) {
      import("lottie-web").then((lottie) => {
        animationInstance.current = lottie.default.loadAnimation({
          container: animationContainer.current!,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: animationFile,
        });
        animationInstance.current.stop();
      });
    }

    return () => {
      animationInstance.current?.destroy();
    };
  }, [animationFile]);

  const handleInteraction = () => {
    if (isMobile) {
      setIsActive((prev) => {
        const newState = !prev;
        if (newState) {
          animationInstance.current?.goToAndPlay(0, true);
        } else {
          animationInstance.current?.stop();
        }
        return newState;
      });
    }
  };

  return (
    <div
      className={`h-[300px] md:w-[450px] w-full group overflow-hidden relative ${className}`}
      onMouseEnter={!isMobile ? () => animationInstance.current?.goToAndPlay(0, true) : undefined}
      onMouseLeave={!isMobile ? () => animationInstance.current?.stop() : undefined}
      onClick={handleInteraction}
    >
      <div ref={animationContainer} className="absolute inset-0 pointer-events-none"></div>

      {/* Card Content */}
      <div className="absolute inset-0">
        {/* Title */}
        <div
          className={`h-full flex items-end p-6 pb-8 transition-transform duration-700 ease-in-out
          ${isActive ? "-translate-y-[300px]" : "translate-y-0"}
          group-hover:-translate-y-[300px]`}
        >
          <h2 className="md:text-3xl text-2xl">{title}</h2>
        </div>

        {/* Description */}
        <div
          className={`p-6 pt-8 transition-transform duration-700 ease-in-out
          ${isActive ? "-translate-y-[300px]" : "translate-y-[200px]"}
          group-hover:-translate-y-[300px]`}
        >
          <p className="md:text-lg text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EthicalCard;
