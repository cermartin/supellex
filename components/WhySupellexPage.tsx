import { Zap, Layers, Ruler, ShieldCheck, Truck, HeadphonesIcon } from 'lucide-react';

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
    title: 'Buyer Protection',
    body: 'Shop with confidence. Full buyer protection, hassle-free returns, and dedicated customer support.',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Free UK Delivery',
    body: 'Every order ships free to any address across the United Kingdom — no minimum spend, no hidden fees.',
  },
  {
    num: '06',
    icon: HeadphonesIcon,
    title: 'UK-Based Support',
    body: 'Our team is based right here in the UK. Reach us directly — we\'re always on hand to help.',
  },
];

export default function WhySupellexPage() {
  return (
    <main className="pt-28 min-h-screen bg-brand-offwhite">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Our Promise</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-black leading-tight mb-6">
            Why customers<br />
            <span className="text-brand-red">choose Supellex</span>
          </h1>
          <p className="text-brand-grey text-lg leading-relaxed">
            We started Supellex with one belief: every home deserves furniture that looks premium, lasts long, and arrives without the headache. One home at a time — that's not just a tagline. It's how we operate.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {PILLARS.map(({ num, icon: Icon, title, body }) => (
            <div
              key={num}
              className="group p-8 bg-white border border-brand-light hover:border-brand-red/40 transition-colors"
            >
              <div className="text-5xl font-black text-brand-black/5 group-hover:text-brand-red/10 transition-colors mb-4 leading-none select-none">
                {num}
              </div>
              <div className="w-10 h-10 bg-brand-red/10 group-hover:bg-brand-red/20 flex items-center justify-center mb-5 transition-colors">
                <Icon size={20} className="text-brand-red" />
              </div>
              <h3 className="text-brand-black font-black text-base mb-3 leading-snug">{title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Brand statement */}
        <div className="bg-brand-black text-white px-10 py-14 max-w-3xl">
          <div className="w-10 h-0.5 bg-brand-red mb-6" />
          <blockquote className="font-serif text-3xl md:text-4xl leading-snug text-white/90 mb-6">
            "Our goal is simple — to be in every home, one family at a time."
          </blockquote>
          <p className="text-white/40 text-sm font-semibold tracking-widest uppercase">
            Supellex — One Home At a Time…
          </p>
        </div>
      </div>
    </main>
  );
}
