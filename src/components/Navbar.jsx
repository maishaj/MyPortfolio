import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  {name: 'Qualifications', href: '#qualifications'},
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Entrance Animation - Dribbble style slide-down
    gsap.fromTo(".nav-wrapper", 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-100 top-0 left-0 flex justify-center pointer-events-none">
      <div className={`nav-wrapper w-full max-w-7xl px-6 py-6 transition-all duration-500 pointer-events-auto ${
        scrolled ? 'md:py-4' : 'md:py-8'
      }`}>
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border ${
          scrolled 
          ? 'bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' 
          : 'bg-transparent border-transparent'
        }`}>
          
          {/* Logo with Zaiwork-style Typography */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold tracking-tighter text-white cursor-pointer"
          >
            MAISHA<span className="text-cyan-500 ml-1">_</span>
          </motion.div>

          {/* Desktop Nav - Centered & Glassy */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-cyan-400 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Button - Dribbble 'Hire Me' Style */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="group relative flex items-center justify-center gap-3 px-6 py-3 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95"
            >
              Hire Me
            </a> 
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-2xl text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "circOut" }}
            className="absolute top-15 right-13 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 md:hidden pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[11px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors px-4 py-3 hover:bg-white/5 rounded-xl flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              
              {/* Divider */}
              <div className="h-px bg-white/5 my-2 mx-2" />
              
              {/* Compact Hire Me Button */}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-white text-black text-center font-black text-[9px] uppercase tracking-widest rounded-xl hover:bg-cyan-500 hover:text-white transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;