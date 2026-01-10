import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Use refs for "Water" particle animation
  const mouseRef = useRef({ x: 50, y: 50 });
  const particlesRef = useRef(
    Array.from({ length: 6 }).map(() => ({ x: 50, y: 50 }))
  );

  const animationFrameRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      };
    };

    const animate = () => {
      const particles = particlesRef.current;
      const target = mouseRef.current;

      // Water/Liquid easing: each particle follows the target or previous one with high inertia
      particles.forEach((p, i) => {
        const prev = i === 0 ? target : particles[i - 1];

        // Easing becomes slower for each particle to create a "liquid" trail
        const easing = 0.15 - (i * 0.02);
        p.x += (prev.x - p.x) * easing;
        p.y += (prev.y - p.y) * easing;

        const el = document.getElementById(`water-part-${i}`);
        if (el) {
          // Use scale to make them feel like "droplets" merging
          const scale = 1 - (i * 0.05);
          el.style.transform = `translate3d(${p.x}vw, ${p.y}vh, 0) translate(-50%, -50%) scale(${scale})`;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="water-background">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            id={`water-part-${i}`}
            className={`water-particle part-${i}`}
          />
        ))}
      </div>
      <Navbar activeSection={activeSection} />
      <main className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </div>
  );
}
