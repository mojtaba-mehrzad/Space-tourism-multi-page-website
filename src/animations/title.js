import { gsap } from "gsap";
export function titleAnimation(titleRef){
    gsap.from(titleRef.current, {
        x: -80,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })
}