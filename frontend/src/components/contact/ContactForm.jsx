import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { url } from '../Backendurl/url';

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

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
          budget: '',
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
      console.error("API Error:", err);
      toast({
        title: "Network Error",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-4  bg-white shadow-lg rounded-lg max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-2">Double Your Leads </h1>
      <p className="text-center text-gray-600 mb-6">
        Performance marketing strategies for EdTech, Real Estate, D2C & more.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 p-3 rounded-md"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 p-3 rounded-md"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          required
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company website url"
          required
          className="w-full border border-gray-300 p-3 rounded-md"
        />

       

        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Monthly Ad Budget (INR)"
          required
          className="w-full border border-gray-300 p-3 rounded-md"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="5"
          className="w-full border border-gray-300 p-3 rounded-md"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : (
            <span className="flex justify-center items-center gap-2">
              Get Free Strategy Plan <Send className="h-4 w-4" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
