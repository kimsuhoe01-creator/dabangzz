import StoryBrowser from "./components/StoryBrowser";
import { getPublishedPosts } from "./content/community-posts";

export const dynamic = "force-dynamic";

export default function Home() {
  const publishedPosts = getPublishedPosts();

  return <main id="top">
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Dabangzz trang chủ">dabang<span>zz</span></a>
        <nav aria-label="Điều hướng chính">
          <a href="#latest">Bài mới</a>
          <a href="/tin-viet-nam">Tin Việt Nam</a>
          <a href="#topics">Chủ đề</a>
          <a href="/chinh-sach-bien-tap">Biên tập</a>
        </nav>
        <a className="header-cta" href="#latest">Đọc ngay <span>↘</span></a>
      </div>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">KOREA STORIES · VIETNAM EXPLAINED</span>
        <h1>Chuyện đáng đọc,<br/><em>kể rõ ràng.</em></h1>
      </div>
      <div className="hero-intro">
        <span>01 / VỀ DABANGZZ</span>
        <p>Chúng tôi kể lại những câu chuyện đáng chú ý tại Hàn Quốc và giải thích thông tin quan trọng ở Việt Nam bằng nguồn rõ ràng.</p>
        <a href="#latest">Xem bài mới nhất <span>→</span></a>
      </div>
    </section>

    <StoryBrowser posts={publishedPosts} />

    <section className="editorial" id="about">
      <span>NGUYÊN TẮC BIÊN TẬP</span>
      <h2>Không sao chép.<br/>Không giật gân vô căn cứ.</h2>
      <p>Nội dung cộng đồng được viết mới và loại bỏ thông tin nhận dạng. Tin Việt Nam ưu tiên nguồn chính thức, hiển thị ngày cập nhật và liên kết để người đọc tự đối chiếu.</p>
      <a className="editorial-link" href="/chinh-sach-bien-tap">Đọc đầy đủ chính sách biên tập →</a>
    </section>

    <footer>
      <div className="footer-inner"><a className="brand inverse" href="#top">dabang<span>zz</span></a><p>Chuyện Hàn và tin Việt Nam, kể rõ ràng.</p></div>
      <div className="footer-links"><a href="/tin-viet-nam">Tin Việt Nam</a><a href="/chinh-sach-bien-tap">Chính sách biên tập</a><a href="/quyen-rieng-tu">Quyền riêng tư</a><a href="/lien-he">Liên hệ</a></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div>
    </footer>
  </main>;
}
