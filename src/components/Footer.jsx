import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFacebook, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <FiGithub size={18} />, link: "https://github.com/maishaj" },
    { icon: <FiLinkedin size={18} />, link: "#" },
    { icon: <FiFacebook size={18} />, link: "https://www.facebook.com/share/18Kkem9R9R/" },
  ];

  return (
    <footer className="bg-[#030303] py-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left: Branding */}
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-black text-white tracking-tighter uppercase">
              MAISHA<span className="text-blue-500">.</span>
            </h3>
            <div className="h-4 w-px bg-zinc-800 hidden md:block" />
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
              MERN Stack Developer
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-2">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, color: '#3b82f6' }}
                className="p-3 text-zinc-500 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Top</span>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
              <FiArrowUp size={14} />
            </div>
          </button>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;