import { Handler } from '@netlify/functions';

const ZAPIER_ASSESSMENT_WEBHOOK_URL = process.env.ZAPIER_ASSESSMENT_WEBHOOK_URL || '';

export const handler: Handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the form data
    const data = JSON.parse(event.body || '{}');
    
    // Validate required fields for assessment form (matching AssessmentForm.tsx field names)
    const requiredFields = [
      'yourName', 'bestEmail', 'bestPhone', 'companyName', 'tradeIndustry', 'consent',
      'leadSources', 'monthlyLeads', 'responseSpeed', 'afterHours', 'leadHeadache',
      'leadTracking', 'textFromBiz', 'autoTextHelp', 'bookingLink', 'firstImprovement'
    ];
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: `${field} is required` }),
        };
      }
    }

    // Additional validation for conditional fields
    if (data.leadSources?.includes('Phone calls') && !data.missedCallHandling) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'missedCallHandling is required when Phone calls is selected' }),
      };
    }

    if (data.leadTracking === 'CRM' && !data.crmName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'crmName is required when CRM is selected' }),
      };
    }

    if (data.bookingLink === 'Yes' && !data.bookingLinkWhich) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'bookingLinkWhich is required when booking link is Yes' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.bestEmail)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Forward to Zapier webhook
    const response = await fetch(ZAPIER_ASSESSMENT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'assessment-form',
        timestamp: new Date().toISOString(),
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
        form_type: 'RevOps Assessment Questionnaire'
      }),
    });

    if (!response.ok) {
      throw new Error(`Zapier webhook failed: ${response.status}`);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Assessment submitted successfully' 
      }),
    };
  } catch (error) {
    console.error('Assessment form submission error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to process assessment submission. Please try again.' 
      }),
    };
  }
};
