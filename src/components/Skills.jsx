import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const skillsData = [
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 50, category: 'Backend' },
    { name: 'Express', level: 50, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },
    { name: 'MySQL', level: 65, category: 'Backend' },
    { name: 'Java', level: 60, category: 'Backend' },
    { name: 'SpringBoot', level: 60, category: 'Backend' },
    { name: 'Git/GitHub', level: 90, category: 'Tools' },
  ];

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Star Field Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-1/4 w-0.5 h-0.5 bg-white/40 rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-10 w-0.5 h-0.5 bg-white/30 rounded-full"></div>

        {/* Shooting star effect */}
        <div className="absolute top-0 right-0 w-[2px] h-[100px] bg-gradient-to-b from-primary/0 via-primary/50 to-transparent rotate-[45deg] -translate-y-full animate-shooting-star"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center mb-16 gap-3 md:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2.5 rounded-2xl font-medium transition-all duration-300 border ${activeTab === cat
                  ? 'bg-primary border-primary text-background shadow-[0_0_20px_rgba(32,178,166,0.3)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0d1217] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all hover:bg-[#111821] group shadow-xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-primary transition-colors uppercase tracking-wider">{skill.name}</h3>
                </div>

                <div className="relative pt-1">
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(32,178,166,0.6)]"
                    />
                  </div>
                  <div className="flex justify-end mt-2">
                    <span className="text-sm text-slate-500 font-medium">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
