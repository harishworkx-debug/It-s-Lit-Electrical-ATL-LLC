import { Link } from 'react-router-dom';
import {
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Users,
  Award,
  Heart,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import CallButton from '@/components/CallButton';
import { BUSINESS, IMAGES, SERVICES, LOCATIONS } from '@/data/siteData';
import { localBusinessSchema, breadcrumbSchema } from '@/data/schema';

const VALUES = [
  {
    icon: Shield,
    title: 'Safety Above All',
    text: 'Every decision we make starts with safety. We follow NEC guidelines on every job, ensuring your home and family are protected.',
  },
  {
    icon: CheckCircle2,
    title: 'Honest Pricing',
    text: 'You get upfront pricing before any work begins. No surprise charges, no hidden fees — just fair, transparent quotes.',
  },
  {
    icon: Clock,
    title: 'Respect for Your Time',
    text: 'We show up when we say we will and work efficiently. Same-day service is available for urgent electrical issues.',
  },
  {
    icon: Heart,
    title: 'Treat Homes with Care',
    text: 'We protect your floors, clean up after our work, and leave your home as we found it — just with better wiring.',
  },
];

const STATS = [
  { value: '10+', label: 'Electrical Services' },
  { value: '10+', label: 'Metro Atlanta Areas Served' },
  { value: '7 Days', label: 'Service Availability' },
  { value: '100%', label: 'Code-Compliant Work' },
];

export default function About() {
  const schema = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
    ]),
  ];

  return (
    <>
      <SEO
        title="About Us | It's Lit Electrical ATL LLC — Atlanta Electrician"
        description="Learn about It's Lit Electrical ATL LLC, your trusted electrical contractor in Atlanta, Georgia. Professional residential electrical services with a commitment to safety and quality."
        path="/about"
        image={IMAGES.electricianPortrait}
        imageAlt="Professional electricians from It's Lit Electrical ATL LLC in Atlanta, Georgia"
        schema={schema}
      />

      <PageHero
        title="About It's Lit Electrical ATL LLC"
        subtitle="A trusted Atlanta electrical contractor dedicated to safe, reliable, and professional residential electrical service."
        image={IMAGES.electricianPortrait}
        imageAlt="Professional electricians working on electrical panels in Atlanta, Georgia"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={IMAGES.electricianGloves}
                  alt="Licensed electrician wearing safety gloves while working on a circuit breaker in Atlanta"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-500 rounded-2xl p-6 shadow-xl hidden md:block">
                  <Zap className="w-10 h-10 text-secondary-950" />
                  <div className="text-secondary-950 font-heading font-extrabold text-xl mt-2">
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
                  Our Story
                </div>
                <h2 className="section-title">
                  Atlanta's Local Electrical Contractor
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  {BUSINESS.name} is an Atlanta-based electrical contractor
                  serving homeowners throughout metro Atlanta. We founded this
                  company with a simple goal: to provide Atlanta homeowners
                  with electrical services that are safe, reliable, and fairly
                  priced — no gimmicks, no shortcuts, just quality work.
                </p>
                <p className="text-secondary-600 mt-4 leading-relaxed">
                  Atlanta is a city of diverse neighborhoods and diverse homes.
                  From the historic bungalows of Grant Park and Cabbagetown to
                  the new construction in West Midtown and Buckhead, each area
                  presents its own electrical characteristics and challenges.
                  We understand these differences because this is our home too.
                  Whether your home needs a careful rewiring that preserves its
                  historic character or a modern EV charger installation, we
                  have the skills and local knowledge to do it right.
                </p>
                <p className="text-secondary-600 mt-4 leading-relaxed">
                  We believe that a good electrician does more than fix wires —
                  we educate our customers, explain our work, and help you make
                  informed decisions about your home's electrical system. When
                  you call {BUSINESS.name}, you are not just hiring a
                  tradesperson. You are partnering with a team that cares about
                  your home as much as you do.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary-950">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-heading font-extrabold text-primary-500">
                    {stat.value}
                  </div>
                  <div className="text-secondary-400 mt-2 text-sm font-semibold">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Our Values
            </div>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle mx-auto">
              These principles guide every job we do, from the smallest repair
              to the most complex installation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex items-start gap-6">
                  <div className="w-14 h-14 bg-secondary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-secondary-900">
                      {value.title}
                    </h3>
                    <p className="text-secondary-600 mt-2 leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              What We Do
            </div>
            <h2 className="section-title">Our Electrical Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a full range of residential electrical services for
              Atlanta homeowners. Explore our services to learn more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                className="group flex flex-col items-center text-center bg-secondary-50 hover:bg-primary-50 rounded-xl p-6 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-secondary-950" />
                </div>
                <span className="font-bold text-secondary-900 group-hover:text-primary-700 transition-colors text-sm">
                  {s.name}
                </span>
              </Link>
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

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  Where We Work
                </div>
                <h2 className="section-title">
                  Serving Atlanta & Metro Area
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  Based in Atlanta, Georgia, we serve homeowners throughout the
                  surrounding metro area. We are familiar with the homes and
                  neighborhoods across the region, and we understand the common
                  electrical issues each area presents.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      to={`/${l.slug}`}
                      className="flex items-center gap-2 text-secondary-700 hover:text-primary-600 transition-colors text-sm"
                    >
                      <MapPin className="w-4 h-4 text-primary-500" />
                      {l.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 mt-6 text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  View All Service Areas
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.atlantaSkyline}
                  alt="Atlanta, Georgia skyline showing the city It's Lit Electrical ATL LLC serves"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Atlanta's Trusted Electrician?"
        text="Call It's Lit Electrical ATL LLC today for professional, reliable electrical service. We are here to help with all your home electrical needs."
        image={IMAGES.cta}
      />
    </>
  );
}
