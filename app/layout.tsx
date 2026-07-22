import type { Metadata } from "next";
import StructuredData from "./components/StructuredData";
import "./globals.css";
import "./community.css";

const googleAnalyticsId = "G-TVV7D07WJQ";

export const metadata: Metadata = {
  metadataBase: new URL("https://dabangzz.com"),
  title: "Dabangzz — Tin Việt Nam, hiểu rõ hơn",
  description: "Tin mới Việt Nam có nguồn rõ ràng, trải nghiệm tự thanh toán của Kim tại Việt Nam và chuyện Hàn Quốc được chọn lọc trong một chuyên mục riêng.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dabangzz — Tin Việt Nam, hiểu rõ hơn",
    description: "Tin Việt Nam có nguồn, trải nghiệm thực tế của Kim và chuyện Hàn Quốc được chọn lọc cho độc giả Việt.",
    url: "https://dabangzz.com",
    siteName: "Dabangzz",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dabangzz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dabangzz — Tin Việt Nam, hiểu rõ hơn",
    description: "Tin Việt Nam có nguồn, trải nghiệm thực tế của Kim và chuyện Hàn Quốc được chọn lọc cho độc giả Việt.",
    images: ["/og.png"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://dabangzz.com/#website",
        name: "Dabangzz",
        url: "https://dabangzz.com/",
        inLanguage: "vi-VN",
        publisher: { "@id": "https://dabangzz.com/#publisher" },
      },
      {
        "@type": "NewsMediaOrganization",
        "@id": "https://dabangzz.com/#publisher",
        name: "Dabangzz",
        url: "https://dabangzz.com/",
        description: "Ấn phẩm trực tuyến độc lập giải thích tin Việt Nam, đăng trải nghiệm trực tiếp tại Việt Nam và chọn lọc chuyện Hàn Quốc.",
        founder: { "@type": "Person", name: "Kim", url: "https://dabangzz.com/gioi-thieu" },
        address: { "@type": "PostalAddress", addressRegion: "Bắc Ninh", addressCountry: "VN" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "editorial corrections and copyright",
          url: "https://dabangzz.com/lien-he",
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
