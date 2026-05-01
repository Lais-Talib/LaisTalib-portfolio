import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Nike E-Commerce Website',
      desc: 'Built a MERN e-commerce app with JWT auth, REST APIs, AI assistant, and cart/checkout features.',
      image: '/Nike Thumnail.png',
      tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/Lais-Talib/Nike-Website'
    },
    {
      title: 'Tic Tac Toe',
      desc: 'Built a Tic Tac Toe Project using HTML,CSS, and JavaScript',
      image: '/Tic Tac Toe.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      github: 'https://github.com/Lais-Talib/Tic-Tac-Toe'
    },
    {
      title: 'Snake Game',
      desc: 'A simple and interactive classic Snake game built using HTML, CSS, and JavaScript, where players control a growing snake to eat food and avoid collisions.',
      image: '/snake-game.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://snake-game-tan-nine.vercel.app/',
      github: 'https://github.com/Lais-Talib/SnakeGame'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold">Featured <span className="text-primary italic">projects.</span></h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my best work, ranging from complex web applications to experimental mobile interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 glass rounded-full hover:bg-primary hover:text-background transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                  <a href={project.link} className="p-3 glass rounded-full hover:bg-primary hover:text-background transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 glass-teal text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
