import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800">
              The Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Marketing Works. Your Follow-Up Doesn&apos;t.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            You&apos;re generating 20+ leads daily, but 80% slip away. Every missed call is lost revenue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problem Content - Now in card format */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "⏰", title: "Hours between responses", pain: "Lost to faster competitors" },
                { icon: "📞", title: "Missed calls during jobs", pain: "No backup system" },
                { icon: "📝", title: "Manual data entry", pain: "Wastes valuable time" },
                { icon: "🤷", title: "No follow-up system", pain: "Leads go cold" },
                { icon: "📊", title: "Can't track what works", pain: "Wasted ad spend" },
                { icon: "🔄", title: "Inconsistent processes", pain: "Team confusion" }
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-red-50 p-4 rounded-xl border border-red-200 hover:border-red-300 transition-colors motion-safe"
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 flex-shrink-0">{problem.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{problem.title}</h4>
                      <p className="text-sm text-red-700">{problem.pain}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-slate-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2">The Real Cost:</h3>
              <p className="text-slate-700 mb-2">
                If you&apos;re getting 25 leads/month at $5,000 average job value...
              </p>
              <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                <p className="text-red-800 font-bold text-lg">
                  80% loss = $100,000 monthly revenue walking away
                </p>
                <p className="text-red-600 text-sm mt-1">
                  That&apos;s $1.2M annually because you can&apos;t answer the phone while on jobs
                </p>
              </div>
            </div>
          </div>

          {/* Visual: Leaking Funnel - Made more compact */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-slate-50 to-red-50 p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden motion-safe"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Your Lead Funnel Reality</h3>
                
                {/* Simplified Funnel Visual */}
                <div className="space-y-4">
                  {/* Top of funnel */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-green-100 px-6 py-3 rounded-lg border border-green-200 motion-safe"
                  >
                    <div className="text-green-800 font-bold">25 Leads/Month</div>
                    <div className="text-green-600 text-sm">Marketing Working</div>
                  </motion.div>
                  
                  {/* Arrow down with loss indicators */}
                  <div className="flex justify-center items-center space-x-2">
                    <span className="text-red-500 text-sm">80% Lost</span>
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Bottom of funnel */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-red-100 px-4 py-3 rounded-lg border border-red-200 motion-safe"
                  >
                    <div className="text-red-800 font-bold">5 Actual Jobs</div>
                    <div className="text-red-600 text-sm">Massive Waste</div>
                  </motion.div>
                </div>
                
                <div className="mt-6 p-4 bg-slate-100 rounded-lg">
                  <p className="text-slate-700 font-medium text-sm">
                    An AI assistant could catch those 20 lost leads automatically
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    Instant responses, follow-up sequences, qualification — 24/7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;