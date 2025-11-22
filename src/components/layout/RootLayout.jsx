import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/Navbar.jsx";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGsap } from "@/utils/useGsap";
import { pageWrapperAnimation } from "@/animations/pageWrapper";

export default function RootLayout() {
  const { pathname } = useLocation();
  const containerRef = useRef(null);
  useGsap(() => {pageWrapperAnimation(containerRef)}, [pathname]);

  const bgClass = pathname.startsWith("/destination")
    ? "bg-destination"
    : pathname.startsWith("/crew")
    ? "bg-crew"
    : pathname.startsWith("/technology")
    ? "bg-technology"
    : "bg-home";

  return (
    <div className={`${bgClass} min-h-screen bg-base-styles`}>
      <header>
        <Navbar />
      </header>
      <main ref={containerRef}>
        <Outlet />
      </main>
    </div>
  );
}
