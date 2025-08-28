import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const SolutionSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
              The Solution
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Two Paths to Lead Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We design and automate sales systems that capture, convert, and grow. 
            You keep the system forever — bring us back only if you want continuous tuning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Setup & Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
          >
            <div className="absolute -top-4 left-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                One-Time Project
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Setup & Implementation
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Complete lead management system designed, built, and delivered. 
                You own it forever with no ongoing subscription required.
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-slate-900">What&apos;s Included:</h4>
                {[
                  "Free Lead Flow Audit & Strategy Session",
                  "Custom CRM Setup & Lead Routing",
                  "Automated Response & Follow-up Sequences",
                  "Integration with Your Current Tools",
                  "Team Training & Documentation",
                  "90-Day Performance Guarantee"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-blue-200 pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">Starting at $15K</div>
                <div className="text-sm text-slate-600 mb-4">One-time investment, yours forever</div>
                <CTAButton href="/assessment" variant="primary" size="md" className="w-full">
                  Book Your Audit
                </CTAButton>
              </div>
            </div>
          </motion.div>

          {/* Ongoing Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl"
          >
            <div className="absolute -top-4 left-8">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Optional Subscription
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ongoing Optimization
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Monthly tuning, new integrations, and continuous improvement. 
                Cancel anytime — your system stays with you.
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-slate-900">Monthly Services:</h4>
                {[
                  "Performance Analytics & Reporting",
                  "A/B Testing & Conversion Optimization",
                  "New Lead Source Integrations",
                  "Chatbot & AI Enhancement",
                  "Team Coaching & Best Practices",
                  "Priority Support & Updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-teal-200 pt-4">
                <div className="text-2xl font-bold text-teal-600 mb-2">$3K-$8K/month</div>
                <div className="text-sm text-slate-600 mb-4">Cancel anytime, keep your system</div>
                <CTAButton href="/assessment" variant="secondary" size="md" className="w-full">
                  Start With Audit
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              Not Sure Which Path is Right?
            </h4>
            <p className="text-slate-600 mb-4">
              Start with our free Lead Flow Audit. We&apos;ll analyze your current process and recommend the best approach for your business.
            </p>
            <CTAButton href="/assessment" variant="accent" size="lg">
              Get Your Free Lead Flow Audit
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;