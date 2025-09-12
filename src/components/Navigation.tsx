'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { name: 'How It Works', href: '#solution' },
    { name: 'Case Studies', href: '#testimonials' },
    { name: 'Beyond Leads', href: '#beyond-leads' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Find active section
      const sections = ['solution', 'testimonials', 'beyond-leads'];
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Check if we're on the homepage
      const isHomepage = window.location.pathname === '/';
      
      if (isHomepage) {
        // We're on homepage, scroll to the element
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on a different page, navigate to homepage with hash
        window.location.href = `/${href}`;
      }
      
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group" aria-label="MainStreet RevOps home">
              <Image
                src="/logo.jpg"
                alt="MainStreet RevOps"
                width={180}
                height={40}
                className="h-10 w-auto hover:scale-105 transition-transform duration-200"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 cursor-pointer ${
                  activeSection === item.href
                    ? 'text-teal-600 bg-teal-50 border border-teal-200'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                }`}
                aria-label={item.href.startsWith('#') ? `Navigate to ${item.name} section` : `Go to ${item.name} page`}
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/assessment"
              className="ml-4 bg-teal-700 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              aria-label="Get your business assessment"
            >
              Get Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-teal-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden transition-all duration-200" role="menu" aria-label="Mobile navigation menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200/50 rounded-b-lg shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 cursor-pointer ${
                    activeSection === item.href
                      ? 'text-teal-600 bg-teal-50 border border-teal-200'
                      : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                  role="menuitem"
                  aria-label={item.href.startsWith('#') ? `Navigate to ${item.name} section` : `Go to ${item.name} page`}
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="/assessment"
                className="block mt-4 bg-teal-600 text-white px-3 py-2 text-base font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                aria-label="Get your business assessment"
              >
                Get Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;