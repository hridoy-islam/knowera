"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Globe, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white py-20 md:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-knowera-blue/10 rounded-full blur-3xl animate-pulse-glow opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-knowera-orange/10 rounded-full blur-3xl animate-pulse-glow delay-1000 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-knowera-blue/5 rounded-full blur-3xl animate-pulse-glow delay-500 opacity-50"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsla(var(--knowera-blue),0.03)_1px,transparent_1px),linear-gradient(90deg,hsla(var(--knowera-blue),0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text and CTAs */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline with Staggered Animation */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <div className="overflow-hidden">
                  <span className="block text-gray-900 animate-slide-up">
                    Your Future
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-gradient-knowera animate-slide-up delay-200 relative">
                    Starts Here
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r-knowera rounded-full animate-expand"></div>
                  </span>
                </div>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in delay-400">
                Expert Education Consultancy for UK Students – Get Personalised
                Guidance Every Step of the Way.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in delay-600">
              {[
                {
                  icon: (
                    <CheckCircle className="w-5 h-5 text-knowera-blue-text" />
                  ),
                  text: "Trusted by Students Worldwide",
                },
                {
                  icon: (
                    <CheckCircle className="w-5 h-5 text-knowera-orange-text" />
                  ),
                  text: "Tailored Academic Guidance",
                },
                {
                  icon: (
                    <CheckCircle className="w-5 h-5 text-knowera-blue-text" />
                  ),
                  text: "End-to-End Application Support",
                },
                {
                  icon: (
                    <CheckCircle className="w-5 h-5 text-knowera-orange-text" />
                  ),
                  text: "Transparent & Student-Centered",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {feature.icon}
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons with Hover Animations */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-800">
              <Button className="group btn-knowera-gradient font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <Link
                  href="/book-consultation"
                  className="relative z-10 flex items-center"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              <Button className="group btn-knowera-secondary font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                <Globe className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-fade-in delay-500 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-knowera-blue/5 to-knowera-orange/5 rounded-[3rem] p-8 shadow-2xl border border-gray-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-blue),0.05),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsla(var(--knowera-orange),0.05),transparent_50%)]"></div>

                {/* Main Image - Placeholder for a relevant illustration */}
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-lg">
                  <img
                    src="/hero.png"
                    alt="Student Consultation"
                    className="w-full h-full object-cover"
                  />

                  {/* Floating UI Elements */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-knowera-blue-bg rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          UK Universities
                        </div>
                        <div className="text-xs text-gray-500">
                          50+ Partners
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float delay-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-knowera-orange-bg rounded-xl flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          Global Reach
                        </div>
                        <div className="text-xs text-gray-500">
                          Students from 50+ Countries
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-knowera-blue-bg rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-knowera-orange-bg rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
