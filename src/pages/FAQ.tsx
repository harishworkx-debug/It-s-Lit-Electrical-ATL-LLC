import { Link } from 'react-router-dom';
import { Phone, ArrowRight, HelpCircle, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES, GENERAL_FAQS, SERVICES, LOCATIONS } from '@/data/siteData';
import { faqSchema, breadcrumbSchema } from '@/data/schema';

export default function FAQ() {
  const schema = [
    faqSchema(GENERAL_FAQS),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Electrician FAQs | It's Lit Electrical ATL"
        description="Frequently asked questions about electrical services in Atlanta, GA. Get answers about pricing, service areas, panel upgrades, EV chargers, inspections & more. Call (470) 204-4987."
        path="/faq"
        image={IMAGES.tools}
        imageAlt="Electrical FAQ information from It's Lit Electrical ATL LLC in Atlanta"
        schema={schema}
      />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our electrical services, pricing, service areas, and more. Have a question we haven't answered? Call us at (470) 204-4987."
        image={IMAGES.tools}
        imageAlt="Professional electrical tools and multimeter used by It's Lit Electrical ATL LLC"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQ' },
        ]}
      />

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-12">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  <HelpCircle className="w-4 h-4" />
                  Questions
                </div>
                <h2 className="section-title">
                  Your Electrical Questions Answered
                </h2>
                <p className="text-secondary-600 mt-4 leading-relaxed">
                  We believe an informed customer makes the best decisions.
                  Here are answers to the questions we hear most often from
                  Atlanta homeowners. If you have a question that is not covered
                  here, do not hesitate to call us.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-flex items-center gap-2 mt-6 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-2">
              <FAQAccordion items={GENERAL_FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Service-Specific FAQs
            </div>
            <h2 className="section-title">
              Have a Question About a Specific Service?
            </h2>
            <p className="section-subtitle mx-auto">
              Each of our service pages includes its own set of FAQs tailored to
              that service. Click a service below to learn more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                className="group flex flex-col items-center text-center bg-white hover:bg-primary-50 rounded-xl p-6 transition-all hover:shadow-lg border border-secondary-100"
              >
                <HelpCircle className="w-10 h-10 text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-secondary-900 group-hover:text-primary-700 transition-colors text-sm">
                  {s.name} FAQs
                </span>
                <span className="inline-flex items-center gap-1 mt-2 text-primary-600 text-xs font-semibold group-hover:gap-2 transition-all">
                  View
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Coverage FAQs & Links */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Local Service Areas
            </div>
            <h2 className="section-title">Common Questions by City</h2>
            <p className="section-subtitle mx-auto">
              Looking for electrical service FAQs in a specific metro Atlanta community? Visit your city page for local emergency info, permit details, and answers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="group flex items-center gap-3 bg-secondary-50 hover:bg-primary-50 p-4 rounded-xl border border-secondary-100 transition-all hover:shadow-sm"
              >
                <div className="w-9 h-9 bg-primary-100 group-hover:bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin className="w-5 h-5 text-primary-700 group-hover:text-secondary-950 transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-secondary-900 group-hover:text-primary-700 transition-colors text-sm">
                    {loc.name}
                  </div>
                  <div className="text-xs text-secondary-500">{loc.name} FAQs</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        text="We are happy to answer any questions you have about your electrical needs. Call It's Lit Electrical ATL LLC at (470) 204-4987 and we will help you out."
        image={IMAGES.cta}
      />
    </>
  );
}
