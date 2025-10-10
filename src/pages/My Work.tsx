import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const Portfolio = () => {
  // --- Marketing Tools ---
  const marketingTools = [
    { name: 'Google Analytics', src: '/images/marketing-tools/icons8-google-analytics-50.svg' },
    { name: 'Google Ads', src: '/images/marketing-tools/icons8-google-ads.svg' },
    { name: 'Meta Ads', src: '/images/marketing-tools/icons8-meta-50.svg' },
    { name: 'Ahrefs', src: '/images/marketing-tools/Ahrefs-Logo.svg' },
    { name: 'Mailchimp', src: '/images/marketing-tools/mailchimp_logo.svg' },
    { name: 'Notion', src: '/images/marketing-tools/Notion_Symbol.svg' },
    { name: 'Zapier', src: '/images/marketing-tools/Zapier_logo.svg' },
    { name: 'Make.com', src: '/images/marketing-tools/Make_logo.svg' },
    { name: 'ChatGPT', src: '/images/marketing-tools/icons8-chatgpt.svg' },
    { name: 'n8n', src: '/images/marketing-tools/N8n.io_logo.svg' },
    { name: 'Klaviyo', src: '/images/marketing-tools/Klaviyo_logo.svg' },
    { name: 'Airtable', src: '/images/marketing-tools/icons8-airtable-50.svg' },
    { name: 'Apollo.io', src: '/images/marketing-tools/apollo-logo.svg' },
  ];

  // --- B2B-Focused Case Studies ---
  const projects = [
    {
      id: 1,
      src: 'https://i.imgur.com/oeWwu40.png',
      alt: 'B2B Lead Generation System',
      title: 'B2B Lead Qualification & PPC Funnel',
      description:
        'Built a Google Ads funnel with automated lead scoring and conversion tracking to qualify prospects before they hit sales. Result: higher-quality demos, lower cost per acquisition.',
    },
    {
      id: 2,
      src: 'https://i.imgur.com/3heEVA4.png',
      alt: 'Agency Marketing Growth',
      title: 'Marketing System for Video Production Agency',
      description:
        'As Lead Digital Marketing Specialist, I built the agency\'s acquisition engine—SEO strategy, content workflows, and lead nurturing that consistently brought in qualified B2B clients.',
    },
    {
      id: 3,
      src: 'https://i.imgur.com/43eKYVL.png',
      alt: 'Organic Growth Results',
      title: 'Organic Search Growth (90 Days)',
      description:
        'Implemented on-page SEO and content systems that grew search traffic in 3 months, with measurable impact on inbound lead volume and pipeline contribution.',
    },
    {
      id: 4,
      src: 'https://i.imgur.com/F3pGXbU.png',
      alt: 'Sustained SEO Performance',
      title: 'Long-Term SEO & Traffic Growth (6 Months)',
      description:
        'Built repeatable content and backlink systems that delivered sustained organic traffic growth over six months, driving consistent qualified leads.',
    },
    {
      id: 5,
      src: 'https://i.imgur.com/iVUj5Cl.png',
      alt: 'Campaign Performance Dashboard',
      title: 'Multi-Channel Campaign Tracking & Optimization',
      description:
        'Designed campaign structure and performance dashboard to track ROI across paid channels, enabling data-driven budget allocation and optimization.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* ---------- HERO ---------- */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              My Work
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              I build B2B marketing systems for large scale business that turn traffic into qualified pipeline. 
              Here's how I've applied this approach across campaigns and clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------- PROCESS OVERVIEW ---------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">
              My Marketing Process
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  1. Strategy & Funnel Audit
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Analyze your current funnel, traffic sources, and conversion points to identify the biggest gaps and opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  2. Email Sequences & Lead Nurturing
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Build automated flows, lead scoring systems, and sequences that qualify prospects before sales touches them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  3. Campaign Management & Testing
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Launch and manage acquisition campaigns (ads, email, content) with continuous testing for efficiency. 
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  4. Optimization & Reporting
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Track pipeline contribution, analyze conversion data, and optimize for one metric: qualified leads that turn into revenue.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------- RESULTS & IMPACT ---------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-12">
              Results & Impact
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg shadow-md overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 flex-grow text-left">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------- TECH STACK ---------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-12">
              Tech Stack
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {marketingTools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group">
                  <div className="p-4 rounded-lg transition-all duration-300 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                      src={tool.src}
                      alt={`${tool.name} Logo`}
                      className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-600 dark:text-gray-300">{tool.name}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Build a System That Actually Fills Your Pipeline?
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              If you're a B2B company ready to scale acquisition with marketing automation, let's talk. I'll audit your current funnel and show you where the gaps are.
            </p>
            <button
              onClick={() => (window.location.href = '/contact')}
              className="px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Book a Strategy Call
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;