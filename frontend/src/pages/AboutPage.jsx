import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, Clock, CheckCircle } from 'lucide-react';
import { start } from '../components/Backendurl/url';

const AboutPage = () => {

    useEffect( () => {
      start();
    }, [])
  const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Growth FunnelX</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2025, Growth FunnelX is part of the new wave of digital agencies built for the AI era. We may be new, but we’re far from inexperienced. Our team is made up of sharp, forward-thinking marketers who’ve grown up with AI—and know exactly how to use it to drive smarter, faster, and more cost-effective performance.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We blend data, creativity, and cutting-edge tools to build digital marketing strategies that deliver real, measurable results. If you’re looking for a fresh perspective and a partner that understands the future, you’re in the right place.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img  
                className="rounded-xl shadow-lg" 
                alt="Growth FunnelX team in their Bangalore office"
               src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're driven by a commitment to excellence and a passion for helping businesses succeed in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with innovative digital marketing strategies that drive measurable growth and deliver exceptional ROI. We aim to be the most trusted performance marketing partner for businesses in India.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Data-driven decision making</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Transparency and accountability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Continuous innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Client-centric approach</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in digital marketing, analytics, and creative strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ankit Kumar (lead generation expert)",
                position: "Founder & CEO",
                bio: "With over 4 years of experience in digital marketing, Vikram leads our strategic vision.",
                image: "A professional Indian man in his 40s wearing a business casual outfit with glasses"
              },
              {
                name: "Neha Sharma",
                position: "Head of SEO",
                bio: "Neha specializes in technical SEO and has helped numerous businesses improve their search visibility.",
                image: "A professional Indian woman in her 30s with long dark hair wearing business attire"
              },
              {
                name: "Arjun Patel",
                position: "PPC Specialist",
                bio: "Arjun is a certified Google Ads expert with a track record of creating high-performing campaigns.",
                image: "A young Indian man in his late 20s wearing a casual business outfit with a friendly smile"
              },
              {
                name: "Priya Mehta",
                position: "Social Media Director",
                bio: "Priya brings creativity and analytical thinking to our social media strategies.",
                image: "A stylish Indian woman in her early 30s with medium-length hair and modern glasses"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img  
                  className="w-full h-64 object-cover" 
                  alt={`${member.name}, ${member.position} at Growth FunnelX`}
                 src="https://tse1.mm.bing.net/th?id=OIP.OSn44nDCuend-3kz0y7idwHaHa&pid=Api&P=0&h=180" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Growth FunnelX</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We stand out from other agencies through our commitment to excellence and results-driven approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-purple-600" />,
                title: "Expert Team",
                description: "Our team consists of certified professionals with specialized expertise across all digital marketing channels."
              },
              {
                icon: <Target className="h-10 w-10 text-purple-600" />,
                title: "Results-Focused",
                description: "We're obsessed with metrics and ROI, ensuring every campaign delivers measurable results."
              },
              {
                icon: <Clock className="h-10 w-10 text-purple-600" />,
                title: "Agile Approach",
                description: "We adapt quickly to market changes and algorithm updates to keep your campaigns performing optimally."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help your business achieve its marketing goals.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;