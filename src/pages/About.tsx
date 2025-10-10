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
              Stop Guessing. Start Systemizing.
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              I build B2B marketing systems and automation blueprints for business pipelines.
            </p>
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
                  Hi, I'm Victor. I build marketing machines.
                </h2>
                <div className="space-y-4 text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I help B2B SaaS and tech companies move past inconsistent traffic and messy funnels. My focus is on the architecture that turns cold prospects into qualified sales conversations.
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

            {/* Placeholder to Preserve Grid Structure - Consider putting content here to balance the layout on large screens */}
            <AnimatedSection>
              {/* Optional: Add a second, related image here for visual balance on desktop */}
              <div className="flex justify-center lg:justify-end">
                {/* You could add a photo of a whiteboard, flow chart, or a system diagram here */}
                <img
                  src="/process-diagram.svg" // Placeholder for an abstract B2B image
                  alt="Marketing Systems Diagram"
                  className="hidden lg:block w-96 h-auto object-contain"
                />
              </div>
            </AnimatedSection>

            {/* Text Side */}
            <AnimatedSection delay={200}>
              <div className="space-y-5 text-left lg:col-start-2"> {/* Forces it to the second column on desktop */}
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Why I Focus on Systems, Not Campaigns
                </h2>
                <div className="space-y-4 text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I spent 2 years as a Lead Digital Marketing Specialist at agencies like UNITE & Adsome, building acquisition campaigns, managing client funnels, and growing the agency itself. I’ve worked with teams across industries, pitched to CEOs, and delivered results under tight deadlines.
                  </p>
                  <p>
                    I’ve also consulted for startups and helped build powerful AI tools behind the scenes. This experience exposed me to all the common failures: misjudged ICPs, burned ad spend, and fragile lead-gen tactics. 
                  </p>
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
              "We don't chase vanity metrics. We build robust systems, and optimize relentlessly for one thing:  predictable pipeline contribution. "
            </blockquote>
            {/* The cite tag was pointing to Ray Bradbury, who is a science fiction author. 
                I'm replacing it with your own name to frame the philosophy as your personal quote. */}
            <cite className="text-slate-500 dark:text-gray-400 text-lg">— Victor</cite>
            
            <div className="mt-8">
                {/* <p className="text-xl text-slate-700 dark:text-gray-200">
                    If you're a B2B company doing  $100,000–$500,000 in revenue and need to scale your lead flow without hiring a full team, we should talk.
                </p> */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Upgrade Your Lead Engine?
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8">
              Let's schedule a call to diagnose your current marketing systems and chart a path to predictable pipeline growth.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                <Link to="/contact" className="text-white">Start the Conversation</Link>
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