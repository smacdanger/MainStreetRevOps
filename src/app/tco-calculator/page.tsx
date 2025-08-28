'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from '@/components/ui/tco/IntroScreen';
import InputWizard from '@/components/ui/tco/InputWizard';
import ResultsDashboard from '@/components/ui/tco/ResultsDashboard';

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

export default function TCOCalculator() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'wizard' | 'results'>('intro');
  const [inputs, setInputs] = useState<TCOInputs>({
    reps: 3,
    CRM_user_cost: 200,
    Phone_cost: 150,
    Accounting_cost: 100,
    Other_cost: 75,
    leads: 50,
    job_value: 8500,
    close_rate: 25,
    rep_hours: 8,
    owner_hours: 12,
    rep_rate: 30,
    owner_rate: 75,
    CRM_change: true,
    Phone_change: true,
    Accounting_change: true
  });

  const calculateTCO = (inputs: TCOInputs): TCOResults => {
    // Default constants
    const Lost_Leads_Percent = 0.30;
    const Labor_Savings_Percent = 0.70;
    const Optimized_Lost_Leads_Percent = 0.10;
    const OpenAI_cost = Math.max(25, inputs.leads * 0.02);

    // Current TCO Calculation
    const Current_Fixed = inputs.CRM_user_cost + inputs.Phone_cost + inputs.Accounting_cost + inputs.Other_cost;
    const Hidden_Labor = ((inputs.rep_hours * inputs.rep_rate * inputs.reps) + (inputs.owner_hours * inputs.owner_rate)) * 4; // Monthly
    const Current_Hidden = Hidden_Labor;
    const Missed_Revenue = inputs.leads * inputs.job_value * Lost_Leads_Percent;
    const Current_Missed = Missed_Revenue;
    const Current_TCO = Current_Fixed + Current_Hidden + Current_Missed;

    // Optimized Fixed Costs
    const Optimized_CRM = inputs.CRM_change ? (50 + 20 * inputs.reps) : inputs.CRM_user_cost;
    const Optimized_Phone = inputs.Phone_change ? (15 + 10 * inputs.reps) : inputs.Phone_cost;
    const Optimized_Accounting = inputs.Accounting_change ? 85 : inputs.Accounting_cost;
    const Optimized_Other = 50 + (30 * inputs.reps) + OpenAI_cost; // Zapier + PandaDoc + OpenAI
    const Optimized_Fixed = Optimized_CRM + Optimized_Phone + Optimized_Accounting + Optimized_Other;

    // Optimized Variable Costs
    const Optimized_Hidden = Hidden_Labor * (1 - Labor_Savings_Percent);
    const Optimized_Missed = inputs.leads * inputs.job_value * Optimized_Lost_Leads_Percent;
    const Optimized_TCO = Optimized_Fixed + Optimized_Hidden + Optimized_Missed;

    // Comparison Metrics
    const Net_Savings = Current_TCO - Optimized_TCO;
    const Revenue_Gained = Missed_Revenue - Optimized_Missed;
    const ROI = Optimized_TCO > 0 ? (Net_Savings / Optimized_TCO) * 100 : 0;

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

  const results = calculateTCO(inputs);

  const handleStartCalculator = () => {
    setCurrentStep('wizard');
  };

  const handleWizardComplete = (wizardInputs: TCOInputs) => {
    setInputs(wizardInputs);
    setCurrentStep('results');
  };

  const handleBackToCalculator = () => {
    setCurrentStep('wizard');
  };

  const handleStartOver = () => {
    setCurrentStep('intro');
  };

  return (
    <div className="bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {currentStep === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <IntroScreen onStart={handleStartCalculator} />
          </motion.div>
        )}

        {currentStep === 'wizard' && (
          <motion.div
            key="wizard"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <InputWizard 
              initialInputs={inputs}
              onComplete={handleWizardComplete}
              onBack={handleStartOver}
            />
          </motion.div>
        )}

        {currentStep === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <ResultsDashboard 
              results={results}
              onBack={handleBackToCalculator}
              onStartOver={handleStartOver}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}