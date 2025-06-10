import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CtaSection = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {description}
          </p>
          <Button asChild size="lg" className="text-base px-8 bg-white text-purple-600 hover:bg-gray-100">
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;