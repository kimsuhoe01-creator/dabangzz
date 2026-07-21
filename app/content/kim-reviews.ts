import type { CommunityPost } from "./community-posts";

const photo = (name: string, alt: string, caption: string) => ({
  src: `/images/experience/${name}.jpg`,
  alt,
  caption,
  credit: "author" as const,
});

export const kimReviews: CommunityPost[] = [
  {
    slug: "sinh-nhat-vo-tai-labri-ha-noi",
    kind: "review",
    category: "Kim ở Việt Nam · Hà Nội",
    author: "Kim",
    title: "Sinh nhật vợ tại LABRI Hà Nội: trải nghiệm tasting menu khoảng 7,5 triệu đồng",
    summary: "Một bữa tối tự trả tiền với những điểm sáng rất rõ ở crab pie tee, riso pasta, trứng mực và kem phô mai xanh — cùng vài chi tiết chưa trọn vẹn ở cá, sốt thịt cừu và nấm truffle.",
    readTime: "14 phút đọc",
    hero: "BIRTHDAY DINNER\nAT LABRI",
    images: [photo(
      "labri-birthday-table-20260720",
      "Bàn ăn sinh nhật tại LABRI Hà Nội với hoa, thiệp chúc mừng, thực đơn và món khai vị",
      "Bàn ăn được chuẩn bị cho sinh nhật của vợ tôi tại LABRI",
    )],
    publishedAt: "2026-07-21T10:30:00+07:00",
    updatedAt: "2026-07-21T09:15:00+07:00",
    keyFacts: [
      { label: "THỜI ĐIỂM TRẢI NGHIỆM", value: "20/7/2026", note: "Bữa tối sinh nhật tại Hà Nội; giá và món ăn phản ánh đúng lần ghé này." },
      { label: "TASTING MENU", value: "1.980.000đ/người", note: "Mức in trên thực đơn tại bàn, chưa gồm 5% phí phục vụ và thuế." },
      { label: "WINE PAIRING", value: "+990.000đ/người", note: "Hai vợ chồng đều chọn ghép rượu theo món trong lần trải nghiệm này." },
      { label: "NẤM TRUFFLE", value: "+450.000đ", note: "Chúng tôi gọi một phần bổ sung rồi nhờ chia cho hai đĩa thịt cừu." },
      { label: "TỔNG THANH TOÁN", value: "Khoảng 7,5 triệu đồng", note: "Gồm đồ ăn, wine pairing, truffle, nước có ga, phí phục vụ và thuế." },
      { label: "MINH BẠCH", value: "Tự thanh toán", note: "Không được mời, không tài trợ và không có liên kết đặt bàn nhận hoa hồng." },
    ],
    sourceLinks: [
      {
        label: "MICHELIN Guide 2023 — Danh sách đầu tiên tại Việt Nam có LABRI ở hạng mục Selected",
        url: "https://vietnamtourism.gov.vn/post/50221",
      },
      {
        label: "MICHELIN Guide 2026 — Trang thông tin chính thức của LABRI",
        url: "https://guide.michelin.com/en/ha-noi/ha-noi_2974158/restaurant/labri",
      },
      {
        label: "MICHELIN Guide Vietnam 2026 — ONVIT nhận một Sao MICHELIN",
        url: "https://guide.michelin.com/us/en/article/michelin-guide-ceremony/michelin-guide-vietnam-2026",
      },
      {
        label: "Bộ Văn hóa, Thể thao và Du lịch — ONVIT là nhà hàng Hàn Quốc đương đại đầu tiên tại Việt Nam đạt một Sao MICHELIN",
        url: "https://bvhttdl.gov.vn/11-ngoi-sao-toa-sang-tai-le-cong-bo-michelin-guide-2026.htm",
      },
      {
        label: "ONVIT — Giới thiệu chính thức về Chef Chi Joon Hyuk và hành trình 5 năm tại Việt Nam",
        url: "https://onvithanoi.com/index.php/vi/fine-dining-han-quoc/",
      },
      {
        label: "LABRI Hanoi — Trang web chính thức và thông tin đặt bàn",
        url: "https://www.labribistro.com/vi/trang-chu/",
      },
    ],
    sections: [
      {
        heading: "Một bữa tối sinh nhật và lý do chúng tôi chọn LABRI",
        paragraphs: [
          "Vợ chồng tôi có một thói quen: vào những ngày thật sự đặc biệt, chúng tôi dành thời gian cho một bữa ăn mà ngày thường sẽ không chọn. Sinh nhật vợ năm nay, địa điểm là LABRI tại phố Bùi Thị Xuân, Hà Nội. Tôi tò mò vì nhà hàng có dấu ấn của một đầu bếp người Hàn và dùng kỹ thuật Pháp để diễn giải nguyên liệu, hương vị châu Á. Với một người Hàn đang sống ở Việt Nam, sự giao nhau ấy hấp dẫn hơn việc chỉ tìm một căn phòng sang trọng.",
          "LABRI là một trong những nhà hàng xuất hiện ở hạng mục MICHELIN Selected trong ấn bản Việt Nam đầu tiên năm 2023. Sau gần năm năm gắn với LABRI và Hà Nội, Chef Chi Joon Hyuk phát triển ONVIT như một dự án fine dining Hàn Quốc rõ nét hơn. Đến MICHELIN Guide Vietnam 2026, ONVIT mới là nhà hàng nhận một Sao MICHELIN; các nguồn chính thức của Việt Nam cũng giới thiệu đây là nhà hàng Hàn Quốc đương đại đầu tiên tại Việt Nam đạt danh hiệu này.",
          "Hai tên nhà hàng vì vậy cần được tách thật rõ. Trang MICHELIN Guide hiện tại của LABRI không hiển thị danh hiệu One MICHELIN Star, nên tôi không gọi bữa tối này là trải nghiệm tại ‘LABRI một sao’, dù bản kể đầu tiên đã nhớ và viết như vậy. Chi tiết đáng nói là hành trình nghề nghiệp của vị bếp trưởng đi từ một LABRI được Guide tuyển chọn đến ONVIT một sao, chứ ngôi sao của ONVIT không được chuyển ngược cho LABRI. Tôi cũng không dùng câu ‘đầu bếp Hàn Quốc đầu tiên được đưa vào Guide năm 2023’, vì danh sách chính thức xác nhận LABRI được chọn nhưng không công bố thứ tự hay danh hiệu cá nhân như thế.",
          "Thiệp chúc mừng, hoa đỏ và cách bàn ăn được chuẩn bị tạo cảm giác đặc biệt ngay khi ngồi xuống. Không gian tối, tập trung ánh sáng vào mặt bàn, đủ trang trọng cho sinh nhật nhưng không khiến chúng tôi phải nói chuyện nhỏ như đang ở một buổi lễ. Bài này chỉ kể phạm vi hai vợ chồng trực tiếp ăn và thanh toán; tôi không chấm điểm nhà bếp ở những ngày khác và cũng không xem một bữa tối là kết luận cuối cùng về toàn bộ nhà hàng.",
        ],
        images: [photo(
          "labri-tasting-menu-20260720",
          "Thực đơn tasting course của LABRI ghi giá 1.980.000 đồng và wine pairing 990.000 đồng mỗi người",
          "Thực đơn tại bàn ngày 20/7/2026; giá chưa gồm 5% phí phục vụ và thuế",
        )],
      },
      {
        heading: "Chúng tôi đã gọi gì và hóa đơn 7,5 triệu đồng gồm những gì?",
        paragraphs: [
          "Hai vợ chồng cùng chọn tasting course giá 1.980.000 đồng một người và wine pairing thêm 990.000 đồng một người. Thực đơn in tại bàn đi từ bulgogi cup, crab pie tee, seafood yuzu truffle carpaccio, foie gras terrine, Murray Cod, squid eggs đến lamb rack; khách có thể đổi phần thịt cừu sang Australian Wagyu flap với phụ phí 200.000 đồng. Cuối bữa có món tráng miệng, trà hoặc cà phê và madeleine.",
          "Cách ghi này cũng giúp sửa một nhầm lẫn trong bản kể đầu tiên: Murray Cod và thịt cừu không phải hai lựa chọn loại trừ nhau. Cá tuyết Murray, trứng mực và phần thịt đều nằm ở các chặng khác nhau; lựa chọn thực sự ở phần thịt là lamb rack hoặc Wagyu phụ phí. Chúng tôi giữ lamb rack, rồi thêm một phần nấm truffle 450.000 đồng để thử. Tổng sau nước có ga, phí phục vụ và thuế vào khoảng 7,5 triệu đồng.",
          "Đây là mức giá của tối 20/7/2026, không phải bảng giá cố định cho mọi thời điểm. Nhà hàng có thể thay menu theo mùa, đổi mức phí hoặc cấu trúc ghép rượu. Nếu định đi, tôi khuyên xem menu hiện hành và hỏi rõ phần chưa bao gồm trước khi đặt. Với bữa hai người, chỉ một lựa chọn nâng cấp nhỏ cũng tác động khá rõ đến tổng cuối cùng.",
        ],
      },
      {
        heading: "Bulgogi cup và crab pie tee: khoảnh khắc khiến tôi hiểu tiền nằm ở đâu",
        paragraphs: [
          "Các miếng mở đầu đưa ra hai tín hiệu quen mà lạ. Bulgogi cup dùng một ý niệm rất Hàn Quốc nhưng trình bày theo kích thước nhỏ và có nhiều lớp kết cấu. Crab pie tee đặt thịt cua cùng khoai tây, pesto và phần vỏ rong biển giòn. Ở miếng cua, lớp sốt dạng bọt cho cảm giác nhẹ trước, sau đó vị cua và phần sốt bên dưới mới lần lượt xuất hiện. Mỗi thành phần không cố lấn át phần còn lại.",
          "Đó là khoảnh khắc đầu tiên tôi nghĩ: đây là lý do người ta trả tiền cho một nhà hàng đắt. Không chỉ vì nguyên liệu hiếm, mà vì một miếng nhỏ được thiết kế để vị và kết cấu đi theo trình tự. Tôi thích nhất việc phần vỏ có tác dụng thật, không phải vật trang trí. Dù vậy, đây là khẩu phần mở màn; người đến với kỳ vọng ‘đĩa lớn tương xứng giá’ có thể cần điều chỉnh cách nhìn trước khi chọn tasting menu.",
        ],
        images: [photo(
          "labri-crab-pie-tee-20260720",
          "Crab pie tee trong vỏ rong biển với thịt cua, thảo mộc và các hạt sốt nhỏ",
          "Crab pie tee — một trong những miếng mở đầu tôi nhớ rõ nhất",
        )],
      },
      {
        heading: "Carpaccio yuzu truffle và foie gras: một món sáng, một món dày",
        paragraphs: [
          "Seafood yuzu truffle carpaccio là chặng có độ sáng rõ rệt. Tôi không còn nhớ chắc từng loại hải sản sau nhiều lớp món và rượu, nên không muốn đoán thêm ngoài những gì còn thấy trên ảnh và thực đơn. Thứ ở lại trong trí nhớ là sốt yuzu: chua thơm, tươi nhưng vẫn có chiều sâu, giúp phần hải sản sống không bị phẳng. White peach sorbet ghi trên menu còn tạo một nhịp lạnh, nhẹ trước khi chuyển sang vị béo.",
          "Foie gras terrine đi theo hướng ngược lại. Bánh mì và hai phần ăn kèm cho phép đổi tỷ lệ béo, chua, ngọt trong mỗi miếng. Tôi từng nghe foie gras như một trong những nguyên liệu xa xỉ nhất, nhưng sống ở Việt Nam và thường xuyên ăn pâté khiến cảm giác bất ngờ không còn lớn như tưởng tượng. Tôi lại bị thuyết phục bởi phần trái cây và carrot chutney: dâu làm vị béo bớt nặng, còn cà rốt cho kết cấu và vị ngọt mà tôi không nghĩ sẽ hợp đến vậy.",
          "Đây cũng là lúc wine pairing cho thấy tác dụng. Tôi không ghi lại tên từng chai nên sẽ không viết như một bài đánh giá rượu. Trong trải nghiệm của tôi, rượu giúp đổi nhịp giữa món chua sáng và món béo dày, nhưng không phải phần bắt buộc để hiểu món ăn. Người ít uống hoặc muốn kiểm soát tổng chi hoàn toàn có thể hỏi lựa chọn đồ uống khác thay vì gọi pairing chỉ vì sợ thiếu trải nghiệm.",
        ],
        images: [
          photo(
            "labri-yuzu-carpaccio-20260720",
            "Seafood yuzu truffle carpaccio với hải sản sống, lát củ cải và các loại trứng cá",
            "Carpaccio hải sản — sốt yuzu là phần tôi nhớ rõ nhất",
          ),
          photo(
            "labri-foie-gras-terrine-20260720",
            "Foie gras terrine được phục vụ cùng bánh mì, dâu, rau và carrot chutney",
            "Foie gras terrine — ngon nhất khi tự thay đổi tỷ lệ với trái cây và chutney",
          ),
        ],
      },
      {
        heading: "Murray Cod và riso pasta: món ăn làm tôi đổi cách nhìn về ‘hạt gạo’",
        paragraphs: [
          "Murray Cod được áp chảo, đặt trên riso pasta với sake beurre blanc và clam dashi. Miếng cá có lớp da vàng và thịt trắng chắc, nhưng bản thân cá với tôi không tạo cú đánh mạnh; vị hơi mặn và tương đối thẳng. Nếu chỉ nhớ phần cá, đây có lẽ là chặng tôi sẽ xếp ở giữa chứ không phải đầu danh sách.",
          "Phần làm tôi thay đổi suy nghĩ lại nằm bên dưới. Tôi vốn không chủ động gọi risotto và thường chọn pasta nếu có hai phương án. Những ‘hạt’ ở đây trông giống gạo nhưng thực chất là pasta tạo hình hạt gạo. Chúng giữ sốt, clam dashi và độ béo theo cách mỗi thìa đều có vị, không thành một khối nhão. Khi đưa nĩa lên gần, hình dạng và độ đàn hồi khác gạo trở nên rất rõ.",
          "Tôi thích việc một món có thể không hoàn hảo ở trung tâm nhưng vẫn đáng nhớ nhờ phần đi kèm. Nếu quay lại, thứ tôi nghĩ đến trước không phải Murray Cod mà là riso pasta. Đây là nhận xét hoàn toàn theo khẩu vị cá nhân: người ưu tiên độ tươi và kỹ thuật áp chảo cá có thể xếp đĩa này cao hơn tôi.",
        ],
        images: [
          photo(
            "labri-murray-cod-riso-20260720",
            "Murray Cod áp chảo trên riso pasta với sốt màu sáng và rau xanh",
            "Murray Cod — cá ổn, nhưng riso pasta mới là phần khiến tôi nhớ",
          ),
          photo(
            "labri-riso-pasta-closeup-20260720",
            "Cận cảnh riso pasta hình hạt gạo trên nĩa",
            "Nhìn gần mới thấy đây là pasta hình hạt gạo, không phải risotto",
          ),
        ],
      },
      {
        heading: "Trứng mực và bí non: món xuất sắc nhất của cả hai vợ chồng",
        paragraphs: [
          "Tôi đã ăn mực đầy trứng rất nhiều lần từ khi sống ở Việt Nam, đến mức nghĩ mình hiểu rõ nguyên liệu này. Đĩa squid eggs ở LABRI khiến chuẩn đó phải đặt lại. Menu ghi trứng mực trong lemon butter sauce và pine nut purée; khi ăn, cảm giác đầu tiên gần với kem hoặc phô mai hơn là phần trứng mực thường gặp: dày, mịn, béo và thơm, nhưng vẫn nhận ra bản chất hải sản.",
          "Bí non nướng và sốt màu cam tạo phần khung cho trứng mực, còn những miếng nhỏ trong sốt khiến mỗi lần nhai có thêm một lớp kết cấu. Cả hai vợ chồng đều phản ứng gần như cùng lúc, không cần trao đổi nhiều để thống nhất đây là điểm cao nhất của tối hôm đó. Trong một menu dài, có một món khiến hai người dừng nói để tập trung ăn là điều đáng giá.",
          "Tôi vẫn tránh gọi đây là ‘món ngon nhất Hà Nội’ hoặc một kết luận tuyệt đối. Nó hợp đúng trải nghiệm và vốn so sánh của chúng tôi vào tối ấy. Người không thích kết cấu nội tạng hoặc vị béo đậm có thể cảm nhận khác. Nhưng nếu đã quen ăn trứng mực ở Việt Nam và muốn thấy nguyên liệu đó được đẩy sang một ngôn ngữ khác, đây là chặng đáng chờ.",
        ],
        images: [photo(
          "labri-squid-eggs-20260720",
          "Món trứng mực với bí non nướng, sốt bơ chanh và pine nut purée",
          "Squid eggs — món cả hai vợ chồng cùng chọn là điểm sáng nhất",
        )],
        quote: "Nếu chỉ được giữ lại ký ức về một món trong bữa tối này, tôi sẽ chọn trứng mực.",
      },
      {
        heading: "Lamb rack, phần truffle được chia đôi và điều tôi thấy tiếc",
        paragraphs: [
          "Ở chặng thịt, chúng tôi chọn lamb rack. Nhà hàng có tùy chọn thêm nấm truffle với mức 450.000 đồng. Tôi chỉ định thêm cho đĩa của vợ để cả hai nếm thử, nhưng nhân viên chủ động chia phần nấm cho hai đĩa. Một chi tiết phục vụ nhỏ, song đúng kiểu tinh tế khiến khách cảm thấy yêu cầu của mình được hiểu chứ không chỉ được ghi lại.",
          "Thịt cừu có hai trải nghiệm trong cùng miếng. Phần nạc cho mùi cừu và gia vị khá rõ, đúng cảm giác đang ăn lamb chứ không phải một loại thịt đỏ trung tính; phần có mỡ mềm hơn hẳn. Điểm tôi chưa thích là lượng sốt nhiều so với thịt và vị khá mặn. Tôi vốn ăn mặn mà vẫn để lại phần lớn sốt. Khi các lát truffle chạm sốt, hương riêng cũng giảm nhanh, khiến khoản nâng cấp không phát huy hết như kỳ vọng.",
          "Đây không phải phàn nàn để phủ định món. Thịt được xử lý tốt và cách trình bày đẹp, nhưng tổng thể thiếu khoảng trống để truffle và vị thịt tự đứng lên. Nếu quay lại với một menu tương tự, tôi có thể giữ lamb rack nhưng bỏ phần thêm truffle, hoặc hỏi liệu có thể để sốt tách bớt. Với người thích sốt đậm, chính điểm tôi thấy nặng lại có thể là ưu điểm.",
        ],
        images: [
          photo(
            "labri-fresh-truffle-20260720",
            "Nấm truffle nguyên củ được giới thiệu trước khi bào lên món thịt",
            "Phần truffle bổ sung được nhân viên chia đều cho hai đĩa",
          ),
          photo(
            "labri-lamb-rack-truffle-20260720",
            "Lamb rack với nấm truffle bào, sốt sẫm màu, rau củ và hoa ăn được",
            "Lamb rack — thịt mềm, nhưng sốt mặn và nhiều làm hương truffle giảm",
          ),
        ],
      },
      {
        heading: "Kem phô mai xanh và đoạn kết có liên quan đến một người bạn",
        paragraphs: [
          "Món tráng miệng tối đó là kem phô mai xanh. Gần đây tôi từng tranh luận vui với một người em về pizza gorgonzola: với tôi, nếu thiếu mùi đặc trưng của blue cheese thì món chỉ giống pizza phô mai và mật ong. Tôi đã tự làm một chiếc có blue cheese thật cho cậu ấy, và cậu ấy thích hơn cả tiệm gần nhà. Khi ăn món kem này, tôi lập tức nghĩ nếu có mặt, cậu ấy có lẽ sẽ gọi đây là ‘kem của cuộc đời’.",
          "Kem lạnh làm vị phô mai xanh trở nên gọn hơn nhưng không xóa đi nét hăng, mặn và hơi ‘khó gần’ khiến nguyên liệu này thú vị. Phần vụn giòn và tấm đường mỏng thêm đối lập về kết cấu. Sau nhiều món béo và sốt đậm, món tráng miệng vẫn có cá tính riêng thay vì chỉ dùng vị ngọt để kết thúc. Với tôi, đó là cái kết hợp lý hơn một món chocolate an toàn.",
        ],
        images: [photo(
          "labri-blue-cheese-ice-cream-20260720",
          "Kem phô mai xanh với lớp giòn trong suốt, vụn bánh và hạt trang trí",
          "Kem blue cheese — một đoạn kết có mùi vị riêng, không cố chiều tất cả mọi người",
        )],
      },
      {
        heading: "Khoảng 7,5 triệu đồng có đáng không, và ai sẽ hợp với bữa tối này?",
        paragraphs: [
          "Đây không phải số tiền nhẹ cho một bữa tối. Nếu chỉ đo bằng độ no, chắc chắn có rất nhiều lựa chọn khác ở Hà Nội cho giá trị trực tiếp hơn. Chúng tôi trả cho một dịp sinh nhật, nhịp phục vụ kéo dài, cách món ăn được xây lớp, wine pairing và cảm giác cả tối được dành riêng cho một sự kiện. Trong phạm vi ấy, tôi thấy hài lòng. Điểm mạnh rõ nhất là crab pie tee, riso pasta, trứng mực, dessert và sự tinh tế của nhân viên; điểm trừ là cá chưa nổi bật, sốt thịt cừu mặn và truffle không đạt kỳ vọng.",
          "LABRI hợp với cặp đôi hoặc nhóm nhỏ muốn một buổi tối chậm, thích nói về từng món và chấp nhận khẩu phần tasting. Người cần ăn nhanh, không thích vị béo, không uống rượu nhưng vẫn gọi pairing vì áp lực, hoặc muốn mọi món đều có lượng lớn có thể thấy chi phí khó thuyết phục. Hãy báo dị ứng khi đặt, hỏi menu hiện tại, thời lượng dự kiến và các khoản phụ thu; ảnh thực đơn trong bài chỉ là hồ sơ của ngày chúng tôi đi.",
          "Hà Nội còn rất nhiều nhà hàng cao cấp, omakase và fine dining mà chúng tôi chưa thử, nên có lẽ sẽ khá lâu mới quay lại LABRI. Trên đường về, hai vợ chồng so sánh nơi này với Kumihimo Restaurant ở Hanoi Marriott, nơi từng đi vào một dịp sinh nhật trước. Kết quả 1–1: mỗi người chọn một nơi. Cuộc tranh luận không cần người thắng; nó chỉ khiến chúng tôi tò mò xem sinh nhật tiếp theo sẽ có nhà hàng nào đủ sức phá thế hòa.",
        ],
      },
    ],
  },
];
