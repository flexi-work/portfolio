import React, { useState, useEffect, useRef } from 'react';
import { Menu, X , Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import Logo from '../assets/Flexi.png';

// Add custom styles for the smooth animated navigation
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  .nav-link-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
  }

  .nav-link-item::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: #ec4899;
    transition: all 0.3s ease-out;
    transform: translateX(-50%);
  }

  .nav-link-item:hover::before {
    width: 100%;
  }

  /* GSAP animations will handle the entrance effects */

  body {
    font-family: 'Inter', sans-serif;
  }

  /* Custom scrollbar hiding utility */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navLinksRef = useRef<HTMLAnchorElement[]>([]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  // GSAP animations
  useEffect(() => {
    if (headerRef.current) {
      // Initial animation for header
      gsap.fromTo(headerRef.current, 
        { 
          opacity: 0, 
          y: -50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out" 
        }
      );

      // Stagger animation for navigation links
      gsap.fromTo(navLinksRef.current.filter(el => el), // Filter out nulls
        {
          opacity: 0,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, []);

  // Add ref to navigation links
  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current.push(el);
    }
  };

  // GSAP hover animations
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  // Mobile menu toggle animation
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animate mobile menu when it opens/closes
  useEffect(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenu, 
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenu, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-20">
  
                      <div className="flex-shrink-0">
                        <a href="#home" className="flex items-center gap-3">
                         {Logo ? (
                            <div className="relative">
                            <img
                               src={Logo}
                               alt="Flexi Logo"
                               className="h-16 w-auto [filter:drop-shadow(0_0_8px_#ec4899)]"
                             />
                           
                            </div>
                          ) : null}
            
                          <div>
                            <div className="text-2xl font-extrabold text-white tracking-wide select-none">
                              Flexi <Sparkles className="inline-block  text-pink-500" size={15} />
                            </div>
                            <div className="text-xs uppercase text-pink-300 tracking-wider -mt-1 ml-1">
                              - The era. Spared by U
                           </div>
                        </div>
                      </a>
                       </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                ref={addToRefs}
                href={item.href}
                className="nav-link-item text-gray-300 hover:text-pink-500 transition-colors duration-300 font-medium"
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-pink-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link-item block px-3 py-2 text-gray-300 hover:text-pink-500 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;