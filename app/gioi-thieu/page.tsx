import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Giới thiệu | Dabangzz",
  description: "Ai vận hành Dabangzz, phạm vi nội dung, cách chúng tôi kiểm chứng thông tin và nguồn tài chính của trang.",
  alternates: { canonical: "/gioi-thieu" },
};

export default function AboutPage() {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://dabangzz.com/gioi-thieu#kim",
    name: "Kim",
    jobTitle: "Người xuất bản và biên tập Dabangzz",
    url: "https://dabangzz.com/gioi-thieu",
    worksFor: { "@id": "https://dabangzz.com/#publisher" },
    address: { "@type": "PostalAddress", addressRegion: "Bắc Ninh", addressCountry: "VN" },
  };

  return <><StructuredData data={authorSchema} /><InfoPage eyebrow="VỀ DABANGZZ" title="Một ấn phẩm nhỏ, trách nhiệm rõ ràng" intro="Dabangzz là ấn phẩm trực tuyến độc lập do Kim vận hành tại Bắc Ninh, Việt Nam. Trang phục vụ độc giả Việt bằng bài giải thích có nguồn, trải nghiệm trực tiếp và một khu vực nghe nhạc riêng." updatedAt="04.08.2026">
    <section><h2>Ai đứng sau Dabangzz?</h2><dl className="trust-grid"><div><dt>Người vận hành</dt><dd>Kim</dd></div><div><dt>Vai trò</dt><dd>Xuất bản & biên tập</dd></div><div><dt>Địa điểm</dt><dd>Bắc Ninh, Việt Nam</dd></div><div><dt>Ngôn ngữ xuất bản</dt><dd>Tiếng Việt</dd></div></dl><p>Kim là người Hàn Quốc đang sống tại Việt Nam. Trên chuyên mục <a href="/kim-o-viet-nam">Kim ở Việt Nam</a>, tác giả chỉ viết những trải nghiệm có ảnh, thời điểm và phạm vi trực tiếp; chi phí tự trả hay tài trợ được nêu trong từng bài.</p></section>
    <section><h2>Dabangzz xuất bản gì?</h2><p><strong>Tin Việt Nam</strong> giải thích thông tin đang được quan tâm bằng nguồn chính thức, số liệu, mốc thời gian và hướng dẫn tự kiểm tra. <strong>Kim ở Việt Nam</strong> là nhật ký trải nghiệm có ảnh do tác giả chụp và công khai phạm vi nhận xét. <strong>Âm nhạc · Lời Đáp</strong> giới thiệu video thuộc kênh chính thức, cho phép nghe ngay trên trang và công khai việc dùng AI. Kho bài Chuyện Hàn Quốc cũ đang được rà soát, không xuất bản tự động thêm và tạm thời không nằm trong luồng nội dung chính.</p></section>
    <section><h2>Con người chịu trách nhiệm xuất bản</h2><p>Công cụ AI có thể hỗ trợ tạo bản nháp, dịch ý hoặc minh họa. Kim quyết định chủ đề, kiểm tra nguồn, chỉnh sửa tiếng Việt, loại bỏ chi tiết gây hiểu nhầm và chịu trách nhiệm cho bản cuối cùng. Ảnh AI luôn được ghi là minh họa; ảnh trải nghiệm thật được ghi tên tác giả.</p></section>
    <section><h2>Nguồn tài chính và tính độc lập</h2><p>Dabangzz có mã xác minh và tệp ads.txt cho Google AdSense nhưng hiện chưa được chấp thuận phân phối quảng cáo. Việc mã kỹ thuật xuất hiện không có nghĩa Google đã phê duyệt nội dung hoặc quảng cáo đang được phục vụ. Dabangzz chưa chèn liên kết tiếp thị liên kết Shopee hoặc Lazada. Các bài trải nghiệm hiện có do tác giả tự thanh toán, trừ khi bài viết ghi rõ điều khác. Quảng cáo, tài trợ hoặc liên kết nhận hoa hồng nếu xuất hiện sẽ được công khai và không được can thiệp vào kết luận biên tập.</p></section>
    <section><h2>Sửa sai và liên hệ</h2><p>Mỗi bài có ngày đăng, ngày sửa nếu có, tác giả và nguồn đối chiếu. Báo sai sót, liên kết hỏng hoặc yêu cầu bản quyền tại trang <a href="/lien-he">Liên hệ</a>. Quy trình chọn nguồn và sửa bài được trình bày chi tiết trong <a href="/chinh-sach-bien-tap">Chính sách biên tập</a>.</p></section>
  </InfoPage></>;
}
