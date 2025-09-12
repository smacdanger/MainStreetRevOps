import type { Metadata } from "next";
import AssessmentForm from "@/components/ui/AssessmentForm";

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
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
              🧮 Instant TCO Analysis Included
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Instant Revenue Leak Analysis
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4">
            See Exactly How Much You&apos;re Losing + What You Could Save
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            This comprehensive assessment instantly calculates your current revenue leaks, hidden costs, 
            and shows you exactly how much you could save with optimized systems. Get your personalized 
            TCO analysis immediately upon completion.
          </p>
          
          {/* Value Proposition Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-semibold text-teal-200">Instant Savings Calculator</div>
              <div className="text-sm text-slate-300">See your potential monthly savings immediately</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-blue-200">Revenue Leak Detection</div>
              <div className="text-sm text-slate-300">Identify exactly where you&apos;re losing money</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
              <div className="text-2xl mb-2">📈</div>
              <div className="font-semibold text-purple-200">ROI Projections</div>
              <div className="text-sm text-slate-300">Custom ROI timeline with implementation costs</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 border border-teal-400/30 p-6 rounded-xl max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-teal-200 text-lg font-semibold mb-2">
              🎯 What You Get Instantly (Free) vs. Full Assessment (Paid)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-600/20 border border-green-400/30 p-4 rounded-lg">
                <h4 className="text-green-200 font-semibold mb-2">✅ FREE Instant Results:</h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• TCO analysis with current vs. optimized costs</li>
                  <li>• Monthly savings projection</li>
                  <li>• Revenue leak identification</li>
                  <li>• ROI calculator with timeline</li>
                  <li>• Visual breakdown charts</li>
                </ul>
              </div>
              <div className="bg-blue-600/20 border border-blue-400/30 p-4 rounded-lg">
                <h4 className="text-blue-200 font-semibold mb-2">🚀 Full Assessment ($500-$2,000):</h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Everything in free analysis</li>
                  <li>• 60-90 min strategy consultation</li>
                  <li>• Custom implementation roadmap</li>
                  <li>• Step-by-step action plan</li>
                  <li>• Priority recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    "Contact within 24 hours to schedule call"
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

      {/* Offering Flow Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Two-Step Approach
            </h2>
            <p className="text-slate-600">
              We start with a complete system setup, then offer optional ongoing optimization for continued growth:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold text-teal-600 shadow-sm border border-slate-200">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                Setup & Implementation
              </h3>
              <ul className="space-y-2 text-slate-600">
                {[
                  "Complete lead flow audit and analysis",
                  "CRM setup and automation workflows",
                  "Instant lead response systems",
                  "Team training and documentation",
                  "Full system handover — it's yours"
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
                Ongoing Optimization
              </h3>
              <ul className="space-y-2 text-slate-600">
                {[
                  "Monthly system monitoring and optimization",
                  "New lead source integrations",
                  "Advanced reporting and analytics",
                  "Customer communication automation setup",
                  "Strategic growth guidance"
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

      {/* Form Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Discovery Questionnaire
            </h2>
            <div className="max-w-3xl mx-auto mb-6">
              <p className="text-slate-600 mb-4">
                This form prepares us for your 60–90 minute discovery and assessment call. Within 1–2 weeks 
                after that call, you&apos;ll receive your step-by-step Revenue Operations Roadmap with specific recommendations.
              </p>
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl">
                <p className="text-teal-800 text-sm">
                  <strong>Please note:</strong> The full assessment is a paid engagement ($500–$2,000) that includes 
                  your discovery call, detailed analysis, and custom roadmap with ROI projections.
                </p>
              </div>
            </div>
          </div>

          {/* Assessment Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <AssessmentForm />
          </div>
        </div>
      </section>

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
                title: "Strategy Call",
                description: "60-90 minute discovery and assessment call to dive deeper"
              },
              {
                number: "3",
                title: "Recommendations",
                description: "Custom roadmap delivered ~1 week after scheduled call"
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