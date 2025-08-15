import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, GraduationCap, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      name: "BSc Computer Science",
      university: "University of Manchester",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "A comprehensive program covering fundamental and advanced concepts in computing, software development, and artificial intelligence.",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
      link: "a",
    },
    {
      name: "MBA International Business",
      university: "University of London",
      duration: "1 Year",
      fees: "£25,000 (Intl)",
      description:
        "An intensive Master of Business Administration focusing on global markets, strategy, and leadership in an international context.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      link: "a",
    },
    {
      name: "MSc Data Science",
      university: "University of Edinburgh",
      duration: "1 Year",
      fees: "£15,000 (UK)",
      description:
        "Develop expertise in data analysis, machine learning, and statistical modeling to solve complex real-world problems.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      link: "a",
    },
    {
      name: "MEng Mechanical Engineering",
      university: "Imperial College London",
      duration: "4 Years",
      fees: "£9,250/year (UK)",
      description:
        "A rigorous engineering program focusing on design, analysis, and manufacturing of mechanical systems.",
      image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
      link: "a",
    },
    {
      name: "BA (Hons) Law",
      university: "University of Birmingham",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "A foundational law degree covering core legal principles, critical thinking, and legal research skills.",
      image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg",
      link: "a",
    },
    {
      name: "BSc Psychology",
      university: "University of Glasgow",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "Explore the science of mind and behavior, covering cognitive, developmental, social, and clinical psychology.",
      image: "https://images.pexels.com/photos/574074/pexels-photo-574074.jpeg",
      link: "a",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-knowera-orange/5 to-knowera-blue/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--knowera-orange),0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Explore Our </span>
            <span className="text-gradient-knowera-reverse">Courses</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Find the perfect academic program to match your ambitions and unlock
            your potential.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.name}
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 flex items-center space-x-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-knowera-blue-text" />
                  <span>{course.university}</span>
                </p>
                <p className="text-gray-600 flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-knowera-orange-text" />
                  <span>{course.duration}</span>
                  <DollarSign className="w-5 h-5 text-knowera-blue-text ml-4" />
                  <span>{course.fees}</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                  {course.description}
                </p>
                <Button className="btn-knowera-primary w-full font-semibold py-3 rounded-full">
                  <Link href={`/courses/${course.link}`}>View Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r-knowera text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-6">
            Need Help Choosing a Course?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Our expert advisors can help you find the perfect program that
            aligns with your career goals.
          </p>
          <Button className="bg-white text-knowera-blue-text hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
            <Link href="/book-consultation">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
