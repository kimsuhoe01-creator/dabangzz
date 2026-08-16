import type { Metadata } from "next";
import StructuredData from "./components/StructuredData";
import "./globals.css";
import "./community.css";

const googleAnalyticsId = "G-TVV7D07WJQ";

export const metadata: Metadata = {
  metadataBase: new URL("https://bacninh-note.com"),
  title: "Bắc Ninh Note — Tin Việt Nam, hiểu rõ hơn",
  description: "Tin mới Việt Nam có nguồn rõ ràng và những trải nghiệm tự thanh toán của Kim tại Việt Nam.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bắc Ninh Note — Tin Việt Nam, hiểu rõ hơn",
    description: "Tin Việt Nam có nguồn và trải nghiệm thực tế của Kim.",
    url: "https://bacninh-note.com",
    siteName: "Bắc Ninh Note",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bắc Ninh Note — Tin Việt Nam, hiểu rõ hơn",
    description: "Tin Việt Nam có nguồn và trải nghiệm thực tế của Kim.",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bacninh-note.com/#website",
        name: "Bắc Ninh Note",
        url: "https://bacninh-note.com/",
        inLanguage: "vi-VN",
        publisher: { "@id": "https://bacninh-note.com/#publisher" },
      },
      {
        "@type": "NewsMediaOrganization",
        "@id": "https://bacninh-note.com/#publisher",
        name: "Bắc Ninh Note",
        url: "https://bacninh-note.com/",
        description: "Ấn phẩm trực tuyến độc lập giải thích tin Việt Nam và đăng trải nghiệm trực tiếp tại Việt Nam.",
        founder: { "@type": "Person", name: "Kim", url: "https://bacninh-note.com/gioi-thieu" },
        address: { "@type": "PostalAddress", addressRegion: "Bắc Ninh", addressCountry: "VN" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "editorial corrections and copyright",
          url: "https://bacninh-note.com/lien-he",
          availableLanguage: ["vi", "ko"],
        },
      },
    ],
  };

  return (
    <html lang="vi">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <script
          id="google-analytics-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9173524239392546"
          crossOrigin="anonymous"
        />
      </head>
      <body><StructuredData data={structuredData} />{children}</body>
    </html>
  );
}
