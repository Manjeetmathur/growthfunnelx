import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceHero = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We offer comprehensive performance marketing solutions tailored to your business goals. Our data-driven approach ensures maximum ROI for every campaign.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;