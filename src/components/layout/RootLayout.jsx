import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/Navbar.jsx";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const { pathname } = useLocation();
  const [bg, setBg] = useState("");

  useEffect(() => {
    const section = document.querySelector("[data-bg]");
    if (!section) return;
    setBg(section.getAttribute("data-bg"));
  }, [pathname]);

  return (
    <>
      <div className={`page-background ${bg}`} aria-hidden="true" />
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
