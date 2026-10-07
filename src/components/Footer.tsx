import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Clock } from 'lucide-react';
import { BUSINESS, SERVICES, LOCATIONS } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-secondary-950 text-secondary-300">
      {/* CTA bar */}
      <div className="bg-primary-500 py-8">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-extrabold text-secondary-950">
              Need an Electrician in Atlanta?
            </h3>
            <p className="text-secondary-800 font-semibold mt-1">
              Call now for fast, professional electrical service.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-secondary-950 hover:bg-secondary-800 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl text-lg"
          >
            <Phone className="w-5 h-5 text-primary-500" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-secondary-950" />
              </div>
              <div className="leading-none">
                <div className="font-heading font-extrabold text-white text-lg">
                  It's Lit Electrical
                </div>
                <div className="text-primary-500 text-xs font-semibold">
                  ATL LLC
                </div>
              </div>
            </Link>
            <p className="text-sm text-secondary-400 leading-relaxed">
              {BUSINESS.name} is your trusted electrical contractor serving
              Atlanta, Georgia, and the surrounding metro area. Professional
              residential electrical services with a commitment to safety and
              quality.
            </p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 mt-4 text-primary-400 font-bold hover:text-primary-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/${l.slug}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-primary-400 transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon–Fri: 7:00 AM – 7:00 PM</div>
                  <div>Sat: 8:00 AM – 5:00 PM</div>
                  <div>Sun: By Appointment</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-800">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-primary-400 transition-colors">About</Link>
            <Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link>
            <Link to="/service-areas" className="hover:text-primary-400 transition-colors">Service Areas</Link>
            <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
            <Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
