import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Bot, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    skills: ["Python", "SQL", "C", "C++", "Java"]
  },
  {
    title: "Data Science & ML",
    icon: <Bot className="w-6 h-6 text-teal-500" />,
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PySpark", "TensorFlow"]
  },
  {
    title: "BI & Analytics",
    icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
    skills: ["Power BI", "Tableau", "Excel", "Google Analytics"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-teal-500" />,
    skills: ["React.js", "TypeScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    skills: ["Node.js", "MySQL", "MongoDB", "Convex"]
  },
  {
    title: "Tools & Platform",
    icon: <Terminal className="w-6 h-6 text-teal-500" />,
    skills: ["Git & GitHub", "Docker", "WordPress", "Jupyter", "LaTeX"]
  }
];


export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Skills
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(16,185,129,0.12)] dark:hover:shadow-[0_8px_30px_rgb(52,211,153,0.12)] transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 dark:bg-black/50 rounded-lg border border-slate-200 dark:border-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-foreground/80 rounded-full text-sm border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
