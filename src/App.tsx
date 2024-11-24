import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import RacingProfile from './components/RacingProfile';
import SimRacing from './components/SimRacing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <RacingProfile />
      <SimRacing />
      <Contact />
    </>
  );
}

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-gradient-to-br from-[#0f1218] via-[#1a0f1e] to-[#120f24] text-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;