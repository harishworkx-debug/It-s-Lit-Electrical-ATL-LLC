import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServicePage from '@/pages/ServicePage';
import ServiceAreas from '@/pages/ServiceAreas';
import LocationPage from '@/pages/LocationPage';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Sitemap from '@/pages/Sitemap';
import { SERVICES, LOCATIONS, BUSINESS } from '@/data/siteData';

export const DynamicRoute = () => {
  const { slug } = useParams();
  const isService = SERVICES.some(s => `${s.slug}-${BUSINESS.mainLocation.toLowerCase()}` === slug);
  const isLocation = LOCATIONS.some(l => l.slug === slug);

  if (isService) return <ServicePage />;
  if (isLocation) return <LocationPage />;
  
  return <Navigate to="/" replace />;
};

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/:slug" element={<DynamicRoute />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
