export default function TermsPage() {
  return (
    <main className="pt-24 min-h-screen bg-brand-offwhite">
      {/* Banner */}
      <div className="bg-brand-black py-20 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Terms &<br /><span className="text-brand-red">Conditions</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border border-brand-light px-8 md:px-12 py-10 space-y-10 text-brand-grey text-sm leading-relaxed">

          {/* Shipping Policy */}
          <section>
            <h2 className="font-black text-brand-black text-xl mb-1">Shipping Policy</h2>
            <div className="w-8 h-0.5 bg-brand-red mb-6" />

            <div className="space-y-6">
              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Delivery Information</h3>
                <p>We offer nationwide delivery across the United Kingdom, using established third-party logistics partners who specialise in the transportation of large and heavy furniture.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Delivery Timeframes</h3>
                <p>Standard delivery is typically completed within 3–6 working days from order confirmation.</p>
                <p className="mt-2">Delivery times may vary depending on product type, order volume, and delivery location. For larger items, customers may be contacted directly to arrange a suitable delivery window.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Delivery Coverage</h3>
                <p>We deliver to most mainland UK locations.</p>
                <p className="mt-2">Deliveries to remote or extended areas (including parts of Scotland, Northern Ireland, and offshore locations) may be subject to additional charges or extended lead times. Customers are advised to contact us prior to placing an order to confirm availability where necessary.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Handling & Logistics</h3>
                <p>Due to the size and weight of many of our products, deliveries are carried out by specialist furniture couriers to ensure safe handling and transportation.</p>
                <p className="mt-2">All items are dispatched with appropriate care to minimise the risk of damage in transit.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Delivery Charges</h3>
                <p>Delivery charges are calculated based on:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Delivery postcode</li>
                  <li>Size and weight of the order</li>
                </ul>
                <p className="mt-2">All applicable delivery costs are clearly displayed at checkout prior to payment.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Failed Delivery Attempts</h3>
                <p>If a delivery attempt is unsuccessful due to customer unavailability, re-delivery may incur an additional charge.</p>
                <p className="mt-2">Customers are responsible for ensuring that access and availability are suitable at the agreed delivery time.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Customer Support</h3>
                <p>For any delivery-related enquiries, customers are encouraged to contact our support team prior to or following their purchase.</p>
              </div>
            </div>
          </section>

          <div className="border-t border-brand-light" />

          {/* Returns & Refunds Policy */}
          <section>
            <h2 className="font-black text-brand-black text-xl mb-1">Returns & Refunds Policy</h2>
            <div className="w-8 h-0.5 bg-brand-red mb-6" />

            <div className="space-y-6">
              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Returns Overview</h3>
                <p>We are committed to providing a clear and structured returns process. Customers are advised to review the following terms prior to initiating a return.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Right to Cancel (UK Customers)</h3>
                <p>In accordance with the Consumer Contracts Regulations 2013, customers have the right to cancel their order within 14 days of receipt.</p>
                <p className="mt-2">Following cancellation, customers have an additional 14 days to return the item.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Heavy & Bulky Items</h3>
                <p>Due to the nature of our product range, many items require specialist collection services.</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>A collection fee applies, calculated based on the customer's postcode</li>
                  <li>This fee reflects the cost of transportation and handling of large goods</li>
                  <li>Collection will be arranged through our designated logistics partners</li>
                </ul>
                <p className="mt-3">At the point of collection:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Items will be inspected to confirm eligibility for return</li>
                  <li>Items will be transported back to our warehouse for final verification</li>
                </ul>
                <p className="mt-3">Upon successful inspection, refunds will be processed with the applicable collection fee deducted.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Return Eligibility Criteria</h3>
                <p>To qualify for a return, items must:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Be unused</li>
                  <li>Be in their original packaging</li>
                  <li>Be in a resaleable condition</li>
                </ul>
                <p className="mt-2">Failure to meet these criteria may result in the return being declined.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Damaged or Faulty Goods</h3>
                <p>Customers must report any damaged or faulty items within 48 hours of delivery, providing photographic evidence where applicable.</p>
                <p className="mt-2">Following assessment, we will arrange either:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>A replacement item, or</li>
                  <li>A full refund</li>
                </ul>
                <p className="mt-2">No additional charges will apply in cases of verified damage or fault.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Non-Bulky Items</h3>
                <p>Returns for smaller items may be processed via standard courier services.</p>
                <p className="mt-2">Customers must contact us prior to returning any item to ensure correct procedures are followed and to confirm any applicable return costs.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Refund Process</h3>
                <p>Refunds will be issued once:</p>
                <ol className="mt-2 space-y-1 list-decimal list-inside">
                  <li>The returned item has been received</li>
                  <li>The item has been inspected and approved</li>
                </ol>
                <p className="mt-2">Refunds are processed to the original payment method used at checkout.</p>
              </div>

              <div>
                <h3 className="font-black text-brand-black text-base mb-2">Customer Support</h3>
                <p>For all returns enquiries, customers should contact our support team with their order details for further assistance.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
