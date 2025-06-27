// src/pages/PrivacyPolicy.tsx
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection'; // Assuming you have this

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-gray-300">
            <p>
              This Privacy Policy describes how Victor ("we," "us," or "our") collects, uses, and discloses your personal information when you visit and use our website victorseda.xyz (the "Site").
            </p>
            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Site (such as submitting forms), or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul>
              <li><strong>Name:</strong> We collect your name when you provide it in our contact or lead magnet forms.</li>
              <li><strong>Email Address:</strong> We collect your email address for communication purposes and to provide you with access to gated content.</li>
              <li><strong>Company Name:</strong> We may collect your company name (optional) to better understand your professional context.</li>
              <li><strong>Usage Data:</strong> We may also collect information that your browser sends whenever you visit our Site or when you access the Site by or through a mobile device ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use personal information collected via our Site for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below:</p>
            <ul>
              <li>To provide, operate, and maintain our Site.</li>
              <li>To improve, personalize, and expand our Site.</li>
              <li>To understand and analyze how you use our Site.</li>
              <li>To develop new products, services, features, and functionality.</li>
              <li>To send you emails or other communications related to your inquiries or access requests.</li>
              <li>To find and prevent fraud.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.</p>
            <p>We may disclose your personal information in the following situations:</p>
            <ul>
              <li><strong>With Vendors, Consultants, and Other Third-Party Service Providers:</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service, and marketing efforts.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>

            <h2>5. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at victor@victorseda.xyz</p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
