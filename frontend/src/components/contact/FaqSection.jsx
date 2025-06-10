import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What makes Growth FunnelX different from other marketing agencies?",
    answer: "We focus exclusively on performance marketing with measurable results. Our data-driven approach, local market expertise, and transparent reporting set us apart from traditional agencies."
  },
  {
    question: "How long does it take to see results from your marketing campaigns?",
    answer: "While PPC campaigns can show immediate results, SEO and content marketing typically take 3-6 months to show significant improvements. We provide regular progress reports so you can track improvements from day one."
  },
  {
    question: "Do you work with businesses outside of Bangalore?",
    answer: "Yes, while our office is in HSR Layout, Bangalore, we work with clients across India and internationally. Our digital-first approach allows us to serve clients regardless of location."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across various industries including technology, e-commerce, healthcare, education, and finance. Our team adapts our strategies to the specific needs and challenges of each industry."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies based on your specific needs and goals. We offer customized packages starting from ₹25,000 per month. Contact us for a personalized quote."
  }
];

const FaqItem = ({ faq, index }) => (
  <motion.div 
    className="mb-6 border-b border-gray-200 pb-6 last:border-b-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
    <p className="text-gray-600">{faq.answer}</p>
  </motion.div>
);

const FaqSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions? We've got answers.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;