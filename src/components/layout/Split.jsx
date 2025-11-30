import { useRef } from "react";
import { useGsap } from "@/utils/useGsap";
import { pageWrapperAnimation } from "@/animations/pageWrapper";

export default function Split({children, className=""}) {
  const containerRef = useRef(null);
  useGsap(() => {pageWrapperAnimation(containerRef)}, []);
  
  return (
    <section ref={containerRef} className={`flex flex-col lg:flex-row ${className}`} >
        {children}
    </section>
  )
}

Split.Left= function Left({children, className=''}){
    return <div className={`flex-1 lg:h-full ${className}`} >{children}</div>
}
Split.Right= function Right({children, className=''}){
    return <div className={`flex-1 lg:h-full ${className}`} >{children}</div>
}