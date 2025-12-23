import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

