import React, { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {


       return (
              <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
                     <div className="max-w-7xl mx-auto  px-6 py-10 md:px-10 md:py-14 ">
                            {/* Header */}
                            <header className="text-center mb-12">
                                   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                          Double Your Leads <br className="hidden md:block" />

                                   </h1>
                                   <span className="gradient-text text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Without Wasting Budget</span>
                                   <p className="text-gray-600 text-lg mt-4">
                                          Performance marketing strategies for EdTech, Real Estate, D2C & more.
                                   </p>
                                   <div className="mt-8">
                                          <ContactForm />
                                   </div>
                            </header>

                            {/* Why Fail Section */}
                            <section className="mt-12">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Most Businesses Fail With Ads</h2>
                                   <p className="text-gray-600">
                                          Most businesses waste 30–50% of their ad budget because of poor targeting, weak landing pages,
                                          and zero follow-up. We solve this with high-converting funnels and automation.
                                   </p>
                            </section>

                            {/* Our Solution */}
                            <section className="mt-10">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Solution</h2>
                                   <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                          <li>✅ Google, Meta & LinkedIn Ad Campaigns</li>
                                          <li>✅ Custom Landing Pages & Funnels</li>
                                          <li>✅ CRM & WhatsApp Automation</li>
                                          <li>✅ Weekly ROI Reports</li>
                                   </ul>
                            </section>

                            {/* Testimonials */}
                            <section className="mt-10">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Success Stories</h2>
                                   <div className="space-y-4">
                                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm">
                                                 <p className="text-gray-700">
                                                        "We saw 4x ROI within 60 days, thanks to Ankit's team." <br />
                                                        <span className="font-semibold">– Rahul, Founder, SkillBoosters</span>
                                                 </p>
                                          </div>
                                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm">
                                                 <p className="text-gray-700">
                                                        "100+ verified leads in 3 weeks. Highest conversion we’ve seen." <br />
                                                        <span className="font-semibold">– Priya, Sales Head, Urban Homes</span>
                                                 </p>
                                          </div>
                                   </div>
                            </section>

                            {/* About */}
                            <section className="mt-10">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
                                   <p className="text-gray-600">
                                          We are a performance marketing team helping businesses across industries generate quality leads and grow
                                          predictably. Our approach is result-oriented and backed by data.
                                   </p>
                            </section>

                            {/* CTA */}
                            <section className="mt-10">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ready to Get Started?</h2>
                                   <p className="text-gray-600">
                                          Want a free 30-minute strategy session? Fill out the form above and we’ll get in touch within 24 hours.
                                   </p>
                            </section>

                            {/* FAQs */}
                            <section className="mt-10">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h2>
                                   <div className="space-y-4">
                                          {[
                                                 {
                                                        q: "I’m a small business. Will this work for me?",
                                                        a: "Yes, we customize strategies for all business sizes.",
                                                 },
                                                 {
                                                        q: "How soon can I see results?",
                                                        a: "Most clients see leads in 2–3 weeks of launch.",
                                                 },
                                                 {
                                                        q: "What do you charge?",
                                                        a: "We offer both performance-based and fixed packages.",
                                                 },
                                          ].map((faq, i) => (
                                                 <div key={i} className="bg-gray-100 p-4 rounded-xl shadow-sm">
                                                        <p className="text-gray-800">
                                                               <strong>Q:</strong> {faq.q}
                                                        </p>
                                                        <p className="text-gray-600 mt-1">
                                                               <strong>A:</strong> {faq.a}
                                                        </p>
                                                 </div>
                                          ))}
                                   </div>
                            </section>
                            <section className="py-20 ">
                                   <div className=" mx-auto ">
                                          <motion.div
                                                 className="rounded-2xl  p-4 text-center  mx-auto "
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
                            {/* Footer */}

                     </div>
              </div>
       );
};

export default LandingPage;
