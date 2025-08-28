import React from 'react';
import { motion } from 'framer-motion';

const OutcomesSection: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
      </div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-200 border border-green-400/30">
              Real Results
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Growth We&apos;ve Delivered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
          >
            Real-world results from contractors who transformed their lead follow-up and sales operations.
          </motion.p>
        </div>

        {/* Growth Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              metric: "$0 → $100K+",
              period: "First Year",
              description: "New contractors breaking six figures",
              icon: "🚀"
            },
            {
              metric: "$100K → $3M",
              period: "Scale Phase",
              description: "Established contractors hitting multi-million",
              icon: "📈"
            },
            {
              metric: "20-30%",
              period: "Year-over-Year",
              description: "Consistent annual growth rate",
              icon: "📊"
            },
            {
              metric: "Up to 100%",
              period: "Month-over-Month",
              description: "Peak growth periods achieved",
              icon: "⚡"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
              <div className="text-teal-300 font-medium mb-2">{stat.period}</div>
              <div className="text-slate-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Growth Chart Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Typical Growth Timeline</h3>
          
          {/* Timeline visualization */}
          <div className="relative">
            <div className="flex justify-between items-end h-64 mb-8">
              {[
                { label: "Month 1", height: "20%", revenue: "$5K" },
                { label: "Month 3", height: "35%", revenue: "$15K" },
                { label: "Month 6", height: "55%", revenue: "$35K" },
                { label: "Month 9", height: "75%", revenue: "$60K" },
                { label: "Month 12", height: "100%", revenue: "$100K+" }
              ].map((period, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="text-white font-bold mb-2">{period.revenue}</div>
                  <div 
                    className="bg-gradient-to-t from-teal-500 to-green-400 w-full max-w-16 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ height: period.height }}
                  ></div>
                  <div className="text-slate-300 text-sm mt-2 text-center">{period.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Credibility Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Presidents Club Winner",
              description: "Top 1% sales performer at enterprise software company",
              icon: "🏆"
            },
            {
              title: "7-Figure Self-Sourced Deals",
              description: "Personal track record of closing million-dollar contracts",
              icon: "💰"
            },
            {
              title: "Enterprise + SMB Success",
              description: "Proven systems that scale from startups to Fortune 500",
              icon: "🎯"
            }
          ].map((credential, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">{credential.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{credential.title}</h4>
              <p className="text-slate-300 text-sm">{credential.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;