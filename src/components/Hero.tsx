import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react';

const titles = [
  "Data Scientist",
  "Software Development Engineer",
  "Open Source Contributor",
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
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-blue-600 dark:text-blue-400 font-mono mb-4 flex items-center justify-center md:justify-start">
              <ChevronRight className="w-5 h-5 mr-1" />
              Hello World, I am
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground text-balance">
              Biplav <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Barua
              </span>
            </h1>
            
            <div className="h-12 mb-6">
              <motion.p 
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl md:text-2xl text-muted font-medium"
              >
                I am a <span className="text-foreground">{titles[titleIndex]}</span>
              </motion.p>
            </div>

            <p className="text-muted mb-8 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed text-balance">
              Building intelligent systems and robust applications. Passionate about AI, Data Analytics, and creating seamless user experiences. I thrive on turning complex problems into elegant, scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-blue-600 dark:bg-white/10 border border-transparent dark:border-white/20 rounded-full overflow-hidden transition-all hover:bg-blue-700 dark:hover:bg-white/20 hover:scale-105 active:scale-95 shadow-lg dark:shadow-none"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 dark:border-blue-400/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/20 dark:border-purple-400/30 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Profile Image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-border bg-slate-100 dark:bg-[#1a1a1a] flex items-center justify-center z-10 backdrop-blur-sm shadow-xl dark:shadow-none">
                <div className="text-7xl">👨‍💻</div>
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
      className="p-3 rounded-full bg-black/5 dark:bg-white/5 border border-border text-muted hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 dark:hover:border-blue-400/50 hover:bg-blue-50 dark:hover:bg-blue-400/10 transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
