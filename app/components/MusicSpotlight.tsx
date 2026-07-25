import type { CommunityPost } from "../content/community-posts";

function uploadDate(post: CommunityPost) {
  if (!post.youtube) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(post.youtube.uploadDate));
}

export default function MusicSpotlight({ posts }: { posts: CommunityPost[] }) {
  const latest = posts[0];
  if (!latest?.youtube) return null;

  return <section className="music-spotlight" aria-labelledby="music-spotlight-title">
    <div className="music-spotlight-heading">
      <div><span>ÂM NHẠC · LỜI ĐÁP</span><h2 id="music-spotlight-title">Nghe câu chuyện từ phía còn lại.</h2></div>
      <a href="/am-nhac-loi-dap">Xem chuyên mục →</a>
    </div>
    <a className="music-feature-card" href={`/bai-viet/${latest.slug}`}>
      <div className="music-feature-art" aria-hidden="true">
        <div className="music-disc"><span>▶</span></div>
        <div className="music-wave"><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="music-feature-copy">
        <span className="label">CA KHÚC MỚI · {uploadDate(latest)}</span>
        <h3>{latest.title}</h3>
        <p>{latest.summary}</p>
        <div><span>{latest.readTime}</span><strong>Nghe tại Dabangzz ↗</strong></div>
      </div>
    </a>
  </section>;
}
