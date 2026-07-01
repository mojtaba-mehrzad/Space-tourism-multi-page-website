import { useRef, useState } from "react";
import { useSwipeNavigation, getSwipeDirection } from "@/utils/useSwipeNavigation";

export function useSwipeableItem(data, getKey = (item) => item.name) {
  const [selected, setSelected] = useState(data[0]);
  const directionRef = useRef(1);
  const currentIndex = data.findIndex((item) => getKey(item) === getKey(selected));

  const select = (newItem, direction) => {
    const newIndex = data.findIndex((item) => getKey(item) === getKey(newItem));
    directionRef.current =
      direction ?? getSwipeDirection(currentIndex, newIndex, data.length);
    setSelected(newItem);
  };

  const swipeRef = useSwipeNavigation(
    currentIndex,
    (newIndex, direction) => {
      directionRef.current = direction;
      setSelected(data[newIndex]);
    },
    data.length
  );

  return { selected, select, swipeRef, directionRef, currentIndex };
}
