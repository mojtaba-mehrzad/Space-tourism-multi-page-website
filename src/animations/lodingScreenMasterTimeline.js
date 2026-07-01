import { gsap } from "gsap";

const LAUNCH_DURATION = 2.6;
const LAUNCH_DISTANCE = 900;
const STAR_TRAVEL_MULTIPLIER = 2.4;
const MAX_STREAK_SCALE = 22;
const EDGE_FADE_ZONE = 60;

export function loadingScreenMasterTimeline(refs, onComplete) {
  const rocket = refs.rocketRef.current;
  const stars = refs.starsRef.current.filter(Boolean);

  gsap.killTweensOf(rocket);
  gsap.killTweensOf(stars);
  gsap.set(stars, { transformOrigin: "50% 0%" });

  const containerHeight = window.innerHeight;
  const baseTops = stars.map((star) => star.getBoundingClientRect().top);
  const depths = stars.map(() => gsap.utils.random(0.6, 1.5));
  const setY = stars.map((star) => gsap.quickSetter(star, "y", "px"));
  const setScaleY = stars.map((star) => gsap.quickSetter(star, "scaleY"));
  const setOpacity = stars.map((star) => gsap.quickSetter(star, "opacity"));

  const tl = gsap.timeline({
    onComplete: () => setTimeout(onComplete, 500),
  });

  tl.to(
    rocket,
    {
      y: -LAUNCH_DISTANCE,
      rotate: 0,
      duration: LAUNCH_DURATION,
      ease: "power4.in",
    },
    0
  );

  tl.to(
    {},
    {
      duration: LAUNCH_DURATION,
      ease: "none",
      onUpdate: function () {
        const linear = this.progress();
        const eased = linear * linear * linear * linear;
        const velocity = 4 * linear * linear * linear;

        stars.forEach((_, i) => {
          const depth = depths[i];
          const baseTop = baseTops[i];
          const traveled = eased * containerHeight * STAR_TRAVEL_MULTIPLIER * depth;
          const wrapped = gsap.utils.wrap(0, containerHeight, baseTop + traveled);

          setY[i](wrapped - baseTop);
          setScaleY[i](1 + velocity * (MAX_STREAK_SCALE / 4) * depth);

          const distFromTop = wrapped;
          const distFromBottom = containerHeight - wrapped;
          const edgeFade = gsap.utils.clamp(
            0,
            1,
            Math.min(distFromTop, distFromBottom) / EDGE_FADE_ZONE
          );
          const baseOpacity = gsap.utils.clamp(0.2, 1, 1 - eased * 0.35);
          setOpacity[i](baseOpacity * edgeFade);
        });
      },
    },
    0
  );

  return tl;
}