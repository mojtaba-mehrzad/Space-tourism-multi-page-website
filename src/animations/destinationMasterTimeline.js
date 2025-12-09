import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import { risingUpAnimation } from "./risingUp";
import { gsap } from "gsap";
import { usePlanetImageTransition } from "./usePlanetImageTransition";

export function destinationMasterTimeline(refs, planet) {
  const tl = gsap.timeline();

  tl.add(usePlanetImageTransition(refs, planet.images.png))
    .add(scrambleTextAnimation(refs.planetName.current, planet.name))
    .add(textMaskingWrapper(refs.description.current, planet.description))
    .add(risingUpAnimation(refs.SeparatorLine.current))
    .add(risingUpAnimation(refs.TravelInfoContainer.current), "<")
    .add(scrambleTextAnimation(refs.travelVal.current, planet.travel), "-=0.6")
    .add(scrambleTextAnimation(refs.distanceVal.current, planet.distance), "<");

  return tl;
}
