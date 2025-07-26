import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks, contactInfo } from './mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_e683fc19-7128-4bb8-ac56-9f0d25dda9e5/artifacts/de55en6n_Dictor%20logo.png" 
                  alt="Dictor Olame Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400">Dictor Olame</h3>
                <p className="text-sm text-green-400">Design. Inspire. Transform</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into visual masterpieces. Professional graphic design and web development services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-red-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Graphic Design</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Print Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-green-400">Follow Me</h5>
              <div className="flex space-x-4">
                <a 
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dictor Olame. All rights reserved. | Designed with passion for creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;