'use client';

import React from 'react';
import Hero from '@/components/ui/Hero';
import ProblemSection from '@/components/ui/ProblemSection';
import SolutionSection from '@/components/ui/SolutionSection';
import CaseStudiesSection from '@/components/ui/CaseStudiesSection';
import BeyondLeadsSection from '@/components/ui/BeyondLeadsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        badge="AI-Powered Growth for Main Street"
        title="Turn More Leads Into Revenue — Using What You Already Have"
        description="We help you connect and optimize the tools you already use—no learning curve, just better results you can see in your calendar and bank account."
        primaryCTA={{
          text: "Book a Business Assessment",
          href: "/assessment"
        }}
        secondaryCTA={{
          text: "See How We Help", 
          href: "#solution"
        }}
        variant="gradient"
      />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <div id="solution">
        <SolutionSection />
      </div>

      {/* TCO Calculator Callout Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                  🧮 Free Instant Analysis
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                See Exactly What You&apos;re Losing Right Now
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Our assessment includes an instant TCO (Total Cost of Ownership) calculator that reveals 
                your current revenue leaks and shows exactly how much you could save with optimized systems.
              </p>
            </div>

            {/* Sample Results Preview */}
            <div className="bg-slate-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                Typical Results for a $2M/year contractor:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">$8,500</div>
                  <div className="text-sm text-slate-600">Monthly Cost Savings</div>
                  <div className="text-xs text-slate-500">Reduced manual labor & tool consolidation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$12,000</div>
                  <div className="text-sm text-slate-600">Monthly Revenue Gained</div>
                  <div className="text-xs text-slate-500">From capturing missed opportunities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">285%</div>
                  <div className="text-sm text-slate-600">Annual ROI</div>
                  <div className="text-xs text-slate-500">Return on optimization investment</div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">✨ What You&apos;ll Discover:</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-0.5">•</span>
                    Current monthly revenue loss from manual processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-0.5">•</span>
                    Hidden costs of your current tool stack
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-0.5">•</span>
                    Missed opportunities from slow lead response
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-0.5">•</span>
                    Time wasted on duplicate data entry
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">🎯 Instant Results Include:</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    Customized savings projection based on your data
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    Visual breakdown of current vs. optimized costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    ROI timeline for recommended improvements
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    Priority recommendations for maximum impact
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-sm text-slate-600 mb-4">
                Takes 15-20 minutes • Results appear instantly • No commitment required
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="mr-2">🧮</span>
                Get My Free TCO Analysis
              </Link>
              <p className="text-xs text-slate-500 mt-3">
                Optional paid assessment available for detailed roadmap ($500-$2,000)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div id="testimonials">
        <CaseStudiesSection />
      </div>

      {/* Beyond Leads - Full Service Scope */}
      <div id="beyond-leads">
        <BeyondLeadsSection />
      </div>

      {/* Simple FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers about our implementation process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                question: "How quickly will I see results?",
                answer: "Most contractors see immediate improvements in lead response times within the first week. Full ROI typically appears within 30-60 days."
              },
              {
                question: "What if I already have a CRM?",
                answer: "Perfect! We optimize and integrate with your existing tools. Our goal is strategic improvement, not expensive platform replacements."
              },
              {
                question: "What&apos;s the investment?",
                answer: "Professional assessment: $500-$2,000. Implementation varies based on scope. Ongoing optimization is optional at $500-$1,500/month."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Stop Losing Revenue to Outdated Systems
          </h2>
          <p className="text-xl mb-10 text-slate-200 max-w-3xl mx-auto">
            Get a professional assessment that identifies exactly where manual processes are costing you money and opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="bg-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors duration-200"
            >
              Get Your Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-400 text-slate-300 px-10 py-4 rounded-xl font-medium text-lg hover:border-white hover:text-white transition-colors duration-200"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
