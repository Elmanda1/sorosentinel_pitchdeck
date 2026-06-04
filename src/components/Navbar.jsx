import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { name: 'Work', href: '#' },
    { name: 'Approach', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'News', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-12 py-8 mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-bold text-2xl tracking-tighter uppercase text-white"
      >
        SoroSentinel<span className="text-accent">.</span>
      </motion.div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-caption-s uppercase tracking-widest text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/20 mx-2 hidden md:block" />

        <div className="flex items-center gap-6">
          <motion.a 
            href="#" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-caption-s uppercase tracking-widest text-white hover:text-accent transition-colors"
          >
            Join
          </motion.a>
          <motion.a 
            href="#" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 py-2 border border-white/20 text-caption-s uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
