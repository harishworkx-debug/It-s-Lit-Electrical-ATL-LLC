import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES, LOCATIONS, SERVICES } from '@/data/siteData';
import { breadcrumbSchema } from '@/data/schema';

export default function ServiceAreas() {
  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/service-areas' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Atlanta Electrical Service Areas | It's Lit Electrical ATL"
        description="It's Lit Electrical ATL LLC serves Atlanta, GA and the surrounding metro area including Sandy Springs, Marietta, Roswell, Smyrna, Kennesaw, Decatur & more. Call (470) 204-4987."
        path="/service-areas"
        image={IMAGES.atlantaSkyline}
        imageAlt="Atlanta, Georgia metro area served by It's Lit Electrical ATL LLC"
        schema={schema}
      />

      <PageHero
        title="Electrical Service Areas in Metro Atlanta"
        subtitle="Based in Atlanta, Georgia, we serve homeowners throughout the surrounding metro area. Find your city below to learn about electrical services in your area."
        image={IMAGES.atlantaSkyline}
        imageAlt="Aerial view of Atlanta, Georgia skyline at sunset"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Service Areas' },
        ]}
      />

      {/* Locations Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Where We Serve
            </div>
            <h2 className="section-title">Cities We Serve</h2>
            <p className="section-subtitle mx-auto">
              We serve homeowners in Atlanta and the following communities
              throughout metro Atlanta. Each location page highlights a primary
              service we offer in that area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {LOCATIONS.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  Our Service Area
                </div>
                <h2 className="section-title">
                  Proudly Serving Metro Atlanta
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  {BUSINESS.name} is based in Atlanta, Georgia, and we serve
                  homeowners throughout the surrounding metro area. From Sandy
                  Springs in the north to Powder Springs in the west, from
                  Decatur in the east to Austell in the south, we are your local
                  electrician.
                </p>
                <p className="text-secondary-600 mt-4 leading-relaxed">
                  Not sure if we cover your area? Give us a call at{' '}
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-primary-600 font-bold hover:text-primary-700"
                  >
                    {BUSINESS.phone}
                  </a>{' '}
                  and we will let you know. We are always expanding our service
                  area to serve more Atlanta homeowners.
                </p>
                <div className="mt-8">
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary-500/40 text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                <iframe
                  src={BUSINESS.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="It's Lit Electrical ATL LLC Service Area Map"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Available Across All Service Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Comprehensive Services
            </div>
            <h2 className="section-title">Electrical Services Available in All Our Areas</h2>
            <p className="section-subtitle mx-auto">
              No matter where you are located in metro Atlanta, we provide full electrical repair, panel upgrades, rewiring, lighting, and emergency services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                className="group flex items-center gap-3 bg-secondary-50 hover:bg-primary-50 p-4 rounded-xl border border-secondary-100 transition-all hover:shadow-sm"
              >
                <div className="w-9 h-9 bg-primary-100 group-hover:bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Zap className="w-5 h-5 text-primary-700 group-hover:text-secondary-950 transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-secondary-900 group-hover:text-primary-700 transition-colors text-sm">
                    {s.name}
                  </div>
                  <div className="text-xs text-secondary-500">Learn more</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              View Detailed Electrical Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your City? Call Us."
        text="We may still serve your area. Call It's Lit Electrical ATL LLC at (470) 204-4987 to find out if we can help with your electrical needs."
        image={IMAGES.atlantaNight}
      />
    </>
  );
}
