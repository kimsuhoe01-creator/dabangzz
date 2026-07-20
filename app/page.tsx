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
          <a href="/chuyen-han-quoc">Chuyện Hàn Quốc</a>
          <a href="/chinh-sach-bien-tap">Biên tập</a>
        </nav>
        <a className="header-cta" href="#latest">Đọc ngay <span>↘</span></a>
      </div>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">VIETNAM NOW · KOREA EXPLAINED</span>
        <h1>Tin Việt Nam,<br/><em>hiểu rõ hơn.</em></h1>
      </div>
      <div className="hero-intro">
        <span>01 / VỀ DABANGZZ</span>
        <p>Dabangzz theo dõi nhu cầu tìm kiếm tại Việt Nam, đối chiếu nguồn chính thức và viết bài giải thích có số liệu. Chuyện từ Hàn Quốc được chọn lọc trong một chuyên mục riêng.</p>
        <a href="#latest">Xem bài mới nhất <span>→</span></a>
      </div>
    </section>

    <StoryBrowser posts={publishedPosts} />

    <section className="editorial" id="about">
      <span>NGUYÊN TẮC BIÊN TẬP</span>
      <h2>Dữ kiện trước.<br/>Bối cảnh và cách dùng sau.</h2>
      <p>Tin Việt Nam bắt đầu từ nhu cầu thật của độc giả, nhưng chỉ xuất bản khi có nguồn đáng tin cậy. Nội dung Hàn Quốc được viết mới, loại bỏ thông tin nhận dạng và đặt trong bối cảnh dành cho người Việt.</p>
      <a className="editorial-link" href="/chinh-sach-bien-tap">Đọc đầy đủ chính sách biên tập →</a>
    </section>

    <footer>
      <div className="footer-inner"><a className="brand inverse" href="#top">dabang<span>zz</span></a><p>Tin Việt Nam có nguồn. Chuyện Hàn được giải thích.</p></div>
      <div className="footer-links"><a href="/tin-viet-nam">Tin Việt Nam</a><a href="/chuyen-han-quoc">Chuyện Hàn Quốc</a><a href="/chinh-sach-bien-tap">Chính sách biên tập</a><a href="/quyen-rieng-tu">Quyền riêng tư</a><a href="/lien-he">Liên hệ</a></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div>
    </footer>
  </main>;
}
