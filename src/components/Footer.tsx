import React from 'react';
import { Sparkles, User, Mail, Phone, MapPin, Facebook, Instagram, Twitter, LinkedinIcon, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 text-rose-500 mr-2" />
              <h3 className="text-xl font-bold">BeautyShop</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted destination for premium beauty products. Discover your natural glow with our carefully curated collection.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-rose-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-rose-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-rose-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Skincare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Makeup</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Hair Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Body Care</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
               <User className="w-5 h-5 text-rose-500 mr-3" />
               <span className="text-gray-300">CEO – Rohit Kumar Maurya</span>
               </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-rose-500 mr-3" />
                <span className="text-gray-300">+91 956983XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-rose-500 mr-3" />
                <span className="text-gray-300">rohitmaurya3545@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-rose-500 mr-3" />
                <span className="text-gray-300">support@beautyshop.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-rose-500 mr-3" />
                <span className="text-gray-300">Noida, Uttar Pradesh, India</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Subscribe to Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-rose-500"
                />
                <button className="px-4 py-2 bg-rose-500 text-white rounded-r-lg hover:bg-rose-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BeautyShop. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;