import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/Navbar.jsx";

export default function RootLayout() {
  const { pathname } = useLocation();
  const bgClass = pathname.startsWith("/destination")
    ? "bg-destination"
    : pathname.startsWith("/crew")
    ? "bg-crew"
    : pathname.startsWith("/technology")
    ? "bg-technology"
    : "bg-home";

  return (
    <>
    <div className={`${bgClass} min-h-screen bg-base-styles`}>
      <header>
        <Navbar />
      </header>
      <main >
        <Outlet />
      </main>
    </div>
    </>
  );
}
