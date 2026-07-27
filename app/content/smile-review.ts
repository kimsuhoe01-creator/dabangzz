import type { CommunityPost } from "./community-posts";

const photo = (name: string, alt: string, caption: string) => ({
  src: `/images/experience/${name}.jpg`,
  alt,
  caption,
  credit: "author" as const,
});

export const smileBacNinhReview: CommunityPost = {
  slug: "smile-hoi-quan-bac-ninh-set-thit-590k",
  kind: "review",
  category: "Kim ở Việt Nam · Bắc Ninh",
  author: "Kim",
  title: "Smile Hội Quán Bắc Ninh: set thịt 590.000đ, sulbap kiểu rosé và những chi tiết đáng nhớ",
  summary: "Bữa nhậu trưa Chủ nhật tại Smile Hội Quán mới mở ở Bắc Ninh, từ set thịt 400 g nhiều món kèm đến sulbap Smile lạ miệng, yukhoe được tặng và mức giá rượu khá dễ chịu.",
  readTime: "11 phút đọc",
  hero: "SMILE HỘI QUÁN\nBẮC NINH",
  images: [photo(
    "smile-bacninh-pork-set-20260726",
    "Set thịt lợn 590.000 đồng đang được nướng trên bàn đá cùng kimchi, rau cần nước, tỏi và các món ăn kèm",
    "Set thịt 590.000đ tại Smile Hội Quán Bắc Ninh — ảnh chụp trong bữa ăn ngày 26/7/2026",
  )],
  publishedAt: "2026-07-27T09:00:00+07:00",
  keyFacts: [
    { label: "THỜI ĐIỂM TRẢI NGHIỆM", value: "26/7/2026", note: "Bữa trưa Chủ nhật tại một nhà hàng mới mở; món và giá phản ánh đúng lần ghé này." },
    { label: "ĐỊA ĐIỂM", value: "35 Ngô Tất Tố", note: "Địa chỉ do tác giả ghi lại khi ghé: Võ Cường, Bắc Ninh 16118; nên kiểm tra bản đồ trước khi đi." },
    { label: "NHÓM ĐI ĂN", value: "2 người", note: "Tôi đi cùng một người em thân thiết để ăn trưa và uống rượu." },
    { label: "SET THỊT", value: "590.000đ / 400 g", note: "Menu ghi khẩu phần 2–3 người và chưa gồm VAT; thành phần được giữ theo tên tiếng Hàn trên menu." },
    { label: "SOJU PHỔ BIẾN", value: "130.000đ/chai", note: "Chamisul, Jinro Is Back, Saero và Choeumcheoreom đều được ghi 130.000đ tại thời điểm ghé." },
    { label: "MINH BẠCH", value: "Nhóm tự thanh toán", note: "Tôi chỉ nghĩ đến việc viết bài sau khi đã ăn. Yukhoe là món được tặng; tôi không rõ đó là ưu đãi khai trương hay quà khi gọi rượu." },
  ],
  sourceLinks: [
    {
      label: "Google Maps — tìm Smile Hội Quán tại 35 Ngô Tất Tố, Võ Cường, Bắc Ninh",
      url: "https://www.google.com/maps/search/?api=1&query=Smile+H%E1%BB%99i+Qu%C3%A1n+35+Ng%C3%B4+T%E1%BA%A5t+T%E1%BB%91+V%C3%B5+C%C6%B0%E1%BB%9Dng+B%E1%BA%AFc+Ninh",
    },
  ],
  editorialNote: "Bài do Kim viết từ trải nghiệm trực tiếp ngày 26/7/2026 cùng một người em thân thiết. Nhóm tự chọn món, tự thanh toán và chỉ nghĩ đến việc viết bài sau khi đã bắt đầu ăn; nhà hàng không đặt bài và bài không có liên kết nhận hoa hồng. Yukhoe được tặng trong lúc gọi chai soju thứ hai, nhưng tác giả không rõ đây là ưu đãi khai trương hay dịch vụ theo đồ uống. Ảnh do Kim chụp và đã được tối ưu để loại bỏ dữ liệu thiết bị.",
  sections: [
    {
      heading: "Một bữa nhậu trưa Chủ nhật tại quán mới mở",
      paragraphs: [
        "Chủ nhật 26/7/2026, tôi cùng một người em thân thiết tìm một nơi để ăn trưa và uống vài chén. Điểm đến là Smile Hội Quán, một nhà hàng mới mở tại 35 đường Ngô Tất Tố, khu vực Võ Cường, Bắc Ninh. Tôi ghi lại địa chỉ này từ lần ghé; vì thông tin của quán mới có thể chưa đồng bộ trên mọi nền tảng, người đọc nên mở bản đồ và kiểm tra lại trước khi đi.",
        "Menu có cả món gọi riêng, nhưng hai người muốn ăn thoải mái nên chọn luôn set tổng hợp 590.000 đồng. Tôi nhớ còn một set 490.000 đồng, thấp hơn 100.000 đồng, nhưng không chụp lại trang đó nên chỉ xem đây là thông tin theo trí nhớ. Giá và thành phần trong bài phản ánh buổi ăn này, không phải cam kết rằng menu sẽ giữ nguyên.",
        "Điều khá thật của bài review này là tôi không bước vào quán với kế hoạch viết. Đến lúc đã ăn được một phần, tôi mới nghĩ nên ghi lại trải nghiệm. Vì vậy vài bức ảnh không còn nguyên vẹn như lúc món vừa được dọn ra; đổi lại, đó đúng là trạng thái của một bàn ăn đang vui chứ không phải bàn được sắp riêng để quảng cáo.",
      ],
      images: [photo(
        "smile-bacninh-menu-20260726",
        "Trang menu ghi set Đồng Nê I-jang 590.000 đồng, 400 g dành cho 2 đến 3 người",
        "Set tổng hợp 590.000đ, 400 g, dành cho 2–3 người và chưa gồm VAT",
      )],
    },
    {
      heading: "Set 590.000 đồng: phần ăn gọn giá nhưng bàn lại rất đầy",
      paragraphs: [
        "Trang menu gọi món này là ‘동네 이장 모듬’, phía dưới ghi combo tổng hợp Đồng Nê I-jang. Khối lượng là 400 g cho 2–3 người, còn phần mô tả tiếng Hàn liệt kê 3% 뒷고기, 생소금구이 và 천겹살. Tôi giữ nguyên tên vì không muốn tự đổi các phần thịt thành một thuật ngữ Việt Nam thiếu chính xác. Menu cũng ghi VAT chưa nằm trong giá.",
        "Điều thuyết phục tôi không chỉ là số gam thịt. Khi đồ ăn lên đủ, bàn có thịt, kimchi, tỏi, rau cần nước, rau cuốn và nhiều món kèm để thay đổi từng miếng. Người thích ăn thịt không sẽ tập trung vào bàn đá; người thích cuốn có thể đổi rau, sốt và đồ chua liên tục. Nhờ vậy, hai người ăn lâu nhưng không cảm thấy vị cứ lặp lại.",
        "Tôi đã ăn ở khá nhiều quán thịt tại Bắc Ninh. Nếu lượng và cách phục vụ này được giữ ổn định, Smile Hội Quán có khả năng trở thành một trong những lựa chọn đáng tiền nhất trong nhóm quán nướng Hàn ở khu vực. Đây là ấn tượng từ một lần ăn, không phải bảng xếp hạng tuyệt đối, nhưng set 590.000 đồng thực sự cho cảm giác đầy đặn hơn con số trên menu.",
      ],
    },
    {
      heading: "Rau cần nước thơm, món kèm nhiều và vài vị hơi nhẹ với tôi",
      paragraphs: [
        "Trong các món kèm, tôi thích nhất rau cần nước trộn. Khi cho vào miếng cuốn, mùi thơm xanh làm phần thịt mỡ nhẹ hơn. Phần thân rau còn được đặt riêng lên bếp; khi gặp mỡ lợn chảy trên mặt đá, nó chín thơm và có vị béo theo một cách rất hợp với đồ nướng.",
        "Canh kimchi được tặng kèm có nước khá nhẹ, gần với một bát súp kimchi dễ uống hơn kiểu jjigae đặc và đậm. Trứng hấp lên nồi khá đầy, bên trên có thanh cua tạo màu vui mắt. Với khẩu vị của tôi, phần nêm của trứng hơi nhạt; jjolmyeon cũng chưa tạo ấn tượng mạnh bằng các món còn lại. Đây là hai tiếc nuối nhỏ về khẩu vị, không phải vấn đề làm hỏng bữa ăn.",
        "Thực tế ảnh được chụp khi chúng tôi đã ăn dở nên các đĩa không còn ngay ngắn. Tuy nhiên, chính bức ảnh đó cho thấy số lượng lựa chọn quanh bàn: rau cần, mì trộn, rau mầm, đồ chua, kimchi, canh và trứng hấp. Với người thích cuốn thịt rồi thay đổi vị qua từng miếng, phần món kèm là một ưu điểm rõ.",
      ],
      images: [photo(
        "smile-bacninh-banchan-20260726",
        "Bàn món ăn kèm đang dùng dở gồm rau cần nước, mì trộn, rau mầm, đồ chua, canh kimchi và trứng hấp có thanh cua",
        "Các món kèm trong lúc ăn — ảnh không được sắp lại vì tôi chỉ nghĩ đến việc viết review giữa bữa",
      )],
    },
    {
      heading: "Bàn đá và cách ăn khiến set thịt không bị đơn điệu",
      paragraphs: [
        "Thịt được nướng trực tiếp trên một mặt đá lớn. Không gian rộng cho phép để thịt ở một bên, khoai và các món cần chín dần ở giữa, còn kimchi, tỏi và rau cần nước ở khu vực khác. Mỡ từ thịt lan trên mặt đá rồi thấm vào rau, tạo ra phần đồ ăn kèm nóng có hương vị khác hẳn lúc còn tươi.",
        "Tôi đặc biệt thích cách chuyển nhịp giữa một miếng thịt chỉ chấm sốt, một miếng cuốn nhiều rau và một miếng ăn cùng kimchi nướng. Một set có giá trị không chỉ vì nhiều thịt; nó còn cần giúp người ăn muốn tiếp tục đến cuối. Ở điểm đó, Smile Hội Quán làm khá tốt nhờ lượng món kèm và chiếc bàn đá cho phép nhiều thành phần chín cùng lúc.",
        "Phần thịt và cấu trúc set là lý do chính khiến tôi nghĩ tới chuyện quay lại. Giá không tạo cảm giác phải chờ một dịp đặc biệt, còn cách bày bàn đủ vui cho một buổi gặp bạn hoặc nhóm nhỏ muốn vừa nướng vừa uống.",
      ],
    },
    {
      heading: "Sulbap Smile: một nồi rosé khiến tôi vừa cười vừa ăn tiếp",
      paragraphs: [
        "Menu còn có sulbap tương doenjang, nhưng món làm tôi tò mò hơn là sulbap Smile, có vẻ như món mang dấu ấn riêng của quán. Sulbap ở đây là món cơm chan canh dùng trong hoặc cuối một bữa rượu kiểu Hàn, không phải cơm lên men. Trong ảnh menu tôi thấy cả cơm và macaroni nằm chung một nồi, nên phải gọi thử xem hai thứ đó sẽ đi cùng nhau như thế nào.",
        "Nếu phải diễn tả thật dễ hình dung, tôi sẽ gọi đây là ‘sulbap nồi đá sốt rosé’. Sốt màu cam, béo và cay nhẹ bao lấy cơm cùng macaroni. Ngay lúc nuốt thìa đầu tiên, tôi bật cười vì chưa biết phải xếp món này vào đâu: không giống sulbap Hàn quen thuộc, cũng không hẳn là pasta.",
        "Nhưng điều thú vị là sau tiếng cười ấy, thìa lại tiếp tục quay về nồi. Vị lạ không khiến tôi dừng mà tạo ra một sự tò mò có tính gây nghiện. Tôi đã nghĩ: có phải vì vậy mà quán mang tên Smile không? Đây là món tôi muốn giới thiệu nhất cho người thích thử một biến tấu vui và không quá bận tâm đến khuôn mẫu truyền thống.",
      ],
      images: [photo(
        "smile-bacninh-signature-sulbap-20260726",
        "Nồi sulbap Smile màu cam với cơm và macaroni trong sốt béo cay kiểu rosé",
        "Sulbap Smile — một cách kết hợp lạ khiến tôi cười rồi vẫn tiếp tục múc",
      )],
      quote: "Thìa đầu tiên khiến tôi hỏi ‘đây là món gì?’, những thìa sau khiến tôi quên mất câu hỏi đó.",
    },
    {
      heading: "Đĩa yukhoe bất ngờ giúp bàn nhậu bắt đầu lại",
      paragraphs: [
        "Khi chai soju thứ hai được mang ra, nhân viên tặng bàn một đĩa yukhoe ăn cùng rong biển tẩm gia vị. Tôi không biết đây là quà khai trương hay dịch vụ đi kèm khi gọi rượu, vì vậy không xem nó là món mọi khách chắc chắn sẽ nhận. Nhân viên trộn lòng đỏ và các thành phần ngay tại bàn rồi để chúng tôi ăn cùng lá rong biển.",
        "Yukhoe có khá nhiều lê nên mát, giòn và làm phần thịt sống trở nên nhẹ hơn. Sau một quãng ăn thịt nóng và uống rượu, món lạnh này giống như nút làm mới vị giác. Miếng rong biển mặn thơm ôm lấy yukhoe, lê và rau mầm, vừa gọn để nhắm rượu vừa khác hẳn nhịp ăn trước đó.",
        "Chúng tôi vốn chỉ định uống trưa cho vui, nhưng sau khi đĩa yukhoe xuất hiện thì câu chuyện kéo dài hơn. Kết quả là hai người uống tổng cộng bốn chai soju giữa ban ngày. Tôi kể con số này như một chi tiết thật của buổi gặp, không phải lời khuyến khích phải uống theo; điều đáng nhớ hơn là cách một món lạnh đúng lúc đã khiến bàn ăn có thêm một chương mới.",
      ],
      images: [photo(
        "smile-bacninh-yukhoe-service-20260726",
        "Đĩa yukhoe với lòng đỏ, lê, rau mầm và rong biển tẩm gia vị được tặng trong lúc gọi chai soju thứ hai",
        "Yukhoe được tặng tại bàn — tôi không rõ là ưu đãi khai trương hay dịch vụ theo đồ uống",
      )],
    },
    {
      heading: "Soju 130.000 đồng, đồ uống đa dạng và một không gian có tính toán",
      paragraphs: [
        "Nhiều nhà hàng kiểu chuỗi mà tôi từng ghé gần đây đã đưa soju phổ thông lên khoảng 140.000 đồng một chai. Tại Smile Hội Quán, Chamisul, Jinro Is Back, Saero và Choeumcheoreom đều được ghi 130.000 đồng; Good Day là 110.000 đồng. Chênh lệch 10.000 đồng không lớn cho một chai, nhưng trong bữa uống nhiều chai, khách vẫn cảm nhận được.",
        "Danh sách rượu cũng được chuẩn bị cho nhiều nhóm khách: makgeolli và cheongha, soju trái cây, makgeolli trái cây, bia chai và bia tươi. Trên trang menu hôm đó, soju trái cây và makgeolli trái cây cùng ở mức 150.000 đồng. Việc có sẵn các lựa chọn ngọt, nhẹ và dễ chia sẻ cho thấy quán không chỉ nhắm đến khách Hàn thích soju nguyên vị.",
        "Tôi không chụp được toàn bộ phòng ăn, nhưng ấn tượng tại chỗ là nội thất có bàn tay của người làm chuyên nghiệp. Màu sắc, bề mặt bàn đá, vật dụng và cách đặt nhận diện thương hiệu tạo thành một tổng thể rõ ràng. Các quán nướng lân cận đã thu hút nhiều nhóm khách Việt; với mức giá, đồ uống trái cây và không gian như vậy, tôi cho rằng Smile Hội Quán cũng có khả năng trở thành một địa điểm được khách Việt tìm đến nhiều.",
      ],
      images: [photo(
        "smile-bacninh-drinks-menu-20260726",
        "Trang menu đồ uống ghi nhiều loại soju phổ thông giá 130.000 đồng, cùng soju trái cây và makgeolli trái cây",
        "Giá và danh sách đồ uống tại thời điểm 26/7/2026; menu có thể thay đổi",
      )],
    },
    {
      heading: "Một gói khăn giấy khiến người cũng làm kinh doanh phải tôn trọng",
      paragraphs: [
        "Chi tiết làm tôi bất ngờ nhất lại nằm trong nhà vệ sinh. Túi khăn giấy được bọc riêng bằng thiết kế có tên Smile Hội Quán, logo và lời giới thiệu về chất liệu. Đây không phải món khách gọi, cũng không phải góc thường xuất hiện trong ảnh quảng cáo đồ ăn, nên rất dễ bị bỏ qua.",
        "Tôi cũng đang kinh doanh và hiểu rằng làm một chi tiết riêng như vậy tốn thêm thời gian, trao đổi và chi phí. Người chỉ muốn mở cửa rồi bán hàng thường khó theo thiết kế thương hiệu đến tận gói khăn giấy. Nhìn nó, tôi có cảm giác người đại diện hoặc người quản lý thật sự quan tâm đến cách khách trải nghiệm quán từ đầu đến cuối.",
        "Tôi không biết ai trực tiếp đưa ra quyết định này và không suy đoán quy trình nội bộ. Điều tôi có thể nói là sự chỉn chu ấy khiến tôi tôn trọng người vận hành. Đôi khi một món ngon tạo ra thiện cảm; một chi tiết nhỏ không ai bắt buộc phải làm lại tạo ra niềm tin rằng sự chăm chút không phải ngẫu nhiên.",
      ],
      images: [photo(
        "smile-bacninh-tissue-detail-20260726",
        "Túi khăn giấy trong nhà vệ sinh được bọc bằng thiết kế riêng có logo và tên Smile Hội Quán",
        "Một chi tiết nhỏ nhưng cho thấy thương hiệu được chăm chút đến cuối hành trình của khách",
      )],
    },
    {
      heading: "Kết luận: một ứng viên mới cho vị trí quán thịt tôi thích nhất ở Bắc Ninh",
      paragraphs: [
        "Tổng thể, Smile Hội Quán có nhiều điểm mạnh rõ hơn vài chỗ chưa trọn vẹn. Trứng hấp và jjolmyeon hơi nhẹ so với khẩu vị của tôi, nhưng set thịt đầy đặn, món kèm đa dạng, bàn đá tiện, sulbap Smile có cá tính, giá soju hợp lý và yukhoe được tặng đúng lúc đều tạo nên một buổi trưa rất vui.",
        "Trước lần ghé này, Jeil Naengsam là quán thịt tôi xếp ở vị trí số một theo gu cá nhân tại Bắc Ninh. Sau bữa ăn ở Smile Hội Quán, vị trí đó có thể sẽ thay đổi. Tôi vẫn muốn quay lại thêm vài lần để xem chất lượng khi quán đông và thử các món gọi riêng; một nhà hàng mới cần thời gian để chứng minh sự ổn định.",
        "Quán phù hợp với nhóm bạn muốn uống cùng đồ nướng, gia đình thích nhiều món kèm và cả khách Việt muốn một không gian Hàn Quốc dễ chụp ảnh nhưng giá không quá áp lực. Nếu set 590.000 đồng và những chi tiết vận hành hiện tại được duy trì, đây có thể trở thành một trong những nhà hàng đáng chú ý nhất của tôi ở Bắc Ninh. Riêng tôi, khả năng quay lại trong thời gian gần là rất cao.",
      ],
    },
  ],
};
