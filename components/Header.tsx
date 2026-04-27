import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import SearchOverlay from './SearchOverlay';

interface Props {
  onNavClick?: (href: string) => void;
  onProductClick?: (id: string) => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Header({ onNavClick, onProductClick, cartCount = 0, onCartClick }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
          isScrolled ? 'py-2 shadow-md shadow-black/8' : 'py-3 border-b border-brand-light'
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

          {/* Mobile burger — left */}
          <button
            className="md:hidden text-brand-black p-1 justify-self-start"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo — centre */}
          <button
            onClick={() => { setMenuOpen(false); onNavClick?.(''); }}
            className="flex flex-col justify-center items-center focus:outline-none"
            aria-label="Supellex home"
          >
            <img src="/supellex-logo.png" alt="Supellex" className="h-14 w-auto object-contain" />
            <span className="text-[10px] tracking-[0.18em] text-brand-grey font-bold -mt-1 hidden md:block">
              One Home At a Time…
            </span>
          </button>

          {/* Right side — nav + search + cart */}
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
              onClick={() => setSearchOpen(true)}
              className="text-brand-black/60 hover:text-brand-red transition-colors"
              aria-label="Search products"
            >
              <Search size={18} />
            </button>
            <button
              onClick={onCartClick}
              className="relative text-brand-black/60 hover:text-brand-red transition-colors"
              aria-label="View basket"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-red text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right — search + cart */}
          <div className="md:hidden justify-self-end flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-brand-black/60 hover:text-brand-red transition-colors p-1"
              aria-label="Search products"
            >
              <Search size={20} />
            </button>
            <button
              onClick={onCartClick}
              className="relative text-brand-black/60 hover:text-brand-red transition-colors p-1"
              aria-label="View basket"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-red text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-brand-black hover:text-brand-red transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="mb-4 text-center">
            <img src="/supellex-logo.png" alt="Supellex" className="h-16 w-auto mx-auto mb-1 object-contain" />
            <span className="text-[10px] tracking-[0.18em] text-brand-grey font-bold">One Home At a Time…</span>
          </div>
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
            onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
            className="mt-4 bg-brand-red hover:bg-brand-red-dark text-white text-base font-bold tracking-widest uppercase px-8 py-4 transition-colors"
          >
            Search Products
          </button>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onProductClick={(id) => { setSearchOpen(false); onProductClick?.(id); }}
        />
      )}
    </>
  );
}
