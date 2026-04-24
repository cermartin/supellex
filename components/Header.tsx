import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled ? 'py-3 shadow-md shadow-black/8' : 'py-4 border-b border-brand-light'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
          {/* Desktop nav — left */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-brand-black/70 hover:text-brand-red text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile burger — left on mobile */}
          <button
            className="md:hidden text-brand-black p-1 justify-self-start"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo — centre */}
          <button
            onClick={() => handleNav('#')}
            className="flex justify-center items-center focus:outline-none"
            aria-label="Supellex home"
          >
            <img
              src="/supellex-logo.jpg"
              alt="Supellex"
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* Right side — remaining nav + CTA on desktop */}
          <div className="hidden md:flex items-center justify-end gap-7">
            {NAV_LINKS.slice(3).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-brand-black/70 hover:text-brand-red text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#products')}
              className="bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 transition-colors"
            >
              Shop Now
            </button>
          </div>

          {/* Mobile right — shop now */}
          <button
            onClick={() => handleNav('#products')}
            className="md:hidden justify-self-end text-xs font-bold tracking-widest uppercase text-brand-red"
          >
            Shop
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-brand-black text-2xl font-black tracking-widest uppercase hover:text-brand-red transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#products')}
            className="mt-4 bg-brand-red hover:bg-brand-red-dark text-white text-base font-bold tracking-widest uppercase px-8 py-4 transition-colors"
          >
            Shop Now
          </button>
        </div>
      )}
    </>
  );
}
