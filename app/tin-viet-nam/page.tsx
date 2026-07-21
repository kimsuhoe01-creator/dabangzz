import type { Metadata } from "next";
import Link from "next/link";
import StoryBrowser from "../components/StoryBrowser";
import { getPublishedPosts } from "../content/community-posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tin mới Việt Nam | Dabangzz",
  description: "Thông tin mới và hữu ích tại Việt Nam được giải thích bằng nguồn chính thức, bối cảnh rõ ràng và liên kết để tự kiểm tra.",
};

export default function VietnamNewsPage() {
  return <main id="top">
    <header className="site-header"><div className="header-inner">
      <Link className="brand" href="/">dabang<span>zz</span></Link>
      <nav aria-label="Điều hướng chính"><Link href="/">Trang chủ</Link><Link href="/kim-o-viet-nam">Kim ở Việt Nam</Link><Link href="/chuyen-han-quoc">Chuyện Hàn Quốc</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-bien-tap">Biên tập</Link></nav>
      <a className="header-cta" href="#latest">Tin mới <span>↘</span></a>
    </div></header>
    <section className="news-intro">
      <span className="eyebrow">TIN MỚI VIỆT NAM</span>
      <h1>Thông tin quan trọng,<br/><em>thêm phần giải thích.</em></h1>
      <p>Dabangzz tham khảo nhu cầu tìm kiếm tại Việt Nam để chọn câu hỏi đáng giải thích, sau đó đối chiếu nguồn chính thức, đưa số liệu, giới hạn và cách kiểm tra bản cập nhật mới nhất.</p>
    </section>
    <StoryBrowser posts={getPublishedPosts()} defaultFilter="news" />
    <footer>
      <div className="footer-inner"><Link className="brand inverse" href="/">dabang<span>zz</span></Link><p>Nguồn rõ ràng. Giải thích độc lập.</p></div>
      <div className="footer-links"><Link href="/kim-o-viet-nam">Kim ở Việt Nam</Link><Link href="/chuyen-han-quoc">Chuyện Hàn Quốc</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-bien-tap">Chính sách biên tập</Link><Link href="/quyen-rieng-tu">Quyền riêng tư</Link><Link href="/lien-he">Liên hệ</Link></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div>
    </footer>
  </main>;
}
