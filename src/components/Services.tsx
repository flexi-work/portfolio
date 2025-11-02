import React, { useState, useRef, useEffect } from 'react';
import { Palette, Code, Zap, Bot, X, CheckCircle, Star, Clock, Users, Award } from 'lucide-react';
import { gsap } from 'gsap';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visual identity, branding, and marketing materials that captivate your audience.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design', 'Print Design'],
      gradient: 'from-pink-500 to-red-500',
      details: {
        overview: 'Transform your brand with professional graphic design services that combine creativity with strategic thinking. We create visual identities that not only look stunning but also communicate your brand values effectively.',
        deliverables: [
          'Custom Logo Design & Brand Guidelines',
          'Complete Brand Identity Package',
          'Marketing Collateral Design',
          'UI/UX Design for Web & Mobile',
          'Print Design & Packaging',
          'Social Media Graphics & Templates'
        ],
        process: [
          'Discovery & Brand Analysis',
          'Concept Development & Mood Boards',
          'Design Iterations & Refinements',
          'Final Delivery & Brand Guidelines',
          'Ongoing Support & Updates'
        ],
        timeline: '2-4 weeks',
        pricing: 'Starting from $500',
        benefits: [
          'Professional brand identity',
          'Consistent visual communication',
          'Increased brand recognition',
          'Competitive market advantage'
        ]
      }
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Complete web applications built with modern technologies and best practices.',
      features: ['React & TypeScript', 'Node.js Backend', 'Database Design', 'API Development', 'Deployment'],
      gradient: 'from-purple-500 to-indigo-500',
      details: {
        overview: 'Build scalable, secure, and high-performance web applications from concept to deployment. Our full-stack development services cover both frontend and backend development using cutting-edge technologies.',
        deliverables: [
          'Responsive Web Applications',
          'RESTful API Development',
          'Database Design & Optimization',
          'Cloud Deployment & DevOps',
          'Performance Optimization',
          'Security Implementation'
        ],
        process: [
          'Requirements Analysis & Planning',
          'Architecture Design & Database Schema',
          'Frontend & Backend Development',
          'Testing & Quality Assurance',
          'Deployment & Launch',
          'Maintenance & Support'
        ],
        timeline: '4-12 weeks',
        pricing: 'Starting from $2,000',
        benefits: [
          'Scalable application architecture',
          'Modern technology stack',
          'Secure and optimized code',
          'Cross-platform compatibility'
        ]
      }
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your workflow with intelligent automation solutions and integrations.',
      features: ['Workflow Automation', 'API Integrations', 'Process Optimization', 'Custom Scripts', 'Data Processing'],
      gradient: 'from-yellow-500 to-orange-500',
      details: {
        overview: 'Eliminate repetitive tasks and boost productivity with custom automation solutions. We analyze your workflows and create intelligent automation systems that save time and reduce errors.',
        deliverables: [
          'Custom Automation Scripts',
          'API Integrations & Webhooks',
          'Workflow Optimization',
          'Data Processing Pipelines',
          'Monitoring & Alerting Systems',
          'Documentation & Training'
        ],
        process: [
          'Workflow Analysis & Mapping',
          'Automation Strategy Development',
          'Script Development & Testing',
          'Integration & Deployment',
          'Monitoring & Optimization',
          'Training & Documentation'
        ],
        timeline: '2-6 weeks',
        pricing: 'Starting from $800',
        benefits: [
          'Increased productivity',
          'Reduced manual errors',
          'Cost savings',
          'Scalable processes'
        ]
      }
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI powered by cutting-edge language models.',
      features: ['Custom AI Models', 'Natural Language Processing', 'Multi-platform Integration', 'Training & Optimization', '24/7 Support'],
      gradient: 'from-green-500 to-teal-500',
      details: {
        overview: 'Deploy intelligent AI chatbots that understand context, learn from interactions, and provide exceptional customer experiences. Our AI solutions are trained on your specific data and business requirements.',
        deliverables: [
          'Custom AI Chatbot Development',
          'Natural Language Processing',
          'Multi-platform Integration',
          'Training Data Preparation',
          'Analytics & Performance Monitoring',
          'Ongoing AI Model Optimization'
        ],
        process: [
          'Requirements & Use Case Analysis',
          'AI Model Selection & Training',
          'Conversation Flow Design',
          'Integration & Testing',
          'Deployment & Monitoring',
          'Continuous Learning & Updates'
        ],
        timeline: '3-8 weeks',
        pricing: 'Starting from $1,500',
        benefits: [
          '24/7 customer support',
          'Reduced response time',
          'Improved customer satisfaction',
          'Scalable AI solutions'
        ]
      }
    }
  ];

  // Modal functions
  const openModal = (serviceIndex: number) => {
    setSelectedService(serviceIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeModal(); // Close the modal after clicking Get Started
  };

  // GSAP animations for modal
  useEffect(() => {
    if (isModalOpen && modalRef.current && overlayRef.current) {
      // Animate overlay
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate modal
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [isModalOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

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
                  <button 
                    onClick={() => openModal(index)}
                    className="text-pink-500 font-semibold hover:text-pink-400 transition-colors duration-200 flex items-center"
                  >
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {isModalOpen && selectedService !== null && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            ref={modalRef}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedService !== null && (
              <>
                {/* Modal Header */}
                <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${services[selectedService].gradient} rounded-2xl flex items-center justify-center`}>
                        {React.createElement(services[selectedService].icon, { className: "text-white", size: 32 })}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{services[selectedService].title}</h3>
                        <p className="text-gray-300">{services[selectedService].description}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Star className="text-pink-500 mr-2" size={20} />
                      Overview
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{services[selectedService].details.overview}</p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <CheckCircle className="text-pink-500 mr-2" size={20} />
                      What You'll Get
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[selectedService].details.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Clock className="text-pink-500 mr-2" size={20} />
                      Our Process
                    </h4>
                    <div className="space-y-3">
                      {services[selectedService].details.process.map((step, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                            <span className="text-pink-500 font-semibold text-sm">{idx + 1}</span>
                          </div>
                          <p className="text-gray-300">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Clock className="text-pink-500 mr-2" size={18} />
                        Timeline
                      </h4>
                      <p className="text-2xl font-bold text-pink-500">{services[selectedService].details.timeline}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="text-pink-500 mr-2" size={18} />
                        Investment
                      </h4>
                      <p className="text-2xl font-bold text-pink-500">{services[selectedService].details.pricing}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Users className="text-pink-500 mr-2" size={20} />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[selectedService].details.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                    <button 
                      onClick={scrollToContact}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 flex-1"
                    >
                      Get Started
                    </button>
                    <button 
                      onClick={closeModal}
                      className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 flex-1"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;