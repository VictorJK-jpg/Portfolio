import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { BarChart3, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 lg:px-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              My Work
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
              I build B2B marketing systems for large scale business that turn traffic into qualified pipeline. 
              Here's how I've applied this approach across campaigns and clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Overview - iOS Card Style */}
      <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-12 text-center">
              My Marketing Process
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] dark:text-white mb-3">
                  1. Strategy & Funnel Audit
                </h3>
                <p className="text-[#64748B] dark:text-gray-300">
                  Analyze your current funnel, traffic sources, and conversion points to identify the biggest gaps and opportunities.
                </p>
              </div>
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] dark:text-white mb-3">
                  2. Email Sequences & Lead Nurturing
                </h3>
                <p className="text-[#64748B] dark:text-gray-300">
                  Build automated flows, lead scoring systems, and sequences that qualify prospects before sales touches them.
                </p>
              </div>
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] dark:text-white mb-3">
                  3. Campaign Management & Testing
                </h3>
                <p className="text-[#64748B] dark:text-gray-300">
                  Launch and manage acquisition campaigns (ads, email, content) with continuous testing for efficiency. 
                </p>
              </div>
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] dark:text-white mb-3">
                  4. Optimization & Reporting
                </h3>
                <p className="text-[#64748B] dark:text-gray-300">
                  Track pipeline contribution, analyze conversion data, and optimize for one metric: qualified leads that turn into revenue.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results & Impact - iOS Card Grid */}
      <section className="py-20 px-6 lg:px-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-12 text-center">
              Results & Impact
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1E293B] dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#64748B] dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack - iOS Style */}
      <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-12 text-center">
              Tech Stack
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {marketingTools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-white dark:bg-[#0F172A] rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-lg transition-all duration-300">
                      <img
                        src={tool.src}
                        alt={`${tool.name} Logo`}
                        className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-[#64748B] dark:text-gray-300">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA - iOS Style */}
      <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Take the Next Step Now?
            </h2>
            <p className="text-xl text-[#94A3B8] mb-8 max-w-3xl mx-auto">
              If you're a business owner ready to improve your acquisition with better marketing automation, let's grab a coffee. I'll audit your current funnel and give you an honest opinion.
            </p>
            <button
              onClick={() => (window.location.href = '/contact')}
              className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E85A2A] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;