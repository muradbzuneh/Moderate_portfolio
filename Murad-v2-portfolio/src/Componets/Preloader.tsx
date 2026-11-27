import { useEffect, useState } from 'react';
import hero from "/hero.png";

const PRELOADER_TITLE = "Murad Bzuneh";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let unmountTimer: ReturnType<typeof setTimeout> | undefined;
    const timer = setTimeout(() => {
      setFadeOut(true);
      unmountTimer = setTimeout(() => setLoading(false), 350);
    }, 1100);

    return () => {
      clearTimeout(timer);
      if (unmountTimer) clearTimeout(unmountTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 transition-opacity duration-350 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-4">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
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
        
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">
          {PRELOADER_TITLE}
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
