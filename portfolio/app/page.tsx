import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Resume from '@/components/Resume';
// import Projects from '@/components/Projects';
import Youtube from '@/components/Youtube';
// import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Resume />
      {/*<Projects />*/}
      <Youtube />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}