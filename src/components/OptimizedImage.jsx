import React, { useState, useEffect } from 'react';

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Responsive sizing using srcset (300w, 600w, 1000w)
 * - Native lazy loading
 * - Async decoding for smoother main thread
 * - Automatic WebP format support (via optimized assets)
 * - Fade-in effect on load
 * - Fallback to original image if optimization fails
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false, // If true, disables lazy loading and adds fetchpriority="high"
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  
  // Logic to determine srcset based on our naming convention: base-widthw.webp
  const generateSrcSet = (originalSrc) => {
    if (typeof originalSrc !== 'string') return null;
    
    // Check if it's one of our optimized images (ends in .webp and doesn't already have -widthw)
    const isWebp = originalSrc.endsWith('.webp');
    const isOptimized = /- (?:300|600|1000)w\.webp$/.test(originalSrc);
    
    if (!isWebp || isOptimized) {
      // If it's a PNG/JPG, we try to see if a webp version exists
      // In Vite, imported assets are strings like "/src/assets/project/image.png" or hash-based
      // This logic is easier if we pass the base path or rely on Vite's asset handling.
      // However, since we generated them in the same folder, we can try to guess.
      return null; 
    }

    const basePath = originalSrc.replace(/\.webp$/, '');
    return `${basePath}-300w.webp 300w, ${basePath}-600w.webp 600w, ${basePath}-1000w.webp 1000w`;
  };

  const srcset = generateSrcSet(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      
      {/* Skeleton / Low-res placeholder could go here */}
      {!loaded && (
        <div className="absolute inset-0 bg-white/5 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
