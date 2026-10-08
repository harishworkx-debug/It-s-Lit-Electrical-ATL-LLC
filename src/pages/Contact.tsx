import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import { BUSINESS, IMAGES } from '@/data/siteData';
import { breadcrumbSchema, localBusinessSchema } from '@/data/schema';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const schema = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact Us', path: '/contact' },
    ]),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us | It's Lit Electrical ATL LLC — Atlanta Electrician"
        description="Contact It's Lit Electrical ATL LLC for electrical service in Atlanta, GA. Call 404-397-7984 or send us a message. Serving Atlanta and the surrounding metro area."
        path="/contact"
        image={IMAGES.electricianPortrait}
        imageAlt="Contact It's Lit Electrical ATL LLC for electrical service in Atlanta, Georgia"
        schema={schema}
      />

      <PageHero
        title="Contact It's Lit Electrical ATL LLC"
        subtitle="Need an electrician in Atlanta? Call us now for fast, professional service. We are here to help with all your residential electrical needs."
        image={IMAGES.electricianPortrait}
        imageAlt="Professional electricians ready to help in Atlanta, Georgia"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  Get In Touch
                </div>
                <h2 className="section-title">Call or Message Us</h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  The fastest way to reach us is by phone. Call{' '}
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-primary-600 font-bold hover:text-primary-700"
                  >
                    {BUSINESS.phone}
                  </a>{' '}
                  to speak with us directly and schedule service. You can also
                  send a message using the form and we will get back to you
                  promptly.
                </p>

                <div className="space-y-4 mt-8">
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="flex items-center gap-4 bg-secondary-50 rounded-xl p-4 hover:bg-primary-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary-950" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-400">Call Us</div>
                      <div className="font-bold text-secondary-900 text-lg">
                        {BUSINESS.phone}
                      </div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="flex items-center gap-4 bg-secondary-50 rounded-xl p-4 hover:bg-primary-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-400">Email Us</div>
                      <div className="font-bold text-secondary-900">
                        {BUSINESS.email}
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 bg-secondary-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-400">Service Area</div>
                      <div className="font-bold text-secondary-900">
                        Atlanta, Georgia & Metro Area
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-secondary-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-400">Hours</div>
                      <div className="font-bold text-secondary-900 text-sm">
                        Open 24/7 (Emergency Service)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <CallButton variant="large" />
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={100}>
              <div className="bg-secondary-50 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-secondary-900">
                      Message Sent!
                    </h3>
                    <p className="text-secondary-600 mt-4">
                      Thank you for reaching out. We will get back to you as soon
                      as possible. For urgent needs, please call us at{' '}
                      <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        className="text-primary-600 font-bold"
                      >
                        {BUSINESS.phone}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-heading font-bold text-secondary-900">
                      Send Us a Message
                    </h3>
                    <p className="text-secondary-500 mt-2 text-sm">
                      Fill out the form below and we will get back to you
                      promptly. For urgent electrical issues, please call us
                      directly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                      <div>
                        <label className="block text-sm font-bold text-secondary-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-secondary-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-secondary-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-secondary-700 mb-1">
                          How Can We Help?
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                          placeholder="Describe your electrical needs..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-6 py-4 rounded-xl transition-all hover:shadow-lg text-lg"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 lg:pb-24 bg-white">
        <div className="container-x">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900">
              Find Us in Atlanta
            </h2>
            <p className="text-secondary-500 mt-2">
              Serving Atlanta, Georgia and the surrounding metro area.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={BUSINESS.mapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="It's Lit Electrical ATL LLC Location Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
