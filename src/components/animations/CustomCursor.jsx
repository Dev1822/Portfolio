import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      if (cursor) cursor.style.display = 'none';
      if (follower) follower.style.display = 'none';
      return;
    }

    // Use quickSetter for high-frequency updates
    const xCursor = gsap.quickSetter(cursor, "x", "px");
    const yCursor = gsap.quickSetter(cursor, "y", "px");
    const xFollower = gsap.quickSetter(follower, "x", "px");
    const yFollower = gsap.quickSetter(follower, "y", "px");

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      xCursor(clientX);
      yCursor(clientY);

      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], {
        scale: 0.7,
        duration: 0.2,
      });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.2,
      });
    };

    const onMouseEnterLink = () => {
      setIsHovering(true);
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: 'rgba(59, 130, 246, 0.2)', // accent color
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      setIsHovering(false);
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const onMouseEnter = (e) => {
      const interactive = e.target.closest('a, button, .interactive');
      if (interactive) {
        onMouseEnterLink();
      }
    };
    const onMouseLeave = (e) => {
      const interactive = e.target.closest('a, button, .interactive');
      if (interactive) {
        onMouseLeaveLink();
      }
    };

    window.addEventListener('mouseover', onMouseEnter);
    window.addEventListener('mouseout', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseEnter);
      window.removeEventListener('mouseout', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      />
    </>
  );
};

export default CustomCursor;
