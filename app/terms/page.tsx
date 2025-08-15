import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-knowera-orange/5 to-knowera-blue/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-orange),0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* <FileText className="w-16 h-16 text-knowera-orange-text mx-auto mb-6" /> */}
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Terms of </span>
            <span className="text-gradient-knowera-reverse">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Understand the terms and conditions governing your use of KnowEra's
            website and services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              <strong>Last updated: July 25, 2024</strong>
            </p>
            <p className="mb-6">
              Welcome to KnowEra! These Terms of Service ("Terms") govern your
              access to and use of the KnowEra website (knowera.co.uk) and our
              education consultancy services. By accessing or using our website
              and services, you agree to be bound by these Terms. If you do not
              agree with any part of these Terms, you must not use our website
              or services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By using our website and services, you confirm that you are at
              least 18 years of age or have obtained parental/guardian consent
              to use our services. You agree to comply with all applicable laws
              and regulations regarding your use of our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              2. Our Services
            </h2>
            <p className="mb-4">
              KnowEra provides education consultancy services, including but not
              limited to:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Course and university selection guidance.</li>
              <li>UCAS application support.</li>
              <li>Personal statement editing.</li>
              <li>Student finance advice.</li>
              <li>Interview preparation.</li>
              <li>Visa guidance for international students.</li>
            </ul>
            <p className="mb-4">
              Our services are advisory and supportive in nature. While we
              strive to provide accurate and up-to-date information, we do not
              guarantee admission to any university or success in any
              application. Final decisions rest with the respective educational
              institutions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              3. User Obligations
            </h2>
            <p className="mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Provide accurate, complete, and truthful information during the
                application and consultation process.
              </li>
              <li>
                Cooperate fully with our consultants and provide all necessary
                documents in a timely manner.
              </li>
              <li>
                Comply with the terms and conditions of any third-party websites
                or services linked from our site (e.g., UCAS, university
                websites).
              </li>
              <li>
                Not use our website or services for any unlawful or prohibited
                purpose.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              4. Fees and Payments
            </h2>
            <p className="mb-4">
              While initial consultations may be free, certain comprehensive
              services may incur fees. All fees will be clearly communicated to
              you before you commit to any paid service. Payment terms and
              methods will be outlined in a separate service agreement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              5. Intellectual Property
            </h2>
            <p className="mb-4">
              All content on the KnowEra website, including text, graphics,
              logos, images, and software, is the property of KnowEra or its
              content suppliers and is protected by UK and international
              copyright laws. You may not reproduce, distribute, modify, or
              create derivative works from any content without our express
              written permission.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              6. Disclaimer of Warranties
            </h2>
            <p className="mb-4">
              Our website and services are provided on an "as is" and "as
              available" basis. KnowEra makes no warranties, express or implied,
              regarding the accuracy, reliability, or completeness of any
              information provided. We do not warrant that our website will be
              uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              7. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the fullest extent permitted by law, KnowEra shall not be
              liable for any direct, indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, or goodwill, arising from your use of or
              inability to use our website or services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              8. Indemnification
            </h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless KnowEra, its
              directors, employees, and agents from and against any and all
              claims, liabilities, damages, losses, and expenses (including
              reasonable legal fees) arising out of or in any way connected with
              your access to or use of our website or services, or your breach
              of these Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              9. Governing Law and Jurisdiction
            </h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of England and Wales. Any disputes arising under or in
              connection with these Terms shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              10. Changes to These Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Any
              changes will be effective immediately upon posting on this page.
              Your continued use of our website and services after any such
              modifications constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              11. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@knowera.co.uk
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Education Lane, University City,
              London, SW1A 0AA, U.K
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
