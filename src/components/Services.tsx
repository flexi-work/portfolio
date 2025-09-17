import React from 'react';
import { Palette, Code, Zap, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visual identity, branding, and marketing materials that captivate your audience.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design', 'Print Design'],
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Complete web applications built with modern technologies and best practices.',
      features: ['React & TypeScript', 'Node.js Backend', 'Database Design', 'API Development', 'Deployment'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your workflow with intelligent automation solutions and integrations.',
      features: ['Workflow Automation', 'API Integrations', 'Process Optimization', 'Custom Scripts', 'Data Processing'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI powered by cutting-edge language models.',
      features: ['Custom AI Models', 'Natural Language Processing', 'Multi-platform Integration', 'Training & Optimization', '24/7 Support'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-pink-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs and business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-pink-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <button className="text-pink-500 font-semibold hover:text-pink-400 transition-colors duration-200 flex items-center">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;