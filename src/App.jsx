
import { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from './components';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedPreference = localStorage.getItem('darkMode');

    if (savedPreference !== null) {
      setIsDarkMode(JSON.parse(savedPreference));
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Update DOM and localStorage when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
