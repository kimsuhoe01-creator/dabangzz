import { communityPosts, type CommunityPost } from "../content/community-posts";

export default function CommunityArticle({ post }: { post: CommunityPost }) {
  const related = communityPosts.filter(item => item.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);

  return <main className="story-page">
    <header className="story-header"><a className="brand" href="/">dabang<span>zz</span></a><a href="/">Bài mới</a></header>
    <article className="story">
      <div className="story-category">{post.category.toUpperCase()}</div>
      <h1>{post.title}</h1>
      <p className="story-deck">{post.summary}</p>
      <div className="story-meta">DABANGZZ · 19.07.2026 · {post.readTime.toUpperCase()}</div>
      <div className="story-hero"><span>{post.hero}</span></div>
      <div className="ad-slot"><small>QUẢNG CÁO</small><strong>Không gian dành cho đối tác</strong><span>Nội dung quảng cáo sẽ được hiển thị tại đây</span></div>
      <div className="story-body">
        {post.sections.map((section, index) => <section className="story-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.quote && <blockquote>{section.quote}</blockquote>}
          {index === 1 && <div className="inline-visual"><b>{String(index + 1).padStart(2, "0")}</b><span>Dừng lại một chút để nhìn câu chuyện từ phía của người khác.</span></div>}
        </section>)}
      </div>
      <div className="source-note"><strong>Ghi chú biên tập</strong><span>Nội dung được Dabangzz xây dựng từ các chủ đề thảo luận công khai, loại bỏ thông tin nhận dạng và viết lại hoàn toàn cho độc giả Việt Nam. Các tình huống tổng hợp không đại diện cho mọi người Hàn Quốc.</span></div>
    </article>
    <section className="related">
      <div className="related-title"><span>ĐỌC TIẾP</span><h2>Câu chuyện cùng chủ đề</h2></div>
      <div className="related-grid">{related.map(item => <a href={`/bai-viet/${item.slug}`} className="related-card" key={item.slug}><div className="related-thumb">{item.category}</div><h3>{item.title}</h3><span>{item.readTime} →</span></a>)}</div>
    </section>
    <footer><div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div></footer>
  </main>;
}
