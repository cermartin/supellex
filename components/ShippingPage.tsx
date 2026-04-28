import { Truck, RotateCcw, Clock, Shield } from 'lucide-react';

function PolicySection({ label, heading, children }: { label: string; heading: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 border-b border-brand-light last:border-0">
      <div className="flex items-start gap-2 pt-0.5">
        <div className="w-5 h-px bg-brand-red mt-2 flex-shrink-0" />
        <span className="text-brand-red text-xs font-bold tracking-[0.22em] uppercase leading-snug">{label}</span>
      </div>
      <div>
        <h3 className="font-black text-brand-black text-base mb-2 leading-snug">{heading}</h3>
        <div className="text-brand-grey text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

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
            { icon: Truck,     title: 'Nationwide Delivery', body: 'Across the UK' },
            { icon: Clock,     title: '3–6 Working Days',    body: 'Standard delivery' },
            { icon: RotateCcw, title: '14-Day Cancellation', body: 'Consumer rights' },
            { icon: Shield,    title: 'Fully Insured',       body: 'Every shipment covered' },
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

        {/* Delivery section */}
        <div>
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-6 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Delivery Information</span>
          </div>
          <div className="bg-white border border-brand-light px-8">
            <PolicySection label="Delivery Timeframes" heading="When will my order arrive?">
              Standard delivery is typically completed within 3–6 working days from order confirmation. Delivery times may vary depending on product type, order volume, and delivery location. For larger items, you may be contacted directly to arrange a suitable delivery window.
            </PolicySection>
            <PolicySection label="Delivery Coverage" heading="Where do you deliver?">
              We deliver to most mainland UK locations. Deliveries to remote or extended areas — including parts of Scotland, Northern Ireland, and offshore locations — may be subject to additional charges or extended lead times. Please contact us before placing an order if you're unsure about your location.
            </PolicySection>
            <PolicySection label="Delivery Charges" heading="How is the cost calculated?">
              Delivery charges are calculated based on your delivery postcode and the size and weight of your order. All applicable costs are clearly displayed at checkout prior to payment.
            </PolicySection>
            <PolicySection label="Handling & Logistics" heading="How are large items transported?">
              Due to the size and weight of our products, deliveries are carried out by specialist furniture couriers to ensure safe handling and transportation. All items are dispatched with appropriate care to minimise the risk of damage in transit.
            </PolicySection>
            <PolicySection label="Failed Deliveries" heading="What if I'm not in?">
              If a delivery attempt is unsuccessful due to customer unavailability, re-delivery may incur an additional charge. Please ensure access and availability are suitable at the agreed delivery time.
            </PolicySection>
          </div>
        </div>

        {/* Returns section */}
        <div>
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-6 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Returns & Refunds</span>
          </div>
          <div className="bg-white border border-brand-light px-8">
            <PolicySection label="Right to Cancel" heading="14-day cancellation right">
              In accordance with the Consumer Contracts Regulations 2013, you have the right to cancel your order within 14 days of receipt. Following cancellation, you have an additional 14 days to return the item.
            </PolicySection>
            <PolicySection label="Heavy & Bulky Items" heading="Specialist collection applies">
              <p>Due to the nature of our product range, many items require specialist collection services. A collection fee applies, calculated based on your postcode, and reflects the cost of transporting large goods. Collection is arranged through our designated logistics partners.</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-brand-grey/80">
                <li>Items will be inspected at the point of collection to confirm return eligibility</li>
                <li>Items are transported to our warehouse for final verification</li>
                <li>Refunds are processed once inspection is complete, with the collection fee deducted</li>
              </ul>
            </PolicySection>
            <PolicySection label="Return Eligibility" heading="What condition must items be in?">
              To qualify for a return, items must be unused, in their original packaging, and in a resaleable condition. Failure to meet these criteria may result in the return being declined.
            </PolicySection>
            <PolicySection label="Damaged or Faulty" heading="Report within 48 hours">
              Report any damaged or faulty items within 48 hours of delivery, providing photographic evidence where possible. Following assessment, we will arrange either a replacement or a full refund — no additional charges apply in verified cases.
            </PolicySection>
            <PolicySection label="Non-Bulky Items" heading="Smaller items via standard courier">
              Returns for smaller items may be processed via standard courier. Please contact us before returning any item to confirm the correct procedure and any applicable costs.
            </PolicySection>
            <PolicySection label="Refund Process" heading="How and when are refunds issued?">
              Refunds are issued once the returned item has been received and inspected. All refunds are processed to the original payment method used at checkout.
            </PolicySection>
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
