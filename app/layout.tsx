import type { Metadata } from "next";
import "./globals.css";
import "./community.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dabangzz.com"),
  title: "Dabangzz — Chuyện Hàn, kể rõ ràng",
  description: "Những câu chuyện đang được quan tâm tại Hàn Quốc, được chọn lọc, kiểm chứng và kể lại bằng tiếng Việt.",
  openGraph: {
    title: "Dabangzz — Chuyện Hàn, kể rõ ràng",
    description: "Chuyện Hàn Quốc được chọn lọc và kể lại bằng tiếng Việt.",
    url: "https://dabangzz.com",
    siteName: "Dabangzz",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dabangzz — Chuyện Hàn, kể rõ ràng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dabangzz — Chuyện Hàn, kể rõ ràng",
    description: "Chuyện Hàn Quốc được chọn lọc và kể lại bằng tiếng Việt.",
    images: ["/og.png"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="vi"><body>{children}</body></html>;
}
