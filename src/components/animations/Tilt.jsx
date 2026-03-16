import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Tilt = ({ children }) => {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    const xPct = x / width - 0.5;
    const yPct = y / height - 0.5;
    
    gsap.to(cardRef.current, {
      rotateY: xPct * 20,
      rotateX: -yPct * 20,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default Tilt;
