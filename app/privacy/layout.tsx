import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Privacy Policy",
  description:
    "KnowEra is committed to protecting your personal data. Learn how we collect, use, and safeguard your information in accordance with UK GDPR and the Data Protection Act 2018.",
  keywords: [
    "KnowEra",
    "privacy policy",
    "personal data",
    "UK GDPR",
    "data protection",
    "privacy rights",
    "user data",
    "information security",
    "data collection",
    "website privacy",
  ],
  openGraph: {
    title: "Privacy Policy",
    description:
      "KnowEra is committed to protecting your personal data. Learn how we collect, use, and safeguard your information in accordance with UK GDPR and the Data Protection Act 2018.",
    url: "/privacy",
    siteName: "KnowEra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "KnowEra is committed to protecting your personal data. Learn how we collect, use, and safeguard your information in accordance with UK GDPR and the Data Protection Act 2018.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
