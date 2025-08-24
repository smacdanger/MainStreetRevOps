import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - MainStreet RevOps",
  description: "AI Sales Readiness Audit, AI-as-a-Service Retainer, and Process & Tech Tune-Up services for small to mid-sized businesses.",
  openGraph: {
    title: "Services - MainStreet RevOps",
    description: "AI Sales Readiness Audit, AI-as-a-Service Retainer, and Process & Tech Tune-Up services for small to mid-sized businesses.",
    type: "website",
  },
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
      ctaLink: "/contact?service=audit",
      featured: false
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
      ctaLink: "/contact?service=retainer",
      featured: true
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
      ctaLink: "/contact?service=tuneup",
      featured: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
        </div>
        <div className="absolute top-10 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Tailored solutions to transform your sales operations and drive measurable growth
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,37.3C672,11,768,53,864,69.3C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choose Your Path to Growth
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re just starting your AI journey or looking to optimize existing processes, 
              we have the right solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col ${
                  service.featured 
                    ? 'border-teal-300 ring-2 ring-teal-200 transform scale-105' 
                    : 'border-slate-200 hover:border-teal-300 hover:-translate-y-1'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className={`font-semibold text-lg ${service.featured ? 'text-teal-600' : 'text-slate-600'}`}>
                      {service.price}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-slate-600">
                          <span className="text-teal-600 mr-3 mt-1 flex-shrink-0">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`p-4 rounded-lg mb-6 ${service.featured ? 'bg-teal-50' : 'bg-slate-50'}`}>
                    <p className="text-sm text-slate-700">
                      <strong>Ideal for:</strong> {service.ideal}
                    </p>
                  </div>
                </div>
                
                <div className="p-8 pt-0">
                  <Link
                    href={service.ctaLink}
                    className={`w-full px-6 py-3 rounded-xl font-semibold text-center transition-all duration-200 block ${
                      service.featured
                        ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    }`}
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#f8fafc" 
            d="M0,160Q720,80,1440,160L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Process Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-600">
              How we ensure successful implementation and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discovery",
                description: "Deep dive into your current processes, challenges, and goals"
              },
              {
                number: "2", 
                title: "Strategy",
                description: "Custom roadmap with prioritized recommendations and ROI projections"
              },
              {
                number: "3",
                title: "Implementation", 
                description: "Rapid deployment with hands-on support and team training"
              },
              {
                number: "4",
                title: "Optimization",
                description: "Continuous monitoring and refinement for maximum results"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold text-teal-600 shadow-sm group-hover:shadow-md transition-all duration-200 border border-slate-200 group-hover:border-teal-300">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,160L1440,0L1440,160Z"
          />
        </svg>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "How quickly can I see results?",
                answer: "Most clients see immediate improvements in lead response times within the first week. Comprehensive ROI typically becomes visible within 30-60 days of implementation."
              },
              {
                question: "Do I need technical expertise on my team?",
                answer: "Not at all. We handle all technical implementation and provide comprehensive training. Our solutions are designed to be user-friendly for non-technical business owners and sales teams."
              },
              {
                question: "What if I already have a CRM system?",
                answer: "We work with your existing systems whenever possible. Our goal is to optimize what you have and integrate new solutions seamlessly rather than forcing expensive platform changes."
              },
              {
                question: "How do you measure success?",
                answer: "We track specific KPIs like lead response time, conversion rates, sales cycle length, and revenue per lead. Every engagement includes clear success metrics and regular reporting."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-slate-200 hover:border-teal-300 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#0f172a" 
            d="M0,0Q720,80,1440,0L1440,160L0,160Z"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Take our assessment to get personalized service recommendations, or schedule a call to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Take Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors duration-200 inline-block"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}