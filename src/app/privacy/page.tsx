import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When you visit our website or use our services, we may collect certain information about you, including:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Contact information such as name, email address, and phone number</li>
                <li>Business information you provide in assessment forms</li>
                <li>Usage data and analytics about how you interact with our website</li>
                <li>Communication records when you contact us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Provide and improve our consulting services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant business communications and updates</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
              <p className="text-slate-700 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this privacy policy. We may share information with trusted service providers who assist 
                us in operating our website and conducting our business, as long as they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of the information we have about you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a 
                  href="mailto:Sean@mainstrevops.com" 
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Sean@mainstrevops.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}