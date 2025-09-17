import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'Full Stack Development',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot powered by OpenAI GPT models, integrated with multiple platforms for seamless customer support automation.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['OpenAI', 'Python', 'FastAPI', 'WebSocket'],
      category: 'AI Chatbot',
      links: {
        demo: '#'
      }
    },
    {
      title: 'Brand Identity Package',
      description: 'Complete brand identity design including logo, color palette, typography, and marketing materials for a tech startup.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Canva', 'Adobe Creative Suite', 'Brand Strategy'],
      category: 'Graphic Design',
      links: {
        demo: '#'
      }
    },
    {
      title: 'Workflow Automation System',
      description: 'Custom automation workflows connecting multiple SaaS tools, reducing manual tasks by 80% and improving team productivity.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['n8n', 'Zapier', 'Make.ai', 'REST APIs'],
      category: 'Automation',
      links: {
        demo: '#'
      }
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard with real-time data visualization and reporting capabilities for business intelligence.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'WebSocket', 'PostgreSQL'],
      category: 'Full Stack Development',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Social Media Content Generator',
      description: 'AI-powered tool that generates engaging social media content with automated posting across multiple platforms.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['OpenAI', 'Python', 'Social Media APIs', 'Automation'],
      category: 'AI & Automation',
      links: {
        demo: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-pink-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-pink-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;