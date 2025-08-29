import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact - MainStreet RevOps",
  description: "Get in touch with MainStreet RevOps to discuss how we can help transform your sales process with AI-powered solutions.",
  openGraph: {
    title: "Contact - MainStreet RevOps",
    description: "Get in touch with MainStreet RevOps to discuss how we can help transform your sales process with AI-powered solutions.",
    type: "website",
  },
};

export default function Contact() {
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Questions About Your Lead Flow?
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4">
            Free 15-Minute Consultation Available
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            Want to discuss your specific situation before committing to a full assessment? 
            Let&apos;s talk about your goals and see how we can help.
          </p>
          <div className="bg-teal-600/20 border border-teal-400/30 p-4 rounded-xl max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-teal-200 text-sm">
              <strong>Ready for a deeper dive?</strong> Consider our professional assessment ($500–$2,000) for a complete analysis and custom roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-slate-600 mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Tally Form Embed with Enhanced Fallback */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full">
              {/* Loading state */}
              <div id="contact-form-loading" className="flex items-center justify-center h-96 bg-slate-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
                  <p className="text-slate-600">Loading contact form...</p>
                  <p className="text-slate-500 text-sm mt-2">
                    If this takes longer than expected, please use the email link below
                  </p>
                </div>
              </div>
              
              {/* Tally iframe - using exact embed approach */}
              <iframe
                data-tally-src="https://tally.so/embed/n98GLY"
                loading="lazy"
                width="100%"
                height="780"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Us"
                className="w-full"
                style={{ display: 'none' }}
                id="tally-contact-form"
                aria-label="Contact form to send a message to MainStreet RevOps"
              />
              
              {/* Manual form fallback */}
              <div id="manual-contact-form" className="p-8" style={{ display: 'none' }}>
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact Form</h3>
                <p className="text-slate-600 mb-6">
                  Our embedded form couldn&apos;t load. Please use one of the contact methods below:
                </p>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                    <p className="font-medium text-teal-900">Email us directly:</p>
                    <a 
                      href="mailto:sean@mainstrevops.com?subject=Lead Flow Inquiry&body=Hi Sean,%0D%0A%0D%0AI'm interested in learning more about MainStreet RevOps and how you can help improve our lead flow.%0D%0A%0D%0APlease reach out to discuss:%0D%0A- [Your specific needs]%0D%0A%0D%0AThank you!"
                      className="text-teal-700 hover:text-teal-900 font-semibold"
                    >
                      sean@mainstrevops.com
                    </a>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-medium text-blue-900">Schedule a call:</p>
                    <a 
                      href="https://www.linkedin.com/in/seanmacd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 font-semibold"
                    >
                      Connect on LinkedIn to schedule
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact Info */}
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
              Other Ways to Reach Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200" aria-hidden="true">
                  <span className="text-2xl" aria-hidden="true">📧</span>
                </div>
                <p className="font-medium text-slate-900 mb-2">Email</p>
                <a 
                  href="mailto:sean@mainstrevops.com" 
                  className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 rounded"
                  aria-label="Send email to Sean at MainStreet RevOps"
                >
                  sean@mainstrevops.com
                </a>
              </div>
              
              <div className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200" aria-hidden="true">
                  <span className="text-2xl" aria-hidden="true">💼</span>
                </div>
                <p className="font-medium text-slate-900 mb-2">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/seanmacd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 rounded"
                  aria-label="Connect with Sean on LinkedIn (opens in new tab)"
                >
                  Connect with Sean
                </a>
              </div>
              
              <div className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200" aria-hidden="true">
                  <span className="text-2xl" aria-hidden="true">⏰</span>
                </div>
                <p className="font-medium text-slate-900 mb-2">Response Time</p>
                <p className="text-slate-600 font-medium">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tally Embed Script - using exact approach provided */}
      <Script id="tally-contact-init" strategy="afterInteractive">
        {`
          (function() {
            var d = document;
            var w = "https://tally.so/widgets/embed.js";
            var v = function() {
              if (typeof Tally !== "undefined") {
                Tally.loadEmbeds();
                // Hide loading and show form
                var loading = document.getElementById('contact-form-loading');
                var iframe = document.getElementById('tally-contact-form');
                if (loading) loading.style.display = 'none';
                if (iframe) iframe.style.display = 'block';
              } else {
                // Fallback: manually set iframe src
                d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
                  e.src = e.dataset.tallySrc;
                  e.onload = function() {
                    var loading = document.getElementById('contact-form-loading');
                    if (loading) loading.style.display = 'none';
                    e.style.display = 'block';
                  };
                  e.onerror = function() {
                    showManualForm();
                  };
                });
              }
            };
            
            function showManualForm() {
              var loading = document.getElementById('contact-form-loading');
              var manualForm = document.getElementById('manual-contact-form');
              var iframe = document.getElementById('tally-contact-form');
              
              if (loading) loading.style.display = 'none';
              if (iframe) iframe.style.display = 'none';
              if (manualForm) manualForm.style.display = 'block';
            }
            
            if (typeof Tally !== "undefined") {
              v();
            } else if (d.querySelector('script[src="' + w + '"]') == null) {
              var s = d.createElement("script");
              s.src = w;
              s.onload = v;
              s.onerror = function() {
                console.log('Tally script failed to load, showing manual form');
                showManualForm();
              };
              d.body.appendChild(s);
            }
            
            // Fallback timeout - show manual form if nothing loads after 8 seconds
            setTimeout(function() {
              var loading = document.getElementById('contact-form-loading');
              if (loading && loading.style.display !== 'none') {
                showManualForm();
              }
            }, 8000);
          })();
        `}
      </Script>
    </div>
  );
}