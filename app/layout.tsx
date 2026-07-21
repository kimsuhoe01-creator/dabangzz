import type { Metadata } from "next";
import "./globals.css";
import "./community.css";

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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dabangzz — Chuyện Hàn, kể rõ ràng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dabangzz — Tin Việt Nam, hiểu rõ hơn",
    description: "Tin Việt Nam có nguồn, trải nghiệm thực tế của Kim và chuyện Hàn Quốc được chọn lọc cho độc giả Việt.",
    images: ["/og.png"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="vi"><body>{children}</body></html>;
}
