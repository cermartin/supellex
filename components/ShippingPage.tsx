import { Truck, RotateCcw, Clock, Shield } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-24">
      {/* Banner */}
      <div className="bg-brand-black py-20 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Delivery & Returns</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Shipping &<br />
            <span className="text-brand-red">Returns</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">

        {/* Quick summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Truck,     title: 'Free Delivery', body: 'On all UK orders' },
            { icon: Clock,     title: '2–5 Days',       body: 'Standard delivery' },
            { icon: RotateCcw, title: '30-Day Returns', body: 'Hassle-free policy' },
            { icon: Shield,    title: 'Fully Insured',  body: 'Every shipment covered' },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white border border-brand-light p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center">
                <Icon size={22} className="text-brand-red" />
              </div>
              <div className="font-black text-brand-black">{title}</div>
              <div className="text-brand-grey text-sm">{body}</div>
            </div>
          ))}
        </div>

        {/* Shipping policy */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Shipping Policy</span>
          </div>
          <div className="bg-white border border-brand-light p-8 space-y-5 text-brand-grey text-sm leading-relaxed">
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">Delivery Areas</h3>
              <p>We currently deliver to all mainland UK addresses. Delivery to Scottish Highlands, Northern Ireland, and other remote areas may take additional time — please contact us for details.</p>
            </div>
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">Delivery Times</h3>
              <p>Standard delivery takes 2–5 working days from the date your order is confirmed. You will receive a tracking notification once your order has been dispatched.</p>
            </div>
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">Delivery Cost</h3>
              <p>We offer free standard delivery on all orders. No hidden charges.</p>
            </div>
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">Large Items</h3>
              <p>Wardrobes and larger furniture items are delivered via a specialist courier. You will be contacted to arrange a suitable delivery slot. An unpack and assembly service is available on selected items — please check the individual product listing for details.</p>
            </div>
          </div>
        </div>

        {/* Returns policy */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Returns Policy</span>
          </div>
          <div className="bg-white border border-brand-light p-8 space-y-5 text-brand-grey text-sm leading-relaxed">
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">30-Day Returns</h3>
              <p>We want you to love your Supellex furniture. If for any reason you are not completely satisfied, you may return your item within 30 days of delivery for a full refund.</p>
            </div>
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">Condition of Returns</h3>
              <p>Items must be returned in their original, unused condition and original packaging. We are unable to accept returns for items that have been assembled or show signs of use, unless the item is faulty.</p>
            </div>
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">Faulty or Damaged Items</h3>
              <p>If your item arrives damaged or faulty, please contact us within 48 hours of delivery at <a href="mailto:info@supellex.co.uk" className="text-brand-red hover:underline">info@supellex.co.uk</a> with photos of the damage. We will arrange a replacement or full refund at no cost to you.</p>
            </div>
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">How to Return</h3>
              <p>To initiate a return, email <a href="mailto:info@supellex.co.uk" className="text-brand-red hover:underline">info@supellex.co.uk</a> with your order number and reason for return. Our team will respond within 24 hours with return instructions.</p>
            </div>
            <div>
              <h3 className="font-black text-brand-black text-base mb-2">Refunds</h3>
              <p>Once your return is received and inspected, your refund will be processed within 5–10 working days to your original payment method.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-brand-charcoal p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-lg mb-1">Still have questions?</h3>
            <p className="text-white/40 text-sm">Our team is happy to help with any delivery or returns queries.</p>
          </div>
          <a
            href="mailto:info@supellex.co.uk"
            className="flex-shrink-0 bg-brand-red hover:bg-brand-red-dark text-white font-black tracking-widest uppercase text-sm px-8 py-4 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
