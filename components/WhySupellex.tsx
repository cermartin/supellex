import { Zap, Layers, Ruler, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    num: '01',
    icon: Zap,
    title: 'Integrated LED Lighting',
    body: 'Built-in LED strips illuminate your wardrobe interior for effortless, stylish organisation — day or night.',
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
    icon: ShieldCheck,
    title: 'Trusted by UK Customers',
    body: 'Thousands of happy customers across the UK. Full buyer protection and hassle-free returns.',
  },
];

export default function WhySupellex() {
  return (
    <section id="why" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="w-10 h-0.5 bg-brand-red mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight">
            Why customers
            <br />
            <span className="text-brand-red">choose Supellex</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ num, icon: Icon, title, body }) => (
            <div
              key={num}
              className="group p-8 bg-white border border-brand-light hover:border-brand-red/30 transition-colors"
            >
              <div className="text-5xl font-black text-brand-light group-hover:text-brand-red/10 transition-colors mb-4 leading-none select-none">
                {num}
              </div>
              <div className="w-10 h-10 bg-brand-red/8 group-hover:bg-brand-red/15 flex items-center justify-center mb-5 transition-colors">
                <Icon size={20} className="text-brand-red" />
              </div>
              <h3 className="text-brand-black font-black text-base mb-3 leading-snug">{title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
