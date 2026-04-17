import React, { useRef, useEffect } from 'react';

const MatrixRain = ({ hoveredColor, intensity = 1, opacity = 0.4, isLightMode = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Cache dimensions to avoid layout thrashing in the draw loop
    let width = 0;
    let height = 0;

    const updateDimensions = () => {
      if (!canvas.parentElement) return;
      
      const newWidth = window.innerWidth;
      const newHeight = canvas.parentElement.offsetHeight || window.innerHeight;
      
      // Only update if dimensions actually changed to avoid unnecessary canvas resets
      if (newWidth !== width || newHeight !== height) {
        width = newWidth;
        height = newHeight;
        canvas.width = width;
        canvas.height = height;
        
        // Re-calculate drops on resize
        initDrops();
      }
    };

    const chars = "{}[]<>/\\*&%#@0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    let columns = 0;
    let drops = [];

    const initDrops = () => {
      columns = Math.ceil(width / fontSize);
      drops = new Array(columns).fill(1).map(() => Math.random() * -100);
    };

    // Use ResizeObserver for more robust size tracking of the parent
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    // Initial call
    updateDimensions();

    const draw = () => {
      // Semi-transparent color to create trailing effect - based on theme
      // Use cached width/height
      ctx.fillStyle = isLightMode ? 'rgba(245, 245, 247, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Use hoveredColor if active, otherwise subtle grey/black based on mode
        ctx.fillStyle = hoveredColor ? hoveredColor : (isLightMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)');
        
        if (hoveredColor) {
           ctx.shadowBlur = 5;
           ctx.shadowColor = hoveredColor;
        } else {
           ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top if it reaches bottom, or randomly for varied rain
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment position based on intensity
        drops[i] += (0.5 * intensity) + (Math.random() * 0.5);
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredColor, intensity, isLightMode]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default MatrixRain;
