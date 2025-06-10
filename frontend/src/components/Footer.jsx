import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-gradient text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-bold mb-4 block">Growth FunnelX</span>
            <p className="text-gray-300 mb-4">
              Your trusted performance marketing partner in Bangalore, helping businesses achieve measurable growth through data-driven strategies.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Our Services</span>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Search Engine Optimization</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Pay-Per-Click Advertising</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Content Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Email Marketing</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Contact Us</span>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  #123, 5th Main, Sector 2, HSR Layout, Bangalore - 560102
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+919102275478" className="text-gray-300 hover:text-white transition-colors">
                  +91 91022 75478
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@growthfunnelx.com" className="text-gray-300 hover:text-white transition-colors">
                  info@growthfunnelx.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Growth FunnelX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;