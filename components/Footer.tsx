import { ShoppingBag } from 'lucide-react';
import { NAV_LINKS, SHOP_URL } from '../constants';

interface Props {
  onNavClick?: (href: string) => void;
}

export default function Footer({ onNavClick }: Props) {
  return (
    <footer id="contact" className="bg-brand-black text-white">
      {/* Red accent top */}
      <div className="h-1 bg-brand-red" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill="white" />
                <path d="M8 16 Q22 10 36 16" stroke="#D62B2B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <path d="M8 28 Q22 34 36 28" stroke="#D62B2B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
              <span className="font-black text-lg tracking-wider uppercase">supellex</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium bedroom furniture designed for the modern British home. Sliding wardrobes,
              vanity tables, bunk beds and more — available on Amazon UK.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red mb-5">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavClick?.(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red mb-5">Shop</h3>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              All products are sold via Amazon UK with full buyer protection, secure payments, and reliable UK delivery.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold tracking-widest uppercase px-6 py-3 transition-colors"
            >
              <ShoppingBag size={16} />
              Shop on Amazon
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} Supellex. All rights reserved.</span>
          <span>Delivered across the UK · Available on Amazon UK</span>
        </div>
      </div>
    </footer>
  );
}
