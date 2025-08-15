import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-knowera-blue/5 to-knowera-orange/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-blue),0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* <Cookie className="w-16 h-16 text-knowera-blue-text mx-auto mb-6" /> */}
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Cookie </span>
            <span className="text-gradient-knowera">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Learn about how KnowEra uses cookies and similar technologies on our
            website.
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
              This Cookie Policy explains how KnowEra ("we", "our", "us") uses
              cookies and similar technologies on our website knowera.co.uk. By
              using our website, you consent to the use of cookies in accordance
              with this policy. We comply with the Privacy and Electronic
              Communications Regulations (PECR) and UK GDPR.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              1. What are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently, as well as to provide
              information to the owners of the site. Cookies can be "persistent"
              or "session" cookies. Persistent cookies remain on your personal
              computer or mobile device when you go offline, while session
              cookies are deleted as soon as you close your web browser.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              2. How We Use Cookies
            </h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly
                necessary for the operation of our website. They enable you to
                navigate the site and use its features, such as accessing secure
                areas. Without these cookies, services you have asked for cannot
                be provided.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> These cookies
                collect information about how you use our website, such as which
                pages you visit most often and if you encounter any error
                messages. This helps us to improve the way our website works and
                understand what interests our users.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow our
                website to remember choices you make (e.g., your language
                preferences) and provide enhanced, more personal features.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> These cookies
                are used to deliver advertisements more relevant to you and your
                interests. They are also used to limit the number of times you
                see an advertisement and help measure the effectiveness of
                advertising campaigns.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              3. Third-Party Cookies
            </h2>
            <p className="mb-4">
              In addition to our own cookies, we may also use various
              third-parties cookies to report usage statistics of the Service,
              deliver advertisements on and through the Service, and so on.
              These third parties may include (but are not limited to) Google
              Analytics, social media platforms, and advertising networks.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              4. Your Cookie Choices
            </h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies.
              You can exercise your cookie preferences by:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Browser Settings:</strong> Most web browsers allow you
                to control cookies through their settings. You can set your
                browser to refuse all or some browser cookies, or to alert you
                when websites set or access cookies. If you disable or refuse
                cookies, please note that some parts of this website may become
                inaccessible or not function properly.
              </li>
              <li>
                <strong>Cookie Consent Tool:</strong> We may implement a cookie
                consent tool on our website, allowing you to manage your
                preferences for non-essential cookies.
              </li>
            </ul>
            <p className="mb-4">
              For more information on how to manage cookies, visit
              allaboutcookies.org.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              5. Changes to This Cookie Policy
            </h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. Any changes
              will be posted on this page with an updated "Last updated" date.
              We encourage you to review this policy periodically.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              6. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Cookie Policy, please contact
              us at:
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
