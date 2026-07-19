import StoryBrowser from "./components/StoryBrowser";

export default function Home() {
  return <main id="top">
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Dabangzz trang chủ">dabang<span>zz</span></a>
        <nav aria-label="Điều hướng chính">
          <a href="#latest">Bài mới</a>
          <a href="#topics">Chủ đề</a>
          <a href="#about">Giới thiệu</a>
        </nav>
        <a className="header-cta" href="#latest">Đọc ngay <span>↘</span></a>
      </div>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">SEOUL STORIES · VIETNAMESE EDITION</span>
        <h1>Chuyện Hàn,<br/><em>kể rõ ràng.</em></h1>
      </div>
      <div className="hero-intro">
        <span>01 / VỀ DABANGZZ</span>
        <p>Chúng tôi chọn những câu chuyện đang được quan tâm tại Hàn Quốc, kiểm chứng bối cảnh và kể lại bằng tiếng Việt.</p>
        <a href="#latest">Xem bài mới nhất <span>→</span></a>
      </div>
    </section>

    <StoryBrowser />

    <section className="editorial" id="about">
      <span>NGUYÊN TẮC BIÊN TẬP</span>
      <h2>Không sao chép.<br/>Không giật gân vô căn cứ.</h2>
      <p>Nội dung được chọn từ các chủ đề công khai, loại bỏ thông tin cá nhân, đối chiếu dữ kiện khi cần và viết lại hoàn toàn cho độc giả Việt Nam.</p>
    </section>

    <footer>
      <div className="footer-inner"><a className="brand inverse" href="#top">dabang<span>zz</span></a><p>Chuyện Hàn, kể cho người Việt.</p></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div>
    </footer>
  </main>;
}
