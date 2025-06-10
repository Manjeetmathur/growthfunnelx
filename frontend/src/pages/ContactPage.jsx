import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import MapSection from '@/components/contact/MapSection';
import FaqSection from '@/components/contact/FaqSection';
import CtaSection from '@/components/contact/CtaSection';

const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have a question or ready to start your next project? Reach out to us and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ContactForm />
            </motion.div>
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>

      <MapSection />
      <FaqSection />
      <CtaSection 
        title="Ready to Grow Your Business?"
        description="Take the first step towards transforming your digital marketing strategy. Schedule a free consultation today."
        buttonText="Call Us Now"
        buttonLink="tel:+919102275478"
      />
    </div>
  );
};

export default ContactPage;