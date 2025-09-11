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
        description="We help you connect and optimize the tools you already use—no learning curve, just better results you can see in your calendar and bank account. Our TCO calculator shows you exactly how much you could save and earn."
        primaryCTA={{
          text: "Get Your TCO Analysis",
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

      {/* TCO Calculator Callout Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              💰 Find Out How Much Money You&apos;re Leaving on the Table
            </h2>
            <p className="text-xl mb-6 text-teal-100">
              Our Total Cost of Ownership (TCO) calculator reveals the exact dollar amounts you could save 
              and earn by optimizing your current systems—no guesswork, just real numbers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-300 mb-2">📊</div>
                <h3 className="font-semibold mb-2">Hidden Costs</h3>
                <p className="text-sm text-slate-200">See what manual processes are actually costing you in time and missed revenue</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-green-300 mb-2">💵</div>
                <h3 className="font-semibold mb-2">Revenue Potential</h3>
                <p className="text-sm text-slate-200">Calculate how much more you could earn with faster lead response</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-300 mb-2">🎯</div>
                <h3 className="font-semibold mb-2">Conservative Estimates</h3>
                <p className="text-sm text-slate-200">Get realistic, conservative projections you can count on</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessment"
                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-colors duration-200 shadow-lg"
              >
                Get Your TCO Analysis
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 transition-colors duration-200"
              >
                Have Questions First?
              </Link>
            </div>
          </div>
        </div>
      </section>

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
