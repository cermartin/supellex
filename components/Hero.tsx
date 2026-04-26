import { ArrowDown } from 'lucide-react';

interface Props {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: Props) {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] bg-brand-offwhite flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-offwhite to-brand-bg pointer-events-none" />

      {/* Decorative red line */}
      <div className="relative z-10 w-10 h-0.5 bg-brand-red mx-auto mb-4" />

      {/* Tag line */}
      <p className="relative z-10 text-brand-red text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
        Premium Bedroom Furniture · One Home At a Time…
      </p>

      {/* Headline */}
      <h1 className="relative z-10 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black leading-tight tracking-tight mb-5 max-w-2xl">
        Your bedroom,
        <br />
        <em className="not-italic text-brand-red">beautifully</em> arranged.
      </h1>

      {/* Accent band */}
      <div className="relative z-10 w-full max-w-xl mb-5 px-6">
        <div className="bg-brand-black px-4 py-3.5 flex items-center justify-center gap-3 md:gap-8">
          {['Premium Quality', 'UK Based', 'Expert Craftsmanship'].map((item, i) => (
            <span key={item} className="flex items-center gap-3 md:gap-8">
              <span className="text-white text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">{item}</span>
              {i < 2 && <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0" />}
            </span>
          ))}
        </div>
      </div>

      {/* Sub-copy */}
      <p className="relative z-10 text-brand-grey text-sm md:text-base leading-relaxed max-w-md mb-7">
        Sliding wardrobes with integrated LED lighting, elegant vanity tables, and smart
        storage — designed to make every morning feel effortless.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 mb-8">
        <button
          onClick={onShopClick}
          className="px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-widest uppercase text-xs transition-colors"
        >
          Explore the Collection
        </button>
        <button
          onClick={onShopClick}
          className="px-7 py-3.5 border border-brand-black/20 hover:border-brand-red text-brand-black hover:text-brand-red font-bold tracking-widest uppercase text-xs transition-colors"
        >
          View All Products
        </button>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 flex justify-center gap-8 md:gap-12 text-center border-t border-brand-light pt-6 w-full max-w-sm">
        {[
          { value: 'Nationwide', label: 'Delivery' },
          { value: 'UK', label: 'Based & Operated' },
          { value: '50+', label: 'Products' },
        ].map(({ value, label }) => (
          <div key={label}>
            <div className="text-lg md:text-xl font-black text-brand-black">{value}</div>
            <div className="text-brand-grey text-[9px] font-semibold tracking-widest uppercase mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll nudge */}
      <button
        onClick={onShopClick}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-brand-grey/40 hover:text-brand-red transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
