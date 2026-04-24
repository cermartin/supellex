import { Mail, Clock, MapPin } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-black text-brand-black mb-8">We'd love to hear from you</h2>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'General Enquiries',
                  value: 'info@supellex.co.uk',
                  href: 'mailto:info@supellex.co.uk',
                },
                {
                  icon: Mail,
                  title: 'Orders & Shopping',
                  value: 'shop@supellex.co.uk',
                  href: 'mailto:shop@supellex.co.uk',
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
                      <a href={href} className="text-brand-black font-semibold hover:text-brand-red transition-colors">
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

          {/* Message form */}
          <div className="bg-white border border-brand-light p-8">
            <h3 className="font-black text-brand-black text-lg mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                window.location.href = `mailto:info@supellex.co.uk?subject=Enquiry from ${data.get('name')}&body=${data.get('message')}`;
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-brand-grey block mb-2">Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-brand-grey block mb-2">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-brand-grey block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-black tracking-widest uppercase text-sm py-4 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
