'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Remove the metadata export since this is now a client component
// Add this to a separate metadata file if needed

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Info
    companyName: '',
    industry: '',
    companySize: '',
    annualRevenue: '',
    // Contact Info
    name: '',
    email: '',
    phone: '',
    title: '',
    // Current State
    leadSources: [] as string[],
    crmSystem: '',
    teamSize: '',
    monthlyLeads: '',
    conversionRate: '',
    avgDealSize: '',
    salesCycle: '',
    // Pain Points
    biggestChallenges: [] as string[],
    manualProcesses: '',
    dataVisibility: '',
    // Goals
    primaryGoals: [] as string[],
    timeframe: '',
    budget: '',
    // Additional
    currentTools: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Save form data to localStorage on change
  useEffect(() => {
    const savedData = localStorage.getItem('assessment-form-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed.formData || {});
        setCurrentStep(parsed.currentStep || 1);
      } catch {
        console.log('Could not restore form data');
      }
    }
  }, []);

  useEffect(() => {
    if (formData.companyName || formData.email) {
      localStorage.setItem('assessment-form-data', JSON.stringify({
        formData,
        currentStep
      }));
    }
  }, [formData, currentStep]);

  const totalSteps = 5;

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual form submission
    console.log('Assessment Form Data:', formData);
    
    try {
      // Here you would integrate with your form handler (Formspree, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      localStorage.removeItem('assessment-form-data');
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Assessment Submitted Successfully!
            </h1>
            <p className="text-slate-600 mb-6">
              Thank you for taking the time to complete our business assessment. We&apos;ll review your responses and get back to you within 24 hours with next steps.
            </p>
            <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl mb-6">
              <p className="text-teal-800 text-sm">
                <strong>What&apos;s Next:</strong> We&apos;ll prepare a preliminary analysis and reach out to schedule your discovery call.
              </p>
            </div>
            <Link
              href="/"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-block"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business Discovery Assessment
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4">
            Get Personalized Recommendations for Your Business
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            This comprehensive questionnaire helps us understand your current sales process, 
            technology stack, and challenges so we can provide tailored solutions.
          </p>
          
          {/* Progress Indicator */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-300">Progress</span>
              <span className="text-sm text-slate-300">{currentStep} of {totalSteps}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            
            {/* Step 1: Company Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Company Information</h2>
                  <p className="text-slate-600">Tell us about your business</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => updateFormData('companyName', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Industry *
                    </label>
                    <select
                      required
                      value={formData.industry}
                      onChange={(e) => updateFormData('industry', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      <option value="construction">Construction</option>
                      <option value="hvac">HVAC</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="roofing">Roofing</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="technology">Technology</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      required
                      value={formData.companySize}
                      onChange={(e) => updateFormData('companySize', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-20">6-20 employees</option>
                      <option value="21-50">21-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Annual Revenue *
                    </label>
                    <select
                      required
                      value={formData.annualRevenue}
                      onChange={(e) => updateFormData('annualRevenue', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select revenue range</option>
                      <option value="under-1m">Under $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m-25m">$10M - $25M</option>
                      <option value="25m+">$25M+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Information</h2>
                  <p className="text-slate-600">How can we reach you?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => updateFormData('title', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="CEO, Sales Manager, Operations Director, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Current Sales Process */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Current Sales Process</h2>
                  <p className="text-slate-600">Help us understand your current situation</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    What are your primary lead sources? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Referrals', 'Website', 'Social Media', 'Google Ads', 'Print Advertising', 'Trade Shows', 'Cold Calling', 'Email Marketing', 'Networking', 'Other'].map((source) => (
                      <label key={source} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.leadSources.includes(source)}
                          onChange={() => handleArrayToggle('leadSources', source)}
                          className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-slate-700">{source}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current CRM System
                    </label>
                    <select
                      value={formData.crmSystem}
                      onChange={(e) => updateFormData('crmSystem', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select CRM</option>
                      <option value="hubspot">HubSpot</option>
                      <option value="salesforce">Salesforce</option>
                      <option value="pipedrive">Pipedrive</option>
                      <option value="zoho">Zoho</option>
                      <option value="excel">Excel/Spreadsheets</option>
                      <option value="none">No CRM</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Sales Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => updateFormData('teamSize', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select team size</option>
                      <option value="just-me">Just me</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="11-20">11-20 people</option>
                      <option value="20+">20+ people</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Monthly Qualified Leads
                    </label>
                    <select
                      value={formData.monthlyLeads}
                      onChange={(e) => updateFormData('monthlyLeads', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="0-10">0-10</option>
                      <option value="11-25">11-25</option>
                      <option value="26-50">26-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Lead to Customer Conversion Rate
                    </label>
                    <select
                      value={formData.conversionRate}
                      onChange={(e) => updateFormData('conversionRate', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select rate</option>
                      <option value="under-10">Under 10%</option>
                      <option value="10-20">10-20%</option>
                      <option value="21-30">21-30%</option>
                      <option value="31-50">31-50%</option>
                      <option value="over-50">Over 50%</option>
                      <option value="unknown">Don&apos;t know</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Pain Points & Goals */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Challenges & Goals</h2>
                  <p className="text-slate-600">What are your biggest pain points and objectives?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    What are your biggest sales/marketing challenges? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Not enough leads',
                      'Poor lead quality',
                      'Long sales cycles',
                      'Low conversion rates',
                      'Manual processes',
                      'Poor data visibility',
                      'Team productivity',
                      'Follow-up consistency',
                      'Proposal generation',
                      'Customer retention'
                    ].map((challenge) => (
                      <label key={challenge} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.biggestChallenges.includes(challenge)}
                          onChange={() => handleArrayToggle('biggestChallenges', challenge)}
                          className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-slate-700">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    What are your primary goals for the next 12 months? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Increase lead volume',
                      'Improve lead quality',
                      'Automate manual processes',
                      'Better sales reporting',
                      'Shorter sales cycles',
                      'Higher conversion rates',
                      'Scale sales team',
                      'Improve customer retention',
                      'Implement AI tools',
                      'Better ROI tracking'
                    ].map((goal) => (
                      <label key={goal} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.primaryGoals.includes(goal)}
                          onChange={() => handleArrayToggle('primaryGoals', goal)}
                          className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-slate-700">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Implementation Timeframe
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => updateFormData('timeframe', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select timeframe</option>
                      <option value="asap">ASAP (within 30 days)</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="just-exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Monthly Budget for Improvements
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => updateFormData('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k+">$10,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Additional Information */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Additional Information</h2>
                  <p className="text-slate-600">Help us prepare for your consultation</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Current Tools & Software
                  </label>
                  <textarea
                    value={formData.currentTools}
                    onChange={(e) => updateFormData('currentTools', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="List any tools you currently use (CRM, email marketing, phone systems, accounting software, etc.)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Anything else you'd like us to know about your business, challenges, or goals?"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <p className="text-blue-800 text-sm">
                    <strong>Ready to submit!</strong> We&apos;ll review your assessment and reach out within 24 hours to schedule your discovery call and discuss next steps.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  currentStep === 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Previous
              </button>

              <div className="text-sm text-slate-500">
                Step {currentStep} of {totalSteps}
              </div>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isLoading
                      ? 'bg-slate-400 text-white cursor-not-allowed'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  {isLoading ? 'Submitting...' : 'Submit Assessment'}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Questions? Start with a Free 15-Minute Consultation
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Not ready for the full assessment? Schedule a free consultation to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}