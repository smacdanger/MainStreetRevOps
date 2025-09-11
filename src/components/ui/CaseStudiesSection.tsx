import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-12">
          <div className="mb-4 md:mb-3">
            <span className="inline-flex items-center px-4 py-2 md:px-3 md:py-1.5 rounded-full text-sm md:text-xs font-medium bg-orange-100 text-orange-800">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 md:mb-4">
            Real Results from Modern Operations
          </h2>
          <p className="text-lg md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Early clients are transforming their businesses with automated systems. Here&apos;s what happens when you modernize operations.
          </p>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-50 to-red-50 p-8 md:p-6 rounded-2xl border border-orange-200 mb-12 md:mb-10"
        >
          <h3 className="text-2xl md:text-xl font-bold text-slate-900 mb-6 md:mb-4 text-center">
            Early Results Across Implementations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
            {[
              { metric: "300%", label: "Faster Response" },
              { metric: "85%", label: "Less Manual Work" },
              { metric: "40%", label: "More Conversions" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-3xl font-bold text-slate-900 mb-2">{stat.metric}</div>
                <div className="text-base md:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Checkpoint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl md:text-xl font-bold text-slate-900 mb-4 md:mb-3">
              Want to become a featured client? Get your assessment today.
            </h3>
            <p className="text-slate-600 mb-6 md:mb-4 max-w-2xl mx-auto leading-relaxed text-base md:text-sm">
              See exactly how much revenue you&apos;re losing and where, then get a custom roadmap to fix it.
              <br />
              <span className="text-sm md:text-xs italic">*Ask about discounted rates in exchange for case studies*</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-3 justify-center">
              <Link
                href="/assessment"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 md:px-6 md:py-3 rounded-xl font-bold text-lg md:text-base hover:from-orange-600 hover:to-red-600 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Your Assessment
              </Link>
              <Link
                href="/tco-calculator"
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 md:px-6 md:py-3 rounded-xl font-semibold text-lg md:text-base hover:bg-orange-50 transition-all duration-300 inline-block"
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

export default CaseStudiesSection;