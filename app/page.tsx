import type { Metadata } from "next";
import StoryBrowser from "./components/StoryBrowser";
import { getIndexablePosts } from "./content/community-posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const publishedPosts = getIndexablePosts();

  return <main id="top">
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Dabangzz trang chủ">dabang<span>zz</span></a>
        <nav aria-label="Điều hướng chính">
          <a href="#latest">Bài mới</a>
          <a href="/kim-o-viet-nam">Kim ở Việt Nam</a>
          <a href="/tin-viet-nam">Tin Việt Nam</a>
          <a href="/gioi-thieu">Giới thiệu</a>
          <a href="/chinh-sach-bien-tap">Biên tập</a>
        </nav>
        <a className="header-cta" href="#latest">Đọc ngay <span>↘</span></a>
      </div>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">VIETNAM NOW · FIRST-HAND REVIEWS</span>
        <h1>Tin Việt Nam,<br/><em>hiểu rõ hơn.</em></h1>
      </div>
      <div className="hero-intro">
        <span>01 / VỀ DABANGZZ</span>
        <p>Dabangzz đối chiếu nguồn chính thức để giải thích thông tin tại Việt Nam. Kim cũng ghi lại những trải nghiệm tự thanh toán, có ảnh gốc, chi phí, điểm tốt và điểm chưa tốt.</p>
        <a href="/gioi-thieu">Tìm hiểu cách chúng tôi làm nội dung <span>→</span></a>
      </div>
    </section>

    <StoryBrowser posts={publishedPosts} />

    <section className="editorial" id="about">
      <span>NGUYÊN TẮC BIÊN TẬP</span>
      <h2>Dữ kiện trước.<br/>Bối cảnh và cách dùng sau.</h2>
      <p>Tin Việt Nam chỉ xuất bản khi có nguồn đáng tin cậy. Trải nghiệm của Kim nêu rõ thời điểm, chi phí, tài trợ và giới hạn quan sát. Nội dung chưa đạt chuẩn đang được rà soát và không được đưa vào luồng bài chính.</p>
      <a className="editorial-link" href="/chinh-sach-bien-tap">Đọc đầy đủ chính sách biên tập →</a>
    </section>

    <footer>
      <div className="footer-inner"><a className="brand inverse" href="#top">dabang<span>zz</span></a><p>Tin Việt Nam có nguồn. Trải nghiệm có bằng chứng.</p></div>
      <div className="footer-links"><a href="/kim-o-viet-nam">Kim ở Việt Nam</a><a href="/tin-viet-nam">Tin Việt Nam</a><a href="/gioi-thieu">Giới thiệu</a><a href="/chinh-sach-bien-tap">Chính sách biên tập</a><a href="/quyen-rieng-tu">Quyền riêng tư</a><a href="/lien-he">Liên hệ</a></div>
      <div className="copyright">© 2026 DABANGZZ <span>BẮC NINH · VIỆT NAM</span></div>
    </footer>
  </main>;
}
