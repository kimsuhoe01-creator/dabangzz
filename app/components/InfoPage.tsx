import type { ReactNode } from "react";
import Link from "next/link";

export default function InfoPage({ eyebrow, title, intro, updatedAt = "21.07.2026", children }: {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt?: string;
  children: ReactNode;
}) {
  return <main className="info-page">
    <header className="story-header"><Link className="brand" href="/">dabang<span>zz</span></Link><nav aria-label="Điều hướng thông tin"><Link href="/">Trang chủ</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/lien-he">Liên hệ</Link></nav></header>
    <article className="info-article">
      <span className="info-eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p className="info-intro">{intro}</p>
      <div className="info-updated">CẬP NHẬT · {updatedAt}</div>
      <div className="info-body">{children}</div>
    </article>
    <footer>
      <div className="article-footer-links"><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-bien-tap">Chính sách biên tập</Link><Link href="/quyen-rieng-tu">Quyền riêng tư</Link><Link href="/lien-he">Liên hệ</Link></div>
      <div className="copyright">© 2026 DABANGZZ <span>VIETNAM · KOREA</span></div>
    </footer>
  </main>;
}
