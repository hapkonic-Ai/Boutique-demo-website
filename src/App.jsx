import './App.css';
import useCustomCursor from './hooks/useCustomCursor';
import useScrollReveal from './hooks/useScrollReveal';
import Loader from './components/Loader';
import Grain from './components/Grain';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Catalogue from './components/Catalogue';
import FloatingShowcase from './components/FloatingShowcase';
import Lookbook from './components/Lookbook';
import ExpandingPanels from './components/ExpandingPanels';
import Atelier from './components/Atelier';
import Carousel from './components/Carousel';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const { dotRef, ringRef } = useCustomCursor();
  useScrollReveal();

  return (
    <>
      <Loader />
      <Grain />
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <Particles />
      <Navbar />
      <Hero />
      <Marquee />
      <Catalogue />
      <FloatingShowcase />
      <Lookbook />
      <ExpandingPanels />
      <Atelier />
      <Carousel />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
