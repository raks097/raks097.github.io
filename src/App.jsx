import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import './index.css';

// Cloud particle configuration
const NUM_CLOUDS = 8; // Fewer clouds

function initClouds() {
  return Array.from({ length: NUM_CLOUDS }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    baseX: Math.random() * 100,
    baseY: Math.random() * 100,
    size: 400 + Math.random() * 400, // Much larger: 400px - 800px
    opacity: 0.6 + Math.random() * 0.3,
    driftSpeed: 0.0002 + Math.random() * 0.0002,
    driftPhase: Math.random() * Math.PI * 2,
  }));
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const mouseRef = useRef({ x: -1000, y: -1000 });
  const cloudsRef = useRef(initClouds());
  const animationFrameRef = useRef();
  const timeRef = useRef(0);

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
      timeRef.current += 1;
      const clouds = cloudsRef.current;
      const mouse = mouseRef.current;

      clouds.forEach((cloud, i) => {
        // Gentle floating drift
        const driftX = Math.sin(timeRef.current * cloud.driftSpeed + cloud.driftPhase) * 2;
        const driftY = Math.cos(timeRef.current * cloud.driftSpeed * 0.7 + cloud.driftPhase) * 1.5;

        // Target position with drift
        let targetX = cloud.baseX + driftX;
        let targetY = cloud.baseY + driftY;

        // Cursor repulsion - clouds disperse when cursor is near
        const dx = cloud.x - mouse.x;
        const dy = cloud.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 15;

        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const angle = Math.atan2(dy, dx);
          targetX += Math.cos(angle) * force * 20;
          targetY += Math.sin(angle) * force * 20;
        }

        // Smooth easing toward target
        cloud.x += (targetX - cloud.x) * 0.03;
        cloud.y += (targetY - cloud.y) * 0.03;

        // Update DOM
        const el = document.getElementById(`cloud-${i}`);
        if (el) {
          el.style.transform = `translate3d(${cloud.x}vw, ${cloud.y}vh, 0) translate(-50%, -50%)`;
          el.style.width = `${cloud.size}px`;
          el.style.height = `${cloud.size}px`;
          el.style.opacity = cloud.opacity;
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
      <div className="cloud-background">
        {cloudsRef.current.map((_, i) => (
          <div
            key={i}
            id={`cloud-${i}`}
            className="cloud-particle"
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
