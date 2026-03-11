import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
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
          <Skills />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
