"use client";
import { useState } from "react";
import type React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Data:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Clear form
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      details: "123 Education Lane, University City, London, SW1A 0AA, U.K",
      color: "knowera-blue",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+44 (0) 123 456 7890",
      color: "knowera-orange",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@knowera.co.uk",
      color: "knowera-blue",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-5PM, Sat: 10AM-2PM",
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
          {/* <MessageSquare className="w-16 h-16 text-knowera-blue-text mx-auto mb-6" /> */}
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Get In </span>
            <span className="text-gradient-knowera">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Ready to start your educational journey? We're here to help you
            every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information - Takes 1 column */}
            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-knowera-blue-text mr-3" />
                <h2 className="text-3xl font-black">
                  <span className="text-gray-900">Contact </span>
                  <span className="text-gradient-knowera-reverse">
                    Information
                  </span>
                </h2>
              </div>

              {/* <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're here to answer your questions and help you take the next
                step in your educational journey.
              </p> */}

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${
                          info.color === "knowera-blue"
                            ? "bg-knowera-blue-bg text-white"
                            : "bg-knowera-orange-bg text-white"
                        } rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              {/* <div className="bg-gradient-to-br from-knowera-blue/5 to-knowera-orange/5 rounded-2xl p-8 text-center">
                <MapPin className="w-16 h-16 text-knowera-blue-text mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Find Us on Map
                </h3>
                <p className="text-gray-600 mb-4">
                  Located in the heart of London, easily accessible by public
                  transport.
                </p>
                <Button className="btn-knowera-gradient font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                  View on Google Maps
                </Button>
              </div> */}
            </div>
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 text-knowera-blue-text mr-3" />
                <h2 className="text-3xl font-black">
                  <span className="text-gray-900">Send Us a </span>
                  <span className="text-gradient-knowera">Message</span>
                </h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="Enter your full name"
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
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="courses">Course Information</option>
                        <option value="partnership">
                          Partnership Opportunities
                        </option>
                        <option value="support">Student Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-knowera-blue-text focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-knowera-gradient font-bold py-4 rounded-xl transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Frequently Asked </span>
              <span className="text-gradient-knowera-reverse">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our programs and
              services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I apply for a course?",
                answer:
                  "You can apply online through our website or contact our admissions team for personalized guidance. We also offer end-to-end application support.",
              },
              {
                question: "What are the payment options available?",
                answer:
                  "We provide clear guidance on tuition fees, maintenance loans, and funding options, including support with Student Finance England applications or scholarship searches.",
              },
              {
                question: "Do you provide career support after graduation?",
                answer:
                  "While our primary focus is admissions, we offer advice on career development workshops and networking opportunities as part of our holistic support.",
              },
              {
                question: "Are your services free?",
                answer:
                  "We offer free initial consultations with no commitment. Our full range of services involves a transparent fee structure, always in the best interest of the student.",
              },
              {
                question: "Can I study part-time while working?",
                answer:
                  "We help you identify universities and courses that offer flexible scheduling options, including evening and weekend classes, to accommodate working professionals.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
