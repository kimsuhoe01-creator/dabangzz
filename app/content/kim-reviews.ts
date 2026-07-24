import type { CommunityPost } from "./community-posts";

const photo = (name: string, alt: string, caption: string) => ({
  src: `/images/experience/${name}.jpg`,
  alt,
  caption,
  credit: "author" as const,
});

export const kimReviews: CommunityPost[] = [
  {
    slug: "kinza-bac-ninh-sushi-dassai-45",
    kind: "review",
    category: "Kim ở Việt Nam · Bắc Ninh",
    author: "Kim",
    title: "KINZA Bắc Ninh: sushi chất lượng, Dassai 45 và một người bảo vệ khó quên",
    summary: "Bữa tối ba người tự chọn món tại KINZA, từ sashimi cắt dày, sushi foie gras, uni và cá ngừ cao cấp đến tempura, okonomiyaki và chai Dassai 45 cỡ 1,8 lít.",
    readTime: "13 phút đọc",
    hero: "KINZA\nBẮC NINH",
    images: [photo(
      "kinza-interior-20260721",
      "Không gian KINZA Bắc Ninh với gỗ sẫm màu, hoa anh đào trang trí và bàn ăn kiểu Nhật",
      "Không gian KINZA trong bữa tối ngày 21/7/2026",
    )],
    publishedAt: "2026-07-24T09:00:00+07:00",
    keyFacts: [
      { label: "THỜI ĐIỂM TRẢI NGHIỆM", value: "21/7/2026", note: "Bữa tối tại khu vực Hồ Văn Miếu, Bắc Ninh; giá và món ăn phản ánh đúng lần ghé này." },
      { label: "NHÓM ĐI ĂN", value: "3 người", note: "Tôi đi cùng vợ và một người em thân thiết; vợ tôi không uống rượu." },
      { label: "SASHIMI TỔNG HỢP", value: "Khoảng 990.000đ", note: "Mức giá theo trí nhớ tại thời điểm ghé; nên xem menu hiện hành trước khi gọi." },
      { label: "DASSAI 45", value: "2.400.000đ / 1,8 lít", note: "Giá in trên menu và chưa gồm VAT; phần rượu còn lại được gửi giữ tại nhà hàng." },
      { label: "SUSHI ĐẶC BIỆT", value: "2 miếng mỗi loại", note: "Foie gras, uni và cá ngừ cao cấp được gọi thêm ngoài các set chính." },
      { label: "MINH BẠCH", value: "Không tài trợ", note: "Người em đi cùng mời bữa ăn; nhà hàng không tặng món, không mời review và bài không có liên kết nhận hoa hồng." },
    ],
    sourceLinks: [
      {
        label: "KINZA — Trang web nhà hàng",
        url: "https://nhahangkinza.com/",
      },
      {
        label: "Google Maps — Nhà hàng Nhật Bản KINZA, 31 Trần Nhật Duật, Võ Cường, Bắc Ninh",
        url: "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0+h%C3%A0ng+Nh%E1%BA%ADt+B%E1%BA%A3n+KINZA+B%E1%BA%AFc+Ninh",
      },
    ],
    editorialNote: "Bài do Kim viết từ trải nghiệm trực tiếp ngày 21/7/2026 cùng vợ và một người em thân thiết. Người em đi cùng thanh toán bữa ăn; nhà hàng không mời, không tài trợ, không tặng sản phẩm và bài không có liên kết nhận hoa hồng. Ảnh do Kim chụp; dữ liệu định vị và thông tin thiết bị đã được loại bỏ khi tối ưu ảnh.",
    sections: [
      {
        heading: "Một bữa tối ba người gần Hồ Văn Miếu",
        paragraphs: [
          "Tôi đã sống ở Việt Nam chín năm và từng ăn ở khá nhiều nhà hàng Nhật, trong đó có một số địa chỉ tại Bắc Ninh. Nơi dùng tên gọi Nhật Bản không khó tìm, nhưng để món sống, sushi, cách bày bàn và dịch vụ cùng đạt một mặt bằng tốt thì vẫn hiếm. Ngày 21/7/2026, tôi đến Nhà hàng Nhật Bản KINZA cùng vợ và một người em thân thiết để trải nghiệm một địa chỉ trong khu vực Hồ Văn Miếu.",
          "Tên trên Google Maps là Nhà hàng Nhật Bản KINZA, địa chỉ 31 phố Trần Nhật Duật, Võ Cường, Bắc Ninh. Người em đi cùng chủ động mời bữa tối hôm đó. Nhà hàng không biết trước tôi sẽ viết bài, không tài trợ, không tặng món và không có liên kết đặt bàn nhận hoa hồng. Vì chúng tôi gọi chai sake lớn cùng nhiều món cao cấp ngoài set nên tổng thanh toán cao hơn một bữa ăn thông thường; tôi không dùng hóa đơn cuối để đại diện cho mức chi bắt buộc của mọi khách.",
          "Nhận xét dưới đây chỉ nằm trong phạm vi một lần ghé của ba người. Giá một số món được ghi theo menu chụp tại bàn, còn giá sashimi và sushi gọi thêm là con số tôi nhớ gần đúng. Menu và giá có thể thay đổi, vì vậy người đọc nên kiểm tra trực tiếp trước khi gọi những món cao cấp.",
        ],
      },
      {
        heading: "Không gian gọn, sang và có nhiều chi tiết hiếm thấy ở Bắc Ninh",
        paragraphs: [
          "Ấn tượng đầu tiên của tôi là không gian sạch sẽ và có mức hoàn thiện cao. Gỗ màu sẫm, những mảng ngăn kiểu Nhật và hoa anh đào trên trần tạo điểm nhấn rõ nhưng không làm phòng ăn trở nên rối. Ánh sáng tập trung vào bàn giúp sashimi và sushi nổi bật khi được mang ra.",
          "Tôi thích cả những chi tiết nhỏ như hình dáng đĩa, màu chén, ly, gác đũa và cách đặt từng món. Đó là những phần dễ bị xem nhẹ, nhưng lại khiến khách cảm thấy nhà hàng đã nghĩ về toàn bộ trải nghiệm chứ không chỉ món ăn. Trong phạm vi những nơi tôi từng ghé tại Bắc Ninh, cách phối không gian và đồ bàn ăn như vậy vẫn tương đối hiếm.",
          "Nhân viên dùng một số câu chào và phản hồi bằng tiếng Nhật khi đón khách hoặc nhận món. Chi tiết ấy không quyết định chất lượng món ăn, nhưng giúp bữa tối có thêm cảm giác đang bước vào một nhà hàng Nhật thay vì một quán chỉ bán thực đơn Nhật.",
        ],
      },
      {
        heading: "Sashimi cắt dày, độ tươi tốt nhưng tôi mong set đa dạng hơn",
        paragraphs: [
          "Món mở đầu là set sashimi tổng hợp, theo trí nhớ của tôi có giá khoảng 990.000 đồng. Khác với cách cắt mỏng thường gặp ở một số quán theo phong cách Hàn Quốc, phần lớn miếng cá tại KINZA được cắt khá dày. Nhờ vậy, cá ngừ, cá hồi và cá thịt trắng giữ được độ đàn hồi, người ăn cảm nhận rõ thớ và kết cấu thay vì chỉ nhận vị của nước chấm.",
          "Độ tươi trong lần ăn này ổn, không có mùi khiến tôi khó chịu. Cá hồi có độ béo vừa phải, cá ngừ mềm nhưng vẫn giữ thân miếng, còn cá trắng tạo nhịp nhẹ hơn giữa các miếng đậm vị. Với ba người, đĩa lớn cũng tạo được cảm giác khởi đầu đúng cho một bữa tối có nhiều món.",
          "Điểm hơi tiếc là ở mức giá gần một triệu đồng, tôi mong thành phần có thêm một chút bất ngờ. Bạch tuộc, sò và trứng cá là những nguyên liệu khá quen trong các khay tổng hợp ở siêu thị lớn, nên tổng thể chưa đa dạng như kỳ vọng của tôi. Tuy nhiên, đây là một góp ý nhẹ về cấu trúc set; các phần chính gồm cá ngừ, cá hồi và cá trắng vẫn đủ ngon để đĩa sashimi giữ được ấn tượng tích cực.",
        ],
        images: [photo(
          "kinza-sashimi-set-20260721",
          "Đĩa sashimi tổng hợp cắt dày gồm cá ngừ, cá hồi, cá thịt trắng, bạch tuộc, sò và trứng cá",
          "Set sashimi tổng hợp — miếng cá dày và có kết cấu tốt",
        )],
      },
      {
        heading: "Set sushi: shari hơi mềm, phần topping lại có nhiều điểm sáng",
        paragraphs: [
          "Set sushi tiếp theo có thành phần khá cân bằng, từ cá hồi, cá trắng, cá ngừ, tôm, lươn đến những miếng có trứng cá và uni. Phần cơm sushi, hay shari, hơi mềm và ẩm hơn khẩu vị của tôi. Tôi thường thích hạt cơm tơi và có độ đứng rõ hơn, nên đây là một khác biệt nhỏ về sở thích.",
          "Bù lại, chất lượng phần nguyên liệu phía trên khiến cả set vẫn ngon. Miếng tôm cho cảm giác được xử lý tại bếp thay vì loại thành phẩm công nghiệp đồng đều thường gặp. Ba miếng sushi có trứng cá, cá hồi roe và uni ở hàng dưới cũng mang ba cá tính riêng, không phải chỉ thay màu để làm đĩa trông phong phú.",
          "Tôi đặc biệt thích việc mỗi miếng đều có lý do để thử. Miếng béo, miếng mặn dịu và miếng có cảm giác biển rõ được đặt cạnh nhau, giúp cả ba người có thể chia sẻ rồi so sánh. Nếu shari săn hơn một chút theo đúng khẩu vị của tôi, set này sẽ còn trọn vẹn hơn; còn xét riêng topping và cách sắp xếp, tôi thấy cấu hình hoàn toàn hợp lý.",
        ],
        images: [photo(
          "kinza-sushi-set-20260721",
          "Set sushi nhiều loại với cá hồi, cá trắng, cá ngừ, tôm, lươn, trứng cá và uni",
          "Set sushi — shari hơi mềm với tôi, nhưng topping đa dạng và đáng nhớ",
        )],
      },
      {
        heading: "Foie gras, uni và cá ngừ cao cấp: đắt hơn nhưng nguyên liệu có sức thuyết phục",
        paragraphs: [
          "Ngoài set chính, chúng tôi gọi thêm hai miếng sushi foie gras. Foie gras được nấu với vị xì dầu vừa đủ, tạo độ đậm đà mà không che mất chất béo mềm. Khi ăn cùng cơm và dải rong biển, phần gan gần như tan ra, để lại vị umami kéo dài. Giá không thấp, nhưng nếu muốn thử một miếng sushi khác hẳn cá sống thông thường thì đây là lựa chọn đáng cân nhắc.",
          "Chúng tôi cũng gọi hai miếng uni và hai miếng cá ngừ thuộc phần cao cấp hơn. Hai đĩa này có giá lần lượt ở khoảng hai trăm nghìn và ba trăm nghìn đồng, nhưng tôi không còn nhớ chắc mức nào ứng với từng loại nên không gắn con số cụ thể vào tên món. Điều tôi nhớ rõ hơn là chất lượng: uni đầy đặn, có độ kem và vị biển sạch; cá ngừ mềm, phần mỡ phân bố đẹp và không cần nhiều gia vị để tạo ấn tượng.",
          "Đây là nhóm món mà giá trị nằm trực tiếp ở nguyên liệu. Chỉ nhìn số miếng có thể thấy đắt, nhưng sau khi ăn tôi vẫn công nhận mức chất lượng tương xứng. Người muốn giữ ngân sách có thể bỏ qua mà bữa ăn vẫn đầy đủ; người tìm một trải nghiệm đặc biệt hơn sẽ thấy những món gọi thêm này tạo khác biệt rõ.",
        ],
        images: [
          photo(
            "kinza-foie-gras-sushi-20260721",
            "Hai miếng sushi foie gras phủ sốt xì dầu và cố định bằng dải rong biển",
            "Sushi foie gras gồm 2 miếng — mềm, đậm vị và có umami rõ",
          ),
          photo(
            "kinza-uni-tuna-sushi-20260721",
            "Hai miếng sushi uni và hai miếng sushi cá ngừ cao cấp trên đĩa dài",
            "Uni và cá ngừ cao cấp — giá cao nhưng chất lượng nguyên liệu thuyết phục",
          ),
        ],
      },
      {
        heading: "Dassai 45 cỡ 1,8 lít và một cảm giác khác trên đầu lưỡi",
        paragraphs: [
          "Người em đi cùng rất thích sake và đề xuất Dassai 45 Junmai Daiginjo. Chúng tôi chọn chai 1.800 ml, giá in trên menu là 2.400.000 đồng và chưa gồm VAT. Đây là một trong những lý do chính khiến tổng hóa đơn tối đó tăng mạnh.",
          "Những loại sake tôi từng uống trước đây thường để lại ấn tượng chủ yếu ở sự êm và dễ trôi. Dassai 45 vẫn mượt, nhưng lúc vừa chạm lưỡi lại có một cảm giác kích thích nhẹ, tạo độ sống động thay vì chỉ mềm từ đầu đến cuối. Tôi không ghi chép theo kiểu nếm rượu chuyên nghiệp nên không gán cho nó những tầng hương mình không chắc; điều tôi có thể nói là cảm giác ấy rất riêng và khiến chai rượu trở thành một phần đáng nhớ của bữa tối.",
          "Vợ tôi không uống rượu, vì vậy chỉ có hai người chia chai 1,8 lít. Chúng tôi uống khoảng một nửa rồi gửi phần còn lại tại nhà hàng. Việc giữ rượu vừa hợp lý hơn cố uống hết, vừa cho chúng tôi một lý do rõ ràng để quay lại KINZA trong một dịp khác.",
        ],
        images: [
          photo(
            "kinza-dassai45-bottle-20260721",
            "Chai Dassai 45 Junmai Daiginjo cỡ 1,8 lít được giữ lạnh trong xô tại bàn",
            "Dassai 45 cỡ 1,8 lít do người em đi cùng đề xuất",
          ),
          photo(
            "kinza-dassai45-menu-20260721",
            "Trang menu sake ghi Dassai 45 Junmai Daiginjo 1.800 ml giá 2.400.000 đồng chưa gồm VAT",
            "Giá Dassai 45 trên menu tại thời điểm 21/7/2026",
          ),
        ],
      },
      {
        heading: "Tempura giữ được độ giòn ngay cả khi chấm tentsuyu",
        paragraphs: [
          "Sau các món sống, chúng tôi gọi thêm cơm nắm cá hồi nướng và tempura tổng hợp. Cơm nắm có mặt ngoài được nướng vàng, phần cơm ấm giúp chuyển nhịp tốt sau nhiều miếng sashimi và sushi lạnh. Đây không phải món phô diễn nguyên liệu đắt tiền, nhưng tạo cảm giác dễ chịu và chắc bụng.",
          "Tempura làm đúng điều tôi chờ ở món chiên kiểu Nhật: lớp áo nhẹ, giòn và không cho cảm giác nặng dầu. Nước chấm đi kèm là tentsuyu, loại sốt thường kết hợp xì dầu với nước dùng dashi và mirin. Phiên bản tại KINZA có độ mặn vừa phải, nên tôi có thể nhúng miếng tempura khá sâu mà không bị mặn gắt.",
          "Điểm tôi thích là lớp vỏ vẫn giữ được độ giòn sau khi chấm. Tôm và rau củ có kết cấu riêng, không bị biến thành một khối bột chiên giống nhau. Trong nhóm món nóng của buổi tối, tempura là lựa chọn an toàn nhưng được thực hiện chắc tay.",
        ],
        images: [photo(
          "kinza-tempura-onigiri-20260721",
          "Đĩa tempura tổng hợp và cơm nắm cá hồi nướng đặt trên hai loại đĩa Nhật",
          "Tempura và cơm nắm nướng — món nóng giúp cân bằng bữa ăn nhiều đồ sống",
        )],
      },
      {
        heading: "Okonomiyaki ngon theo kiểu nhẹ, chỉ là chưa đúng gu của tôi",
        paragraphs: [
          "Món cuối cùng là okonomiyaki. Sau chín năm sống ở Việt Nam, tôi vẫn chưa tìm được một nơi có okonomiyaki hoàn toàn đúng sở thích cá nhân. Tôi thích loại bánh dày, nhiều lớp và có cảm giác nặng, chắc khi cắt.",
          "Phiên bản của KINZA đi theo hướng nhẹ và thanh hơn. Bánh vẫn ngon, mặt bánh có màu đẹp, cá bào và sốt tạo đủ đặc trưng, nhưng độ dày và cảm giác nặng không mạnh như kiểu tôi tìm kiếm. Vì vậy đây là một chút tiếc nuối về phong cách, không phải kết luận rằng món được làm kém.",
          "Người thích okonomiyaki mềm, dễ ăn và không quá nặng có thể hợp với phiên bản này hơn tôi. Việc nói rõ gu cá nhân quan trọng, bởi cùng một đặc điểm ‘nhẹ’ có thể là điểm trừ với người này nhưng lại là ưu điểm với người khác.",
        ],
        images: [photo(
          "kinza-okonomiyaki-20260721",
          "Okonomiyaki phủ cá bào, sốt, mayonnaise và gừng đỏ trên đĩa tròn",
          "Okonomiyaki của KINZA — ngon và nhẹ, nhưng tôi thích kiểu dày, nặng hơn",
        )],
      },
      {
        heading: "Đừng dùng hóa đơn tối đó để đo mức giá của một bữa ăn bình thường",
        paragraphs: [
          "Tổng thanh toán của chúng tôi khá cao, nhưng cách gọi món hôm đó không đại diện cho một bữa ăn phổ thông. Chai sake 1,8 lít đã có giá 2,4 triệu đồng trước VAT; ngoài các set, chúng tôi còn thêm foie gras, uni và cá ngừ cao cấp. Những lựa chọn ấy đẩy hóa đơn lên nhanh là điều dễ hiểu.",
          "Nếu đi KINZA và gọi set cùng vài món phổ thông vừa đủ, tôi không nghĩ đây là nơi chỉ dành cho ngày kỷ niệm. Khách hoàn toàn có thể kiểm soát ngân sách bằng cách xem giá trước, chọn chai nhỏ hơn hoặc không gọi rượu, rồi chỉ thêm một món đặc biệt để chia sẻ.",
          "Các món premium đương nhiên có giá cao hơn, nhưng trong lần ăn này, hương vị và chất lượng nguyên liệu đủ để tôi thừa nhận sự chênh lệch. Điều quan trọng là phân biệt ‘nhà hàng luôn đắt’ với ‘hóa đơn cao vì chúng tôi chủ động chọn nhiều món đắt’. KINZA thuộc trường hợp thứ hai trong trải nghiệm của tôi.",
        ],
      },
      {
        heading: "Một vài chi tiết có thể tăng cảm giác Nhật — và người bảo vệ khiến tôi nhớ nhất",
        paragraphs: [
          "Nếu đứng ở góc nhìn của một người cũng đang kinh doanh, tôi sẽ thử thêm nhạc nền có màu sắc Nhật rõ hơn và cân nhắc đồng phục gắn với không gian hiện tại. Nhà hàng đã có chào hỏi bằng tiếng Nhật và cách phản hồi đơn hàng khá đúng tinh thần, nên chỉ cần bổ sung một chút ở âm thanh và trang phục là cảm giác trải nghiệm văn hóa có thể liền mạch hơn. Đây là đề xuất nhỏ dành cho một nơi vốn đã làm tốt nhiều phần, không phải phê bình nặng.",
          "Người để lại ấn tượng mạnh nhất ngoài bàn ăn lại là chú bảo vệ. Chú chủ động, lịch sự và thân thiện đến mức tôi hỏi xem chú thuộc công ty dịch vụ nào vì muốn tham khảo cho cửa hàng của mình. Câu trả lời là chú được nhà hàng tuyển trực tiếp chứ không phải nhân sự do một đơn vị bên ngoài cử đến.",
          "Tôi không biết toàn bộ quy trình đào tạo nội bộ, nên không thể khẳng định mọi chi tiết đến từ một chương trình cụ thể. Tuy nhiên, khi sự chỉn chu kéo dài từ bếp, bàn ăn, nhân viên phục vụ đến người đón khách ngoài cửa, tôi có cơ sở để cảm nhận người quản lý thật sự quan tâm đến cách nhà hàng vận hành. Đó là lời khen lớn nhất tôi có thể dành cho KINZA sau bữa tối này.",
        ],
        quote: "Món ngon khiến tôi muốn quay lại; cách người bảo vệ đón khách khiến tôi tin sự tử tế ở đây không phải chuyện ngẫu nhiên.",
      },
      {
        heading: "Kết luận: địa chỉ sushi tốt nhất tôi từng thử tại Bắc Ninh tính đến lúc này",
        paragraphs: [
          "Trong phạm vi những nhà hàng tôi đã trực tiếp thử tại Bắc Ninh, KINZA hiện cho tôi chất lượng sushi cao nhất. Điểm mạnh nằm ở nguyên liệu, cách cắt và bày món, những lựa chọn đặc biệt đủ sức thuyết phục, không gian đẹp và thái độ phục vụ nhất quán.",
          "Một vài điểm chưa hoàn toàn đúng gu của tôi gồm cơm sushi hơi mềm, set sashimi có thể đa dạng hơn và okonomiyaki đi theo phong cách nhẹ. Chúng đều là những tiếc nuối nhỏ, không làm thay đổi đánh giá chung. Tôi vẫn sẵn sàng giới thiệu KINZA cho người muốn ăn sushi chất lượng tại Bắc Ninh hoặc cần một nơi đủ đẹp để tiếp khách và dùng bữa cùng gia đình.",
          "Nếu muốn ăn với ngân sách vừa phải, hãy chọn set và giới hạn món cao cấp. Nếu muốn biến bữa tối thành trải nghiệm đặc biệt, foie gras, uni, cá ngừ cao cấp và sake tạo thêm nhiều câu chuyện để nhớ. Riêng chúng tôi chắc chắn còn quay lại, bởi nửa chai Dassai 45 vẫn đang được giữ tại nhà hàng.",
        ],
      },
    ],
  },
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
    publishedAt: "2026-07-21T09:40:00+07:00",
    updatedAt: "2026-07-21T09:52:00+07:00",
    editorialNote: "Bài do Kim viết từ trải nghiệm trực tiếp ngày 20/7/2026. Toàn bộ chi phí do tác giả thanh toán, không tài trợ và không có liên kết nhận hoa hồng. Ảnh do tác giả chụp; dữ liệu định vị và thông tin thiết bị đã được loại bỏ khi tối ưu ảnh.",
    keyFacts: [
      { label: "THỜI ĐIỂM TRẢI NGHIỆM", value: "20/7/2026", note: "Bữa tối sinh nhật tại Hà Nội; giá và món ăn phản ánh đúng lần ghé này." },
      { label: "TASTING MENU", value: "1.980.000đ/người", note: "Mức in trên thực đơn tại bàn, chưa gồm 5% phí phục vụ và thuế." },
      { label: "WINE PAIRING", value: "+990.000đ/người", note: "Hai vợ chồng đều chọn ghép rượu theo món trong lần trải nghiệm này." },
      { label: "NÂNG CẤP MÓN THỊT", value: "+650.000đ", note: "Vợ tôi đổi sang Wagyu với phụ phí 200.000đ; một phần truffle 450.000đ được chia cho hai đĩa." },
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
          "Cách ghi này cũng giúp làm rõ cấu trúc menu: Murray Cod và món thịt không phải hai lựa chọn loại trừ nhau. Cá tuyết Murray, trứng mực và phần thịt nằm ở các chặng khác nhau; lựa chọn thực sự ở phần thịt là lamb rack hoặc Wagyu phụ phí. Tôi giữ lamb rack, còn vợ đổi phần của cô ấy sang Australian Wagyu flap với phụ phí 200.000 đồng. Chúng tôi gọi thêm một phần nấm truffle 450.000 đồng để thử. Tổng sau nước có ga, phí phục vụ và thuế vào khoảng 7,5 triệu đồng.",
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
          "Bí non nướng và sốt màu cam tạo phần khung cho trứng mực. Trong sốt còn có những miếng nhỏ, khi nhai tôi cảm giác chúng giống thịt hơn là những mảnh trứng mực; tuy nhiên tôi không hỏi lại nên không thể xác nhận chính xác đó là loại thịt hay nguyên liệu nào. Lớp kết cấu bất ngờ ấy vẫn khiến món ăn thú vị hơn. Cả hai vợ chồng đều phản ứng gần như cùng lúc, không cần trao đổi nhiều để thống nhất đây là điểm cao nhất của tối hôm đó.",
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
        heading: "Tôi chọn lamb rack, vợ chọn Wagyu và phần truffle được chia đôi",
        paragraphs: [
          "Ở chặng thịt, tôi chọn lamb rack, còn vợ chọn Australian Wagyu flap với phụ phí 200.000 đồng. Nhà hàng cũng có tùy chọn thêm nấm truffle với mức 450.000 đồng. Ban đầu tôi chỉ nhờ thêm truffle vào đĩa của vợ để cả hai cùng nếm thử, nhưng nhân viên chủ động chia phần nấm cho hai đĩa. Một chi tiết phục vụ nhỏ, song đúng kiểu tinh tế khiến khách cảm thấy yêu cầu của mình được hiểu chứ không chỉ được ghi lại.",
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
            "Đĩa lamb rack của tác giả với nấm truffle bào, sốt sẫm màu, rau củ và hoa ăn được",
            "Lamb rack của tôi — thịt mềm, nhưng sốt mặn và nhiều làm hương truffle giảm",
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
