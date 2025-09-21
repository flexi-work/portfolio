import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-pink-400 font-medium mb-8">
            <Zap size={16} />
            The Leading-Innovation Hub
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Flexi
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          <p className="mb-4">Where innovation meets expertise</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
              <span className="text-pink-500 font-bold">F</span>ast
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
              <span className="text-pink-500 font-bold">L</span>oyal
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
              <span className="text-pink-500 font-bold">E</span>xpert
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
              <span className="text-pink-500 font-bold">I</span>nnovation
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          From stunning graphic designs to cutting-edge web applications, intelligent automation, and AI-powered chatbots - we transform your vision into digital reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
            <ArrowRight size={20} />
          </a>
          {/* <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            View Projects
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;