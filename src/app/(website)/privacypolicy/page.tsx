import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "../_components/header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a237e] to-[#283593] text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="space-y-8 bg-white/10 rounded-lg p-8 backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-200 leading-relaxed">
              When you use Slide, we collect certain information to provide and
              improve our services:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-200">
              <li>Instagram account information (when authorized)</li>
              <li>Usage data and analytics</li>
              <li>Device information and IP address</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-200 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-200">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Analyze usage patterns and optimize performance</li>
              <li>Communicate with you about updates and features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-gray-200 leading-relaxed">
              We implement industry-standard security measures to protect your
              information. However, no method of transmission over the Internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Our service integrates with Instagram and may include links to
              third-party websites. These third parties have their own privacy
              policies, and we recommend reviewing their practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-200 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-200">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Updates to This Policy
            </h2>
            <p className="text-gray-200 leading-relaxed">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-200 leading-relaxed">
              If you have any questions about this privacy policy, please
              contact us at:
              <br />
              <a
                href="mailto:privacy@slide.com"
                className="text-blue-300 hover:text-blue-200 underline"
              >
                privacy@slide.com
              </a>
            </p>
          </section>
        </div>

        <footer className="text-center mt-8 text-gray-300 text-sm">
          Last updated: December 2024
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
