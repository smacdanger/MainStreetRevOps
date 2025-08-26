'use client';

import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function Stack() {
  // Primary tools - main integrations
  const primaryTools = [
    'OpenAI', 'Zapier', 'HubSpot', 'Pipedrive', 'QuickBooks', 'CallRail',
    'OpenPhone', 'Calendly', 'PandaDoc', 'Looker Studio', 'Power BI', 'Tally'
  ];

  // Trade-specific tools
  const tradeTools = [
    'AccuLynx', 'JobNimbus', 'ServiceTitan', 'Housecall Pro', 'CompanyCam',
    'SumoQuote', 'Stripe', 'Square', 'Podium', 'Birdeye'
  ];

  const stackRecipes = [
    {
      title: "Starter Stack",
      subtitle: "Solo–5 team members",
      description: "Perfect for small teams just getting started with sales automation",
      tools: "HubSpot/Pipedrive, OpenPhone, CallRail, Tally, Calendly, PandaDoc, QuickBooks, Zapier+OpenAI",
      goal: "Automate lead capture and basic follow-up",
      price: "$150-500/month"
    },
    {
      title: "Growth Stack", 
      subtitle: "5–20 team members",
      description: "Comprehensive automation for growing businesses with dedicated sales teams",
      tools: "HubSpot, Pipedrive, CallRail, OpenPhone, PandaDoc, Power BI, Zapier+OpenAI, trade-specific CRM",
      goal: "Full sales funnel automation with reporting",
      price: "$500-1,500/month"
    },
    {
      title: "Enterprise Stack",
      subtitle: "20+ team members", 
      description: "Advanced integrations and custom automation for established businesses",
      tools: "Full HubSpot suite, custom integrations, Power BI/Looker Studio, advanced Zapier workflows",
      goal: "Complete revenue operations platform",
      price: "$1,500+/month"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        title="Integrations & Tools We Work With"
        description="We pick the right stack for your business. No lock-in. No rip-and-replace."
        variant="minimal"
        className="py-16"
      />

      {/* Primary Tools Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Primary Integrations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Core tools we integrate to build your complete revenue operations stack
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {primaryTools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200 hover:border-slate-300 flex items-center justify-center"
              >
                <div className="text-slate-700 font-semibold text-center text-sm">
                  {tool}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade-Specific Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Also Integrates With
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-specific tools for contractors, service providers, and specialized businesses
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tradeTools.map((tool, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition-colors duration-200 border border-slate-200 flex items-center justify-center"
              >
                <div className="text-slate-600 font-medium text-center text-sm">
                  {tool}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Recipes */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Stack Recipes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pre-configured tool combinations designed for different business sizes and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stackRecipes.map((recipe, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 hover:border-teal-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {recipe.title}
                  </h3>
                  <div className="text-teal-600 font-medium text-sm mb-2">
                    {recipe.subtitle}
                  </div>
                  <div className="text-slate-500 font-medium text-sm">
                    {recipe.price}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Core Tools:</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {recipe.tools}
                  </p>
                </div>
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-sm font-medium text-slate-900 mb-1">Goal:</div>
                  <div className="text-sm text-slate-600">{recipe.goal}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Stack?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss which tools and integrations will work best for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
            >
              Start Discovery Assessment
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}