import React from 'react';
import Link from 'next/link';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            We Set Up Systems That Actually Drive Growth
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We design and implement complete automation workflows using existing tools wherever possible—no expensive platform replacements needed. Just smarter connections that turn manual work into competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Left: What We Build */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Here&apos;s what we automate for you:</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Instant Lead Response & Follow-Up",
                  description: "Never miss another opportunity - automated responses within 60 seconds, 24/7"
                },
                {
                  title: "End-to-End Sales Workflows", 
                  description: "From initial contact to project completion - every step optimized and tracked"
                },
                {
                  title: "Business Intelligence & Analytics",
                  description: "See exactly where your revenue comes from and how to get more"
                },
                {
                  title: "Operational Efficiency Systems",
                  description: "Eliminate manual work, reduce errors, and scale without hiring"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-900">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Results */}
          <div>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">What This Means for Your Business:</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">40%+</div>
                  <p className="text-blue-700 text-sm">Revenue increase from captured opportunities</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">60%</div>
                  <p className="text-blue-700 text-sm">Time savings on manual processes</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">3-6x</div>
                  <p className="text-blue-700 text-sm">ROI within first 90 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/assessment"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            See How This Transforms Your Business
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;