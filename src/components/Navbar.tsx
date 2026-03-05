import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu as MenuIcon, X } from 'lucide-react';
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
          <Link to="/" className="flex items-center">
            {/* Desktop logo */}
            <svg width="150" height="48" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
              {/* Top decorative swirl */}
              <path d="M60 10 Q150 -2 240 10" stroke="#D4AF37" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M80 6 Q150 0 220 6" stroke="#D4AF37" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5"/>
              {/* Left ornament curl */}
              <path d="M28 45 Q18 25 30 15 Q38 10 40 18 Q42 26 32 30 Q22 34 20 45 Q18 56 28 62" stroke="#141414" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              {/* Main text */}
              <text x="44" y="60" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="56" fontWeight="700" fontStyle="italic" fill="#141414" letterSpacing="-2">Brunch</text>
              <text x="210" y="60" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="56" fontWeight="700" fontStyle="italic" fill="#F27D26" letterSpacing="-2">&</text>
              <text x="236" y="60" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="56" fontWeight="700" fontStyle="italic" fill="#141414" letterSpacing="-2">Co</text>
              {/* Bottom decorative double swirl */}
              <path d="M44 70 Q100 82 150 70 Q200 58 270 70" stroke="#141414" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <path d="M44 75 Q100 85 150 75 Q200 65 270 75" stroke="#141414" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.3"/>
              {/* Right ornament curl */}
              <path d="M272 45 Q282 25 270 15 Q262 10 260 18 Q258 26 268 30 Q278 34 280 45 Q282 56 272 62" stroke="#141414" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              {/* Small diamond accents */}
              <path d="M150 4 L153 8 L150 12 L147 8 Z" fill="#F27D26"/>
              <path d="M150 78 L153 82 L150 86 L147 82 Z" fill="#F27D26"/>
            </svg>
            {/* Mobile logo */}
            <svg width="120" height="38" viewBox="0 0 240 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden">
              {/* Left curl */}
              <path d="M18 38 Q10 22 20 14 Q26 10 28 16 Q30 22 22 25 Q14 28 12 38 Q10 48 18 52" stroke="#141414" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* Main text */}
              <text x="30" y="50" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="46" fontWeight="700" fontStyle="italic" fill="#141414" letterSpacing="-2">Brunch</text>
              <text x="168" y="50" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="46" fontWeight="700" fontStyle="italic" fill="#F27D26" letterSpacing="-2">&</text>
              <text x="190" y="50" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="46" fontWeight="700" fontStyle="italic" fill="#141414" letterSpacing="-2">Co</text>
              {/* Bottom swirl */}
              <path d="M30 58 Q80 68 120 58 Q160 48 220 58" stroke="#141414" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* Right curl */}
              <path d="M222 38 Q230 22 220 14 Q214 10 212 16 Q210 22 218 25 Q226 28 228 38 Q230 48 222 52" stroke="#141414" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
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
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Search size={20} />
            </button>
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
