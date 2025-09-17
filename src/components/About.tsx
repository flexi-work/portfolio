import React from 'react';
import { Target, Heart, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Full-stack',
      description: 'Complete end-to-end solutions from frontend to backend, databases to deployment.'
    },
    {
      icon: Heart,
      title: 'Loyal',
      description: 'Committed partnerships built on trust, reliability, and long-term client relationships.'
    },
    {
      icon: Award,
      title: 'Expert',
      description: 'Deep technical expertise across multiple technologies and industry best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions leveraging the latest technologies and creative approaches.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-pink-500">Flexi</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a dynamic freelance startup dedicated to delivering exceptional digital solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-2xl p-8 md:p-12 border border-pink-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To empower businesses and individuals with innovative digital solutions that combine technical excellence, creative design, and intelligent automation. We believe in building lasting partnerships through transparent communication, reliable delivery, and continuous innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;