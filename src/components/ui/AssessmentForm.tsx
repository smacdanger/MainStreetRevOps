'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// TCO Calculator Types
export interface TCOInputs {
  reps: number;
  CRM_user_cost: number;
  Phone_cost: number;
  Accounting_cost: number;
  Other_cost: number;
  leads: number;
  job_value: number;
  close_rate: number;
  rep_hours: number;
  owner_hours: number;
  rep_rate: number;
  owner_rate: number;
  CRM_change: boolean;
  Phone_change: boolean;
  Accounting_change: boolean;
}

export interface TCOResults {
  Current_TCO: number;
  Optimized_TCO: number;
  Net_Savings: number;
  Revenue_Gained: number;
  ROI: number;
  Current_Fixed: number;
  Current_Hidden: number;
  Current_Missed: number;
  Optimized_Fixed: number;
  Optimized_Hidden: number;
  Optimized_Missed: number;
}

// Updated steps - streamlined and focused on process optimization
const steps = [
  {
    id: 'who',
    title: 'Who are we helping?',
    description: 'Tell us about you and your business',
  },
  {
    id: 'leads',
    title: 'Leads & Response',
    description: 'How do new customers find you and how do you respond?',
  },
  {
    id: 'systems',
    title: 'Current Systems & Tools',
    description: 'What tools and processes do you use today?',
  },
  {
    id: 'workflow',
    title: 'Lead to Project Workflow',
    description: 'How do leads become paying customers?',
  },
  {
    id: 'money',
    title: 'Invoicing & Payments',
    description: 'How do you bill and get paid?',
  },
  {
    id: 'goals',
    title: 'Goals & Timeline',
    description: 'What does success look like?',
  },
];

// Streamlined form data structure - removed duplicates and refocused
interface FormData {
  // Step 1 - Who
  yourName: string;
  companyName: string;
  bestEmail: string;
  bestPhone: string;
  consent: string;
  tradeIndustry: string;
  serviceArea: string;
  website: string;

  // Step 2 - Leads & Response  
  leadSources: string[];
  monthlyLeads: string;
  responseSpeed: string;
  afterHours: string;
  missedCallHandling?: string;
  leadHeadache: string;
  teamSize: string;
  ownerHoursPerWeek: string;
  manualHoursPerWeek: string;

  // Step 3 - Current Systems & Tools (consolidated all tool questions)
  leadTracking: string;
  crmName?: string;
  websitePlatform: string;
  phoneSystem: string;
  textFromBiz: string;
  bookingLink: string;
  bookingLinkWhich?: string;
  currentToolCosts: string;
  otherTools: string;

  // Step 4 - Lead to Project Workflow (refocused from estimates to process)
  leadToProject: string;
  quoteMethod: string;
  avgJobSize: string;
  processBottleneck: string;
  clientCommunication: string;

  // Step 5 - Invoicing & Payments (streamlined)
  invoiceMethod: string;
  invoiceTiming: string;
  paymentMethods: string[];
  billingHeadache: string;

  // Step 6 - Goals & Timeline (simplified)
  primaryPain: string;
  sixMonthSuccess: string;
  constraints: string;
  moveSpeed: string;
}

interface FormErrors {
  [key: string]: string;
}

const AssessmentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTCOResults, setShowTCOResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    yourName: '',
    companyName: '',
    bestEmail: '',
    bestPhone: '',
    consent: '',
    tradeIndustry: '',
    serviceArea: '',
    website: '',
    leadSources: [],
    monthlyLeads: '',
    responseSpeed: '',
    afterHours: '',
    missedCallHandling: '',
    leadHeadache: '',
    teamSize: '',
    ownerHoursPerWeek: '',
    manualHoursPerWeek: '',
    leadTracking: '',
    crmName: '',
    websitePlatform: '',
    phoneSystem: '',
    textFromBiz: '',
    bookingLink: '',
    bookingLinkWhich: '',
    currentToolCosts: '',
    otherTools: '',
    leadToProject: '',
    quoteMethod: '',
    avgJobSize: '',
    processBottleneck: '',
    clientCommunication: '',
    invoiceMethod: '',
    invoiceTiming: '',
    paymentMethods: [],
    billingHeadache: '',
    primaryPain: '',
    sixMonthSuccess: '',
    constraints: '',
    moveSpeed: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // TCO Calculation based on assessment data
  const generateTCOInputsFromAssessment = (): TCOInputs => {
    // Parse monthly leads
    const leadsMapping: { [key: string]: number } = {
      '0–10': 5,
      '11–25': 18,
      '26–50': 38,
      '51–100': 75,
      '100+': 150
    };
    const leads = leadsMapping[formData.monthlyLeads] || 25;

    // Parse job size
    const jobSizeMapping: { [key: string]: number } = {
      '<$1k': 500,
      '$1–5k': 3000,
      '$5–15k': 10000,
      '$15–50k': 30000,
      '$50k+': 75000
    };
    const job_value = jobSizeMapping[formData.avgJobSize] || 5000;

    // Use a default close rate since we removed the sales closing focus
    const close_rate = 25; // Reasonable default for process optimization focus

    // Parse team size
    const teamSizeMapping: { [key: string]: number } = {
      'Just me': 1,
      '2-3 people': 2.5,
      '4-6 people': 5,
      '7-10 people': 8.5,
      '10+ people': 15
    };
    const reps = teamSizeMapping[formData.teamSize] || 3;

    // Parse owner hours per week
    const ownerHoursMapping: { [key: string]: number } = {
      '<10 hours': 5,
      '10-20 hours': 15,
      '20-40 hours': 30,
      '40+ hours': 50
    };
    const owner_hours = ownerHoursMapping[formData.ownerHoursPerWeek] || 6;

    // Parse manual work hours per week
    const manualHoursMapping: { [key: string]: number } = {
      '<5 hours': 3,
      '5-10 hours': 8,
      '10-20 hours': 15,
      '20+ hours': 25
    };
    const manual_hours = manualHoursMapping[formData.manualHoursPerWeek] || 8;

    // Parse current tool costs
    const toolCostMapping: { [key: string]: number } = {
      '<$100/month': 50,
      '$100-$300/month': 200,
      '$300-$500/month': 400,
      '$500+ month': 750
    };
    const current_tool_cost = toolCostMapping[formData.currentToolCosts] || 200;

    return {
      reps,
      CRM_user_cost: formData.leadTracking === 'CRM' ? current_tool_cost * 0.4 : 50,
      Phone_cost: current_tool_cost * 0.3,
      Accounting_cost: current_tool_cost * 0.2,
      Other_cost: current_tool_cost * 0.1,
      leads,
      job_value,
      close_rate,
      rep_hours: manual_hours / reps,
      owner_hours,
      rep_rate: 25, // Still use reasonable default
      owner_rate: 65, // Still use reasonable default
      CRM_change: true,
      Phone_change: true,
      Accounting_change: true
    };
  };

  const calculateTCO = (inputs: TCOInputs): TCOResults => {
    // Constants for calculation
    const Lost_Leads_Percent = 0.15;
    const Labor_Savings_Percent = 0.50;
    const Optimized_Lost_Leads_Percent = 0.05;
    const OpenAI_cost = Math.max(25, inputs.leads * 0.50);

    // Current TCO Calculation
    const Current_Fixed = inputs.CRM_user_cost + inputs.Phone_cost + inputs.Accounting_cost + inputs.Other_cost;
    
    const Weekly_Rep_Labor = inputs.rep_hours * inputs.rep_rate * inputs.reps;
    const Weekly_Owner_Labor = inputs.owner_hours * inputs.owner_rate;
    const Hidden_Labor = (Weekly_Rep_Labor + Weekly_Owner_Labor) * 4.33;
    const Current_Hidden = Hidden_Labor;
    
    const Missed_Revenue = inputs.leads * inputs.job_value * Lost_Leads_Percent;
    const Current_Missed = Missed_Revenue;
    const Current_TCO = Current_Fixed + Current_Hidden + Current_Missed;

    // Optimized Fixed Costs
    const Optimized_CRM = inputs.CRM_change ? (40 + 15 * inputs.reps) : inputs.CRM_user_cost;
    const Optimized_Phone = inputs.Phone_change ? (25 + 8 * inputs.reps) : inputs.Phone_cost;
    const Optimized_Accounting = inputs.Accounting_change ? 75 : inputs.Accounting_cost;
    const Optimized_Other = 40 + (25 * inputs.reps) + OpenAI_cost;
    const Optimized_Fixed = Optimized_CRM + Optimized_Phone + Optimized_Accounting + Optimized_Other;

    // Optimized Variable Costs
    const Optimized_Hidden = Hidden_Labor * (1 - Labor_Savings_Percent);
    const Optimized_Missed = inputs.leads * inputs.job_value * Optimized_Lost_Leads_Percent;
    const Optimized_TCO = Optimized_Fixed + Optimized_Hidden + Optimized_Missed;

    // Comparison Metrics
    const Net_Savings = Current_TCO - Optimized_TCO;
    const Revenue_Gained = Missed_Revenue - Optimized_Missed;
    
    const Base_Implementation_Cost = 8000;
    const Per_Rep_Cost = 1500;
    const Implementation_Investment = Base_Implementation_Cost + (Per_Rep_Cost * inputs.reps);
    const Monthly_Benefit = Net_Savings + Revenue_Gained;
    const ROI = Implementation_Investment > 0 ? (Monthly_Benefit * 12 / Implementation_Investment) * 100 : 0;

    return {
      Current_TCO,
      Optimized_TCO,
      Net_Savings,
      Revenue_Gained,
      ROI,
      Current_Fixed,
      Current_Hidden,
      Current_Missed,
      Optimized_Fixed,
      Optimized_Hidden,
      Optimized_Missed
    };
  };

  const tcoInputs = generateTCOInputsFromAssessment();
  const tcoResults = calculateTCO(tcoInputs);

  const validateStep = (stepIndex: number): boolean => {
    const newErrors: FormErrors = {};
    // Step-by-step validation
    switch (stepIndex) {
      case 0:
        if (!formData.yourName) newErrors.yourName = 'Required';
        if (!formData.companyName) newErrors.companyName = 'Required';
        if (!formData.bestEmail) newErrors.bestEmail = 'Required';
        if (!formData.bestPhone) newErrors.bestPhone = 'Required';
        if (!formData.consent) newErrors.consent = 'Required';
        if (!formData.tradeIndustry) newErrors.tradeIndustry = 'Required';
        break;
      case 1:
        if (!formData.leadSources || formData.leadSources.length === 0) newErrors.leadSources = 'Select at least one';
        if (!formData.monthlyLeads) newErrors.monthlyLeads = 'Required';
        if (!formData.responseSpeed) newErrors.responseSpeed = 'Required';
        if (!formData.afterHours) newErrors.afterHours = 'Required';
        if (!formData.leadHeadache) newErrors.leadHeadache = 'Required';
        // Branch: If "Phone calls" is selected, require missedCallHandling
        if (formData.leadSources.includes('Phone calls') && !formData.missedCallHandling) {
          newErrors.missedCallHandling = 'Required';
        }
        // TCO-relevant required fields
        if (!formData.teamSize) newErrors.teamSize = 'Required';
        if (!formData.ownerHoursPerWeek) newErrors.ownerHoursPerWeek = 'Required';
        if (!formData.manualHoursPerWeek) newErrors.manualHoursPerWeek = 'Required';
        break;
      case 2:
        if (!formData.leadTracking) newErrors.leadTracking = 'Required';
        if (formData.leadTracking === 'CRM' && !formData.crmName) newErrors.crmName = 'Required';
        if (!formData.websitePlatform) newErrors.websitePlatform = 'Required';
        if (!formData.phoneSystem) newErrors.phoneSystem = 'Required';
        if (!formData.textFromBiz) newErrors.textFromBiz = 'Required';
        if (!formData.bookingLink) newErrors.bookingLink = 'Required';
        if (formData.bookingLink === 'Yes' && !formData.bookingLinkWhich) newErrors.bookingLinkWhich = 'Required';
        if (!formData.currentToolCosts) newErrors.currentToolCosts = 'Required';
        break;
      case 3:
        if (!formData.leadToProject) newErrors.leadToProject = 'Required';
        if (!formData.quoteMethod) newErrors.quoteMethod = 'Required';
        if (!formData.avgJobSize) newErrors.avgJobSize = 'Required';
        if (!formData.processBottleneck) newErrors.processBottleneck = 'Required';
        if (!formData.clientCommunication) newErrors.clientCommunication = 'Required';
        break;
      case 4:
        if (!formData.invoiceMethod) newErrors.invoiceMethod = 'Required';
        if (!formData.invoiceTiming) newErrors.invoiceTiming = 'Required';
        if (!formData.paymentMethods || formData.paymentMethods.length === 0) newErrors.paymentMethods = 'Select at least one';
        if (!formData.billingHeadache) newErrors.billingHeadache = 'Required';
        break;
      case 5:
        if (!formData.primaryPain) newErrors.primaryPain = 'Required';
        if (!formData.sixMonthSuccess) newErrors.sixMonthSuccess = 'Required';
        if (!formData.moveSpeed) newErrors.moveSpeed = 'Required';
        break;
    }
    setErrors(newErrors);
    console.log('Validation errors for step', stepIndex, ':', newErrors); // Debug log
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      // Only show TCO results after completing ALL sections (step 5)
      if (currentStep === steps.length - 1 && !showTCOResults) {
        setShowTCOResults(true);
      } else {
        setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      }
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
      // Check if we're in development mode
      const isDevelopment = process.env.NODE_ENV === 'development';
      
      if (isDevelopment) {
        // Simulate successful submission in development
        console.log('Development mode - Form data:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setSubmitStatus('success');
        return;
      }

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

  const handleMultiSelect = (name: string, value: string) => {
    setFormData(prev => {
      const arr = prev[name as keyof FormData] as string[];
      if (arr.includes(value)) {
        return { ...prev, [name]: arr.filter(v => v !== value) };
      } else {
        return { ...prev, [name]: [...arr, value] };
      }
    });
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Removed unused handleFileChange function since we're not using file uploads in the streamlined form

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (percent: number) => {
    return `${percent.toFixed(1)}%`;
  };

  const renderTCOResults = () => {
    const chartData = [
      {
        category: 'Fixed Costs',
        Current: tcoResults.Current_Fixed,
        Optimized: tcoResults.Optimized_Fixed,
      },
      {
        category: 'Hidden Labor',
        Current: tcoResults.Current_Hidden,
        Optimized: tcoResults.Optimized_Hidden,
      },
      {
        category: 'Missed Revenue',
        Current: tcoResults.Current_Missed,
        Optimized: tcoResults.Optimized_Missed,
      },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Your Instant TCO Analysis
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Based on your assessment responses, here&apos;s what you could save with optimized systems:
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {formatCurrency(tcoResults.Net_Savings)}
            </div>
            <div className="text-green-800 font-medium">Monthly Savings</div>
            <div className="text-green-600 text-sm">Cost reduction per month</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {formatCurrency(tcoResults.Revenue_Gained)}
            </div>
            <div className="text-blue-800 font-medium">Revenue Gained</div>
            <div className="text-blue-600 text-sm">From capturing more leads</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {formatPercent(tcoResults.ROI)}
            </div>
            <div className="text-purple-800 font-medium">Annual ROI</div>
            <div className="text-purple-600 text-sm">Return on investment</div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">Current vs Optimized Breakdown</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Bar dataKey="Current" fill="#64748b" name="Current" />
                <Bar dataKey="Optimized" fill="#0d9488" name="Optimized" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">What This Means for {formData.companyName || 'Your Business'}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-slate-900 mb-2">💰 Total Monthly Impact:</h5>
              <p className="text-slate-700">
                {formatCurrency(tcoResults.Net_Savings + tcoResults.Revenue_Gained)} in combined savings and new revenue
              </p>
            </div>
            <div>
              <h5 className="font-medium text-slate-900 mb-2">📈 Annual Potential:</h5>
              <p className="text-slate-700">
                {formatCurrency((tcoResults.Net_Savings + tcoResults.Revenue_Gained) * 12)} in total annual benefit
              </p>
            </div>
            <div>
              <h5 className="font-medium text-slate-900 mb-2">⚡ Time Savings:</h5>
              <p className="text-slate-700">
                ~50% reduction in manual lead management tasks
              </p>
            </div>
            <div>
              <h5 className="font-medium text-slate-900 mb-2">📊 Lead Capture:</h5>
              <p className="text-slate-700">
                {formatCurrency(tcoResults.Revenue_Gained)} in previously missed opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-slate-900 text-white p-8 rounded-xl">
          <h4 className="text-2xl font-bold mb-4">🎯 Your Assessment is Complete!</h4>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Thank you for completing the full assessment. Based on your responses, we&apos;ve identified significant opportunities to optimize your operations and capture more revenue.
          </p>
          <div className="bg-teal-600/20 border border-teal-400/30 p-6 rounded-xl mb-6 backdrop-blur-sm">
            <h5 className="text-teal-200 font-semibold mb-2">📞 What happens next?</h5>
            <p className="text-teal-100 text-sm mb-3">
              You should receive an <strong>email and text shortly</strong> with a link to schedule your consultation call. We&apos;ll use your assessment responses to create a custom implementation roadmap during our discussion.
            </p>
            <p className="text-teal-100 text-xs">
              If you don&apos;t receive our message within 15 minutes, please check your spam folder or contact us directly at <strong>sean@mainstrevops.com</strong>
            </p>
          </div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
              isSubmitting
                ? 'bg-slate-600 cursor-not-allowed'
                : 'bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Assessment...
              </span>
            ) : (
              'Complete Assessment & Schedule Call'
            )}
          </button>
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        // ...existing code for Step 1...
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yourName" className="block text-sm font-medium text-slate-900 mb-2">Your name *</label>
                <input type="text" id="yourName" name="yourName" value={formData.yourName} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.yourName ? 'border-red-500' : 'border-slate-300'}`} placeholder="Jane Smith" />
                {errors.yourName && <p className="mt-1 text-sm text-red-600">{errors.yourName}</p>}
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-900 mb-2">Company name *</label>
                <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.companyName ? 'border-red-500' : 'border-slate-300'}`} placeholder="ABC Services" />
                {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
              </div>
              <div>
                <label htmlFor="bestEmail" className="block text-sm font-medium text-slate-900 mb-2">Best email *</label>
                <input type="email" id="bestEmail" name="bestEmail" value={formData.bestEmail} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.bestEmail ? 'border-red-500' : 'border-slate-300'}`} placeholder="jane@company.com" />
                {errors.bestEmail && <p className="mt-1 text-sm text-red-600">{errors.bestEmail}</p>}
              </div>
              <div>
                <label htmlFor="bestPhone" className="block text-sm font-medium text-slate-900 mb-2">Best phone *</label>
                <input type="tel" id="bestPhone" name="bestPhone" value={formData.bestPhone} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.bestPhone ? 'border-red-500' : 'border-slate-300'}`} placeholder="(555) 123-4567" />
                {errors.bestPhone && <p className="mt-1 text-sm text-red-600">{errors.bestPhone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Consent to contact you by email/text? *</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(opt => (
                    <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                      <input type="radio" name="consent" value={opt} checked={formData.consent === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                  ))}
                </div>
                {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
              </div>
              <div>
                <label htmlFor="tradeIndustry" className="block text-sm font-medium text-slate-900 mb-2">Trade / Industry *</label>
                <select id="tradeIndustry" name="tradeIndustry" value={formData.tradeIndustry} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.tradeIndustry ? 'border-red-500' : 'border-slate-300'}`}> 
                  <option value="">Select...</option>
                  <option>Home Services (cleaning, lawn care, pest control, etc.)</option>
                  <option>Construction / Remodeling</option>
                  <option>Specialty Trade (plumbing, HVAC, electrical)</option>
                  <option>Professional Services (consulting, design, etc.)</option>
                  <option>Retail / Local Business</option>
                  <option>Other</option>
                </select>
                {errors.tradeIndustry && <p className="mt-1 text-sm text-red-600">{errors.tradeIndustry}</p>}
              </div>
              <div>
                <label htmlFor="serviceArea" className="block text-sm font-medium text-slate-900 mb-2">Service area / city</label>
                <input type="text" id="serviceArea" name="serviceArea" value={formData.serviceArea} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border-slate-300" placeholder="Boston, MA" />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-900 mb-2">Website (if you have one)</label>
                <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border-slate-300" placeholder="https://yourcompany.com" />
              </div>
            </div>
          </div>
        );
      case 1: // Step 2 — Leads & Response
        return (
          <div className="space-y-6">
            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-slate-900 mb-2">Where do new leads usually come from? * <span className="text-xs text-slate-500">(Select all that apply)</span></legend>
                <div className="flex flex-wrap gap-3" role="group" aria-labelledby="leadSources-legend">
                  {['Website form', 'Phone calls', 'Ads (Google/FB)', 'Referrals', 'Marketplaces (Angi/Thumbtack, etc.)', 'Walk-ins', 'Other'].map((opt, index) => {
                    const checkboxId = `leadSources-${index}`;
                    return (
                      <label key={opt} htmlFor={checkboxId} className="inline-flex items-center text-slate-900 font-medium cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <input 
                          type="checkbox" 
                          id={checkboxId}
                          name="leadSources" 
                          value={opt} 
                          checked={formData.leadSources.includes(opt)} 
                          onChange={() => handleMultiSelect('leadSources', opt)} 
                          className="mr-2 w-4 h-4 text-teal-600 bg-white border-slate-300 rounded focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" 
                          aria-describedby={errors.leadSources ? "leadSources-error" : undefined}
                        />
                        <span className="select-none">{opt}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.leadSources && <p id="leadSources-error" className="mt-1 text-sm text-red-600" role="alert">{errors.leadSources}</p>}
              </fieldset>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">About how many new leads per month? *</label>
              <div className="flex flex-wrap gap-4">
                {['0–10', '11–25', '26–50', '51–100', '100+'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="monthlyLeads" value={opt} checked={formData.monthlyLeads === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.monthlyLeads && <p className="mt-1 text-sm text-red-600">{errors.monthlyLeads}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">When someone reaches out, how fast do they usually hear back? *</label>
              <div className="flex flex-wrap gap-4">
                {['Within 1 hour', 'Same day', '1–2 days', '3+ days', 'Honestly, hit or miss'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="responseSpeed" value={opt} checked={formData.responseSpeed === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.responseSpeed && <p className="mt-1 text-sm text-red-600">{errors.responseSpeed}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">After-hours leads, what usually happens? *</label>
              <div className="flex flex-wrap gap-4">
                {['Goes to voicemail', 'Someone answers', 'We text back', 'Nothing reliable yet'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="afterHours" value={opt} checked={formData.afterHours === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.afterHours && <p className="mt-1 text-sm text-red-600">{errors.afterHours}</p>}
            </div>
            {/* Branch: If Phone calls is selected, show Step 2b */}
            {formData.leadSources.includes('Phone calls') && (
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">If you miss a call, what usually happens? *</label>
                <div className="flex flex-wrap gap-4">
                  {['Goes to voicemail', 'Someone calls back', 'We text back', 'Nothing reliable yet'].map(opt => (
                    <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                      <input type="radio" name="missedCallHandling" value={opt} checked={formData.missedCallHandling === opt} onChange={handleChange} className="mr-2" />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.missedCallHandling && <p className="mt-1 text-sm text-red-600">{errors.missedCallHandling}</p>}
              </div>
            )}
            <div>
              <label htmlFor="leadHeadache" className="block text-sm font-medium text-slate-900 mb-2">Biggest headache with leads right now? *</label>
              <input type="text" id="leadHeadache" name="leadHeadache" value={formData.leadHeadache} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.leadHeadache ? 'border-red-500' : 'border-slate-300'}`} placeholder="Short answer" />
              {errors.leadHeadache && <p className="mt-1 text-sm text-red-600">{errors.leadHeadache}</p>}
            </div>
            
            {/* New TCO-relevant fields */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How many people work in your business? *</label>
              <div className="flex flex-wrap gap-4">
                {['Just me', '2-3 people', '4-6 people', '7-10 people', '10+ people'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="teamSize" value={opt} checked={formData.teamSize === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.teamSize && <p className="mt-1 text-sm text-red-600">{errors.teamSize}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How many hours per week do you (the owner) spend on lead management? *</label>
              <div className="flex flex-wrap gap-4">
                {['<10 hours', '10-20 hours', '20-40 hours', '40+ hours'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="ownerHoursPerWeek" value={opt} checked={formData.ownerHoursPerWeek === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.ownerHoursPerWeek && <p className="mt-1 text-sm text-red-600">{errors.ownerHoursPerWeek}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How many hours per week does your team spend on manual lead tasks (tracking, follow-up, scheduling)? *</label>
              <div className="flex flex-wrap gap-4">
                {['<5 hours', '5-10 hours', '10-20 hours', '20+ hours'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="manualHoursPerWeek" value={opt} checked={formData.manualHoursPerWeek === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.manualHoursPerWeek && <p className="mt-1 text-sm text-red-600">{errors.manualHoursPerWeek}</p>}
            </div>
          </div>
        );
      case 2: // Step 3 — Current Systems & Tools
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How do you track new leads today? *</label>
              <select id="leadTracking" name="leadTracking" value={formData.leadTracking} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.leadTracking ? 'border-red-500' : 'border-slate-300'}`}> 
                <option value="">Select...</option>
                <option>CRM</option>
                <option>Spreadsheet</option>
                <option>Paper/whiteboard</option>
                <option>Inbox</option>
                <option>Nothing formal</option>
              </select>
              {errors.leadTracking && <p className="mt-1 text-sm text-red-600">{errors.leadTracking}</p>}
              {/* If CRM is selected, show CRM name input */}
              {formData.leadTracking === 'CRM' && (
                <div className="mt-2">
                  <label htmlFor="crmName" className="block text-xs font-medium text-slate-900 mb-1">Which CRM do you use? *</label>
                  <input type="text" id="crmName" name="crmName" value={formData.crmName || ''} onChange={handleChange} className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.crmName ? 'border-red-500' : 'border-slate-300'}`} placeholder="e.g. HubSpot, Salesforce, Zoho" />
                  {errors.crmName && <p className="mt-1 text-xs text-red-600">{errors.crmName}</p>}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Website platform:</label>
              <div className="flex flex-wrap gap-4">
                {['WordPress', 'Squarespace', 'Wix', 'Custom', 'Don’t know'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="websitePlatform" value={opt} checked={formData.websitePlatform === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.websitePlatform && <p className="mt-1 text-sm text-red-600">{errors.websitePlatform}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Phone system:</label>
              <div className="flex flex-wrap gap-4">
                {['Cell only', 'Grasshopper', 'RingCentral', 'Twilio', 'Other'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="phoneSystem" value={opt} checked={formData.phoneSystem === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.phoneSystem && <p className="mt-1 text-sm text-red-600">{errors.phoneSystem}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Do you text customers from a business number? *</label>
              <div className="flex gap-4">
                {['Yes', 'No', 'Sometimes'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="textFromBiz" value={opt} checked={formData.textFromBiz === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.textFromBiz && <p className="mt-1 text-sm text-red-600">{errors.textFromBiz}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Do you use a booking link for estimates/appointments? *</label>
              <div className="flex gap-4">
                {['Yes', 'No'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="bookingLink" value={opt} checked={formData.bookingLink === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.bookingLink && <p className="mt-1 text-sm text-red-600">{errors.bookingLink}</p>}
              {/* If Yes, ask which one */}
              {formData.bookingLink === 'Yes' && (
                <div className="mt-2">
                  <label htmlFor="bookingLinkWhich" className="block text-xs font-medium text-slate-900 mb-1">Which one?</label>
                  <input type="text" id="bookingLinkWhich" name="bookingLinkWhich" value={formData.bookingLinkWhich} onChange={handleChange} className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.bookingLinkWhich ? 'border-red-500' : 'border-slate-300'}`} placeholder="Calendly, Acuity, etc." />
                  {errors.bookingLinkWhich && <p className="mt-1 text-xs text-red-600">{errors.bookingLinkWhich}</p>}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">What do you spend monthly on business software/tools (CRM, phone, etc.)? *</label>
              <div className="flex flex-wrap gap-4">
                {['<$100/month', '$100-$300/month', '$300-$500/month', '$500+ month'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="currentToolCosts" value={opt} checked={formData.currentToolCosts === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.currentToolCosts && <p className="mt-1 text-sm text-red-600">{errors.currentToolCosts}</p>}
            </div>
            <div>
              <label htmlFor="otherTools" className="block text-sm font-medium text-slate-900 mb-2">Any other tools/software you use?</label>
              <textarea id="otherTools" name="otherTools" value={formData.otherTools} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border-slate-300" rows={2} placeholder="List your tools/software" />
            </div>
          </div>
        );
      case 3: // Step 4 — Lead to Project Workflow
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How do leads become paying customers? *</label>
              <textarea id="leadToProject" name="leadToProject" value={formData.leadToProject} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border-slate-300" rows={2} placeholder="Describe your process" />
              {errors.leadToProject && <p className="mt-1 text-sm text-red-600">{errors.leadToProject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How do you create quotes/estimates? *</label>
              <select id="quoteMethod" name="quoteMethod" value={formData.quoteMethod} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.quoteMethod ? 'border-red-500' : 'border-slate-300'}`}> 
                <option value="">Select...</option>
                <option>Spreadsheets (Excel/Google Sheets)</option>
                <option>Word/PDF</option>
                <option>QuickBooks / FreshBooks</option>
                <option>Jobber / Housecall Pro / ServiceTitan</option>
                <option>Buildertrend / CoConstruct / Acculynx</option>
                <option>Other</option>
              </select>
              {errors.quoteMethod && <p className="mt-1 text-sm text-red-600">{errors.quoteMethod}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Average job/project size (rough guess)? *</label>
              <div className="flex flex-wrap gap-4">
                {['<$1k', '$1–5k', '$5–15k', '$15–50k', '$50k+'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="avgJobSize" value={opt} checked={formData.avgJobSize === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.avgJobSize && <p className="mt-1 text-sm text-red-600">{errors.avgJobSize}</p>}
            </div>
            <div>
              <label htmlFor="processBottleneck" className="block text-sm font-medium text-slate-900 mb-2">Biggest bottleneck in your process? *</label>
              <input type="text" id="processBottleneck" name="processBottleneck" value={formData.processBottleneck} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.processBottleneck ? 'border-red-500' : 'border-slate-300'}`} placeholder="Short answer" />
              {errors.processBottleneck && <p className="mt-1 text-sm text-red-600">{errors.processBottleneck}</p>}
            </div>
            <div>
              <label htmlFor="clientCommunication" className="block text-sm font-medium text-slate-900 mb-2">How do you communicate with clients during projects? *</label>
              <input type="text" id="clientCommunication" name="clientCommunication" value={formData.clientCommunication} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.clientCommunication ? 'border-red-500' : 'border-slate-300'}`} placeholder="Short answer" />
              {errors.clientCommunication && <p className="mt-1 text-sm text-red-600">{errors.clientCommunication}</p>}
            </div>
          </div>
        );
      case 4: // Step 5 — Invoicing & Payments
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How do you invoice? *</label>
              <select id="invoiceMethod" name="invoiceMethod" value={formData.invoiceMethod} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.invoiceMethod ? 'border-red-500' : 'border-slate-300'}`}>
                <option value="">Select...</option>
                <option>QuickBooks</option>
                <option>FreshBooks</option>
                <option>Jobber / Housecall Pro / ServiceTitan</option>
                <option>Other / Inconsistent</option>
              </select>
              {errors.invoiceMethod && <p className="mt-1 text-sm text-red-600">{errors.invoiceMethod}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">When do you usually send invoices? *</label>
              <div className="flex flex-wrap gap-4">
                {['After completion', 'At milestones', 'Deposit + final', 'Inconsistent'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="invoiceTiming" value={opt} checked={formData.invoiceTiming === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.invoiceTiming && <p className="mt-1 text-sm text-red-600">{errors.invoiceTiming}</p>}
            </div>
            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-slate-900 mb-2">What payment methods do you accept? <span className="text-xs text-slate-500">(Select all that apply)</span></legend>
                <div className="flex flex-wrap gap-4" role="group" aria-labelledby="paymentMethods-legend">
                  {['ACH', 'Card', 'Check', 'Financing', 'Other'].map((opt, index) => {
                    const checkboxId = `paymentMethods-${index}`;
                    return (
                      <label key={opt} htmlFor={checkboxId} className="inline-flex items-center text-slate-900 font-medium cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <input 
                          type="checkbox" 
                          id={checkboxId}
                          name="paymentMethods" 
                          value={opt} 
                          checked={formData.paymentMethods.includes(opt)} 
                          onChange={() => handleMultiSelect('paymentMethods', opt)} 
                          className="mr-2 w-4 h-4 text-teal-600 bg-white border-slate-300 rounded focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" 
                          aria-describedby={errors.paymentMethods ? "paymentMethods-error" : undefined}
                        />
                        <span className="select-none">{opt}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.paymentMethods && <p id="paymentMethods-error" className="mt-1 text-sm text-red-600" role="alert">{errors.paymentMethods}</p>}
              </fieldset>
            </div>
            <div>
              <label htmlFor="billingHeadache" className="block text-sm font-medium text-slate-900 mb-2">What’s the #1 billing/payment headache right now? *</label>
              <input type="text" id="billingHeadache" name="billingHeadache" value={formData.billingHeadache} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.billingHeadache ? 'border-red-500' : 'border-slate-300'}`} placeholder="Short answer" />
              {errors.billingHeadache && <p className="mt-1 text-sm text-red-600">{errors.billingHeadache}</p>}
            </div>
          </div>
        );
      case 5: // Step 6 — Goals & Timeline
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="primaryPain" className="block text-sm font-medium text-slate-900 mb-2">If we fixed ONE thing first and nailed it, what should it be? *</label>
              <input type="text" id="primaryPain" name="primaryPain" value={formData.primaryPain} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.primaryPain ? 'border-red-500' : 'border-slate-300'}`} placeholder="Short answer" />
              {errors.primaryPain && <p className="mt-1 text-sm text-red-600">{errors.primaryPain}</p>}
            </div>
            <div>
              <label htmlFor="sixMonthSuccess" className="block text-sm font-medium text-slate-900 mb-2">In 6 months, what would &ldquo;this was worth it&rdquo; look like? *</label>
              <input type="text" id="sixMonthSuccess" name="sixMonthSuccess" value={formData.sixMonthSuccess} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.sixMonthSuccess ? 'border-red-500' : 'border-slate-300'}`} placeholder="Short answer" />
              {errors.sixMonthSuccess && <p className="mt-1 text-sm text-red-600">{errors.sixMonthSuccess}</p>}
            </div>
            <div>
              <label htmlFor="constraints" className="block text-sm font-medium text-slate-900 mb-2">Any &ldquo;do-not-do&rdquo; requests or constraints?</label>
              <input type="text" id="constraints" name="constraints" value={formData.constraints} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border-slate-300" placeholder="Short answer" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">How fast do you want to move? *</label>
              <div className="flex flex-wrap gap-4">
                {['Yesterday', 'This month', 'This quarter', 'Just exploring'].map(opt => (
                  <label key={opt} className="inline-flex items-center text-slate-900 font-medium">
                    <input type="radio" name="moveSpeed" value={opt} checked={formData.moveSpeed === opt} onChange={handleChange} className="mr-2" />{opt}
                  </label>
                ))}
              </div>
              {errors.moveSpeed && <p className="mt-1 text-sm text-red-600">{errors.moveSpeed}</p>}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-base">
        <strong>Complete Assessment Required:</strong> All 6 sections must be completed to receive your personalized TCO analysis and schedule your consultation call.
      </div>
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
          {showTCOResults ? (
            <motion.div
              key="tco-results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {renderTCOResults()}
            </motion.div>
          ) : (
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
          )}
        </AnimatePresence>

        {/* Navigation Buttons - Hide when showing TCO results */}
        {!showTCOResults && (
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

            <div className="flex gap-2">
              {/* Show Next button if not on last step, Complete Assessment button if on last step */}
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Complete Assessment & View Results
                </button>
              )}
            </div>
          </div>
        )}

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
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
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
