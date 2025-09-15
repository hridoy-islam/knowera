import { posts } from "@/utils/posts";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>; // params is now a Promise
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  // Await the params Promise
  const params = await props.params;
  const { slug } = params;

  // Find the blog post by slug or fallback
  const post = posts.find((p) => p.slug === slug) || {
    title: "Resources",
    description:
      "Explore KnowEra's resources on UK education. Read expert articles, guides, and tips to support your university applications and student life.",
    image: "/logo.png",
  };

  return {
    title: `${post.title} | KnowEra Resources`,
    description: post.title,
    keywords: [
      "KnowEra",
      "UK education",
      "student resources",
      "UCAS",
      "personal statement",
      "student finance",
      "international students",
      "university applications",
    ],
    openGraph: {
      title: `${post.title} | KnowEra Resources`,
      description: post.title,
      url: `/resources/${slug}`,
      siteName: "KnowEra",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | KnowEra Resources`,
      description: post.title,
      images: [post.image],
    },
    alternates: {
      canonical: `/resources/${slug}`,
    },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}