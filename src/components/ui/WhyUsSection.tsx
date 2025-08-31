import React from 'react';

interface WhyUsSectionProps {
  className?: string;
}

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ className = '' }) => {
  return (
    <section id="why-us" className={`py-16 bg-slate-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Built For Contractors, By Revenue Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We bring 20 years of sales expertise to design solutions that work for YOUR business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "No Platform Lock-In",
              description: "We optimize what you have and recommend only what you need. No forced migrations."
            },
            {
              icon: "🧠",
              title: "20 Years Experience",
              description: "Deep expertise in sales process design, CRM optimization, and business automation."
            },
            {
              icon: "💼",
              title: "Contractor-Focused",
              description: "Built specifically for field service businesses. We understand your unique challenges."
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 mt-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Why Contractors Choose Our Partnership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Strategic Implementation:</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Custom workflow design</li>
                <li>• Integration with existing tools</li>
                <li>• Staff training and adoption</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Ongoing Partnership:</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• 24/7 system monitoring</li>
                <li>• Continuous improvement</li>
                <li>• Strategic consulting</li>
                <li>• Technology updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;