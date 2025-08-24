import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About - MainStreet RevOps",
  description: "Learn about our founder's sales executive background and mission to help SMBs achieve measurable ROI through AI and better processes.",
  openGraph: {
    title: "About - MainStreet RevOps",
    description: "Learn about our founder's sales executive background and mission to help SMBs achieve measurable ROI through AI and better processes.",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
        </div>
        <div className="absolute top-10 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About MainStreet RevOps
          </h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Bringing enterprise-level sales intelligence to small and mid-sized businesses
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,8L48,12C96,16,192,24,288,24C384,24,480,16,576,9.3C672,3,768,13,864,17.3C960,21,1056,19,1152,21.3C1248,24,1344,32,1392,36L1440,40L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
          />
        </svg>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I&apos;ve spent over 15 years in enterprise sales at companies like Red Hat, GitHub, and Microsoft, 
                  where I learned how successful businesses really make money and scale. I&apos;ve seen firsthand 
                  the power of data-driven sales processes, sophisticated automation, and the teams dedicated 
                  to sales operations that make it all work.
                </p>
                <p>
                  But here&apos;s what makes my approach different: I&apos;ve also worked inside blue-collar 
                  businesses—contractors, mechanic shops, and service providers. I&apos;ve even owned and operated 
                  my own business in that space. I understand the real-world challenges these companies face: 
                  tight margins, manual processes, and the constant juggle between working in the business 
                  and working on the business.
                </p>
                <p>
                  That&apos;s why I founded MainStreet RevOps. I bring enterprise-level expertise and real small 
                  business experience together to help SMBs adopt simple, effective AI and systems that grow 
                  revenue without unnecessary complexity. No jargon, no over-engineering—just proven strategies 
                  that work for businesses like yours.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Experience Highlights</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Enterprise sales experience at Red Hat, GitHub, and Microsoft",
                  "Hands-on experience in blue-collar businesses (contractors, mechanics)", 
                  "Owned and operated my own service-based business",
                  "Implemented CRM systems for 50+ person sales teams",
                  "Managed $10M+ annual revenue pipelines",
                  "Expert in bridging enterprise strategy with small business reality"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#f8fafc" 
            d="M0,40Q720,20,1440,40L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Mission Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              To help small and mid-sized businesses achieve measurable ROI through intelligent 
              sales processes and AI-powered automation—without the complexity and overhead 
              that big companies require.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Measurable Results",
                description: "Every solution we implement comes with clear metrics and ROI tracking."
              },
              {
                icon: "⚡",
                title: "Fast Implementation", 
                description: "Quick wins and rapid deployment so you see results within weeks, not months."
              },
              {
                icon: "🎯",
                title: "Results-Focused",
                description: "We&apos;re not here to sell you technology. We&apos;re here to grow your business."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,40L1440,0L1440,40Z"
          />
        </svg>
      </div>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Our Values
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Practical Solutions",
                description: "We believe in solutions that work in the real world, not just in theory. Every recommendation is tested, practical, and designed for busy business owners."
              },
              {
                title: "Transparent Communication",
                description: "No jargon, no overselling. We explain what we&apos;re doing, why we&apos;re doing it, and what results you can expect in clear, straightforward terms."
              },
              {
                title: "Long-term Partnership",
                description: "We&apos;re not looking for one-time projects. We want to be your trusted advisor as your business grows and evolves."
              }
            ].map((value, index) => (
              <div key={index} className="border-l-4 border-teal-600 pl-6 group hover:border-teal-700 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#0f172a" 
            d="M0,0Q720,20,1440,0L1440,40L0,40Z"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Let&apos;s discuss how we can transform your sales operations and drive real growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Schedule a Discovery Call
            </Link>
            <Link
              href="/assessment"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors duration-200 inline-block"
            >
              Start with Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}