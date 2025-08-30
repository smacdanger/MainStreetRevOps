import React from 'react';
import { motion } from 'framer-motion';

interface WhyUsProps {
  className?: string;
}

const WhyUsSection: React.FC<WhyUsProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-white relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Strategic Partnership
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Strategic Implementation Partners
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We bring nearly 20 years of sales and technology expertise to design solutions that work for YOUR business — not another platform.
          </p>
        </div>

        {/* Key Differentiators - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Why Contractors Choose Our Partnership
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Vendor-Agnostic",
                description: "We select the best tools for YOUR needs, not ours. No platform lock-in or ongoing subscriptions."
              },
              {
                icon: "🏗️",
                title: "You Own Everything",
                description: "Complete system ownership with full documentation. Ongoing partnership is optional."
              },
              {
                icon: "📈",
                title: "Enterprise Methods",
                description: "Fortune 500 automation strategies adapted for Main Street efficiency and budgets."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-200">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;