import type { Metadata } from "next";
import Link from "next/link";
import StoryBrowser from "../components/StoryBrowser";
import { getPublishedPosts } from "../content/community-posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Chuyện Hàn Quốc | Dabangzz",
  description: "Chuyện đời sống, công sở và K-beauty từ các thảo luận công khai tại Hàn Quốc, được viết mới và giải thích cho độc giả Việt Nam.",
};

export default function KoreaStoriesPage() {
  return <main id="top">
    <header className="site-header"><div className="header-inner">
      <Link className="brand" href="/">dabang<span>zz</span></Link>
      <nav aria-label="Điều hướng chính"><Link href="/">Trang chủ</Link><Link href="/kim-o-viet-nam">Kim ở Việt Nam</Link><Link href="/tin-viet-nam">Tin Việt Nam</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-bien-tap">Biên tập</Link></nav>
      <a className="header-cta" href="#latest">Đọc chuyện <span>↘</span></a>
    </div></header>
    <section className="news-intro">
      <span className="eyebrow">CHUYỆN HÀN QUỐC</span>
      <h1>Một chuyên mục,<br/><em>nhiều góc nhìn.</em></h1>
      <p>Các mô-típ từ thảo luận công khai được tổng hợp, loại bỏ thông tin nhận dạng và viết lại hoàn toàn. Mỗi bài bổ sung bối cảnh và cách áp dụng dành cho độc giả Việt Nam.</p>
    </section>
    <StoryBrowser posts={getPublishedPosts()} defaultFilter="korea" />
    <footer>
      <div className="footer-inner"><Link className="brand inverse" href="/">dabang<span>zz</span></Link><p>Không sao chép. Không biến một câu chuyện thành định kiến.</p></div>
      <div className="footer-links"><Link href="/kim-o-viet-nam">Kim ở Việt Nam</Link><Link href="/tin-viet-nam">Tin Việt Nam</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-bien-tap">Chính sách biên tập</Link><Link href="/quyen-rieng-tu">Quyền riêng tư</Link><Link href="/lien-he">Liên hệ</Link></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div>
    </footer>
  </main>;
}
