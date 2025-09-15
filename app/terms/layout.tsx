import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Terms of Service",
  description:
    "Read KnowEra's Terms of Service to understand the rules, obligations, and guidelines governing the use of our website and educational consultancy services.",
  keywords: [
    "KnowEra",
    "terms of service",
    "legal",
    "user agreement",
    "website terms",
    "education consultancy",
    "UK education",
    "student guidance",
  ],
  openGraph: {
    title: "Terms of Service",
    description:
      "Read KnowEra's Terms of Service to understand the rules, obligations, and guidelines governing the use of our website and educational consultancy services.",
    url: "/terms",
    siteName: "KnowEra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service",
    description:
      "Read KnowEra's Terms of Service to understand the rules, obligations, and guidelines governing the use of our website and educational consultancy services.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
