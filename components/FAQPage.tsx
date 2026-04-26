import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Do you offer nationwide delivery?',
    a: 'Yes — we deliver across the UK. Delivery charges may vary for certain remote areas such as Scottish Highlands and Northern Ireland. Please contact us before ordering if you are unsure.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery takes 2–5 working days from the date your order is confirmed. For larger items such as wardrobes, a specialist courier will contact you to arrange a suitable delivery slot.',
  },
  {
    q: 'How do I place an order?',
    a: 'Simply browse our collection, select the product and colour you want, then click "Order Now" on the product page. This will open a pre-filled email to our team at info@supellex.co.uk. We\'ll confirm your order and arrange delivery within 24 hours.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We process payments via bank transfer and other secure methods. Our team will confirm payment details when they respond to your order email.',
  },
  {
    q: 'Can I return an item?',
    a: 'Yes. We offer a 30-day return policy from the date of delivery. Items must be in their original, unused condition and packaging. Please email us at info@supellex.co.uk with your order number to initiate a return.',
  },
  {
    q: 'What if my item arrives damaged?',
    a: 'If your item arrives damaged or faulty, please contact us within 48 hours of delivery at info@supellex.co.uk with photos of the damage. We will arrange a replacement or full refund at no cost to you.',
  },
  {
    q: 'Do your wardrobes come with assembly instructions?',
    a: 'Yes — all products include detailed assembly instructions. An assembly service is available on selected items. Please contact us to find out if this option is available for your chosen product.',
  },
  {
    q: 'Are your products available in different sizes?',
    a: 'Absolutely. Most of our wardrobes are available in 3 to 6 size options ranging from 120cm to 250cm wide. Full size details are listed on each individual product page.',
  },
  {
    q: 'Do you offer a warranty on products?',
    a: 'All Supellex products come with a manufacturer\'s warranty. If you experience any issues within the warranty period, please get in touch with our support team at support@supellex.co.uk.',
  },
  {
    q: 'How do I contact customer support?',
    a: 'You can reach us by email at support@supellex.co.uk for customer support queries, or info@supellex.co.uk for general enquiries. You can also message us directly on WhatsApp at +44 7391 858618.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-light last:border-b-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-bold text-brand-black text-sm md:text-base leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-brand-red transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-brand-grey text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="pt-24 min-h-screen bg-brand-offwhite">
      {/* Banner */}
      <div className="bg-brand-black py-20 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">FAQs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border border-brand-light divide-y-0 px-8">
          {FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-brand-black px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-lg mb-1">Still have a question?</h3>
            <p className="text-white/40 text-sm">Our team responds within 24 hours on business days.</p>
          </div>
          <a
            href="mailto:info@supellex.co.uk"
            className="flex-shrink-0 bg-brand-red hover:bg-brand-red-dark text-white font-black tracking-widest uppercase text-sm px-8 py-4 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
