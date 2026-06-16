import { useEffect, useRef } from "react";
import Hammer from "hammerjs";

export function useSwipeNavigation(currentIndex, setIndex, totalItems, disabled = false) {
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (disabled || !containerRef.current) return;

    const container = containerRef.current;

    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const diff = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 80;

      if (Math.abs(diff) < minSwipeDistance) return;

      if (diff > 0) {
        const next = (currentIndex + 1) % totalItems;
        setIndex(next);
      } else {
        const prev = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
        setIndex(prev);
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, setIndex, totalItems, disabled]);

  return containerRef;
}