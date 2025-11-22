import { gsap } from "gsap";
export function heroTitleAnimation(titleRef){
    gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
}