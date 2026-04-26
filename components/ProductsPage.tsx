import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const CATEGORIES = ['All', 'Wardrobes', 'Dressing Tables', 'Kids Beds'];

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div className="group bg-white cursor-pointer flex flex-col overflow-hidden" onClick={onClick}>
      <div className="relative overflow-hidden bg-brand-bg aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.badge === 'Best Seller' && (
          <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">
            Best Seller
          </div>
        )}
        {product.variants && product.variants.length > 0 && (
          <div className="absolute bottom-4 left-4 flex gap-1.5">
            {product.variants.slice(0, 4).map((v) => (
              <div
                key={v.id}
                className="w-4 h-4 rounded-full border-2 border-white shadow"
                style={{ backgroundColor: v.swatch }}
                title={v.name}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1 border border-t-0 border-brand-light group-hover:border-brand-red/30 transition-colors">
        <div className="text-brand-red text-xs font-bold tracking-widest uppercase mb-2">{product.category}</div>
        <h3 className="font-bold text-brand-black leading-snug mb-2 text-base group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-light">
          <span className="font-black text-brand-black text-xl">{product.price}</span>
          <span className="flex items-center gap-1.5 text-brand-red text-sm font-semibold group-hover:gap-3 transition-all">
            View <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </div>
  );
}

interface Props {
  onProductClick: (id: string) => void;
}

export default function ProductsPage({ onProductClick }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-28 min-h-screen bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Our Range</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight">
            The Full Collection
          </h1>
          <p className="text-brand-grey text-base mt-3 max-w-lg">
            {PRODUCTS.length} products across wardrobes, vanity tables and beds — all delivered free across the UK.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-10" style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors border ${
                activeCategory === cat
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'border-brand-light text-brand-grey hover:border-brand-red hover:text-brand-red bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
