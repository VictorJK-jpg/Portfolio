// src/pages/Waitlist.tsx
import React, { useState } from 'react';

// Video component - Fixed for mobile
const VideoHero = () => {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-3xl p-1 overflow-hidden shadow-xl">
        <iframe 
          src="https://www.loom.com/embed/9ccd4027e3dc4eeaa5434d34a067abca?sid=949451a2-ff9a-4b05-9721-557782a3d9ea" 
          frameBorder="0" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          title="Victor Seda"
          className="w-full h-full"
          style={{
            borderRadius: '20px'
          }}
        ></iframe>
      </div>
    </div>
  );
};

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
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Left Side Squares */}
      <div className="absolute left-0 top-0 h-full w-32 lg:w-64 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg transform rotate-45 animate-pulse"></div>
        <div className="absolute top-48 left-8 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-xl transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-80 left-2 w-12 h-12 bg-gradient-to-br from-green-500/15 to-teal-600/15 rounded-lg transform rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-96 left-12 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-6 w-14 h-14 bg-gradient-to-br from-pink-500/15 to-purple-600/15 rounded-lg transform rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Decorative Right Side Squares */}
      <div className="absolute right-0 top-0 h-full w-32 lg:w-64 pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-8 w-20 h-20 bg-gradient-to-br from-purple-500/15 to-pink-600/15 rounded-xl transform rotate-12 animate-pulse"></div>
        <div className="absolute top-64 right-4 w-16 h-16 bg-gradient-to-br from-teal-500/20 to-green-600/20 rounded-lg transform -rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-96 right-12 w-24 h-24 bg-gradient-to-br from-red-500/10 to-orange-600/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-48 right-6 w-12 h-12 bg-gradient-to-br from-blue-500/15 to-indigo-600/15 rounded-lg transform rotate-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-2 w-18 h-18 bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-xl transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/5 to-red-600/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{animationDelay: '2s'}}></div>

      <div className="max-w-3xl w-full relative z-10">

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

            {/* Pre-Qualification Section */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">This is for B2B founders who are tired of...</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="text-gray-300 font-semibold">Watching open rates drop from 22% to 15% in Mailchimp/Outreach</p>
                    <p className="text-gray-400 text-sm mt-1">Despite warming up domains and following "best practices"</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="text-gray-300 font-semibold">Paying $200+/month for tools that throttle your sends</p>
                    <p className="text-gray-400 text-sm mt-1">While your competitors with custom infrastructure hit inboxes consistently</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="text-gray-300 font-semibold">Sales team complaining about "bad leads" from your outreach</p>
                    <p className="text-gray-400 text-sm mt-1">When the real problem is your emails aren't reaching decision-makers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="text-gray-300 font-semibold">Black-box systems you don't control</p>
                    <p className="text-gray-400 text-sm mt-1">Shared IP addresses that get you penalized for others' mistakes</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <p className="text-center text-gray-300 italic">
                  "If you're sending less than 100 emails a day or just starting with cold outreach, this isn't for you yet. 
                  This is for B2B companies already doing volume who need better infrastructure."
                </p>
              </div>
            </div>

            {/* Cost of Inaction Calculator */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">The Hidden Cost of Using Standard Email Platforms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-400">What's Happening Now</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 15-20% email deliverability to inbox</li>
                    <li>• 2-3% positive response rate</li>
                    <li>• $200-500/month in tool subscriptions</li>
                    <li>• 10-15 hours/week managing deliverability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">With Custom Infrastructure</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 85-95% email deliverability to inbox</li>
                    <li>• 8-12% positive response rate</li>
                    <li>• $300/month maintenance after setup</li>
                    <li>• 2-3 hours/week managing campaigns</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-center text-gray-300">
                  If you're sending 250 emails/day at $10K deal value, that's <span className="text-green-400 font-bold">$80K+ in monthly opportunities</span> you're currently missing.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-12">
              <VideoHero />
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
                    <option value="0-50">0-50 emails/day (this isn't for you yet)</option>
                    <option value="50-100">50-100 emails/day</option>
                    <option value="100-250">100-250 emails/day (sweet spot)</option>
                    <option value="250+">250+ emails/day</option>
                    <option value="not-started">Haven't started yet (come back later)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium mb-2">What's your biggest cold email challenge right now?*</label>
                  <textarea
                    name="challenge"
                    id="challenge"
                    rows={3}
                    required
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Be specific - deliverability issues, low response rates, platform limitations, etc."
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
                    <option value="exploring">Just exploring (this isn't for you)</option>
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