import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES, SERVICES } from '@/data/siteData';
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
        title="Electrical Services in Atlanta, GA | It's Lit Electrical ATL"
        description="Full range of residential electrical services in Atlanta, GA — panel upgrades, wiring, lighting, EV chargers, outlet repair, ceiling fans, troubleshooting & inspections. Call 404-397-7984."
        path="/services"
        image={IMAGES.electricalPanel}
        imageAlt="Electrical services offered by It's Lit Electrical ATL LLC in Atlanta, Georgia"
        schema={schema}
      />

      <PageHero
        title="Electrical Services in Atlanta, Georgia"
        subtitle="Comprehensive residential electrical services for Atlanta homeowners. From panel upgrades to EV chargers, we handle it all with safety and professionalism."
        image={IMAGES.electricalPanel}
        imageAlt="Circuit breaker panel with organized color-coded wiring in Atlanta"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Electrical Services' },
        ]}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              All Services
            </div>
            <h2 className="section-title">Our Electrical Services</h2>
            <p className="section-subtitle mx-auto">
              We offer ten specialized electrical services for Atlanta
              homeowners. Click any service below to learn more about how we can
              help with your specific need.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={IMAGES.toolsPanel}
                  alt="Professional electrical tools and multimeter used by It's Lit Electrical ATL LLC"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className="section-title">
                  One Electrician for All Your Home Needs
                </h2>
                <p className="text-secondary-600 mt-6 leading-relaxed text-lg">
                  Instead of calling a different contractor for every electrical
                  issue, {BUSINESS.name} is your single source for all
                  residential electrical work in Atlanta. We have the expertise,
                  tools, and experience to handle any electrical project, large
                  or small.
                </p>
                <div className="space-y-3 mt-6">
                  {[
                    'Electrical panel upgrades and replacements',
                    'Whole-home and partial rewiring',
                    'Lighting installation — indoor and outdoor',
                    'Outlet, switch, and GFCI repair',
                    'Ceiling fan installation',
                    'EV charger installation',
                    'Electrical troubleshooting and diagnostics',
                    'Safety inspections and code compliance',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-md flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-secondary-950" />
                      </div>
                      <span className="text-secondary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Which Service Do You Need?"
        text="Not sure which service fits your needs? Call us at 404-397-7984 and we will help you figure it out. We are happy to answer your questions."
        image={IMAGES.cta}
      />
    </>
  );
}
