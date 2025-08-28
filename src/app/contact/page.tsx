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
            Let's talk about your goals and see how we can help.
          </p>
          <div className="bg-teal-600/20 border border-teal-400/30 p-4 rounded-xl max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-teal-200 text-sm">
              <strong>Ready for a deeper dive?</strong> Consider our professional assessment ($1K–$3K) for a complete analysis and custom roadmap.
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

          {/* Tally Form Embed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-slate-200">
            <iframe
              data-tally-src="https://tally.so/embed/n98GLY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="eager"
              width="100%"
              height="755"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Us"
              className="w-full"
              id="tally-contact-form"
            >
            </iframe>
          </div>

          {/* Direct Contact Info */}
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
              Other Ways to Reach Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200">
                  <span className="text-2xl">📧</span>
                </div>
                <p className="font-medium text-slate-900 mb-2">Email</p>
                <a href="mailto:sean@mainstrevops.com" className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200">
                  sean@mainstrevops.com
                </a>
              </div>
              
              <div className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200">
                  <span className="text-2xl">💼</span>
                </div>
                <p className="font-medium text-slate-900 mb-2">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/seanmacd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200"
                >
                  Connect with Sean
                </a>
              </div>
              
              <div className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200">
                  <span className="text-2xl">⏰</span>
                </div>
                <p className="font-medium text-slate-900 mb-2">Response Time</p>
                <p className="text-slate-600 font-medium">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tally Embed Script - Load early with retry mechanism */}
      <Script 
        src="https://tally.so/widgets/embed.js" 
        strategy="beforeInteractive"
        id="tally-script"
      />
      
      <Script id="tally-contact-init" strategy="afterInteractive">
        {`
          function initTallyForm() {
            if (typeof Tally !== 'undefined') {
              Tally.loadEmbeds();
              return true;
            }
            
            // Fallback: manually load iframes
            const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])');
            iframes.forEach(function(iframe) {
              iframe.src = iframe.dataset.tallySrc;
            });
            
            return iframes.length > 0;
          }
          
          // Try to initialize immediately
          if (!initTallyForm()) {
            // If that fails, retry after a short delay
            setTimeout(function() {
              if (!initTallyForm()) {
                // Final retry after 2 seconds
                setTimeout(initTallyForm, 2000);
              }
            }, 500);
          }
          
          // Also retry when the page becomes visible (helps with tab switching)
          document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
              setTimeout(initTallyForm, 100);
            }
          });
        `}
      </Script>
    </div>
  );
}