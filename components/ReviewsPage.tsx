const REVIEWS = [
  {
    id: 1,
    name: 'Sarah M.',
    product: 'Sliding Wardrobe with LED & Drawers',
    date: '12 Mar 2025',
    body: 'Absolutely stunning wardrobe. The LED lighting inside makes such a difference — feels so premium. Delivery was smooth and the packaging was excellent. Would highly recommend Supellex to anyone.',
  },
  {
    id: 2,
    name: 'James T.',
    product: 'Modern Sliding Door Wardrobe with Mirror & LED Light',
    date: '28 Feb 2025',
    body: 'Best Seller for a reason. The mirror doors make the room look twice the size. Very solid build quality, no wobbling or cheap feeling at all. Great value for the price.',
  },
  {
    id: 3,
    name: 'Priya K.',
    product: 'Vanity Dressing Table with LED Lighted Mirror',
    date: '14 Jan 2025',
    body: 'Exactly what I was looking for. The Hollywood mirror lighting is perfect for makeup. Drawers are smooth and spacious. Really happy with the purchase — delivery was faster than expected too.',
  },
  {
    id: 4,
    name: 'Daniel R.',
    product: 'Bunk Bed for Kids',
    date: '5 Dec 2024',
    body: 'Really well made bunk bed. The kids love it. Safety rails are solid and the ladder is secure. Assembly took about 2 hours but instructions were clear. Would buy again.',
  },
  {
    id: 5,
    name: 'Emma L.',
    product: 'Sliding Wardrobe with Mirror Doors',
    date: '19 Nov 2024',
    body: 'Completely transformed my bedroom. The finish is immaculate and the sliding mechanism is buttery smooth. Customer service was really helpful when I had a query. Five stars without hesitation.',
  },
];

export default function ReviewsPage() {
  return (
    <main className="pt-24 min-h-screen bg-brand-offwhite">
      {/* Banner */}
      <div className="bg-brand-black py-20 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Customer Reviews</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            What Our <span className="text-brand-red">Customers</span> Say
          </h1>
          <p className="text-white/50 text-sm">{REVIEWS.length} verified reviews</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {REVIEWS.map((r) => (
            <div key={r.id} className="bg-white border border-brand-light p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-black text-brand-black">{r.name}</p>
                  <p className="text-brand-red text-xs font-bold tracking-wide mt-0.5">{r.product}</p>
                </div>
                <span className="text-brand-grey text-xs flex-shrink-0">{r.date}</span>
              </div>
              <p className="text-brand-grey text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
