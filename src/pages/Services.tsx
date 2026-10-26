import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Phone, MapPin, Wrench, ShieldAlert, Sparkles, BatteryCharging } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import CallButton from '@/components/CallButton';
import { BUSINESS, IMAGES, SERVICES, LOCATIONS } from '@/data/siteData';
import { breadcrumbSchema } from '@/data/schema';

export default function Services() {
  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Electrical Services', path: '/services' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Electrical Services in Atlanta, GA | It's Lit Electrical"
        description="Looking for professional electrical services in Atlanta, Georgia? It's Lit Electrical ATL LLC provides electrical service solutions for homeowners and businesses within its confirmed service area."
        path="/services"
        image={IMAGES.electricalPanel}
        imageAlt="Electrical services offered by It's Lit Electrical ATL LLC in Atlanta, Georgia"
        schema={schema}
      />

      <PageHero
        title="Electrical Services for Atlanta Homes and Businesses"
        subtitle="Looking for professional electrical services in Atlanta, Georgia? It's Lit Electrical ATL LLC provides electrical service solutions for homeowners and businesses within its confirmed service area."
        image={IMAGES.electricalPanel}
        imageAlt="Circuit breaker panel with organized color-coded wiring in Atlanta"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Electrical Services' },
        ]}
      />

      {/* Intro & Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Zap className="w-4 h-4 text-primary-600" />
              Full Service Electrical Contractor
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary-950 mb-6">
              Residential and Commercial Electrical Services
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 leading-relaxed mb-6">
              Electrical issues can affect your property's safety, convenience, and daily operations. Whether you need help diagnosing a recurring electrical problem, planning an installation, or assessing an electrical panel, choosing a qualified electrician is an important first step.
            </p>
            <p className="text-base text-secondary-500 leading-relaxed max-w-2xl mx-auto">
              Explore our electrical services below to learn more about the work we offer, how the process works, and how to request assistance for your home or business.
            </p>
          </div>

          {/* All 12 Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Categories */}
      <section className="py-16 lg:py-24 bg-secondary-50 border-y border-secondary-100">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="section-title">Common Electrical Solutions We Provide</h2>
            <p className="section-subtitle mx-auto">
              From minor device repairs to major electrical infrastructure upgrades, our team helps assess your needs and explains the appropriate next steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Electrical Repair in Atlanta */}
            <Reveal>
              <div className="bg-white rounded-2xl p-8 border border-secondary-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-5">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
                    Electrical Repair in Atlanta
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    If an outlet stops working, a breaker repeatedly trips, or your lights flicker unexpectedly, the underlying cause should be assessed rather than repeatedly resetting equipment. Visit our electrical repair page to learn about our repair process and how to request service.
                  </p>
                </div>
                <Link
                  to="/electrical-repair-atlanta"
                  className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Explore Electrical Repair
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Electrical Panel Upgrades */}
            <Reveal delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-secondary-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-5">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
                    Electrical Panel Upgrades
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    Electrical panel upgrades may be worth considering when your existing equipment has capacity limitations, shows signs of deterioration, or needs to accommodate additional electrical loads. An electrician can assess the panel and explain the options appropriate for your property.
                  </p>
                </div>
                <Link
                  to="/electrical-panel-upgrade-atlanta"
                  className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Explore Panel Upgrades
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Lighting and Ceiling Fan Installation */}
            <Reveal delay={150}>
              <div className="bg-white rounded-2xl p-8 border border-secondary-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-5">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
                    Lighting and Ceiling Fan Installation
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    Planning new lighting or replacing a ceiling fan? Proper fixture support, wiring, and circuit compatibility are important considerations. Learn about our installation services and request information for your project.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/lighting-installation-atlanta"
                    className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Lighting Installation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-secondary-300">•</span>
                  <Link
                    to="/ceiling-fan-installation-atlanta"
                    className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Ceiling Fan Installation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* EV Charger Installation */}
            <Reveal delay={200}>
              <div className="bg-white rounded-2xl p-8 border border-secondary-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-5">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
                    EV Charger Installation
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    Home EV charging may require an assessment of your electrical panel, available circuit capacity, and the charger's installation requirements. Contact us to discuss your property and the installation options available.
                  </p>
                </div>
                <Link
                  to="/ev-charger-installation-atlanta"
                  className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Explore EV Charger Installation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service Areas We Cover */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Local Coverage
            </div>
            <h2 className="section-title">Electrical Service Across the Atlanta Area</h2>
            <p className="section-subtitle mx-auto">
              It's Lit Electrical ATL LLC serves Atlanta and the surrounding communities within its actual service coverage. Explore our service-area pages for information about availability in Sandy Springs, Marietta, Roswell, Smyrna, Kennesaw, Decatur, Mableton, Powder Springs, Austell, and Tucker.
            </p>
            <p className="text-sm text-secondary-500 mt-2">
              Service availability may vary by location and appointment schedule. Contact us to confirm coverage for your address.
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
                  <div className="text-xs text-secondary-500">View Services</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              View Full Service Areas Coverage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Request Electrical Service CTA */}
      <section className="relative bg-secondary-950 py-20 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src={IMAGES.cta}
            alt="Request Electrical Service with It's Lit Electrical ATL LLC"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-950/90 to-secondary-950/60" />
        </div>
        <div className="container-x relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-primary-400 mb-4">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
              Request Electrical Service
            </h2>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              Have an electrical repair or installation project in mind? Contact It's Lit Electrical ATL LLC to discuss your needs, confirm service availability, and learn about the next steps for arranging an appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton variant="large" />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary-600 hover:border-primary-500 text-white hover:text-primary-400 font-bold px-8 py-4 rounded-xl transition-all"
              >
                Request Service Online
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
