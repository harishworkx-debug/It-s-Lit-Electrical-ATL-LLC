import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Zap,
  ChevronRight,
  MapPin,
  Star,
  Quote,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import ServiceIcon from '@/components/ServiceIcon';
import CallButton from '@/components/CallButton';
import { BUSINESS, IMAGES, SERVICES, LOCATIONS, REVIEWS } from '@/data/siteData';
import { serviceSchema, breadcrumbSchema } from '@/data/schema';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = SERVICES.find((s) => `${s.slug}-${BUSINESS.mainLocation.toLowerCase()}` === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const path = `/${service.slug}-${BUSINESS.mainLocation.toLowerCase()}`;
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug);

  // Stable review selection based on service slug length
  const reviewIndex = service.slug.length % REVIEWS.length;
  const review = REVIEWS[reviewIndex];

  const schema = [
    ...serviceSchema(service, path),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path },
    ]),
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        image={service.image}
        imageAlt={service.imageAlt}
        schema={schema}
      />

      <PageHero
        title={service.h1}
        subtitle={service.tagline}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.name },
        ]}
      />

      {/* Intro + Call */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                  <ServiceIcon name={service.icon} className="w-4 h-4" />
                  {service.name}
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 leading-tight">
                  {service.intro.length > 120 ? 'Professional ' + service.name + ' in Atlanta' : service.tagline}
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  {service.intro}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <CallButton />
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-secondary-300 hover:border-primary-500 text-secondary-800 hover:text-primary-700 font-bold px-6 py-3 rounded-xl transition-all"
                  >
                    Request an Estimate
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="bg-secondary-950 rounded-2xl p-6 lg:sticky lg:top-28 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary-950" />
                  </div>
                  <div>
                    <div className="text-secondary-400 text-sm">Direct Phone Line</div>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-white font-bold text-lg hover:text-primary-400 transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <p className="text-secondary-400 text-sm leading-relaxed mb-5">
                  {service.calloutText}
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS.phone}
                </a>
                <div className="mt-4 pt-4 border-t border-secondary-800 flex items-center gap-2 text-xs text-secondary-400 justify-center">
                  <ShieldCheck className="w-4 h-4 text-primary-400" />
                  <span>Licensed & Insured Electrical Contractor</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {service.sections.map((section, i) => (
                <Reveal key={i}>
                  <div className="bg-white rounded-2xl p-8 border border-secondary-200/70 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 leading-tight">
                      {section.heading}
                    </h2>
                    <p className="text-secondary-600 mt-4 leading-relaxed text-lg">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}

              {/* Benefits */}
              <Reveal>
                <div className="bg-white rounded-2xl p-8 border border-secondary-200/70 shadow-sm">
                  <h2 className="text-2xl font-heading font-bold text-secondary-900">
                    What Is Included in Our {service.name} Service
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Process */}
              <Reveal>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-8">
                    How Our {service.name} Process Works
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.process.map((step, i) => (
                      <div key={i} className="relative">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200/70 h-full flex flex-col justify-between">
                          <div>
                            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center font-heading font-extrabold text-secondary-950 text-lg mb-3">
                              {i + 1}
                            </div>
                            <h3 className="font-bold text-secondary-900">{step.title}</h3>
                            <p className="text-secondary-500 text-sm mt-2 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        {i < service.process.length - 1 && (
                          <ChevronRight className="hidden lg:block w-6 h-6 text-primary-300 absolute top-1/2 -right-4 -translate-y-1/2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Cost Factors & Transparent Pricing */}
              <Reveal>
                <div className="bg-white rounded-2xl p-8 border border-secondary-200/70 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-secondary-900">
                      Understanding What Influences {service.name} Costs
                    </h2>
                  </div>
                  <p className="text-secondary-600 leading-relaxed">
                    Every property's electrical system has distinct layout, capacity, and equipment requirements. Rather than guessing, we evaluate your system and provide an upfront, transparent estimate before any work starts.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                      <div className="font-bold text-secondary-900 text-sm mb-1">System Accessibility</div>
                      <div className="text-xs text-secondary-600">Attic, crawlspace, or finished wall access determines labor and wiring routes.</div>
                    </div>
                    <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                      <div className="font-bold text-secondary-900 text-sm mb-1">Equipment & Capacity</div>
                      <div className="text-xs text-secondary-600">Amperage ratings, circuit breakers, and specialized hardware impact component costs.</div>
                    </div>
                    <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                      <div className="font-bold text-secondary-900 text-sm mb-1">Code & Permitting</div>
                      <div className="text-xs text-secondary-600">City inspection and utility coordination requirements vary by project scope.</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Customer Proof / Genuine Review */}
              <Reveal>
                <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200/70">
                  <div className="flex items-center gap-1 text-primary-500 mb-3">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-secondary-800 text-lg italic leading-relaxed mb-4">
                    "{review.text}"
                  </blockquote>
                  <div className="flex items-center justify-between pt-4 border-t border-primary-200/60">
                    <div>
                      <div className="font-bold text-secondary-900">{review.name}</div>
                      <div className="text-xs text-secondary-500">{review.location} • Verified Customer Review</div>
                    </div>
                    <Quote className="w-8 h-8 text-primary-300" />
                  </div>
                </div>
              </Reveal>

              {/* FAQs */}
              <Reveal>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-6">
                    {service.name} FAQs
                  </h2>
                  <FAQAccordion items={service.faqs} />
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Service Image */}
                <Reveal>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </Reveal>

                {/* Call Card */}
                <Reveal delay={50}>
                  <div className="bg-secondary-950 rounded-2xl p-6 text-center text-white">
                    <Zap className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                    <h3 className="text-white font-heading font-bold text-lg">
                      {service.calloutTitle}
                    </h3>
                    <p className="text-secondary-400 text-sm mt-2 leading-relaxed">
                      {service.calloutText}
                    </p>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Call {BUSINESS.phone}
                    </a>
                  </div>
                </Reveal>

                {/* Related Services */}
                <Reveal delay={100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4">
                      Other Electrical Services
                    </h3>
                    <ul className="space-y-2">
                      {relatedServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/${s.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                            className="flex items-center justify-between text-sm text-secondary-600 hover:text-primary-600 transition-colors group"
                          >
                            {s.name}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/services"
                      className="block mt-4 text-center text-primary-600 font-bold text-sm hover:text-primary-700"
                    >
                      View All Services
                    </Link>
                  </div>
                </Reveal>

                {/* Service Area Link */}
                <Reveal delay={150}>
                  <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                    <h3 className="font-bold text-secondary-900 text-center">
                      Serving Atlanta & Metro Area
                    </h3>
                    <p className="text-secondary-600 text-sm mt-2 text-center mb-4">
                      We provide {service.name.toLowerCase()} in Atlanta and
                      surrounding communities:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {LOCATIONS.map((loc) => (
                        <Link
                          key={loc.slug}
                          to={`/${loc.slug}`}
                          className="flex items-center gap-1.5 text-secondary-700 hover:text-primary-700 py-1 font-medium transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                          <span className="truncate">{loc.name}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/service-areas"
                      className="inline-flex items-center justify-center gap-1 mt-4 w-full text-primary-600 font-bold text-sm hover:text-primary-700 pt-2 border-t border-primary-200"
                    >
                      View All Service Areas
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Across Metro Atlanta */}
      <section className="py-16 lg:py-24 bg-white border-t border-secondary-100">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Local Service Areas
            </div>
            <h2 className="section-title">
              {service.name} in Metro Atlanta Communities
            </h2>
            <p className="section-subtitle mx-auto">
              Our electricians travel throughout the greater Atlanta area to provide expert {service.name.toLowerCase()}. Select your city below to get local service details:
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
                  <div className="text-xs text-secondary-500">Electrician in {loc.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Grid */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Related Electrical Services</h2>
            <p className="section-subtitle mx-auto">
              Explore our other residential electrical services available in
              Atlanta, Georgia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedServices.slice(0, 8).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={service.calloutTitle}
        text={service.calloutText}
        image={IMAGES.cta}
      />
    </>
  );
}
