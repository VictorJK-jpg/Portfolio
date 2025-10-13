import CalComWidget from '@/components/CalComWidget';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const Home = () => {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  // Define all data arrays
  const whatIDoItems = [
    "Build automated email sequences that warm leads before sales touches them",
    "Design conversion funnels that qualify prospects and book demos automatically",
    "Set up lead scoring and nurturing systems so your team focuses on ready-to-buy prospects",
    "Optimize your entire acquisition funnel from ad click to closed deal"
  ];

  const whatYouGetItems = [
    "Done-for-you marketing automation—email sequences, lead scoring, funnel tracking",
    "Campaign management across paid channels (Google, LinkedIn, Meta)",
    "Systems and workflows you own—handed over ready to scale",
    "Ongoing optimization focused on one metric: pipeline contribution"
  ];

  const whatThisIsntItems = [
    "Not a content agency or brand/creative work",
    "Not for early-stage startups under $500K revenue",
    "Not monthly retainers with vague deliverables",
    "Not for companies looking for 'brand awareness'—I focus on pipeline"
  ];

  const processSteps = [
    {
      title: 'Discovery & Funnel Audit',
      description: 'I analyze your current funnel, traffic sources, and conversion points to find the biggest gaps. This takes 1-2 weeks.',
      emoji: '🔍'
    },
    {
      title: 'Build & Implement',
      description: 'I build the systems: sequences, landing pages, automation flows, tracking setup. You review and approve, I handle execution.',
      emoji: '⚙️'
    },
    {
      title: 'Test & Optimize',
      description: 'We launch, measure what works, kill what doesn\'t, and scale the winners.',
      emoji: '📈'
    }
  ];

  const testimonial = {
    quote: "Victor was instrumental in building our lead gen systems using the workflows we already had. He set up our funnels for inbound traffic, SEO strategy, and tracking systems for our clients. It was brilliant.",
    name: "Carl S.",
    role: "Co-founder",
    company: "Adsome",
    photo: "/images/testimonials/carlgravatar.jpg",
    companyLogo: "/images/logos/adsomelogo.png"
  };

  const faqs = [
    {
      question: 'Do you work with early-stage startups?',
      answer: 'If you\'re pre-product-market fit or have less than $5k in marketing budget, I\'m probably not the right fit. You need to validate your offer and messaging first before investing in automation.'
    },
    {
      question: 'How long until we see results?',
      answer: 'Setup takes 2-4 weeks. You\'ll start seeing data within 30 days. Meaningful pipeline impact usually shows up around 60-90 days once we have enough data to optimize.'
    },
    {
      question: 'Do you run ads or just automation?',
      answer: 'Both. I can manage paid acquisition (Google, LinkedIn, Meta) and build the automation systems that nurture those leads into demos. The goal is always full-funnel optimization.'
    },
    {
      question: 'What if I already have a marketing team?',
      answer: 'I often work alongside internal teams to build the systems they don\'t have bandwidth for. If that\'s your situation, we can make it work.'
    },
    {
      question: 'Who will I be working with?',
      answer: 'You\'ll be working directly with me, Victor. I don\'t outsource to a team or hand you off to junior staff. When you hire me, you get me.'
    },
    {
      question: 'Where are you based?',
      answer: 'I operate remotely. My primary timezone is GMT+1, but I work with clients across US and EU time zones.'
    },
    {
      question: 'Can we pay in installments?',
      answer: 'Yes, we can structure payment terms whenever to find what works for your budget.'
    },
    {
      question: 'Do we own everything after the project?',
      answer: 'Absolutely. Upon completion, you have full ownership of all strategies, automation flows, campaign assets, and documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with structured layout */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                B2B Marketing Automation That Actually Fills Your Pipeline
              </h1>
              <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-gray-300">
                I help SaaS and tech companies build email sequences, lead nurturing systems, and conversion funnels that turn cold traffic to qualified sales conversations, without adding headcount.
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
              >
                Book a Strategy Call
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-gray-900 rounded-lg p-8 border border-white">
                <div className="text-center text-gray-400 text-lg">
                  [Visual element or image placeholder]
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem Section with two-column layout */}
      <section className="py-24 px-6 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="bg-gray-900 rounded-lg p-8 border border-white">
                <div className="text-center text-gray-400 text-lg">
                  [Visual element or image placeholder]
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                You're Getting Traffic. But Where Are the Demos?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Most B2B companies have the same problem: decent website traffic, some inbound leads, maybe even paid campaigns running. But the leads just sit there. Your sales team is chasing cold prospects. Your nurture emails are generic. And you're losing deals to competitors who stayed top-of-mind while you went silent.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The gap isn't your product or your pricing. It's the system between "interested visitor" and "ready to buy."
              </p>
              <p className="text-lg font-semibold text-white mt-6">
                That's what I build.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What I Do Section with cards */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                What I Do
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white h-full">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Email Sequences That Convert</h3>
                <p className="text-gray-300">Automated flows that educate, address objections, and push prospects toward demos. Sales only talks to warm leads.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white h-full">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Marketing Funnels That Qualify Leads</h3>
                <p className="text-gray-300">Design systems that filter out tire-kickers and surface high-intent buyers automatically.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white h-full">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Systems built for Increased Performance</h3>
                <p className="text-gray-300">Lead scoring, segmentation, and tracking setup so acquisition doesn't break when you scale.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="bg-gray-900 rounded-xl p-8 border border-white">
              <div className="space-y-4">
                {whatIDoItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section - new addition */}
      <section className="py-24 px-6 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white text-center">
                <div className="text-5xl font-bold text-white mb-2">85%</div>
                <p className="text-gray-400">Increase in qualified leads</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white text-center">
                <div className="text-5xl font-bold text-white mb-2">3.2x</div>
                <p className="text-gray-400">ROI on average</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white text-center">
                <div className="text-5xl font-bold text-white mb-2">60%</div>
                <p className="text-gray-400">Reduction in sales cycle</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white text-center">
                <div className="text-5xl font-bold text-white mb-2">2-4</div>
                <p className="text-gray-400">Weeks to implementation</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who This Is For Section with two-column layout */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Who I Work With
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                I work with B2B SaaS and tech companies who've got at least $100k in budget for marketing spend and has any of these problems:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection delay={200}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-white mt-1">•</span>
                  <p className="text-lg text-gray-200">You're getting traffic but conversion rates are terrible at your level</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-white mt-1">•</span>
                  <p className="text-lg text-gray-200">Your sales team wastes months on unqualified leads</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-white mt-1">•</span>
                  <p className="text-lg text-gray-200">You're running ads but can't track them back to closed deals</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-gray-900 rounded-xl p-8 border border-white space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-white mt-1">•</span>
                  <p className="text-lg text-gray-200">Your email nurture is a mess (or doesn't exist)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-white mt-1">•</span>
                  <p className="text-lg text-gray-200">You need marketing systems but can't afford a full team</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-lg text-gray-300 italic">
                    If you're earlier stage, heavily enterprise-focused with 18+ month sales cycles, or looking for brand/creative work, I'm not the right fit.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section with timeline */}
      <section className="py-24 px-6 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                How We Work Together
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 100}>
                <div className="bg-gray-900 rounded-xl p-8 border border-white h-full">
                  <div className="text-5xl mb-4 text-center">{step.emoji}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimatedSection delay={400}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-medium rounded-lg"
              >
                See If We're a Fit
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonial Section with highlighted quote */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                What Clients Say
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-white">
                <div className="mb-8">
                  <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">CA</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-400">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="text-center mt-12">
            <AnimatedSection delay={400}>
              <a href="/portfolio" className="inline-block">
                <Button variant="outline" className="text-white border-white hover:bg-gray-800">
                  View My Work
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You Get / What This Isn't Section with side-by-side comparison */}
      <section className="py-24 px-6 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-green-900 bg-opacity-20 rounded-xl p-8 border border-green-400">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3">✅</span> What You Get
                </h3>
                <div className="space-y-4">
                  {whatYouGetItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-red-900 bg-opacity-20 rounded-xl p-8 border border-red-400">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3">❌</span> What This Isn't
                </h3>
                <div className="space-y-4">
                  {whatThisIsntItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Book a Call Section with CTA focus */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              You're Here. So, take the Next Step.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's grab a coffee. I'll audit your current funnel and give you my opinion.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              I take on 2 projects each month to keep quality high. Schedule a discovery call below:
            </p>
          </AnimatedSection>
          <div className="bg-gray-900 rounded-xl p-8 border border-white max-w-2xl mx-auto">
            <div style={{ minWidth: 320, height: 700, overflow: "hidden" }}>
              <CalComWidget
                namespace="15min"
                calLink="victorseda/15min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with accordion-style layout */}
      <section className="py-24 px-6 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 50}>
                <details className="bg-gray-900 rounded-xl border border-white group">
                  <summary className="p-6 cursor-pointer flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;