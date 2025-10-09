import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Who am I?
            </h1>
            {/* <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Building the future of digital content and business growth
            </p> */}
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/me.jpg"
                  alt="Victor"
                  className="w-80 h-80 rounded-full object-cover shadow-lg dark:shadow-xl"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                  Hi, I'm Victor
                </h2>
                <div className="space-y-4 text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                  <p>
                  I help B2B SaaS and tech companies build marketing systems that turn traffic into pipeline.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Invisible Placeholder to Preserve Grid Structure */}
            <div aria-hidden="true" className="hidden lg:block" />

            {/* Text Side */}
            <AnimatedSection delay={200}>
              <div className="space-y-5 text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  My Story
                </h2>
                <div className="space-y-4 text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I spent 2 years as Lead Digital Marketing Specialist at UNITE & Adsome, where I managed acquisition campaigns, built client funnels, and ran the marketing systems that kept the agency growing.
                  </p>
                  {/* <p>
                    I always wanted to build meaningful digital products, partner with ambitious companies, and work with cool people.
                  </p> */}
                  <p>
                    Over my (still growing) career, I’ve worked with teams across industries, pitched to CEOs, and even found myself in meetings at midnight with execs in the middle of Kilimanjaro.
                  </p>
                  <p>
                    I’ve also consulted for a few startups locally and helped build some powerful AI tools, mostly behind the scenes, and often under the radar.
                  </p>
                  <p>
                    I’ve made just about every mistake in the book. I’ve lost deals, struggled to find product–market fit, misjudged ICPs, and burned ad spend that didn’t return.
                  </p>
                  <p>
                    In all, I kept seeing the same problem: Companies have great products, decent traffic, but their lead nurturing is either nonexistent or a mess of random emails. 
                  </p>
                  <p>
                    Now, I focus exclusively on the systems that matter: sequences, funnel optimization, and automation that moves prospects from "interested" to "ready to buy."
                  </p>
                  <p>
                    But I’ve also delivered quality results for a lot of people. I channel all of that experience and knowledge into a repeatable process, a way of working that moves quickly, strategically, and with purpose for people ready to improve what they already have.
                  </p>
                  {/* <p>
                    To me, that’s how I get to build little bits of the future, one step, one story, and one system at a time.
                  </p> */}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12">
              My Philosophy
            </h2>
            <blockquote className="text-2xl sm:text-3xl text-slate-700 dark:text-gray-200 font-medium italic leading-relaxed mb-8">
      I don't do fluff. I build systems, test campaigns, and optimize for one thing: pipeline contribution.

      If you're a B2B company doing $100,000-$500,000 in revenue and you're ready to make a move without hiring a full team, let's talk.            </blockquote>
            <cite className="text-slate-500 dark:text-gray-400 text-lg">— Ray Bradbury</cite>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Have any Questions?
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8">
              Let's get on a call and address any concerns you have.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                <Link to="/contact" className="text-white">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-slate-900 border-slate-300 hover:bg-slate-50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
