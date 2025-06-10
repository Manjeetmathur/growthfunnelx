// src/pages/ThankYou.jsx (or wherever your routes are configured)

import React from 'react';
import { Link } from 'react-router-dom'; // or use `next/link` if using Next.js

const ThankYou = () => {
       return (
              <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                     <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-lg w-full">
                            <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h1>
                            <p className="text-gray-700 mb-6">
                                   Your message has been successfully sent. We’ll get back to you soon.
                            </p>
                            <Link
                                   to="/"
                                   className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                            >
                                   Back to Home
                            </Link>
                     </div>
              </div>
       );
};

export default ThankYou;
