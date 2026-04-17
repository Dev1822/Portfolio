import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

const Tilt = ({ children }) => {
  const cardRef = useRef(null);
  const rectRef = useRef(null);

  const updateRect = useCallback(() => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    // Initial rect calculation
    updateRect();

    // Use ResizeObserver to update rect when element size changes
    // This is more efficient than reading it on every mouse move
    const observer = new ResizeObserver(() => {
      updateRect();
    });

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, [updateRect]);

  const onMouseMove = (e) => {
    // Refresh rect if not set (fallback)
    if (!rectRef.current) updateRect();
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = rectRef.current;
    
    // Relative coordinates within the element
    const x = clientX - left;
    const y = clientY - top;
    
    // Convert to percentage (-0.5 to 0.5)
    const xPct = x / width - 0.5;
    const yPct = y / height - 0.5;
    
    gsap.to(cardRef.current, {
      rotateY: xPct * 20,
      rotateX: -yPct * 20,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="h-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default Tilt;
