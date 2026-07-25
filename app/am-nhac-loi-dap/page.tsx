import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "../content/community-posts";
import { getPublishedLoiDapMusicPosts } from "../content/loi-dap-music";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Âm nhạc Lời Đáp | Dabangzz",
  description: "Nghe các ca khúc mới từ kênh Lời Đáp, kèm phần giới thiệu tiếng Việt về câu chuyện, góc nhìn và cách AI được sử dụng.",
  alternates: { canonical: "/am-nhac-loi-dap" },
};

export default function LoiDapMusicPage() {
  const musicPosts = getPublishedLoiDapMusicPosts(getPublishedPosts());

  return <main id="top">
    <header className="site-header"><div className="header-inner">
      <Link className="brand" href="/">dabang<span>zz</span></Link>
      <nav aria-label="Điều hướng chính"><Link href="/">Trang chủ</Link><Link href="/tin-viet-nam">Tin Việt Nam</Link><Link href="/chuyen-han-quoc">Chuyện Hàn Quốc</Link><Link href="/kim-o-viet-nam">Kim ở Việt Nam</Link><Link href="/gioi-thieu">Giới thiệu</Link></nav>
      <a className="header-cta" href="#songs">Nghe nhạc <span>↘</span></a>
    </div></header>

    <section className="news-intro music-intro">
      <span className="eyebrow">ÂM NHẠC · LỜI ĐÁP</span>
      <h1>Một câu chuyện,<br/><em>một phía được nói.</em></h1>
      <p>Chuyên mục âm nhạc độc lập với tin tức. Mỗi video công khai của kênh Lời Đáp chỉ có một trang, được nghe trực tiếp bằng trình phát YouTube ở chế độ tăng cường quyền riêng tư.</p>
    </section>

    <section className="music-library" id="songs" aria-labelledby="music-library-title">
      <div className="section-heading"><div><span>{musicPosts.length} CA KHÚC ĐÃ XÁC MINH</span><h2 id="music-library-title">Ca khúc mới nhất</h2></div><span className="issue">LỜI ĐÁP · 2026</span></div>
      <div className="music-library-grid">
        {musicPosts.map(post => <article className="music-library-card" key={post.youtube?.videoId}>
          <div className="music-library-number">▶</div>
          <div><span className="label">{post.category}</span><h3><Link href={`/bai-viet/${post.slug}`}>{post.title}</Link></h3><p>{post.summary}</p></div>
          <Link className="music-library-link" href={`/bai-viet/${post.slug}`}>Nghe & đọc →</Link>
        </article>)}
      </div>
    </section>

    <footer>
      <div className="footer-inner"><Link className="brand inverse" href="/">dabang<span>zz</span></Link><p>Âm nhạc được gắn nhãn rõ, không trộn vào tin tức.</p></div>
      <div className="footer-links"><Link href="/tin-viet-nam">Tin Việt Nam</Link><Link href="/chuyen-han-quoc">Chuyện Hàn Quốc</Link><Link href="/kim-o-viet-nam">Kim ở Việt Nam</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/quyen-rieng-tu">Quyền riêng tư</Link><Link href="/lien-he">Liên hệ</Link></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA · MUSIC</span></div>
    </footer>
  </main>;
}
