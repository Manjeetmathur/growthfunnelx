import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import PricingSection from '@/components/services/PricingSection';
import CtaSection from '@/components/contact/CtaSection';
import { useEffect } from 'react';
import { start } from '../components/Backendurl/url';
import { useLocation } from 'react-router-dom';

const ServicesPage = () => {

    useEffect( () => {
      start();
    }, [])
  const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);
  return (
    <div className="pt-24">
      <ServiceHero />
      <ServiceList />
      <PricingSection/>
      <CtaSection 
        title="Ready to Boost Your Digital Performance?"
        description="Contact us today for a free consultation and discover how our performance marketing strategies can help your business grow."
        buttonText="Schedule a Free Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ServicesPage;