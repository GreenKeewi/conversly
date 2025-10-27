'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 rounded-full transition-opacity duration-300"
      style={{
        left: position.x - 192,
        top: position.y - 192,
        background: 'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 60%)',
        filter: 'blur(40px)',
      }}
    />
  );
}
