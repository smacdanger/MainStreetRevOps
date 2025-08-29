import React from 'react';
import { motion } from 'framer-motion';

interface WhyUsProps {
  className?: string;
}

const WhyUsSection: React.FC<WhyUsProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-slate-50 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Proven Results for Real Contractors
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re building our track record with contractors who need results, not just promises. 
            Here&apos;s what we&apos;re delivering:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Timeline Content */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Current Client Results</h3>
            
            <div className="space-y-8">
              {[
                {
                  icon: "🏠",
                  client: "Kitchen & Bath Contractor",
                  result: "Lead response automation implemented",
                  timeframe: "Q4 2024",
                  description: "Cut lead response from hours to seconds, automated follow-up sequences",
                  metric: "Response Time: <2min",
                  metricColor: "text-green-600"
                },
                {
                  icon: "🔧",
                  client: "HVAC Contractor", 
                  result: "Complete CRM overhaul",
                  timeframe: "Q1 2025",
                  description: "CRM integration and pipeline management drove consistent deal flow",
                  metric: "$500K",
                  metricColor: "text-blue-600"
                },
                {
                  icon: "🌿",
                  client: "Landscaping Contractor",
                  result: "System implementation",
                  timeframe: "Starting Q3 2025",
                  description: "Lead scoring and automated nurture sequences being deployed",
                  metric: "In Progress",
                  metricColor: "text-slate-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="relative flex items-start group motion-safe"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-teal-200 rounded-full flex items-center justify-center mr-6 group-hover:border-teal-400 transition-colors duration-300 relative z-10">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200 group-hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">{item.client}</h4>
                        <div className="text-sm text-slate-500 font-medium">{item.timeframe}</div>
                      </div>
                      <div className={`text-2xl font-bold ${item.metricColor}`}>
                        {item.metric}
                      </div>
                    </div>
                    <p className="text-slate-600 mb-2 font-medium">{item.result}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden motion-safe"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">What Makes Us Different</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: "🎯",
                      title: "Contractor-Specific Focus",
                      description: "We understand your industry: tight margins, seasonal cycles, and the need for simple systems that actually work."
                    },
                    {
                      icon: "🚀",
                      title: "Proven Implementation",
                      description: "Not just advice — we build, test, and hand over complete systems that are already generating results."
                    },
                    {
                      icon: "🤝",
                      title: "You Own Everything",
                      description: "No monthly fees or vendor lock-in. We build it, train your team, and it's yours forever."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                      className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm motion-safe"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brief Enterprise Background Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-16 text-center motion-safe"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
            <p className="text-slate-600 text-sm leading-relaxed max-w-3xl mx-auto">
              <strong>Background:</strong> I bring 10+ years of enterprise sales systems experience (Red Hat, GitHub/Microsoft) 
              to MainStreet businesses. The knowledge transfer from managing $20M+ pipelines now helps contractors 
              compete with enterprise-level efficiency — without the complexity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;