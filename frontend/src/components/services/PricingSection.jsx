import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "₹25,000",
    description: "Perfect for small businesses looking to establish their digital presence.",
    features: [
      "Basic SEO setup",
      "Social media management (2 platforms)",
      "Monthly performance report",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "₹50,000",
    description: "Ideal for growing businesses aiming to expand their digital footprint.",
    features: [
      "Comprehensive SEO strategy",
      "PPC campaign management",
      "Social media management (4 platforms)",
      "Content creation (4 pieces/month)",
      "Bi-weekly performance reports",
      "Email and phone support"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for established businesses with specific requirements.",
    features: [
      "Advanced SEO and content strategy",
      "Multi-channel PPC campaigns",
      "Comprehensive social media strategy",
      "Custom content creation",
      "Weekly performance reports",
      "Dedicated account manager"
    ]
  }
];

const PricingCard = ({ name, price, description, features, highlighted, index }) => {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden border ${
        highlighted 
          ? 'border-purple-500 shadow-lg relative' 
          : 'border-gray-200'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {highlighted && (
        <div className="bg-purple-600 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {name !== "Enterprise" && <span className="text-gray-500">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          asChild 
          className={`w-full ${highlighted ? '' : 'bg-white text-purple-600 border-purple-600 hover:bg-purple-50'}`}
          variant={highlighted ? "default" : "outline"}
        >
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer customized solutions to fit your business needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;