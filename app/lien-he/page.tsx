import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Liên hệ | Dabangzz",
  description: "Gửi phản hồi, đề nghị sửa sai hoặc báo vấn đề nội dung cho Dabangzz.",
};

export default function ContactPage() {
  return <InfoPage eyebrow="PHẢN HỒI" title="Liên hệ Dabangzz" intro="Bạn có thể báo sai sót, liên kết hỏng, vấn đề bản quyền hoặc góp ý về cách một bài viết được trình bày.">
    <section><h2>Cách gửi phản hồi</h2><p>Hiện Dabangzz tiếp nhận phản hồi công khai qua trang Issues của dự án. Khi gửi, vui lòng kèm đường dẫn bài viết, phần cần xem lại và nguồn hỗ trợ nếu có. Không đăng số điện thoại, địa chỉ hoặc dữ liệu cá nhân trong phản hồi công khai.</p><p><a className="contact-button" href="https://github.com/kimsuhoe01-creator/dabangzz/issues" target="_blank" rel="noopener noreferrer">Mở trang phản hồi trên GitHub ↗</a></p></section>
    <section><h2>Sửa sai và bản quyền</h2><p>Yêu cầu sửa sai sẽ được kiểm tra với nguồn gốc. Nếu nội dung hoặc hình ảnh xâm phạm quyền hợp pháp, hãy mô tả rõ tác phẩm, vị trí xuất hiện và cơ sở của yêu cầu để chúng tôi có thể đánh giá nhanh.</p></section>
    <section><h2>Hợp tác</h2><p>Dabangzz không nhận bài quảng cáo ngụy trang thành nội dung biên tập. Nội dung được tài trợ, nếu có, phải được ghi nhãn rõ và không được can thiệp vào kết luận biên tập.</p></section>
  </InfoPage>;
}
