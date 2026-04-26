import { Mail, Clock, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-24">
      {/* Banner */}
      <div className="bg-brand-black py-20 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Contact <span className="text-brand-red">Us</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-black text-brand-black mb-10">We'd love to hear from you</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              icon: Mail,
              title: 'General Enquiries',
              value: 'info@supellex.co.uk',
              href: 'mailto:info@supellex.co.uk',
            },
            {
              icon: Mail,
              title: 'Customer Support',
              value: 'support@supellex.co.uk',
              href: 'mailto:support@supellex.co.uk',
            },
            {
              icon: Phone,
              title: 'WhatsApp',
              value: '+44 7391 858618',
              href: 'https://wa.me/447391858618',
            },
            {
              icon: Clock,
              title: 'Response Time',
              value: 'Within 24 hours on business days',
              href: null,
            },
            {
              icon: MapPin,
              title: 'Based In',
              value: 'United Kingdom',
              href: null,
            },
          ].map(({ icon: Icon, title, value, href }) => (
            <div key={title} className="flex items-start gap-4 p-5 bg-white border border-brand-light">
              <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-brand-red" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-brand-grey mb-1">{title}</div>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-brand-black font-semibold hover:text-brand-red transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-brand-black font-semibold">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
