// src/pages/Waitlist.tsx
import React, { useState } from 'react';

// Define the Waitlist component as a single function
export default function Waitlist() {
  // 1. Add state to manage the submission status
  const [submitted, setSubmitted] = useState(false);
  
  // 2. Define the asynchronous submit handler
  // Note: We use 'unknown' and a type check instead of 'any' to improve TypeScript safety
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Stop the default browser redirect
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Use an index signature to resolve the 'any' warning during conversion
    const urlEncodedData = new URLSearchParams(formData as unknown as Record<string, string>).toString();

    try {
      // Netlify requires the form submission to be a POST to the site's root path
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData,
      });

      if (response.ok) {
        setSubmitted(true); // Set state to show success message
      } else {
        alert("An error occurred during submission. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred.");
    }
  };

  // --- COMPONENT RENDER (JSX) ---
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">

        {submitted ? (
          // Show this block on successful submission
          <div className="p-8 bg-green-600 rounded-lg shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">You're In! 🎉</h1>
            <p className="text-lg text-white">
              Thank you for joining the waitlist. We'll let you know as soon as we launch!
            </p>
            <div className="mt-8">
              <a 
                href="/" 
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>
        ) : (
          // Show this block before submission
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
               14 days to launch!
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Be the first to know when it goes live. Join the waitlist for early access.
            </p>
            
            {/* --- Netlify Form --- */}
            <form 
              name="waitlist" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit} // <--- ADDED SUBMIT HANDLER
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* This hidden input is required by Netlify for SPA forms */}
              <input type="hidden" name="form-name" value="waitlist" />
              
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-grow p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Join the Waitlist
              </button>
            </form>
            {/* The 'Back to Home' link is better placed outside the 'submitted' block, or only in the 'submitted' block if you want a cleaner landing page */}
            {/* The Back to Home link is now inside the success message for a cleaner landing page experience. */}
          </>
        )}
      </div>
    </div>
  );
}