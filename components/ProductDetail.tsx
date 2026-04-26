import { useState } from 'react';
import { ArrowLeft, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { CONTACT_EMAIL } from '../constants';

interface Props {
  product: Product;
  onBack: () => void;
}

function getDeliveryWindow() {
  const start = new Date();
  start.setDate(start.getDate() + 4);
  const end = new Date();
  end.setDate(end.getDate() + 7);
  const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  return `${fmt(start)} – ${fmt(end)}`;
}

export default function ProductDetail({ product, onBack }: Props) {
  const [activeVariant, setActiveVariant] = useState<ProductVariant | null>(
    product.variants?.[0] ?? null
  );

  const displayPrice = activeVariant?.price ?? product.price;
  const displayImage = activeVariant?.image ?? product.image;

  const orderSubject = `Order Enquiry — ${product.name}${activeVariant ? ` (${activeVariant.name})` : ''}`;
  const orderBody = `Hi, I'd like to order:\n\nProduct: ${product.name}\nColour: ${activeVariant?.name ?? 'N/A'}\nPrice: ${displayPrice}\n\nPlease let me know next steps. Thanks.`;

  return (
    <div className="min-h-screen bg-brand-offwhite pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-grey hover:text-brand-red text-sm font-semibold tracking-wide transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Collection
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — Images */}
          <div>
            <div className="aspect-[4/3] bg-brand-bg overflow-hidden mb-4 relative">
              <img
                src={displayImage}
                alt={product.name}
                className="w-full h-full object-cover animate-fadeIn"
                key={displayImage}
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold tracking-widest uppercase px-3 py-1">
                  {product.badge}
                </div>
              )}
            </div>

            {product.variants && product.variants.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVariant(v)}
                    className={`flex-shrink-0 w-20 h-16 overflow-hidden border-2 transition-colors ${
                      activeVariant?.id === v.id ? 'border-brand-red' : 'border-transparent hover:border-brand-red/50'
                    }`}
                  >
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Info */}
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-px bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-brand-black leading-tight mb-4">
              {product.name}
            </h1>

            <div className="text-4xl font-black text-brand-black mb-6">
              {displayPrice}
              <span className="text-sm font-normal text-brand-grey ml-2">incl. VAT</span>
            </div>

            {/* Colour variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <div className="text-xs font-bold tracking-widest uppercase text-brand-grey mb-3">
                  Colour — <span className="text-brand-black">{activeVariant?.name}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveVariant(v)}
                      title={v.name}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        activeVariant?.id === v.id
                          ? 'border-brand-red scale-110 shadow-md'
                          : 'border-transparent hover:border-brand-red/60'
                      }`}
                      style={{ backgroundColor: v.swatch }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Order button */}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(orderSubject)}&body=${encodeURIComponent(orderBody)}`}
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white font-black tracking-widest uppercase text-sm transition-colors mb-3"
            >
              <ShoppingBag size={18} />
              Order Now
            </a>
            <p className="text-center text-xs text-brand-grey mb-8">
              We'll confirm your order and arrange delivery within 24 hours.
            </p>

            {/* Product details */}
            <div className="mt-2 pt-6 border-t border-brand-light">
              <h2 className="text-sm font-black tracking-widest uppercase text-brand-black mb-3">
                Product Details
              </h2>
              <p className="text-brand-grey leading-relaxed text-sm">{product.details}</p>
            </div>

            {product.dimensions && (
              <div className="mt-4 pt-4 border-t border-brand-light">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-brand-black">Size Options</span>
                  <span className="text-brand-grey">{product.dimensions}</span>
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: 'Free UK Delivery', sub: getDeliveryWindow() },
                { icon: Shield, label: 'Secure Order', sub: 'Confirmed by email' },
                { icon: RotateCcw, label: 'Easy Returns', sub: '30-day policy' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5 p-3 bg-white border border-brand-light">
                  <Icon size={20} className="text-brand-red" />
                  <span className="text-xs font-bold text-brand-black">{label}</span>
                  <span className="text-xs text-brand-grey">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
