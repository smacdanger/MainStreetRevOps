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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Us?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise systems experience, contractor-focused solutions. I&apos;ve helped companies manage millions 
            in revenue — now I bring that expertise to contractors who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Experience Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Why This Matters for Your Business
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: "🏗️",
                  title: "Home Improvement Industry Experience",
                  description: "I've worked inside contractor businesses and understand the real challenges: tight margins, manual processes, and the constant juggle between working in vs. on the business."
                },
                {
                  icon: "💼",
                  title: "Enterprise Sales Background",
                  description: "10 years at companies like Red Hat and GitHub/Microsoft, managing $20M+ pipelines and scaling product lines from $0 to millions in annual revenue."
                },
                {
                  icon: "🎯",
                  title: "Bridge Between Worlds",
                  description: "I bring enterprise-level expertise without the complexity. Simple, effective systems that work for real contractors, not just Fortune 500 companies."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Revenue Growth Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Track Record</h3>
                
                {/* Growth metrics */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">$20M+</div>
                    <div className="text-slate-700 font-medium">Annual Revenue Pipelines Managed</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <div className="text-3xl font-bold text-teal-600 mb-2">0 → Millions</div>
                    <div className="text-slate-700 font-medium">Product Lines Scaled</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <div className="text-3xl font-bold text-slate-600 mb-2">10+ Years</div>
                    <div className="text-slate-700 font-medium">Enterprise + SMB Experience</div>
                  </motion.div>
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200">
                  <p className="text-slate-700 font-medium text-sm">
                    Making enterprise-level systems accessible to everyday contractors
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Credibility indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
            <h4 className="text-lg font-semibold text-slate-900 mb-6">Recognition & Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Presidents Club Winner",
                  description: "Top sales performance recognition"
                },
                {
                  title: "Self-Sourced 7-Figure Deals",
                  description: "Proven ability to generate and close large opportunities"
                },
                {
                  title: "Multi-Industry Success",
                  description: "Enterprise tech, home improvement, and real estate"
                }
              ].map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-slate-900 mb-2">{achievement.title}</div>
                  <div className="text-slate-600 text-sm">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;