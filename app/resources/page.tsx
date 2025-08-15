import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Navigating UCAS: A Step-by-Step Guide for UK Students",
      summary:
        "Understand the UCAS application process from start to finish, including key dates and tips for success.",
      date: "July 25, 2024",
      author: "KnowEra Team",
      readTime: "7 min read",
      category: "UCAS",
      image: "https://picsum.photos/400/250?random=1",
      slug: "navigating-ucas-guide",
    },
    {
      id: 2,
      title:
        "Student Finance Explained: Loans, Grants, and Scholarships in the UK",
      summary:
        "Demystifying student finance options for both domestic and international students in the UK.",
      date: "July 20, 2024",
      author: "KnowEra Team",
      readTime: "10 min read",
      category: "Finance",
      image: "https://picsum.photos/400/250?random=2",
      slug: "student-finance-explained",
    },
    {
      id: 3,
      title: "Choosing Your University: Factors to Consider Beyond Rankings",
      summary:
        "Expert advice on how to select the right university for you, focusing on fit, culture, and course content.",
      date: "July 15, 2024",
      author: "KnowEra Team",
      readTime: "8 min read",
      category: "University Choice",
      image: "https://picsum.photos/400/250?random=3",
      slug: "choosing-your-university",
    },
    {
      id: 4,
      title: "Crafting a Winning Personal Statement: Tips from Our Experts",
      summary:
        "Learn how to write a compelling personal statement that stands out to admissions tutors.",
      date: "July 10, 2024",
      author: "KnowEra Team",
      readTime: "6 min read",
      category: "Application Tips",
      image: "https://picsum.photos/400/250?random=4",
      slug: "crafting-winning-personal-statement",
    },
    {
      id: 5,
      title: "Life as an International Student in the UK: What to Expect",
      summary:
        "A guide for international students on cultural adjustments, student life, and support services available.",
      date: "July 5, 2024",
      author: "KnowEra Team",
      readTime: "12 min read",
      category: "International Students",
      image: "https://picsum.photos/400/250?random=5",
      slug: "life-as-international-student-uk",
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
            <span className="text-gray-900">Our </span>
            <span className="text-gradient-knowera">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Stay informed with expert articles, guides, and news on UK
            education, student life, and application tips.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <span className="inline-block bg-knowera-orange/10 text-knowera-orange-text text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <div className="flex justify-between text-gray-500 text-sm space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  {/* <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div> */}
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button className="btn-knowera-primary w-full font-semibold py-3 rounded-full">
                  <Link href={`/resources/${post.slug}`}>Read More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r-knowera-reverse text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-6">Have a Question?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our team of experts is here to provide personalized advice and
            support.
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
