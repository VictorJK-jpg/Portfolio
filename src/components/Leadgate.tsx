// src/components/LeadGate.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LeadGateProps {
  onAccessGranted: () => void;
}

const LeadGate: React.FC<LeadGateProps> = ({ onAccessGranted }) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Check local storage on component mount
  useEffect(() => {
    const hasAccess = localStorage.getItem('toolkit_access_granted');
    if (hasAccess === 'true') {
      onAccessGranted();
      // App.tsx will handle rendering Toolkit directly if access is granted
    }
  }, [onAccessGranted]);

  const handleYesClick = () => {
    setShowForm(true);
  };

  const handleNoClick = () => {
    navigate('/', { replace: true }); // Redirect to home if they don't want access
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true); // Indicate submission is in progress

    // Netlify Forms will intercept this submission.
    // We'll set local storage and grant access immediately for good UX.
    localStorage.setItem('toolkit_access_granted', 'true');
    onAccessGranted(); // Notify App.tsx to render Toolkit

    // The form will submit to Netlify's backend automatically.
    // No need for fetch/axios here for Netlify Forms.

    // Reset form fields (optional, as the page will change)
    setName('');
    setCompany('');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        {!showForm ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              First, do you think you need this, or are you scrolling by?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleYesClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
              >
                Yes, I need this!
              </button>
              <button
                onClick={handleNoClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
              >
                No, just browsing
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Great! Please provide your details to access the Toolkit.
            </h2>
            {/* This is the visible form. It will submit to Netlify. */}
            <form
              name="lead-magnet-form" // IMPORTANT: This name must match the hidden form in index.html
              data-netlify="true"    // IMPORTANT: This attribute tells Netlify to process the form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* This hidden input is crucial for Netlify to correctly identify the form */}
              <input type="hidden" name="form-name" value="lead-magnet-form" />

              <div>
                <input
                  type="text"
                  name="name" // IMPORTANT: Add name attribute for Netlify Forms
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company" // IMPORTANT: Add name attribute for Netlify Forms
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email" // IMPORTANT: Add name attribute for Netlify Forms
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formSubmitting}
              >
                {formSubmitting ? 'Accessing...' : 'Get Instant Access'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadGate;
