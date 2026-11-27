import { useEffect, useState } from 'react';
import hero from "/hero.png";

const PRELOADER_TEXTS = [
  "Welcome to my portfolio",
  "Murad Bzuneh",
  "Fullstack Developer",
];

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % PRELOADER_TEXTS.length);
    }, 1150);

    let unmountTimer: ReturnType<typeof setTimeout> | undefined;
    const timer = setTimeout(() => {
      setFadeOut(true);
      unmountTimer = setTimeout(() => setLoading(false), 500);
    }, 3600);

    return () => {
      clearTimeout(timer);
      if (unmountTimer) clearTimeout(unmountTimer);
      clearInterval(textTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-4">
        <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto mb-10">
          {/* Rotating border */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
          
          {/* Hero image inside */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <img
              src={hero}
              alt="Murad Bzuneh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-pulse min-h-[3rem]">
          {PRELOADER_TEXTS[textIndex]}
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
