import { Sofa, Sparkles, Truck } from 'lucide-react';

const PILLARS = [
  {
    icon: Sofa,
    title: 'Built to Last',
    body: 'Supellex furniture is engineered for real homes — premium materials, solid construction, designed to look good for years, not months.',
  },
  {
    icon: Sparkles,
    title: 'LED Lighting Included',
    body: 'Every wardrobe comes with integrated LED lighting as standard. Wake up to a bedroom that actually works for you.',
  },
  {
    icon: Truck,
    title: 'Free UK Delivery',
    body: 'We deliver to every postcode in the UK at no extra cost. Your order arrives packaged with care — ready to build, ready to enjoy.',
  },
];

export default function BrandStatement() {
  return (
    <section className="bg-brand-black">
      {/* Red accent top bar */}
      <div className="h-1 bg-brand-red" />

      {/* Intro text */}
      <div className="py-20 px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-10 h-0.5 bg-brand-red mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-snug mb-5">
            Your home deserves better
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Supellex exists because great bedroom furniture shouldn't cost a fortune or feel like a compromise. We built the brand to change that — one home at a time.
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
