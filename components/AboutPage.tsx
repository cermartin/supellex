export default function AboutPage() {
  return (
    <main className="pt-28 min-h-screen bg-brand-offwhite">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">About Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-black leading-tight mb-6">
            Built for the<br />
            <span className="text-brand-red">modern home.</span>
          </h1>
          <p className="text-brand-grey text-lg leading-relaxed">
            Supellex was founded with one goal — to bring premium bedroom furniture to British homes at an honest price. We believe great design shouldn't come with a premium postcode.
          </p>
        </div>

        {/* Story grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Our Story</span>
            </div>
            <h2 className="font-serif text-3xl text-brand-black mb-5 leading-tight">
              Where quality meets design
            </h2>
            <p className="text-brand-grey leading-relaxed mb-4">
              We believe your bedroom should feel like a sanctuary. Every Supellex piece is carefully designed to combine smart storage with clean, contemporary aesthetics — furniture that works as hard as you do.
            </p>
            <p className="text-brand-grey leading-relaxed">
              From sliding wardrobes with integrated LED lighting to Hollywood vanity tables and space-saving bunk beds, every product in our range is built to last and designed to impress.
            </p>
          </div>

          {/* Brand statement block */}
          <div className="bg-brand-black text-white p-10">
            <div className="w-10 h-0.5 bg-brand-red mb-6" />
            <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-white/90 mb-6">
              "Our goal is simple — to be in every home, one family at a time."
            </blockquote>
            <p className="text-white/40 text-xs font-bold tracking-widest uppercase">
              Supellex — One Home At a Time…
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Quality First',
              body: 'Every product is built to exacting standards using premium materials that stand the test of time — no corners cut.',
            },
            {
              num: '02',
              title: 'Design Led',
              body: 'Clean lines, considered finishes, and thoughtful details — furniture that elevates any bedroom without overwhelming it.',
            },
            {
              num: '03',
              title: 'Customer Focused',
              body: 'From first click to delivery and beyond, we are committed to making every part of your experience effortless.',
            },
          ].map(({ num, title, body }) => (
            <div key={num} className="group p-8 bg-white border border-brand-light hover:border-brand-red/40 transition-colors">
              <div className="text-5xl font-black text-brand-black/5 group-hover:text-brand-red/10 transition-colors mb-4 leading-none select-none">{num}</div>
              <h3 className="font-black text-brand-black text-base mb-3 leading-snug">{title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
