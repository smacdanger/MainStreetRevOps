import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const SocialProofSection: React.FC = () => {
  return (
    <section id="proof" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Coming Soon
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Proof in Progress
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            We&apos;re actively working with early contractor clients — case studies and testimonials coming soon. 
            Stay tuned to see how we help turn lead chaos into predictable revenue.
          </motion.p>
        </div>

        {/* Placeholder Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Case Study #1",
              status: "In Progress",
              preview: "HVAC contractor implementing automated lead routing system",
              timeline: "Results expected Q2 2024"
            },
            {
              title: "Case Study #2", 
              status: "In Progress",
              preview: "Roofing company optimizing follow-up sequences",
              timeline: "Results expected Q2 2024"
            },
            {
              title: "Case Study #3",
              status: "Starting Soon",
              preview: "General contractor scaling from 50K to 500K annually",
              timeline: "Results expected Q3 2024"
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900">{study.title}</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    {study.status}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-3">{study.preview}</p>
                <p className="text-slate-500 text-xs">{study.timeline}</p>
              </div>
              
              {/* Placeholder metrics */}
              <div className="border-t border-slate-200 pt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-slate-400">---</div>
                    <div className="text-xs text-slate-500">Lead Response</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-400">---</div>
                    <div className="text-xs text-slate-500">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            What Early Clients Are Saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The lead response time improvement has been immediate. We went from hours to minutes.",
                author: "Early Client",
                role: "HVAC Contractor",
                status: "Implementation Phase"
              },
              {
                quote: "Finally have visibility into which lead sources actually convert to paying customers.",
                author: "Early Client",
                role: "Roofing Company Owner", 
                status: "System Setup Complete"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="text-slate-600 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-slate-500 mr-3">
                      ?
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                      <div className="text-xs text-yellow-600">{testimonial.status}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Want to be one of our first featured success stories?
            </h3>
            <p className="text-slate-600 mb-6">
              Join our early adopter program and get priority access to our team while building a case study together.
            </p>
            <CTAButton href="/assessment" variant="primary" size="lg">
              Book Your Audit
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;