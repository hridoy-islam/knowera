import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KnowEra for personalized guidance on UK education. Visit our office, call, or email us to start your journey towards top universities in the UK.",
  keywords: [
    "KnowEra",
    "contact",
    "UK education",
    "student guidance",
    "international students",
    "university applications",
    "office location",
    "phone number",
    "email address",
    "educational support",
  ],
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with KnowEra for personalized guidance on UK education. Visit our office, call, or email us to start your journey towards top universities in the UK.",
    url: "/contact",
    siteName: "KnowEra",
    images: [
      {
        url: "https://www.knowera.co.uk/hero.png",
        width: 1200,
        height: 630,
        alt: "Contact KnowEra",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Get in touch with KnowEra for personalized guidance on UK education. Visit our office, call, or email us to start your journey towards top universities in the UK.",
    images: ["https://www.knowera.co.uk/hero.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
