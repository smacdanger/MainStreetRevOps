import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              MainStreet RevOps
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              AI-powered sales growth solutions for small to mid-sized businesses.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Transforming revenue operations through smart technology and proven processes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/about" className="block text-slate-300 hover:text-blue-400 transition-colors duration-200">
                About
              </Link>
              <Link href="/services" className="block text-slate-300 hover:text-blue-400 transition-colors duration-200">
                Services
              </Link>
              <Link href="/assessment" className="block text-slate-300 hover:text-blue-400 transition-colors duration-200">
                Assessment
              </Link>
              <Link href="/contact" className="block text-slate-300 hover:text-blue-400 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@mainstreetrevops.com" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  info@mainstreetrevops.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  Connect with us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} MainStreet RevOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;