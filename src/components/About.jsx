import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiCode, FiActivity, FiZap, FiClock, FiTarget } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className=" w-full mx-auto relative py-24 bg-[#030303] overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-[40%] left-[-10%] w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Big Typography & Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 italic">Me_</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8">
              I’m a dedicated CSE student who loves building digital systems that actually work. I’m a hardworking developer who balances my university studies with a hands-on approach to modern web tech. My goal is to stay punctual with every deadline while building high-performance applications that solve real problems."
            </p>
            
            {/* Quick Stats/Personality Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-purple-400 font-mono text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                  <FiZap size={12}/> Ethic
                </p>
                <p className="text-white text-sm font-bold">Hardworking</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-blue-400 font-mono text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                  <FiClock size={12}/> Delivery
                </p>
                <p className="text-white text-sm font-bold">Punctual</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Bento Grid Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid md:grid-cols-2 gap-6"
          >
            {/* Education Card */}
            <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-purple-500/50 transition-all duration-500">
              <div className="flex gap-4 items-center mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400"><FiBook size={24}/></div>
                <h3 className="text-xl font-bold text-white">Academic Journey</h3>
              </div>
              <p className="text-zinc-400 font-light leading-relaxed">
                Currently pursuing my <span className="text-white">BSc in Computer Science & Engineering</span>. This academic foundation has provided me with deep insights into Data Structures, Algorithms, and System Architecture—the core pillars of my development career.
              </p>
            </div>

            {/* Development Card */}
            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-blue-500/50 transition-all duration-500">
              <div className="flex gap-4 items-center mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400"><FiCode size={20}/></div>
                <h3 className="text-lg font-bold text-white">The Shift</h3>
              </div>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Transitioned into the <span className="text-white">MERN Stack</span> to bring my logical foundations to life. I enjoy architecting full-stack solutions that solve real-world problems.
              </p>
            </div>

            {/* Interests Card */}
            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-pink-500/50 transition-all duration-500">
              <div className="flex gap-4 items-center mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400"><FiActivity size={20}/></div>
                <h3 className="text-lg font-bold text-white">Lifestyle</h3>
              </div>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Beyond the code, I am passionate about <span className="text-white">Sports</span> and <span className="text-white">Painting</span>. These hobbies keep my creativity sharp and my focus balanced.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;