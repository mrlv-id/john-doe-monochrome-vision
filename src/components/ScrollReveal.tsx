import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "zoom" 
  | "zoom-rotate"
  | "blur" 
  | "slide-up"
  | "slide-down"
  | "flip-up"
  | "clip-reveal";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const animations: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  zoom: {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "zoom-rotate": {
    initial: "opacity-0 scale-90 rotate-3",
    visible: "opacity-100 scale-100 rotate-0",
  },
  blur: {
    initial: "opacity-0 blur-md scale-105",
    visible: "opacity-100 blur-0 scale-100",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-16",
    visible: "opacity-100 translate-y-0",
  },
  "slide-down": {
    initial: "opacity-0 -translate-y-16",
    visible: "opacity-100 translate-y-0",
  },
  "flip-up": {
    initial: "opacity-0 rotateX-90 perspective-1000",
    visible: "opacity-100 rotateX-0",
  },
  "clip-reveal": {
    initial: "opacity-0 clip-path-inset-full",
    visible: "opacity-100 clip-path-inset-0",
  },
};

const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold, triggerOnce: once });

  const { initial, visible } = animations[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all will-change-transform",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
