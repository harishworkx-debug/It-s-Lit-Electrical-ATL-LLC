import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { LocationData } from '@/data/siteData';
import Reveal from './Reveal';

export default function LocationCard({ location }: { location: LocationData }) {
  return (
    <Reveal>
      <Link
        to={`/${location.slug}`}
        className="card group block h-full"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={location.image}
            alt={location.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary-500" />
            <span className="text-white font-bold text-lg">{location.name}</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-secondary-500 leading-relaxed line-clamp-2">
            {location.blurb}
          </p>
          <span className="inline-flex items-center gap-1 mt-3 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
            Electrician in {location.shortName}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
