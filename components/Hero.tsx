import { ShoppingBag, ChevronDown } from 'lucide-react';
import { SHOP_URL, PRODUCTS } from '../constants';

interface Props {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: Props) {
  const featured = PRODUCTS[0];

  return (
    <section className="relative min-h-screen bg-brand-black flex items-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={featured.image}
          alt="Supellex premium bedroom furniture"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Red-tinted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
      </div>

      {/* Red accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-2xl animate-heroUp">
          {/* Category tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">
              Premium Bedroom Furniture
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6">
            Designed to
            <br />
            <span className="text-brand-red">Impress.</span>
            <br />
            Built to Last.
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
            Sliding wardrobes with integrated LED lighting, elegant vanity tables, and smart storage
            solutions — crafted for the modern British home.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onShopClick}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-widest uppercase text-sm transition-colors"
            >
              View Collection
            </button>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-brand-red text-white hover:text-brand-red font-bold tracking-widest uppercase text-sm transition-colors"
            >
              <ShoppingBag size={16} />
              Shop on Amazon
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 pt-8 border-t border-white/10">
            {[
              { value: '8+', label: 'Products' },
              { value: 'UK', label: 'Delivery' },
              { value: '5★', label: 'Rated' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-white">{value}</div>
                <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={onShopClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-brand-red transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
