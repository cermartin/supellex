export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-24">
      {/* Hero banner */}
      <div className="bg-brand-black py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Built for the<br />
            <span className="text-brand-red">Modern Home.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Supellex was founded with one goal — to bring premium bedroom furniture to British homes at an honest price.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl font-black text-brand-black mb-5 leading-tight">
              Where Quality Meets Design
            </h2>
            <p className="text-brand-grey leading-relaxed mb-4">
              We believe your bedroom should feel like a sanctuary. Every Supellex piece is carefully designed to combine smart storage with clean, contemporary aesthetics — furniture that works as hard as you do.
            </p>
            <p className="text-brand-grey leading-relaxed">
              From sliding wardrobes with integrated LED lighting to Hollywood vanity tables and space-saving bunk beds, every product in our range is built to last and designed to impress.
            </p>
          </div>
          <div className="bg-brand-charcoal aspect-square flex items-center justify-center">
            <div className="text-center p-8">
              <svg width="80" height="80" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
                <circle cx="22" cy="22" r="22" fill="white" />
                <path d="M8 16 Q22 10 36 16" stroke="#D62B2B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <path d="M8 28 Q22 34 36 28" stroke="#D62B2B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
              <span className="text-white font-black text-2xl tracking-wider uppercase">supellex</span>
              <p className="text-white/30 text-sm mt-2">Premium Bedroom Furniture</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Quality First', body: 'Every product is built to exacting standards using premium materials that stand the test of time.' },
            { num: '02', title: 'Design Led', body: 'Clean lines, considered finishes, and thoughtful details — furniture that elevates any bedroom.' },
            { num: '03', title: 'Customer Focused', body: 'From first click to delivery and beyond, we are committed to an exceptional experience.' },
          ].map(({ num, title, body }) => (
            <div key={num} className="p-8 bg-white border border-brand-light">
              <div className="text-5xl font-black text-brand-red/10 leading-none mb-4 select-none">{num}</div>
              <h3 className="font-black text-brand-black text-lg mb-3">{title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
