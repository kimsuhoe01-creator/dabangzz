import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dabangzz | Chuyện Hàn kể cho người Việt",
  description: "Những câu chuyện và kinh nghiệm từ cộng đồng Hàn Quốc được chọn lọc và kể lại bằng tiếng Việt.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="vi"><body>{children}</body></html>;
}
