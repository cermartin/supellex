import { useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  product: string;
  rating: number;
  date: string;
  body: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Sarah M.',
    product: 'Sliding Wardrobe with LED & Drawers',
    rating: 5,
    date: '12 Mar 2025',
    body: 'Absolutely stunning wardrobe. The LED lighting inside makes such a difference — feels so premium. Delivery was smooth and the packaging was excellent. Would highly recommend Supellex to anyone.',
  },
  {
    id: 2,
    name: 'James T.',
    product: 'Modern Sliding Door Wardrobe with Mirror & LED Light',
    rating: 5,
    date: '28 Feb 2025',
    body: 'Best Seller for a reason. The mirror doors make the room look twice the size. Very solid build quality, no wobbling or cheap feeling at all. Great value for the price.',
  },
  {
    id: 3,
    name: 'Priya K.',
    product: 'Vanity Dressing Table with LED Lighted Mirror',
    rating: 5,
    date: '14 Jan 2025',
    body: 'Exactly what I was looking for. The Hollywood mirror lighting is perfect for makeup. Drawers are smooth and spacious. Really happy with the purchase — delivery was faster than expected too.',
  },
  {
    id: 4,
    name: 'Daniel R.',
    product: 'Bunk Bed for Kids',
    rating: 4,
    date: '5 Dec 2024',
    body: 'Really well made bunk bed. The kids love it. Safety rails are solid and the ladder is secure. Assembly took about 2 hours but instructions were clear. Would buy again.',
  },
  {
    id: 5,
    name: 'Emma L.',
    product: 'Sliding Wardrobe with Mirror Doors',
    rating: 5,
    date: '19 Nov 2024',
    body: 'Completely transformed my bedroom. The finish is immaculate and the sliding mechanism is buttery smooth. Customer service was really helpful when I had a query. Five stars without hesitation.',
  },
];

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= count ? 'text-brand-red fill-brand-red' : 'text-brand-light fill-brand-light'}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [form, setForm] = useState({ name: '', product: '', rating: 5, body: '' });
  const [submitted, setSubmitted] = useState(false);

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.body.trim()) return;
    const newReview: Review = {
      id: Date.now(),
      name: form.name.trim(),
      product: form.product.trim() || 'Supellex Product',
      rating: form.rating,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      body: form.body.trim(),
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: '', product: '', rating: 5, body: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

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
          <div className="flex items-center gap-4">
            <Stars count={5} size={22} />
            <span className="text-white text-2xl font-black">{avg}</span>
            <span className="text-white/40 text-sm">from {reviews.length} reviews</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Reviews list */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-black text-brand-black mb-6">All Reviews</h2>
            {reviews.map((r) => (
              <div key={r.id} className="bg-white border border-brand-light p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="font-black text-brand-black">{r.name}</p>
                    <p className="text-brand-red text-xs font-bold tracking-wide mt-0.5">{r.product}</p>
                  </div>
                  <span className="text-brand-grey text-xs flex-shrink-0">{r.date}</span>
                </div>
                <Stars count={r.rating} />
                <p className="text-brand-grey text-sm leading-relaxed mt-3">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Leave a review */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-brand-light p-6 sticky top-28">
              <h2 className="text-lg font-black text-brand-black mb-5">Leave a Review</h2>

              {submitted && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
                  Thank you — your review has been added!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-brand-grey block mb-2">Your Name *</label>
                  <input
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    type="text"
                    placeholder="e.g. Sarah M."
                    className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-brand-grey block mb-2">Product</label>
                  <input
                    value={form.product}
                    onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                    type="text"
                    placeholder="Which product did you buy?"
                    className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-brand-grey block mb-2">Rating *</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, rating: n }))}
                        className="p-0.5"
                      >
                        <Star
                          size={24}
                          className={n <= form.rating ? 'text-brand-red fill-brand-red' : 'text-brand-light'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-brand-grey block mb-2">Your Review *</label>
                  <textarea
                    value={form.body}
                    onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
                    required
                    rows={5}
                    placeholder="Tell us about your experience…"
                    className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-black tracking-widest uppercase text-sm py-4 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
