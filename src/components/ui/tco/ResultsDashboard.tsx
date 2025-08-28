import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TCOResults } from '@/app/tco-calculator/page';
import CTAButton from '@/components/ui/CTAButton';

interface ResultsDashboardProps {
  results: TCOResults;
  onBack: () => void;
  onStartOver: () => void;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results, onBack, onStartOver }) => {
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

  // Chart data
  const chartData = [
    {
      category: 'Fixed Costs',
      Current: results.Current_Fixed,
      Optimized: results.Optimized_Fixed,
    },
    {
      category: 'Hidden Labor',
      Current: results.Current_Hidden,
      Optimized: results.Optimized_Hidden,
    },
    {
      category: 'Missed Revenue',
      Current: results.Current_Missed,
      Optimized: results.Optimized_Missed,
    },
  ];

  const summaryCards = [
    {
      title: 'Net Monthly Savings',
      value: formatCurrency(results.Net_Savings),
      description: 'Total cost reduction',
      color: 'from-green-500 to-green-600',
      icon: '💰'
    },
    {
      title: 'Revenue Gained',
      value: formatCurrency(results.Revenue_Gained),
      description: 'From better lead conversion',
      color: 'from-blue-500 to-blue-600',
      icon: '📈'
    },
    {
      title: 'ROI',
      value: formatPercent(results.ROI),
      description: 'Return on investment',
      color: 'from-teal-500 to-teal-600',
      icon: '🎯'
    },
    {
      title: 'Annual Impact',
      value: formatCurrency((results.Net_Savings + results.Revenue_Gained) * 12),
      description: 'Total yearly benefit',
      color: 'from-purple-500 to-purple-600',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Your TCO Analysis Results
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here&apos;s how much you could save with an optimized MainStreet RevOps stack
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12"
        >
          {summaryCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-slate-900 mb-1">{card.value}</p>
              <p className="text-sm text-slate-500">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Current vs Optimized Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Current TCO */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-slate-900">Current TCO</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Fixed Costs</span>
                <span className="font-semibold">{formatCurrency(results.Current_Fixed)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Hidden Labor</span>
                <span className="font-semibold">{formatCurrency(results.Current_Hidden)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Missed Revenue</span>
                <span className="font-semibold">{formatCurrency(results.Current_Missed)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900">Total Monthly</span>
                  <span className="text-2xl font-bold text-red-600">{formatCurrency(results.Current_TCO)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optimized TCO */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-slate-900">Optimized TCO</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Fixed Costs</span>
                <span className="font-semibold">{formatCurrency(results.Optimized_Fixed)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Hidden Labor</span>
                <span className="font-semibold">{formatCurrency(results.Optimized_Hidden)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Missed Revenue</span>
                <span className="font-semibold">{formatCurrency(results.Optimized_Missed)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900">Total Monthly</span>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(results.Optimized_TCO)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-12"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6">Cost Breakdown Comparison</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" stroke="#64748b" />
                <YAxis 
                  stroke="#64748b" 
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  formatter={(value: number) => [formatCurrency(value), '']}
                  labelStyle={{ color: '#1e293b' }}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="Current" fill="#ef4444" name="Current" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Optimized" fill="#22c55e" name="Optimized" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Labor Efficiency</h4>
                  <p className="text-slate-300 text-sm">
                    Save {formatCurrency(results.Current_Hidden - results.Optimized_Hidden)} monthly by reducing manual work by 70%
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Lead Conversion</h4>
                  <p className="text-slate-300 text-sm">
                    Improve lead conversion from 70% to 90%, gaining {formatCurrency(results.Revenue_Gained)} monthly
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tool Optimization</h4>
                  <p className="text-slate-300 text-sm">
                    Streamlined tech stack saves {formatCurrency(Math.max(0, results.Current_Fixed - results.Optimized_Fixed))} monthly on software costs
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Annual Impact</h4>
                  <p className="text-slate-300 text-sm">
                    Total yearly benefit of {formatCurrency((results.Net_Savings + results.Revenue_Gained) * 12)} with {formatPercent(results.ROI)} ROI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Turn These Projections Into Reality?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Get a professional assessment to validate these numbers and create a custom implementation roadmap for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <CTAButton
              href="/assessment"
              variant="accent"
              size="lg"
            >
              Book Your Professional Assessment
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Questions? Free 15-Min Chat
            </CTAButton>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-slate-200">
            <button
              onClick={onBack}
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Adjust Inputs
            </button>
            <button
              onClick={onStartOver}
              className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-colors"
            >
              Start Over
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsDashboard;