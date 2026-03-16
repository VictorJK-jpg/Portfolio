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
    <div className="bg-gray-50 rounded-2xl p-6 mb-4 border border-gray-200 shadow-sm hover:shadow-md transition-all">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-xl font-semibold text-[#1E293B] pr-4">{question}</h3>
        <ChevronDown 
          className={`w-6 h-6 text-[#1E293B] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-base text-gray-600 leading-relaxed">{answer}</p>
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
    "SEO for Agencies", 
  ];

  // Rotate taglines every 6 seconds (allowing 1s fade out, 4s display, 1s fade in)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#1E293B" } },
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
      answer: 'Both. We manage paid acquisition and build the automation systems that nurture leads into demos. Always full-funnel optimization.'
    },
    {
      question: 'Who will I be working with?',
      answer: 'You\'ll be working directly with our team. No outsourcing, no junior staff. When you hire us, you get our experts.'
    },
    {
      question: 'Do we own everything after?',
      answer: 'Yes. Full ownership of all strategies, automation flows, campaign assets, and documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white transition-colors duration-300" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-16 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto w-full">
          <AnimatedSection>
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#1E293B] leading-tight tracking-tight relative lg:h-32 h-24">
                {taglines.map((tagline, index) => (
                  <span
                    key={index}
                    className="absolute inset-0 flex items-center transition-opacity duration-1000 ease-in-out"
                    style={{
                      opacity: currentTaglineIndex === index ? 1 : 0,
                    }}
                  >
                    {tagline}
                  </span>
                ))}
              </h1>
                <div className="pt-8 lg:pt-16">
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                We run marketing systems, sales systems, and funnels for business owners. Perfect for busy founders who need expertise without the overhead of a full team.
              </p>
            </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={scrollToContact}
                className="bg-[#1E293B] hover:bg-[#0F172A] text-white px-8 py-4 text-base font-semibold rounded-lg transition-all duration-200"
              >
                Book a Call
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-sm">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 mb-1">✓ Email Marketing</p>
                <p className="text-gray-600">Done-for-you campaigns</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 mb-1">✓ Lead Generation</p>
                <p className="text-gray-600">Qualified prospects</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 mb-1">✓ Personalization</p>
                <p className="text-gray-600">At unlimited scale</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section - iOS Card Style */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Bold Question - Left */}
              <AnimatedSection>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight">
                  Scale Your Sending Power Without Scaling Your Budget
                </h2>
              </AnimatedSection>

              {/* Description - Right */}
              <AnimatedSection delay={200}>
                <div className="space-y-5">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Most teams use shared email infrastructure. That means poor deliverability, high bounce rates, and lost revenue.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You need dedicated IP infrastructure. But that costs $1000s per month and takes weeks to set up.
                  </p>
                  <p className="text-lg text-[#1E293B] font-semibold">
                    We handle the infrastructure. You focus on selling.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do - iOS Card Grid */}
      <section className="py-20 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Email Automation Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Feature 1 */}
              <div className="bg-[#1E293B] rounded-3xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Manual Domain & Inbox Setup</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  We handle all the technical setup for your sending domain so you get maximum deliverability
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#1E293B] rounded-3xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Gmail & Outlook Supported</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  Works seamlessly with both Gmail and Outlook so your entire team can send
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#1E293B] rounded-3xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Turnaround</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  Get your first inbox live in under 24 hours, not weeks
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#1E293B] rounded-3xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Done-For-You Service</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  We handle everything. You focus on the business
                </p>
              </div>
            </div>

          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section - iOS Style */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1E293B] mb-12 text-center">
              Results for clients who implement these systems
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1E293B] mb-3">85%</div>
                <p className="text-lg text-[#1E293B] font-semibold mb-1">More qualified leads</p>
                <p className="text-sm text-gray-600">Better scoring & nurturing</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1E293B] mb-3">3.2x</div>
                <p className="text-lg text-[#1E293B] font-semibold mb-1">Marketing ROI</p>
                <p className="text-sm text-gray-600">From funnel optimization</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1E293B] mb-3">60%</div>
                <p className="text-lg text-[#1E293B] font-semibold mb-1">Shorter sales cycle</p>
                <p className="text-sm text-gray-600">First touch to close</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - iOS Cards */}
      <section className="py-20 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              How we work together
            </h2>
            
            <div className="space-y-6">
              <div className="bg-[#1E293B] rounded-3xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Audit</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      We analyze your funnel, traffic, and conversion points. Find the gaps. Takes 1-2 weeks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E293B] rounded-3xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Build</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      We build the systems. Email sequences, landing pages, automation flows, tracking. You approve, we execute.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E293B] rounded-3xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Optimize</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
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
      <section className="py-20 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          
          <div className="bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-700">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left - Heading */}
              <div className="lg:col-span-3">
                <AnimatedSection>
                  <h2 className="text-5xl font-bold text-white mb-4">
                    Clients
                  </h2>
                  <p className="text-base text-gray-300">
                    Feedback from people we've worked with.
                  </p>
                </AnimatedSection>
              </div>

              {/* Middle - Client photo */}
              <div className="lg:col-span-4">
                <AnimatedSection delay={100}>
                  <div className="bg-gradient-to-br from-[#2D3748] to-[#1E293B] rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
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
                      <div className="w-6 h-6 bg-white rounded-lg"></div>
                      <span className="text-lg font-semibold text-white">Adsome</span>
                    </div>

                    {/* Testimonial text */}
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      Victor ran our lead enrichment systems. He also managed the funnels, SEO strategy, and tracking processes.
                    </h3>

                    <p className="text-base text-gray-300 leading-relaxed">
                      His approach was always based off delivering quality and great advice along the way which helped us greatly as a startup.
                      He was always available to help and very communicative.
                    </p>

                    {/* Author info */}
                    <div className="pt-3">
                      <p className="text-base font-semibold text-white">Carl S.</p>
                      <p className="text-sm text-gray-400">Co-founder at Adsome</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for - iOS Card */}
      <section className="py-20 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-700">
              <h2 className="text-4xl font-bold text-white mb-8">
                Who I work with
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                B2B businesses with a marketing budget who have these problems:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#0F172A] rounded-2xl p-4 border border-gray-700">
                  <Check className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-base text-gray-300">Traffic but terrible conversion rates</p>
                </div>
                <div className="flex items-start gap-4 bg-[#0F172A] rounded-2xl p-4 border border-gray-700">
                  <Check className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-base text-gray-300">Sales team chasing unqualified leads</p>
                </div>
                <div className="flex items-start gap-4 bg-[#0F172A] rounded-2xl p-4 border border-gray-700">
                  <Check className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-base text-gray-300">Can't track ads back to closed deals</p>
                </div>
                <div className="flex items-start gap-4 bg-[#0F172A] rounded-2xl p-4 border border-gray-700">
                  <Check className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-base text-gray-300">Email nurture is broken or doesn't exist</p>
                </div>
                <div className="flex items-start gap-4 bg-[#0F172A] rounded-2xl p-4 border border-gray-700">
                  <Check className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-base text-gray-300">Need marketing systems but can't afford a full team</p>
                </div>
              </div>

              <p className="text-base text-gray-400 italic mt-8">
                If you're pre-PMF, enterprise-focused with 18+ month sales cycles, or want brand/creative work, I'm not the right fit.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA with Calendar - iOS Card */}
      <section className="py-20 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Text */}
              <AnimatedSection>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Let's talk
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Book a 15-minute call. I'll audit your funnel and tell you what's broken.
                </p>
                <p className="text-base text-gray-300 mb-8">
                  I take on 2 projects per month. If I'm a fit, we'll start in 2-4 weeks.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white" />
                    <a href="mailto:victor@victorseda.xyz" className="text-white hover:text-gray-300 text-base font-medium">
                      victor@victorseda.xyz
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Calendar Button */}
              <AnimatedSection delay={200}>
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-8 border-2 border-gray-700 shadow-2xl">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Book Your Free Audit Call
                    </h3>
                    <p className="text-base text-gray-400 mb-6">
                      Choose a time that works for you
                    </p>
                    <button
                      data-cal-namespace="15min"
                      data-cal-link="victorseda/15min"
                      data-cal-config='{"layout":"month_view"}'
                      className="w-full bg-white hover:bg-gray-100 text-[#0F172A] px-8 py-4 text-base font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
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
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#1E293B] mb-12 text-center">
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