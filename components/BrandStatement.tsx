import { Sofa, Sparkles, Truck } from 'lucide-react';

const PILLARS = [
  {
    icon: Sofa,
    title: 'Thoughtfully Designed',
    body: 'Every piece is crafted to fit seamlessly into your bedroom — practical storage that never compromises on style.',
  },
  {
    icon: Sparkles,
    title: 'Integrated LED Lighting',
    body: 'Built-in LED strips add warmth and clarity to your wardrobe interior — a small detail that makes a big difference.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    body: 'We ship across the UK. Your new furniture arrives carefully packaged and ready to assemble.',
  },
];

export default function BrandStatement() {
  return (
    <section className="relative bg-brand-black overflow-hidden">
      {/* Red accent top bar */}
      <div className="h-1 bg-brand-red" />

      {/* Brand symbol watermark */}
      <img
        src="/supellex-symbol.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[380px] opacity-[0.04] select-none pointer-events-none"
      />

      {/* Intro text */}
      <div className="py-20 px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-10 h-0.5 bg-brand-red mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-snug mb-5">
            Furniture that feels like home
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Supellex was built on one idea: that great bedroom furniture should be accessible, beautiful,
            and built to last. Browse our collection and find the perfect fit for your space.
          </p>
        </div>

        {/* Three pillars */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center px-8 py-10">
              <div className="w-12 h-12 bg-brand-red/20 flex items-center justify-center mx-auto mb-5">
                <Icon size={22} className="text-brand-red" />
              </div>
              <h3 className="font-black text-white text-base uppercase tracking-widest mb-3">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
