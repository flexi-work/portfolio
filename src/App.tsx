import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import WebProjects from './components/WebProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <WebProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;