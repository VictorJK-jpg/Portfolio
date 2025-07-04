import React from 'react';
import AnimatedSection from '@/components/AnimatedSection'; // Assuming you have this

const Portfolio = () => {
  // --- UPDATED: Data for Marketing Tools ---
  // IMPORTANT: Replace '/images/marketing-tools/...' with the actual public paths to your tool logos.
  // You'll need to source these logos (e.g., from official brand assets or icon libraries).
  const marketingTools = [
    { name: 'Google Analytics', src: '/images/marketing-tools/google-analytics.png' },
    { name: 'Google Ads', src: '/images/marketing-tools/google-ads.png' },
    { name: 'Meta Ads', src: '/images/marketing-tools/meta-ads.png' },
    { name: 'SEMrush', src: '/images/marketing-tools/semrush.png' },
    { name: 'Ahrefs', src: '/images/marketing-tools/ahrefs.png' },
    { name: 'Mailchimp', src: '/images/marketing-tools/mailchimp.png' },
    { name: 'HubSpot', src: '/images/marketing-tools/hubspot.png' },
    { name: 'Canva', src: '/images/marketing-tools/canva.png' },
    { name: 'Notion', src: '/images/marketing-tools/notion.png' },
    { name: 'Zapier', src: '/images/marketing-tools/zapier.png' },
    { name: 'Slack', src: '/images/marketing-tools/slack.png' },
    { name: 'ChatGPT', src: '/images/marketing-tools/chatgpt.png' },
    { name: 'n8n', src: '/images/marketing-tools/n8n.png' }, // Essential automation tool
    { name: 'Google Drive', src: '/images/marketing-tools/google-drive.png' },
    { name: 'Google Docs', src: '/images/marketing-tools/google-docs.png' },
    { name: 'Airtable', src: '/images/marketing-tools/airtable.png' },
    { name: 'Gamma.app', src: '/images/marketing-tools/gamma.png' },
    { name: 'YouTube', src: '/images/marketing-tools/youtube.png' },
    // Add more tools you use!
  ];

  // --- Data for Testimonials/Projects ---
  // These are the images you provided. I've added placeholder titles/descriptions.
  // You should refine these titles and descriptions to be concise and impactful,
  // highlighting the marketing aspect (e.g., "Organic Traffic Growth", "Lead Gen Campaign Creative").
  const testimonials = [
    { id: 1, src: 'https://i.imgur.com/QHhhxvz.jpeg', alt: 'Grocery Delivery Ad Creative', title: 'Pre-Launch Expansion Creative', description: 'Building anticipation for new service areas.' },
    { id: 2, src: 'https://i.imgur.com/FTcNvzF.png', alt: 'Columbia Launch Map', title: 'Product Launch Creative', description: 'Visuals for a plant-based supplement brand.' },
    { id: 3, src: 'https://i.imgur.com/Z3SOXjH.jpeg', alt: 'Google Search Console 3 Months', title: 'Geotargeted Launch: Columbia', description: 'Announcing service expansion in new areas.' },
    { id: 4, src: 'https://i.imgur.com/gFNZgUU.jpeg', alt: 'PPC Campaign Table', title: 'Geotargeted Launch: Astoria', description: 'Local marketing for service area expansion.' },
    { id: 5, src: 'https://i.imgur.com/Km41rpA.png', alt: 'Coming Soon Map', title: 'Brand Launch Creative & Campaign', description: 'Visuals for a new grocery delivery service.' },
    { id: 6, src: 'https://i.imgur.com/MTln5nN.jpeg', alt: 'Google Ads Overview', title: 'Luxury Product Photography', description: 'High-quality visual asset creation.' },
    { id: 7, src: 'https://i.imgur.com/gbRzkCQ.jpeg', alt: 'Astoria Launch Map', title: 'E-commerce Promotional Ad', description: 'Campaign creative for a Mother\'s Day offer.' },
    { id: 8, src: 'https://i.imgur.com/43eKYVL.png', alt: 'Plant-Based Food Ad', title: 'Organic Search Growth (3 Months  )', description: 'Screenshot showing 3 months of organic search performance.' },
    { id: 9, src: 'https://i.imgur.com/oeWwu40.png', alt: 'Mothers Day Love Ad', title: 'PPC Lead Generation Campaign', description: 'Performance data for a lead generation campaign.' },
    { id: 10, src: 'https://i.imgur.com/iVUj5Cl.png', alt: 'Versace Perfume Ad', title: 'Google Ads Campaign Overview', description: 'Key metrics from a successful ad campaign.' },
    { id: 11, src: 'https://i.imgur.com/F3pGXbU.png', alt: 'Google Search Console 6 Months', title: 'Long-Term SEO Performance', description: 'Sustained organic traffic growth over 6 months.' },
    { id: 12, src: 'https://i.imgur.com/3heEVA4.png', alt: 'Adsome.io GSC', title: 'Organic Growth for an Agency', description: 'SEO performance for a specific domain.' },
    // Add more if you have them, up to 16 for a full 4x4 grid
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900"> {/* Added dark mode background */}
      {/* Hero/Intro Section for Portfolio */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800"> {/* Changed pt-20 to pt-28 */}
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"> {/* Added dark mode */}
              My Work
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"> {/* Added dark mode */}
              Take a look at some of my previous projects and the impact I've made for clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* UPDATED: Marketing Tools Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"> {/* Added dark mode background */}
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-12"> {/* Added dark mode */}
              Tech Stack
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {marketingTools.map((tool ) => (
                <div key={tool.name} className="flex flex-col items-center group">
                  <div className="p-4 rounded-lg transition-all duration-300 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"> {/* Added dark mode */}
                    <img
                      src={tool.src}
                      alt={`${tool.name} Logo`}
                      className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 dark:invert" // Added dark:invert for logos
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-600 dark:text-gray-300"> {/* Added dark mode */}
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects/Testimonials Grid Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-gray-800"> {/* Added dark mode background */}
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-12"> {/* Added dark mode */}
              Results & Impact
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {testimonials.map((project) => (
                <div key={project.id} className="rounded-lg shadow-md overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:shadow-xl"> {/* Added dark mode */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 flex-grow text-left">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3> {/* Added dark mode */}
                    <p className="text-sm text-slate-600 dark:text-gray-300">{project.description}</p> {/* Added dark mode */}
                    {/* Optional: Add a button to link to a full case study if you create one */}
                    {/* <button className="mt-4 text-blue-600 hover:underline">View Case Study</button> */}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Optional: Call to Action for a Discovery Call or Contact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"> {/* Added dark mode background */}
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6"> {/* Added dark mode */}
              Ready to See Results for Your Business?
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"> {/* Added dark mode */}
              Let's discuss how I can help you achieve your marketing goals.
            </p>
            {/* Assuming scrollToContact navigates to your contact page */}
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700" // Added dark mode
            >
              Book a Discovery Call
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
