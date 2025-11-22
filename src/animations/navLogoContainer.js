import { gsap } from "gsap";
export function navLogoContainerAnimation(logoContainerRef){
    gsap.from(logoContainerRef.current,
        {opacity:0, x:-100, duration:0.7}
    )
}