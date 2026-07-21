import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Liên hệ | Dabangzz",
  description: "Gửi phản hồi, đề nghị sửa sai hoặc báo vấn đề nội dung cho Dabangzz.",
};

export default function ContactPage() {
  return <InfoPage eyebrow="PHẢN HỒI" title="Liên hệ Dabangzz" intro="Bạn có thể báo sai sót, liên kết hỏng, vấn đề bản quyền hoặc góp ý về cách một bài viết được trình bày.">
    <section><h2>Thông tin đơn vị xuất bản</h2><dl className="trust-grid"><div><dt>Ấn phẩm</dt><dd>Dabangzz</dd></div><div><dt>Người phụ trách nội dung</dt><dd>Kim</dd></div><div><dt>Khu vực hoạt động</dt><dd>Bắc Ninh, Việt Nam</dd></div><div><dt>Hình thức hoạt động</dt><dd>Ấn phẩm trực tuyến độc lập</dd></div></dl><p>Dabangzz không có văn phòng tiếp khách và không cung cấp hỗ trợ qua điện thoại. Địa chỉ nhà riêng, số điện thoại cá nhân và giấy tờ nhận dạng không được công khai chỉ để tạo cảm giác về quy mô.</p></section>
    <section><h2>Cách gửi phản hồi</h2><p>Kênh phản hồi đang hoạt động là trang Issues của dự án. Khi gửi, vui lòng kèm đường dẫn bài viết, phần cần xem lại và nguồn hỗ trợ nếu có. Đây là kênh công khai, vì vậy không đăng số điện thoại, địa chỉ, hóa đơn hoặc dữ liệu cá nhân.</p><p><a className="contact-button" href="https://github.com/kimsuhoe01-creator/dabangzz/issues" target="_blank" rel="noopener noreferrer">Mở trang phản hồi trên GitHub ↗</a></p></section>
    <section><h2>Sửa sai và bản quyền</h2><p>Yêu cầu sửa sai sẽ được kiểm tra với nguồn gốc. Nếu nội dung hoặc hình ảnh xâm phạm quyền hợp pháp, hãy mô tả rõ tác phẩm, vị trí xuất hiện và cơ sở của yêu cầu để chúng tôi có thể đánh giá nhanh.</p></section>
    <section><h2>Hợp tác và quảng cáo</h2><p>Dabangzz đã gửi trang đi xét duyệt Google AdSense ngày 21/7/2026 và cài mã kỹ thuật để xác minh trang; quảng cáo có thể chưa xuất hiện trong thời gian chờ duyệt. Trang chưa đăng liên kết tiếp thị liên kết Shopee hoặc Lazada và không nhận bài quảng cáo ngụy trang thành nội dung biên tập. Khi có quan hệ thương mại, nội dung liên quan phải ghi nhãn rõ và không được can thiệp vào kết luận biên tập.</p></section>
  </InfoPage>;
}
