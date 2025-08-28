import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-knowera-blue/5 to-knowera-orange/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-blue),0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* <Shield className="w-16 h-16 text-knowera-blue-text mx-auto mb-6" /> */}
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Privacy </span>
            <span className="text-gradient-knowera">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Your privacy is paramount. Learn how KnowEra collects, uses, and
            protects your personal data.
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
              KnowEra ("we", "our", "us") is committed to protecting the privacy
              and security of your personal data. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website knowera.co.uk and use our services. We
              adhere to the UK General Data Protection Regulation (UK GDPR) and
              the Data Protection Act 2018.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal data from you in various ways, including
              when you:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Register for an account or service.</li>
              <li>Fill out a contact or consultation form.</li>
              <li>Subscribe to our newsletter.</li>
              <li>Interact with our website (e.g., through cookies).</li>
              <li>Communicate with us via email, phone, or chat.</li>
            </ul>
            <p className="mb-4">
              The types of personal data we may collect include:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Identity Data:</strong> Name, date of birth, gender.
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, postal address,
                telephone numbers.
              </li>
              <li>
                <strong>Academic Data:</strong> Educational history,
                qualifications, personal statements, references.
              </li>
              <li>
                <strong>Financial Data:</strong> Information related to student
                finance applications (we do not store bank details).
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                operating system, usage data.
              </li>
              <li>
                <strong>Marketing and Communications Data:</strong> Your
                preferences in receiving marketing from us.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use your personal data for the following purposes, based on the
              legal bases provided by UK GDPR:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>To Provide Services (Contractual Necessity):</strong> To
                process your university applications, provide consultation, and
                offer tailored academic guidance.
              </li>
              <li>
                <strong>
                  To Communicate with You (Legitimate Interest/Consent):
                </strong>{" "}
                To respond to your inquiries, send service updates, and provide
                information you request.
              </li>
              <li>
                <strong>For Marketing (Consent):</strong> To send you
                newsletters, promotional materials, and information about
                services that may be of interest to you, where you have given
                consent.
              </li>
              <li>
                <strong>
                  For Analytics and Improvement (Legitimate Interest):
                </strong>{" "}
                To understand how our website is used, improve our services, and
                enhance user experience.
              </li>
              <li>
                <strong>For Legal Compliance (Legal Obligation):</strong> To
                comply with legal and regulatory obligations, such as
                immigration laws or data protection laws.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              3. Disclosure of Your Information
            </h2>
            <p className="mb-4">We may share your personal data with:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Partner Universities:</strong> To facilitate your
                application process to UK universities.
              </li>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                perform services on our behalf, such as IT support, hosting, and
                analytics. These providers are contractually bound to protect
                your data.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to
                protect our rights, property, or safety.
              </li>
            </ul>
            <p className="mb-4">
              We ensure that any third parties we share your data with are
              compliant with UK GDPR.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organisational measures to
              protect your personal data from unauthorised access, alteration,
              disclosure, or destruction. These measures include encryption,
              firewalls, and secure server facilities.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              5. Data Retention
            </h2>
            <p className="mb-4">
              We retain your personal data only for as long as necessary to
              fulfil the purposes for which it was collected, including for the
              purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              6. Your Rights (UK GDPR)
            </h2>
            <p className="mb-4">
              Under UK GDPR, you have the following rights regarding your
              personal data:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Right to be Informed:</strong> About how your data is
                used.
              </li>
              <li>
                <strong>Right of Access:</strong> To obtain a copy of your
                personal data.
              </li>
              <li>
                <strong>Right to Rectification:</strong> To have inaccurate data
                corrected.
              </li>
              <li>
                <strong>Right to Erasure ("Right to be Forgotten"):</strong> To
                request deletion of your data in certain circumstances.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> To limit how your
                data is used.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> To receive your data
                in a structured, commonly used format.
              </li>
              <li>
                <strong>Right to Object:</strong> To processing of your data in
                certain situations.
              </li>
              <li>
                <strong>
                  Rights in Relation to Automated Decision Making and Profiling.
                </strong>
              </li>
            </ul>
            <p className="mb-4">
              To exercise any of these rights, please contact us using the
              details below. You also have the right to lodge a complaint with
              the Information Commissioner's Office (ICO), the UK supervisory
              authority for data protection issues.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              7. Third-Party Websites
            </h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. This
              Privacy Policy does not apply to those websites. We encourage you
              to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated "Last updated" date.
              We encourage you to review this policy periodically.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              9. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>

            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@knowera.co.uk"
                className="text-knowera-blue-text hover:underline"
              >
                info@knowera.co.uk
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+447759018669"
                className="text-knowera-blue-text hover:underline"
              >
                +44 7759 018669
              </a>
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 80-82 Nelson Street, E1 2DY London,
              United Kingdom
            </p>
            <p className="mb-2">
              <strong>Office Hours:</strong> Monday–Friday: 9:00 AM – 6:00 PM,
              Saturday: 11:00 AM – 3:00 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
