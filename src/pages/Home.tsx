import CalComWidget from '@/components/CalComWidget';
import { Target, Zap, TrendingUp, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import AnimatedSection from '@/components/AnimatedSection';

const Home = () => {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const features = [
    {
      icon: Target,
      title: 'Strategic Content Creation',
      description: 'Develop compelling content strategies that resonate with your audience and drive meaningful engagement across all digital platforms.'
    },
    {
      icon: Zap,
      title: 'Digital Marketing Solutions',
      description: 'Boost your online presence with data-driven marketing campaigns designed to increase visibility and generate qualified leads.'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth Consulting',
      description: 'Scale your startup with proven frameworks and strategies that transform ideas into sustainable, profitable businesses.'
    }
  ];

  const whatIDoItems = [
    "I'll design your content + inbound strategy",
    "I'll build your system (funnels, content, traffic setup)",
    "I'll test and adjust until it's working",
    "I'll get you live and growing — in 5 weeks"
  ];

  const whatYouGetItems = [
    "A complete inbound system — planned, built, and tested",
    "Organic traffic from search and social, starting in 5 weeks",
    "Content that builds authority and drives leads — no micromanaging needed",
    "Systems, templates, and automations handed over, ready to scale"
  ];

  const whatThisIsntItems = [
    "Not a content course or DIY system",
    "Not \"ghostwriting\" that just fills your feed",
    "Not a random VA or freelancer guessing what works",
    "Not for the curious — I only work with people serious about building traction"
  ];

  const clientMetrics = [
    'Launch SEO content hubs that grow search traffic from 0 to 20K/month',
    'Build brand visibility from scratch with systemized social posts',
    'Automate inbound lead pipelines from search and social',
    'Turn quiet products into loud ones — without ads or cold pitching'
  ];

  const systemFeatures = [
    {
      title: 'Content systemized',
      description: 'Whether it\'s 1 article per week or daily LinkedIn posts — it\'s all setup to run without constant writing.'
    },
    {
      title: 'SEO-first',
      description: 'You\'ll rank. You\'ll stay ranked. I build for compounding search growth, not content churn.'
    },
    {
      title: 'Automated and No-Code Friendly',
      description: 'I use Notion, Airtable, Docs, and other tools you already understand. Hand-off ready.'
    },
    {
      title: 'Custom-fit',
      description: 'No generic templates because your system fits your offer and voice. That\'s why it works.'
    }
  ];

  const faqs = [
    {
      question: 'Can this work even if we don\'t have content yet?',
      answer: 'Yes, I\'ll help define your topics, messaging, and build the first batches.'
    },
    {
      question: 'Do you handle SEO too?',
      answer: 'Absolutely. Keyword research, formatting, and optimization are baked into the system.'
    },
    {
      question: 'Can we scale content after the first launch?',
      answer: 'Yes, your system will be designed to grow with your bandwidth or team.'
    },
    {
      question: 'Do you help with social media?',
      answer: 'Yes, especially LinkedIn and YouTube. I build a consistent process that builds your authority and attracts leads.'
    },
    {
      question: 'Do we own the system after?',
      answer: 'Yes, you get everything: strategy, system, assets, and documentation.'
    },
    {
      question: 'Where are you based?',
      answer: 'I operate remotely. My primary timezone is GMT+1.'
    },
    {
      question: 'Can we pay for our project in installments?',
      answer: 'We can discuss installment options during our discovery call to find a solution that works for your budget.'
    },
    {
      question: 'Will we own the project?',
      answer: 'Absolutely. Upon completion and full payment, you will have full ownership of all strategies, content, systems, and assets developed for your project. I provide all necessary documentation and handover materials.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Your marketing system, without the babysitting.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              You focus on your product, I'll launch the content system, traffic and inbound in 5 weeks, guaranteed.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Let's Talk
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* What Will I Do Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What will I do?
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:shadow-lg">
                <div className="space-y-4">
                  {whatIDoItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-lg text-slate-700 dark:text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button variant="outline" className="text-slate-900 border-slate-300 hover:bg-slate-50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                    View Case Studies
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fast and Scalable Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Hands-off growth, from day one.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-blue-600">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Systemized to scale</h3>
                <p className="text-slate-600 dark:text-gray-300">Your marketing runs without your daily input — from 1 client to 10,000.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-blue-600">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">No-code, high-leverage setup</h3>
                <p className="text-slate-600 dark:text-gray-300">Built with tools like Notion, Webflow, and AI — automated where it counts.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-blue-600">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Zero babysitting required</h3>
                <p className="text-slate-600 dark:text-gray-300">You stay focused on your product, not daily LinkedIn posts or blog edits.</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <AnimatedSection delay={400}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Book a Call
              </Button>
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
                  <span className="mr-3">🧾</span> What you get
                </h3>
                <div className="space-y-4">
                  {whatYouGetItems.map((item, index ) => (
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
                  <span className="mr-3">🚫</span> What this isn't
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

       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Book a Call
          </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
            I try take on a limited number of projects each month to keep quality high and timelines fast. Schedule a discovery call below that fits your calendar:
            </p>
            <div></div>
          <div style={{ minWidth: 320, height: 700, overflow: "hidden" }}>
            <CalComWidget
              namespace="15min"
              calLink="victorseda/15min" // IMPORTANT: Ensure this is your correct Cal.com link
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </section>

      {/* What This Is Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                <span className="mr-3">💡</span> What this is:
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                A inbound growth engine personalized for your business that gets you from "we need leads" to "our content brings them in weekly" that's built to last, free up your SDRs and not just go viral once.
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                I've helped early products, agencies, and growing teams launch inbound systems that bring in clients without paid ads, without babysitting, and without delay.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Your Product My Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                <span className="mr-3">🎯</span> Your product. My process.
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
                You bring the product. I bring the content, systems, and visibility to grow it.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center mb-12">
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">Since 2022, I've helped clients:</p>
              <div className="max-w-4xl mx-auto space-y-4">
                {clientMetrics.map((metric, index) => (
                  <div key={index} className="flex items-start space-x-3 justify-center">
                    <span className="text-slate-900 dark:text-white mt-1">→</span>
                    <p className="text-slate-700 dark:text-gray-200 text-left">{metric}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="outline" className="text-slate-900 border-slate-300 hover:bg-slate-50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                  View Case Studies
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Systems Built to Scale */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                <span className="mr-3">⚙️</span> With Systems Built to Scale
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {systemFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Grow CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              <span className="mr-3"></span> Ready to grow?
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              It starts with a 30-minute call. Then I'll build a Blueprint for your product/service, outlining how we'll grow traffic, build authority, and bring in leads.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Book a Discovery Call
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                <span className="mr-3"></span> Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 100}>
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
