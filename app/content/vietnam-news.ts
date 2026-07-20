import type { CommunityPost } from "./community-posts";

export const vietnamNews: CommunityPost[] = [
  {
    slug: "du-bao-thoi-tiet-viet-nam-thang-7-2026",
    kind: "news",
    category: "Tin mới Việt Nam · Thời tiết",
    title: "Tháng 7 nóng hơn thường lệ: đọc dự báo theo từng vùng thế nào?",
    summary: "Nhiệt độ trung bình cao hơn 0,5–1°C, mưa ở Bắc Bộ và Thanh Hóa–Hà Tĩnh có thể vượt trung bình 15–30%; bài viết tách rõ xu hướng tháng, khác biệt vùng và thông tin cần kiểm tra mỗi ngày.",
    readTime: "10 phút đọc",
    hero: "WEATHER\nCHECK",
    publishedAt: "2026-07-20T00:30:00+07:00",
    updatedAt: "2026-07-20T08:10:00+07:00",
    images: [{
      src: "/images/editorial/vietnam-weather-july-2026.jpg",
      alt: "Minh họa người đi làm tại Việt Nam kiểm tra dự báo khi nắng nóng và mưa dông cùng xuất hiện",
    }],
    keyFacts: [
      { label: "NHIỆT ĐỘ TRUNG BÌNH", value: "+0,5–1,0°C", note: "Mức phổ biến trên toàn quốc so với trung bình nhiều năm." },
      { label: "MƯA BẮC BỘ", value: "+15–30%", note: "Mức dự báo tại Bắc Bộ và Thanh Hóa–Hà Tĩnh so với trung bình cùng kỳ." },
      { label: "MƯA PHÍA NAM", value: "Chiều & đêm", note: "Nhiều ngày có mưa rào, dông ở Cao nguyên Trung Bộ và Nam Bộ." },
    ],
    sourceLinks: [{
      label: "Trung tâm Dự báo Khí tượng Thủy văn Quốc gia — Dự báo khí hậu tháng 7/2026",
      url: "https://nchmf.gov.vn/kttvsite/vi-VN/1/ban-tin-du-bao-khi-hau-thoi-han-thang-tren-pham-vi-toan-quoc-thang-7-2026-post53268.html",
    }],
    sections: [
      {
        heading: "Ba con số nói gì — và không nói gì?",
        paragraphs: [
          "Bản tin khí hậu tháng 7/2026 của Trung tâm Dự báo Khí tượng Thủy văn Quốc gia cho biết nhiệt độ trung bình trên toàn quốc phổ biến cao hơn trung bình nhiều năm 0,5–1,0°C. Tổng lượng mưa ở phần lớn cả nước được dự báo xấp xỉ trung bình, riêng Bắc Bộ và dải Thanh Hóa–Hà Tĩnh có thể cao hơn 15–30%. Đây là các mức trung bình cho một khoảng thời gian và phạm vi rộng, không phải nhiệt độ hoặc lượng mưa của từng ngày tại từng quận, huyện.",
          "Một mức chênh 0,5°C trong trung bình tháng không có nghĩa mọi ngày đều chỉ nóng hơn đúng 0,5°C. Tháng có thể gồm những ngày rất nóng xen kẽ ngày dịu hơn; giá trị trung bình gộp tất cả lại. Tương tự, lượng mưa tháng cao hơn không cho biết mưa sẽ phân bố đều. Một vài đợt mưa lớn trong thời gian ngắn có thể đóng góp phần đáng kể vào tổng lượng mưa.",
        ],
      },
      {
        heading: "Bắc Bộ và Trung Bộ: nắng nóng có thể đi cùng mưa lớn",
        paragraphs: [
          "Bản tin nêu khả năng Bắc Bộ và Trung Bộ tiếp tục xuất hiện nhiều ngày nắng nóng, với số ngày nóng có thể cao hơn trung bình nhiều năm. Có nơi có thể xảy ra nắng nóng gay gắt hoặc đặc biệt gay gắt. Đồng thời, mưa lớn diện rộng được dự báo tập trung chủ yếu tại Bắc Bộ và Thanh Hóa–Hà Tĩnh. Hai thông tin này không mâu thuẫn: một khu vực có thể trải qua thời kỳ nóng kéo dài rồi chuyển nhanh sang mưa dông mạnh.",
          "Với sinh hoạt hằng ngày, nên tách kế hoạch thành hai lần kiểm tra. Buổi sáng xem cảnh báo nắng nóng, nhiệt độ cực đại và chỉ số liên quan tại địa phương; trước giờ tan tầm xem bản tin ngắn hạn về mưa, dông, gió giật và điểm ngập. Một biểu tượng thời tiết duy nhất trên màn hình khóa không thể hiện đầy đủ sự chuyển đổi nhanh giữa nóng và dông.",
        ],
        quote: "Dự báo tháng giúp chuẩn bị nguồn lực; quyết định trong ngày phải dựa vào bản tin mới nhất tại nơi bạn đang ở.",
      },
      {
        heading: "Cao nguyên Trung Bộ và Nam Bộ: chú ý khung giờ chiều, đêm",
        paragraphs: [
          "Theo nguồn chính thức, Cao nguyên Trung Bộ và Nam Bộ có thể có nhiều ngày mưa rào và dông, một số ngày có mưa vừa đến mưa to; thời gian mưa tập trung vào chiều và đêm. Điều cần quan tâm không chỉ là có mưa hay không, mà là cường độ, gió kèm theo và tình trạng thoát nước tại tuyến đường cụ thể. Cùng một đợt dông, các khu vực cách nhau không xa vẫn có thể nhận lượng mưa rất khác.",
          "Người đi xe máy nên chuẩn bị áo mưa gọn, bọc chống nước cho thiết bị và một tuyến thay thế qua khu vực ít ngập. Nếu dông có sét hoặc gió mạnh, tìm nơi trú kiên cố thay vì đứng dưới cây lớn, mái che tạm hoặc tiếp tục đi chỉ để kịp lịch. Người làm việc ngoài trời cần theo quy trình của đơn vị và cảnh báo địa phương, không dựa riêng vào bài giải thích này.",
        ],
      },
      {
        heading: "Bão, dông và thời tiết trên biển cần được đọc riêng",
        paragraphs: [
          "Bản tin tháng đánh giá hoạt động bão và áp thấp nhiệt đới trên Biển Đông, cũng như khả năng ảnh hưởng trực tiếp đến đất liền Việt Nam, ở mức tương đương trung bình nhiều năm. Nguồn chính thức nêu giá trị trung bình nhiều năm khoảng 1,6 cơn trên Biển Đông và 0,9 cơn đổ bộ đất liền trong tháng 7. Đây là thống kê nền để mô tả mức hoạt động, không phải dự đoán chính xác số cơn sẽ xảy ra trong tháng này.",
          "Dông, lốc, sét, mưa đá và gió giật có khả năng xảy ra trên nhiều khu vực; cường độ mạnh có thể tập trung hơn ở Bắc Bộ, Thanh Hóa–Hà Tĩnh, Cao nguyên Trung Bộ và Nam Bộ. Trên biển, gió mạnh có thể liên quan đến dông cục bộ, gió mùa Tây Nam hoặc xoáy thuận nhiệt đới. Người đi biển phải mở bản tin chuyên ngành về gió, sóng, nước dâng và cảnh báo hàng hải mới nhất.",
        ],
      },
      {
        heading: "Quy trình kiểm tra hai phút trước khi ra đường",
        paragraphs: [
          "Bước một, xác định đúng địa điểm thay vì chỉ xem tên tỉnh. Bước hai, kiểm tra thời điểm phát hành và khoảng thời gian dự báo. Bước ba, đọc phần cảnh báo đi kèm như dông, gió giật hoặc ngập. Bước bốn, nếu hoạt động phụ thuộc nhiều vào thời tiết — đi biển, làm ngoài trời, di chuyển đường dài — mở thêm bản tin chuyên ngành hoặc thông báo của cơ quan địa phương.",
          "Google Trends có thể cho thấy người Việt đang tìm nhiều về thời tiết hoặc một hiện tượng cụ thể, nhưng lượng tìm kiếm không xác nhận mức độ nguy hiểm. Dabangzz dùng xu hướng tìm kiếm để nhận biết câu hỏi của độc giả, còn dữ kiện phải quay về nguồn khí tượng chính thức. Khi bản tin mới thay đổi đáng kể đánh giá theo vùng, bài viết cần được cập nhật lại thời gian và nội dung.",
        ],
      },
    ],
  },
  {
    slug: "thuy-trieu-viet-nam-19-28-7-2026",
    kind: "news",
    category: "Tin mới Việt Nam · Biển",
    title: "Thủy triều 19–28/7: số liệu Hòn Dấu, Quy Nhơn và Vũng Tàu khác nhau ra sao?",
    summary: "Bản tin 10 ngày công bố giờ và khoảng mực nước tại ba trạm đại diện; đây là bảng so sánh đầy đủ, cách hiểu xu hướng theo vùng và những giới hạn cần nhớ trước khi dùng số liệu.",
    readTime: "11 phút đọc",
    hero: "TIDE\nWATCH",
    publishedAt: "2026-07-20T00:45:00+07:00",
    updatedAt: "2026-07-20T08:10:00+07:00",
    images: [{
      src: "/images/editorial/vietnam-tide-july-2026.jpg",
      alt: "Minh họa người dân quan sát mực nước thay đổi tại một khu vực ven biển Việt Nam giả định",
    }],
    keyFacts: [
      { label: "HÒN DẤU · NƯỚC LỚN", value: "302–327cm", note: "Khung giờ 15:00–17:00 trong bản tin 10 ngày." },
      { label: "QUY NHƠN · NƯỚC LỚN", value: "184–190cm", note: "Khung giờ 07:00–09:00; vùng Trung Bộ đang ở pha triều thấp." },
      { label: "VŨNG TÀU · NƯỚC LỚN", value: "341–353cm", note: "Khung giờ 05:00–07:00; xu hướng vùng giảm đến 26/7 rồi tăng." },
      { label: "HÒN DẤU · NƯỚC RÒNG", value: "31–47cm", note: "Khung giờ 03:00–05:00." },
      { label: "QUY NHƠN · NƯỚC RÒNG", value: "88–91cm", note: "Khung giờ 16:00–18:00." },
      { label: "VŨNG TÀU · NƯỚC RÒNG", value: "55–88cm", note: "Khung giờ 18:00–20:00." },
    ],
    sourceLinks: [{
      label: "Trung tâm Dự báo Khí tượng Thủy văn Quốc gia — Dự báo thủy triều 19–28/7/2026",
      url: "https://www.nchmf.gov.vn/kttv/vi-VN/1/ban-tin-du-bao-thuy-trieu-10-ngay-tu-14-07-den-23-07-2026-post52366.html",
    }],
    sections: [
      {
        heading: "Bản tin chính thức đang so sánh những gì?",
        paragraphs: [
          "Trung tâm Dự báo Khí tượng Thủy văn Quốc gia phát bản tin lúc 09:30 ngày 19/7/2026 cho giai đoạn từ 19 đến 28/7. Bản tin chia bờ biển thành Bắc Bộ, Trung Bộ và Nam Bộ, đồng thời đưa số liệu tại ba trạm đại diện: Hòn Dấu, Quy Nhơn và Vũng Tàu. Mỗi trạm có khoảng mực nước lớn, mực nước ròng và khung giờ tương ứng trong kỳ dự báo.",
          "Các con số được đặt cạnh nhau để người đọc thấy nhịp triều khác biệt, không phải để xếp hạng nơi nào ‘nguy hiểm hơn’. Mốc 300cm tại một trạm không thể so trực tiếp với 190cm ở trạm khác nếu bỏ qua mốc đo, địa hình, vị trí trạm và hệ thống tham chiếu. Giá trị hữu ích nhất là dữ liệu đúng trạm, đúng ngày và đúng mục đích sử dụng.",
        ],
      },
      {
        heading: "Bắc Bộ: Hòn Dấu và nhịp giảm đến 22/7",
        paragraphs: [
          "Ven biển Bắc Bộ đang trong giai đoạn triều trung bình, có xu hướng giảm đến ngày 22/7 rồi tăng. Tại Hòn Dấu, nước lớn được dự báo trong khoảng 302–327cm, thường rơi vào khung 15:00–17:00; nước ròng khoảng 31–47cm, trong khung 03:00–05:00. Đây là khoảng tổng hợp cho kỳ 10 ngày, không phải một cặp giá trị cố định lặp lại mỗi ngày.",
          "Người cần thời điểm chính xác cho bến tàu, nuôi trồng, khai thác bãi triều hoặc công việc ven biển phải xem bảng chi tiết của ngày tương ứng và trạm gần nhất. Một điểm trong cửa sông có thể phản ứng khác khu vực ngoài biển do dòng chảy, gió và mưa. Nếu có cảnh báo riêng về triều cường, sóng hoặc nước dâng, cảnh báo mới hơn được ưu tiên.",
        ],
      },
      {
        heading: "Trung Bộ và Nam Bộ: cùng giảm rồi tăng nhưng khác ngày",
        paragraphs: [
          "Ven biển Trung Bộ đang ở giai đoạn triều thấp, giảm đến ngày 21/7 rồi tăng. Tại Quy Nhơn, nước lớn khoảng 184–190cm trong khung 07:00–09:00, còn nước ròng khoảng 88–91cm trong khung 16:00–18:00. Khoảng dao động được công bố hẹp hơn hai trạm còn lại, nhưng điều đó không tự động nói rằng mọi hoạt động ven biển đều an toàn.",
          "Ven biển Nam Bộ ở giai đoạn triều trung bình, có xu hướng giảm đến ngày 26/7 rồi tăng. Tại Vũng Tàu, nước lớn khoảng 341–353cm trong khung 05:00–07:00; nước ròng khoảng 55–88cm trong khung 18:00–20:00. Ngày chuyển xu hướng muộn hơn Bắc Bộ và Trung Bộ là điểm khác biệt đáng chú ý khi lập kế hoạch nhiều ngày.",
        ],
        quote: "Một con số mực nước chỉ có ý nghĩa khi đi cùng tên trạm, ngày, khung giờ và điều kiện thời tiết.",
      },
      {
        heading: "Vì sao mưa, gió và sóng có thể làm kế hoạch thay đổi?",
        paragraphs: [
          "Lịch thủy triều mô tả dao động mực nước do triều, nhưng trải nghiệm thực tế còn chịu ảnh hưởng của gió, sóng, nước dâng và lượng nước từ sông. Ở đô thị ven sông, mưa lớn trùng thời điểm nước cao có thể làm thoát nước chậm hơn. Ở bãi đá hoặc cửa biển, sóng và gió mạnh có thể tạo rủi ro ngay cả khi mực triều nhìn có vẻ thuận lợi.",
          "Vì vậy, người đi chơi ven biển không nên dùng bảng triều như giấy xác nhận an toàn. Cần mở thêm dự báo sóng, gió và thời tiết biển; kiểm tra biển báo, giờ hoạt động và hướng dẫn tại chỗ. Người vận hành tàu hoặc làm nghề phụ thuộc trực tiếp vào mực nước phải tuân theo bản tin chuyên môn và quy trình của đơn vị, không dựa riêng vào bản tóm tắt báo chí.",
        ],
      },
      {
        heading: "Cách chia sẻ số liệu mà không làm người khác hiểu sai",
        paragraphs: [
          "Khi gửi thông tin, hãy ghi đủ ‘trạm – ngày – khung giờ – loại mực nước – nguồn’. Ví dụ, ‘nước lớn Hòn Dấu, dự báo trong kỳ 19–28/7, khoảng 302–327cm, khung 15:00–17:00’ rõ hơn nhiều so với ảnh chụp riêng con số 327cm. Không gắn dữ liệu của Hòn Dấu cho toàn bộ miền Bắc hoặc dữ liệu Vũng Tàu cho mọi tuyến sông tại Nam Bộ.",
          "Google Trends có thể cho thấy nhu cầu tìm kiếm về triều, mưa hoặc ngập tăng lên, nhưng không thay thế đo đạc và cảnh báo chính thức. Dabangzz dùng tín hiệu đó để biết độc giả cần bảng so sánh dễ hiểu, sau đó đối chiếu với bản tin của cơ quan khí tượng. Trước chuyến đi, hãy mở liên kết nguồn ở cuối bài để xem bản cập nhật mới nhất thay vì lưu bài này như lịch cố định.",
        ],
      },
    ],
  },
  {
    slug: "an-toan-dap-ho-chua-truoc-mua-lu-2026",
    kind: "news",
    category: "Tin mới Việt Nam · An toàn",
    title: "An toàn đập, hồ chứa trước mưa lớn: địa phương phải kiểm tra những gì?",
    summary: "Yêu cầu mới bao gồm kiểm tra công trình, hạn chế tích nước ở hồ chưa đủ an toàn, thử cửa van, duy trì quan trắc và cập nhật dữ liệu; bài viết giải thích từng đầu việc và thông tin người dân hạ du cần biết.",
    readTime: "11 phút đọc",
    hero: "RESERVOIR\nSAFETY",
    publishedAt: "2026-07-20T01:00:00+07:00",
    updatedAt: "2026-07-20T08:10:00+07:00",
    images: [{
      src: "/images/editorial/vietnam-reservoir-safety-2026.jpg",
      alt: "Minh họa nhóm kỹ sư kiểm tra an toàn một hồ chứa giả định trước thời tiết xấu",
    }],
    keyFacts: [
      { label: "VĂN BẢN ĐƯỢC NÊU", value: "15/7/2026", note: "Thời điểm Báo Điện tử Chính phủ đăng thông tin về yêu cầu của Bộ." },
      { label: "HẠN BÁO CÁO", value: "Trước 25/7", note: "Địa phương báo cáo kết quả triển khai để tổng hợp, theo dõi." },
      { label: "DỮ LIỆU PHẢI CẬP NHẬT", value: "3 nhóm", note: "Mực nước, dung tích hồ và lưu lượng xả trên hệ thống quản lý thủy lợi." },
      { label: "THIẾT BỊ TRỌNG TÂM", value: "Cửa van", note: "Kiểm tra điện, thiết bị đóng mở, giám sát và tổ chức vận hành thử." },
      { label: "HỒ CHƯA ĐỦ AN TOÀN", value: "Hạn chế tích nước", note: "Áp dụng với hồ có nguy cơ, đang hư hỏng hoặc thi công theo đánh giá quản lý." },
      { label: "PHƯƠNG CHÂM ỨNG PHÓ", value: "4 tại chỗ", note: "Kèm trực ban, kiểm tra và phương án xử lý sự cố." },
    ],
    sourceLinks: [{
      label: "Báo Điện tử Chính phủ — Giữ an toàn đập, hồ chứa trước nguy cơ mưa lũ",
      url: "https://baochinhphu.vn/giu-an-toan-dap-ho-chua-thuy-loi-truoc-nguy-co-mua-lu-cuc-doan-102260715072118233.htm",
    }],
    sections: [
      {
        heading: "Đây là yêu cầu phòng ngừa, không phải thông báo mọi hồ đều có sự cố",
        paragraphs: [
          "Ngày 15/7/2026, Báo Điện tử Chính phủ cho biết Bộ Nông nghiệp và Môi trường đề nghị các tỉnh, thành phố có đập và hồ chứa thủy lợi tăng cường biện pháp bảo đảm an toàn công trình và vùng hạ du. Trọng tâm là kiểm tra hiện trạng, năng lực vận hành và phương án ứng phó trước nguy cơ mưa lớn cường độ cao trong thời gian ngắn.",
          "Thông tin này không có nghĩa mọi hồ chứa đang mất an toàn hoặc sắp xả lũ. Văn bản yêu cầu quản lý rủi ro trước khi tình huống xấu xảy ra. Việc kiểm tra sớm, thử thiết bị và cập nhật dữ liệu là dấu hiệu của chuẩn bị vận hành; tiêu đề gây hoảng sợ hoặc gắn sự cố cho một hồ cụ thể khi chưa có thông báo là cách diễn giải sai.",
        ],
      },
      {
        heading: "Nhóm hồ nào cần được chú ý đặc biệt?",
        paragraphs: [
          "Các địa phương được yêu cầu đánh giá hiện trạng công trình và năng lực của đơn vị quản lý, khai thác; thực hiện phân cấp quản lý đúng quy định và củng cố tổ chức chưa đáp ứng yêu cầu. Với hồ có nguy cơ mất an toàn, đang hư hỏng hoặc đang thi công, đơn vị quản lý và chủ đầu tư phải kiểm tra thường xuyên, triển khai giải pháp bảo đảm an toàn cho cả công trình lẫn khu vực hạ du.",
          "Nguồn chính thức nêu việc hạn chế tích nước đối với hồ chưa đủ điều kiện an toàn. Đây là quyết định kỹ thuật thuộc cơ quan và đơn vị có thẩm quyền, dựa trên tình trạng cụ thể; người dân không nên tự suy luận từ hình ảnh mực nước hoặc tin nhắn không rõ ngày. Thông báo vận hành chính thức tại địa phương mới là căn cứ cho hành động.",
        ],
      },
      {
        heading: "Cửa van, nguồn điện và hệ thống quan trắc phải được thử",
        paragraphs: [
          "Với hồ có cửa van điều tiết, yêu cầu bao gồm rà soát và điều chỉnh quy trình vận hành, kiểm tra hệ thống cấp điện, thiết bị đóng mở cửa van, hệ thống giám sát và thiết bị liên quan. Đơn vị quản lý cần tổ chức vận hành thử cửa van thay vì chờ đến khi mưa lớn mới phát hiện trục trặc. Hệ thống quan trắc khí tượng thủy văn chuyên dùng cũng phải được duy trì ổn định.",
          "Kịch bản vận hành cần linh hoạt theo từng tình huống mưa lớn và được điều chỉnh bằng dự báo mới. Một kịch bản tốt phải trả lời ai nhận dữ liệu, ai quyết định, cách thông báo cho hạ du và phương án khi điện hoặc thiết bị chính gặp vấn đề. Dabangzz chỉ giải thích các đầu việc được công bố, không đánh giá chất lượng kỹ thuật của bất kỳ đập hay hồ cụ thể nào.",
        ],
        quote: "Kiểm tra trước mưa lớn nhằm giảm bất ngờ trong vận hành; nó không phải bằng chứng rằng một công trình cụ thể đang gặp sự cố.",
      },
      {
        heading: "Ba nhóm dữ liệu công chúng nên hiểu đúng",
        paragraphs: [
          "Bộ yêu cầu cập nhật mực nước, dung tích hồ và lưu lượng xả lên hệ thống thông tin quản lý thủy lợi để phục vụ theo dõi, chỉ đạo vận hành. Mực nước cho biết trạng thái tại thời điểm đo; dung tích thể hiện lượng nước liên quan đến đặc điểm hồ; lưu lượng xả cho biết lượng nước được đưa xuống hạ du theo thời gian. Một con số riêng lẻ không đủ để kết luận mức nguy hiểm nếu thiếu mốc thời gian và quy trình vận hành.",
          "Các tỉnh, thành phố phải báo cáo kết quả triển khai về Bộ, qua Cục Quản lý và Xây dựng công trình thủy lợi, trước ngày 25/7/2026. Mốc này là hạn báo cáo hành chính được nêu trong nguồn, không phải thời hạn dự báo mưa hay thời điểm tất cả hồ sẽ thay đổi vận hành. Khi chia sẻ, cần giữ đúng loại mốc thời gian để tránh gây hiểu nhầm.",
        ],
      },
      {
        heading: "Người sống ở vùng hạ du cần chuẩn bị thông tin nào?",
        paragraphs: [
          "Hãy xác định kênh thông báo của xã, phường, cơ quan phòng chống thiên tai hoặc đơn vị quản lý tại địa phương; lưu số liên hệ cần thiết và biết tuyến di chuyển đến nơi an toàn. Nếu có thông báo điều tiết, xả nước hoặc sơ tán, làm theo thời gian, phạm vi và hướng dẫn được công bố. Không đến gần công trình hoặc dòng chảy để quan sát, quay phim.",
          "Khi nhận ảnh hay tin nhắn, kiểm tra tên hồ, địa điểm, ngày giờ, đơn vị phát hành và liệu thông tin đã được cập nhật hay chưa. Google Trends có thể phản ánh việc người dân đang quan tâm đến mưa lũ hoặc an toàn hồ đập, nhưng không xác nhận một cảnh báo cụ thể. Dabangzz chỉ dùng xu hướng để chọn câu hỏi cần giải thích, còn hành động an toàn phải dựa vào thông báo chính thức mới nhất.",
        ],
      },
    ],
  },
];
