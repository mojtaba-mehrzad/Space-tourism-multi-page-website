import { useRef } from "react";
import { useGsap } from "@/utils/useGsap";
import { titleAnimation } from "@/animations/title";

export default function PageHeader({ number, title }) {
  const titleRef = useRef(null);
  useGsap(() => {titleAnimation(titleRef);}, []);
  
  return (
    <header className="page-title">
      <h1 ref={titleRef}>
        <span className="page-title-number">{number}</span>
        {title}
      </h1>
    </header>
  );
}
