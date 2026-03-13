import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react';

const titles = [
  "Data Scientist",
  "Software Development Engineer",
  "Problem Solver"
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <motion.div 
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-emerald-900/10 dark:via-[#09090b] dark:to-teal-900/10 bg-[length:200%_200%] -z-10" 
      />      
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, -20, 0], 
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] w-72 h-72 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 -z-10 hover:opacity-100 transition-opacity" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 20, 0], 
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[10%] w-80 h-80 bg-teal-400/20 dark:bg-teal-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 -z-10 hover:opacity-100 transition-opacity" 
      />
      <motion.div 
        animate={{ 
          x: [0, 50, -30, 0], 
          y: [0, 20, -40, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-pink-400/20 dark:bg-pink-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 -z-10 hover:opacity-100 transition-opacity" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-emerald-600 dark:text-emerald-400 font-mono mb-4 flex items-center justify-center md:justify-start">
              <ChevronRight className="w-5 h-5 mr-1" />
              <span className="inline-flex items-center">
                Hello World, I am
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2.5 h-5 bg-emerald-600 dark:bg-emerald-400 ml-2"
                />
              </span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground text-balance">
              Biplav <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                Barua
              </span>
            </h1>
            
            <div className="h-12 mb-6">
              <motion.p 
                key={titleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="text-xl md:text-2xl text-muted font-medium"
              >
                <span className="text-foreground">{titles[titleIndex]}</span>
              </motion.p>
            </div>

            <p className="text-muted mb-8 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed text-balance">
              Building intelligent systems and robust applications. Passionate about architecting AI-driven solutions and engineering scalable data pipelines. I thrive on transforming complex technical challenges into resilient, high-performance systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-emerald-600 dark:bg-white/10 border border-transparent dark:border-white/20 rounded-full overflow-hidden transition-all hover:bg-emerald-700 dark:hover:bg-white/20 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 active:translate-y-0 dark:shadow-none dark:hover:shadow-none"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <FileText className="w-5 h-5 mr-2" />
                Download CV
              </a>
              
              <div className="flex items-center gap-4 text-foreground/70">
                <SocialLink href="https://github.com/biplavbarua" icon={<Github className="w-5 h-5" />} />
                <SocialLink href="https://linkedin.com/in/biplavbarua" icon={<Linkedin className="w-5 h-5" />} />
                <SocialLink href="mailto:baruabiplav16@yahoo.in" icon={<Mail className="w-5 h-5" />} />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.1 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              {/* Outer decorative ring */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-emerald-500/30 dark:border-emerald-400/30" 
              />
              <motion.div 
                animate={{ scale: [1, 1.02, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-4 rounded-full border border-teal-500/30 dark:border-teal-400/30" 
              />
              
              {/* Profile Image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-border bg-slate-100 dark:bg-[#1a1a1a] flex items-center justify-center z-10 backdrop-blur-sm shadow-xl dark:shadow-none transition-transform hover:scale-[1.02] duration-300">
                <img src="/profile.jpeg" alt="Biplav Barua" className="w-[90%] h-[90%] object-cover rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-black/5 dark:bg-white/5 border border-border text-muted hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 dark:hover:border-emerald-400/50 hover:bg-emerald-50 dark:hover:bg-emerald-400/10 transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
