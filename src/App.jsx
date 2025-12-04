import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Destination from "@/pages/Destination/Destination";
import RootLayout from "@/components/layout/RootLayout";
import Crew from "@/pages/Crew/Crew";
import Technology from "@/pages/Technology/Technology";

gsap.registerPlugin(
  useGSAP,
  DrawSVGPlugin,
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
  ScrambleTextPlugin
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
    {path:"crew", element: <Crew />},
    {path:"technology", element: <Technology />}
  ]
}],{ basename })

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
