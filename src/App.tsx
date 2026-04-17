import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Story } from './pages/Story';
import { CoffeeShop } from './pages/CoffeeShop';
import { AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col pt-8">
        <div className="fixed top-0 left-0 w-full h-8 bg-butter flex items-center justify-center z-[60]">
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/60">
            Free shipping on orders over €100 — <span className="italic">Live in POOH</span>
          </p>
        </div>
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/coffee" element={<CoffeeShop />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </AnimatePresence>
  );
}
