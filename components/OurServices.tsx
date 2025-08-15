"use client";
import { GraduationCap, FileText, Edit, DollarSign, Mic } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OurServices() {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Course & University Selection",
      description:
        "We help you identify institutions that match your academic strengths, career goals, and personal preferences. We’ll guide you toward the best fit.",
      color: "knowera-blue",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "UCAS Application Support",
      description:
        "Our consultants walk you through the entire UCAS process, helping you register, choose courses, understand key deadlines, and submit a strong, accurate application.",
      color: "knowera-orange",
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Personal Statement Editing",
      description:
        "Our experts help you craft a compelling, authentic statement that highlights your strengths, passion, and suitability for the course. We offer detailed feedback and multiple rounds of editing.",
      color: "knowera-blue",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Student Finance Advice",
      description:
        "We provide clear, up-to-date guidance on what you’re eligible for and how to apply, including support with Student Finance England applications or scholarship searches.",
      color: "knowera-orange",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Interview Preparation",
      description:
        "We’ll coach you through common questions, help you build confidence, and teach you how to express your motivation and readiness with clarity and professionalism.",
      color: "knowera-blue",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-knowera-orange/5 to-knowera-blue/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-orange),0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsla(var(--knowera-blue),0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-gray-100">
              <span className="text-knowera-orange-text font-bold text-lg">
                Our Services
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">How We Help You</span>
            <br />
            <span className="text-gradient-knowera-reverse">Succeed</span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At KnowEra, we offer a comprehensive range of services to support
            both domestic and international students throughout their academic
            journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${
                  service.color === "knowera-blue"
                    ? "from-knowera-blue-bg to-knowera-blue-light-bg"
                    : "from-knowera-orange-bg to-knowera-orange-light-bg"
                } rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-knowera-blue-text transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
