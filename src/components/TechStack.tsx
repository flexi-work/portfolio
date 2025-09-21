import React, { useEffect } from 'react';
import { Code2, Database, Wrench, Zap, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';

// Add custom styles for the 3D card flip effect
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  /* 3D Card Flip Effects */
  .perspective-1000 {
    perspective: 1000px;
  }

  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }

  .backface-hidden {
    backface-visibility: hidden;
  }

  .rotate-y-180 {
    transform: rotateY(180deg);
  }

  .group:hover .card-container {
    transform: rotateY(180deg);
  }

  .tech-card:hover .card-container {
    transform: rotateY(180deg);
  }

  .card-container {
    transition: transform 0.7s ease-in-out;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

const TechStack: React.FC = () => {
  const categories = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      frontLogos: [
        { name: 'React', logo: '⚛️' },
        { name: 'TypeScript', logo: '🔷' },
        { name: 'Python', logo: '🐍' },
        { name: 'Node.js', logo: '🟢' }
      ],
      subcategories: [
        {
          name: 'Frontend',
          technologies: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS']
        },
        {
          name: 'Backend',
          technologies: ['Python', 'Node.js', 'Express js', 'Java']
        }
      ],
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'DataBase Management System',
      frontLogos: [
        { name: 'MySQL', logo: '🐬' },
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'SQL', logo: '🗃️' }
      ],
      subcategories: [
        {
          name: 'Relational Databases',
          technologies: [  'SQL','MySQL', 'PostgreSQL']
        },
        {
          name: 'NoSQL Databases',
          technologies: [ 'MongoDB' , 'MongoDB Atlas']
        }
      ],
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      frontLogos: [
        { name: 'OpenAI', logo: '🤖' },
        { name: 'Zapier', logo: '⚡' },
        { name: 'n8n', logo: '🔗' },
        { name: 'Make.ai', logo: '🛠️' }
      ],
      subcategories: [
        {
          name: 'AI Tools',
          technologies: ['OpenAI', 'HeyGen', 'Custom AI Models']
        },
        {
          name: 'Automation Tools',
          technologies: ['Make.ai','n8n', 'Zapier']
        }
      ],
      color: 'text-purple-400'
    },
    {
      icon: BarChart3,
      title: 'Data & ML Libraries',
      frontLogos: [
        { name: 'NumPy', logo: '🔢' },
        { name: 'Pandas', logo: '🐼' },
        { name: 'OpenCV', logo: '👁️' },
        { name: 'Scikit-Learn', logo: '🧠' }
      ],
      subcategories: [
        {
          name: 'Data & ML',
          technologies: ['NumPy', 'Pandas', 'OpenCV', 'Scikit-Learn','Matplotlib','Seaborn']
        },
        {
          name: 'Data Science Tools',
          technologies: ['Google Colab','Kaggle']
        }
      ],
      color: 'text-red-400'
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      frontLogos: [
        { name: 'GitHub', logo: '🐙' },
        { name: 'Vercel', logo: '▲' },
        { name: 'Canva', logo: '🎨' },
        { name: 'Render', logo: '🚀' }
      ],
      subcategories: [
        {
          name: 'Development Tools',
          technologies: ['Git/GitHub', 'Vercel', 'Render']
        },
        {
          name: 'Design Tools',
          technologies: ['Canva', 'Inkscape']
        }
      ],
      color: 'text-orange-400'
    }
  ];

  // GSAP animations for tech stack cards
  useEffect(() => {
    const cards = document.querySelectorAll('.tech-card');
    
    cards.forEach((card, index) => {
      // Initial animation
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: index * 0.1 }
      );

      // Hover animations
      const frontCard = card.querySelector('.front-card');
      const icon = card.querySelector('.tech-icon');

      card.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        gsap.to(frontCard, { scale: 0.95, duration: 0.3, ease: "power2.out" });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(frontCard, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative h-64 perspective-1000 tech-card"
                style={{ perspective: '1000px' }}
              >
                {/* Card Container */}
                <div className="card-container relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                  {/* Front of Card - Technology Logos */}
                  <div className="front-card absolute inset-0 w-full h-full backface-hidden bg-black/40 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-pink-500/40 transition-all duration-300 flex flex-col items-center justify-center p-4">
                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                      {category.frontLogos.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-600 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-110"
                          title={tech.name}
                        >
                          <span className="text-2xl">{tech.logo}</span>
                        </div>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{category.title}</h3>
                    <div className="text-pink-500 font-semibold text-sm animate-pulse">
                      Hover to explore
                    </div>
                  </div>

                  {/* Back of Card - Tech Stack Details */}
                  <div className="back-card absolute inset-0 w-full h-full backface-hidden bg-black/40 backdrop-blur-sm rounded-xl border border-pink-500/40 rotate-y-180 flex flex-col p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${category.color.replace('text-', 'from-').replace('-400', '-500')} to-${category.color.replace('text-', '').replace('-400', '-600')} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <h3 className="text-base font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex} className="space-y-2">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            {subcategory.name}
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {subcategory.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="bg-gray-800/50 rounded-md px-2 py-1 text-xs text-gray-300 border border-gray-600 hover:border-pink-500/50 transition-colors duration-200"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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