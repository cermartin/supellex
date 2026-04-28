import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    category: 'Delivery',
    items: [
      {
        q: 'Do you offer nationwide delivery?',
        a: 'Yes, we provide nationwide delivery across the United Kingdom through established third-party courier partners who specialise in the transportation of large and heavy furniture. Delivery is available to most mainland UK locations, and a delivery coverage map is provided for clarity and transparency. Customers who are unsure about delivery availability to their location are advised to contact our team prior to placing an order for confirmation.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Delivery is typically completed within 3–6 working days from the point of order confirmation. For larger items, such as wardrobes, our delivery partners may contact customers directly to arrange a suitable delivery window.',
      },
    ],
  },
  {
    category: 'Orders & Payment',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Orders can be placed directly through our website by selecting the desired product and completing the purchase via our secure online checkout system. An order confirmation will be issued upon completion, and processing will commence immediately.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We currently accept debit card payments, Apple Pay, Google Pay, and PayPal. We are also in the process of introducing Klarna and Clearpay, which will provide customers with additional flexible payment options.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    items: [
      {
        q: 'Can I return an item?',
        a: 'Yes, we offer a 30-day return period from the date of delivery. To be eligible for a return, items must be: unused, in their original condition (in a condition to be resold), and returned in original packaging. Customers must contact us to initiate the return process, and further instructions will be provided accordingly.',
      },
      {
        q: 'What if my item arrives damaged?',
        a: 'In the event that an item arrives damaged or faulty, customers must notify us within 48 hours of delivery, providing photographic evidence of the issue. Upon assessment, we will arrange either a replacement or a full refund, depending on the circumstances.',
      },
    ],
  },
  {
    category: 'Products',
    items: [
      {
        q: 'Do your wardrobes come with assembly instructions?',
        a: 'Yes, all products are supplied with clear and comprehensive assembly instructions. We also offer access to an approved third-party fitting service in selected areas. Customers are advised to enquire in advance to confirm availability.',
      },
      {
        q: 'Are your products available in different sizes?',
        a: 'Yes, many of our wardrobes are available in a range of sizes, typically from 100cm to 250cm in width depending on model. Detailed dimensions and specifications are provided on each product page to assist customers in selecting the most suitable option.',
      },
      {
        q: 'Do you offer a warranty on your products?',
        a: 'Our products do not include a standard warranty; however, customers have the option to purchase an extended warranty for additional protection. For further details, customers are encouraged to contact our team.',
      },
    ],
  },
  {
    category: 'Contact & Support',
    items: [
      {
        q: 'How do I contact customer support?',
        a: 'Our customer support team is available to assist with all enquiries before and after purchase.\n\nCustomer Support: support@supellex.co.uk\nGeneral Enquiries: info@supellex.co.uk\nWhatsApp: +44 7391 858618',
      },
    ],
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
        <p className="pb-5 text-brand-grey text-sm leading-relaxed whitespace-pre-line">{a}</p>
      )}
    </div>
  );
}

interface Props {
  onNavClick?: (href: string) => void;
}

export default function FAQPage({ onNavClick }: Props) {
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

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        {FAQS.map((section) => (
          <div key={section.category}>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-px bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">{section.category}</span>
            </div>
            <div className="bg-white border border-brand-light px-8">
              {section.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* T&C link */}
        <div className="bg-white border border-brand-light px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-brand-black text-sm mb-1">Looking for the full legal detail?</p>
            <p className="text-brand-grey text-sm">Our full Terms & Conditions cover delivery, returns, and your consumer rights in detail.</p>
          </div>
          <button
            onClick={() => onNavClick?.('terms')}
            className="flex-shrink-0 border border-brand-black text-brand-black font-bold tracking-widest uppercase text-xs px-6 py-3 hover:bg-brand-black hover:text-white transition-colors"
          >
            View Terms & Conditions
          </button>
        </div>

        {/* Contact CTA */}
        <div className="bg-brand-black px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
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
