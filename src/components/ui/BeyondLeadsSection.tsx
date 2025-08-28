import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const BeyondLeadsSection: React.FC = () => {
  return (
    <section id="beyond-leads" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Complete RevOps
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Leads Are Just the Start
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Contractors don&apos;t just lose money from missed leads — they also lose it from broken systems, 
            billing headaches, and hidden cost overruns. We help close those gaps too.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: "🔗",
              title: "QuickBooks + CRM Integration",
              description: "Seamless data flow between your accounting and customer management systems that actually works",
              benefits: ["Eliminate double data entry", "Real-time financial visibility", "Automated invoicing workflows"]
            },
            {
              icon: "📊",
              title: "Automated Supplier Price Tracking",
              description: "Monitor supplier costs and protect your margins from unexpected price fluctuations",
              benefits: ["Price change alerts", "Margin protection", "Supplier performance metrics"]
            },
            {
              icon: "🔍",
              title: "Invoice Verification System", 
              description: "Stop unauthorized charges and billing errors before they impact your bottom line",
              benefits: ["Automated invoice matching", "Fraud detection", "Cost control reports"]
            },
            {
              icon: "📞",
              title: "Smart Call Routing & Distribution",
              description: "Intelligent lead distribution and round-robin systems to maximize team efficiency",
              benefits: ["Balanced workload distribution", "Performance tracking", "Overflow management"]
            }
          ].map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost Savings Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Hidden Revenue Leaks We Fix
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                problem: "Billing Errors",
                cost: "$2K-$15K/month",
                solution: "Automated verification"
              },
              {
                problem: "Margin Erosion",
                cost: "$5K-$25K/month", 
                solution: "Price tracking alerts"
              },
              {
                problem: "Duplicate Data Entry",
                cost: "20-40 hrs/month",
                solution: "System integration"
              },
              {
                problem: "Uneven Lead Distribution",
                cost: "15-30% efficiency loss",
                solution: "Smart routing"
              }
            ].map((leak, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm">
                  <div className="text-red-500 font-bold text-lg mb-1">{leak.cost}</div>
                  <div className="text-slate-600 text-sm mb-3">{leak.problem}</div>
                  <div className="text-xs text-green-600 font-medium">✓ {leak.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Plug All the Revenue Leaks?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Start with our Lead Flow Audit to identify your biggest opportunities. 
              We&apos;ll show you exactly where money is slipping through the cracks.
            </p>
            <CTAButton href="/assessment" variant="accent" size="lg">
              Start With a Lead Flow Audit
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondLeadsSection;