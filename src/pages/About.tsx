import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1E293B] dark:text-white mb-6">
              Stop Guessing, Start Building Systems.
            </h1>
            <p className="text-xl text-[#64748B] dark:text-gray-300 max-w-3xl mx-auto">
              I build B2B marketing systems and automation blueprints for owners.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section - iOS Card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/me.jpg"
                    alt="Victor"
                    className="w-80 h-96 rounded-3xl object-cover shadow-2xl"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white">
                    Hi, I'm Victor. I build systems.
                  </h2>
                  <div className="space-y-4 text-lg text-[#64748B] dark:text-gray-300 leading-relaxed">
                    <p>
                      I help B2B SaaS and tech companies move past inconsistent traffic and messy funnels. My focus is on a system that turns cold prospects into qualified sales conversations.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
        
      {/* Commenting out Sections for now */}
      {/* Commenting out Founder Story Section for now
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700">
          <AnimatedSection>
            <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white mb-6">
            Why I Focus on Systems, Not Campaigns
          </h2>
          <div className="space-y-5 text-lg text-[#64748B] dark:text-gray-300 leading-relaxed">
            <p>
          I spent 2 years as a Lead Digital Marketing Specialist at agencies like UNITE & Adsome, building acquisition campaigns, managing client funnels, and growing the agency itself. I've worked with teams across industries, pitched to CEOs, and delivered results under tight deadlines.
            </p>
            <p>
          I've also consulted for startups and helped build powerful AI tools behind the scenes. This experience exposed me to all the common failures: misjudged ICPs, burned ad spend, and fragile lead-gen tactics. 
            </p>
          </div>
            </div>
          </AnimatedSection>
            </div>
          </div>
        </section>
      */}

      {/* Mission Section - iOS Card */}
      {/*<section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] dark:border-gray-700 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] dark:text-white mb-8">
              My Philosophy
            </h2>
            <blockquote className="text-2xl sm:text-3xl text-[#64748B] dark:text-gray-200 font-medium italic leading-relaxed mb-6">
              "We don't chase vanity metrics. We build robust systems, and optimize relentlessly for one thing: predictable pipeline contribution."
            </blockquote>
            <cite className="text-[#94A3B8] dark:text-gray-400 text-lg">— Victor</cite>
          </AnimatedSection>
            </div>
          </div>
        </section>
      */}

      {/* CTA Section - iOS Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] dark:from-[#1E293B] dark:to-[#0F172A] rounded-3xl p-8 lg:p-12 shadow-2xl">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Upgrade Your Lead Engine?
              </h2>
              <p className="text-xl text-[#94A3B8] mb-8">
                Let's schedule a call to diagnose your current marketing systems and chart a path to predictable pipeline growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Start the Conversation
                </Link>
                <Link
                  to="/"
                  className="bg-white hover:bg-gray-100 text-[#1E293B] border-2 border-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
                >
                  Back to Home
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;