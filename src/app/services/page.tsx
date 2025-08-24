import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - MainStreet RevOps",
  description: "AI Sales Readiness Audit, AI-as-a-Service Retainer, and Process & Tech Tune-Up services for small to mid-sized businesses.",
};

export default function Services() {
  const services = [
    {
      title: "AI Sales Readiness Audit",
      price: "Fixed Price",
      description: "Comprehensive analysis of your current sales process, technology stack, and opportunities for AI-powered improvements.",
      features: [
        "Current state analysis of sales process",
        "Technology stack assessment",
        "Lead response time analysis", 
        "Sales team performance review",
        "Custom AI implementation roadmap",
        "ROI projections for recommended changes",
        "30-day quick win recommendations"
      ],
      ideal: "Perfect for businesses ready to understand their current state and get a clear path forward.",
      cta: "Get Your Audit",
      ctaLink: "/contact?service=audit"
    },
    {
      title: "AI-as-a-Service Retainer",
      price: "Monthly Advisor",
      description: "Ongoing strategic support to implement, optimize, and scale your AI-powered sales processes.",
      features: [
        "Monthly strategy sessions",
        "AI tool implementation support",
        "Performance monitoring & optimization",
        "Sales team training & support",
        "Technology integration assistance",
        "Quarterly business reviews",
        "Priority email & phone support"
      ],
      ideal: "Best for businesses wanting ongoing support and continuous optimization of their sales operations.",
      cta: "Learn More",
      ctaLink: "/contact?service=retainer"
    },
    {
      title: "Process & Tech Tune-Up",
      price: "Project-Based",
      description: "Targeted improvements to specific pain points in your sales operations, CRM, or system integrations.",
      features: [
        "CRM optimization & cleanup",
        "QuickBooks integration setup",
        "Lead routing automation",
        "Email & SMS automation",
        "Reporting dashboard creation",
        "Team accountability systems",
        "Process documentation"
      ],
      ideal: "Great for businesses with specific challenges or those wanting to optimize particular areas.",
      cta: "Discuss Your Needs",
      ctaLink: "/contact?service=tuneup"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Tailored solutions to transform your sales operations and drive measurable growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Path to Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re just starting your AI journey or looking to optimize existing processes, 
              we have the right solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">
                      {service.price}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-600">
                          <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700">
                      <strong>Ideal for:</strong> {service.ideal}
                    </p>
                  </div>
                </div>
                
                <div className="p-8 pt-0">
                  <Link
                    href={service.ctaLink}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-200 block"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">
              How we ensure successful implementation and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Deep dive into your current processes, challenges, and goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Custom roadmap with prioritized recommendations and ROI projections
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Rapid deployment with hands-on support and team training
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring and refinement for maximum results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can I see results?
              </h3>
              <p className="text-gray-600">
                Most clients see immediate improvements in lead response times within the first week. 
                Comprehensive ROI typically becomes visible within 30-60 days of implementation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need technical expertise on my team?
              </h3>
              <p className="text-gray-600">
                Not at all. We handle all technical implementation and provide comprehensive training. 
                Our solutions are designed to be user-friendly for non-technical business owners and sales teams.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I already have a CRM system?
              </h3>
              <p className="text-gray-600">
                We work with your existing systems whenever possible. Our goal is to optimize what you have 
                and integrate new solutions seamlessly rather than forcing expensive platform changes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you measure success?
              </h3>
              <p className="text-gray-600">
                We track specific KPIs like lead response time, conversion rates, sales cycle length, 
                and revenue per lead. Every engagement includes clear success metrics and regular reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take our assessment to get personalized service recommendations, or schedule a call to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-block"
            >
              Take Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-block"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}