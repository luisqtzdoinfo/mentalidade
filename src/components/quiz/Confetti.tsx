"use client";

import React, { useEffect, useState } from 'react';

const NUM_CONFETTI = 50; // Reduced for a more subtle effect

const Confetti = () => {
  const [pieces, setPieces] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: NUM_CONFETTI }).map((_, index) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 4 + 3}s`, // Slower animation
        animationDelay: `${Math.random() * 1}s`, // Slightly more delay variance
        backgroundColor: `hsl(45, 70%, 60%)`, // Matte/metallic gold
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      return <div key={index} className="confetti-piece" style={style} />;
    });
    setPieces(newPieces);
  }, []);

  return (
    <>
      <style>
        {`
        .confetti-piece {
          position: absolute;
          width: 6px; /* Smaller particles */
          height: 10px; /* Smaller particles */
          top: -20px;
          opacity: 0;
          animation-name: drop;
          animation-timing-function: ease-in-out; /* Smoother movement */
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }

        @keyframes drop {
          0% {
            transform: translateY(0vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }
        `}
      </style>
      <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
        {pieces}
      </div>
    </>
  );
};

export default Confetti;
