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
    console.log("LeadGate useEffect: Checking access. Current access:", hasAccess); // LOG 1
    if (hasAccess === 'true') {
      onAccessGranted();
    }
  }, [onAccessGranted]);

  const handleYesClick = () => {
    console.log("Yes button clicked. Showing form."); // LOG 2
    setShowForm(true);
  };

  const handleNoClick = () => {
    console.log("No button clicked. Navigating to home."); // LOG 3
    navigate('/', { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted. Setting formSubmitting to true."); // LOG 4
    setFormSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Simulated delay finished. Attempting to set local storage."); // LOG 5
    // Store access in local storage
    localStorage.setItem('toolkit_access_granted', 'true');
    console.log("Local storage set. toolkit_access_granted:", localStorage.getItem('toolkit_access_granted')); // LOG 6

    onAccessGranted(); // Notify parent component
    console.log("onAccessGranted called."); // LOG 7

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
            <form
              name="lead-magnet-form"
              data-netlify="true"
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
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
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
                  name="email"
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
