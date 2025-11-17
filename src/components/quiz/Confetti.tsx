"use client";

import React, { useEffect, useState } from 'react';

const NUM_CONFETTI = 150;

const Confetti = () => {
  const [pieces, setPieces] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: NUM_CONFETTI }).map((_, index) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 0.5}s`,
        backgroundColor: `hsl(182, 100%, ${Math.random() * 20 + 65}%)`,
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
          width: 8px;
          height: 12px;
          top: -20px;
          opacity: 0;
          animation-name: drop;
          animation-timing-function: linear;
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
