import { useEffect, useRef } from "react";
import Hammer from "hammerjs";

export function useSwipeNavigation(currentIndex, setIndex, totalItems, disabled = false) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (disabled || !containerRef.current) return;

    const hammer = new Hammer(containerRef.current);
    
    hammer.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 50, velocity: 0.3 });

    hammer.on("swipeleft", () => {
      const next = (currentIndex + 1) % totalItems;
      setIndex(next);
    });

    hammer.on("swiperight", () => {
      const prev = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
      setIndex(prev);
    });

    return () => {
      hammer.destroy();
    };
  }, [currentIndex, setIndex, totalItems, disabled]);

  return containerRef;
}