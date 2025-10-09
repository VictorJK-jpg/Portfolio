import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900"> {/* Added dark mode background to main div */}
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6"> {/* Added dark mode */}
              Contact
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300"> {/* Added dark mode */}
              Get in touch
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"> {/* Added dark mode background */}
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"> {/* Added dark mode */}
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border-gray-300 text-slate-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white" // Added dark mode
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"> {/* Added dark mode */}
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border-gray-300 text-slate-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white" // Added dark mode
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"> {/* Added dark mode */}
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white border-gray-300 text-slate-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white" // Added dark mode
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700" // Added dark mode
              >
                Send Message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>


      {/* Social Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-800"> {/* Added dark mode background */}
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6"> {/* Added dark mode */}
              Let's Connect
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors dark:text-gray-300 dark:hover:text-white" // Added dark mode
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors dark:text-gray-300 dark:hover:text-white" // Added dark mode
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
