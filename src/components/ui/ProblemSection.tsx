import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
            The Problem
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            You&apos;re Running a Modern Business with Stone Age Systems
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            While your competitors automate their way to growth, you&apos;re still doing everything manually — losing money and opportunities every single day.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-8">
            {/* Left: Lost Opportunities */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-6">Every day you&apos;re missing out on:</h3>
              <div className="space-y-4">
                {[
                  "Leads that could convert with instant response",
                  "Revenue hidden in your existing customer data",
                  "Time savings from automated workflows",
                  "Growth insights from proper analytics",
                  "Competitive advantages from modern tools"
                ].map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Cost of Inaction */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-6">The cost of staying behind:</h3>
              <div className="bg-red-50 p-8 rounded-lg border border-red-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-800 mb-2">$150,000+/year</div>
                  <p className="text-red-700 text-sm mb-4">in lost growth potential</p>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Missed leads (manual response)</span>
                    <span className="font-semibold">$60,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inefficient processes (labor waste)</span>
                    <span className="font-semibold">$48,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Poor customer insights</span>
                    <span className="font-semibold">$36,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Competitive disadvantage</span>
                    <span className="font-semibold">$24,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-600 text-lg">
              The technology exists to transform your operations. The question is: how much longer will you wait while opportunities slip away?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;