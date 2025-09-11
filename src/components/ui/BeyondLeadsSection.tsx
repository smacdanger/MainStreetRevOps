import React from 'react';
import Link from 'next/link';

const BeyondLeadsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Implementation Roadmap
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Your Complete Business Integration Project
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We don&apos;t just fix one problem — we systematically connect your entire operation, turning disconnected tools into a unified revenue engine.
          </p>
        </div>

        {/* What We Automate */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
            From Stone Age to Strategic Advantage
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Lead Response Automation",
                description: "Never miss another opportunity — instant responses capture every lead, 24/7"
              },
              {
                icon: "💰", 
                title: "Revenue Operations Integration",
                description: "QuickBooks, CRM, and billing systems work together automatically"
              },
              {
                icon: "📊",
                title: "Business Intelligence Systems", 
                description: "Real-time insights into what&apos;s working and what&apos;s costing you money"
              },
              {
                icon: "📞",
                title: "Customer Communication Hub",
                description: "Smart routing, follow-up sequences, and relationship management"
              },
              {
                icon: "⚙️",
                title: "Operational Workflow Automation",
                description: "From estimate to completion — eliminate manual handoffs and errors"
              },
              {
                icon: "📈",
                title: "Growth Strategy Analytics",
                description: "Predictive insights that show you exactly where to invest next"
              }
            ].map((capability, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">{capability.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{capability.title}</h4>
                  <p className="text-slate-600 text-sm">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Approach */}
        <div className="text-center">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Strategic Implementation: Revenue First, Then Scale
            </h3>
            <p className="text-slate-600 mb-4 max-w-3xl mx-auto">
              We start by fixing your biggest revenue leak (usually lead response), then systematically automate every process that touches your bottom line. Each upgrade builds on the last, creating exponential efficiency gains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">Phase 1</div>
                <div className="text-sm text-slate-600">Stop Revenue Leaks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">Phase 2</div>
                <div className="text-sm text-slate-600">Optimize Operations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">Phase 3</div>
                <div className="text-sm text-slate-600">Scale & Intelligence</div>
              </div>
            </div>
          </div>
          
          <Link
            href="/assessment"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Start Your Transformation Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeyondLeadsSection;