'use client';

import React from 'react';
import Hero from '@/components/ui/Hero';
import ProblemSection from '@/components/ui/ProblemSection';
import SolutionSection from '@/components/ui/SolutionSection';
import WhyUsSection from '@/components/ui/WhyUsSection';
import CaseStudiesSection from '@/components/ui/CaseStudiesSection';
import BeyondLeadsSection from '@/components/ui/BeyondLeadsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Priority Path */}
      <Hero
        badge="Smart Technology and AI for Contractors"
        title="Turn More Leads Into Revenue — Without Another Platform"
        description="We design and implement custom AI automation using the tools that work best for YOUR business. Your system, your data, your success."
        subtext="Strategic partnership, not software subscription"
        primaryCTA={{
          text: "Get Your Lead Flow Assessment",
          href: "/assessment"
        }}
        secondaryCTA={{
          text: "See How It Works", 
          href: "#solution"
        }}
        variant="gradient"
      />

      {/* Problem Section - Priority Path */}
      <ProblemSection />

      {/* Solution Section - Priority Path */}
      <div id="solution">
        <SolutionSection />
      </div>

      {/* Testimonials & Results - Priority Path */}
      <div id="testimonials">
        <CaseStudiesSection />
      </div>

      {/* TCO Calculator Section - Interactive Priority Element */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Free Strategic Analysis
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Calculate What Poor Follow-Up Is Really Costing You
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            See exactly how much revenue you&apos;re losing to manual processes, missed calls, and delayed responses. 
            Plus get ROI projections for strategic automation.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold text-slate-900">Complete Analysis</div>
                <div className="text-sm text-slate-600">Hidden costs, missed revenue, ROI projections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-slate-900">5-Minute Setup</div>
                <div className="text-sm text-slate-600">Quick inputs, instant detailed breakdown</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🆓</div>
                <div className="font-semibold text-slate-900">Completely Free</div>
                <div className="text-sm text-slate-600">No email required, instant results</div>
              </div>
            </div>
            
            <Link
              href="/tco-calculator"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free TCO Calculator
            </Link>
          </div>
          
          <p className="text-sm text-slate-500">
            Want the full picture? Our <Link href="/assessment" className="text-blue-600 hover:text-blue-800 underline">professional assessment</Link> includes this analysis plus a custom implementation roadmap.
          </p>
        </div>
      </section>

      {/* Secondary Sections - Collapsible/Condensed */}
      <div id="why-us">
        <WhyUsSection />
      </div>

      <div id="beyond-leads">
        <BeyondLeadsSection />
      </div>

      {/* Streamlined FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Quick Answers
            </h2>
            <p className="text-slate-600">
              Common questions about our strategic implementation process
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How quickly will I see results?",
                answer: "Most contractors see immediate improvements in lead response times within the first week. Full ROI typically appears within 30-60 days of implementation."
              },
              {
                question: "Do I need to be technical?",
                answer: "Not at all. We handle all strategy, setup, and integration. Our systems are designed for busy contractors who want results, not complexity."
              },
              {
                question: "What if I already have a CRM?",
                answer: "Perfect! We optimize and integrate with your existing tools whenever possible. Our goal is strategic improvement, not expensive platform replacements."
              },
              {
                question: "What's the ongoing relationship?",
                answer: "You own everything we build. Ongoing partnership is optional — many clients operate independently after setup. Strategic optimization is available at $500–$1,500/month."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-300 transition-colors duration-200 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Priority Path */}
      <section id="contact" className="relative bg-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20" aria-hidden="true"></div>
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
        </div>
        <div className="absolute top-10 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-500/20 text-teal-200 border border-teal-400/30">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Your AI Assistant Awaits
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Losing Revenue to Poor Follow-Up
          </h2>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Get a professional assessment that identifies exactly where leads are falling through the cracks and provides your custom AI roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/assessment"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Get your comprehensive lead flow assessment"
            >
              Get Your AI Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-400 text-slate-300 px-10 py-5 rounded-xl font-medium text-lg hover:border-white hover:text-white transition-colors duration-200 inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
              aria-label="Schedule a free 15-minute consultation call"
            >
              Questions? Free 15-Min Chat
            </Link>
          </div>
          
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
            <div className="text-center">
              <div className="text-lg font-bold text-white">Professional</div>
              <div className="text-slate-300 text-sm">Assessment process</div>
            </div>
            <div className="w-px h-8 bg-white/30" aria-hidden="true"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">Custom</div>
              <div className="text-slate-300 text-sm">AI roadmap included</div>
            </div>
            <div className="w-px h-8 bg-white/30" aria-hidden="true"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">$500-$2K</div>
              <div className="text-slate-300 text-sm">Investment range</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
