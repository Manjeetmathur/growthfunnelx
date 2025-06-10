import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 h-full">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Our Office</h3>
            <p className="text-gray-600 mt-1">
              #123, 5th Main, Sector 2<br />
              HSR Layout, Bangalore - 560102<br />
              Karnataka, India
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-gray-600 mt-1">
              <a href="mailto:info@growthfunnelx.com" className="hover:text-purple-600 transition-colors">
                info@growthfunnelx.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="mailto:support@growthfunnelx.com" className="hover:text-purple-600 transition-colors">
                support@growthfunnelx.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-gray-600 mt-1">
              <a href="tel:+919102275478" className="hover:text-purple-600 transition-colors">
                +91 91022 75478
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+918012345678" className="hover:text-purple-600 transition-colors">
                +91 80 1234 5678
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Business Hours</h3>
            <p className="text-gray-600 mt-1">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;