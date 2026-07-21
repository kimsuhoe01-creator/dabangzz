import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Quyền riêng tư | Dabangzz",
  description: "Thông tin về dữ liệu, cookie và dịch vụ quảng cáo có thể được dùng trên Dabangzz.",
};

export default function PrivacyPage() {
  return <InfoPage eyebrow="DỮ LIỆU & COOKIE" title="Chính sách quyền riêng tư" intro="Trang này giải thích dữ liệu có thể được xử lý khi bạn truy cập Dabangzz và những lựa chọn dành cho người đọc.">
    <section><h2>1. Dữ liệu kỹ thuật</h2><p>Máy chủ và nhà cung cấp hạ tầng có thể ghi nhận dữ liệu kỹ thuật cần thiết để vận hành và bảo vệ trang, như địa chỉ IP rút gọn hoặc đầy đủ tùy hệ thống, loại trình duyệt, thời gian truy cập, trang được yêu cầu và thông tin chẩn đoán lỗi.</p><p>Dabangzz không yêu cầu người đọc tạo tài khoản và không chủ động thu thập thông tin nhạy cảm qua nội dung bài viết.</p></section>
    <section><h2>2. Cookie và quảng cáo</h2><p>Tại ngày 21/7/2026, Dabangzz chưa phục vụ quảng cáo Google AdSense và chưa cài cookie quảng cáo của Google. Nếu trang triển khai AdSense hoặc dịch vụ quảng cáo khác, chính sách này và cơ chế xin lựa chọn phù hợp sẽ được cập nhật trước khi quảng cáo bắt đầu hoạt động.</p><p>Khi đó, Google và nhà cung cấp bên thứ ba có thể dùng cookie để phân phối, đo lường và cá nhân hóa quảng cáo dựa trên lần truy cập trước đó, trong phạm vi pháp luật và lựa chọn đồng ý áp dụng. Người dùng có thể quản lý quảng cáo cá nhân hóa tại <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Cài đặt quảng cáo của Google</a> và tìm hiểu cách Google dùng dữ liệu trên <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">các trang đối tác</a>.</p></section>
    <section><h2>3. Liên kết bên ngoài</h2><p>Bài tin tức có thể dẫn tới nguồn chính thức. Trang bên ngoài có chính sách riêng; Dabangzz không kiểm soát cookie hoặc nội dung sau khi người đọc rời trang.</p></section>
    <section><h2>4. Thay đổi và câu hỏi</h2><p>Chính sách sẽ được cập nhật trước khi bổ sung công cụ phân tích, biểu mẫu hoặc quảng cáo làm thay đổi đáng kể cách xử lý dữ liệu. Câu hỏi và yêu cầu liên quan có thể gửi qua trang <a href="/lien-he">Liên hệ</a>.</p></section>
  </InfoPage>;
}
