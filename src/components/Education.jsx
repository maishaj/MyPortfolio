import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const steps = [
    {
      year: "2022",
      institution: "Sylhet Engineering College",
      degree: "B.Sc. in CSE",
      subtitle: "Year 3, Semester II",
      details:
        "Focusing on Software Engineering, Data Structures, and Algorithmic Analysis.",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      year: "2019",
      institution: "Jalalabad Cantonment Public School & College",
      degree: "Higher Secondary Certificate",
      subtitle: "Science Group",
      details:
        "Achieved strong academic standing with a focus on Mathematics and Physics.",
      accent: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="qualifications"
      className="w-full py-20 bg-[#030303] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Qualification_
            </span>
          </motion.h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-zinc-800 -translate-x-1/2"></div>

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative mb-20 md:mb-32 flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Content Box */}
                <div
                  className={`w-full md:w-1/2 px-6 ${
                    isLeft
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16"
                  } text-center md:text-inherit`}
                >
                  {/* Background Year */}

                  {/* Dot */}
                  <div
                    className={`hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${step.accent}`}
                  ></div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {step.institution}
                  </h3>

                  <p
                    className={`text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${step.accent}`}
                  >
                    {step.degree}
                  </p>

                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;