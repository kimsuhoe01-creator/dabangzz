import type { Metadata } from "next";
import Link from "next/link";
import StoryBrowser from "../components/StoryBrowser";
import { getPublishedPosts } from "../content/community-posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kim ở Việt Nam | Dabangzz",
  description: "Những trải nghiệm tự trả tiền của Kim tại Việt Nam, có ảnh thực tế, chi phí, điểm tốt, điểm chưa tốt và thông tin đối chiếu rõ ràng.",
};

export default function KimInVietnamPage() {
  return <main id="top">
    <header className="site-header"><div className="header-inner">
      <Link className="brand" href="/">dabang<span>zz</span></Link>
      <nav aria-label="Điều hướng chính"><Link href="/">Trang chủ</Link><Link href="/tin-viet-nam">Tin Việt Nam</Link><Link href="/chuyen-han-quoc">Chuyện Hàn Quốc</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-bien-tap">Biên tập</Link></nav>
      <a className="header-cta" href="#latest">Đọc trải nghiệm <span>↘</span></a>
    </div></header>
    <section className="news-intro">
      <span className="eyebrow">KIM Ở VIỆT NAM</span>
      <h1>Đi thật, trả thật,<br/><em>kể cả điểm chưa tốt.</em></h1>
      <p>Nhật ký của một người Hàn sống tại Việt Nam. Mỗi bài dựa trên trải nghiệm và ảnh do Kim trực tiếp cung cấp, công khai thời điểm, chi phí, tài trợ và giới hạn của nhận xét.</p>
    </section>
    <StoryBrowser posts={getPublishedPosts()} defaultFilter="kim" />
    <footer>
      <div className="footer-inner"><Link className="brand inverse" href="/">dabang<span>zz</span></Link><p>Trải nghiệm thật. Nhận xét có phạm vi.</p></div>
      <div className="footer-links"><Link href="/tin-viet-nam">Tin Việt Nam</Link><Link href="/chuyen-han-quoc">Chuyện Hàn Quốc</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-bien-tap">Chính sách biên tập</Link><Link href="/quyen-rieng-tu">Quyền riêng tư</Link><Link href="/lien-he">Liên hệ</Link></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div>
    </footer>
  </main>;
}
