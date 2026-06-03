import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1], // circ-out
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end p-8 border-b border-border">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-border h-full last:border-r-0" />
        ))}
      </div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full"
      >
        <div className="mb-12">
          <motion.p variants={itemVars} className="text-caption-s text-muted uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            New Genre / Global Design & Tech
          </motion.p>
          
          <div className="overflow-hidden">
            <motion.h1 
              variants={itemVars}
              className="font-display text-[15vw] leading-[0.85] uppercase tracking-tighter"
            >
              Accelerating<br />
              <span className="text-muted/40">Tomorrow's</span><br />
              Ideas.
            </motion.h1>
          </div>
        </div>

        <motion.div variants={itemVars} className="flex flex-col md:flex-row justify-between items-end gap-8 pb-12">
          <p className="max-w-md text-muted text-lg leading-relaxed">
            We partner with the world's most ambitious brands to create digital 
            experiences that define new standards. Crafting future-proof identities 
            from petal to planet.
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-foreground text-background uppercase text-caption-s font-bold hover:bg-accent transition-colors duration-300">
              Explore Work
            </button>
            <button className="px-8 py-4 border border-border uppercase text-caption-s font-bold hover:bg-foreground hover:text-background transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
