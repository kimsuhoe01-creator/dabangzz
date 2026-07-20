import type { Metadata } from "next";
import "./globals.css";
import "./community.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dabangzz.com"),
  title: "Dabangzz — Chuyện Hàn và tin Việt Nam, kể rõ ràng",
  description: "Chuyện Hàn Quốc được biên tập cho độc giả Việt Nam và tin mới Việt Nam được giải thích bằng nguồn rõ ràng.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dabangzz — Chuyện Hàn và tin Việt Nam, kể rõ ràng",
    description: "Chuyện Hàn Quốc và tin mới Việt Nam được biên tập bằng tiếng Việt, nguồn rõ ràng.",
    url: "https://dabangzz.com",
    siteName: "Dabangzz",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dabangzz — Chuyện Hàn, kể rõ ràng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dabangzz — Chuyện Hàn và tin Việt Nam, kể rõ ràng",
    description: "Chuyện Hàn Quốc và tin mới Việt Nam được biên tập bằng tiếng Việt, nguồn rõ ràng.",
    images: ["/og.png"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="vi"><body>{children}</body></html>;
}
