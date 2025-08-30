import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real AI Results for Real Contractors
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Early clients are seeing immediate improvements. Here's what happens when AI takes over lead follow-up.
          </p>
        </div>

        {/* Testimonials with Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 relative overflow-hidden"
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 text-xl">
                🏠
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Kitchen & Bath Contractor</h4>
                <p className="text-sm text-slate-500">Q4 2024 Implementation</p>
              </div>
            </div>
            
            <blockquote className="text-slate-700 mb-6 italic">
              "We went from missing 60% of our leads to responding in under 2 minutes. The AI handles everything while we're on jobs. It's like having a full-time sales assistant."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Under 2min</div>
                <div className="text-xs text-slate-500">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">60% → 5%</div>
                <div className="text-xs text-slate-500">Leads Lost</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 relative overflow-hidden"
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-xl">
                🔧
              </div>
              <div>
                <h4 className="font-bold text-slate-900">HVAC Contractor</h4>
                <p className="text-sm text-slate-500">Q1 2025 Implementation</p>
              </div>
            </div>
            
            <blockquote className="text-slate-700 mb-6 italic">
              "Our CRM was a mess. MainStreet RevOps rebuilt everything and automated our entire pipeline. We closed $500K in the first quarter alone."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$500K</div>
                <div className="text-xs text-slate-500">Q1 Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">80%</div>
                <div className="text-xs text-slate-500">Less Manual Work</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Average Results Across Implementations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: "300%", label: "Faster Response", icon: "⚡" },
              { metric: "85%", label: "Less Manual Work", icon: "🤖" },
              { metric: "40%", label: "More Conversions", icon: "📈" },
              { metric: "100%", label: "System Ownership", icon: "🏗️" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.metric}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
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
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              See exactly how much revenue you're losing to poor follow-up, then get a custom AI roadmap to fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessment"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Your AI Assessment
              </Link>
              <Link
                href="/tco-calculator"
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 inline-block"
              >
                Calculate Your Loss First
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;