'use client';

import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function Home() {
  const valuePillars = [
    {
      title: "Faster Lead Response",
      description: "AI-powered automation ensures every lead is contacted within minutes, not hours or days.",
      outcome: "Capture leads instantly for 300% faster contact speed.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Sales Team Accountability",
      description: "Real-time tracking and reporting systems keep your team focused on high-value activities.",
      outcome: "Ensure every lead is followed up, every time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Seamless Integration",
      description: "Streamline operations with intelligent integrations between CRM, accounting, and communication tools.",
      outcome: "Reduce wasted time by syncing tools automatically.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        badge="AI-Powered Revenue Growth"
        title="Transform Your Sales Process"
        subtitle="AI-Powered Revenue Growth"
        description="Intelligent automation and strategic consulting that helps small to mid-sized businesses increase revenue by 30% within 90 days."
        subtext="Based on client results across SMB sales processes."
        primaryCTA={{
          text: "Schedule Free Intro Call",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Complete Discovery Questionnaire", 
          href: "/assessment"
        }}
        variant="gradient"
      />

      {/* Value Pillars */}
      <section className="py-16 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose MainStreet RevOps?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We focus on three core areas that deliver immediate and measurable results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-xl mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                    <div className="text-slate-700 group-hover:text-teal-700 transition-colors duration-300">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <div className="text-teal-600 font-medium mb-4 text-sm">
                    • {pillar.outcome}
                  </div>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A simple 3-step process to transform your sales operations and revenue growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Free Intro Call",
                description: "30-minute discovery call to understand your current challenges and goals",
                outcome: "Get clarity on your biggest revenue opportunities",
                price: "Free"
              },
              {
                step: "2", 
                title: "Paid Assessment",
                description: "Comprehensive analysis of your sales process, tools, and team performance",
                outcome: "Receive detailed roadmap with ROI projections",
                price: "$1,500–$3,000"
              },
              {
                step: "3",
                title: "Implementation & Retainer",
                description: "We execute the plan and provide ongoing optimization and support",
                outcome: "Measurable revenue growth within 90 days",
                price: "Starting at $5K/month"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-300 hover:-translate-y-2">
                  <div className="absolute -top-4 left-8">
                    <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <div className="text-teal-600 font-medium mb-4 text-sm">
                      {step.price}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="border-t border-slate-200 pt-4">
                      <div className="text-sm font-medium text-slate-900 mb-1">Outcome:</div>
                      <div className="text-sm text-teal-600 font-medium">{step.outcome}</div>
                    </div>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 -right-6 z-10">
                    <svg className="w-12 h-6 text-teal-300" fill="currentColor" viewBox="0 0 24 12">
                      <path d="M18 6L22 2L24 4L20 8L24 12L22 14L18 10L14 14L12 12L16 8L12 4L14 2L18 6Z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,40Q720,20,1440,40L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Case Studies & Proof */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Results
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Real Results
            </h2>
            <div className="bg-gradient-to-r from-slate-50 to-teal-50 p-8 rounded-2xl border border-slate-200 max-w-4xl mx-auto mb-8">
              <blockquote className="text-xl text-slate-700 italic mb-4">
                &ldquo;Cut lead response from hours to seconds; $500k closed in a quarter for a contractor&rdquo;
              </blockquote>
              <p className="text-slate-600">
                Case studies coming soon — ask us about current projects.
              </p>
            </div>
          </div>
          
          {/* Minimal Tech Logos */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-8">Powered by industry-leading tools</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto mb-6">
              {['OpenAI', 'Zapier', 'HubSpot', 'QuickBooks', 'CallRail', 'OpenPhone'].map((tool, index) => (
                <div key={index} className="flex items-center justify-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors opacity-70 hover:opacity-100">
                  <div className="text-slate-600 font-medium text-sm">{tool}</div>
                </div>
              ))}
            </div>
            <Link 
              href="/stack" 
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200 inline-flex items-center"
            >
              See full stack 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about our process and services
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "How quickly can I see results?",
                answer: "Most clients see immediate improvements in lead response times within the first week. Comprehensive ROI typically becomes visible within 30-60 days of implementation."
              },
              {
                question: "Do I need technical expertise on my team?",
                answer: "Not at all. We handle all technical implementation and provide comprehensive training. Our solutions are designed to be user-friendly for non-technical business owners and sales teams."
              },
              {
                question: "What if I already have a CRM system?",
                answer: "We work with your existing systems whenever possible. Our goal is to optimize what you have and integrate new solutions seamlessly rather than forcing expensive platform changes."
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

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#0f172a" 
            d="M0,40L1440,0L1440,40Z"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-500/20 text-teal-200 border border-teal-400/30">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Money-Back Guarantee
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Increase your win rate and revenue in 90 days — or your money back, guaranteed.
          </h2>
          <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Start with our comprehensive discovery questionnaire to get personalized recommendations 
            and begin your journey to measurable revenue growth.
          </p>
          <Link
            href="/assessment"
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-block shadow-lg hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-teal-500/50 border-2 border-teal-400 hover:border-teal-300"
          >
            Complete Discovery Questionnaire
          </Link>
        </div>
      </section>
    </div>
  );
}
