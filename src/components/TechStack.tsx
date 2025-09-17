import React from 'react';
import { Code2, Database, Globe, Wrench } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      icon: Code2,
      title: 'Frontend & Backend',
      technologies: ['React', 'TypeScript', 'Node.js', 'Python'],
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'Databases',
      technologies: ['MongoDB', 'SQL', 'PostgreSQL', 'Redis'],
      color: 'text-green-400'
    },
    {
      icon: Globe,
      title: 'AI & Automation',
      technologies: ['OpenAI', 'HeyGen', 'Custom AI Models', 'Machine Learning'],
      color: 'text-purple-400'
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      technologies: ['Git/GitHub', 'n8n', 'Zapier', 'Make.ai', 'Canva'],
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tech <span className="text-pink-500">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies and industry-leading tools to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-pink-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`${category.color} mr-3`} size={24} />
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-800/50 rounded-lg px-3 py-2 text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-2xl p-8 border border-pink-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Always Evolving</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We stay at the forefront of technology, continuously learning and adopting new tools and frameworks to deliver the most effective solutions for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;