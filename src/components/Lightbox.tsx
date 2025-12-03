import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: { src: string; title: string; category: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-foreground/95 backdrop-blur-md",
        "animate-fade-in"
      )}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation - Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-4 md:left-8 z-10 p-2 sm:p-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-4 md:right-8 z-10 p-2 sm:p-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Image container */}
      <div
        className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[85vh] flex flex-col items-center px-2 sm:px-0"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-full max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] object-contain animate-scale-in"
          key={currentIndex}
        />

        {/* Image info */}
        <div className="mt-4 sm:mt-6 text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="font-body text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary-foreground/50 block mb-1 sm:mb-2">
            {currentImage.category}
          </span>
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground">
            {currentImage.title}
          </h3>
        </div>

        {/* Image counter */}
        <div className="mt-4 sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-16">
          <span className="font-body text-xs sm:text-sm text-primary-foreground/40 tracking-widest">
            {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
