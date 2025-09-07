import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

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

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <ContactForm />
          </div>

          {/* Direct Contact Info */}
          <div className="mt-12 bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl border border-slate-200">
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
    </div>
  );
}