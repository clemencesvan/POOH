import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Coffee Shop', path: '/coffee' },
    { name: 'Our Story', path: '/story' },
  ];

  return (
    <nav className="fixed top-8 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif tracking-[0.2em] uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-butter-accent"></span>
          POOH
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] transition-all relative pb-1",
                location.pathname === link.path 
                  ? "text-ink font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-butter-accent" 
                  : "text-ink/40 hover:text-ink"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-butter/50 rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-butter-dark/20 p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-serif tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
