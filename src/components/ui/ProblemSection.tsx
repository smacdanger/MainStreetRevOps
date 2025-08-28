import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800">
              The Problem
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            27+ Leads Per Day, But Most Are Wasted
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Contractors are drowning in leads but struggling to convert them. 
            Hours pass before follow-up, leads go cold, and revenue slips through the cracks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              What&apos;s Happening to Your Leads:
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: "⏰",
                  title: "Slow Response Times",
                  description: "Hours or days to follow up means leads choose competitors who respond in minutes"
                },
                {
                  icon: "📱",
                  title: "Missed Calls & Messages",
                  description: "No system to track, route, or ensure every lead gets contacted"
                },
                {
                  icon: "📊",
                  title: "No Lead Tracking",
                  description: "Can't see which sources work, what converts, or where money is being wasted"
                },
                {
                  icon: "🔄",
                  title: "Manual Follow-up",
                  description: "Sales team overwhelmed trying to manually manage dozens of leads daily"
                }
              ].map((pain, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{pain.icon}</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{pain.title}</h4>
                    <p className="text-slate-600">{pain.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leaking Funnel Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-6 text-center">
                Your Lead Funnel Today
              </h4>
              
              {/* Funnel Visualization */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="bg-blue-500 h-12 w-full rounded-lg flex items-center justify-center text-white font-medium">
                    100 Leads Come In
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="bg-orange-400 h-10 w-4/5 rounded-lg flex items-center justify-center text-white font-medium">
                    80 Get Delayed Response
                  </div>
                  <div className="ml-2 text-red-500 text-sm">❌ 20 lost</div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="bg-yellow-400 h-8 w-3/5 rounded-lg flex items-center justify-center text-white font-medium">
                    60 Actually Contact
                  </div>
                  <div className="ml-2 text-red-500 text-sm">❌ 20 lost</div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="bg-green-500 h-6 w-1/5 rounded-lg flex items-center justify-center text-white font-medium text-sm">
                    20 Convert
                  </div>
                  <div className="ml-2 text-red-500 text-sm">❌ 40 lost</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                <div className="text-red-800 font-bold text-lg">80% Lead Loss</div>
                <div className="text-red-600 text-sm">Most contractors convert only 20% of leads</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;