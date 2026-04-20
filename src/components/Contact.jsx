import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Contact</h2>
            <h3 className="text-4xl font-bold mb-6">Let's build something <span className="text-primary italic">together.</span></h3>
            <p className="text-slate-400 mb-10 text-lg">
              Have a project in mind? Reach out and let's discuss how we can help your brand grow.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-primary" />, title: 'Email', value: 'laistalib24@gmail.com' },
                { icon: <Phone className="text-primary" />, title: 'Phone', value: '+91 97898 76543' },
                // { icon: <MessageSquare className="text-primary" />, title: 'Social', value: '@devportfolio' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 glass flex items-center justify-center rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-sm">{item.title}</h4>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
