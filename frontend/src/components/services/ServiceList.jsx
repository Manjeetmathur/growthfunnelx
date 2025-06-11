import React from 'react';
import { motion } from 'framer-motion';
import p1 from '../../../public/p1.jpg'
import { 
  Search, 
  BarChart2, 
  Share2, 
  Mail, 
  TrendingUp, 
  FileText, 
  CheckCircle 
} from 'lucide-react';

const servicesData = [
  {
     icon: <BarChart2 className="h-8 w-8 text-purple-600" />,
    title: "Pay-Per-Click Advertising",
    description: "Our PPC experts create and manage high-performing campaigns across multiple platforms to drive targeted traffic and conversions.",
    features: [
      "Google Ads and Microsoft Advertising",
      "Shopping ads and product listings",
      "Remarketing and audience targeting",
      "Conversion tracking and optimization"
    ],
     status: true,
    imgSrc: "https://images.unsplash.com/photo-1675023112817-52b789fd2ef0",
    imgAlt: "SEO analytics dashboard showing keyword rankings and traffic growth"
  },
  {
   icon: <Search className="h-8 w-8 text-purple-600" />,
    title: "Search Engine Optimization",
    description: "Our comprehensive SEO strategies help your business gain visibility in search engine results, driving organic traffic and improving your online presence.",
    features: [
      "Technical SEO audits and optimization",
      "Keyword research and content strategy",
      "On-page and off-page optimization",
      "Local SEO for Bangalore businesses"
    ],
     status: false,
    imgSrc: "https://images.unsplash.com/photo-1675023112817-52b789fd2ef0",
    imgAlt: "PPC campaign management dashboard showing ad performance metrics",
    reverseLayout: true,
  },
  {
    icon: <Share2 className="h-8 w-8 text-purple-600" />,
    title: "Social Media Marketing",
    description: "We help you build a strong social media presence, engage with your audience, and drive conversions through strategic campaigns.",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Paid social advertising",
      "Community management and engagement"
    ],
     status: false,
    imgSrc: p1,
    imgAlt: "Social media marketing content calendar and analytics dashboard"
  },
  {
    icon: <Mail className="h-8 w-8 text-purple-600" />,
    title: "Email Marketing",
    description: "Our email marketing services help you nurture leads, build customer relationships, and drive repeat business through personalized campaigns.",
    features: [
      "Email campaign strategy and planning",
      "Newsletter design and content creation",
      "Automated email sequences and drip campaigns",
      "A/B testing and performance optimization"
    ],
     status: false,
    imgSrc: "https://images.unsplash.com/photo-1533750446969-255bbf191920",
    imgAlt: "Email marketing campaign design and analytics dashboard",
    reverseLayout: true,
  },
  {
    icon: <FileText className="h-8 w-8 text-purple-600" />,
    title: "Content Marketing",
    description: "We create and distribute valuable, relevant content to attract and engage your target audience, establishing your brand as an industry authority.",
    features: [
      "Content strategy development",
      "Blog writing and management",
      "Ebooks, whitepapers, and case studies",
      "Infographics and visual content"
    ],
     status: false,
    imgSrc: "https://images.unsplash.com/photo-1676276374803-36e48196d5ac",
    imgAlt: "Content marketing strategy planning session with content calendar"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    title: "Analytics & Reporting",
    description: "We provide comprehensive analytics and transparent reporting to help you understand your marketing performance and make data-driven decisions.",
    features: [
      "Custom dashboard setup and configuration",
      "Regular performance reports",
      "Data analysis and insights",
      "ROI tracking and optimization recommendations"
    ],
     status: false,
    imgSrc: "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5",
    imgAlt: "Marketing analytics dashboard with performance metrics and ROI data",
    reverseLayout: true,
  }
];

const ServiceItem = ({ icon, title, description, features, imgSrc, imgAlt, reverseLayout,status }) => {
  return (
    <motion.div 
      className={`flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2">
        <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
          {icon}
        </div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
         <div className="mb-4 pr-4 font-semibold text-lg">{status ? <p className='text-green-500'>View...</p> : <p className='text-blue-500'>Coming Soon...</p>}</div>

      </div>
      <div className="md:w-1/2">
        <img  
          className="rounded-xl shadow-lg" 
          alt={imgAlt}
          src={imgSrc} />
      </div>
    </motion.div>
  );
};

const ServiceList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;