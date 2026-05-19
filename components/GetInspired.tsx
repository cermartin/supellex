import { ArrowRight } from 'lucide-react';

const PHOTOS = [
  {
    id: '1',
    src: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg',
    label: 'Sliding Wardrobe with LED',
    tag: 'Wardrobes',
  },
  {
    id: '7',
    src: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg',
    label: 'Vanity Table with Hollywood Mirror',
    tag: 'Dressing Tables',
  },
  {
    id: '2',
    src: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg',
    label: 'Mirror Wardrobe — Best Seller',
    tag: 'Wardrobes',
  },
  {
    id: '9',
    src: 'https://m.media-amazon.com/images/I/610hyhsbBLL._AC_SY300_SX300_QL70_ML2_.jpg',
    label: 'Kids Bunk Bed',
    tag: 'Kids Beds',
  },
  {
    id: '8',
    src: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg',
    label: 'Luxury Vanity with 8 Drawers',
    tag: 'Dressing Tables',
  },
  {
    id: '4',
    src: 'https://m.media-amazon.com/images/I/71uX8qbWO9L._AC_SX300_SY300_QL70_ML2_.jpg',
    label: 'Three-Panel Mirror Wardrobe',
    tag: 'Wardrobes',
  },
];

interface Props {
  onProductClick: (id: string) => void;
}

export default function GetInspired({ onProductClick }: Props) {
  return (
    <section className="bg-brand-offwhite py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Real Homes</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-black leading-tight max-w-lg">
              Get inspired by other{' '}
              <em className="not-italic text-brand-red">Supellex</em> homes
            </h2>
            <button
              onClick={() => onProductClick('1')}
              className="flex-shrink-0 flex items-center gap-2 text-brand-black font-bold text-xs tracking-widest uppercase hover:text-brand-red transition-colors"
            >
              Browse Collection <ArrowRight size={14} />
            </button>
          </div>
          <p className="text-brand-grey text-sm mt-3 max-w-xl">
            Thousands of homes across the UK trust Supellex for their bedrooms. Here's what our customers love.
          </p>
        </div>

        {/* Photo grid — horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory md:snap-none"
          style={{ WebkitOverflowScrolling: 'touch' }}>
          {PHOTOS.map((photo) => (
            <button
              key={photo.id}
              onClick={() => onProductClick(photo.id)}
              className="group flex-shrink-0 w-[72vw] sm:w-[55vw] md:w-auto relative overflow-hidden bg-brand-bg snap-start"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-brand-red text-[10px] font-bold tracking-widest uppercase">{photo.tag}</span>
                <p className="text-white text-sm font-bold mt-0.5 leading-snug">{photo.label}</p>
              </div>
              {/* Tag chip always visible */}
              <div className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-black group-hover:opacity-0 transition-opacity duration-200">
                {photo.tag}
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onProductClick('1')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm hover:bg-brand-red-dark transition-colors"
          >
            Shop the Full Collection <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
