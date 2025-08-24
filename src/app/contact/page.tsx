'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This is a placeholder for form submission
      // In production, you would integrate with a service like Formspree, Netlify Forms, or a custom API
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Extract service from URL parameters if available
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && formData.service === '') {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }

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

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We&apos;ll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service...</option>
                    <option value="audit">AI Sales Readiness Audit</option>
                    <option value="retainer">AI-as-a-Service Retainer</option>
                    <option value="tuneup">Process & Tech Tune-Up</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your current challenges and what you'd like to achieve..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* Form Integration Note */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="text-sm font-semibold text-yellow-800 mb-2">Integration Note:</h4>
                <p className="text-sm text-yellow-700">
                  This form is ready for integration with services like Formspree, Netlify Forms, or a custom API endpoint. 
                  Update the form submission handler to connect with your preferred email service.
                </p>
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