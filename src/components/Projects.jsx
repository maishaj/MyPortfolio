import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiX, FiLayers, FiAlertCircle, FiTrendingUp, FiExternalLink } from 'react-icons/fi';

// Asset Imports
import projectImga from '../assets/689shots_so.png';
import projectImgb from '../assets/349shots_so.png';
import projectImgc from '../assets/804shots_so.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Chef Bazaar",
      category: "E-Commerce",
      image: projectImga,
      link: "https://local-chef-bazaar-27127.web.app/",
      github: "https://github.com/maishaj/local_chef_bazaar_client",
      stack: ["React", "Node.js", "MongoDB", "Firebase", "Stripe API"],
      description: "A full-stack marketplace connecting local chefs with food enthusiasts. Built to handle real-time ordering and secure menu management.",
      challenges: "Implementing a robust Role-Based Access Control (RBAC) to ensure distinct permissions for Chefs and Customers while maintaining a low-latency UI.",
      improvements: "Integration of a real-time chat system using Socket.io and an AI-based recommendation engine for personalized menus."
    },
    {
      title: "Artify",
      category: "Creative Management",
      image: projectImgb,
      link: "https://artify-4a56d.web.app/",
      github: "https://github.com/maishaj/Artify-client",
      stack: ["React", "Express", "MongoDB", "Firebase", "Vercel"],
      description: "A niche e-commerce and gallery management system for independent artists to showcase and sell their unique creative works.",
      challenges: "Optimizing high-resolution image rendering and CDN delivery to ensure the gallery feels fluid even on slower mobile connections.",
      improvements: "A 'Virtual Exhibition' mode using CSS 3D transforms and automated watermarking for artist copyright protection."
    },
    {
      title: "Skill Swap",
      category: "Knowledge Exchange",
      image: projectImgc,
      link: "https://dragon-news-project-ea068.web.app/",
      github: "https://github.com/maishaj/skillswap",
      stack: ["React", "Firebase (Auth & Firestore)", "Tailwind CSS", "Framer Motion"],
      description: "A serverless peer-to-peer platform for collaborative learning. It utilizes Firebase's real-time capabilities to sync data instantly across users.",
      challenges: "Architecting a secure NoSQL database structure in Firestore and writing complex Security Rules to protect user data without a traditional backend.",
      improvements: "Implementing Firebase Cloud Functions for automated email triggers and integrating a live video-conferencing API for direct mentorship."
    }
  ];

  return (
    <section id="projects" className="py-15 bg-[#030303] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase mb-4"
          >
            MERN Stack Developer
          </motion.span>
          <div className="flex flex-col items-center">
                <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black text-white tracking-tighter"
                >
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Works_</span>
                </motion.h2>
                <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full mb-10" />
            </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all cursor-pointer"
            >
              {/* Image with Slim Aspect Ratio */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-5 flex gap-2">
                  {project.stack.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[8px] text-zinc-400 font-mono tracking-widest bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7">
                <p className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-1.5">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">{project.title}</h3>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="text-[10px] font-black text-zinc-500 group-hover:text-white transition-colors tracking-[0.2em] uppercase">
                    Details
                  </span>
                  <div className="p-3 bg-white text-black rounded-full shadow-lg shadow-white/5">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Overlay (Drawer) */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex justify-end">
              {/* Darkened Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setSelectedProject(null)} 
                className="absolute inset-0 bg-black/90 backdrop-blur-md" 
              />
              
              {/* Side Panel */}
              <motion.div 
                initial={{ x: '100%' }} 
                animate={{ x: 0 }} 
                exit={{ x: '100%' }} 
                transition={{ type: 'spring', damping: 25, stiffness: 200 }} 
                className="relative w-full max-w-2xl bg-[#080808] h-full border-l border-white/10 p-10 overflow-y-auto"
              >
                {/* Close Button */}
                <div className="sticky top-0 z-[110] flex justify-end mb-4 md:absolute md:top-10 md:right-10 md:mb-0">
                <button 
                onClick={() => setSelectedProject(null)} 
                className="group flex items-center gap-2 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 border border-white/20 transition-all backdrop-blur-xl"
                aria-label="Close details"
                >
                <span className="text-[10px] font-black ml-2 md:hidden">CLOSE</span>
                <FiX size={24} />
                </button>
                </div>
                
                {/* Modal Header */}
                <div className="mt-16 mb-12">
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em]">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-black text-white mt-4 uppercase tracking-tighter">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-black font-black text-[11px] rounded-full hover:bg-blue-500 hover:text-white transition-all tracking-widest flex items-center gap-2">
                      LIVE PREVIEW <FiExternalLink />
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-zinc-900 text-white font-black text-[11px] rounded-full border border-white/10 hover:border-white/30 transition-all tracking-widest flex items-center gap-2">
                      CLIENT SOURCE <FiGithub />
                    </a>
                  </div>
                </div>

                {/* Modal Sections */}
                <div className="space-y-12">
                  <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack List */}
                  <div>
                    <h4 className="flex items-center gap-2 text-white font-bold mb-5 uppercase tracking-widest text-[10px] opacity-40">
                      <FiLayers className="text-blue-500" /> Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-zinc-300 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge Box */}
                  <div className="p-7 rounded-[2.5rem] bg-red-500/5 border border-red-500/10">
                    <h4 className="flex items-center gap-2 text-red-400 font-bold mb-4 uppercase tracking-widest text-[10px]">
                      <FiAlertCircle /> Development Challenges
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.challenges}</p>
                  </div>

                  {/* Future Scope Box */}
                  <div className="p-7 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10">
                    <h4 className="flex items-center gap-2 text-emerald-400 font-bold mb-4 uppercase tracking-widest text-[10px]">
                      <FiTrendingUp /> Future Roadmap
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.improvements}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;