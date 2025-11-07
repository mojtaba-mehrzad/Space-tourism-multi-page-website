import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import RootLayout from "./components/layout/RootLayout";
import Crew from "./pages/Crew/Crew";

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

const router = createBrowserRouter([{
  path:"/",
  element: <RootLayout />,
  children:[
    {index:true, element:<Home />},
    {path:"destination", element: <Destination />},
    {path:"crew", element: <Crew />}
  ]
}],{ basename })

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
