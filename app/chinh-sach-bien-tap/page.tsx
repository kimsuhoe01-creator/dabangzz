import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Chính sách biên tập | Dabangzz",
  description: "Cách Dabangzz chọn nguồn, biên tập tin tức, sử dụng AI và sửa sai.",
};

export default function EditorialPolicyPage() {
  return <InfoPage eyebrow="MINH BẠCH NỘI DUNG" title="Chính sách biên tập" intro="Dabangzz là trang biên tập tiếng Việt về đời sống Hàn Quốc và thông tin hữu ích tại Việt Nam. Chúng tôi ưu tiên giá trị độc lập, nguồn rõ ràng và trải nghiệm đọc không gây hiểu nhầm.">
    <section><h2>1. Hai loại nội dung, hai cách kiểm chứng</h2><p><strong>Tin mới Việt Nam</strong> dựa trước hết vào cơ quan nhà nước, đơn vị chuyên môn hoặc tài liệu gốc. Bài phải cho biết nguồn, ngày cập nhật và phần nào là dữ kiện, phần nào là giải thích của Dabangzz.</p><p><strong>Chuyện cộng đồng</strong> chỉ dùng thảo luận công khai để phát hiện mô-típ. Chúng tôi không sao chép câu chữ, ảnh, ảnh chụp màn hình, tên tài khoản hay chi tiết có thể nhận dạng; nhiều tình huống được tổng hợp và viết mới cho độc giả Việt Nam.</p></section>
    <section><h2>2. Không đăng lại và không “xào” bài</h2><p>Một liên kết nguồn không biến nội dung sao chép thành nội dung gốc. Mỗi bài phải bổ sung giá trị rõ ràng: giải thích bối cảnh, so sánh, chỉ ra giới hạn của dữ liệu hoặc đưa ra câu hỏi thực tế để người đọc tự kiểm tra.</p><p>Chúng tôi loại bỏ bài mỏng, tiêu đề không được nội dung hỗ trợ, tin đồn về người có thật, thông tin riêng tư, nội dung kích động và các chủ đề có nguy cơ gây hại.</p></section>
    <section><h2>3. Tin mới và thông tin nhạy cảm</h2><p>Với thời tiết, giao thông, quy định hoặc an toàn công cộng, bài viết luôn dẫn nguồn chính thức và nhắc người đọc kiểm tra bản cập nhật tại địa phương. Dabangzz không thay thế cảnh báo khẩn cấp, tư vấn y tế, pháp lý hay tài chính.</p><p>Chúng tôi không dùng cộng đồng ẩn danh làm nguồn xác nhận cho một sự kiện. Nếu chưa thể xác minh điều cốt lõi, bài sẽ không được xuất bản.</p></section>
    <section><h2>4. AI và hình ảnh</h2><p>AI có thể hỗ trợ tạo bản nháp hoặc minh họa, nhưng con người chịu trách nhiệm về cấu trúc, nguồn và quyết định xuất bản. Ảnh AI được ghi rõ là minh họa, không được mô tả như ảnh hiện trường và không mô phỏng gương mặt của người có thật.</p></section>
    <section><h2>5. Sửa sai</h2><p>Sai sót quan trọng được sửa trực tiếp trong bài và ghi thời điểm cập nhật. Nếu thay đổi làm đảo ngược ý nghĩa chính, Dabangzz sẽ nêu rõ phần đã sửa. Phản hồi có thể gửi qua trang <a href="/lien-he">Liên hệ</a>.</p></section>
  </InfoPage>;
}
