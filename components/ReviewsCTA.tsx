import { Star, ArrowRight } from 'lucide-react';

interface Props {
  onBrowse: () => void;
  onLeave: () => void;
}

export default function ReviewsCTA({ onBrowse, onLeave }: Props) {
  return (
    <section className="bg-brand-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={16} className="fill-brand-red text-brand-red" />
            ))}
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-white leading-snug mb-2">
            Trusted by homes across the UK
          </h2>
          <p className="text-white/40 text-sm max-w-md">
            Thousands of customers have transformed their bedrooms with Supellex. See what they have to say.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button
            onClick={onBrowse}
            className="flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white text-white font-bold tracking-widest uppercase text-xs transition-colors"
          >
            Browse Reviews <ArrowRight size={14} />
          </button>
          <button
            onClick={onLeave}
            className="flex items-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-widest uppercase text-xs transition-colors"
          >
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
}
