import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { University, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UniversitiesPage() {
  const universities = [
    {
      name: "University of London",
      location: "London, UK",
      description:
        "A collegiate research university in London, England, and a federal university consisting of 17 member institutions and three central academic bodies.",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
      link: "#",
    },
    {
      name: "University of Manchester",
      location: "Manchester, UK",
      description:
        "A public research university in Manchester, England, formed in 2004 by the merger of the University of Manchester Institute of Science and Technology and the Victoria University of Manchester.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      link: "#",
    },
    {
      name: "University of Edinburgh",
      location: "Edinburgh, UK",
      description:
        "A public research university in Edinburgh, Scotland, founded in 1583 by the Edinburgh Town Council, making it one of Scotland's ancient universities.",
      image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
      link: "#",
    },
    {
      name: "Imperial College London",
      location: "London, UK",
      description:
        "A public research university in London, England, specializing in science, engineering, medicine, and business.",
      image:
        "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg",
      link: "#",
    },
    {
      name: "University of Birmingham",
      location: "Birmingham, UK",
      description:
        "A public research university located in Edgbaston, Birmingham, United Kingdom. It received its royal charter in 1900 as a successor to Mason Science College.",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg",
      link: "#",
    },
    {
      name: "University of Glasgow",
      location: "Glasgow, UK",
      description:
        "A public research university in Glasgow, Scotland. Founded by papal bull in 1451, it is the fourth-oldest university in the English-speaking world and one of Scotland's four ancient universities.",
      image:
        "https://images.pexels.com/photos/3560799/pexels-photo-3560799.jpeg",
      link: "#",
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
            <span className="text-gray-900">Our Partner </span>
            <span className="text-gradient-knowera">Universities</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Explore a diverse range of top-tier universities across the UK,
            offering world-class education and vibrant student experiences.
          </p>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={uni.image || "/placeholder.svg"}
                  alt={uni.name}
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {uni.name}
                </h3>
                <p className="text-gray-600 flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-knowera-orange-text" />
                  <span>{uni.location}</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                  {uni.description}
                </p>
                <Button className="btn-knowera-primary w-full font-semibold py-3 rounded-full">
                  <Link href={uni.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r-knowera-reverse text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-6">
            Can't Find Your Dream University?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Our network extends beyond this list. Book a free consultation to
            explore more options tailored to you.
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
