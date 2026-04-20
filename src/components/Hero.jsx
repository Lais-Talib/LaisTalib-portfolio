import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: 'url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Animated Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 mb-6 glass-teal text-primary rounded-full text-sm font-medium tracking-wider uppercase"
          >
            Available for new opportunities
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building responsive <br />
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent italic">
               web applications
            </span> 
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I’m a frontend developer with knowledge of full-stack development, focused on building clean and user-friendly web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn-primary"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-6 py-3 border border-white/10 hover:border-primary/50 text-white rounded-lg transition-all"
            >
              Get In Touch
            </motion.a>
          </div>

          <div className="flex justify-center gap-6 text-slate-400">
            <motion.a href="#" whileHover={{ y: -5, color: '#20b2a6' }} className="transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </motion.a>
            {[Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: '#20b2a6' }}
                className="transition-all"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
