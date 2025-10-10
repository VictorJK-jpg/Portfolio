import CalComWidget from '@/components/CalComWidget';
import { Target, Zap, TrendingUp, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import AnimatedSection from '@/components/AnimatedSection';
import Portfolio from './My Work';

const Home = () => {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

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
      description: 'I analyze your current funnel, traffic sources, and conversion points to find the biggest gaps. This usually takes 1-2 weeks.',
      emoji: '🔍'
    },
    {
      title: 'Build & Implement',
      description: 'I build the systems—email sequences, landing pages, automation flows, tracking setup. You review and approve, I handle execution.',
      emoji: '⚙️'
    },
    {
      title: 'Test & Optimize',
      description: 'We launch, measure what works, kill what doesn\'t, and scale the winners. Ongoing optimization focused on pipeline contribution.',
      emoji: '📈'
    }
  ];

  const credibilityPoints = [
    {
      title: 'I\'ve Done This at Scale',
      description: 'I was Lead Digital Marketing Specialist at a video production agency, where I built and managed acquisition systems that brought in consistent B2B clients month over month. I know how this works.'
    },
    {
      title: 'I Build My Own Tools',
      description: 'I don\'t just talk about automation—I built my own cold email infrastructure from scratch (AWS, Resend, custom backend). If you need someone who can actually implement technical marketing systems, that\'s me.'
    },
    {
      title: 'I Only Do B2B',
      description: 'I\'m not an agency that does everything for everyone. I focus exclusively on B2B marketing automation because that\'s where I deliver the most impact. If you need someone who understands long sales cycles and pipeline metrics, you\'re in the right place.'
    }
  ];

  const faqs = [
    {
      question: 'How much does this cost?',
      answer: 'It depends on scope, but most clients invest $3-7K/month for done-for-you marketing automation and campaign management. I can give you exact pricing after we talk about your goals.'
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'If you\'re pre-product-market fit or doing less than $500K in revenue, I\'m probably not the right fit yet. You need to validate your offer and messaging first before investing in automation.'
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
      answer: 'I often work alongside internal teams to build the systems they don\'t have bandwidth for—email automation, funnel optimization, technical implementation. If that\'s your situation, we can make it work.'
    },
    {
      question: 'Where are you based?',
      answer: 'I operate remotely. My primary timezone is GMT+1, but I work with clients across US and EU time zones.'
    },
    {
      question: 'Can we pay in installments?',
      answer: 'Yes, we can structure payment terms during our discovery call to find what works for your budget.'
    },
    {
      question: 'Do we own everything after the project?',
      answer: 'Absolutely. Upon completion, you have full ownership of all strategies, automation flows, campaign assets, and documentation. Everything is handed over ready to scale.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              B2B Marketing Automation That Actually Fills Your Pipeline
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              I help SaaS and tech companies build email sequences, lead nurturing systems, and conversion funnels that turn cold traffic to qualified sales conversations, without adding headcount.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Book a Strategy Call
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                You're Getting Traffic. But Where Are the Demos?
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                Most B2B companies have the same problem: decent website traffic, some inbound leads, maybe even paid campaigns running. But the leads just sit there. Your sales team is chasing cold prospects. Your nurture emails are generic. And you're losing deals to competitors who stayed top-of-mind while you went silent.
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                The gap isn't your product or your pricing. It's the system between "interested visitor" and "ready to buy."
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white mt-6">
                That's what I build.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What I Do
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <AnimatedSection delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-blue-600">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Email Sequences That Actually Nurture</h3>
                <p className="text-slate-600 dark:text-gray-300">I build automated email flows that educate prospects, address objections, and push them toward demos—so your sales team only talks to people who are ready.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-blue-600">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Conversion Funnels That Qualify Leads</h3>
                <p className="text-slate-600 dark:text-gray-300">From first click to booked demo, I design funnels that filter out tire-kickers and surface high-intent prospects automatically.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-blue-600">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Marketing Systems That Scale</h3>
                <p className="text-slate-600 dark:text-gray-300">I set up the infrastructure (lead scoring, segmentation, retargeting) so your acquisition doesn't break when you 2x your ad spend.</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={400}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:shadow-lg">
                <div className="space-y-4">
                  {whatIDoItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-lg text-slate-700 dark:text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Who I Work With
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8">
                I work with B2B SaaS and tech companies doing $500K-$5M in revenue who have one or more of these problems:
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              <div className="flex items-start space-x-3">
                <span className="text-slate-900 dark:text-white mt-1">•</span>
                <p className="text-lg text-slate-700 dark:text-gray-200">You're getting traffic but conversion rates are terrible</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-900 dark:text-white mt-1">•</span>
                <p className="text-lg text-slate-700 dark:text-gray-200">Your sales team wastes time on unqualified leads</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-900 dark:text-white mt-1">•</span>
                <p className="text-lg text-slate-700 dark:text-gray-200">You're running ads but can't track them back to closed deals</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-900 dark:text-white mt-1">•</span>
                <p className="text-lg text-slate-700 dark:text-gray-200">Your email nurture is a mess (or doesn't exist)</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-900 dark:text-white mt-1">•</span>
                <p className="text-lg text-slate-700 dark:text-gray-200">You need marketing systems but can't afford a full team</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-slate-600 dark:text-gray-300 italic">
                If you're earlier stage, heavily enterprise-focused with 18+ month sales cycles, or looking for brand/creative work, I'm not the right fit.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                How We Work Together
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{step.emoji}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimatedSection delay={400}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                See If We're a Fit
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why Work With Me?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {credibilityPoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{point.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{point.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimatedSection delay={400}>
              <a href="/portfolio" className="inline-block">
                <Button variant="outline" className="text-slate-900 border-slate-300 hover:bg-slate-50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                  View My Work
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You Get / What This Isn't Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <AnimatedSection>
              <div className="bg-green-50 rounded-xl p-8 border border-green-200 dark:bg-green-900 dark:border-green-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="mr-3">✅</span> What You Get
                </h3>
                <div className="space-y-4">
                  {whatYouGetItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-700 dark:text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* What This Isn't */}
            <AnimatedSection delay={200}>
              <div className="bg-red-50 rounded-xl p-8 border border-red-200 dark:bg-red-900 dark:border-red-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="mr-3">❌</span> What This Isn't
                </h3>
                <div className="space-y-4">
                  {whatThisIsntItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-700 dark:text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Build a System That Actually Fills Your Pipeline?
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              If you're a B2B company ready to scale acquisition with marketing automation, let's talk. I'll audit your current funnel and give you my opinion.
            </p>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
              I take on a limited number of projects each month to keep quality high. Schedule a discovery call below:
            </p>
          </AnimatedSection>
          <div style={{ minWidth: 320, height: 700, overflow: "hidden" }}>
            <CalComWidget
              namespace="15min"
              calLink="victorseda/15min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 50}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:shadow-lg">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;