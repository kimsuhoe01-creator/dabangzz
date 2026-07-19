const categories = ["Mới nhất", "Chuyện thật", "Văn hóa", "Cuộc sống", "Tình yêu", "K-beauty"];

const stories = [
  {
    category: "Văn hóa · Sự thật lạ",
    title: "Hàn Quốc từng không cho bán nước đóng chai cho người dân?",
    summary: "Một quy định khó tin, một phán quyết năm 1994 và cách chai nước trở thành đồ dùng hằng ngày.",
    meta: "19.07.2026 · 6 phút đọc",
    href: "/bai-viet/han-quoc-tung-cam-ban-nuoc-dong-chai",
    index: "01",
  },
  {
    category: "Chuyện thật · Đời sống Hàn",
    title: "“Tôi đã sốc trong tuần đầu sống tại Hàn Quốc”",
    summary: "Năm khác biệt văn hóa rất nhỏ nhưng đủ khiến một người mới đến Seoul nhớ mãi.",
    meta: "19.07.2026 · 7 phút đọc",
    href: "/bai-viet/soc-van-hoa-han-quoc",
    index: "02",
  },
];

export default function Home() {
  const [featured, ...latest] = stories;

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

    <div className="category-bar" id="topics">
      <div>{categories.map((category, index) => <button className={index === 0 ? "active" : ""} key={category}>{category}</button>)}</div>
    </div>

    <section className="content" id="latest">
      <div className="section-heading">
        <div><span>MỚI NHẤT</span><h2>Câu chuyện đáng đọc</h2></div>
        <span className="issue">ISSUE 01 · 2026</span>
      </div>

      <a className="lead-card" href={featured.href}>
        <div className="lead-visual"><span>{featured.index}</span><small>SEOUL<br/>ARCHIVE</small></div>
        <div className="lead-body">
          <span className="label">{featured.category}</span>
          <h3>{featured.title}</h3>
          <p>{featured.summary}</p>
          <div className="story-link"><span>{featured.meta}</span><b>Đọc bài →</b></div>
        </div>
      </a>

      <div className="latest-list">
        {latest.map(story => <a className="list-story" href={story.href} key={story.title}>
          <span className="list-index">{story.index}</span>
          <div><span className="label">{story.category}</span><h3>{story.title}</h3><p>{story.summary}</p></div>
          <span className="list-meta">{story.meta}<b>↗</b></span>
        </a>)}
      </div>
    </section>

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
