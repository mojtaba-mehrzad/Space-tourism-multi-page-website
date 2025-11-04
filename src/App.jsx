import { useState } from "react";
import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./pages/Destination/Destination";

gsap.registerPlugin(
  useGSAP,
  DrawSVGPlugin,
  ScrollTrigger,
  ScrollToPlugin,
  SplitText
);

const basename =
  import.meta.env.MODE === "development"
    ? "/"
    : "/Space-tourism-multi-page-website/";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
