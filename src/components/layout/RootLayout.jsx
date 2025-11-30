import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/Navbar.jsx";
import { useEffect } from "react";

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const section = document.querySelector("[data-bg]");
    if (!section) return;
    const bg = section.getAttribute("data-bg");
    document.body.className = bg;
  }, [pathname]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
