"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  BookOpen,
  Globe,
  Star,
  Download,
  CheckCircle,
  Calendar,
  MapPin,
  GraduationCap,
  Target,
  Briefcase,
  Heart,
  Share2,
  ChevronRight,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Sample course data
  const course = {
    id: 1,
    title: "Master of Business Administration (MBA)",
    subtitle: "Advanced Business Leadership & Management",
    university: "University of London",
    location: "London, UK",
    duration: "24 Months",
    mode: "Full-time / Part-time",
    intake: "September 2024",
    tuitionFee: "£18,500",
    rating: 4.8,
    reviews: 156,
    students: 2847,
    image: "https://www.tmu.ac.in/uploads/blogs/mba_Final_BPC-01.jpg",
    description:
      "Our MBA program is designed for ambitious professionals seeking to advance their careers in business leadership. This comprehensive program combines theoretical knowledge with practical application, preparing graduates for senior management roles across various industries.",
    highlights: [
      "Accredited by AACSB and EQUIS",
      "Industry-experienced faculty",
      "Global networking opportunities",
      "Flexible study options",
      "Career placement support",
      "International study tours",
    ],
    modules: [
      { name: "Strategic Management", credits: 20, duration: "12 weeks" },
      { name: "Financial Management", credits: 20, duration: "12 weeks" },
      { name: "Marketing Strategy", credits: 15, duration: "10 weeks" },
      { name: "Operations Management", credits: 15, duration: "10 weeks" },
      { name: "Leadership & Ethics", credits: 15, duration: "8 weeks" },
      { name: "International Business", credits: 15, duration: "8 weeks" },
      { name: "Dissertation Project", credits: 60, duration: "6 months" },
    ],
    requirements: [
      "Bachelor's degree (2:1 or above)",
      "3+ years work experience",
      "IELTS 6.5 or equivalent",
      "Personal statement",
      "Two professional references",
      "CV/Resume",
    ],
    careerOutcomes: [
      "Senior Management Positions",
      "Business Consultant",
      "Project Manager",
      "Entrepreneur/Business Owner",
      "Strategy Analyst",
      "Operations Director",
    ],
  };

  const stats = [
    {
      icon: Users,
      label: "Students",
      value: "2,847",
      color: "text-knowera-blue-text",
    },
    {
      icon: Award,
      label: "Accredited",
      value: "100%",
      color: "text-knowera-orange-text",
    },
    {
      icon: TrendingUp,
      label: "Job Rate",
      value: "94%",
      color: "text-knowera-blue-text",
    },
    {
      icon: Globe,
      label: "Countries",
      value: "45+",
      color: "text-knowera-orange-text",
    },
  ];

  return (
    <div>
      <Header />
      {/* Floating Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Link
          href="/courses"
          className="flex items-center justify-center w-12 h-12 bg-white shadow-xl rounded-full border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-knowera-blue-text group-hover:-translate-x-0.5 transition-all" />
        </Link>
      </div>

      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 bg-gradient-to-br from-knowera-blue/5 to-knowera-orange/5 overflow-hidden">
        {/* Decorative radial gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsla(var(--knowera-blue),0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsla(var(--knowera-orange),0.15),transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Tags */}
          <div className="flex justify-center space-x-4 mb-6">
            <span className="bg-knowera-blue/20 backdrop-blur-sm border border-white/20 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
              {course.university}
            </span>
            <span className="bg-knowera-orange/20 backdrop-blur-sm border border-white/20 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
              {course.mode}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
            {course.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            {course.subtitle}
          </p>

          {/* Info Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-800">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{course.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <span className="font-medium">
                {course.rating} ({course.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="btn-knowera-gradient text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform"
              onClick={() => setIsEnrolled(!isEnrolled)}
            >
              {isEnrolled ? (
                <>
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Enrolled Successfully
                </>
              ) : (
                <>
                  Apply Now - {course.tuitionFee}
                  <ChevronRight className="w-6 h-6 ml-3" />
                </>
              )}
            </Button>
            <Button
              variant="outline"
              className="text-xl font-semibold px-12 py-6 rounded-full bg-white backdrop-blur-sm border-white/30 text-gray-900 hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Vertical Tab Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Course Details
                </h3>
                {[
                  { id: "overview", label: "Overview", icon: BookOpen },
                  {
                    id: "curriculum",
                    label: "Curriculum",
                    icon: GraduationCap,
                  },
                  {
                    id: "requirements",
                    label: "Requirements",
                    icon: CheckCircle,
                  },
                  { id: "careers", label: "Career Outcomes", icon: Briefcase },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl font-semibold transition-all duration-300 text-left ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r-knowera text-white shadow-lg transform scale-105"
                        : "bg-white text-gray-600 hover:text-knowera-blue-text hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-100"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}

                {/* Quick Actions Card */}
                <Card className="mt-8 shadow-xl border-0 rounded-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r-knowera-reverse text-white p-6">
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="w-5 h-5 mr-2" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start btn-knowera-secondary rounded-xl py-3 bg-transparent"
                    >
                      <Calendar className="w-4 h-4 mr-3" />
                      Book Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start btn-knowera-secondary rounded-xl py-3 bg-transparent"
                    >
                      <Globe className="w-4 h-4 mr-3" />
                      Virtual Tour
                    </Button>
                    <div className="flex space-x-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 btn-knowera-secondary bg-transparent"
                        onClick={() => setIsSaved(!isSaved)}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isSaved ? "fill-current text-red-500" : ""
                          }`}
                        />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 btn-knowera-secondary bg-transparent"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {activeTab === "overview" && (
                <div className="space-y-12">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h2 className="text-4xl font-black text-gray-900 mb-6">
                      Course Overview
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {course.description}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {course.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r-knowera rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <Shield className="w-8 h-8 text-knowera-blue-text mb-4" />
                          <p className="font-semibold text-gray-900">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h2 className="text-4xl font-black text-gray-900 mb-8">
                      Course Curriculum
                    </h2>
                    <div className="space-y-4">
                      {course.modules.map((module, index) => (
                        <div
                          key={index}
                          className="group relative p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-l-4 border-knowera-blue hover:border-knowera-orange hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-knowera-blue-text transition-colors">
                              {module.name}
                            </h3>
                            <div className="flex space-x-2">
                              <span className="bg-knowera-blue/10 text-knowera-blue-text px-3 py-1 rounded-full text-sm font-semibold">
                                {module.credits} Credits
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-knowera-orange-text" />
                            <span className="font-medium">
                              Duration: {module.duration}
                            </span>
                          </div>
                          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight className="w-5 h-5 text-knowera-blue-text" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "requirements" && (
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h2 className="text-4xl font-black text-gray-900 mb-8">
                      Entry Requirements
                    </h2>
                    <div className="grid gap-4">
                      {course.requirements.map((requirement, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-6 bg-gradient-to-r from-knowera-blue/5 to-transparent rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r-knowera rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium text-lg">
                            {requirement}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-br from-knowera-blue/5 via-white to-knowera-orange/5 rounded-3xl border border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Application Timeline
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            step: "1",
                            title: "Application Submission",
                            desc: "Complete online form",
                            icon: "📝",
                          },
                          {
                            step: "2",
                            title: "Document Review",
                            desc: "Submit required documents",
                            icon: "📄",
                          },
                          {
                            step: "3",
                            title: "Interview Process",
                            desc: "Attend virtual/in-person interview",
                            icon: "💬",
                          },
                          {
                            step: "4",
                            title: "Final Decision",
                            desc: "Receive admission confirmation",
                            icon: "✅",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r-knowera rounded-full flex items-center justify-center text-white font-bold">
                              {item.step}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-1">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "careers" && (
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h2 className="text-4xl font-black text-gray-900 mb-8">
                      Career Outcomes
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                      {course.careerOutcomes.map((career, index) => (
                        <div
                          key={index}
                          className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r-knowera rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Target className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg group-hover:text-knowera-blue-text transition-colors">
                                {career}
                              </h3>
                              <p className="text-gray-500 text-sm">
                                High demand role
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-8 bg-gradient-to-br from-knowera-blue/5 via-white to-knowera-orange/5 rounded-3xl border border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Career Support Services
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "Career Counseling",
                            desc: "One-on-one guidance",
                            icon: "🎯",
                          },
                          {
                            title: "Industry Networks",
                            desc: "Connect with professionals",
                            icon: "🤝",
                          },
                          {
                            title: "Job Placement",
                            desc: "94% placement rate",
                            icon: "📈",
                          },
                          {
                            title: "Alumni Mentorship",
                            desc: "Ongoing support system",
                            icon: "💼",
                          },
                        ].map((service, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="text-3xl">{service.icon}</div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2">
                                {service.title}
                              </h4>
                              <p className="text-gray-600">{service.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Related Courses */}
              <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  You Might Also Like
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group p-6 border-2 border-gray-100 rounded-2xl hover:border-knowera-blue hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-gray-900 group-hover:text-knowera-blue-text transition-colors">
                        MSc International Business
                      </h4>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-knowera-blue-text transition-colors" />
                    </div>
                    <p className="text-gray-600 mb-3">18 months • £16,500</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>4.7 (89 reviews)</span>
                    </div>
                  </div>
                  <div className="group p-6 border-2 border-gray-100 rounded-2xl hover:border-knowera-orange hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-gray-900 group-hover:text-knowera-orange-text transition-colors">
                        Executive MBA
                      </h4>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-knowera-orange-text transition-colors" />
                    </div>
                    <p className="text-gray-600 mb-3">24 months • £22,000</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>4.9 (124 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
