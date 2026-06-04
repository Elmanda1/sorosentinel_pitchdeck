import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
  const { scrollYProgress } = useScroll();

  // Refined Color Palette: Deep Crimson
  // Base: Near-Black #050102
  // Glow: Crimson Accent #550C18
  
  const y = useTransform(scrollYProgress, [0, 1], ["70%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050102] pointer-events-none">
      {/* Top Left Crimson Glow */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] rounded-full blur-[180px] opacity-[0.2]"
        style={{
          background: 'radial-gradient(circle, #550C18 0%, transparent 70%)'
        }}
      />

      {/* Main Crimson Surge */}
      <motion.div 
        style={{
          y,
          opacity,
          scale,
          background: 'radial-gradient(circle at center, #1a0508 0%, #050102 60%, transparent 80%)'
        }}
        className="absolute bottom-[-30%] left-[-10%] w-[130%] h-[130%] rounded-full blur-[150px]"
      />

      {/* Grain / Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default Background;
