import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access KnowEra's curated resources on UK education. Explore expert articles, guides, and tips on UCAS applications, university selection, student finance, personal statements, and international student life.",
  keywords: [
    "KnowEra",
    "UK education",
    "student resources",
    "UCAS guides",
    "university applications",
    "personal statements",
    "student finance",
    "international students",
    "educational articles",
    "study in UK",
  ],
  openGraph: {
    title: "Resources",
    description:
      "Access KnowEra's curated resources on UK education. Explore expert articles, guides, and tips on UCAS applications, university selection, student finance, personal statements, and international student life.",
    url: "/resources",
    siteName: "KnowEra",
    images: [
      {
        url: "https://www.knowera.co.uk/hero.png",
        width: 1200,
        height: 630,
        alt: "KnowEra Resources",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources",
    description:
      "Access KnowEra's curated resources on UK education. Explore expert articles, guides, and tips on UCAS applications, university selection, student finance, personal statements, and international student life.",
    images: ["https://www.knowera.co.uk/hero.png"],
  },
  alternates: {
    canonical: "/resources",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
