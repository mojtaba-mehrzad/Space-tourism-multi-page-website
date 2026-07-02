import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export function useGsap(callback, deps = []) {
  useLayoutEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  }, deps);
}