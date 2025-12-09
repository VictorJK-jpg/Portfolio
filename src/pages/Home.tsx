import { Check, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { useState, useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

// Video component - REMOVED/COMMENTED
// Video component with arrow and label
// const VideoHero = () => {
//   return (
//     <div className="relative">
//       {/* Arrow and label */}
//       <div className="absolute -top-12 right-0 flex items-center gap-2 animate-bounce">
//         <div className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
//           Remail Demo
//         </div>
//         <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       </div>
//       
//       {/* Original video container */}
//       <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] dark:from-gray-800 dark:to-gray-900 rounded-3xl p-1 aspect-video relative overflow-hidden shadow-xl">
//         <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
//           <iframe 
//             src="https://www.loom.com/embed/6ad0a0a6206043c18e5b00af6d72861e" 
//             frameBorder="0" 
//             webkitallowfullscreen="true"
//             mozallowfullscreen="true"
//             allowFullScreen
//             title="Victor Seda"
//             style={{
//               position: 'absolute', 
//               top: 0, 
//               left: 0, 
//               width: '100%', 
//               height: '100%',
//               borderRadius: '20px'
//             }}
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 mb-4 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-xl font-semibold text-[#1E293B] dark:text-white pr-4">{question}</h3>
        <ChevronDown 
          className={`w-6 h-6 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-base text-[#64748B] dark:text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  // Rotating taglines
  const taglines = [
    "B2B Marketing Automation That Actually Works",
    "Turn Traffic Into Qualified Demo Calls", 
    "Marketing Systems That Scale Your Revenue"
  ];

  // Rotate taglines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#FF6B35" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const faqs = [
    {
      question: 'Do you work with early-stage startups?',
      answer: 'If you\'re pre-product-market fit or have less than $5k in marketing budget, I\'m probably not the right fit. You need to validate your offer first.'
    },
    {
      question: 'How long until we see results?',
      answer: 'Setup takes 2-4 weeks. You\'ll start seeing data within 30 days. Real pipeline impact shows up around 60-90 days once we have enough data.'
    },
    {
      question: 'Do you run ads or just automation?',
      answer: 'Both. I manage paid acquisition and build the automation systems that nurture leads into demos. Always full-funnel optimization.'
    },
    {
      question: 'Who will I be working with?',
      answer: 'You\'ll be working directly with me, Victor. No outsourcing, no junior staff. When you hire me, you get me.'
    },
    {
      question: 'Do we own everything after?',
      answer: 'Yes. Full ownership of all strategies, automation flows, campaign assets, and documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            
            {/* Text - Smaller column */}
            <AnimatedSection className="lg:col-span-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1E293B] dark:text-white mb-6 leading-tight tracking-tight">
                <span className="inline-block transition-all duration-500 ease-in-out">
                  {taglines[currentTaglineIndex]}
                </span>
              </h1>
              <p className="text-lg text-[#64748B] dark:text-gray-300 mb-8 leading-relaxed font-normal">
                I build marketing systems, sales systems, and conversion funnels for SaaS founders. Perfect for busy founders who need expertise without the overhead of a full team.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-[#FF6B35] hover:bg-[#E85A2A] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Let's Talk
              </button>
            </AnimatedSection>

            {/* Video - Larger column - REMOVED/COMMENTED */}
            {/* <AnimatedSection delay={200} className="lg:col-span-3">
              <VideoHero />
            </AnimatedSection> */}
          </div>
        </div>
      </section>

      {/* Problem Section - iOS Card Style */}
      <section className="py-20 px-6 lg:px-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Bold Question - Left */}
              <AnimatedSection>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1E293B] dark:text-white leading-tight">
                  You're getting traffic. But where are the demos?
                </h2>
              </AnimatedSection>

              {/* Description - Right */}
              <AnimatedSection delay={200}>
                <div className="space-y-5">
                  <p className="text-lg text-[#64748B] dark:text-gray-300 leading-relaxed">
                    Most B2B companies have decent traffic and some inbound leads. But the leads just sit there.
                  </p>
                  <p className="text-lg text-[#64748B] dark:text-gray-300 leading-relaxed">
                    Your sales team chases cold prospects. Your nurture emails are generic. You're losing deals to competitors who stayed top-of-mind.
                  </p>
                  <p className="text-lg text-[#1E293B] dark:text-white font-semibold">
                    The gap isn't your product. It's the system between "interested visitor" and "ready to buy."
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do - iOS Card Grid */}
      <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-12 text-center">
              I fix the gap between traffic and demos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-white mb-3">Email Automation</h3>
                <p className="text-base text-[#64748B] dark:text-gray-300 mb-5 leading-relaxed">
                  Sequences that nurture leads until they're ready to buy
                </p>
                <div className="text-sm text-[#FF6B35] font-semibold">
                  Perfect if: Your leads go cold after first contact
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-white mb-3">Conversion Funnels</h3>
                <p className="text-base text-[#64748B] dark:text-gray-300 mb-5 leading-relaxed">
                  Systems that qualify buyers automatically
                </p>
                <div className="text-sm text-[#FF6B35] font-semibold">
                  Perfect if: Your sales team wastes time on bad leads
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-white mb-3">Lead Scoring</h3>
                <p className="text-base text-[#64748B] dark:text-gray-300 mb-5 leading-relaxed">
                  Priority system so sales focuses on hot leads
                </p>
                <div className="text-sm text-[#FF6B35] font-semibold">
                  Perfect if: You can't tell which leads are worth pursuing
                </div>
              </div>
            </div>

            {/* Clear qualification statement */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-[#F8FAFC] to-white dark:from-[#1E293B] dark:to-[#1E293B] rounded-2xl p-6 border border-[#E2E8F0] dark:border-gray-700 shadow-lg">
                <p className="text-lg text-[#1E293B] dark:text-white font-semibold mb-2">
                  I partner with businesses who have a real marketing budget
                </p>
                <p className="text-base text-[#64748B] dark:text-gray-300">
                  If you're getting traffic but not enough demos, we should talk.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section - iOS Style */}
      <section className="py-20 px-6 lg:px-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1E293B] dark:text-white mb-12 text-center">
              Results for clients who implement these systems
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#FF6B35] mb-3">85%</div>
                <p className="text-lg text-[#1E293B] dark:text-white font-semibold mb-1">More qualified leads</p>
                <p className="text-sm text-[#64748B] dark:text-gray-400">Better scoring & nurturing</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#FF6B35] mb-3">3.2x</div>
                <p className="text-lg text-[#1E293B] dark:text-white font-semibold mb-1">Marketing ROI</p>
                <p className="text-sm text-[#64748B] dark:text-gray-400">From funnel optimization</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#FF6B35] mb-3">60%</div>
                <p className="text-lg text-[#1E293B] dark:text-white font-semibold mb-1">Shorter sales cycle</p>
                <p className="text-sm text-[#64748B] dark:text-gray-400">First touch to close</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - iOS Cards */}
      <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-12 text-center">
              How we work together
            </h2>
            
            <div className="space-y-6">
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] dark:text-white mb-2">Audit</h3>
                    <p className="text-base text-[#64748B] dark:text-gray-300 leading-relaxed">
                      I analyze your funnel, traffic, and conversion points. Find the gaps. Takes 1-2 weeks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] dark:text-white mb-2">Build</h3>
                    <p className="text-base text-[#64748B] dark:text-gray-300 leading-relaxed">
                      I build the systems. Email sequences, landing pages, automation flows, tracking. You approve, I execute.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 border border-[#E2E8F0] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] dark:text-white mb-2">Optimize</h3>
                    <p className="text-base text-[#64748B] dark:text-gray-300 leading-relaxed">
                      We launch, measure what works, kill what doesn't, scale the winners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Testimonial - iOS Card */}
      <section className="py-20 px-6 lg:px-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          
          <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left - Heading */}
              <div className="lg:col-span-3">
                <AnimatedSection>
                  <h2 className="text-5xl font-bold text-[#1E293B] dark:text-white mb-4">
                    Clients
                  </h2>
                  <p className="text-base text-[#64748B] dark:text-gray-300">
                    Feedback from people we've worked with.
                  </p>
                </AnimatedSection>
              </div>

              {/* Middle - Client photo */}
              <div className="lg:col-span-4">
                <AnimatedSection delay={100}>
                  <div className="bg-gradient-to-br from-[#2D3748] to-[#1E293B] dark:from-gray-700 dark:to-gray-800 rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                    <img 
                      src="/images/testimonials/carl-photo.png" 
                      alt="Carl S., Co-founder at Adsome" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AnimatedSection>
              </div>

              {/* Right - Testimonial */}
              <div className="lg:col-span-5">
                <AnimatedSection delay={200}>
                  <div className="space-y-5">
                    {/* Company name */}
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#FF6B35] rounded-lg"></div>
                      <span className="text-lg font-semibold text-[#1E293B] dark:text-white">Adsome</span>
                    </div>

                    {/* Testimonial text */}
                    <h3 className="text-2xl font-bold text-[#1E293B] dark:text-white leading-tight">
                      Victor ran our lead enrichment systems. He also managed the funnels, SEO strategy, and tracking processes.
                    </h3>

                    <p className="text-base text-[#64748B] dark:text-gray-300 leading-relaxed">
                      His approach was always based off delivering quality and great advice along the way which helped us greatly as a startup.
                      He was always available to help and very communicative.
                    </p>

                    {/* Author info */}
                    <div className="pt-3">
                      <p className="text-base font-semibold text-[#1E293B] dark:text-white">Carl S.</p>
                      <p className="text-sm text-[#64748B] dark:text-gray-300">Co-founder at Adsome</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for - iOS Card */}
      <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
              <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-8">
                Who I work with
              </h2>
              
              <p className="text-xl text-[#64748B] dark:text-gray-300 mb-8">
                B2B businesses with a marketing budget who have these problems:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white dark:bg-[#0F172A] rounded-2xl p-4 border border-[#E2E8F0] dark:border-gray-700">
                  <Check className="w-6 h-6 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                  <p className="text-base text-[#64748B] dark:text-gray-300">Traffic but terrible conversion rates</p>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-[#0F172A] rounded-2xl p-4 border border-[#E2E8F0] dark:border-gray-700">
                  <Check className="w-6 h-6 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                  <p className="text-base text-[#64748B] dark:text-gray-300">Sales team chasing unqualified leads</p>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-[#0F172A] rounded-2xl p-4 border border-[#E2E8F0] dark:border-gray-700">
                  <Check className="w-6 h-6 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                  <p className="text-base text-[#64748B] dark:text-gray-300">Can't track ads back to closed deals</p>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-[#0F172A] rounded-2xl p-4 border border-[#E2E8F0] dark:border-gray-700">
                  <Check className="w-6 h-6 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                  <p className="text-base text-[#64748B] dark:text-gray-300">Email nurture is broken or doesn't exist</p>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-[#0F172A] rounded-2xl p-4 border border-[#E2E8F0] dark:border-gray-700">
                  <Check className="w-6 h-6 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                  <p className="text-base text-[#64748B] dark:text-gray-300">Need marketing systems but can't afford a full team</p>
                </div>
              </div>

              <p className="text-base text-[#64748B] dark:text-gray-300 italic mt-8">
                If you're pre-PMF, enterprise-focused with 18+ month sales cycles, or want brand/creative work, I'm not the right fit.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA with Calendar - iOS Card */}
      <section className="py-20 px-6 lg:px-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Text */}
              <AnimatedSection>
                <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-6">
                  Let's talk
                </h2>
                <p className="text-xl text-[#64748B] dark:text-gray-300 mb-6">
                  Book a 15-minute call. I'll audit your funnel and tell you what's broken.
                </p>
                <p className="text-base text-[#64748B] dark:text-gray-300 mb-8">
                  I take on 2 projects per month. If I'm a fit, we'll start in 2-4 weeks.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FF6B35]" />
                    <a href="mailto:victor@victorseda.xyz" className="text-[#FF6B35] hover:text-[#E85A2A] text-base font-medium">
                      victor@victorseda.xyz
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Calendar Button */}
              <AnimatedSection delay={200}>
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] dark:from-[#0F172A] dark:to-[#1E293B] rounded-3xl p-8 border-2 border-[#FF6B35]/30 shadow-2xl">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-[#FF6B35] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Book Your Free Audit Call
                    </h3>
                    <p className="text-base text-[#94A3B8] mb-6">
                      Choose a time that works for you
                    </p>
                    <button
                      data-cal-namespace="15min"
                      data-cal-link="victorseda/15min"
                      data-cal-config='{"layout":"month_view"}'
                      className="w-full bg-[#FF6B35] hover:bg-[#E85A2A] text-white px-8 py-4 text-base font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Select a Time Slot
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with Accordion - iOS Cards */}
      <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#1E293B] dark:text-white mb-12 text-center">
              FAQ
            </h2>
          </AnimatedSection>

          <div>
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;