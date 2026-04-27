import { Zap, Layers, Ruler, ShieldCheck, Truck, HeadphonesIcon } from 'lucide-react';

const PILLARS = [
  {
    num: '01',
    icon: Zap,
    title: 'Integrated LED Lighting',
    body: 'Every wardrobe comes with built-in LED strips — so your mornings are easier, your space looks premium, and nothing gets lost in the dark.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Premium Materials',
    body: 'We use engineered wood with high-quality laminate finishes. Built to handle daily life without scratching, warping, or fading.',
  },
  {
    num: '03',
    icon: Ruler,
    title: 'Multiple Size Options',
    body: 'Every product comes in multiple configurations — so whether your room is compact or spacious, there\'s a Supellex that fits perfectly.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Buyer Protection',
    body: 'Every order is covered. If something isn\'t right, we make it right — no hoops, no hassle, no waiting weeks for a reply.',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Free UK Delivery',
    body: 'We deliver to every corner of the UK, completely free. No minimum order, no hidden charges — just your furniture, at your door.',
  },
  {
    num: '06',
    icon: HeadphonesIcon,
    title: 'UK-Based Support',
    body: 'Our team is based right here in the UK. Real people, real answers — reach us by email or WhatsApp and we\'ll get back to you fast.',
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
