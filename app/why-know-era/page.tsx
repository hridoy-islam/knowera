import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Users,
  BookOpen,
  MapPin,
  Handshake,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyKnowEraPage() {
  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted by Students Worldwide",
      description:
        "KnowEra supports hundreds of students each year from the UK, Europe, Africa, Asia, and beyond. Our consultants understand both local and global education systems, enabling us to match students with universities and courses that align with their goals and potential.",
      color: "knowera-blue",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Tailored Support for Every Journey",
      description:
        "No two students are the same — and neither are our recommendations. From choosing the right university and course to reviewing your personal statement or preparing for an interview, we offer personalised, one-on-one guidance that reflects your unique background, academic history, and career ambitions.",
      color: "knowera-orange",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Expertise with Global Reach",
      description:
        "As a UK-based consultancy, we’re deeply familiar with the UK education system, including UCAS processes, student finance, admission requirements, visa regulations, and international entry pathways. We use this knowledge to simplify the complex — no matter where you’re applying from.",
      color: "knowera-blue",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "End-to-End Application Support",
      description:
        "From your first enquiry to your final enrollment, we walk beside you every step of the way. We assist with university selection, application submissions, documentation checks, personal statement editing, scholarship advice, visa guidance for international students, and more.",
      color: "knowera-orange",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Transparent and Student-Centered",
      description:
        "KnowEra is driven by integrity. Our advice is honest, impartial, and always in the best interest of the student — not driven by commission or quotas. Our only goal is your success.",
      color: "knowera-blue",
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Multilingual Support & Cultural Sensitivity",
      description:
        "For international students, we understand the unique challenges of studying abroad — from cultural transitions to language barriers. Our multilingual team is trained to offer culturally sensitive guidance and support in multiple languages.",
      color: "knowera-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-knowera-blue/5 to-knowera-orange/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-blue),0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Why Choose </span>
            <span className="text-gradient-knowera">KnowEra?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            At KnowEra, we believe education opens doors to opportunity — and
            we’re here to help you find the one that’s right for you.
          </p>
        </div>
      </section>

      {/* Main Content - Why Choose KnowEra */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Your Trusted Guide to UK Education
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a UK student looking to start university or an
                international applicant seeking a new academic journey in the
                UK, KnowEra is your trusted guide. We simplify the complex
                application process and provide tailored support to help you
                achieve your academic and career goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-knowera-blue-text flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Personalised, one-on-one guidance reflecting your unique
                    background.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-knowera-orange-text flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Deep familiarity with the UK education system and UCAS
                    processes.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-knowera-blue-text flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    End-to-end support from first enquiry to final enrollment.
                  </span>
                </li>
              </ul>
              <Button className="btn-knowera-gradient font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl">
                <Link href="/book-consultation">
                  Book Your Free Consultation
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="/advisor.jpg"
                alt="Students Consulting with Advisor"
                className="rounded-3xl shadow-xl border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reasons Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Our Core Strengths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes KnowEra the preferred choice for students
              aiming for success in UK education.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${
                    reason.color === "knowera-blue"
                      ? "from-knowera-blue-bg to-knowera-blue-light-bg"
                      : "from-knowera-orange-bg to-knowera-orange-light-bg"
                  } rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r-knowera text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-6">
            Ready to Start Your UK Education Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today for a free consultation and let our expert team
            guide you towards your academic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-knowera-blue-text hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button className="text-white  font-bold px-8 py-4 rounded-full transition-all duration-300">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
