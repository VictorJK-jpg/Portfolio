// src/pages/Waitlist.tsx
import React, { useState } from 'react';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const urlEncodedData = new URLSearchParams(formData as unknown as Record<string, string>).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("An error occurred during submission. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full">

        {submitted ? (
          <div className="p-8 bg-green-600 rounded-lg shadow-xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">You're on the list</h1>
            <p className="text-lg text-white mb-6">
              I'll reach out in the next few days to learn more about your cold outreach setup and see if this is a good fit.
            </p>
            <a 
              href="/" 
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Back to Home
            </a>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom Cold Email Infrastructure - Early Access
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                I'm opening up my cold email system to a few people.
              </p>
              <p className="text-lg text-gray-400">
                This is the same infrastructure I use for my own outreach - custom deployment on your domain, isolated sending infrastructure, full deliverability optimization.
              </p>
            </div>

            {/* Email Form */}
            <form 
              name="waitlist" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-lg p-8 mb-12"
            >
              <input type="hidden" name="form-name" value="waitlist" />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm font-medium mb-2">Current cold outreach volume*</label>
                  <select
                    name="volume"
                    id="volume"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="0-50">0-50 emails/day</option>
                    <option value="50-100">50-100 emails/day</option>
                    <option value="100-250">100-250 emails/day</option>
                    <option value="250+">250+ emails/day</option>
                    <option value="not-started">Haven't started yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium mb-2">What's your biggest cold email challenge right now? (if any)</label>
                  <textarea
                    name="challenge"
                    id="challenge"
                    rows={3}
                    required
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">When do you need this by?*</label>
                  <select
                    name="timeline"
                    id="timeline"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="asap">ASAP (within 2 weeks)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Join Early Access Waitlist
                </button>
              </div>
            </form>

            {/* What You Get */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Custom cold email infrastructure deployed on your domain</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Backend setup (AWS, Resend, database)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Frontend dashboard to manage campaigns</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Deliverability optimization included</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Technical setup handled for you</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Early access pricing (50% off setup fee)</p>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Who This Is For</h2>
              <p className="text-gray-300 mb-4">Founders and Marketers doing cold outreach who are tired of:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Shared platforms that tank your deliverability</li>
                <li>• Tools that throttle your sends</li>
                <li>• $200+/month subscriptions with arbitrary limits</li>
                <li>• Black-box systems you don't control</li>
              </ul>
              <p className="text-gray-300 mt-4">If you're doing serious B2B outbound, you need infrastructure you own.</p>
            </div>

            {/* Early Access Benefits */}
            <div className="bg-gray-800 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold mb-4">Early Access Benefits</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• 50% off setup fee ($1,500 instead of $3,000)</li>
                <li>• Priority onboarding</li>
                <li>• Direct access to my team for setup and optimization</li>
                <li>• Input on feature development</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">Limited to 10-15 for initial rollout.</p>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">FAQ</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How much does this cost?</h3>
                  <p className="text-gray-400">Early access pricing is $1,500 setup (50% off) + $300/month maintenance. After early access, it's $3,000 setup + $500/month.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Is this a self-serve tool?</h3>
                  <p className="text-gray-400">No, this is done-for-you. I deploy the infrastructure on your domain and handle all technical setup. You just use the dashboard to manage campaigns.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">When will this be ready?</h3>
                  <p className="text-gray-400">Aiming for 2 weeks. Waitlist members get notified first and can schedule their setup.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">What if I need help with the actual outreach, not just the infrastructure?</h3>
                  <p className="text-gray-400">I also offer full campaign management where I handle everything (sequence writing, sending, optimization). We can discuss that when I reach out.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Can i just have it for testing?</h3>
                    <p className="text-gray-400">Of course you can, after testing, you can decide if it works for you before committing .</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}