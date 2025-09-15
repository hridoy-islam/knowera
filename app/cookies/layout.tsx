import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Cookie Policy",
  description:
    "Learn how KnowEra uses cookies and similar technologies on our website. Understand your choices, types of cookies, and how we handle your data in accordance with UK GDPR and PECR regulations.",
  keywords: [
    "KnowEra",
    "cookie policy",
    "cookies",
    "website tracking",
    "UK GDPR",
    "PECR",
    "privacy",
    "data protection",
    "analytics",
    "advertising cookies",
  ],
  openGraph: {
    title: "Cookie Policy",
    description:
      "Learn how KnowEra uses cookies and similar technologies on our website. Understand your choices, types of cookies, and how we handle your data in accordance with UK GDPR and PECR regulations.",
    url: "/cookies",
    siteName: "KnowEra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy",
    description:
      "Learn how KnowEra uses cookies and similar technologies on our website. Understand your choices, types of cookies, and how we handle your data in accordance with UK GDPR and PECR regulations.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/cookies",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
