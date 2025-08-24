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
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            This comprehensive questionnaire helps us understand your current sales process, 
            technology stack, and challenges so we can provide tailored solutions.
          </p>
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

          {/* Google Form Embed - Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="bg-gray-100 p-8 rounded-lg text-center min-h-[600px] flex flex-col justify-center items-center">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Google Form Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  The Google Form will be embedded here. To integrate your actual form:
                </p>
                <div className="bg-white p-4 rounded border text-left text-sm text-gray-700">
                  <p className="font-semibold mb-2">Integration Steps:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Create your Google Form with the questions below</li>
                    <li>Get the embed code from Google Forms</li>
                    <li>Replace this placeholder with the iframe</li>
                  </ol>
                </div>
              </div>
              
              {/* Sample form structure */}
              <div className="bg-white p-6 rounded border w-full max-w-2xl text-left">
                <h4 className="font-semibold text-gray-900 mb-3">Sample Question Structure:</h4>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="border-b pb-2">
                    <strong>Section 1: Lead Generation & Capture</strong>
                    <p>• Current lead sources</p>
                    <p>• Lead volume per month</p>
                    <p>• Best converting sources</p>
                  </div>
                  <div className="border-b pb-2">
                    <strong>Section 2: Sales Process</strong>
                    <p>• Lead routing and follow-up</p>
                    <p>• Sales team structure</p>
                    <p>• Performance tracking</p>
                  </div>
                  <div className="border-b pb-2">
                    <strong>Section 3: Technology & Integration</strong>
                    <p>• Current tools and systems</p>
                    <p>• Integration challenges</p>
                    <p>• Priority improvements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actual Google Form would go here */}
            {/*
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Business Discovery Questionnaire"
              className="rounded-lg"
            >
              Loading…
            </iframe>
            */}
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
            Prefer to Talk First?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skip the form and schedule a discovery call directly with our team.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Schedule Discovery Call
          </a>
        </div>
      </section>
    </div>
  );
}