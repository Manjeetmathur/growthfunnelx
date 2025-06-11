import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from "react-icons/fa6";
import { start, url } from '../components/Backendurl/url';
import axios from 'axios'
import {
  ArrowRight,
  BarChart2,
  Search,
  Share2,
  Mail,
  TrendingUp,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaFacebookF } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { SiYoutube } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    start();
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Elevate Your <span className="gradient-text">Digital Performance</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Bangalore's premier performance marketing agency helping businesses achieve measurable growth through data-driven strategies.
              </p>
              <div className="flex justify-center sm:justify-start flex-row gap-4 my-5">
                <Link to="https://www.linkedin.com/company/107170905/admin/dashboard/" target='_blank' className='p-2 sm:p-3 text-xl border-blue-600 border-[3px]  rounded-xl bg-gradient-to-l hover:bg-blue-700 hover:text-white'><FaLinkedinIn /></Link>
                <Link to="https://www.facebook.com/profile.php?id=61577216993855" target='_blank' className='p-2 sm:p-3 text-xl border-blue-600 border-[3px]  rounded-xl bg-gradient-to-l hover:bg-blue-700 hover:text-white'><FaFacebookF /></Link>
                <Link to="https://x.com/growthfunnelx" target='_blank' className='p-2 sm:p-3 text-xl border-blue-600 border-[3px]  rounded-xl bg-gradient-to-l hover:bg-blue-700 hover:text-white'><TiSocialTwitter /></Link>
                <Link to="https://www.instagram.com/growthfunnelx/" target='_blank' className='p-2 sm:p-3 text-xl border-blue-600 border-[3px]  rounded-xl bg-gradient-to-l hover:bg-blue-700 hover:text-white'><RiInstagramFill /></Link>
                <Link to="https://www.youtube.com/@growthfunnelx" target='_blank' className='p-2 sm:p-3 text-xl border-blue-600 border-[3px]  rounded-xl bg-gradient-to-l hover:bg-blue-700 hover:text-white'><SiYoutube /></Link>

              </div>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  className="rounded-xl shadow-2xl"
                  alt="Digital marketing team working on performance strategies"
                  src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Average ROI</p>
                      <p className="text-xl font-bold">287%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive performance marketing solutions tailored to your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="h-10 w-10 text-purple-600" />,
                title: "Pay-Per-Click Advertising",
                description: "Maximize your ROI with our expertly managed PPC campaigns across Google, Bing, and other platforms.",
                status: true,
                link: '/contact'
              },
              {
                icon: <Search className="h-10 w-10 text-purple-600" />,
                title: "Search Engine Optimization",
                description: "Improve your organic visibility and drive targeted traffic to your website with our data-driven SEO strategies.",
                status: false
              },

              {
                icon: <Share2 className="h-10 w-10 text-purple-600" />,
                title: "Social Media Marketing",
                description: "Engage your audience and build brand awareness with strategic social media campaigns.",
                status: false
              },
              {
                icon: <Mail className="h-10 w-10 text-purple-600" />,
                title: "Email Marketing",
                description: "Nurture leads and drive conversions with personalized email marketing campaigns.",
                status: false
              },
              {
                icon: <Users className="h-10 w-10 text-purple-600" />,
                title: "Conversion Rate Optimization",
                description: "Turn more visitors into customers with our data-backed CRO strategies.",
                status: false
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
                title: "Analytics & Reporting",
                description: "Gain valuable insights with comprehensive analytics and transparent reporting.",
                status: false
              }
            ].map((service, index) => (
              <Link to={service.link} className="" key={index}>

                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <div className="mb-4">{service.icon}</div>
                    <div className="mb-4 pr-4 font-semibold text-lg">{(service.status) ? <p className='text-green-500'>View...</p> : <p className='text-red-500'>Coming Soon...</p>}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {/* <Link
                  to="/services"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link> */}
                </motion.div>
              </Link>

            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We've helped businesses across industries achieve remarkable results.
            </p>
          </motion.div>

          <div className="stats-grid">
            {[
              { number: "2+", label: "Clients" },
              { number: "20+", label: "Campaigns" },
              { number: "₹1Cr+", label: "Ad Spend Managed" },
              { number: "287%", label: "Average ROI" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl md:text-4xl font-bold text-purple-600">{stat.number}</span>
                <span className="text-gray-700 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Digital Performance?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our performance marketing strategies can help your business grow.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;