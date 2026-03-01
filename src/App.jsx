import { useState } from 'react';
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
import Cart from './components/Cart';
import SuccessModal from './components/SuccessModal';

function App() {
  const { dotRef, ringRef } = useCustomCursor();
  useScrollReveal();

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (idx) => {
    setCartItems(prev => prev.filter((_, i) => i !== idx));
  };

  const handlePlaceOrder = () => {
    setIsCartOpen(false);
    setCartItems([]);
    setIsSuccessOpen(true);
  };

  return (
    <>
      <Loader />
      <Grain />
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <Particles />
      <Navbar cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      <Marquee />
      <Catalogue onAddToCart={handleAddToCart} />
      <FloatingShowcase />
      <Lookbook />
      <ExpandingPanels />
      <Atelier />
      <Carousel onAddToCart={handleAddToCart} />
      <Newsletter />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onPlaceOrder={handlePlaceOrder}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />
    </>
  );
}

export default App;
