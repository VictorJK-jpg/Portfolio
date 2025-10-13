import CalComWidget from '@/components/CalComWidget';
import { Check, X, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';

// Video component - separate from main component
const VideoHero = () => {
  return (
    <div className="bg-[#1E293B] rounded-2xl p-2 aspect-video relative overflow-hidden">
      <div style={{position: 'relative', paddingBottom: '45.9375%', height: 0}}>
        <iframe 
          src="https://www.loom.com/embed/e812654e10774493a79b53428bbe0fef?sid=569bf168-2c61-4ab2-abaf-7e411abf1fc4" 
          frameborder="0" 
          webkitallowfullscreen 
          mozallowfullscreen 
          allowfullscreen
          style={{
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%'
          }}
        ></iframe>
      </div>
    </div>
  );
};

const Home = () => {
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
    <div className="min-h-screen bg-[#0F172A]">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <AnimatedSection>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                B2B Marketing Automation That Actually Works
              </h1>
              <p className="text-2xl text-[#94A3B8] mb-12 leading-relaxed">
                Email sequences, lead nurturing systems, and conversion funnels for SaaS founders.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-[#FF6B35] hover:bg-[#E85A2A] text-white px-10 py-6 text-xl rounded-lg shadow-lg"
              >
                Let's Talk
              </Button>
            </AnimatedSection>

            {/* Video Hero Section */}
            <AnimatedSection delay={200}>
              <VideoHero />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem Section - Image Right */}
      <section className="py-32 px-6 lg:px-16 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <AnimatedSection>
              <h2 className="text-5xl font-bold text-white mb-8">
                You're getting traffic. But where are the demos?
              </h2>
              <p className="text-xl text-[#94A3B8] mb-6 leading-relaxed">
                Most B2B companies have decent traffic and some inbound leads. But the leads just sit there.
              </p>
              <p className="text-xl text-[#94A3B8] mb-6 leading-relaxed">
                Your sales team chases cold prospects. Your nurture emails are generic. You're losing deals to competitors who stayed top-of-mind.
              </p>
              <p className="text-xl text-white font-semibold">
                The gap isn't your product. It's the system between "interested visitor" and "ready to buy."
              </p>
            </AnimatedSection>

            {/* Funnel Visualization */}
            <AnimatedSection delay={200}>
              <div className="bg-[#0F172A] rounded-2xl p-2 aspect-video flex items-center justify-center">
                <img 
                  src="/images/funnel-visualization.png" 
                  alt="Marketing funnel showing gap between visitors and demos" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What I Do - Image Left */}
      <section className="py-32 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Email Dashboard */}
            <AnimatedSection>
              <div className="bg-[#1E293B] rounded-2xl p-2 aspect-video flex items-center justify-center">
                <img 
                  src="/images/email-dashboard.png" 
                  alt="Email automation dashboard showing sequences and performance" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={200}>
              <h2 className="text-5xl font-bold text-white mb-12">
                What I do
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Email sequences that convert</h3>
                  <p className="text-lg text-[#94A3B8]">
                    Automated flows that educate, address objections, and push prospects toward demos. Sales only talks to warm leads.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Funnels that qualify automatically</h3>
                  <p className="text-lg text-[#94A3B8]">
                    Systems that filter out tire-kickers and surface high-intent buyers without manual work.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Infrastructure that scales</h3>
                  <p className="text-lg text-[#94A3B8]">
                    Lead scoring, segmentation, tracking. Your acquisition doesn't break when you 2x ad spend.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="py-20 px-6 lg:px-16 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">85%</div>
              <p className="text-lg text-[#94A3B8]">More qualified leads</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">3.2x</div>
              <p className="text-lg text-[#94A3B8]">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">60%</div>
              <p className="text-lg text-[#94A3B8]">Faster sales cycle</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">2-4</div>
              <p className="text-lg text-[#94A3B8]">Weeks to launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Image Right */}
      <section className="py-32 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <AnimatedSection>
              <h2 className="text-5xl font-bold text-white mb-12">
                How we work together
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Audit</h3>
                    <p className="text-lg text-[#94A3B8]">
                      I analyze your funnel, traffic, and conversion points. Find the gaps. Takes 1-2 weeks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Build</h3>
                    <p className="text-lg text-[#94A3B8]">
                      I build the systems. Email sequences, landing pages, automation flows, tracking. You approve, I execute.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Optimize</h3>
                    <p className="text-lg text-[#94A3B8]">
                      We launch, measure what works, kill what doesn't, scale the winners.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Process Diagram */}
            <AnimatedSection delay={200}>
              <div className="bg-[#1E293B] rounded-2xl p-2 aspect-square flex items-center justify-center">
                <img 
                  src="/images/process-diagram.png" 
                  alt="3-step process diagram showing audit, build, optimize phases" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonial - Simple */}
      <section className="py-32 px-6 lg:px-16 bg-[#1E293B]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-8">
              Here's What Our Clients Said
            </h2>
            <p className="text-3xl text-white mb-8 leading-relaxed italic">
              "Victor built our lead gen systems. Set up funnels, SEO strategy, tracking infrastructure for our clients. Brilliant work."
            </p>
            <p className="text-xl text-[#94A3B8]">
              Carl S., Co-founder at Adsome
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-32 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold text-white mb-12">
              Who I work with
            </h2>
            
            <p className="text-2xl text-[#94A3B8] mb-12">
              B2B SaaS and tech companies with at least $100k marketing budget who have these problems:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#FF6B35] mt-1 flex-shrink-0" />
                <p className="text-xl text-[#94A3B8]">Traffic but terrible conversion rates</p>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#FF6B35] mt-1 flex-shrink-0" />
                <p className="text-xl text-[#94A3B8]">Sales team chasing unqualified leads</p>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#FF6B35] mt-1 flex-shrink-0" />
                <p className="text-xl text-[#94A3B8]">Can't track ads back to closed deals</p>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#FF6B35] mt-1 flex-shrink-0" />
                <p className="text-xl text-[#94A3B8]">Email nurture is broken or doesn't exist</p>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#FF6B35] mt-1 flex-shrink-0" />
                <p className="text-xl text-[#94A3B8]">Need marketing systems but can't afford a full team</p>
              </div>
            </div>

            <p className="text-lg text-[#94A3B8] italic mt-12">
              If you're pre-PMF, enterprise-focused with 18+ month sales cycles, or want brand/creative work, I'm not the right fit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA with Calendar */}
      <section className="py-32 px-6 lg:px-16 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Text */}
            <AnimatedSection>
              <h2 className="text-5xl font-bold text-white mb-8">
                Let's talk
              </h2>
              <p className="text-2xl text-[#94A3B8] mb-8">
                Book a 15-minute call. I'll audit your funnel and tell you what's broken.
              </p>
              <p className="text-lg text-[#94A3B8] mb-12">
                I take on 2 projects per month. If I'm a fit, we'll start in 2-4 weeks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B35]" />
                  <a href="mailto:victor@victorseda.xyz" className="text-[#FF6B35] hover:text-[#E85A2A] text-lg">
                    victor@victorseda.xyz
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Calendar */}
            <AnimatedSection delay={200}>
              <div className="bg-[#0F172A] rounded-2xl p-6">
                <CalComWidget
                  namespace="15min"
                  calLink="victorseda/15min"
                  style={{ width: "100%", height: "600px" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 lg:px-16 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold text-white mb-16">
              FAQ
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="border-b border-[#1E293B] pb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{faq.question}</h3>
                  <p className="text-xl text-[#94A3B8]">{faq.answer}</p>
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