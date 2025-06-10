import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { url } from '../Backendurl/url';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${url}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
console.log(data)
      if (res.ok) {
        navigate('/thankyou');
        toast({
          title: "Message sent!",
          description: "We've received your message and will get back to you shortly.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("API Error:", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="contact-form space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 91022 75478"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company Ltd."
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service You're Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="Search Engine Optimization">Search Engine Optimization</option>
            <option value="Pay-Per-Click Advertising">Pay-Per-Click Advertising</option>
            <option value="Social Media">Social Media Marketing</option>
            <option value="Email Marketing">Email Marketing</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="Analytics">Analytics & Reporting</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project or inquiry..."
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full md:w-auto px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;