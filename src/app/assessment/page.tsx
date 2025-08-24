import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Assessment - MainStreet RevOps",
  description: "Complete our comprehensive discovery questionnaire to get personalized recommendations for your sales process optimization.",
  openGraph: {
    title: "Business Assessment - MainStreet RevOps",
    description: "Complete our comprehensive discovery questionnaire to get personalized recommendations for your sales process optimization.",
    type: "website",
  },
};

export default function Assessment() {
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business Discovery Assessment
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4">
            Get Personalized Recommendations for Your Business
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            This comprehensive questionnaire helps us understand your current sales process, 
            technology stack, and challenges so we can provide tailored solutions.
          </p>
          <div className="bg-teal-600/20 border border-teal-400/30 p-4 rounded-xl max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-teal-200 text-sm mb-2">
              <strong>Free 15-minute consultation available</strong>
            </p>
            <p className="text-slate-300 text-sm">
              Full assessments typically range from $1,500-$3,000 depending on company size, revenue, and complexity.
            </p>
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
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,37.3C672,11,768,53,864,69.3C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Instructions Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Before You Start
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What You&apos;ll Need:</h3>
                <ul className="space-y-2 text-slate-600">
                  {[
                    "Information about your current lead sources",
                    "Sales team structure and performance data",
                    "Current technology tools and systems",
                    "Financial and billing process details"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Time Investment:</h3>
                <ul className="space-y-2 text-slate-600">
                  {[
                    "Approximately 15-20 minutes to complete",
                    "Can be saved and resumed if needed",
                    "Results delivered within 24 hours"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
            d="M0,160Q720,80,1440,160L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Offering Flow Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Two-Stage Approach
            </h2>
            <p className="text-slate-600">
              We&apos;ve designed a comprehensive process to transform your sales operations:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold text-teal-600 shadow-sm border border-slate-200">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                AI Sales Readiness Audit
              </h3>
              <ul className="space-y-2 text-slate-600">
                {[
                  "Audit sales/marketing processes for AI opportunities",
                  "Identify bottlenecks where AI or light tech upgrades could drive more leads, higher conversions, or better retention",
                  "Prioritize the top 3–5 actions with projected ROI"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold text-slate-600 shadow-sm border border-slate-200">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                AI-as-a-Service Retainer
              </h3>
              <ul className="space-y-2 text-slate-600">
                {[
                  "Implement and manage AI tools (CRM automation, AI lead scoring, AI content generation, AI proposal templates)",
                  "Apply light tech improvements as needed (CRM cleanup, workflow automation, dashboard/reporting fixes)",
                  "Monthly monitoring + optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
            d="M0,160L1440,0L1440,160Z"
          />
        </svg>
      </div>

      {/* Form Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Discovery Questionnaire
            </h2>
            <p className="text-slate-600">
              Please answer as completely as possible to get the most accurate recommendations.
            </p>
          </div>

          {/* Google Form Embed */}
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-slate-200">
            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSenpHeoEpyRX8m4Yl_IH4H5b0IDkU8UkmNPmx93u6t8UV0Eyw/viewform?embedded=true"
                width="100%"
                height="4800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Business Discovery Questionnaire"
                className="rounded-lg w-full min-h-screen"
                style={{ minHeight: '4800px' }}
              >
                Loading…
              </iframe>
            </div>
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
            d="M0,0Q720,80,1440,0L1440,160L0,160Z"
          />
        </svg>
      </div>

      {/* Next Steps Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Analysis",
                description: "We review your responses and analyze your current state"
              },
              {
                number: "2",
                title: "Recommendations",
                description: "Custom report with prioritized improvements and ROI projections"
              },
              {
                number: "3",
                title: "Strategy Call",
                description: "Free 30-minute call to discuss findings and next steps"
              }
            ].map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-teal-600 shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200 group-hover:border-teal-300">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">
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
            fill="#0f172a" 
            d="M0,0Q720,80,1440,0L1440,160L0,160Z"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Start with a Free 15-Minute Consultation
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Not ready for the full assessment? Schedule a free consultation to discuss your needs and see if we&apos;re a good fit.
          </p>
          <a
            href="/contact"
            className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}