import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center relative">
            <div className="relative">
              {/* Top decorative line - desktop only */}
              <div className="hidden md:block absolute -top-1 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              {/* Main text */}
              <span className="text-[26px] md:text-[32px] font-serif italic font-bold tracking-tight leading-none">
                Brunch<span className="text-primary">&</span>Co
              </span>
              {/* Bottom decorative swirl */}
              <svg className="absolute -bottom-1.5 left-0 w-full h-2" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0 5 Q50 10 100 5 Q150 0 200 5" stroke="#141414" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
              {/* Second thinner swirl */}
              <svg className="hidden md:block absolute -bottom-3 left-1 right-1 h-1.5" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 4 Q50 8 100 4 Q150 0 200 4" stroke="#141414" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-dark/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Réservation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-dark/70 hover:text-primary hover:bg-black/5 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary text-white text-center py-3 rounded-lg font-medium shadow-lg shadow-primary/20"
                >
                  Réservation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
