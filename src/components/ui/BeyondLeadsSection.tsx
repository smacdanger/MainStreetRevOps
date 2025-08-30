import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BeyondLeadsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              What's Next
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your AI Assistant Roadmap
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lead automation is just the beginning. Here's how your AI assistant grows with your business.
          </p>
        </div>

        {/* AI Roadmap Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              phase: "Phase 1",
              title: "Lead Follow-Up AI",
              timeframe: "Weeks 1-4",
              icon: "🎯",
              color: "from-teal-500 to-teal-600",
              bgColor: "bg-teal-50",
              borderColor: "border-teal-200",
              features: [
                "Instant lead response (60 seconds)",
                "Smart call routing & voicemail",
                "Automated follow-up sequences",
                "Lead qualification scoring"
              ]
            },
            {
              phase: "Phase 2", 
              title: "Business Operations AI",
              timeframe: "Months 2-6",
              icon: "🏗️",
              color: "from-blue-500 to-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
              features: [
                "AI proposal generation",
                "Smart scheduling & dispatch",
                "Inventory & supplier tracking",
                "Cost analysis & margin alerts"
              ]
            },
            {
              phase: "Phase 3",
              title: "Growth & Forecasting AI", 
              timeframe: "Month 6+",
              icon: "🚀",
              color: "from-purple-500 to-purple-600",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-200",
              features: [
                "Predictive revenue forecasting",
                "AI chatbots for customers",
                "Automated reporting dashboards",
                "Strategic growth recommendations"
              ]
            }
          ].map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${phase.bgColor} p-6 rounded-2xl border ${phase.borderColor} relative overflow-hidden group hover:shadow-lg transition-all duration-300 motion-safe`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{phase.icon}</span>
                  <span className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-full">
                    {phase.timeframe}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {phase.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm">
                      <span className="text-slate-400 mr-2 mt-1">•</span>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Capabilities - Condensed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Beyond Leads: What We Can Automate Today
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "QuickBooks Integration",
                description: "Stop double-entering data. Auto-sync between sales and accounting."
              },
              {
                icon: "📊",
                title: "Supplier Price Tracking",
                description: "Get alerts when material costs spike before they hurt margins."
              },
              {
                icon: "✅",
                title: "Invoice Verification",
                description: "Auto-check for billing errors and unauthorized charges."
              },
              {
                icon: "📞",
                title: "Smart Call Routing",
                description: "Round-robin distribution ensures no call goes unanswered."
              },
              {
                icon: "📈",
                title: "Performance Analytics",
                description: "See which marketing channels actually generate revenue."
              },
              {
                icon: "🔄",
                title: "Workflow Automation",
                description: "Connect all your tools so data flows automatically."
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start group motion-safe"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <span className="text-lg">{capability.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-purple-900 transition-colors duration-300">
                    {capability.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center motion-safe"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Start with Lead Flow, Scale to Full AI Operations
            </h3>
            <p className="text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Most contractors need their lead flow fixed first. Once that's running smoothly, we can automate billing, supplier management, cost control, and any other system that touches your revenue.
            </p>
            <Link
              href="/assessment"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start With Lead Flow Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondLeadsSection;