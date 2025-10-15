// src/pages/Toolkit.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import { Feather, Users, Bot, DollarSign, BarChart2, Zap, Download, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { n8nWorkflows, N8nWorkflow } from '../data/n8nWorkflows';

const Toolkit = () => {
  const workflowCategories = [
    {
      title: 'Content & Social Media Automation',
      description: 'Automate content creation, scheduling, and publishing across platforms like YouTube, X, Instagram, Facebook, and LinkedIn.',
      icon: Feather,
      linkText: 'Request Workflows',
      linkTo: 'mailto:victor@victorseda.xyz'
    },
    {
      title: 'Lead Generation & Nurturing',
      description: 'Streamulate lead capture, qualification, and follow-up processes with automated email outreach and CRM integrations.',
      icon: Users,
      linkText: 'Request Workflows',
      linkTo: 'mailto:victor@victorseda.xyz'
    },
    {
      title: 'AI-Powered Marketing Workflows',
      description: 'Leverage advanced AI models for tasks like content generation, data analysis, and personalized customer interactions.',
      icon: Bot,
      linkText: 'Request Workflows',
      linkTo: 'mailto:victor@victorseda.xyz'
    },
    {
      title: 'Sales & CRM Automation',
      description: 'Automate CRM updates, sales pipeline management, and e-commerce order processing for improved efficiency.',
      icon: DollarSign,
      linkText: 'Request Workflows',
      linkTo: 'mailto:victor@victorseda.xyz'
    },
    {
      title: 'Reporting & Analytics Automation',
      description: 'Automate data extraction, analysis, and report generation from various marketing and sales platforms.',
      icon: BarChart2,
      linkText: 'Request Workflows',
      linkTo: 'mailto:victor@victorseda.xyz'
    },
    {
      title: 'Productivity & Internal Efficiencies',
      description: 'Boost team productivity with automated internal processes, notifications, and task management workflows.',
      icon: Zap,
      linkText: 'Request Workflows',
      linkTo: 'mailto:victor@victorseda.xyz'
    },
  ];

  const groupedWorkflows = n8nWorkflows.reduce((acc, workflow) => {
    if (!acc[workflow.category]) {
      acc[workflow.category] = [];
    }
    acc[workflow.category].push(workflow);
    return acc;
  }, {} as Record<string, N8nWorkflow[]>);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Systems I Use
              </h1>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
                This is where I share the powerful, raw AI and automation workflows I've built and gathered. These aren't plug-and-play apps; they're the blueprints of systems designed for serious growth. Take a look what's possible, and if you're ready to implement them for your business, you can quickly download them.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <div className="space-y-20">

          {/* AI n8n Content Engine */}
          <AnimatedSection delay={100}>
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white mb-6 text-center">
                AI n8n Content Engine
              </h2>
              <p className="text-lg text-[#64748B] dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Automate your entire content production pipeline for YouTube, X, Instagram, Facebook, LinkedIn, and Newsletters. This AI Agent thinks, writes, and publishes without needing you to micro-manage every post.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1E293B] dark:text-white mb-4 flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">✨</span> What It Actually Does
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-[#64748B] dark:text-gray-300">
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
                  <h3 className="text-2xl font-semibold text-[#1E293B] dark:text-white mb-4 flex items-center">
                    <span className="mr-2 text-green-600 dark:text-green-400">⚙️</span> How It Works (High-Level)
                  </h3>
                  <p className="text-[#64748B] dark:text-gray-300 mb-4">
                    The workflow listens for status changes in Notion. As soon as a content item is marked 'To Write', it kicks off the automation engine, managing the content through drafting, review, approval, and publishing.
                  </p>
                  <p className="text-[#64748B] dark:text-gray-300 mb-4">
                    It integrates tools like Notion, Google Drive, Google Docs, Slack, and can connect to OpenAI, YouTube API, Airtable, and more.
                  </p>
                  <p className="text-red-600 font-medium dark:text-red-400">
                    🚨 This workflow won't work out-of-the-box. You must connect your own credentials and tools (like Slack, Notion, etc.) before testing.
                  </p>
                </div>
              </div>

              <div className="text-center mt-10">
                <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-4">
                  Ready to Checkout the Raw Workflow?
                </h3>
                <p className="text-lg text-[#64748B] dark:text-gray-300 mb-6">
                  Download the n8n JSON file to see the full logic and structure. This is a complex blueprint, not a simple plugin.
                </p>
                <a
                  href="https://victorseda.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download n8n Workflow JSON
                </a>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-4">
                  Need This AI Content Engine Set Up for Your Business?
                </h3>
                <p className="text-lg text-[#64748B] dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Implementing this system requires deep expertise in n8n, AI integrations, and workflow optimization. I can package and customize this entire engine for your specific agency or brand, ensuring it runs flawlessly and delivers consistent results.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Book a Custom Setup Call
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Email Welcome Flow */}
          <AnimatedSection delay={200}>
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white mb-6 text-center">
                Email Welcome Flow Blueprint
              </h2>
              <p className="text-lg text-[#64748B] dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                A detailed blueprint for crafting high-converting email welcome sequences. Most B2B companies waste their welcome sequence on generic 'thanks for signing up' emails. This system qualifies leads, educates them on use cases, and pushes them toward a demo.
              </p>
              <div className="text-center mt-10">
                <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-4">
                  Explore the Welcome Flow Strategy
                </h3>
                <a
                  href="https://victorseda.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Blueprint on Gamma
                </a>
              </div>
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-4">
                  Want This High-Converting Flow Implemented for You?
                </h3>
                <p className="text-lg text-[#64748B] dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Whatever your marketing needs are, I can build and optimize this entire welcome flow specifically for your audience and goals.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Get Email Flow Setup Help
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* LinkedIn Inbound Funnel - Notion */}
          <AnimatedSection delay={300}>
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white mb-6 text-center">
                LinkedIn Inbound Funnel & Outreach Templates
              </h2>
              <p className="text-lg text-[#64748B] dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                A comprehensive Notion-based system for generating inbound leads from LinkedIn, complete with outreach templates.
              </p>
              <div className="text-center mt-10">
                <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-4">
                  Access the LinkedIn Funnel & Templates
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://victorseda.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Inbound Funnel
                  </a>
                  <a
                    href="https://victorseda.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Get Outreach Templates
                  </a>
                </div>
              </div>
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-4">
                  Want This Funnel Customized & Integrated for Your Business?
                </h3>
                <p className="text-lg text-[#64748B] dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  I can rewrite this LinkedIn strategy and funnel to your specific target audience, refine the messaging for maximum response, so it fits easily into your existing sales process.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Get LinkedIn Funnel Setup Help
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* All n8n Workflows by Category */}
          <AnimatedSection delay={400}>
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white mb-10 text-center">
                My n8n Workflow Blueprints
              </h2>

              {Object.keys(groupedWorkflows).map((categoryTitle, index) => (
                <div key={categoryTitle} className="mb-12">
                  <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-6 border-b pb-2 border-[#E2E8F0] dark:border-gray-600">
                    {categoryTitle} Workflows
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedWorkflows[categoryTitle].map((workflow) => (
                      <div key={workflow.id} className="bg-[#F8FAFC] dark:bg-[#0F172A] p-6 rounded-2xl shadow-sm border border-[#E2E8F0] dark:border-gray-600 flex flex-col hover:shadow-xl transition-all duration-300">
                        <h4 className="text-xl font-semibold text-[#1E293B] dark:text-white mb-2">{workflow.title}</h4>
                        <p className="text-[#64748B] dark:text-gray-300 text-sm mb-4 flex-grow">{workflow.description}</p>
                        <div className="flex flex-wrap gap-3 mt-auto">
                          {workflow.downloadLink && (
                            <a
                              href={workflow.downloadLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-200"
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </a>
                          )}
                          {workflow.detailsLink && (
                            <a
                              href={workflow.detailsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-200"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Details
                            </a>
                          )}
                          <Link
                            to="/contact"
                            className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E85A2A] text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-200"
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
          </AnimatedSection>

          {/* Explore More AI & Automation Blueprints by Category */}
          <section className="py-12 bg-[#F8FAFC] dark:bg-[#0F172A] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
            <div className="text-center">
              <AnimatedSection>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B] dark:text-white mb-12">
                  Explore More AI & Automation Blueprints by Category
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workflowCategories.map((category, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-4">
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1E293B] dark:text-white mb-3">{category.title}</h3>
                      <p className="text-[#64748B] dark:text-gray-300 mb-4 flex-grow">{category.description}</p>
                      <a
                        href={category.linkTo}
                        className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-semibold py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        {category.linkText}
                      </a>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Placeholder for other tools */}
          <AnimatedSection delay={500}>
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white mb-6">
                More AI & Automation Blueprints Coming Soon!
              </h2>
              <p className="text-lg text-[#64748B] dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm constantly building and curating advanced marketing automation workflows and AI models. Check back soon for more powerful tools like Figma templates, advanced email sequences, and more!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Suggest a Blueprint
              </Link>
            </div>
          </AnimatedSection>

          {/* Concluding Call to Action Section */}
          <AnimatedSection delay={600}>
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] text-white rounded-3xl p-8 lg:p-12 text-center shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Implement These In Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-[#94A3B8]">
                These blueprints are powerful, but their true value is unlocked through expert implementation and customization. If you're serious about leveraging advanced AI and automation in your processes, let's grab a coffee.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-[#1E293B] font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
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