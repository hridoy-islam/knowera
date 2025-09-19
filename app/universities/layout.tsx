import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Universities",
  description:
    "Explore KnowEra's partner universities across the UK. Discover top-tier institutions offering world-class education, vibrant student experiences, and support for international students.",
  keywords: [
    "KnowEra",
    "UK universities",
    "partner universities",
    "international students",
    "higher education",
    "university guidance",
    "study in UK",
    "top universities",
    "student support",
  ],
  openGraph: {
    title: "Universities",
    description:
      "Explore KnowEra's partner universities across the UK. Discover top-tier institutions offering world-class education, vibrant student experiences, and support for international students.",
    url: "/universities",
    siteName: "KnowEra",
    images: [
      {
        url: "https://www.knowera.co.uk/hero.png",
        width: 1200,
        height: 630,
        alt: "Universities",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universities",
    description:
      "Explore KnowEra's partner universities across the UK. Discover top-tier institutions offering world-class education, vibrant student experiences, and support for international students.",
    images: ["https://www.knowera.co.uk/hero.png"],
  },
  alternates: {
    canonical: "/universities",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
