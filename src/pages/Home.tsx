import { Link } from 'react-router-dom';
import {
  Phone,
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Wrench,
  MapPin,
  Mail,
  Quote,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallButton from '@/components/CallButton';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import {
  BUSINESS,
  IMAGES,
  SERVICES,
  LOCATIONS,
  REVIEWS,
  GENERAL_FAQS,
} from '@/data/siteData';
import { localBusinessSchema, faqSchema } from '@/data/schema';

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: 'Safety First',
    text: 'Every job meets National Electrical Code and local requirements. We never cut corners on safety.',
  },
  {
    icon: Clock,
    title: 'Prompt Service',
    text: 'We respect your time. Same-day service for urgent issues and on-time arrivals for scheduled appointments.',
  },
  {
    icon: Zap,
    title: 'Expert Work',
    text: 'From simple repairs to whole-home rewiring, we have the skills and tools to do the job right the first time.',
  },
  {
    icon: CheckCircle2,
    title: 'Upfront Pricing',
    text: 'You know the cost before we start. No surprise charges, no hidden fees — just honest, fair pricing.',
  },
];

const RESIDENTIAL_SERVICES = [
  'Electrical panel upgrades',
  'Whole-home and partial rewiring',
  'Recessed and LED lighting installation',
  'Outlet and switch repair',
  'Ceiling fan installation',
  'EV charger installation',
  'GFCI and AFCI protection',
  'Electrical safety inspections',
];

