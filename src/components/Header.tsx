import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Zap } from 'lucide-react';
import { BUSINESS, SERVICES, LOCATIONS } from '@/data/siteData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path ? 'text-primary-400' : 'text-white hover:text-primary-400';

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary-950 text-secondary-300 text-sm py-2 hidden md:block">
        <div className="container-x flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="font-semibold">
              Licensed & Insured Electrical Contractor in Atlanta, GA
            </span>
          </div>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 font-semibold text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-secondary-950/95 backdrop-blur-md shadow-lg'
            : 'bg-secondary-950'
        }`}
      >
        <nav className="container-x">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-secondary-950" />
                </div>
                <div className="absolute inset-0 bg-primary-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <div className="leading-none">
                <div className="font-heading font-extrabold text-white text-lg lg:text-xl">
                  It's Lit Electrical
                </div>
                <div className="text-primary-500 text-xs font-semibold tracking-wide">
                  ATL LLC
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className={`px-3 py-2 font-semibold transition-colors ${isActive('/')}`}>
                Home
              </Link>
              <Link to="/about" className={`px-3 py-2 font-semibold transition-colors ${isActive('/about')}`}>
                About
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 font-semibold text-white hover:text-primary-400 transition-colors">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-secondary-100 overflow-hidden">
                      <Link
                        to="/services"
                        className="block px-4 py-3 font-bold text-secondary-900 hover:bg-primary-50 hover:text-primary-700 border-b border-secondary-100 transition-colors"
                      >
                        All Electrical Services
                      </Link>
                      <div className="max-h-96 overflow-y-auto">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/${s.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                            className="block px-4 py-2.5 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 font-semibold text-white hover:text-primary-400 transition-colors">
                  Service Areas
                  <ChevronDown className="w-4 h-4" />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-secondary-100 overflow-hidden">
                      <Link
                        to="/service-areas"
                        className="block px-4 py-3 font-bold text-secondary-900 hover:bg-primary-50 hover:text-primary-700 border-b border-secondary-100 transition-colors"
                      >
                        All Service Areas
                      </Link>
                      <div className="max-h-96 overflow-y-auto">
                        {LOCATIONS.map((l) => (
                          <Link
                            key={l.slug}
                            to={`/${l.slug}`}
                            className="block px-4 py-2.5 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/faq" className={`px-3 py-2 font-semibold transition-colors ${isActive('/faq')}`}>
                FAQ
              </Link>
              <Link to="/contact" className={`px-3 py-2 font-semibold transition-colors ${isActive('/contact')}`}>
                Contact
              </Link>

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="ml-2 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-secondary-950 border-t border-secondary-800 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="container-x py-4 space-y-1">
              <Link to="/" className="block py-3 px-2 text-white font-semibold hover:text-primary-400">
                Home
              </Link>
              <Link to="/about" className="block py-3 px-2 text-white font-semibold hover:text-primary-400">
                About Us
              </Link>

              {/* Mobile services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 px-2 text-white font-semibold"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    <Link to="/services" className="block py-2 px-2 text-primary-400 font-semibold text-sm">
                      All Electrical Services
                    </Link>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                        className="block py-2 px-2 text-secondary-300 text-sm hover:text-primary-400"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile areas */}
              <div>
                <button
                  onClick={() => setAreasOpen(!areasOpen)}
                  className="flex items-center justify-between w-full py-3 px-2 text-white font-semibold"
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    <Link to="/service-areas" className="block py-2 px-2 text-primary-400 font-semibold text-sm">
                      All Service Areas
                    </Link>
                    {LOCATIONS.map((l) => (
                      <Link
                        key={l.slug}
                        to={`/${l.slug}`}
                        className="block py-2 px-2 text-secondary-300 text-sm hover:text-primary-400"
                      >
                        {l.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/faq" className="block py-3 px-2 text-white font-semibold hover:text-primary-400">
                FAQ
              </Link>
              <Link to="/contact" className="block py-3 px-2 text-white font-semibold hover:text-primary-400">
                Contact Us
              </Link>

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-primary-500 text-secondary-950 font-bold px-6 py-4 rounded-xl mt-4 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
