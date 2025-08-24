import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Assessment - MainStreet RevOps",
  description: "Complete our comprehensive discovery questionnaire to get personalized recommendations for your sales process optimization.",
};

export default function Assessment() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business Discovery Assessment
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            Get Personalized Recommendations for Your Business
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-6">
            This comprehensive questionnaire helps us understand your current sales process, 
            technology stack, and challenges so we can provide tailored solutions.
          </p>
          <div className="bg-blue-700/50 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-blue-100 text-sm mb-2">
              <strong>Free 15-minute consultation available</strong>
            </p>
            <p className="text-blue-200 text-sm">
              Full assessments typically range from $1,500-$3,000 depending on company size, revenue, and complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Before You Start
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What You&apos;ll Need:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Information about your current lead sources
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Sales team structure and performance data
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Current technology tools and systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Financial and billing process details
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Investment:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Approximately 15-20 minutes to complete
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Can be saved and resumed if needed
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Results delivered within 24 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offering Flow Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Two-Stage Approach
            </h2>
            <p className="text-gray-600">
              We&apos;ve designed a comprehensive process to transform your sales operations:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                AI Sales Readiness Audit
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Audit sales/marketing processes for AI opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Identify bottlenecks where AI or light tech upgrades could drive more leads, higher conversions, or better retention
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Prioritize the top 3–5 actions with projected ROI
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                AI-as-a-Service Retainer
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Implement and manage AI tools (CRM automation, AI lead scoring, AI content generation, AI proposal templates)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Apply light tech improvements as needed (CRM cleanup, workflow automation, dashboard/reporting fixes)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Monthly monitoring + optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discovery Questionnaire
            </h2>
            <p className="text-gray-600">
              Please answer as completely as possible to get the most accurate recommendations.
            </p>
          </div>

          {/* Google Form Embed */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="w-full overflow-hidden rounded-lg">
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

      {/* Next Steps Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">
                We review your responses and analyze your current state
              </p>
            </div>
            <div>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommendations</h3>
              <p className="text-gray-600">
                Custom report with prioritized improvements and ROI projections
              </p>
            </div>
            <div>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy Call</h3>
              <p className="text-gray-600">
                Free 30-minute call to discuss findings and next steps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Start with a Free 15-Minute Consultation
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Not ready for the full assessment? Schedule a free consultation to discuss your needs and see if we&apos;re a good fit.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}