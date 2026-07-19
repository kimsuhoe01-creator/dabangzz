import type { CommunityPost } from "./community-posts";

export type EditorialImage = { src: string; alt: string };

const image = (name: string, alt: string): EditorialImage[] => [{
  src: `/images/editorial/${name}.jpg`,
  alt,
}];

const editorialImages: Record<string, EditorialImage[]> = {
  "van-hoa-thang-may-han-quoc": image("urban-etiquette", "Minh họa một người giữ cửa thang máy cho người đang bước tới"),
  "cach-xung-ho-trong-cong-ty-han": image("korean-workplace", "Minh họa đồng nghiệp dùng bữa trưa trong một văn phòng Hàn Quốc"),
  "vi-sao-nguoi-han-hoi-tuoi": image("urban-etiquette", "Minh họa những người đi làm gặp nhau trong không gian chung"),
  "bua-trua-nhanh-o-cong-ty-han": image("korean-workplace", "Minh họa một nhóm đồng nghiệp Hàn Quốc trong giờ nghỉ trưa"),
  "hoi-sik-co-bat-buoc-khong": image("korean-workplace", "Minh họa đồng nghiệp trò chuyện quanh bàn ăn"),
  "tin-nhan-kakao-sau-gio-lam": image("korean-workplace", "Minh họa nhịp sinh hoạt của một nhóm làm việc hiện đại"),
  "qua-tang-cho-gia-dinh-khi-ket-hon": image("family-boundaries", "Minh họa một cặp đôi thảo luận về tiền bạc gia đình"),
  "chia-doi-chi-phi-dam-cuoi-han-quoc": image("family-boundaries", "Minh họa cặp đôi cùng xem lại kế hoạch chi tiêu"),
  "mat-khau-nha-cho-bo-me-chong": image("family-boundaries", "Minh họa cuộc trò chuyện về ranh giới trong gia đình"),
  "nguoi-yeu-hoi-ve-nguoi-cu": image("family-boundaries", "Minh họa hai người trò chuyện nghiêm túc bên bàn ăn"),
  "khoang-cach-tuoi-trong-tinh-yeu": image("family-boundaries", "Minh họa một cặp đôi lắng nghe nhau trong cuộc trò chuyện"),
  "hanh-phuc-nho-sau-mot-ngay-met": image("solo-living", "Minh họa một buổi tối yên tĩnh trong căn phòng nhỏ"),
  "nha-ban-ham-seoul": image("solo-living", "Minh họa căn phòng nhỏ trong một ngày mưa ẩm"),
  "tui-rac-tinh-phi-o-han-quoc": image("urban-systems", "Minh họa khu phân loại rác gọn gàng tại một tòa nhà Hàn Quốc"),
  "song-mot-minh-trong-one-room-han": image("solo-living", "Minh họa cuộc sống một mình trong căn hộ nhỏ ở Seoul"),
  "van-hoa-cua-hang-tien-loi-han-quoc": image("urban-etiquette", "Minh họa nhịp sống thường ngày trong đô thị Hàn Quốc"),
  "im-lang-tren-tau-dien-han-quoc": image("urban-etiquette", "Minh họa những người đi làm giữ khoảng cách trong không gian chung"),
  "giao-hang-trong-dem-o-han-quoc": image("urban-systems", "Minh họa nhân viên giao hàng sắp xếp bưu kiện vào sáng sớm"),
  "lan-dau-di-jjimjilbang": image("campus-life", "Minh họa một trải nghiệm cộng đồng trẻ trung tại Hàn Quốc"),
  "le-hoi-truong-dai-hoc-han-quoc": image("campus-life", "Minh họa sinh viên chuẩn bị lễ hội trong sân trường đại học"),
  "lam-them-va-kinh-ngu-han-quoc": image("korean-workplace", "Minh họa người trẻ học cách giao tiếp trong môi trường làm việc"),
  "mua-he-am-o-han-quoc": image("humid-summer", "Minh họa con phố Seoul sau cơn mưa mùa hè ẩm"),
  "kem-chong-nang-moi-ngay-kbeauty": image("daily-sunscreen", "Minh họa kem chống nắng không nhãn bên mũ rộng vành trong nắng sớm"),
  "lam-sach-hai-buoc-co-can-thiet": image("gentle-cleansing", "Minh họa hai sản phẩm làm sạch không nhãn trên bồn rửa"),
  "cushion-han-quoc-hop-voi-ai": image("cushion-makeup", "Minh họa người dùng dặm cushion nhẹ nhàng bên cửa sổ"),
  "nuoc-hoa-mui-sach-o-han-quoc": image("clean-fragrance", "Minh họa nước hoa không nhãn bên vải cotton sạch và xà phòng"),
  "duong-am-theo-mua-kbeauty": image("humid-summer", "Minh họa không khí ẩm sau mưa trong mùa hè Hàn Quốc"),
  "my-pham-mini-size-han-quoc": image("beauty-research", "Minh họa các mẫu mỹ phẩm nhỏ không nhãn trên bàn nghiên cứu"),
  "doc-review-my-pham-cong-dong-han": image("beauty-research", "Minh họa bàn so sánh mỹ phẩm với kính lúp và sổ ghi chép trống"),
  "kbeauty-can-bang-chung": image("beauty-research", "Minh họa việc quan sát và so sánh kết cấu mỹ phẩm một cách cẩn trọng"),
};

const fallbackImage = image(
  "urban-etiquette",
  "Minh họa biên tập về đời sống và văn hóa Hàn Quốc",
);

export function getPostImages(post: CommunityPost): EditorialImage[] {
  return post.images?.length ? post.images.slice(0, 2) : editorialImages[post.slug] ?? fallbackImage;
}
