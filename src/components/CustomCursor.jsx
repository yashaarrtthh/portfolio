import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return undefined;
    }

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove);
    document.body.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={`pointer-events-none fixed z-[9999] rounded-full border border-white/70 mix-blend-difference transition-transform duration-150 ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{
          left: position.x,
          top: position.y,
          width: 30,
          height: 30,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className={`pointer-events-none fixed z-[9998] rounded-full bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-transform duration-150 ${isClicking ? 'scale-125' : 'scale-100'}`}
        style={{
          left: position.x,
          top: position.y,
          width: 8,
          height: 8,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
