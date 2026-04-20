import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, Zap, Download } from 'lucide-react';
import profilePic from '../assets/Lais_passportsizepic.jpg';

const About = () => {
  const skills = [
    { icon: <Zap className="text-primary" />, title: 'Performance', desc: 'Optimized for speed and efficiency.' },
    { icon: <Rocket className="text-primary" />, title: 'Scalable', desc: 'Built to grow with your business.' },
    { icon: <Globe className="text-primary" />, title: 'Modern', desc: 'Using the latest web technologies.' },
    { icon: <Cpu className="text-primary" />, title: 'Innovative', desc: 'Creative solutions for complex problems.' },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4">About Me</h2>
            <h3 className="text-4xl font-bold mb-6">Frontend Developer | <span className="text-primary italic"> Building Responsive Web Applications</span></h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I’m a frontend developer with knowledge of full-stack development, focused on building responsive and user-friendly web applications. I enjoy learning new technologies and turning ideas into real-world projects.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="w-10 h-10 glass flex items-center justify-center rounded-lg">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-white">{skill.title}</h4>
                  <p className="text-sm text-slate-500">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <motion.a
                  href="/cv.pdf"
                  download="Lais_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-primary text-background font-bold rounded-full shadow-lg flex items-center gap-2"
                >
                  <Download size={18} /> Download CV
                </motion.a>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-teal rounded-full -z-10 blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full -z-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
