import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
              Strategic Partnership
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We Design the System That Works for YOU
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strategic automation using your preferred tools and platforms. We implement, you own. No vendor lock-in, no ongoing fees required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Setup & Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300 motion-safe"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Strategic Implementation & Setup
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We analyze your current process, design the optimal system using tools you prefer, then implement and transfer ownership to you.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                {[
                  "🔍 Complete lead flow audit and gap analysis",
                  "🛠️ Tool selection based on YOUR business needs", 
                  "📞 Custom integration — no more missed opportunities",
                  "⚙️ Automated follow-up sequences tailored to your process",
                  "📚 Team training and complete documentation",
                  "🎯 Full system ownership — it's yours forever"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-teal-600 mr-3 mt-1 flex-shrink-0 text-sm">
                      {feature.split(' ')[0]}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.substring(feature.indexOf(' ') + 1)}</p>
                  </div>
                ))}
              </div>
              
              <Link
                href="/assessment"
                className="w-full bg-teal-600 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-200 block hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                aria-label="Get your strategic assessment"
              >
                Get Strategic Assessment
              </Link>
            </div>
          </motion.div>

          {/* Ongoing Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300 motion-safe"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Optional Strategic Partnership
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ongoing strategic guidance to expand your automation capabilities as your business grows. Completely optional after initial setup.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                {[
                  "📊 Monthly performance optimization consulting",
                  "🔗 New tool integrations as you expand",
                  "📈 Advanced analytics and reporting strategy", 
                  "⚡ Additional automation workflow design",
                  "🎯 Strategic guidance on scaling operations",
                  "📞 Priority consulting and technical support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-600 mr-3 mt-1 flex-shrink-0 text-sm">
                      {feature.split(' ')[0]}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.substring(feature.indexOf(' ') + 1)}</p>
                  </div>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-200 block hover:bg-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                aria-label="Learn about ongoing strategic partnership"
              >
                Discuss Strategic Partnership
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Checkpoint */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-center motion-safe"
        >
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Stop Losing Leads to Poor Follow-Up?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get a strategic assessment that identifies exactly where your leads are falling through the cracks and provides a custom implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessment"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Strategic Assessment
              </Link>
              <Link
                href="/tco-calculator"
                className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-50 transition-all duration-300 inline-block"
              >
                Calculate Your Current Loss
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;