import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children, delay = 0, y = 50, x = 0, duration = 1, stagger = 0.2 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el.children,
      {
        opacity: 0,
        y: y,
        x: x,
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay, y, x, duration, stagger]);

  return <div ref={containerRef}>{children}</div>;
};

export default Reveal;
