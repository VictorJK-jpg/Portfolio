import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();

    // Observe for the iframe insertion by Cal.com
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector('iframe[src*="cal.com"]');
      if (iframe) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Contact
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300">
              Book a time that works for you
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cal.com Embed Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
              Schedule a Call
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-10">
              Let’s connect and talk about what you’re working on — pick a time
              that fits your schedule below.
            </p>

            {/* Loading Message */}
            {!isLoaded && (
              <div className="flex flex-col items-center justify-center py-10 text-slate-600 dark:text-gray-300 animate-pulse">
                <Loader2 className="h-6 w-6 animate-spin mb-3" />
                <p className="text-base">Loading calendar…</p>
              </div>
            )}

            {/* Cal Embed */}
            <div
              className={`w-full overflow-hidden transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <Cal
                namespace="15min"
                calLink="victorseda/15min"
                style={{
                  width: "100%",
                  minHeight: "600px",
                  height: "auto",
                  overflow: "hidden",
                }}
                config={{ layout: "month_view" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Connect
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/victor-seda-41145b371/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors dark:text-gray-300 dark:hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors dark:text-gray-300 dark:hover:text-white"
              >
                Twitter
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
