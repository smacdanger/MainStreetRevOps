import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TCOInputs } from '@/app/tco-calculator/page';

interface InputWizardProps {
  initialInputs: TCOInputs;
  onComplete: (inputs: TCOInputs) => void;
  onBack: () => void;
}

const InputWizard: React.FC<InputWizardProps> = ({ initialInputs, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputs, setInputs] = useState<TCOInputs>(initialInputs);

  const totalSteps = 5;

  const steps = [
    {
      title: "Team & Software Costs",
      subtitle: "Tell us about your current setup",
      fields: [
        { key: 'reps' as keyof TCOInputs, label: 'Sales Reps/Team Members', type: 'number', suffix: 'people', placeholder: '3' },
        { key: 'CRM_user_cost' as keyof TCOInputs, label: 'CRM Cost (Monthly)', type: 'number', prefix: '$', placeholder: '200' },
        { key: 'Phone_cost' as keyof TCOInputs, label: 'Phone System Cost (Monthly)', type: 'number', prefix: '$', placeholder: '150' },
        { key: 'Accounting_cost' as keyof TCOInputs, label: 'Accounting Software (Monthly)', type: 'number', prefix: '$', placeholder: '100' },
        { key: 'Other_cost' as keyof TCOInputs, label: 'Other Tools (Monthly)', type: 'number', prefix: '$', placeholder: '75' }
      ]
    },
    {
      title: "Lead & Conversion Data",
      subtitle: "How's your lead flow performing?",
      fields: [
        { key: 'leads' as keyof TCOInputs, label: 'Leads per Month', type: 'number', suffix: 'leads', placeholder: '50' },
        { key: 'job_value' as keyof TCOInputs, label: 'Average Job Value', type: 'number', prefix: '$', placeholder: '8500' },
        { key: 'close_rate' as keyof TCOInputs, label: 'Current Close Rate', type: 'number', suffix: '%', placeholder: '25' }
      ]
    },
    {
      title: "Efficiency & Time Loss",
      subtitle: "Where are you losing time?",
      fields: [
        { key: 'rep_hours' as keyof TCOInputs, label: 'Manual Hours per Rep (Weekly)', type: 'number', suffix: 'hrs/week', placeholder: '8' },
        { key: 'owner_hours' as keyof TCOInputs, label: 'Owner Chase Hours (Weekly)', type: 'number', suffix: 'hrs/week', placeholder: '12' },
        { key: 'rep_rate' as keyof TCOInputs, label: 'Rep Hourly Rate', type: 'number', prefix: '$', placeholder: '30' },
        { key: 'owner_rate' as keyof TCOInputs, label: 'Owner Hourly Rate', type: 'number', prefix: '$', placeholder: '75' }
      ]
    },
    {
      title: "Willingness to Change",
      subtitle: "What systems are you open to optimizing?",
      fields: [
        { key: 'CRM_change' as keyof TCOInputs, label: 'Switch to optimized CRM system', type: 'checkbox' },
        { key: 'Phone_change' as keyof TCOInputs, label: 'Upgrade phone/communication system', type: 'checkbox' },
        { key: 'Accounting_change' as keyof TCOInputs, label: 'Streamline accounting integration', type: 'checkbox' }
      ]
    }
  ];

  const updateInput = (key: keyof TCOInputs, value: string | number | boolean) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(inputs);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const renderField = (field: {
    key: keyof TCOInputs;
    label: string;
    type: string;
    prefix?: string;
    suffix?: string;
    placeholder?: string;
  }) => {
    const value = inputs[field.key as keyof TCOInputs];

    if (field.type === 'checkbox') {
      return (
        <div key={field.key} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg border-2 border-transparent hover:border-teal-200 transition-colors">
          <input
            type="checkbox"
            id={field.key}
            checked={value as boolean}
            onChange={(e) => updateInput(field.key, e.target.checked)}
            className="w-5 h-5 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
          />
          <label htmlFor={field.key} className="text-slate-700 font-medium cursor-pointer flex-1">
            {field.label}
          </label>
        </div>
      );
    }

    return (
      <div key={field.key} className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">
          {field.label}
        </label>
        <div className="relative">
          {field.prefix && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
              {field.prefix}
            </span>
          )}
          <input
            type="number"
            value={(value as number) === 0 ? '' : (value as number)}
            onChange={(e) => updateInput(field.key, parseFloat(e.target.value) || 0)}
            placeholder={field.placeholder}
            className={`w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
              field.prefix ? 'pl-8' : ''
            } ${field.suffix ? 'pr-16' : ''}`}
          />
          {field.suffix && (
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 text-sm">
              {field.suffix}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-900">TCO Calculator</h1>
            <span className="text-sm text-slate-500">Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentStep <= steps.length && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {steps[currentStep - 1].title}
                </h2>
                <p className="text-slate-600">
                  {steps[currentStep - 1].subtitle}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {steps[currentStep - 1].fields.map(renderField)}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  {currentStep === 1 ? 'Back to Intro' : 'Previous'}
                </button>
                
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {currentStep === totalSteps ? 'Calculate TCO' : 'Next Step'}
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 mt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Ready to Calculate Your TCO
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-800">Current Setup</h3>
                  <div className="text-sm space-y-2 text-slate-600">
                    <div>Team Size: {inputs.reps} people</div>
                    <div>Monthly Leads: {inputs.leads}</div>
                    <div>Average Job: ${inputs.job_value?.toLocaleString()}</div>
                    <div>Close Rate: {inputs.close_rate}%</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-800">Monthly Costs</h3>
                  <div className="text-sm space-y-2 text-slate-600">
                    <div>CRM: ${inputs.CRM_user_cost}</div>
                    <div>Phone: ${inputs.Phone_cost}</div>
                    <div>Accounting: ${inputs.Accounting_cost}</div>
                    <div>Other Tools: ${inputs.Other_cost}</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  Previous
                </button>
                
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Show My Results →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InputWizard;