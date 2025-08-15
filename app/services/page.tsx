import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  FileText,
  Edit,
  DollarSign,
  Mic,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Course & University Selection",
      description:
        "Choosing the right course and university can shape your entire future. We help you identify institutions that match your academic strengths, career goals, and personal preferences. Whether you’re looking for a top-ranked university, a specialist program, or flexible learning options, we’ll guide you toward the best fit.",
      features: [
        "Personalized university matching",
        "Course suitability assessment",
        "Guidance on entry requirements",
        "Insights into UK university rankings",
      ],
      color: "knowera-blue",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "UCAS Application Support",
      description:
        "The UCAS system can be overwhelming — especially if you’re applying for the first time. Our consultants walk you through the entire process, helping you register, choose courses, understand key deadlines, and submit a strong, accurate application. We ensure you avoid common errors and stay on track from start to finish.",
      features: [
        "Step-by-step UCAS guidance",
        "Application form review",
        "Deadline management",
        "Error prevention and correction",
      ],
      color: "knowera-orange",
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Personal Statement Editing",
      description:
        "Your personal statement is one of the most important parts of your application. Our experts help you craft a compelling, authentic statement that highlights your strengths, passion, and suitability for the course. We offer detailed feedback and multiple rounds of editing to help your story shine.",
      features: [
        "Content structuring and flow",
        "Grammar and spelling checks",
        "Highlighting unique strengths",
        "Multiple revision rounds",
      ],
      color: "knowera-blue",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Student Finance Advice",
      description:
        "Understanding tuition fees, maintenance loans, and funding options can be tricky — especially with different rules for local and international students. We provide clear, up-to-date guidance on what you’re eligible for and how to apply, including support with Student Finance England applications or scholarship searches.",
      features: [
        "Tuition fee breakdown",
        "Maintenance loan guidance",
        "Scholarship search assistance",
        "Student Finance England application support",
      ],
      color: "knowera-orange",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Interview Preparation",
      description:
        "Some university programs — especially in healthcare, law, or postgraduate study — require interviews as part of the admissions process. We’ll coach you through common questions, help you build confidence, and teach you how to express your motivation and readiness with clarity and professionalism.",
      features: [
        "Mock interview sessions",
        "Common question strategies",
        "Confidence-building techniques",
        "Professional communication tips",
      ],
      color: "knowera-blue",
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
            <span className="text-gray-900">Our Comprehensive </span>
            <span className="text-gradient-knowera-reverse">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            At KnowEra, we offer a comprehensive range of services to support
            both domestic and international students throughout their academic
            journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${
                    service.color === "knowera-blue"
                      ? "from-knowera-blue-bg to-knowera-blue-light-bg"
                      : "from-knowera-orange-bg to-knowera-orange-light-bg"
                  } rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle
                        className={`w-5 h-5 ${
                          service.color === "knowera-blue"
                            ? "text-knowera-blue-text"
                            : "text-knowera-orange-text"
                        } flex-shrink-0`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Beyond Applications: Holistic Student Support
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our commitment extends beyond just getting you admitted. We provide
            ongoing support to ensure your success and well-being throughout
            your academic journey in the UK.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-knowera-blue-text mb-3">
                Pre-Arrival Guidance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-knowera-blue-text" />
                  <span>Visa application assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-knowera-blue-text" />
                  <span>Accommodation advice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-knowera-blue-text" />
                  <span>Travel and arrival planning</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-knowera-orange-text mb-3">
                Post-Enrollment Support
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-knowera-orange-text" />
                  <span>Academic mentoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-knowera-orange-text" />
                  <span>Career development workshops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-knowera-orange-text" />
                  <span>Networking opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r-knowera text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8">
            Book a free consultation with our expert advisors to discuss your
            academic aspirations.
          </p>
          <Button className="bg-white text-knowera-blue-text hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
            <Link href="/book-consultation">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
