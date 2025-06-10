import ServiceHero from '@/components/services/ServiceHero';
import ServiceList from '@/components/services/ServiceList';
import PricingSection from '@/components/services/PricingSection';
import CtaSection from '@/components/contact/CtaSection';

const ServicesPage = () => {
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