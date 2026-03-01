import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const steps = [
    {
      year: "2022",
      institution: "Sylhet Engineering\nCollege",
      degree: "B.Sc. in CSE",
      subtitle: "Year 3, Semester II",
      details: "Focusing on Software Engineering, Data Structures, and Algorithmic Analysis.",
      accent: "from-blue-500 to-cyan-400",
      align: "md:text-right md:pr-16 lg:pr-24"
    },
    {
      year: "2019",
      institution: "Jalalabad Cantonment\nPublic School & College",
      degree: "Higher Secondary Certificate",
      subtitle: "Science Group",
      details: "Achieved strong academic standing with a focus on Mathematics and Physics.",
      accent: "from-purple-500 to-pink-500",
      align: "md:text-left md:pl-16 lg:pl-24"
    }
  ];

  return (
    <section id="qualifications" className="py-20 bg-[#030303] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Modern Label */}
        <div className="mb-16 flex flex-col items-center text-center">
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter"
            >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Qualification_</span>
            </motion.h2>
            <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full mb-10" />
        </div>

        <div className="relative flex flex-col md:flex-row items-stretch justify-center">
          
          {/* Enhanced Vertical Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] hidden md:block overflow-hidden transform -translate-x-1/2">
            <div className="w-full h-full bg-zinc-900" /> {/* Dim base line */}
            <motion.div 
              initial={{ y: "-100%" }}
              whileInView={{ y: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_15px_#3b82f6]"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`relative w-full md:w-1/2 flex flex-col ${step.align} mb-20 md:mb-0`}
            >
              {/* Background Year Marker */}
              <span className={`absolute top-0 ${index === 0 ? 'right-4' : 'left-4'} text-[8rem] md:text-[11rem] font-black text-white/[0.02] select-none pointer-events-none italic tracking-tighter leading-none`}>
                {step.year}
              </span>

              <div className="relative z-10">
                {/* Modern Indicator Dot */}
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.accent} mb-8 inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)]`} />
                
                <h3 className="text-3xl md:text-3xl font-black text-white tracking-tighter mb-4 whitespace-pre-line leading-[0.95]">
                  {step.institution}
                </h3>

                <p className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.accent} mb-4 tracking-tight`}>
                  {step.degree}
                </p>

                <p className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-6">
                  {step.subtitle}
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed max-w-sm inline-block font-light">
                  {step.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;