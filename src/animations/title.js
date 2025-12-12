import { gsap } from "gsap";
export function titleAnimation(titleRef){
    gsap.from(titleRef.current, {
        x: -300,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
}