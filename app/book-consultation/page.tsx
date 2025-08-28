"use client";
import { useState } from "react";
import type React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CalendarCheck,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  DollarSign,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return; // Prevent multiple submissions

    setIsLoading(true);

    try {
      const res = await fetch("/api/send-consulting-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        // Reset form after success
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });
        // Auto-hide success message
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Failed to book consultation");
      }
    } catch (error) {
      console.error("Error submitting consultation form:", error);
    } finally {
      setIsLoading(false); // Always stop loading
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-knowera-orange/5 to-knowera-blue/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-orange),0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Book a </span>
            <span className="text-gradient-knowera-reverse">
              Free Consultation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Take the first step towards your UK education dream. Our expert
            advisors are ready to guide you.
          </p>
        </div>
      </section>

      {/* Consultation Form and Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits of Consultation */}
            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-8 h-8 text-knowera-orange-text mr-3" />
                <h2 className="text-3xl font-black">
                  <span className="text-gray-900">What You'll </span>
                  <span className="text-gradient-knowera-reverse">Gain</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our free consultation is designed to provide you with clarity
                and a personalized roadmap for your UK education journey.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <User className="w-6 h-6" />,
                    title: "Personalized Advice",
                    details:
                      "Receive tailored guidance based on your academic profile and aspirations.",
                    color: "knowera-blue",
                  },
                  {
                    icon: <BookOpen className="w-6 h-6" />,
                    title: "Course & University Insights",
                    details:
                      "Get expert recommendations on suitable courses and top UK universities.",
                    color: "knowera-orange",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Application Roadmap",
                    details:
                      "Understand the step-by-step process for UCAS and visa applications.",
                    color: "knowera-blue",
                  },
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: "Finance Guidance",
                    details:
                      "Learn about student finance, scholarships, and funding opportunities.",
                    color: "knowera-orange",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${
                          benefit.color === "knowera-blue"
                            ? "bg-knowera-blue-bg text-white"
                            : "bg-knowera-orange-bg text-white"
                        } rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <CalendarCheck className="w-8 h-8 text-knowera-blue-text mr-3" />
                <h2 className="text-3xl font-black">
                  <span className="text-gray-900">Schedule Your </span>
                  <span className="text-gradient-knowera">Session</span>
                </h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Consultation Booked!
                  </h3>
                  <p className="text-gray-600">
                    We'll confirm your appointment details via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                      placeholder="Your city"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Message / Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us what you'd like to discuss..."
                    ></textarea>
                  </div>

                  {/* Submit Button with Loading State */}
                  <Button
                    type="submit"
                    className="w-full btn-knowera-gradient font-bold py-4 rounded-xl transition-all duration-300 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Booking...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Confirm Consultation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
