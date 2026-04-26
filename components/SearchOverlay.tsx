import { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface Props {
  onClose: () => void;
  onProductClick: (id: string) => void;
}

export default function SearchOverlay({ onClose, onProductClick }: Props) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const results: Product[] = query.trim().length < 2
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (id: string) => {
    onClose();
    onProductClick(id);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-black/80 backdrop-blur-sm flex flex-col items-center pt-24 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Input bar */}
        <div className="flex items-center border-b border-brand-light px-4 py-3 gap-3">
          <Search size={18} className="text-brand-grey flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products…"
            className="flex-1 text-brand-black text-base outline-none bg-transparent placeholder:text-brand-grey/50"
          />
          <button onClick={onClose} className="text-brand-grey hover:text-brand-red transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <ul className="max-h-[60vh] overflow-y-auto divide-y divide-brand-light">
            {results.map(p => (
              <li key={p.id}>
                <button
                  onClick={() => handleSelect(p.id)}
                  className="w-full flex items-center gap-4 px-4 py-3 hover:bg-brand-offwhite transition-colors text-left"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 object-contain flex-shrink-0 bg-brand-offwhite"
                  />
                  <div className="min-w-0">
                    <p className="text-brand-black text-sm font-semibold leading-snug truncate">{p.name}</p>
                    <p className="text-brand-grey text-xs mt-0.5">{p.category} · {p.price}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        {query.trim().length >= 2 && results.length === 0 && (
          <p className="px-4 py-5 text-brand-grey text-sm text-center">No products found for "{query}"</p>
        )}

        {query.trim().length < 2 && (
          <p className="px-4 py-4 text-brand-grey/50 text-xs text-center">Type at least 2 characters to search</p>
        )}
      </div>
    </div>
  );
}
