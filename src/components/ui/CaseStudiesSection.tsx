import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Real Results from Real Contractors
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re building our case study library with early clients. Here&apos;s what we&apos;re tracking and the results we&apos;re seeing:
          </p>
        </div>

        {/* Current Results Preview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 max-w-4xl mx-auto mb-12 relative overflow-hidden motion-safe"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-orange-50 opacity-50"></div>
          
          <div className="relative z-10 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              &ldquo;Cut lead response from hours to seconds; $500k closed in a quarter for a contractor&rdquo;
            </blockquote>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <p className="text-orange-800 font-medium mb-4">
                Early Results We&apos;re Seeing:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-orange-700">
                  <div className="font-bold text-lg">300%</div>
                  <div>Faster Lead Response</div>
                </div>
                <div className="text-orange-700">
                  <div className="font-bold text-lg">85%</div>
                  <div>Less Manual Work</div>
                </div>
                <div className="text-orange-700">
                  <div className="font-bold text-lg">40%</div>
                  <div>More Leads Converted</div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-600 mt-6 italic">
              Case studies coming soon — ask us about current projects during your audit.
            </p>
          </div>
        </motion.div>

        {/* Future Case Study Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: "🏠",
              title: "General Contractors",
              description: "Kitchen & bathroom remodeling companies scaling lead conversion",
              status: "In Progress"
            },
            {
              icon: "🔧",
              title: "Service Contractors", 
              description: "HVAC and plumbing businesses automating emergency lead response",
              status: "In Progress"
            },
            {
              icon: "🌳",
              title: "Outdoor Contractors",
              description: "Landscaping and roofing companies streamlining seasonal workflows",
              status: "Starting Soon"
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow duration-300 motion-safe"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{category.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{category.description}</p>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                category.status === "In Progress" 
                  ? "bg-orange-100 text-orange-800" 
                  : "bg-slate-100 text-slate-600"
              }`}>
                {category.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="text-center motion-safe"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Want to Be Our Next Success Story?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Join contractors who are already seeing measurable improvements in their lead management and conversion rates.
            </p>
            <Link
              href="/assessment"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;