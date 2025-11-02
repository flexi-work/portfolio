import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Link as LinkIcon, X } from 'lucide-react';
import ochi from '../assets/ochi.png';
import Xception from '../assets/Xception.png';
import starbuck from '../assets/starbuck.png';
import Book from '../assets/Book.png';
import { gsap } from 'gsap';


const projects = [
  {
    title: 'Ochi.designs ',
    description: 'The website Ochi is a sleek, modern portfolio-style site built with React and Vite, showcasing a creative agency that specializes in crafting impactful presentations and visual strategies for businesses. It features minimal design, bold typography, and smooth animations to convey clarity and professionalism.',
    image: ochi,
    links: {
      demo: 'https://ochi-web-six.vercel.app/',
      
    }
  },
  {
    title: 'Xception Hackathon App',
    description: 'A full-stack hackathon web-application built to streamline event workflows—registration,Team Points, team Report, and judging all in one place.',
    image: Xception,
    links: {
      demo: 'https://xception.vercel.app/',
      
    }
  },
  {
    title: 'Starbucks Clone',
    description: 'A sleek full-stack clone of the Starbucks web experience, built to replicate the brand’s aesthetic and core functionality—browsing menu items, viewing promotions and rewards, and mimicking the ordering vibe of the official site.',
    image: starbuck,
    links: {
      demo: 'https://starbucks-flame-nu.vercel.app/',
     
    }
  },
  {
    title: 'Mantar Book Reader',
    description: 'With intuitive controls, seamless audio playback, and dynamic text highlighting, it brings every page to life in a fully responsive format.',
    image:Book,
    links: {
      demo: 'https://mantarbook.netlify.app/',
      
    }
  },

];

const WebProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const duplicatedProjects = [...projects, ...projects];

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        setIsModalOpen(false);
        setSelectedProject(null);
      },
    });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current && overlayRef.current) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-pink-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of our work. Click on any project to learn more.
          </p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 mx-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-pink-500/40 transition-all duration-300 transform hover:!scale-105 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
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
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-2xl" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-700">
                {selectedProject.links.demo && (
                  <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-lg">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebProjects;
