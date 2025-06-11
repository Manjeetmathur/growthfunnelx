import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Search, Share2, TrendingUp } from 'lucide-react';
import { start } from '../components/Backendurl/url';

const CaseStudiesPage = () => {
const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
    useEffect( () => {
      start();
    }, [])
  
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
              Our <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore how we've helped businesses across various industries achieve remarkable results through our performance marketing strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {/* Case Study 1 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">TechSolutions India</h2>
                <p className="text-purple-600 font-medium mb-4">SEO & Content Marketing</p>
                <p className="text-lg text-gray-700 mb-6">
                  TechSolutions India, a B2B SaaS company based in Bangalore, was struggling to generate organic leads and establish their online presence in a competitive market.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Organic Traffic</p>
                    <p className="text-2xl font-bold text-purple-600">+187%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Keyword Rankings</p>
                    <p className="text-2xl font-bold text-purple-600">+210</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Leads Generated</p>
                    <p className="text-2xl font-bold text-purple-600">+143%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">ROI</p>
                    <p className="text-2xl font-bold text-purple-600">312%</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="flex items-center">
                  <a href="#" className="inline-flex items-center">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img  
                  className="rounded-xl shadow-lg" 
                  alt="TechSolutions India SEO case study showing traffic growth charts"
                 src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" />
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <BarChart2 className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Fashion Trends</h2>
                <p className="text-purple-600 font-medium mb-4">PPC & Shopping Ads</p>
                <p className="text-lg text-gray-700 mb-6">
                  Fashion Trends, an e-commerce fashion retailer, wanted to increase online sales and reduce their cost per acquisition through more efficient advertising.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">ROAS</p>
                    <p className="text-2xl font-bold text-purple-600">5.2x</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">CPA Reduction</p>
                    <p className="text-2xl font-bold text-purple-600">-42%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Conversion Rate</p>
                    <p className="text-2xl font-bold text-purple-600">+87%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Revenue Growth</p>
                    <p className="text-2xl font-bold text-purple-600">+156%</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="flex items-center">
                  <a href="#" className="inline-flex items-center">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img  
                  className="rounded-xl shadow-lg" 
                  alt="Fashion Trends PPC campaign dashboard showing improved ROAS and conversion metrics"
                 src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Share2 className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Foodie Express</h2>
                <p className="text-purple-600 font-medium mb-4">Social Media Marketing</p>
                <p className="text-lg text-gray-700 mb-6">
                  Foodie Express, a food delivery startup in Bangalore, needed to build brand awareness and drive app installations in a highly competitive market.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">App Installs</p>
                    <p className="text-2xl font-bold text-purple-600">+245%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Engagement Rate</p>
                    <p className="text-2xl font-bold text-purple-600">+178%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">CPI Reduction</p>
                    <p className="text-2xl font-bold text-purple-600">-38%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Follower Growth</p>
                    <p className="text-2xl font-bold text-purple-600">+320%</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="flex items-center">
                  <a href="#" className="inline-flex items-center">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img  
                  className="rounded-xl shadow-lg" 
                  alt="Foodie Express social media marketing campaign showing engagement metrics and app install data"
                 src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
              </div>
            </motion.div>

            {/* Case Study 4 */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Startup Ventures</h2>
                <p className="text-purple-600 font-medium mb-4">Integrated Digital Marketing</p>
                <p className="text-lg text-gray-700 mb-6">
                  Startup Ventures, a venture capital firm, wanted to increase their deal flow and establish thought leadership in the Indian startup ecosystem.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Lead Generation</p>
                    <p className="text-2xl font-bold text-purple-600">+203%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Website Traffic</p>
                    <p className="text-2xl font-bold text-purple-600">+167%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Deal Flow</p>
                    <p className="text-2xl font-bold text-purple-600">+92%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Brand Mentions</p>
                    <p className="text-2xl font-bold text-purple-600">+215%</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="flex items-center">
                  <a href="#" className="inline-flex items-center">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img  
                  className="rounded-xl shadow-lg" 
                  alt="Startup Ventures integrated digital marketing dashboard showing lead generation and brand growth metrics"
                 src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Growth FunnelX transformed our digital presence. Their SEO strategies helped us rank for competitive keywords, resulting in a 150% increase in organic traffic.",
                name: "Priya Sharma",
                position: "Marketing Director, TechSolutions India"
              },
              {
                quote: "The PPC campaigns managed by Growth FunnelX delivered an ROI of 320%. Their data-driven approach and continuous optimization made all the difference.",
                name: "Rahul Mehta",
                position: "CEO, Startup Ventures"
              },
              {
                quote: "Working with Growth FunnelX has been a game-changer for our e-commerce business. Their holistic approach to performance marketing helped us increase sales by 200%.",
                name: "Ananya Patel",
                position: "E-commerce Manager, Fashion Trends"
              },
              {
                quote: "The team at Growth FunnelX understands the local Bangalore market extremely well. Their localized social media strategy helped us connect with our target audience effectively.",
                name: "Karthik Reddy",
                position: "Founder, Foodie Express"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss how our performance marketing strategies can help your business achieve remarkable results.
            </p>
            <Button asChild size="lg" className="text-base px-8 bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;