export default function Home() {
  const schema = [localBusinessSchema(), faqSchema(GENERAL_FAQS.slice(0, 6))];

  return (
    <>
      <SEO
        title="It's Lit Electrical ATL LLC | Electrician in Atlanta, Georgia"
        description="It's Lit Electrical ATL LLC is your trusted electrician in Atlanta, Georgia. Expert residential electrical repairs, panel upgrades, wiring, lighting, EV chargers & more. Call 404-397-7984."
        path="/"
        image={IMAGES.hero}
        imageAlt={IMAGES.heroAlt}
        schema={schema}
      />

      {/* HERO */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-secondary-950">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt={IMAGES.heroAlt}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-950/85 to-secondary-950/30" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="container-x relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6 animate-fade-in-down">
              <Zap className="w-4 h-4 text-primary-500" />
              <span className="text-primary-400 font-semibold text-sm">
                Licensed & Insured Electrical Contractor
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight text-shadow-lg animate-fade-in-up">
              Electrician in Atlanta, Georgia
              <span className="block text-primary-500 mt-2">
                It's Lit Electrical ATL LLC
              </span>
            </h1>

            <p className="text-lg md:text-xl text-secondary-300 mt-6 max-w-2xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Professional residential electrical services for Atlanta
              homeowners. From panel upgrades to lighting installation, wiring,
              EV chargers, and emergency repairs — we keep your home safe and
              powered.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CallButton variant="large" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary-600 hover:border-primary-500 text-white hover:text-primary-400 font-bold px-8 py-4 rounded-xl transition-all"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-500 fill-primary-500" />
                  ))}
                </div>
                <span className="text-secondary-300 text-sm font-semibold">
                  Trusted by Atlanta Homeowners
                </span>
              </div>
              <div className="flex items-center gap-2 text-secondary-300">
                <Shield className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-300">
                <Clock className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-semibold">Same-Day Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={IMAGES.electricianPortrait}
                  alt="Professional electricians from It's Lit Electrical ATL LLC working on electrical panels in Atlanta"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-500 rounded-2xl p-6 shadow-xl hidden md:block">
                  <Zap className="w-10 h-10 text-secondary-950" />
                  <div className="text-secondary-950 font-heading font-extrabold text-2xl mt-2">
                    Atlanta's
                  </div>
                  <div className="text-secondary-900 font-semibold text-sm">
                    Trusted Electrician
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  About Us
                </div>
                <h2 className="section-title">
                  About It's Lit Electrical ATL LLC
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  {BUSINESS.name} is an Atlanta-based electrical contractor
                  dedicated to providing homeowners throughout metro Atlanta
                  with safe, reliable, and professional electrical services. We
                  handle everything from small repairs to major installations,
                  always with a commitment to quality work and honest service.
                </p>
                <p className="text-secondary-600 mt-4 leading-relaxed">
                  Atlanta is our home, and we understand the unique electrical
                  needs of the homes here — from historic properties in Grant
                  Park and Inman Park that need careful rewiring, to new
                  construction in West Midtown that demands the latest in smart
                  home and EV charging technology. Whatever your home needs, we
                  have the expertise to deliver.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {WHY_CHOOSE.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-bold text-secondary-900 text-sm">
                          {item.title}
                        </div>
                        <div className="text-secondary-500 text-xs mt-1">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-8 text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ELECTRICAL SERVICES */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="section-title">Electrical Services in Atlanta</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive residential electrical services for Atlanta
              homeowners. Whatever your electrical need, we have the expertise to
              handle it safely and professionally.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              View All Electrical Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  Why Choose Us
                </div>
                <h2 className="section-title">
                  Why Atlanta Homeowners Choose It's Lit Electrical
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  When you hire an electrician, you are trusting them with the
                  safety of your home and family. We take that responsibility
                  seriously. Here is what sets us apart.
                </p>
                <div className="space-y-4 mt-8">
                  {WHY_CHOOSE.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary-900 text-lg">
                          {item.title}
                        </h3>
                        <p className="text-secondary-500 mt-1">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative">
                <img
                  src={IMAGES.electricianGloves}
                  alt="Licensed electrician wearing safety gloves while working on a circuit breaker panel in Atlanta"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-success-500" />
                    <div>
                      <div className="font-heading font-extrabold text-secondary-900 text-lg">
                        Code-Compliant
                      </div>
                      <div className="text-secondary-500 text-xs">
                        Every job meets NEC standards
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL ELECTRICAL WORK */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={IMAGES.residentialKitchen}
                  alt="Modern Atlanta home kitchen with professional electrical wiring and lighting"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  Residential Electrical
                </div>
                <h2 className="section-title">
                  Residential Electrical Work in Atlanta
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  Your home's electrical system is its most critical
                  infrastructure. Whether you live in a historic bungalow in
                  Cabbagetown or a new build in Buckhead, we provide the full
                  range of residential electrical services to keep your home
                  safe, comfortable, and powered for modern life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {RESIDENTIAL_SERVICES.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/residential-electrician-${BUSINESS.mainLocation.toLowerCase()}`}
                  className="inline-flex items-center gap-2 mt-8 btn-primary"
                >
                  Residential Electrician Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ELECTRICAL REPAIRS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  Electrical Repairs
                </div>
                <h2 className="section-title">
                  Fast Electrical Repairs in Atlanta
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  Electrical problems do not wait for a convenient time. Whether
                  you have a breaker that keeps tripping, an outlet that stopped
                  working, or lights that flicker, we diagnose the problem and
                  repair it safely and correctly.
                </p>
                <div className="space-y-3 mt-6">
                  {[
                    'Breaker tripping and panel issues',
                    'Dead or sparking outlets',
                    'Flickering or dimming lights',
                    'GFCI and AFCI device failures',
                    'Switch repair and replacement',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-secondary-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/electrical-repair-${BUSINESS.mainLocation.toLowerCase()}`}
                  className="inline-flex items-center gap-2 mt-8 btn-primary"
                >
                  Electrical Repair Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative">
                <img
                  src={IMAGES.repairBoard}
                  alt="Electrician repairing electrical panel with multimeter in Atlanta, Georgia"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="py-16 lg:py-24 bg-secondary-950">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-400 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-primary-500/30">
              Project Gallery
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
              Our Electrical Work
            </h2>
            <p className="text-lg text-secondary-400 mt-4 max-w-2xl mx-auto">
              A selection of the types of electrical projects we handle for
              Atlanta homeowners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { img: IMAGES.electricalPanel, alt: 'Organized circuit breaker panel after upgrade in Atlanta', label: 'Panel Upgrade' },
              { img: IMAGES.wiring, alt: 'New electrical wiring installation in Atlanta home', label: 'Wiring Installation' },
              { img: IMAGES.lighting, alt: 'Modern lighting fixtures installed in Atlanta home', label: 'Lighting Installation' },
              { img: IMAGES.evCharger, alt: 'Home EV charging station installed in Atlanta', label: 'EV Charger' },
              { img: IMAGES.ceilingFan, alt: 'Ceiling fan installed by Atlanta electrician', label: 'Ceiling Fan' },
              { img: IMAGES.outlet, alt: 'Outlet and switch repair in Atlanta home', label: 'Outlet Repair' },
              { img: IMAGES.inspection, alt: 'Electrical safety inspection in Atlanta', label: 'Safety Inspection' },
              { img: IMAGES.troubleshooting, alt: 'Electrician troubleshooting electrical issues in Atlanta', label: 'Troubleshooting' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="group relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white font-bold text-sm bg-secondary-950/60 backdrop-blur-sm rounded-full px-3 py-1">
                      {item.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Service Areas
            </div>
            <h2 className="section-title">
              Electrical Services Across Metro Atlanta
            </h2>
            <p className="section-subtitle mx-auto">
              Based in Atlanta, Georgia, we serve homeowners throughout the
              surrounding metro area. Click your city to learn more about
              electrical services in your area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {LOCATIONS.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
          <div className="text-center mt-10">
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

      {/* CUSTOMER REVIEWS */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Reviews
            </div>
            <h2 className="section-title">Customer Reviews</h2>
            <p className="section-subtitle mx-auto">
              We are proud to serve Atlanta homeowners. Here is what some of our
              customers have to say.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 text-primary-500 fill-primary-500" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-secondary-200" />
                  </div>
                  <p className="text-secondary-600 leading-relaxed flex-1">
                    "{review.text}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-secondary-100">
                    <div className="font-bold text-secondary-900">{review.name}</div>
                    <div className="text-sm text-secondary-400">{review.location}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-12">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  FAQ
                </div>
                <h2 className="section-title">
                  Frequently Asked Questions
                </h2>
                <p className="text-secondary-600 mt-4 leading-relaxed">
                  Have questions about our electrical services? Here are answers
                  to some of the most common questions we hear from Atlanta
                  homeowners.
                </p>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 mt-6 text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  View All FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-2">
              <FAQAccordion items={GENERAL_FAQS.slice(0, 6)} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  Contact
                </div>
                <h2 className="section-title">
                  Contact It's Lit Electrical ATL LLC
                </h2>
                <p className="text-secondary-600 mt-4 leading-relaxed text-lg">
                  Need an electrician in Atlanta? Call us now or reach out to
                  schedule service. We are here to help with all your residential
                  electrical needs.
                </p>
                <div className="space-y-4 mt-8">
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary-950" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-400">Call Us</div>
                      <div className="font-bold text-secondary-900 text-lg">{BUSINESS.phone}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-400">Email Us</div>
                      <div className="font-bold text-secondary-900">{BUSINESS.email}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-400">Service Area</div>
                      <div className="font-bold text-secondary-900">
                        Atlanta, Georgia & Metro Area
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <CallButton variant="large" />
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

      {/* FINAL CTA */}
      <CTASection
        title="Need an Electrician in Atlanta Today?"
        text="From emergency repairs to panel upgrades and EV charger installation, It's Lit Electrical ATL LLC is ready to help. Call now for fast, professional service."
        image={IMAGES.cta}
      />
    </>
  );
}
