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
    console.log("LeadGate useEffect: Checking access. Current access:", hasAccess);
    if (hasAccess === 'true') {
      onAccessGranted();
    }
  }, [onAccessGranted]);

  const handleYesClick = () => {
    console.log("Yes button clicked. Showing form.");
    setShowForm(true);
  };

  const handleNoClick = () => {
    console.log("No button clicked. Navigating to home.");
    navigate('/', { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted. Setting formSubmitting to true.");
    setFormSubmitting(true);

    // Prepare form data for Netlify
    const formData = new FormData();
    formData.append('form-name', 'lead-magnet-form');
    formData.append('name', name);
    formData.append('company', company); // Company name will be sent even if empty
    formData.append('email', email);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        console.log("Form successfully submitted to Netlify.");
        localStorage.setItem('toolkit_access_granted', 'true');
        console.log("Local storage set. toolkit_access_granted:", localStorage.getItem('toolkit_access_granted'));
        onAccessGranted();
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("There was an error submitting your details. Please try again.");
        setFormSubmitting(false);
      }
    } catch (error) {
      console.error("Network error during form submission:", error);
      alert("There was a network error. Please check your connection and try again.");
      setFormSubmitting(false);
    }

    setName('');
    setCompany('');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        {!showForm ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Hold On. This Isn't Just Another Page.
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This contains one of the most valuable pieces of information on marketing automation mastery, packed with the exact AI and automation blueprints I use to drive real business growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              But before I hand over the keys, let's make sure you're ready to put them to work.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleYesClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
              >
                Yes, I'm Ready to Scale!
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
              Sign up for my Newsletter.
            </h2>
            <form
              name="lead-magnet-form"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="lead-magnet-form" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required // Still required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)" // Added (Optional) to placeholder
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required // Still required
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
