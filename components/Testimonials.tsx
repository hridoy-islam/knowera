"use client";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "London",
      text: "KnowEra helped me find the right course and made the whole UCAS process feel easy. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmed K.",
      location: "Manchester",
      text: "The personalized guidance was invaluable. I got into my top choice university thanks to KnowEra's support.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria L.",
      location: "Spain",
      text: "Navigating the UK education system from abroad was daunting, but KnowEra made it seamless. Excellent service!",
      rating: 5,
    },
    {
      id: 4,
      name: "David C.",
      location: "China",
      text: "Their interview preparation was spot on. I felt confident and well-prepared for my admissions interview.",
      rating: 5,
    },
    {
      id: 5,
      name: "Priya S.",
      location: "India",
      text: "KnowEra's advice on student finance was incredibly helpful. I understood all my options clearly.",
      rating: 5,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-gray-100">
              <span className="text-knowera-blue-text font-bold text-lg">
                Student Success Stories
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">What Our</span>
            <br />
            <span className="text-gradient-knowera">Students Say</span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hear directly from the students who have achieved their academic
            dreams with KnowEra.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center px-4"
              >
                <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-10 h-10 text-knowera-orange-text mb-6" />
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
            <button
              onClick={scrollLeft}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-knowera-blue-text"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-knowera-blue-text"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="text-knowera-blue-text font-semibold hover:underline"
          >
            Read More Success Stories &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
