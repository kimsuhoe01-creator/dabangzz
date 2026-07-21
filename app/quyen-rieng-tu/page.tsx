import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Quyền riêng tư | Dabangzz",
  description: "Thông tin về dữ liệu, cookie và dịch vụ quảng cáo có thể được dùng trên Dabangzz.",
};

export default function PrivacyPage() {
  return <InfoPage eyebrow="DỮ LIỆU & COOKIE" title="Chính sách quyền riêng tư" intro="Trang này giải thích dữ liệu có thể được xử lý khi bạn truy cập Dabangzz và những lựa chọn dành cho người đọc.">
    <section><h2>1. Dữ liệu kỹ thuật</h2><p>Máy chủ và nhà cung cấp hạ tầng có thể ghi nhận dữ liệu kỹ thuật cần thiết để vận hành và bảo vệ trang, như địa chỉ IP rút gọn hoặc đầy đủ tùy hệ thống, loại trình duyệt, thời gian truy cập, trang được yêu cầu và thông tin chẩn đoán lỗi.</p><p>Dabangzz không yêu cầu người đọc tạo tài khoản và không chủ động thu thập thông tin nhạy cảm qua nội dung bài viết.</p></section>
    <section><h2>2. Cookie và quảng cáo</h2><p>Từ ngày 21/7/2026, Dabangzz đã cài mã Google AdSense để xác minh quyền quản lý trang và gửi trang đi xét duyệt. Trong thời gian chờ duyệt, quảng cáo có thể chưa xuất hiện. Khi mã của Google được tải, Google có thể nhận dữ liệu kỹ thuật như địa chỉ IP, loại trình duyệt, trang truy cập và thông tin thiết bị theo chính sách của Google, ngay cả khi chưa có quảng cáo hiển thị.</p><p>Nếu AdSense được chấp thuận và bắt đầu phân phối quảng cáo, Google và nhà cung cấp bên thứ ba có thể dùng cookie hoặc công nghệ tương tự để phân phối, đo lường và, khi được phép, cá nhân hóa quảng cáo. Dabangzz sẽ áp dụng cơ chế lựa chọn hoặc đồng ý cần thiết theo khu vực của người dùng. Người đọc có thể quản lý quảng cáo cá nhân hóa tại <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Cài đặt quảng cáo của Google</a> và xem cách Google dùng dữ liệu trên <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">các trang đối tác</a>.</p></section>
    <section><h2>3. Liên kết bên ngoài</h2><p>Bài tin tức có thể dẫn tới nguồn chính thức. Trang bên ngoài có chính sách riêng; Dabangzz không kiểm soát cookie hoặc nội dung sau khi người đọc rời trang.</p></section>
    <section><h2>4. Thay đổi và câu hỏi</h2><p>Chính sách này được cập nhật ngày 21/7/2026 để phản ánh việc cài mã xác minh AdSense. Chính sách sẽ tiếp tục được sửa khi bổ sung công cụ phân tích, biểu mẫu hoặc quảng cáo làm thay đổi đáng kể cách xử lý dữ liệu. Câu hỏi và yêu cầu liên quan có thể gửi qua trang <a href="/lien-he">Liên hệ</a>.</p></section>
  </InfoPage>;
}
