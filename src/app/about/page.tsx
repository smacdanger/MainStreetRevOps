import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - MainStreet RevOps",
  description: "Learn about our founder's sales executive background and mission to help SMBs achieve measurable ROI through AI and better processes.",
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About MainStreet RevOps
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Bringing enterprise-level sales intelligence to small and mid-sized businesses
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  After 15 years as a sales executive in the technology sector, I&apos;ve seen firsthand 
                  how the right processes and tools can transform a business. I&apos;ve worked with Fortune 500 
                  companies that had entire teams dedicated to sales operations, data analysis, and 
                  process optimization.
                </p>
                <p>
                  But I also noticed a gap. Small to mid-sized businesses—the backbone of our economy—often 
                  lack access to these same strategic advantages. They&apos;re competing with larger companies 
                  while operating with outdated systems, manual processes, and limited visibility into 
                  their sales performance.
                </p>
                <p>
                  That&apos;s why I founded MainStreet RevOps. To democratize access to enterprise-level 
                  sales intelligence and bring AI-powered solutions to businesses that need them most.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  15+ years in B2B sales leadership roles
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Implemented CRM systems for 50+ person sales teams
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Managed $10M+ annual revenue pipelines
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Expert in sales process optimization and automation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Specialized in integrating sales, marketing, and finance systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To help small and mid-sized businesses achieve measurable ROI through intelligent 
              sales processes, AI-powered automation, and strategic technology integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📈
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable Results</h3>
              <p className="text-gray-600">
                Every solution we implement comes with clear metrics and ROI tracking.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">
                Quick wins and rapid deployment so you see results within weeks, not months.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-Focused</h3>
              <p className="text-gray-600">
                We&apos;re not here to sell you technology. We&apos;re here to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Solutions</h3>
              <p className="text-gray-600">
                We believe in solutions that work in the real world, not just in theory. 
                Every recommendation is tested, practical, and designed for busy business owners.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Communication</h3>
              <p className="text-gray-600">
                No jargon, no overselling. We explain what we&apos;re doing, why we&apos;re doing it, 
                and what results you can expect in clear, straightforward terms.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-term Partnership</h3>
              <p className="text-gray-600">
                We&apos;re not looking for one-time projects. We want to be your trusted advisor 
                as your business grows and evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let&apos;s discuss how we can transform your sales operations and drive real growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-block"
            >
              Schedule a Discovery Call
            </a>
            <a
              href="/assessment"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-block"
            >
              Start with Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}