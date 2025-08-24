import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">MainStreet RevOps</h3>
            <p className="text-gray-300 mb-4">
              AI-powered sales growth solutions for small to mid-sized businesses.
            </p>
            <p className="text-gray-300">
              Transforming revenue operations through smart technology and proven processes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="/assessment" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Assessment
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                Email: <a href="mailto:info@mainstreetrevops.com" className="text-blue-400 hover:text-blue-300">info@mainstreetrevops.com</a>
              </p>
              <p className="text-gray-300">
                LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Connect with us</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} MainStreet RevOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;