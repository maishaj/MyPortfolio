import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import profile from '../assets/portfolioProfile.jpeg'
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-10/12 mx-auto bg-[#030303] flex items-center overflow-hidden pt-20">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Chip */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">Available for Hire</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Frontend <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Developer
            </span>
          </h1>

          <p className="text-zinc-500 text-lg max-w-lg mb-8 leading-relaxed font-light">
            I am Maisha, a CSE student and Frontend Developer specializing in the MERN stack. Currently exploring the full potential of MERN while seeking my next professional role in the tech industry
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <div className="flex justify-start"> 
                <button 
                type="submit"
                className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95"
                >
                <span>Get Resume</span>
                <FiDownload size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-blue-600" />
                </button>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: <FaGithub />, link: "https://github.com/maishaj" },
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/share/18Kkem9R9R/" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: The "Figma" Style Image Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group justify-self-center lg:justify-self-end"
        >
          {/* Glass Card Outer Frame */}
          <div className="relative z-10 p-2 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl">
            <div className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <img 
                // src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" 
                src={profile}
                alt="Portrait" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating Tech Stack inside Image */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end rounded-full">
                <div>
                  <p className="text-white font-bold text-sm">Frontend Developer</p>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-widest">MERN STACK</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500/20 backdrop-blur-md flex items-center justify-center border border-purple-500/50">
                   <Link to="https://github.com/maishaj"><FiArrowUpRight className="text-purple-400" /></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements - Ibrahim style floating circles */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;