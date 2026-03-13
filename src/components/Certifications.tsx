import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Skillsoft",
    date: "Aug 2025",
    credentialId: "158712476",
    skills: [],
    logo: "https://www.google.com/s2/favicons?domain=skillsoft.com&sz=128",
    url: "https://skillsoft.digitalbadges.skillsoft.com/a822d158-0c6d-4122-8d81-2b7ae6356065#acc.S8EFPxQr"
  },
  {
    title: "Problem Solving with Data Structures and Algorithms",
    issuer: "CipherSchools",
    date: "Jul 2025",
    credentialId: "CSW2025-13004",
    skills: ["Data Structures", "Algorithms"],
    logo: "https://www.google.com/s2/favicons?domain=cipherschools.com&sz=128",
    url: "https://www.cipherschools.com/certificate/preview?id=68830d2fca64e035786b1b26"
  },
  {
    title: "Java Programming",
    issuer: "Lovely Professional University",
    date: "May 2025",
    credentialId: "13aH4aI4Ae0Df3Bg1Bh1",
    skills: [],
    logo: "https://www.google.com/s2/favicons?domain=lpu.in&sz=128",
    url: "https://lpucolab438.examly.io/certificate/U2FsdGVkX18%2FFdCKluyCFpWM39K7Vnl%2BG5BU%2BhQgiyw%3D"
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    date: "May 2025",
    credentialId: "NPTEL25CS65S247500826",
    skills: [],
    logo: "https://www.google.com/s2/favicons?domain=nptel.ac.in&sz=128",
    url: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs65/Course/NPTEL25CS65S24750082604443940.pdf"
  },
  {
    title: "Data Structures and Algorithm",
    issuer: "Lovely Professional University",
    date: "Dec 2024",
    credentialId: "21B61dJ7CK2DL30M8",
    skills: ["C (Programming Language)", "Data Structures"],
    logo: "https://www.google.com/s2/favicons?domain=lpu.in&sz=128",
    url: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BykS8Ly8Xcu%2FwYMdQDqJmc%2FONgL1cARcU%3D"
  },
  {
    title: "Object-Oriented Programming (OOP)",
    issuer: "Lovely Professional University",
    date: "Dec 2024",
    credentialId: "19Di3b15A60aJ4dK7",
    skills: ["C++", "Object-Oriented Programming (OOP)"],
    logo: "https://www.google.com/s2/favicons?domain=lpu.in&sz=128",
    url: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2FQyfwNV2sAxCWEeXQlqfVbFd9hWHnqUDw%3D"
  },
  {
    title: "Packet Switching Networks and Algorithms",
    issuer: "University of Colorado System",
    date: "Oct 2024",
    credentialId: "MXJPDUMZV7M1",
    skills: [],
    logo: "https://www.google.com/s2/favicons?domain=cu.edu&sz=128",
    url: "https://www.coursera.org/account/accomplishments/verify/MXJPDUMZV7M1"
  },
  {
    title: "Hardware and Operating System Essentials",
    issuer: "Coursera",
    date: "Sep 2024",
    skills: [],
    logo: "https://www.google.com/s2/favicons?domain=coursera.org&sz=128",
    url: "https://www.credly.com/badges/8ae3fccf-d8c0-4768-bfaf-9fdeaed19315/linked_in_profile"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Sep 2024",
    credentialId: "94PJXZE60C0M",
    skills: [],
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    url: "https://www.coursera.org/account/accomplishments/verify/94PJXZE60C0M"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/10 dark:from-emerald-900/10 dark:to-teal-900/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">Licenses & Certifications</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Professional certifications and coursework highlighting continuous learning and technical proficiency.
          </p>
          <div className="w-20 h-1 bg-teal-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-teal-500/30 hover:shadow-[0_8px_30px_rgb(20,184,166,0.12)] dark:hover:shadow-[0_8px_30px_rgb(45,212,191,0.12)] hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-border overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain p-2" />
                  ) : (
                    <Award className="w-6 h-6 text-teal-500" />
                  )}
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-md text-foreground/80 font-medium mb-4">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Issued {cert.date}</span>
                </div>
                
                {cert.credentialId && (
                  <p className="text-sm text-muted font-mono mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                {cert.skills.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-medium rounded-md bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
