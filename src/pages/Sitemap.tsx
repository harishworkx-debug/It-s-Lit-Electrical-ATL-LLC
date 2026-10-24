import { Link } from 'react-router-dom';
import { Zap, MapPin, FileText, ArrowRight, Shield, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import ServiceIcon from '@/components/ServiceIcon';
import { BUSINESS, IMAGES, SERVICES, LOCATIONS } from '@/data/siteData';
import { breadcrumbSchema } from '@/data/schema';

export default function Sitemap() {
  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Sitemap', path: '/sitemap' },
    ]),
  ];

  const mainPages = [
    { name: 'Home', path: '/', description: "Homepage of It's Lit Electrical ATL LLC — Licensed Atlanta Electrician." },
    { name: 'About Us', path: '/about', description: 'Our history, values, licensed electrical contractor credentials, and team.' },
    { name: 'Electrical Services', path: '/services', description: 'Overview of all residential and commercial electrical services in Atlanta.' },
    { name: 'Service Areas', path: '/service-areas', description: 'Communities served by our electricians across greater metro Atlanta.' },
    { name: 'Frequently Asked Questions', path: '/faq', description: 'Answers to common questions regarding pricing, emergency service, and permits.' },
    { name: 'Contact Us', path: '/contact', description: 'Direct phone, email, contact form, and service area location map.' },
  ];

  return (
    <>
      <SEO
        title="HTML Sitemap | It's Lit Electrical ATL LLC"
        description="Complete site index of all electrical services and service areas for It's Lit Electrical ATL LLC in Atlanta, Georgia. Find any page quickly."
        path="/sitemap"
        image={IMAGES.tools}
        imageAlt="Site directory and page index for It's Lit Electrical ATL LLC"
        schema={schema}
      />

      <PageHero
        title="Website Sitemap"
        subtitle="Explore all pages, electrical service guides, and local metro Atlanta community pages offered by It's Lit Electrical ATL LLC."
        image={IMAGES.tools}
        imageAlt="Electrician tools and sitemap navigation in Atlanta"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Sitemap' },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x space-y-16">
          {/* Main Pages */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-secondary-200">
                <FileText className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900">
                  Main Pages
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="p-6 rounded-2xl bg-secondary-50 hover:bg-primary-50 border border-secondary-100 transition-all hover:shadow-md group block"
                  >
                    <div className="font-bold text-lg text-secondary-900 group-hover:text-primary-700 transition-colors flex items-center justify-between">
                      {page.name}
                      <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm text-secondary-600 mt-2 leading-relaxed">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Electrical Services */}
          <Reveal delay={100}>
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-secondary-200">
                <Zap className="w-6 h-6 text-primary-500" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900">
                    Electrical Services in Atlanta
                  </h2>
                  <p className="text-sm text-secondary-500 mt-1">
                    All 12 specialized residential and commercial electrical services
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                    className="p-6 rounded-2xl bg-secondary-50 hover:bg-primary-50 border border-secondary-100 transition-all hover:shadow-md group block"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center text-primary-700 group-hover:text-secondary-950 mb-3 transition-colors">
                      <ServiceIcon name={service.icon} className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-base text-secondary-900 group-hover:text-primary-700 transition-colors">
                      {service.name}
                    </div>
                    <p className="text-xs text-secondary-500 mt-2 line-clamp-2 leading-relaxed">
                      {service.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-primary-600 group-hover:gap-2 transition-all">
                      View Service Details
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Service Areas */}
          <Reveal delay={150}>
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-secondary-200">
                <MapPin className="w-6 h-6 text-primary-500" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900">
                    Metro Atlanta Service Areas
                  </h2>
                  <p className="text-sm text-secondary-500 mt-1">
                    Local electrician service pages for all 10 metro cities
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/${loc.slug}`}
                    className="p-5 rounded-2xl bg-secondary-50 hover:bg-primary-50 border border-secondary-100 transition-all hover:shadow-md group block"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center text-primary-700 group-hover:text-secondary-950 mb-3 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-base text-secondary-900 group-hover:text-primary-700 transition-colors">
                      {loc.name}
                    </div>
                    <div className="text-xs text-secondary-500 mt-1">
                      Electrician in {loc.name}, GA
                    </div>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary-600 group-hover:gap-2 transition-all">
                      City Coverage
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Need an Electrician in Metro Atlanta?"
        text="Call It's Lit Electrical ATL LLC today at (470) 204-4987 for fast, professional service across any of our coverage areas."
        image={IMAGES.cta}
      />
    </>
  );
}
