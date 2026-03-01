import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, 
  SiMongodb, SiFirebase, SiGithub, SiVercel, SiPostman, SiFigma 
} from 'react-icons/si';

const SkillItem = ({ icon: Icon, name, color }) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all group shrink-0"
  >
    <Icon className={`text-xl md:text-2xl ${color} transition-transform group-hover:scale-110`} />
    <span className="text-zinc-400 group-hover:text-white text-sm md:text-base font-medium tracking-tight transition-colors whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  const stack = [
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiReact, name: "React.js", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-zinc-300" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: SiFirebase, name: "Firebase", color: "text-orange-400" },
  ];

  return (
    <section id="skills" className="py-25 bg-[#030303] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        {/* Centered Header */}
        <div className="mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter"
          >
            TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">SKILLS_</span>
          </motion.h2>
          <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
        </div>

        <div className="flex justify-center w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05 }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl"
          >
            {stack.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <SkillItem {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;