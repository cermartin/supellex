import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_LINKS, SHOP_URL } from '../constants';

interface Props {
  onNavClick?: (href: string) => void;
}

export default function Header({ onNavClick }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    onNavClick?.(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-black/95 backdrop-blur-sm py-3 shadow-lg shadow-black/40'
            : 'bg-brand-black py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#')}
            className="flex items-center gap-3 group"
          >
            {/* SVG inline logo replicating the Supellex brand mark */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="white" />
              <circle cx="22" cy="22" r="18" fill="white" />
              {/* Red swoosh top */}
              <path
                d="M8 16 Q22 10 36 16"
                stroke="#D62B2B" strokeWidth="3.5" strokeLinecap="round" fill="none"
              />
              {/* Red swoosh bottom */}
              <path
                d="M8 28 Q22 34 36 28"
                stroke="#D62B2B" strokeWidth="3.5" strokeLinecap="round" fill="none"
              />
            </svg>
            <span className="text-white font-black text-xl tracking-wider uppercase group-hover:text-brand-red transition-colors">
              supellex
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-white/70 hover:text-brand-red text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Shop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold tracking-widest uppercase px-5 py-2.5 transition-colors"
            >
              <ShoppingBag size={16} />
              Shop Amazon
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-white text-2xl font-black tracking-widest uppercase hover:text-brand-red transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-base font-bold tracking-widest uppercase px-8 py-4 transition-colors"
          >
            <ShoppingBag size={18} />
            Shop Amazon
          </a>
        </div>
      )}
    </>
  );
}
