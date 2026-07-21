import type { CommunityPost } from "../content/community-posts";
import { getPostImages, type EditorialImage } from "../content/post-images";
import Link from "next/link";

function publishedDate(post: CommunityPost) {
  const date = post.publishedAt ?? post.updatedAt;
  if (!date) return "19.07.2026";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(date));
}

function updatedDate(post: CommunityPost) {
  if (!post.updatedAt) return null;
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(post.updatedAt));
}

export default function CommunityArticle({ post, posts }: { post: CommunityPost; posts: CommunityPost[] }) {
  const related = posts.filter(item => item.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  const [heroImage, secondaryImage] = getPostImages(post);

  const figure = (image: EditorialImage, className: string, loading: "eager" | "lazy") => <figure className={className}>
    <img src={image.src} alt={image.alt} width="1536" height="1024" loading={loading} decoding="async" />
    <figcaption><span>{image.caption ?? (image.credit === "author" ? "ẢNH TRẢI NGHIỆM THỰC TẾ" : "MINH HỌA TẠO BẰNG AI")}</span><span>{image.credit === "author" ? "ẢNH: KIM" : "DABANGZZ"}</span></figcaption>
  </figure>;

  return <main className="story-page">
    <header className="story-header"><Link className="brand" href="/">dabang<span>zz</span></Link><nav aria-label="Điều hướng bài viết"><Link href="/">Bài mới</Link><Link href="/chinh-sach-bien-tap">Biên tập</Link></nav></header>
    <article className="story">
      <div className="story-category">{post.category.toUpperCase()}</div>
      <h1>{post.title}</h1>
      <p className="story-deck">{post.summary}</p>
      <div className="story-meta">{(post.author ?? "DABANGZZ").toUpperCase()} · ĐĂNG {publishedDate(post)}{updatedDate(post) ? ` · CẬP NHẬT ${updatedDate(post)}` : ""} · {post.readTime.toUpperCase()}</div>
      {figure(heroImage, "story-hero", "eager")}
      {post.keyFacts?.length ? <aside className="key-facts" aria-labelledby="key-facts-title">
        <div className="key-facts-heading"><span>DỮ KIỆN CHÍNH</span><h2 id="key-facts-title">Những con số cần biết trước khi đọc</h2></div>
        <div className="key-facts-grid">{post.keyFacts.map(fact => <div className="key-fact" key={`${fact.label}-${fact.value}`}>
          <span>{fact.label}</span><strong>{fact.value}</strong><p>{fact.note}</p>
        </div>)}</div>
      </aside> : null}
      <div className="story-body">
        {post.sections.map((section, index) => <section className="story-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.quote && <blockquote>{section.quote}</blockquote>}
          {section.images?.length ? <div className={`review-photo-grid${section.images.length === 1 ? " single" : ""}`}>{section.images.map(image => figure(image, "story-review-photo", "lazy"))}</div> : null}
          {index === 1 && post.kind !== "review" && <div className="inline-visual"><b>{String(index + 1).padStart(2, "0")}</b><span>{post.kind === "news" ? "Kiểm tra thời gian, địa điểm và nguồn gốc trước khi chia sẻ thông tin." : "Dừng lại một chút để nhìn câu chuyện từ phía của người khác."}</span></div>}
          {index === 1 && secondaryImage && figure(secondaryImage, "story-inline-image", "lazy")}
        </section>)}
      </div>
      {post.sourceLinks?.length ? <aside className="source-panel" aria-labelledby="source-title">
        <div><span>{post.kind === "review" ? "THÔNG TIN ĐỐI CHIẾU" : "NGUỒN CÔNG KHAI"}</span><h2 id="source-title">Nguồn chính thức & tài liệu tham khảo</h2></div>
        <ul>{post.sourceLinks.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<span>↗</span></a></li>)}</ul>
        <p>{post.kind === "review" ? "Nguồn ngoài chỉ dùng để đối chiếu tình trạng MICHELIN Guide và thông tin nhà hàng. Nhận xét món ăn, chi phí và ảnh đều đến từ trải nghiệm trực tiếp được công khai trong bài." : "Dabangzz viết bài giải thích độc lập, không sao chép nguyên văn. Hãy mở nguồn gốc để xem bản tin và thời điểm cập nhật đầy đủ."}</p>
      </aside> : null}
      <div className="source-note"><strong>Ghi chú biên tập</strong><span>{post.kind === "news" ? "Dữ kiện được tách khỏi phần giải thích và dẫn tới nguồn công khai. Ảnh là minh họa AI, không phải ảnh hiện trường. Sai sót quan trọng sẽ được sửa và ghi thời điểm cập nhật." : post.kind === "review" ? "Bài do Kim viết từ trải nghiệm trực tiếp ngày 20/7/2026. Toàn bộ chi phí do tác giả thanh toán, không tài trợ và không có liên kết nhận hoa hồng. Ảnh do tác giả chụp; dữ liệu định vị và thông tin thiết bị đã được loại bỏ khi tối ưu ảnh." : "Nội dung được Dabangzz xây dựng từ các chủ đề thảo luận công khai, loại bỏ thông tin nhận dạng và viết lại hoàn toàn cho độc giả Việt Nam. Các tình huống tổng hợp không đại diện cho mọi người Hàn Quốc."}</span></div>
    </article>
    <section className="related">
      <div className="related-title"><span>ĐỌC TIẾP</span><h2>Câu chuyện cùng chủ đề</h2></div>
      <div className="related-grid">{related.map(item => <a href={`/bai-viet/${item.slug}`} className="related-card" key={item.slug}><div className="related-thumb">{item.category}</div><h3>{item.title}</h3><span>{item.readTime} →</span></a>)}</div>
    </section>
    <footer><div className="article-footer-links"><Link href="/chinh-sach-bien-tap">Chính sách biên tập</Link><Link href="/quyen-rieng-tu">Quyền riêng tư</Link><Link href="/lien-he">Liên hệ</Link></div><div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div></footer>
  </main>;
}
