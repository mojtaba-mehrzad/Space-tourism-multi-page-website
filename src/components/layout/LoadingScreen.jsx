import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { preloadAllImages } from "../../utils/preloadImages";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const rocketRef = useRef(null);
  const starsRef = useRef([]);

useEffect(() => {
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

      // لانچ موشک
      gsap.to(rocketRef.current, {
        y: -900,
        duration: 1.8,
        ease: "power4.in",
        onComplete: () => setTimeout(onComplete, 300)
      });

      // Star Trail به سمت پایین
      starsRef.current.forEach((star, i) => {
        gsap.to(star, {
          y: 1200,
          duration: 0.8 + Math.random() * 0.3,
          ease: "power2.in",
          delay: i * 0.01
        });
      });
    };
    startPreload();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0B14] flex items-center justify-center overflow-hidden">
      <div className="text-center relative">
        {/* موشک */}
        <div ref={rocketRef} className="size-36 mx-auto mb-12 transition-transform duration-300">
            <img className="size-full" src="data:image/png;base64,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" alt="rocket"></img>
        </div>
        
        {/* متن */}
        <h1 className="text-2xl md:text-5xl font-light tracking-[6px] text-white mb-3">SPACE TOURISM</h1>
        <p className="text-white/60 text-sm tracking-[3px] mb-12">PREPARING LAUNCH SEQUENCE...</p>

        {/* Progress Bar */}
        <div className="w-80 h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-white/40 mt-4 font-mono">{Math.floor(progress)}% COMPLETE</p>
      </div>

      {/* Stars Background */}
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