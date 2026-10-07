import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { BUSINESS, ServiceData } from '@/data/siteData';
import Reveal from './Reveal';

export default function ServiceCard({ service }: { service: ServiceData }) {
  const Icon = (Icons as any)[service.icon] || Icons.Zap;

  return (
    <Reveal>
      <Link
        to={`/${service.slug}-${BUSINESS.mainLocation.toLowerCase()}`}
        className="card group block h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent" />
          <div className="absolute bottom-3 left-3 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-secondary-950" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-heading font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-secondary-500 mt-2 leading-relaxed line-clamp-2">
            {service.tagline}
          </p>
          <span className="inline-flex items-center gap-1 mt-4 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
            View {service.shortName} Service
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
