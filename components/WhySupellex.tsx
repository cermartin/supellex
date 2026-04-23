import { Zap, Layers, Ruler, Star } from 'lucide-react';

const PILLARS = [
  {
    num: '01',
    icon: Zap,
    title: 'Integrated LED Lighting',
    body: 'Built-in LED strips illuminate your interior for effortless, stylish organisation — day or night.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Premium Materials',
    body: 'Engineered wood panels with high-quality laminate finishes — durable, beautiful, and easy to maintain.',
  },
  {
    num: '03',
    icon: Ruler,
    title: 'Multiple Size Options',
    body: 'Every product comes in 3–6 size configurations so you always find the perfect fit for your space.',
  },
  {
    num: '04',
    icon: Star,
    title: 'Trusted on Amazon UK',
    body: 'Thousands of happy customers across the UK. Sold and fulfilled through Amazon with full buyer protection.',
  },
];

export default function WhySupellex() {
  return (
    <section id="why" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">
              Why Supellex
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Furniture That Works
            <br />
            <span className="text-brand-red">As Hard As You Do.</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ num, icon: Icon, title, body }) => (
            <div
              key={num}
              className="group p-8 bg-brand-smoke border border-white/5 hover:border-brand-red/40 transition-colors"
            >
              <div className="text-5xl font-black text-white/5 group-hover:text-brand-red/10 transition-colors mb-4 leading-none select-none">
                {num}
              </div>
              <div className="w-10 h-10 bg-brand-red/10 group-hover:bg-brand-red/20 flex items-center justify-center mb-5 transition-colors">
                <Icon size={20} className="text-brand-red" />
              </div>
              <h3 className="text-white font-black text-lg mb-3 leading-snug">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
