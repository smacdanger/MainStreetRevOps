import Link from 'next/link';

export default function Home() {
  const valuePillars = [
    {
      title: "Faster Lead Response",
      description: "AI-powered automation ensures every lead is contacted within minutes, not hours or days.",
      icon: "🚀",
    },
    {
      title: "Sales Team Accountability",
      description: "Real-time tracking and reporting systems keep your team focused on high-value activities.",
      icon: "📊",
    },
    {
      title: "Smarter Cost & System Integration",
      description: "Streamline operations with intelligent integrations between CRM, accounting, and communication tools.",
      icon: "🔧",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Premier Roofing Solutions",
      quote: "Our lead response time went from 4 hours to 15 minutes. We're closing 30% more deals.",
    },
    {
      name: "Mike Chen",
      company: "Midwest HVAC Services", 
      quote: "The AI automation has freed up 10 hours per week that I can focus on growing the business.",
    },
    {
      name: "Lisa Martinez",
      company: "Elite Home Improvements",
      quote: "Finally, I have real visibility into my sales process. Game-changer for accountability.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Sales Growth
              <span className="block text-blue-200">for SMBs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Transform your small to mid-sized business with intelligent sales processes, 
              automated lead management, and strategic technology consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-block"
              >
                Book Your Discovery Call
              </Link>
              <Link
                href="/assessment"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-block"
              >
                Take Our Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MainStreet RevOps?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We focus on three core areas that deliver immediate and measurable results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses that have transformed their sales operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start with our comprehensive discovery questionnaire to get personalized recommendations.
          </p>
          <Link
            href="/assessment"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Complete Discovery Questionnaire
          </Link>
        </div>
      </section>
    </div>
  );
}
