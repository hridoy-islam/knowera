import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "KnowEra - Expert Education Consultancy for UK Students",
//   description:
//     "Your future starts here. Get Personalised Guidance Every Step of the Way for university applications in the UK.",
// };


export const metadata: Metadata = {
 title: {
    default: "KnowEra",
    template: "%s | KnowEra",
  },
  description:
    "KnowEra is a UK-based education consultancy providing personalised guidance, university application support, and career-focused learning opportunities for students worldwide.",
  keywords: [
    "KnowEra",
    "education consultancy",
    "UK universities",
    "international students",
    "personal statement support",
    "university application guidance",
    "student visa assistance",
    "higher education",
    "career support",
    "London college",
    "multilingual support",
    "study abroad",
  ],
  openGraph: {
    title: "KnowEra",
    description:
      "KnowEra provides personalised, end-to-end education consultancy, guiding students worldwide through university applications, visas, and career planning.",
    url: "https://www.knowera.co.uk/",
    siteName: "KnowEra",
    images: [
      {
        url: "https://www.knowera.co.uk/hero.png", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "KnowEra",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KnowEra",
    description:
      "UK-based education consultancy providing personalised guidance and university application support for students worldwide.",
    images: ["https://www.knowera.co.uk/hero.png"], // replace with your actual image
  },
  alternates: {
    canonical: "https://www.knowera.co.uk/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />

        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2029553971186861');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2029553971186861&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
