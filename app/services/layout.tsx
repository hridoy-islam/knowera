import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore KnowEra's comprehensive services for students seeking guidance on UK education. Personalized support for university selection, UCAS applications, personal statements, finance advice, and interview preparation.",
  keywords: [
    "KnowEra",
    "UK education",
    "student guidance",
    "university applications",
    "international students",
    "personalized support",
    "admission advice",
    "student services",
    "UCAS support",
    "interview preparation",
    "personal statement editing",
  ],
  openGraph: {
    title: "Services",
    description:
      "Explore KnowEra's comprehensive services for students seeking guidance on UK education. Personalized support for university selection, UCAS applications, personal statements, finance advice, and interview preparation.",
    url: "/services",
    siteName: "KnowEra",
    images: [
      {
        url: "https://www.knowera.co.uk/hero.png",
        width: 1200,
        height: 630,
        alt: "Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services",
    description:
      "Explore KnowEra's comprehensive services for students seeking guidance on UK education. Personalized support for university selection, UCAS applications, personal statements, finance advice, and interview preparation.",
    images: ["https://www.knowera.co.uk/hero.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
