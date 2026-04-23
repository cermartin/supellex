import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const CATEGORIES = ['All', 'Wardrobes', 'Dressing Tables', 'Kids Beds'];

interface Props {
  onProductClick: (id: string) => void;
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div
      className="group bg-white border border-brand-light hover:border-brand-red/40 transition-all duration-300 cursor-pointer flex flex-col"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-brand-bg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold tracking-widest uppercase px-3 py-1">
            {product.badge}
          </div>
        )}
        {/* Colour swatches if variants exist */}
        {product.variants && product.variants.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {product.variants.slice(0, 4).map((v) => (
              <div
                key={v.id}
                className="w-4 h-4 rounded-full border-2 border-white shadow"
                style={{ backgroundColor: v.swatch }}
                title={v.name}
              />
            ))}
            {product.variants.length > 4 && (
              <div className="w-4 h-4 rounded-full border-2 border-white bg-brand-charcoal flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">+{product.variants.length - 4}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-brand-red text-xs font-bold tracking-widest uppercase mb-1">
          {product.category}
        </div>
        <h3 className="font-black text-brand-black text-base leading-snug mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        <p className="text-brand-grey text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                className={i < Math.round(product.rating!) ? 'fill-brand-red text-brand-red' : 'text-brand-light'}
              />
            ))}
            {product.reviewCount && (
              <span className="text-brand-grey text-xs ml-1">({product.reviewCount})</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-light">
          <span className="text-2xl font-black text-brand-black">{product.price}</span>
          <button className="flex items-center gap-1.5 text-brand-red text-sm font-bold tracking-wide hover:gap-3 transition-all">
            View <ArrowRight size={15} />
          </button>
        </div>

        {/* Variants count */}
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
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">
              Our Collection
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-brand-black leading-tight">
              Premium Bedroom
              <br />
              <span className="text-brand-red">Furniture</span>
            </h2>
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors border ${
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product.id)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-brand-grey">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
