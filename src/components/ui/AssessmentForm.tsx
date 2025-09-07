'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  // Business Basics
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  website: string;
  
  // Leads & Customers
  leadSources: string;
  monthlyLeads: string;
  
  // Lead Handling & Sales Process
  leadTracking: string;
  responseTime: string;
  followUpChallenge: string;
  salesHandler: string;
  conversionRate: string;
  
  // Money & Operations
  invoicing: string;
  invoicingHeadache: string;
  trackJobCosts: string;
  
  // Tools & Systems
  currentTools: string;
  duplicateWork: string;
  
  // Priorities & Success
  topPriority: string;
  successLooks: string;
}

interface FormErrors {
  [key: string]: string;
}

const steps = [
  {
    id: 'basics',
    title: 'Business Basics',
    description: 'Tell us about your company',
  },
  {
    id: 'leads',
    title: 'Leads & Customers',
    description: 'Where your business comes from',
  },
  {
    id: 'process',
    title: 'Sales Process',
    description: 'How you handle leads',
  },
  {
    id: 'operations',
    title: 'Money & Operations',
    description: 'Invoicing and tracking',
  },
  {
    id: 'systems',
    title: 'Tools & Systems',
    description: 'Current software and workflows',
  },
  {
    id: 'priorities',
    title: 'Priorities & Goals',
    description: 'What matters most to you',
  },
];

const AssessmentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    website: '',
    leadSources: '',
    monthlyLeads: '',
    leadTracking: '',
    responseTime: '',
    followUpChallenge: '',
    salesHandler: '',
    conversionRate: '',
    invoicing: '',
    invoicingHeadache: '',
    trackJobCosts: '',
    currentTools: '',
    duplicateWork: '',
    topPriority: '',
    successLooks: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateStep = (stepIndex: number): boolean => {
    const newErrors: FormErrors = {};

    switch (stepIndex) {
      case 0: // Business Basics
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
        if (!formData.website.trim()) newErrors.website = 'Website is required';
        break;
      
      case 1: // Leads & Customers
        if (!formData.leadSources.trim()) newErrors.leadSources = 'Lead sources is required';
        if (!formData.monthlyLeads.trim()) newErrors.monthlyLeads = 'Monthly leads estimate is required';
        break;
      
      case 2: // Sales Process
        if (!formData.leadTracking.trim()) newErrors.leadTracking = 'Lead tracking method is required';
        if (!formData.responseTime.trim()) newErrors.responseTime = 'Response time is required';
        if (!formData.followUpChallenge.trim()) newErrors.followUpChallenge = 'Follow-up challenge is required';
        if (!formData.salesHandler.trim()) newErrors.salesHandler = 'Sales handler is required';
        if (!formData.conversionRate.trim()) newErrors.conversionRate = 'Conversion rate is required';
        break;
      
      case 3: // Money & Operations
        if (!formData.invoicing.trim()) newErrors.invoicing = 'Invoicing method is required';
        if (!formData.invoicingHeadache.trim()) newErrors.invoicingHeadache = 'Invoicing headache is required';
        if (!formData.trackJobCosts.trim()) newErrors.trackJobCosts = 'Job cost tracking is required';
        break;
      
      case 4: // Tools & Systems
        if (!formData.currentTools.trim()) newErrors.currentTools = 'Current tools is required';
        if (!formData.duplicateWork.trim()) newErrors.duplicateWork = 'Duplicate work description is required';
        break;
      
      case 5: // Priorities & Success
        if (!formData.topPriority.trim()) newErrors.topPriority = 'Top priority is required';
        if (!formData.successLooks.trim()) newErrors.successLooks = 'Success description is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/.netlify/functions/assessment-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
        console.error('Assessment submission error:', result.error);
      }
    } catch (error) {
      console.error('Assessment submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl font-bold text-green-900 mb-4">Thank You!</h2>
            <p className="text-lg text-green-800 mb-6">Your assessment has been submitted successfully.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-green-200 text-left">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h3>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                <p>We&apos;ll review your responses in detail.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                <p>You&apos;ll hear from us shortly to schedule a brief connection call.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                <p>During that call, we&apos;ll confirm any additional details, finalize payment, and book your 60–90 minute Discovery Session.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                <p>Within 1–2 weeks after that session, you&apos;ll receive your customized AI Sales Roadmap with clear steps, priorities, and implementation guidance.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
            <p className="text-teal-800 font-medium">
              We&apos;re excited to learn more about your business and to help you build stronger sales systems, faster follow-ups, and better revenue outcomes.
            </p>
            <p className="text-teal-700 mt-2 font-semibold">— The Team @ MainStreet RevOps</p>
          </div>
        </div>
      </motion.div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Business Basics
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.company ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="ABC Contractors Inc."
                />
                {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.industry ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Construction, HVAC, Plumbing, etc."
                />
                {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-2">
                  Website *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.website ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="https://yourcompany.com"
                />
                {errors.website && <p className="mt-1 text-sm text-red-600">{errors.website}</p>}
              </div>
            </div>
          </div>
        );

      case 1: // Leads & Customers
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="leadSources" className="block text-sm font-medium text-slate-700 mb-2">
                Where do most of your leads/customers come from? (ads, referrals, website, etc.) *
              </label>
              <textarea
                id="leadSources"
                name="leadSources"
                value={formData.leadSources}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.leadSources ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Google Ads, referrals from past customers, website contact form, Facebook, word of mouth, etc."
              />
              {errors.leadSources && <p className="mt-1 text-sm text-red-600">{errors.leadSources}</p>}
            </div>

            <div>
              <label htmlFor="monthlyLeads" className="block text-sm font-medium text-slate-700 mb-2">
                About how many new leads/customers do you get each month? *
              </label>
              <input
                type="text"
                id="monthlyLeads"
                name="monthlyLeads"
                value={formData.monthlyLeads}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                  errors.monthlyLeads ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="5-10, 20-30, 50+, etc."
              />
              {errors.monthlyLeads && <p className="mt-1 text-sm text-red-600">{errors.monthlyLeads}</p>}
            </div>
          </div>
        );

      case 2: // Lead Handling & Sales Process
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="leadTracking" className="block text-sm font-medium text-slate-700 mb-2">
                How do new leads currently get tracked or followed up on? *
              </label>
              <textarea
                id="leadTracking"
                name="leadTracking"
                value={formData.leadTracking}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.leadTracking ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="CRM software, Excel spreadsheet, paper notes, phone calls, email, or other methods..."
              />
              {errors.leadTracking && <p className="mt-1 text-sm text-red-600">{errors.leadTracking}</p>}
            </div>

            <div>
              <label htmlFor="responseTime" className="block text-sm font-medium text-slate-700 mb-2">
                How quickly are leads usually contacted? *
              </label>
              <select
                id="responseTime"
                name="responseTime"
                value={formData.responseTime}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                  errors.responseTime ? 'border-red-500' : 'border-slate-300'
                }`}
              >
                <option value="">Select response time...</option>
                <option value="within-1-hour">Within 1 hour</option>
                <option value="same-day">Same day</option>
                <option value="1-2-days">1-2 days</option>
                <option value="longer">Longer than 2 days</option>
              </select>
              {errors.responseTime && <p className="mt-1 text-sm text-red-600">{errors.responseTime}</p>}
            </div>

            <div>
              <label htmlFor="followUpChallenge" className="block text-sm font-medium text-slate-700 mb-2">
                What&apos;s the biggest challenge with follow-up today? *
              </label>
              <textarea
                id="followUpChallenge"
                name="followUpChallenge"
                value={formData.followUpChallenge}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.followUpChallenge ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Missed leads, slow response times, no tracking system, forgetting to follow up, etc."
              />
              {errors.followUpChallenge && <p className="mt-1 text-sm text-red-600">{errors.followUpChallenge}</p>}
            </div>

            <div>
              <label htmlFor="salesHandler" className="block text-sm font-medium text-slate-700 mb-2">
                Who handles sales/closing? *
              </label>
              <select
                id="salesHandler"
                name="salesHandler"
                value={formData.salesHandler}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                  errors.salesHandler ? 'border-red-500' : 'border-slate-300'
                }`}
              >
                <option value="">Select who handles sales...</option>
                <option value="owner">Owner</option>
                <option value="1-2-reps">1-2 reps</option>
                <option value="full-team">Full team</option>
              </select>
              {errors.salesHandler && <p className="mt-1 text-sm text-red-600">{errors.salesHandler}</p>}
            </div>

            <div>
              <label htmlFor="conversionRate" className="block text-sm font-medium text-slate-700 mb-2">
                What % of leads usually turn into paying jobs/customers? (estimate) *
              </label>
              <input
                type="text"
                id="conversionRate"
                name="conversionRate"
                value={formData.conversionRate}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                  errors.conversionRate ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="10%, 25%, 50%, etc."
              />
              {errors.conversionRate && <p className="mt-1 text-sm text-red-600">{errors.conversionRate}</p>}
            </div>
          </div>
        );

      case 3: // Money & Operations
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="invoicing" className="block text-sm font-medium text-slate-700 mb-2">
                How do you currently create and send invoices? *
              </label>
              <textarea
                id="invoicing"
                name="invoicing"
                value={formData.invoicing}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.invoicing ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Paper invoices, QuickBooks, other software, email, etc."
              />
              {errors.invoicing && <p className="mt-1 text-sm text-red-600">{errors.invoicing}</p>}
            </div>

            <div>
              <label htmlFor="invoicingHeadache" className="block text-sm font-medium text-slate-700 mb-2">
                Biggest headache with invoicing or payments? *
              </label>
              <textarea
                id="invoicingHeadache"
                name="invoicingHeadache"
                value={formData.invoicingHeadache}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.invoicingHeadache ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Late payments, billing errors, double data entry, chasing customers, etc."
              />
              {errors.invoicingHeadache && <p className="mt-1 text-sm text-red-600">{errors.invoicingHeadache}</p>}
            </div>

            <div>
              <label htmlFor="trackJobCosts" className="block text-sm font-medium text-slate-700 mb-2">
                Do you track job costs (materials + labor) against estimates? *
              </label>
              <select
                id="trackJobCosts"
                name="trackJobCosts"
                value={formData.trackJobCosts}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                  errors.trackJobCosts ? 'border-red-500' : 'border-slate-300'
                }`}
              >
                <option value="">Select an option...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.trackJobCosts && <p className="mt-1 text-sm text-red-600">{errors.trackJobCosts}</p>}
            </div>
          </div>
        );

      case 4: // Tools & Systems
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="currentTools" className="block text-sm font-medium text-slate-700 mb-2">
                What tools/software do you currently use for sales, marketing, and accounting? *
              </label>
              <textarea
                id="currentTools"
                name="currentTools"
                value={formData.currentTools}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.currentTools ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="QuickBooks, Excel, Google Workspace, CRM software, website platform, advertising platforms, etc."
              />
              {errors.currentTools && <p className="mt-1 text-sm text-red-600">{errors.currentTools}</p>}
            </div>

            <div>
              <label htmlFor="duplicateWork" className="block text-sm font-medium text-slate-700 mb-2">
                Where do you feel you&apos;re doing the same work twice or spending more time than ideal? *
              </label>
              <textarea
                id="duplicateWork"
                name="duplicateWork"
                value={formData.duplicateWork}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.duplicateWork ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Manual data entry, chasing information, creating estimates, following up on leads, etc."
              />
              {errors.duplicateWork && <p className="mt-1 text-sm text-red-600">{errors.duplicateWork}</p>}
            </div>
          </div>
        );

      case 5: // Priorities & Success
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="topPriority" className="block text-sm font-medium text-slate-700 mb-2">
                If we could fix just one problem first, what should it be? *
              </label>
              <textarea
                id="topPriority"
                name="topPriority"
                value={formData.topPriority}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.topPriority ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Faster lead response, better tracking, automated follow-up, streamlined invoicing, etc."
              />
              {errors.topPriority && <p className="mt-1 text-sm text-red-600">{errors.topPriority}</p>}
            </div>

            <div>
              <label htmlFor="successLooks" className="block text-sm font-medium text-slate-700 mb-2">
                What would success look like in 6 months? *
              </label>
              <textarea
                id="successLooks"
                name="successLooks"
                value={formData.successLooks}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-y ${
                  errors.successLooks ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Faster follow-up, fewer missed leads, more accurate invoices, higher margins, automated processes, etc."
              />
              {errors.successLooks && <p className="mt-1 text-sm text-red-600">{errors.successLooks}</p>}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-900">RevOps Assessment Questionnaire</h2>
          <span className="text-sm text-slate-600">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        
        <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
          <div
            className="bg-teal-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Step Headers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`text-center p-3 rounded-lg transition-colors ${
                index === currentStep
                  ? 'bg-teal-50 border-2 border-teal-200'
                  : index < currentStep
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-medium ${
                index === currentStep
                  ? 'bg-teal-600 text-white'
                  : index < currentStep
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-300 text-slate-600'
              }`}>
                {index < currentStep ? '✓' : index + 1}
              </div>
              <h3 className="font-medium text-sm text-slate-900 mb-1">{step.title}</h3>
              <p className="text-xs text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {steps[currentStep].title}
              </h3>
              <p className="text-slate-600">
                {steps[currentStep].description}
              </p>
            </div>

            {renderStepContent()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            Previous
          </button>

          <div className="text-center">
            <p className="text-sm text-slate-600">
              {currentStep + 1} of {steps.length} sections
            </p>
          </div>

          {currentStep === steps.length - 1 ? (
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Assessment'
              )}
            </motion.button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-red-800 font-medium">Something went wrong.</p>
                <p className="text-red-700 text-sm mt-1">
                  Please try again or email us directly at{' '}
                  <a href="mailto:sean@mainstrevops.com" className="underline hover:text-red-900">
                    sean@mainstrevops.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AssessmentForm;
