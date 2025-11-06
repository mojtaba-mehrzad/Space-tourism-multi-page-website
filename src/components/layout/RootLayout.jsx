import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/Navbar.jsx";

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
