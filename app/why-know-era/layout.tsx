import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose KnowEra",
  description:
    "Discover why KnowEra is your trusted guide to UK education. Personalized support, local expertise, and end-to-end guidance for students worldwide.",
  keywords: [
    "KnowEra",
    "UK education",
    "student guidance",
    "university applications",
    "international students",
    "personalized support",
    "admission advice",
    "student services",
  ],
  openGraph: {
    title: "Why Choose KnowEra",
    description:
      "Discover why KnowEra is your trusted guide to UK education. Personalized support, local expertise, and end-to-end guidance for students worldwide.",
    url: "/why-know-era",
    siteName: "KnowEra",
    images: [
      {
        url: "/logo.png", // replace with your actual hero image
        width: 1200,
        height: 630,
        alt: "Why Choose KnowEra - Trusted UK Education Guidance",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose KnowEra",
    description:
      "Discover why KnowEra is your trusted guide to UK education. Personalized support, local expertise, and end-to-end guidance for students worldwide.",
    images: ["/logo.png"], // replace with your actual hero image
  },
  alternates: {
    canonical: "/why-know-era",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
