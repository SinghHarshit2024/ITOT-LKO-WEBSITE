import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`relative w-full transition-all duration-300 ${isOpen ? 'bg-white' : (scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 lg:py-4' : 'bg-transparent py-4 lg:py-6')}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[70]">
        <Link to="/" className="flex items-center gap-2 md:gap-4">
          <div className="relative group">
            <img 
              src="/Images/logo.jpg" 
              alt="ITOT Logo" 
              className="w-10 h-10 md:w-14 md:h-14 object-contain relative z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = parent.querySelector('.logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />
            {/* Fallback Logo if image is missing */}
            <div className="logo-fallback hidden w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 transition-transform group-hover:scale-105">
              <span className="text-black font-black text-[10px] md:text-xs">SSTRC</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[11px] font-black tracking-tighter text-black leading-none uppercase">
              STATE STAFF TRAINING
            </span>
            <span className="text-[9px] md:text-[11px] font-black tracking-tighter text-black leading-none uppercase">
              & RESEARCH Centre
            </span>
            <span className="text-[8px] md:text-[9px] font-bold tracking-tight text-amber-600 leading-tight mt-0.5 opacity-80">
              "ITOT, ALIGANJ, LUCKNOW"
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${location.pathname === link.path ? 'text-amber-600' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 focus:outline-none z-[80] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white w-full max-h-[90vh] flex flex-col shadow-2xl rounded-b-[40px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 flex flex-col items-center justify-center p-8 pt-40 pb-16 space-y-8 overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.path}
                      className={`block text-4xl sm:text-5xl font-bold tracking-tighter transition-colors ${location.pathname === link.path ? 'text-amber-500' : 'text-black'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="w-full pt-12 border-t border-gray-100 max-w-xs mx-auto text-center">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Contact Admissions</p>
                  <p className="text-black font-bold">+91 522 XXX XXXX</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
