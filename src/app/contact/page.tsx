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
            Schedule a discovery call or send us a message to discuss how we can help grow your business.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {/* Google Forms Embed */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
            </div>

            {/* Contact Info & Calendar */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Schedule a Discovery Call
              </h2>
              <p className="text-gray-600 mb-8">
                Prefer to talk directly? Book a 30-minute discovery call to discuss your specific needs and goals.
              </p>

              {/* Calendly Integration Placeholder */}
              <div className="bg-gray-100 p-8 rounded-lg mb-8 text-center min-h-[400px] flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Calendly Integration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your Calendly booking widget will be embedded here.
                  </p>
                  <div className="bg-white p-4 rounded border text-left text-sm text-gray-700">
                    <p className="font-semibold mb-2">Integration Steps:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Set up your Calendly account</li>
                      <li>Create a 30-minute discovery call event</li>
                      <li>Get the embed code from Calendly</li>
                      <li>Replace this placeholder with the inline widget</li>
                    </ol>
                  </div>
                </div>
                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
                >
                  Book Discovery Call
                </a>
              </div>

              {/* Direct Contact Info */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">📧</span>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@mainstreetrevops.com" className="text-blue-600 hover:text-blue-800">
                        info@mainstreetrevops.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">💼</span>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Connect with us
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">⏰</span>
                    <div>
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to help you decide if we&apos;re the right fit for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What&apos;s included in a discovery call?
              </h3>
              <p className="text-gray-600">
                We&apos;ll review your current sales process, identify immediate opportunities, and discuss 
                which of our services would be most beneficial for your business goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you work with all industries?
              </h3>
              <p className="text-gray-600">
                We specialize in small to mid-sized businesses across various industries, with particular 
                expertise in service-based businesses like roofing, HVAC, and home improvement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What&apos;s your typical engagement timeline?
              </h3>
              <p className="text-gray-600">
                Initial results can be seen within 1-2 weeks. Full implementations typically take 
                30-60 days depending on complexity and scope.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you require long-term contracts?
              </h3>
              <p className="text-gray-600">
                No long-term contracts required. We offer project-based work and month-to-month 
                retainers so you can scale our services as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}