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
        badge="AI-Powered Growth for Contractors"
        title="Turn More Leads Into Revenue — Without Another Platform"
        description='We connect the tools you already use and make them work smarter—no rip-and-replace, no learning curve, just results you can see in your calendar and bank account.'
        primaryCTA={{
          text: "Get Your Business Assessment",
          href: "/assessment"
        }}
        secondaryCTA={{
          text: "See How It Works", 
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
                question: "What's the investment?",
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
