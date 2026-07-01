import { useEffect, useRef } from "react";
import Hammer from "hammerjs";

export function getSwipeDirection(currentIndex, newIndex, totalItems) {
  if (currentIndex === newIndex) return 1;

  if (newIndex > currentIndex) {
    if (currentIndex === totalItems - 1 && newIndex === 0) return -1;
    return 1;
  }

  if (currentIndex === 0 && newIndex === totalItems - 1) return 1;
  return -1;
}

export function useSwipeNavigation(currentIndex, setIndex, totalItems, disabled = false) {
  const containerRef = useRef(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    if (disabled || !containerRef.current) return;

    const container = containerRef.current;
    let threshold = 80;

    const handleTouchStart = (e) => {
      startX.current = e.changedTouches[0].screenX;
      isDragging.current = true;
    };

    const handleTouchEnd = (e) => {
      if (!isDragging.current) return;
      const endX = e.changedTouches[0].screenX;
      handleGesture(startX.current, endX);
      isDragging.current = false;
    };

    const handleMouseDown = (e) => {
      startX.current = e.screenX;
      isDragging.current = true;
      container.style.cursor = "grabbing";
    };

    const handleMouseUp = (e) => {
      if (!isDragging.current) return;
      const endX = e.screenX;
      handleGesture(startX.current, endX);
      isDragging.current = false;
      container.style.cursor = "grab";
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      container.style.cursor = "grab";
    };

    const handleGesture = (start, end) => {
      const diff = start - end;

      if (Math.abs(diff) < threshold) return;

      if (diff > 0) {
        const next = (currentIndex + 1) % totalItems;
        setIndex(next, 1);
      } else {
        const prev = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
        setIndex(prev, -1);
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    container.style.cursor = "grab";

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [currentIndex, setIndex, totalItems, disabled]);

  return containerRef;
}