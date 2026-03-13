import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-slate-50/50 dark:bg-black/50 backdrop-blur-md relative mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-teal-600 dark:text-teal-400">Biplav Barua</span>.
        </p>
        
        <div className="flex gap-4">
          <a href="https://github.com/biplavbarua" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/biplavbarua/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:baruabiplav16@yahoo.in" className="text-muted hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
