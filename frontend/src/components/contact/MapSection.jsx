import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in the heart of HSR Layout, one of Bangalore's prime tech hubs.
          </p>
        </motion.div>

        <motion.div 
          className="map-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.62%2C12.91%2C77.64%2C12.93&amp;layer=mapnik&amp;marker=12.92%2C77.63" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
            title="Growth FunnelX Office Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;