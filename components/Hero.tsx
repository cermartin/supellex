import { ArrowDown } from 'lucide-react';

interface Props {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: Props) {
  return (
    <section className="relative min-h-[90vh] bg-brand-offwhite flex flex-col items-center justify-center text-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Subtle warm background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-offwhite to-brand-bg pointer-events-none" />

      {/* Decorative red line */}
      <div className="relative z-10 w-12 h-0.5 bg-brand-red mx-auto mb-8" />

      {/* Tag line */}
      <p className="relative z-10 text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-6">
        Premium Bedroom Furniture · Crafted for British Homes
      </p>

      {/* Headline */}
      <h1 className="relative z-10 font-serif text-5xl md:text-7xl lg:text-8xl text-brand-black leading-tight tracking-tight mb-10 max-w-3xl">
        Your bedroom,
        <br />
        <em className="not-italic text-brand-red">beautifully</em> arranged.
      </h1>

      {/* Accent band */}
      <div className="relative z-10 w-full max-w-2xl mb-10">
        <div className="bg-brand-black px-8 py-5 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            'Sliding Wardrobes',
            'Vanity Tables',
            'Kids Beds',
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-6">
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">{item}</span>
              {i < 2 && <span className="w-1 h-1 rounded-full bg-brand-red" />}
            </span>
          ))}
        </div>
      </div>

      {/* Sub-copy */}
      <p className="relative z-10 text-brand-grey text-lg md:text-xl leading-relaxed max-w-xl mb-12">
        Sliding wardrobes with integrated LED lighting, elegant vanity tables, and smart
        storage — designed to make every morning feel effortless.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 mb-20">
        <button
          onClick={onShopClick}
          className="px-9 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-widest uppercase text-sm transition-colors"
        >
          Explore the Collection
        </button>
        <button
          onClick={onShopClick}
          className="px-9 py-4 border border-brand-black/20 hover:border-brand-red text-brand-black hover:text-brand-red font-bold tracking-widest uppercase text-sm transition-colors"
        >
          View All Products
        </button>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10 text-center border-t border-brand-light pt-10 w-full max-w-lg">
        {[
          { value: 'Free', label: 'UK Delivery' },
          { value: 'UK', label: 'Based & Operated' },
          { value: '9+', label: 'Products' },
        ].map(({ value, label }) => (
          <div key={label}>
            <div className="text-2xl font-black text-brand-black">{value}</div>
            <div className="text-brand-grey text-xs font-semibold tracking-widest uppercase mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll nudge */}
      <button
        onClick={onShopClick}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-grey/40 hover:text-brand-red transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
