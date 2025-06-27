// src/pages/TermsOfService.tsx
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection'; // Assuming you have this

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Terms of Service
          </h1>
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-gray-300">
            <p>
              Welcome to victorseda.xyz (the "Site"). These Terms of Service ("Terms") govern your access to and use of the Site and any services provided by Victor ("we," "us," or "our").
            </p>
            <p>
              By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.
            </p>

            <h2>1. Use of the Site</h2>
            <p>
              The Site and its original content, features, and functionality are owned by Victor and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Site, use of the Site, or access to the Site without express written permission by us.
            </p>

            <h2>2. User Obligations</h2>
            <p>You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on the Site, including text, graphics, logos, images, and software, is the property of Victor or its content suppliers and protected by international copyright laws.</p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>The Site is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site. You expressly agree that your use of the Site is at your sole risk.</p>

            <h2>5. Limitation of Liability</h2>
            <p>In no event shall Victor, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Site; (ii) any conduct or content of any third party on the Site; (iii) any content obtained from the Site; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

            <h2>6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>

            <h2>7. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: victor@victorseda.xyz</li>
              <li>By visiting this page on our website: victorseda.xyz/contact</li>
            </ul>
            <p className="text-right text-sm mt-8">Last updated: June 27, 2025</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermsOfService;
