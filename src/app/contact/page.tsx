import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - MainStreet RevOps",
  description: "Get in touch with MainStreet RevOps to discuss how we can help transform your sales process with AI-powered solutions.",
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            Ready to Transform Your Sales Process?
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Send us a message to discuss how we can help grow your business.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Google Forms Embed */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfrXpGdqj8XG38lRpfSmXmR7TL01cVQ5ljXy2ILSnUXCV0CNw/viewform?embedded=true" 
              width="100%" 
              height="940" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Contact Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>

          {/* Direct Contact Info */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Other Ways to Reach Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <p className="font-medium text-gray-900 mb-2">Email</p>
                <a href="mailto:sean@mainstrevops.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  sean@mainstrevops.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <p className="font-medium text-gray-900 mb-2">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/seanmacd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Connect with Sean
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <p className="font-medium text-gray-900 mb-2">Response Time</p>
                <p className="text-gray-600 font-medium">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}