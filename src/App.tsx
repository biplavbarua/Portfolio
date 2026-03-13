import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Projects />
          <Achievements />
          <Certifications />
          <Skills />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
