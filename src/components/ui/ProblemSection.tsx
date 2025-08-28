import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            You're Not Alone — This Problem is Everywhere
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Most contractors lose 60-80% of their leads to poor follow-up. Here's what's really happening:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problem Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800">
                The Problem
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Getting 27+ Leads a Day, But Most Are Wasted
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              You're doing the hard work to generate leads, but without the right systems, 
              most of them slip through the cracks. Sound familiar?
            </p>
            
            <div className="space-y-4">
              {[
                "Hours between lead contact attempts",
                "No follow-up system when someone doesn't answer",
                "Lost leads because the phone rings while you're on a job",
                "Manual data entry eating up valuable time",
                "No way to track which marketing actually works"
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual: Leaking Funnel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-red-50 p-12 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Your Lead Funnel Today</h3>
                
                {/* Funnel Visual */}
                <div className="space-y-6">
                  {/* Top of funnel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-green-100 px-8 py-4 rounded-lg border border-green-200"
                  >
                    <div className="text-green-800 font-bold text-lg">27 Leads/Day</div>
                    <div className="text-green-600 text-sm">Marketing Working Hard</div>
                  </motion.div>
                  
                  {/* Leaking arrows */}
                  <div className="flex justify-between items-center">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                        className="text-red-500 text-center"
                      >
                        <svg className="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="text-xs font-medium">Lost</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Bottom of funnel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-red-100 px-6 py-4 rounded-lg border border-red-200"
                  >
                    <div className="text-red-800 font-bold text-lg">3-5 Actual Jobs</div>
                    <div className="text-red-600 text-sm">80%+ Wasted</div>
                  </motion.div>
                </div>
                
                <div className="mt-8 p-4 bg-slate-100 rounded-lg">
                  <p className="text-slate-700 font-medium text-sm">
                    Your marketing is working. Your follow-up isn't.
                  </p>
                  <p className="text-slate-600 text-sm mt-2">
                    Leads lost because the phone rings while you’re on a job.
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