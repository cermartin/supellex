import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const CATEGORIES = ['All', 'Wardrobes', 'Dressing Tables', 'Kids Beds'];
const FEATURED_IDS = ['1', '7', '9'];

interface Props {
  onProductClick: (id: string) => void;
}

function ProductCard({ product, onClick, large = false }: { product: Product; onClick: () => void; large?: boolean }) {
  return (
    <div
      className="group bg-white cursor-pointer flex flex-col overflow-hidden"
      onClick={onClick}
    >
      <div className={`relative overflow-hidden bg-brand-bg ${large ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">
            {product.badge}
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
        <div className="text-brand-red text-xs font-bold tracking-widest uppercase mb-2">
          {product.category}
        </div>
        <h3 className={`font-bold text-brand-black leading-snug mb-2 group-hover:text-brand-red transition-colors ${large ? 'text-xl' : 'text-base'}`}>
          {product.name}
        </h3>
        {large && (
          <p className="text-brand-grey text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-light">
          <span className={`font-black text-brand-black ${large ? 'text-3xl' : 'text-xl'}`}>{product.price}</span>
          <span className="flex items-center gap-1.5 text-brand-red text-sm font-semibold group-hover:gap-3 transition-all">
            View <ArrowRight size={15} />
          </span>
        </div>
        {product.variants && (
          <div className="text-brand-grey text-xs mt-2">
            {product.variants.length} colour options available
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductGallery({ onProductClick }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = FEATURED_IDS.map(id => PRODUCTS.find(p => p.id === id)!);

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="bg-brand-offwhite">

      {/* Featured — 3 large picks */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">
              Featured Pieces
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight max-w-lg">
            Handpicked for your home
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product.id)}
              large
            />
          ))}
        </div>

        {/* Expand CTA */}
        {!showAll && (
          <div className="mt-16 text-center">
            <p className="text-brand-grey text-sm mb-5">
              We carry {PRODUCTS.length} products across wardrobes, dressing tables and beds.
            </p>
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-brand-black text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-black hover:text-white transition-colors"
            >
              Browse the Full Collection <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Full grid — shown after CTA click */}
      {showAll && (
        <div className="bg-brand-bg border-t border-brand-light">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
              <h3 className="text-3xl font-black text-brand-black">
                Full Collection
              </h3>
              <div className="flex gap-2 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: 'touch' }}>
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onProductClick(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
