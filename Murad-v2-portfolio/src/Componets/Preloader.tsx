import { useEffect, useState } from 'react';
import hero from "../assets/imgs/Hero.jpg";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const texts = [
      "Welcome to my portfolio",
      "Murad Bzuneh",
      "Fullstack Developer"
    ];

    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 800);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(textTimer);
    };
  }, []);

  const texts = [
    "Welcome to my portfolio",
    "Murad Bzuneh",
    "Fullstack Developer"
  ];

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Rotating border */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
          
          {/* Hero image inside */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <img
              src={hero}
              alt="Murad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-cyan-400 animate-pulse min-h-[3rem]">
          {texts[textIndex]}
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
