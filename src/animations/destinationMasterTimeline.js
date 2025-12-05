import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import { risingUpAnimation } from "./risingUp";
import { gsap } from "gsap";
import { planetFadeAnimation } from "@/animations/planetFade";

export function destinationMasterTimeline(refs, planet) {
  const t1 = gsap.timeline();

  t1.add(planetFadeAnimation(refs.image.current))
    .add(scrambleTextAnimation(refs.planetName.current, planet.name))
    .add(textMaskingWrapper(refs.description.current, planet.description))
    .add(risingUpAnimation(refs.SeparatorLine.current))
    .add(risingUpAnimation(refs.TravelInfoContainer.current), "<")
    .add(scrambleTextAnimation(refs.travelVal.current, planet.travel), "-=0.6")
    .add(scrambleTextAnimation(refs.distanceVal.current, planet.distance), "<");

  return t1;
}
