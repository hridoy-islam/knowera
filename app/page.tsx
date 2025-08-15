"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyKnowEra from "@/components/WhyKnowEra";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyKnowEra />
      <OurServices />

      {/* Call to Action for Universities/Courses */}
      <section className="py-24 bg-gradient-to-br from-knowera-blue/5 to-knowera-orange/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Explore Our</span>
            <br />
            <span className="text-gradient-knowera">
              Partner Universities & Courses
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover a wide range of programs and institutions tailored to your
            academic and career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="group btn-knowera-primary font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/universities" className="flex items-center">
                View Universities
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button className="group btn-knowera-secondary font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 bg-knowera-orange hover:shadow-xl transform hover:scale-105">
              <Link href="/courses" className="flex items-center">
                Browse Courses
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog/Resources CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Latest Insights &</span>
            <br />
            <span className="text-gradient-knowera-reverse">Resources</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Stay informed with our expert articles, guides, and news on UK
            education and student life.
          </p>
          <Button className="group btn-knowera-gradient font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="/resources" className="flex items-center">
              Read Our Blog
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
