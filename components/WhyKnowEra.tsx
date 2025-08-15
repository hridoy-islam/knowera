"use client";
import {
  CheckCircle,
  Users,
  BookOpen,
  MapPin,
  Handshake,
  Languages,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhyKnowEra() {
  const reasons = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trusted by Students Worldwide",
      description:
        "KnowEra supports hundreds of students each year from the UK, Europe, Africa, Asia, and beyond. Our consultants understand both local and global education systems.",
      color: "knowera-blue",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Tailored Support for Every Journey",
      description:
        "From choosing the right university to reviewing your personal statement, we offer personalised, one-on-one guidance that reflects your unique background and ambitions.",
      color: "knowera-orange",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Expertise with Global Reach",
      description:
        "As a UK-based consultancy, we’re deeply familiar with the UK education system, including UCAS processes, student finance, and visa regulations.",
      color: "knowera-blue",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "End-to-End Application Support",
      description:
        "From your first enquiry to your final enrollment, we walk beside you every step of the way, assisting with university selection, application submissions, and more.",
      color: "knowera-orange",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparent and Student-Centered",
      description:
        "KnowEra is driven by integrity. Our advice is honest, impartial, and always in the best interest of the student — not driven by commission or quotas.",
      color: "knowera-blue",
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Multilingual Support & Cultural Sensitivity",
      description:
        "For international students, we understand the unique challenges of studying abroad. Our multilingual team offers culturally sensitive guidance in multiple languages.",
      color: "knowera-orange",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-knowera-blue/5 to-knowera-orange/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-blue),0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsla(var(--knowera-orange),0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-gray-100">
              <span className="text-knowera-blue-text font-bold text-lg">
                Why Choose Us
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Why Choose</span>
            <br />
            <span className="text-gradient-knowera">KnowEra?</span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At KnowEra, we believe education opens doors to opportunity — and
            we’re here to help you find the one that’s right for you.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${
                  reason.color === "knowera-blue"
                    ? "from-knowera-blue-bg to-knowera-blue-light-bg"
                    : "from-knowera-orange-bg to-knowera-orange-light-bg"
                } rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-knowera-blue-text transition-colors">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-gray-100 text-center">
          <h3 className="text-4xl font-black text-gray-900 mb-6">
            Still exploring your options?{" "}
            <span className="text-gradient-knowera">
              Book a Free Consultation
            </span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We’ll answer your questions, offer tailored insights, and help you
            take the first step with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-knowera-gradient font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Link href="/book-consultation">🎓 Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
