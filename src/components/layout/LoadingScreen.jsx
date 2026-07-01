import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGsap } from "@/utils/useGsap";
import { preloadAllImages } from "../../utils/preloadImages";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const rocketRef = useRef(null);
  const starsRef = useRef([]);

useGsap(() => {
  const startPreload = async () => {
      const imagePaths = await preloadAllImages();
      let loaded = 0;

      const loadPromises = imagePaths.map(src => 
        new Promise(resolve => {
          const img = new Image();
          img.onload = () => {
            loaded++;
            setProgress(Math.round((loaded / imagePaths.length) * 100));
            resolve();
          };
          img.onerror = () => {
            loaded++;
            setProgress(Math.round((loaded / imagePaths.length) * 100));
            resolve();
          };
          img.src = src;
        })
      );

      await Promise.all(loadPromises);

      const tl = gsap.timeline();

      tl.to(rocketRef.current, {
        y: -900,
        duration: 2.8,
        ease: "power4.in",
        onComplete: () => setTimeout(onComplete, 500)
      });

      starsRef.current.forEach((star, i) => {
        tl.to(star, {
          y: 1200,
          duration: 0.6 + Math.random() * 0.2,
          ease: "power2.in",
          delay: i * 0.002
        }, "-=0.9");
      });
    };
    startPreload();
}, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 font-barlow bg-[#0A0B14] flex items-end pb-12 justify-center overflow-hidden">
      <div className="text-center relative">
        {/* موشک */}
        <div ref={rocketRef} className="size-46 mx-auto mb-4 transition-transform duration-300">
            <svg className="size-full" width="100" height="125" viewBox="0 0 100 125">
              <path d="M56.031,77.503c-0.328-2.115-0.692-4.225-1.062-6.333c-0.154-0.584-0.817-2.978-1.672-4.901  c-0.198-0.378-0.386-0.778-0.592-1.16c-0.115-0.2-0.229-0.405-0.347-0.567l0.005-0.002c-0.439-0.645-1.006-1.11-1.907-1.048  c-2.043,0.144-2.393,2.368-3.154,3.914c-0.385,0.782-0.543,1.68-0.773,2.536c-1.992,7.391-2.425,14.95-2.446,22.558  c-0.012,4.237,1.171,5.566,5.403,5.991c2.137,0.212,4.093-0.41,5.985-1.323c1.068-0.513,1.562-1.28,1.57-2.557  C57.083,88.883,56.907,83.171,56.031,77.503z" fill="#ffffff"></path><path d="M78.089,93.826C75.59,83.581,70.94,74.222,66.131,64.93c-0.678-1.312-1.351-2.587-1.444-4.146  c-0.468-7.78-1.475-15.501-3.038-23.136c-0.2-0.974-0.408-1.949-0.622-2.919C55.329,5.843,50.873,1.477,50.873,1.477  c-5.025,7.534-9.601,27.382-10.927,33.491c-1.39,5.969-2.228,12.057-2.815,18.181c-0.541,5.624-1.462,10.93-4.288,16.058  c-4.563,8.285-8.295,17.003-10.289,26.355c-0.379,1.78-0.081,2.641,1.856,2.66c1.776,0.02,3.549,0.187,5.326,0.223  c6.225,0.125,6.276,0.115,6.504-6.049c0.059-1.583,0.485-2.249,2.175-2.333c4.478-0.223,4.479-0.3,4.857-4.696  c0.059-0.688,0.005-1.385,0.081-2.069c0.696-6.266,1.32-12.552,4.129-18.343c0.613-1.262,1.314-2.539,2.927-2.608  c1.571-0.07,2.29,1.033,2.951,2.162c0.007,0.012,0.017,0.031,0.026,0.043c0.084,0.145,0.17,0.293,0.254,0.435  c0.012,0.021,0.02,0.046,0.031,0.067c0.384,0.714,0.904,1.875,1.401,3.465c0.162,0.425,0.264,0.876,0.372,1.323  c0.091,0.358,0.186,0.709,0.271,1.104l-0.013,0.008c1.339,5.349,2.051,10.787,2.2,16.301c0.044,1.624,0.196,2.827,2.358,2.907  c4.608,0.166,4.604,0.27,4.564,4.898c0,0.197,0.017,0.397-0.01,0.593c-0.295,2.124,0.438,3.101,2.756,2.891  c2.354-0.214,4.738-0.074,7.107-0.164C79.127,98.212,79.153,98.184,78.089,93.826z M50.514,54.888  c-3.585-0.005-6.688-3.199-6.686-6.886c0.004-3.706,3.105-6.831,6.76-6.806c3.636,0.024,6.698,3.17,6.695,6.879  C57.281,51.741,54.149,54.893,50.514,54.888z" fill="#ffffff"></path>
            </svg>
        </div>
        
        <h1 className="text-2xl tracking-[8px] text-white/80 mb-3">SPACE TOURISM</h1>
        <p className="text-white/60 text-[12px] tracking-[3px] mb-8">PREPARING LAUNCH SEQUENCE...</p>

        <div className="w-80 h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-white/40 mt-4 font-mono">{Math.floor(progress)}% COMPLETE</p>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(180)].map((_, i) => (
          <div 
            key={i}
            ref={el => starsRef.current[i] = el}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              animationDelay: `-${Math.random()*4}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
}