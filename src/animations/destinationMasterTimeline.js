import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import { risingUpAnimation } from "./risingUp";
import { usePlanetImageTransition } from "./usePlanetImageTransition";

export function destinationMasterTimeline(refs, planet, isFirstRenderRef) {
  console.log(refs.distanceValRef.current);
  const tl = gsap.timeline();

  tl.add(usePlanetImageTransition(refs, planet.images, isFirstRenderRef))
    .add(scrambleTextAnimation(refs.planetNameRef.current, planet.name), "-=1.3")
    .add(textMaskingWrapper(refs.descriptionRef.current, planet.description))
    .add(risingUpAnimation(refs.SeparatorLineRef.current))
    .add(risingUpAnimation(refs.TravelInfoContainerRef.current), "<")
    .add(scrambleTextAnimation(refs.travelValRef.current, planet.travel), "-=0.5")
    .add(scrambleTextAnimation(refs.distanceValRef.current, planet.distance), "<");

  return tl;
}