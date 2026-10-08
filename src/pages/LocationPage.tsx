import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Zap,
  ChevronRight,
} from 'lucide-react';
import * as Icons from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import LocationCard from '@/components/LocationCard';
import { BUSINESS, IMAGES, SERVICES, LOCATIONS, LocationData, REVIEWS } from '@/data/siteData';
import { locationSchema, breadcrumbSchema } from '@/data/schema';

export default function LocationPage() {
  const params = useParams();
  const slug = params.slug as string;

  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/service-areas" replace />;
  }

  const path = `/${location.slug}`;
  const primaryService = SERVICES.find((s) => s.slug === location.primaryService);
  const Icon = primaryService ? ((Icons as any)[primaryService.icon] || Icons.Zap) : Icons.Zap;
  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 5);

  const schema = [
    ...locationSchema(location, path),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/service-areas' },
      { name: location.name, path },
    ]),
  ];

  // Pick a stable review based on location slug
  const reviewIndex = location.slug.length % REVIEWS.length;
  const review = REVIEWS[reviewIndex];

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        path={path}
        image={location.image}
        imageAlt={location.imageAlt}
        schema={schema}
      />

      <PageHero
        title={location.h1}
        subtitle={location.blurb}
        image={location.image}
        imageAlt={location.imageAlt}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Service Areas', path: '/service-areas' },
          { label: location.name },
        ]}
      />

      {/* Intro + Call */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                  <Icon className="w-4 h-4" />
                  {primaryService?.name} in {location.name}
                </div>
                <p className="text-secondary-600 mt-4 leading-relaxed text-lg">
                  {location.intro}
                </p>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="bg-secondary-950 rounded-2xl p-6 lg:sticky lg:top-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary-950" />
                  </div>
                  <div>
                    <div className="text-secondary-400 text-sm">Call Now</div>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-white font-bold text-lg hover:text-primary-400 transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <p className="text-secondary-400 text-sm leading-relaxed mb-4">
                  {location.calloutText}
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS.phone}
                </a>
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
              {location.sections.map((section, i) => (
                <Reveal key={i}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 leading-tight">
                      {section.heading}
                    </h2>
                    <p className="text-secondary-600 mt-4 leading-relaxed text-lg">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}

              {/* Primary Service CTA */}
              {primaryService && (
                <Reveal>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-500">
                    <h2 className="text-2xl font-heading font-bold text-secondary-900">
                      {primaryService.name} in {location.name}
                    </h2>
                    <p className="text-secondary-600 mt-4 leading-relaxed">
                      {primaryService.tagline}. {primaryService.calloutText}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
                      <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Call {BUSINESS.phone}
                      </a>
                      <Link
                        to={`/${primaryService.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                        className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
                      >
                        Learn About {primaryService.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Comprehensive Services in Location */}
              <Reveal>
                <div className="mt-12 mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-6">
                    Comprehensive Electrical Services in {location.name}
                  </h2>
                  <p className="text-secondary-600 mb-8 leading-relaxed text-lg">
                    Whether you have an emergency electrical issue or are planning a modern home upgrade, we offer a full range of residential electrical services tailored to {location.name} homes. Explore our services below or{' '}
                    <Link to="/contact" className="text-primary-600 font-bold hover:underline">contact us today</Link>.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {SERVICES.map((service, index) => {
                      const ServiceIcon = (Icons as any)[service.icon] || Icons.Zap;
                      return (
                        <Link 
                          key={index}
                          to={`/${service.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-secondary-100 flex gap-4 items-start group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-secondary-950 transition-colors">
                            <ServiceIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-secondary-500 text-sm line-clamp-2">
                              {service.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              {/* Customer Testimonials & Reviews */}
              <Reveal>
                <div className="mb-12 bg-secondary-900 rounded-3xl p-8 lg:p-10 text-white">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                    Top-Rated by Our Neighbors
                  </h2>
                  <p className="text-secondary-300 mb-8 leading-relaxed">
                    Our commitment to safety and quality has earned us the trust of homeowners throughout {location.name} and the greater {BUSINESS.mainLocation} area.
                  </p>
                  
                  <div className="bg-secondary-800 p-6 sm:p-8 rounded-2xl border border-secondary-700">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icons.Star
                          key={star}
                          className="w-5 h-5 fill-primary-500 text-primary-500"
                        />
                      ))}
                    </div>
                    <p className="text-secondary-200 italic mb-6 text-lg">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold text-secondary-950">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white">{review.name}</div>
                        <div className="text-secondary-400 text-sm">
                          {review.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* FAQs */}
              <Reveal>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-6">
                    Electrician in {location.name} — FAQs
                  </h2>
                  <FAQAccordion items={location.faqs} />
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Location Image */}
                <Reveal>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={location.image}
                      alt={location.imageAlt}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </Reveal>

                {/* Call Card */}
                <Reveal delay={50}>
                  <div className="bg-secondary-950 rounded-2xl p-6 text-center">
                    <MapPin className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                    <h3 className="text-white font-heading font-bold text-lg">
                      {location.calloutTitle}
                    </h3>
                    <p className="text-secondary-400 text-sm mt-2 leading-relaxed">
                      {location.calloutText}
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

                {/* Other Service Areas */}
                <Reveal delay={100}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-secondary-900 mb-4">
                      Other Service Areas
                    </h3>
                    <ul className="space-y-2">
                      {otherLocations.map((l) => (
                        <li key={l.slug}>
                          <Link
                            to={`/${l.slug}`}
                            className="flex items-center justify-between text-sm text-secondary-600 hover:text-primary-600 transition-colors group"
                          >
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary-500" />
                              {l.name}
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/service-areas"
                      className="block mt-4 text-center text-primary-600 font-bold text-sm hover:text-primary-700"
                    >
                      View All Service Areas
                    </Link>
                  </div>
                </Reveal>

                {/* Services Link */}
                <Reveal delay={150}>
                  <div className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                    <Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <h3 className="font-bold text-secondary-900">
                      Full Electrical Services
                    </h3>
                    <p className="text-secondary-600 text-sm mt-2">
                      We offer 10 specialized electrical services in Atlanta and
                      the surrounding area.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 mt-3 text-primary-600 font-bold text-sm hover:text-primary-700"
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Other Service Areas Near Atlanta</h2>
            <p className="section-subtitle mx-auto">
              We serve homeowners throughout metro Atlanta. Click a city below to
              learn about electrical services in that area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {otherLocations.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={location.calloutTitle}
        text={location.calloutText}
        image={IMAGES.cta}
      />
    </>
  );
}
