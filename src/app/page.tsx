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
      {/* Hero Section */}
      <Hero
        badge="Fix Contractor Lead Follow-Up"
        title="Turn More Leads Into Revenue — Without Hiring More Staff"
        description="We design and automate sales systems that capture, convert, and grow. You keep the system forever — bring us back only if you want continuous tuning."
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

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <div id="solution">
        <SolutionSection />
      </div>

      {/* Why Us Section */}
      <div id="why-us">
        <WhyUsSection />
      </div>

      {/* Case Studies Section */}
      <div id="case-studies">
        <CaseStudiesSection />
      </div>

      {/* Beyond Leads Section */}
      <div id="beyond-leads">
        <BeyondLeadsSection />
      </div>

      {/* FAQ Section - Streamlined */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-slate-600">
              What contractors typically ask about our process
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly will I see results?",
                answer: "Most contractors see immediate improvements in lead response times within the first week. Full system optimization typically shows measurable ROI within 30-60 days."
              },
              {
                question: "Do I need to be technical to use this?",
                answer: "Not at all. We handle all technical setup and provide training. Our systems are designed for busy contractors who want results, not complexity."
              },
              {
                question: "What if I already have a CRM?",
                answer: "We work with your existing systems whenever possible. Our goal is to optimize what you have, not force expensive changes."
              },
              {
                question: "What's the real cost after the initial setup?",
                answer: "The ongoing optimization is completely optional. Many clients run their systems independently after setup. If you want monthly tuning and new features, that's $1K-3K/month."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-300 transition-colors duration-200 shadow-sm hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
        </div>
        <div className="absolute top-10 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-500/20 text-teal-200 border border-teal-400/30">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Professional Assessment Available
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Fix Your Lead Flow?
          </h2>
          <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Get a professional lead flow assessment that identifies exactly where you&apos;re losing money and provides a custom roadmap to capture more revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-block shadow-lg hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-teal-500/50 border-2 border-teal-400 hover:border-teal-300"
            >
              Get Your Assessment ($1K-$3K)
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-400 text-slate-300 px-10 py-5 rounded-xl font-medium text-lg hover:border-white hover:text-white transition-colors duration-200 inline-block"
            >
              Not Ready? Free 15-Min Chat
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Custom</div>
                <div className="text-slate-300 text-sm">Tailored roadmap</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Actionable</div>
                <div className="text-slate-300 text-sm">Immediate next steps</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">ROI Focused</div>
                <div className="text-slate-300 text-sm">Revenue impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
