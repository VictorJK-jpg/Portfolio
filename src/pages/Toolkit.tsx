// src/pages/Toolkit.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // For internal links
import AnimatedSection from '@/components/AnimatedSection'; // Assuming you have this component
// Import Lucide icons for the new categories
import { Feather, Users, Bot, DollarSign, BarChart2, Zap } from 'lucide-react';

// Import your n8n workflows data
import { n8nWorkflows, N8nWorkflow } from '../data/n8nWorkflows'; // Adjust path if necessary

const Toolkit = () => {
  // --- New: Data for Workflow Categories (existing) ---
  const workflowCategories = [
    {
      title: 'Content & Social Media Automation',
      description: 'Automate content creation, scheduling, and publishing across platforms like YouTube, X, Instagram, Facebook, and LinkedIn.',
      icon: Feather, // Lucide icon component
      linkText: 'Request Workflows',
      linkTo: '/contact'
    },
    {
      title: 'Lead Generation & Nurturing',
      description: 'Streamulate lead capture, qualification, and follow-up processes with automated email outreach and CRM integrations.',
      icon: Users, // Lucide icon component
      linkText: 'Request Workflows',
      linkTo: '/contact'
    },
    {
      title: 'AI-Powered Marketing Workflows',
      description: 'Leverage advanced AI models for tasks like content generation, data analysis, and personalized customer interactions.',
      icon: Bot, // Lucide icon component
      linkText: 'Request Workflows',
      linkTo: '/contact'
    },
    {
      title: 'Sales & CRM Automation',
      description: 'Automate CRM updates, sales pipeline management, and e-commerce order processing for improved efficiency.',
      icon: DollarSign, // Lucide icon component
      linkText: 'Request Workflows',
      linkTo: '/contact'
    },
    {
      title: 'Reporting & Analytics Automation',
      description: 'Automate data extraction, analysis, and report generation from various marketing and sales platforms.',
      icon: BarChart2, // Lucide icon component
      linkText: 'Request Workflows',
      linkTo: '/contact'
    },
    {
      title: 'Productivity & Internal Efficiencies',
      description: 'Boost team productivity with automated internal processes, notifications, and task management workflows.',
      icon: Zap, // Lucide icon component
      linkText: 'Request Workflows',
      linkTo: '/contact'
    },
  ];

  // --- New: Group workflows by category for display ---
  const groupedWorkflows = n8nWorkflows.reduce((acc, workflow) => {
    if (!acc[workflow.category]) {
      acc[workflow.category] = [];
    }
    acc[workflow.category].push(workflow);
    return acc;
  }, {} as Record<string, N8nWorkflow[]>);


  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              My AI & Automation Playbook
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This is where I share the powerful, raw AI and automation workflows I've built and gathered. These aren't plug-and-play apps; they're the blueprints of systems designed for serious growth. Explore what's possible, and if you're ready to implement them for your business, I'm here to help you unlock their full potential.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-20">

          {/* AI n8n Content Engine */}
          <AnimatedSection delay={100}>
            <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                AI n8n Content Engine
              </h2>
              <p className="text-lg text-slate-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Automate your entire content production pipeline for YouTube, X, Instagram, Facebook, LinkedIn, and Newsletters. This AI Agent thinks, writes, and publishes without needing you to micro-manage every post.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">✨</span> What It Actually Does
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300">
                    <li>Pulls content items from your Notion content board</li>
                    <li>Tracks phase status (Backlog → Posted)</li>
                    <li>Creates content folders automatically in Google Drive</li>
                    <li>Writes scripts inside Google Docs (with your variables + formatting)</li>
                    <li>Uploads thumbnails, visual assets, references</li>
                    <li>Sends status updates to Slack (with deep links)</li>
                    <li>Handles approval flows via Slack buttons</li>
                    <li>Pushes everything forward when the script is approved</li>
                    <li>Robust error handling: alerts for skipped phases, wrong dates, missing assets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <span className="mr-2 text-green-600 dark:text-green-400">⚙️</span> How It Works (High-Level)
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 mb-4">
                    The workflow listens for status changes in Notion. As soon as a content item is marked 'To Write', it kicks off the automation engine, managing the content through drafting, review, approval, and publishing.
                  </p>
                  <p className="text-slate-700 dark:text-gray-300 mb-4">
                    It integrates tools like Notion, Google Drive, Google Docs, Slack, and can connect to OpenAI, YouTube API, Airtable, and more.
                  </p>
                  <p className="text-red-600 font-medium dark:text-red-400">
                    🚨 This workflow won’t work out-of-the-box. You must connect your own credentials and tools (like Slack, Notion, etc.) before testing.
                  </p>
                </div>
              </div>

              <div className="text-center mt-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Ready to Checkout the Raw Workflow?
                </h3>
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-6">
                  Download the n8n JSON file to see the full logic and structure. Warning: This is a complex blueprint, not a simple plugin.
                </p>
                <a
                  href="https://victorseda.xyz/" /*https://drive.google.com/file/d/1tvwyrTDH5GU4t0LA-HpU3HphfTabwQoh/view?usp=sharing" Remove the last character to get the link back*/
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  Download n8n Workflow JSON
                </a>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Need This AI Content Engine Set Up for Your Business?
                </h3>
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Implementing this powerful system requires deep expertise in n8n, AI integrations, and workflow optimization. I can package and customize this entire engine for your specific agency or brand, ensuring it runs flawlessly and delivers consistent results.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Book a Custom Setup Call
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Email Welcome Flow */}
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Email Welcome Flow Blueprint
              </h2>
              <p className="text-lg text-slate-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                A detailed blueprint for crafting high-converting email welcome sequences. Understand the strategy, content, and flow that turns new subscribers into engaged leads.
              </p>
              <div className="text-center mt-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Explore the Welcome Flow Strategy
                </h3>
                <a
                  href= "https://victorseda.xyz" /*"https://gamma.app/docs/Welcome-Flow-cvqck3qt1mg7hrh?mode=doc"*/
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  View Blueprint on Gamma
                </a>
              </div>
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Want This High-Converting Flow Implemented for You?
                </h3>
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  From strategic planning and compelling copywriting to seamless integration with your email platform, I can build and optimize this entire welcome flow specifically for your audience and goals.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Get Email Flow Setup Help
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* LinkedIn Inbound Funnel - Notion */}
          <AnimatedSection delay={300}>
            <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                LinkedIn Inbound Funnel & Outreach Templates
              </h2>
              <p className="text-lg text-slate-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                A comprehensive Notion-based system for generating inbound leads from LinkedIn, complete with high-response outreach templates.
              </p>
              <div className="text-center mt-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Access the LinkedIn Funnel & Templates
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://victorseda.xyz/" /*"https://basalt-factory-2ff.notion.site/LinkedIn-Inbound-Funnel-20c762ad80b180b2abe1e96574f93e3f?pvs=4"*/
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    View Inbound Funnel
                  </a>
                  <a
                    href="https://victorseda.xyz/" /*"https://basalt-factory-2ff.notion.site/13-High-Response-LinkedIn-Outreach-Templates-we-ve-used-for-SalesRobot-customers-20c762ad80b1806294f1c7804b30d9bd?pvs=4"*/
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    Get Outreach Templates
                  </a>
                </div>
              </div>
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Want This Funnel Customized & Integrated for Your Business?
                </h3>
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  I can tailor this LinkedIn strategy and funnel to your specific target audience, refine the messaging for maximum response, and integrate it seamlessly into your existing sales process.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Get LinkedIn Funnel Setup Help
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* New Section: All n8n Workflows by Category */}
            <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl mt-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">
                My n8n Workflow Blueprints
              </h2>

              {Object.keys(groupedWorkflows ).map((categoryTitle, index) => (
                <div key={categoryTitle} className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b pb-2">
                    {categoryTitle} Workflows
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedWorkflows[categoryTitle].map((workflow) => (
                      <div key={workflow.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 flex flex-col">
                        <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{workflow.title}</h4>
                        <p className="text-slate-700 dark:text-gray-300 text-sm mb-4 flex-grow">{workflow.description}</p>
                        <div className="flex flex-wrap gap-3 mt-auto"> {/* Use mt-auto to push buttons to bottom */}
                          {workflow.downloadLink && (
                            <a
                              href={workflow.downloadLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              Download Workflow
                            </a>
                          )}
                          {workflow.detailsLink && (
                            <a
                              href={workflow.detailsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              View Details
                            </a>
                          )}
                          <Link
                            to="/contact" // Or a specific contact form for this workflow
                            className="inline-block bg-slate-700 hover:bg-slate-800 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300"
                          >
                            {workflow.callToAction}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>


          {/* New: Explore More AI & Automation Blueprints by Category (existing, consider if still needed with the above) */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800 rounded-xl">
            <div className="max-w-7xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-12">
                  Explore More AI & Automation Blueprints by Category
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workflowCategories.map((category, index ) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center h-full dark:bg-gray-900 dark:border-gray-700 dark:shadow-md">
                      <category.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{category.title}</h3>
                      <p className="text-slate-600 dark:text-gray-300 mb-4 flex-grow">{category.description}</p>
                      <Link
                        to={category.linkTo}
                        className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                      >
                        {category.linkText}
                      </Link>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Placeholder for other tools like Figma Templates, Email Templates etc. */}
          <AnimatedSection delay={500}> {/* Adjusted delay */}
            <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-lg text-center dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                More AI & Automation Blueprints Coming Soon!
              </h2>
              <p className="text-lg text-slate-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm constantly building and curating advanced marketing automation workflows and AI models. Check back soon for more powerful tools like Figma templates, advanced email sequences, and more!
              </p>
              <Link
                to="/contact"
                className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Suggest a Blueprint
              </Link>
            </div>
          </AnimatedSection>

          {/* Concluding Call to Action Section */}
          <AnimatedSection delay={600}> {/* Adjusted delay */}
            <div className="bg-slate-900 text-white rounded-xl p-8 md:p-12 text-center dark:bg-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 dark:text-white">
                Ready to Implement These for Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto dark:text-gray-200">
                These blueprints are powerful, but their true value is unlocked through expert implementation and customization. If you're serious about leveraging advanced AI and automation to drive your marketing, let's talk.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
   );
};

export default Toolkit;
