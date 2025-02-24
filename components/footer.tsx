"use client";  // ✅ Add this at the top for client-side rendering

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 py-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Our Services</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Team augmentation</li>
              <li>Mobile Development</li>
              <li>Back-end Development</li>
              <li>AI Development</li>
              <li>Front-end Development</li>
              <li>Web Development</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Solutions</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>AI-driven software</li>
              <li>Enterprise development</li>
              <li>Custom Development</li>
              <li>Healthcare Development</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Company</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Who we are</li>
              <li>Clients</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-700">
          {/* Logo & Company Name */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://assets.onecompiler.app/42uvjq4qp/439z9x4kf/Artboard%201.png" 
              alt="Softoryze" 
              className="h-16" 
            />
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left mt-4 md:mt-0">
            <p className="flex items-center"><span className="text-red-600 mr-2">📞</span> +88 01816-06311</p>
            <p className="flex items-center mt-1"><span className="text-red-600 mr-2">📍</span> 24/A-1; 24/A-2, Basila Main Road, Basila, Bangladesh</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-700 text-xl">🔗 LinkedIn</a>
            <a href="#" className="text-gray-700 text-xl">🐦 Twitter</a>
            <a href="#" className="text-gray-700 text-xl">🎨 Behance</a>
          </div>

          {/* Rights & Privacy Policy */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p>© 2025, Softoryze</p>
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;