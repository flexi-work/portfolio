import React from 'react';
import { Github, Linkedin, Mail, Heart ,Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    // { href: '#projects', label: 'Projects' },
  ];

  const services = [
    { href: '#services', label: 'Graphic Design' },
    { href: '#services', label: 'Web Development' },
    { href: '#services', label: 'Automation' },
    { href: '#services', label: 'AI Chatbots' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">
                Flexi<span className="text-pink-500">.</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Fast, Loyal, Expert, Innovation - We transform your digital vision into reality with cutting-edge solutions and unmatched dedication.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/flexi_work786"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/flexi-work-89875a384/"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mailto:flexi.work786@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Flexi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-pink-500 mx-1" /> by Flexi Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;