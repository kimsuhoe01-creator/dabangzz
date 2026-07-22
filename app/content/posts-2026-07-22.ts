import type { CommunityPost } from "./community-posts";

export const posts20260722: CommunityPost[] = [
  {
    slug: "messenger-tang-tim-kiem-cach-phan-biet-loi-may-va-su-co-dich-vu",
    kind: "news",
    category: "Tin mới Việt Nam · Đời sống số",
    title: "Messenger được tìm kiếm nhiều: cách phân biệt lỗi trên máy và sự cố dịch vụ",
    summary: "Lượng tìm kiếm tăng không tự động có nghĩa Messenger đang gặp sự cố diện rộng. Đây là quy trình kiểm tra trong vài phút, cách đọc trang trạng thái của Meta và những việc cần làm trước khi cài lại ứng dụng.",
    readTime: "10 phút đọc",
    hero: "MESSENGER LỖI?\nKIỂM TRA 5 PHÚT",
    images: [{
      src: "/images/editorial/messenger-kiem-tra-su-co-20260722.webp",
      alt: "Minh họa một gia đình kiểm tra kết nối tin nhắn trên điện thoại và máy tính",
      caption: "Minh họa biên tập bằng AI; hình ảnh không mô tả giao diện hay sự cố thực tế của Meta.",
      credit: "ai",
    }],
    publishedAt: "2026-07-22T18:00:00+07:00",
    updatedAt: "2026-07-22T18:34:00+07:00",
    keyFacts: [
      { label: "TÍN HIỆU TÌM KIẾM", value: "Không phải xác nhận", note: "Google Trends chỉ cho thấy nhu cầu tìm kiếm tăng, không chứng minh có sự cố diện rộng." },
      { label: "TRANG TRẠNG THÁI", value: "Phạm vi có giới hạn", note: "Meta Status chủ yếu phản ánh các sản phẩm nền tảng dành cho doanh nghiệp và nhà phát triển." },
      { label: "KIỂM TRA NHANH", value: "Khoảng 5 phút", note: "Đổi mạng, thử trình duyệt, cập nhật ứng dụng và kiểm tra dung lượng trước khi cài lại." },
      { label: "KHI BÁO LỖI", value: "Ghi bước tái hiện", note: "Nêu thời điểm, thiết bị và thao tác gây lỗi; che tên, nội dung trò chuyện và mã xác thực trong ảnh." },
    ],
    sourceLinks: [
      {
        label: "Meta — Messenger Platform Status",
        url: "https://metastatus.com/messenger",
      },
      {
        label: "Trung tâm trợ giúp Messenger — Không gửi hoặc xem được tin nhắn",
        url: "https://www.facebook.com/help/messenger-app/1723537124537415",
      },
      {
        label: "Trung tâm trợ giúp Messenger — Báo cáo sự cố",
        url: "https://www.facebook.com/help/messenger-app/448372435190713",
      },
      {
        label: "Trung tâm trợ giúp Messenger — Tải hoặc cập nhật ứng dụng",
        url: "https://www.facebook.com/help/messenger-app/218228001910904/",
      },
    ],
    sections: [
      {
        heading: "Tìm kiếm tăng mạnh chưa đủ để gọi là một đợt gián đoạn",
        paragraphs: [
          "Tối 22/7, từ khóa liên quan đến Messenger xuất hiện trong nhóm được tìm kiếm nhanh tại Việt Nam. Tín hiệu này cho thấy nhiều người đang có cùng một câu hỏi, nhưng không cho biết nguyên nhân. Một đợt tìm kiếm có thể bắt đầu từ lỗi đăng nhập của một nhóm thiết bị, bản cập nhật ứng dụng, kết nối của một nhà mạng, một bài đăng lan truyền hoặc sự cố thật sự trên hệ thống. Vì vậy, bài viết không gắn nhãn “Messenger sập” khi chưa có xác nhận tương ứng từ nhà cung cấp.",
          "Cách đọc thận trọng rất quan trọng vì một câu khẳng định sai có thể khiến người dùng cài lại ứng dụng, đổi mật khẩu hoặc gửi đi gửi lại tin nhắn mà không cần thiết. Google Trends được dùng ở đây để nhận biết câu hỏi độc giả đang quan tâm, không phải nguồn xác minh kỹ thuật. Muốn biết lỗi nằm ở máy, mạng, tài khoản hay dịch vụ, cần so sánh nhiều dấu hiệu theo cùng một trình tự.",
        ],
        quote: "Từ khóa tăng cho biết nhiều người đang hỏi; nó không tự trả lời hệ thống có gặp sự cố hay không.",
      },
      {
        heading: "Trang trạng thái của Meta nói gì, và không nói gì?",
        paragraphs: [
          "Tại thời điểm kiểm tra, trang Messenger Platform Status của Meta hiển thị không có sự cố đã biết. Tuy nhiên, phạm vi của trang này tập trung vào Messenger Platform và các sản phẩm phục vụ doanh nghiệp, nhà phát triển. Nó là một tín hiệu hữu ích để đối chiếu, nhưng không đủ để kết luận mọi chức năng trong ứng dụng Messenger dành cho người dùng cá nhân ở mọi quốc gia đều bình thường.",
          "Ngược lại, việc một nhóm Facebook báo cùng lỗi cũng chưa chứng minh toàn bộ dịch vụ ngừng hoạt động. Hãy xem lỗi có xuất hiện trên cả Wi‑Fi và dữ liệu di động, trên ứng dụng và messenger.com, với mọi cuộc trò chuyện hay chỉ một người nhận. Khi các kênh độc lập đều thất bại trong cùng thời điểm, khả năng lỗi ngoài thiết bị tăng lên; khi chỉ một máy hoặc một cuộc trò chuyện bị ảnh hưởng, nên ưu tiên kiểm tra cục bộ.",
        ],
      },
      {
        heading: "Quy trình năm phút trước khi đổi mật khẩu hoặc cài lại",
        paragraphs: [
          "Bước một, mở một trang web và một ứng dụng khác để xem Internet có hoạt động hay không. Bước hai, chuyển tạm giữa Wi‑Fi và dữ liệu di động; nếu chỉ một mạng gặp lỗi, khởi động lại kết nối hoặc kiểm tra thông báo của nhà mạng. Bước ba, đóng hẳn Messenger rồi mở lại, sau đó kiểm tra bản cập nhật trong cửa hàng ứng dụng. Bước bốn, xem thiết bị còn đủ dung lượng trống và hệ điều hành có đáp ứng phiên bản hiện tại hay không.",
          "Bước năm, thử đăng nhập trên messenger.com bằng trình duyệt đáng tin cậy của chính bạn. Nếu trình duyệt gửi tin được nhưng ứng dụng không gửi được, trọng tâm là phiên bản ứng dụng, bộ nhớ hoặc quyền hoạt động nền. Nếu cả hai đều không dùng được, ghi lại giờ bắt đầu và thông báo lỗi chính xác. Không bấm vào đường dẫn “khắc phục khẩn cấp” do tài khoản lạ gửi và không nhập mã xác thực một lần ở trang ngoài tên miền chính thức.",
        ],
      },
      {
        heading: "Chỉ một cuộc trò chuyện lỗi khác với toàn bộ tài khoản lỗi",
        paragraphs: [
          "Nếu bạn vẫn nhắn được cho người khác nhưng không gửi được cho một tài khoản, nguyên nhân có thể liên quan đến trạng thái tài khoản người nhận, cài đặt chặn hoặc quyền trong nhóm. Trung tâm trợ giúp của Messenger cũng liệt kê trường hợp người nhận đã vô hiệu hóa hoặc xóa tài khoản, một trong hai bên chặn người còn lại, hay thành viên không còn ở trong cuộc trò chuyện nhóm. Những tình huống này không thể giải quyết bằng cách đổi mạng liên tục.",
          "Khi nút gửi có vẻ không phản hồi, đừng nhấn hàng chục lần. Tin có thể được xếp hàng và gửi lặp sau khi kết nối trở lại. Với nội dung quan trọng, chụp lại thông báo lỗi, xác nhận qua một kênh khác và chờ vài phút trước khi thử lại. Nếu lỗi liên quan đến nhóm, kiểm tra danh sách thành viên và quyền quản trị thay vì giả định tài khoản đã bị xâm nhập.",
        ],
      },
      {
        heading: "Trước khi gỡ ứng dụng, bảo vệ lịch sử trò chuyện được mã hóa",
        paragraphs: [
          "Cài lại ứng dụng nên là bước sau, không phải phản xạ đầu tiên. Messenger sử dụng cơ chế lưu trữ an toàn cho các cuộc trò chuyện mã hóa đầu cuối. Trước khi gỡ ứng dụng, hãy kiểm tra phương thức khôi phục hoặc lưu trữ an toàn đã được thiết lập và bạn còn nhớ thông tin cần thiết. Nếu bỏ qua, người dùng có thể đăng nhập lại được nhưng không khôi phục ngay toàn bộ lịch sử trên thiết bị mới.",
          "Không xóa dữ liệu ứng dụng khi chưa hiểu khác biệt giữa bộ nhớ đệm và dữ liệu đăng nhập. Nếu phải cài lại, dùng cửa hàng ứng dụng chính thức, kiểm tra tên nhà phát hành và tránh tệp APK được chia sẻ trong nhóm. Sau khi đăng nhập lại, xem mục phiên đăng nhập và bảo mật; chỉ đổi mật khẩu khi có dấu hiệu tài khoản bị truy cập trái phép, không phải chỉ vì tin nhắn chậm vài phút.",
        ],
      },
      {
        heading: "Báo lỗi sao cho Meta có đủ dữ liệu nhưng người khác không thấy thông tin riêng",
        paragraphs: [
          "Meta khuyến nghị cập nhật ứng dụng trước, rồi dùng mục báo cáo sự cố trong cài đặt hồ sơ. Một báo cáo hữu ích cần có thời điểm, dòng máy và phiên bản hệ điều hành, phiên bản Messenger, loại mạng, thao tác từng bước và kết quả mong đợi. Viết “không dùng được” quá ngắn sẽ khó tái hiện hơn câu mô tả như “sau khi chuyển từ Wi‑Fi sang 4G, nút gửi quay liên tục ở mọi cuộc trò chuyện”.",
          "Ảnh chụp màn hình chỉ nên giữ phần thông báo cần thiết. Hãy che tên, ảnh đại diện, nội dung riêng tư, số điện thoại, email, mã đăng nhập và mã QR. Không đăng ảnh lỗi chứa cuộc trò chuyện lên nhóm công khai để hỏi nhanh. Sau khi gửi báo cáo, theo dõi trang trợ giúp và trạng thái chính thức; nếu có sự cố diện rộng, chờ thông báo phục hồi thường an toàn hơn việc thay đổi nhiều cài đặt cùng lúc.",
        ],
      },
    ],
  },
  {
    slug: "tro-cap-huu-tri-xa-hoi-nguoi-cao-tu-dieu-kien-thu-tuc-2026",
    kind: "news",
    category: "Tin mới Việt Nam · An sinh",
    title: "Trợ cấp hưu trí xã hội 2026: ai đủ điều kiện và nộp đề nghị ở đâu?",
    summary: "Mức đang áp dụng là 500.000 đồng mỗi tháng theo Nghị định 176/2025/NĐ-CP. Bài viết phân biệt hai nhóm tuổi, ba cách nộp hồ sơ, thời hạn giải quyết và đề xuất tăng mức chưa có hiệu lực.",
    readTime: "11 phút đọc",
    hero: "TRỢ CẤP TUỔI GIÀ\nĐỌC ĐÚNG ĐIỀU KIỆN",
    images: [{
      src: "/images/editorial/tro-cap-huu-tri-xa-hoi-20260722.webp",
      alt: "Minh họa người cao tuổi cùng người thân làm thủ tục tại bộ phận dịch vụ công địa phương",
      caption: "Minh họa biên tập bằng AI; hình ảnh không mô tả cơ quan hay người nhận trợ cấp cụ thể.",
      credit: "ai",
    }],
    publishedAt: "2026-07-22T19:30:00+07:00",
    updatedAt: "2026-07-22T18:38:00+07:00",
    keyFacts: [
      { label: "NHÓM TUỔI CHÍNH", value: "Từ đủ 75 tuổi", note: "Công dân Việt Nam đáp ứng điều kiện về lương hưu, trợ cấp bảo hiểm xã hội hằng tháng và có văn bản đề nghị." },
      { label: "NHÓM 70–DƯỚI 75", value: "Hộ nghèo/cận nghèo", note: "Phải đồng thời đáp ứng điều kiện thu nhập bảo hiểm theo nghị định và có văn bản đề nghị." },
      { label: "MỨC HIỆN HÀNH", value: "500.000 đồng/tháng", note: "Mức theo Nghị định 176/2025/NĐ-CP; địa phương có thể hỗ trợ thêm theo khả năng ngân sách." },
      { label: "THỜI HẠN", value: "10 ngày làm việc", note: "Thời gian cấp xã rà soát, chuẩn hóa dữ liệu và quyết định kể từ khi nhận hồ sơ theo thủ tục công bố." },
    ],
    sourceLinks: [
      {
        label: "Cổng Thông tin điện tử Chính phủ — Toàn văn Nghị định 176/2025/NĐ-CP",
        url: "https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-dinh-176-2025-nd-cp-ve-tro-cap-huu-tri-xa-hoi-119250713214008704.htm",
      },
      {
        label: "Cổng Thông tin điện tử Chính phủ — Trình tự, thủ tục trợ cấp hưu trí xã hội",
        url: "https://xaydungchinhsach.chinhphu.vn/trinh-tu-thu-tuc-thuc-hien-tro-cap-huu-tri-xa-hoi-ho-tro-chi-phi-mai-tang-119250713220548579.htm",
      },
      {
        label: "Cổng Thông tin điện tử Chính phủ — Dự thảo chính sách trợ giúp xã hội năm 2026",
        url: "https://xaydungchinhsach.chinhphu.vn/toan-van-du-thao-nghi-dinh-quy-dinh-chinh-sach-tro-giup-xa-hoi-va-tro-cap-huu-tri-xa-hoi-119260522113608201.htm",
      },
    ],
    sections: [
      {
        heading: "Vì sao chủ đề người cao tuổi được tìm nhiều nhưng phải bắt đầu từ văn bản đang có hiệu lực?",
        paragraphs: [
          "Ngày 22/7, cụm từ liên quan đến người cao tuổi xuất hiện trong nhóm tìm kiếm tăng tại Việt Nam. Đây chỉ là tín hiệu cho thấy nhiều gia đình đang quan tâm; điều kiện hưởng không được xác định bằng một bài đăng, bảng ảnh hay từ khóa. Căn cứ đang áp dụng là Nghị định 176/2025/NĐ-CP về trợ cấp hưu trí xã hội, có hiệu lực từ ngày 1/7/2025, cùng thủ tục hành chính được cơ quan nhà nước công bố.",
          "Điều cần tránh là trộn quy định hiện hành với một dự thảo mới. Một đề xuất tăng mức hoặc mở rộng chính sách có thể được lấy ý kiến nhưng chưa trở thành số tiền người dân đang được hưởng. Bài này ghi rõ mốc hiện hành, nhóm đủ điều kiện và đường nộp hồ sơ; trường hợp cá nhân vẫn cần được cơ quan cấp xã nơi cư trú đối chiếu với dữ liệu thực tế.",
        ],
        quote: "Hãy kiểm tra trạng thái của văn bản trước khi kiểm tra con số: đang áp dụng, dự thảo và đề xuất là ba trạng thái khác nhau.",
      },
      {
        heading: "Hai nhóm tuổi và những điều kiện phải đi cùng nhau",
        paragraphs: [
          "Nhóm thứ nhất là công dân Việt Nam từ đủ 75 tuổi trở lên, không hưởng lương hưu hoặc trợ cấp bảo hiểm xã hội hằng tháng; trường hợp đang hưởng thấp hơn mức trợ cấp hưu trí xã hội thì cũng thuộc phạm vi nghị định. Người đề nghị cần có văn bản đề nghị hưởng trợ cấp. Tuổi cao tự thân chưa đủ để bỏ qua các điều kiện còn lại, vì cơ quan giải quyết phải đối chiếu tình trạng hưởng chế độ hằng tháng.",
          "Nhóm thứ hai là công dân từ đủ 70 tuổi đến dưới 75 tuổi thuộc hộ nghèo hoặc hộ cận nghèo, đồng thời đáp ứng điều kiện không hưởng lương hưu hay trợ cấp bảo hiểm xã hội hằng tháng, hoặc đang hưởng thấp hơn mức quy định, và có văn bản đề nghị. Vì vậy, người 72 tuổi không mặc nhiên được hưởng chỉ vì tuổi; tình trạng hộ nghèo hoặc cận nghèo phải được xác định theo dữ liệu có thẩm quyền.",
        ],
      },
      {
        heading: "500.000 đồng là mức hiện hành; địa phương có thể có phần hỗ trợ thêm",
        paragraphs: [
          "Nghị định 176 quy định mức trợ cấp hưu trí xã hội hằng tháng là 500.000 đồng. Nếu một người đồng thời thuộc diện hưởng trợ cấp xã hội hằng tháng, người đó được hưởng chế độ có mức cao hơn, không cộng cơ học mọi khoản được nhắc trong các bài tổng hợp. Mức và cách chi trả cần được đọc theo quyết định của cơ quan giải quyết và kỳ thanh toán tại địa phương.",
          "Căn cứ điều kiện kinh tế, khả năng cân đối ngân sách và nguồn lực xã hội, Ủy ban nhân dân cấp tỉnh có thể trình Hội đồng nhân dân cùng cấp quyết định hỗ trợ thêm. Do đó, hai người ở hai tỉnh có thể thấy phần hỗ trợ địa phương khác nhau trong khi mức trung ương vẫn là 500.000 đồng. Khi hỏi, nên tách câu hỏi thành “mức theo nghị định” và “mức hỗ trợ thêm của tỉnh” để tránh so sánh sai.",
        ],
      },
      {
        heading: "Nộp Mẫu số 01 trực tiếp, qua bưu chính hoặc trực tuyến",
        paragraphs: [
          "Người đề nghị lập Mẫu số 01 ban hành kèm Nghị định 176 và gửi Chủ tịch Ủy ban nhân dân xã, phường hoặc đặc khu nơi cư trú. Thủ tục công bố ba cách nộp: trực tiếp tại cơ quan tiếp nhận, gửi qua dịch vụ bưu chính hoặc nộp trực tuyến. Gia đình nên kiểm tra cổng dịch vụ công và hướng dẫn cụ thể của địa phương vì tên bộ phận tiếp nhận, cách đặt lịch hoặc yêu cầu số hóa có thể khác nhau.",
          "Trước khi nộp, đối chiếu họ tên, ngày sinh, số định danh, nơi cư trú và thông tin về chế độ hằng tháng. Không gửi ảnh căn cước hoặc hồ sơ đầy đủ vào nhóm mạng xã hội để hỏi. Nếu người cao tuổi cần người thân hỗ trợ thao tác trực tuyến, nên thực hiện trên thiết bị tin cậy, đăng xuất sau khi hoàn thành và giữ lại mã hồ sơ hoặc giấy tiếp nhận để tra cứu.",
        ],
      },
      {
        heading: "Mười ngày làm việc, thời điểm hưởng và cách xử lý khi chuyển nơi cư trú",
        paragraphs: [
          "Trong thời hạn 10 ngày làm việc kể từ khi nhận văn bản đề nghị, Chủ tịch Ủy ban nhân dân cấp xã tổ chức xem xét, thực hiện xác thực và chuẩn hóa thông tin liên quan, rồi quyết định và thực hiện chi trả. Thời gian hưởng được tính từ tháng Chủ tịch cấp xã ký quyết định. Nếu người đề nghị không đủ điều kiện, cơ quan phải trả lời bằng văn bản và nêu rõ lý do, giúp gia đình biết cần bổ sung dữ liệu hay điều kiện thực sự chưa đáp ứng.",
          "Khi người đang hưởng chuyển nơi cư trú, cấp xã nơi cũ có trách nhiệm quyết định thôi chi trả tại địa bàn và chuyển hồ sơ liên quan; nơi cư trú mới tiếp tục chi trả từ tháng tiếp theo tháng dừng ở nơi cũ. Người dân nên báo thay đổi sớm, giữ bản sao quyết định và kiểm tra thông tin nhận tiền để hạn chế gián đoạn. Không nên tự mở hồ sơ mới song song ở hai nơi.",
        ],
      },
      {
        heading: "Thông tin tăng lên 540.000 hoặc 600.000 đồng hiện vẫn là dự thảo",
        paragraphs: [
          "Một dự thảo nghị định được công bố để lấy ý kiến trong năm 2026 có nêu các phương án điều chỉnh mức chuẩn và trợ cấp. Đây là bước xây dựng chính sách, không thay thế Nghị định 176 đang có hiệu lực. Cho đến khi văn bản mới được ban hành, ghi rõ ngày hiệu lực và phạm vi áp dụng, gia đình không nên dùng con số 540.000 hoặc 600.000 đồng để kết luận cơ quan địa phương đang chi thiếu.",
          "Checklist an toàn là: kiểm tra tuổi tại thời điểm nộp; tình trạng hộ nghèo hoặc cận nghèo nếu thuộc nhóm 70 đến dưới 75; lương hưu hay trợ cấp bảo hiểm xã hội hằng tháng; nơi cư trú; Mẫu số 01; và kênh nhận kết quả. Sau đó mở nguồn chính thức hoặc hỏi bộ phận tiếp nhận cấp xã về hỗ trợ thêm của tỉnh. Bài viết cung cấp cách đọc thủ tục chung, không quyết định quyền lợi cho một hồ sơ cá nhân.",
        ],
      },
    ],
  },
  {
    slug: "luong-toi-thieu-vung-va-luong-co-so-2026-khac-nhau-the-nao",
    kind: "news",
    category: "Tin mới Việt Nam · Việc làm",
    title: "Lương tối thiểu vùng và lương cơ sở 2026: hai con số khác nhau thế nào?",
    summary: "Lương tối thiểu vùng áp dụng cho người làm việc theo hợp đồng, còn lương cơ sở là căn cứ tính lương và một số chế độ trong khu vực công; đối tượng, thời điểm và cách dùng không thể hoán đổi.",
    readTime: "11 phút đọc",
    hero: "HAI LOẠI LƯƠNG\nĐỪNG NHẦM",
    images: [{
      src: "/images/editorial/luong-toi-thieu-va-luong-co-so-20260722.webp",
      alt: "Minh họa người lao động ở nhiều khu vực và bàn làm việc khu vực công để phân biệt hai chính sách tiền lương",
      caption: "Minh họa biên tập bằng AI; hình ảnh không mô tả cơ quan, doanh nghiệp hay người lao động cụ thể.",
      credit: "ai",
    }],
    publishedAt: "2026-07-22T11:45:00+07:00",
    updatedAt: "2026-07-22T10:42:00+07:00",
    keyFacts: [
      { label: "LƯƠNG TỐI THIỂU VÙNG", value: "3,70–5,31 triệu", note: "Mức tối thiểu tháng từ 1/1/2026 dành cho người lao động làm việc theo hợp đồng, tùy địa bàn vùng IV đến vùng I." },
      { label: "MỨC THEO GIỜ", value: "17.800–25.500 đồng", note: "Mức tối thiểu giờ từ 1/1/2026, cũng được chia theo bốn vùng và dùng cho hình thức trả lương theo giờ." },
      { label: "LƯƠNG CƠ SỞ", value: "2,53 triệu đồng", note: "Có hiệu lực từ 1/7/2026 theo Nghị định 161/2026/NĐ-CP, áp dụng làm căn cứ trong khu vực công theo phạm vi nghị định." },
      { label: "ĐIỂM PHẢI KIỂM TRA", value: "Đối tượng + địa bàn", note: "Không so một con số với lương thực nhận nếu chưa biết loại quan hệ làm việc, nơi hoạt động của đơn vị và các khoản trong bảng lương." },
    ],
    sourceLinks: [
      {
        label: "Cổng Thông tin điện tử Chính phủ — Mức lương tối thiểu vùng từ 1/1/2026",
        url: "https://xaydungchinhsach.chinhphu.vn/tu-1-1-2026-muc-luong-toi-thieu-duoc-tang-bao-nhieu-119251111091442629.htm",
      },
      {
        label: "Cổng Thông tin điện tử Chính phủ — Lương cơ sở 2,53 triệu đồng từ 1/7/2026",
        url: "https://xaydungchinhsach.chinhphu.vn/tu-01-7-chinh-phu-tang-luong-co-so-119260517100243881.htm",
      },
      {
        label: "Cổng Thông tin điện tử Chính phủ — Toàn văn Nghị định 161/2026/NĐ-CP",
        url: "https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-dinh-161-2026-nd-cp-quy-dinh-muc-luong-co-so-va-che-do-tien-thuong-119260517103309025.htm",
      },
    ],
    sections: [
      {
        heading: "Vì sao cùng nói về lương nhưng hai mức không thể đặt cạnh nhau rồi kết luận?",
        paragraphs: [
          "Cụm từ “lương tối thiểu” đang được tìm kiếm nhiều tại Việt Nam, đúng lúc thông tin về mức lương cơ sở 2,53 triệu đồng từ ngày 1/7/2026 tiếp tục được chia sẻ. Hai chính sách đều có chữ “lương” và đều do Chính phủ quy định nên rất dễ bị ghép thành một câu hỏi: vì sao nơi nói 2,53 triệu, nơi khác lại nói hơn 5 triệu? Câu trả lời nằm ở đối tượng áp dụng. Đây không phải hai phiên bản của cùng một mức lương, mà là hai căn cứ phục vụ hai nhóm quan hệ tiền lương khác nhau.",
          "Nghị định 293/2025/NĐ-CP quy định lương tối thiểu tháng và giờ đối với người lao động làm việc theo hợp đồng lao động. Nghị định 161/2026/NĐ-CP quy định lương cơ sở và chế độ tiền thưởng đối với cán bộ, công chức, viên chức và lực lượng vũ trang trong phạm vi văn bản. Vì vậy, nhìn một con số rồi suy ra mọi người lao động đều được cộng đúng phần chênh lệch ấy là cách đọc sai. Trước khi tính, cần xác định mình đang thuộc quan hệ lao động theo hợp đồng hay thuộc chế độ tiền lương khu vực công.",
        ],
        quote: "Tên gọi gần nhau không làm cho đối tượng áp dụng, công thức tính và địa bàn áp dụng trở thành một.",
      },
      {
        heading: "Lương tối thiểu vùng 2026 là mức sàn cho lao động theo hợp đồng",
        paragraphs: [
          "Từ ngày 1/1/2026, mức tối thiểu tháng là 5,31 triệu đồng tại vùng I, 4,73 triệu tại vùng II, 4,14 triệu tại vùng III và 3,70 triệu tại vùng IV. Mức tối thiểu giờ tương ứng là 25.500, 22.700, 20.000 và 17.800 đồng. So với quy định trước đó, mức tháng tăng từ 250.000 đến 350.000 đồng, bình quân khoảng 7,2%. Con số trong bảng là mức sàn dùng để thỏa thuận và trả lương cho công việc hoặc chức danh khi người lao động làm đủ thời giờ bình thường và hoàn thành định mức hoặc công việc đã thỏa thuận.",
          "Mức tối thiểu không đồng nghĩa với toàn bộ số tiền người lao động nhận về tài khoản. Bảng lương có thể còn lương theo công việc, phụ cấp, tiền làm thêm, thưởng, khoản khấu trừ và các nội dung khác theo thỏa thuận, quy chế hoặc pháp luật. Ngược lại, một khoản tổng thu nhập nhìn có vẻ cao hơn mức sàn cũng chưa đủ để kết luận cách trả lương đúng nếu không tách được thành phần và điều kiện đi kèm. Bài viết này giúp nhận diện văn bản và câu hỏi cần kiểm tra, không thay thế việc đối chiếu hợp đồng hoặc tư vấn cho một tranh chấp cụ thể.",
        ],
      },
      {
        heading: "Vùng I, II, III hay IV được xác định theo nơi nào?",
        paragraphs: [
          "Nghị định xác định vùng theo nơi người sử dụng lao động hoạt động, không đơn giản theo quê quán, hộ khẩu hoặc nơi người lao động đang tạm trú. Đơn vị hay chi nhánh hoạt động ở địa bàn nào thì áp dụng mức của địa bàn đó. Nếu một doanh nghiệp có các chi nhánh tại nhiều vùng, từng đơn vị đối chiếu địa bàn nơi mình hoạt động. Danh mục địa bàn cụ thể nằm trong phụ lục của nghị định, vì vậy chỉ nhớ tên tỉnh mà không xem đơn vị hành chính và cơ sở làm việc có thể dẫn đến chọn nhầm vùng.",
          "Với khu công nghiệp, khu chế xuất, khu công nghệ cao hoặc khu công nghệ số tập trung nằm trên nhiều địa bàn có mức khác nhau, văn bản yêu cầu áp dụng mức của địa bàn cao nhất. Nghị định cũng có nguyên tắc chuyển tiếp khi địa bàn đổi tên, chia tách hoặc được thành lập mới. Người đọc nên mở phụ lục hiện hành và kiểm tra thông báo của doanh nghiệp thay vì dùng một bảng ảnh cũ lưu trong điện thoại. Khi hỏi bộ phận nhân sự, câu hỏi rõ nhất là “đơn vị của tôi đang áp dụng vùng nào theo phụ lục nào?” chứ không chỉ hỏi “tỉnh này thuộc vùng mấy?”.",
        ],
      },
      {
        heading: "Lương cơ sở 2,53 triệu đồng từ 1/7 dùng để làm gì?",
        paragraphs: [
          "Theo Nghị định 161/2026/NĐ-CP ngày 15/5/2026, mức lương cơ sở từ ngày 1/7/2026 là 2,53 triệu đồng mỗi tháng; mức ngay trước đó là 2,34 triệu đồng. Lương cơ sở là căn cứ trong cơ chế tiền lương khu vực công được nghị định điều chỉnh. Nó có thể được dùng cùng hệ số và các quy định liên quan để xác định mức lương, phụ cấp hoặc chế độ theo từng đối tượng, chứ không phải con số lương thực nhận giống nhau của mọi cán bộ, công chức, viên chức hay thành viên lực lượng vũ trang.",
          "Vì vậy không thể lấy 2,53 triệu đồng so trực tiếp với 5,31 triệu đồng vùng I rồi nói rằng người ở khu vực công “thấp hơn mức tối thiểu vùng” theo một phép trừ đơn giản. Một bên là mức cơ sở trong công thức và chế độ riêng; bên kia là mức sàn theo vùng cho quan hệ lao động hợp đồng thuộc phạm vi Nghị định 293. Muốn hiểu một bảng lương khu vực công, cần xem hệ số, ngạch hoặc chức danh, phụ cấp, thời điểm hưởng và văn bản áp dụng. Một ảnh chỉ chụp dòng “2,53 triệu” không cung cấp đủ các biến đó.",
        ],
      },
      {
        heading: "Bốn bước kiểm tra trước khi chia sẻ một con số về lương",
        paragraphs: [
          "Bước một, đọc tên văn bản và ngày hiệu lực: Nghị định 293 áp dụng từ 1/1/2026, còn mức lương cơ sở mới áp dụng từ 1/7/2026. Bước hai, xác định đối tượng: lao động theo hợp đồng hay nhóm thuộc cơ chế tiền lương khu vực công. Bước ba, nếu là lương tối thiểu vùng, kiểm tra nơi hoạt động của đơn vị và phụ lục địa bàn. Bước bốn, phân biệt mức sàn, mức làm căn cứ tính và thu nhập thực nhận. Ghi đủ bốn thông tin này giúp tránh biến một con số đúng thành một kết luận sai.",
          "Nếu doanh nghiệp trả lương theo tuần, ngày, sản phẩm hoặc khoán, nghị định yêu cầu mức quy đổi theo tháng hoặc giờ trong thời giờ làm việc bình thường không thấp hơn mức tương ứng. Nếu trả theo giờ, dùng cột theo giờ thay vì tự chia mức tháng bằng số ngày bất kỳ. Khi dữ liệu trong hợp đồng, bảng lương và thông báo nhân sự không khớp, người lao động nên lưu bản đầy đủ, hỏi bộ phận phụ trách bằng câu hỏi cụ thể và sử dụng kênh tư vấn lao động có thẩm quyền tại địa phương nếu cần. Không đăng công khai số định danh, tài khoản hoặc bảng lương chưa che dữ liệu cá nhân.",
        ],
      },
      {
        heading: "Thông tin về năm 2027 hiện phải được đọc như đề xuất, không phải mức đang áp dụng",
        paragraphs: [
          "Sau các cuộc họp về phương án lương tối thiểu năm 2027, nhiều tiêu đề có thể xuất hiện cùng lúc với bảng năm 2026. Người đọc cần nhìn trạng thái của thông tin: đề xuất, khuyến nghị, thống nhất phương án trình Chính phủ và nghị định đã ban hành là những bước khác nhau. Cho đến khi có văn bản mới quy định mức và ngày hiệu lực, bảng tại Nghị định 293/2025/NĐ-CP vẫn là căn cứ chính thức cho năm 2026. Không nên dùng một tỷ lệ đang được thảo luận để tự tính lương bắt buộc của tháng hiện tại.",
          "Dabangzz sẽ cập nhật bài tại chính URL này nếu Chính phủ ban hành văn bản thay đổi mức hoặc danh mục địa bàn. Khi đọc bản cập nhật, hãy nhìn ngày sửa và liên kết nguồn ở cuối bài. Google Trends chỉ giúp nhận ra người đọc đang bối rối về từ khóa nào; các mức tiền, đối tượng và hiệu lực trong bài đều được đối chiếu với Cổng Thông tin điện tử Chính phủ và văn bản được dẫn, không lấy lượng tìm kiếm làm bằng chứng chính sách.",
        ],
      },
    ],
  },
  {
    slug: "bach-phan-vi-d01-2026-doc-the-nao-sau-khi-dang-ky-nguyen-vong",
    kind: "news",
    category: "Tin mới Việt Nam · Giáo dục",
    title: "Bách phân vị D01 năm 2026: đọc thế nào sau khi đã đăng ký nguyện vọng?",
    summary: "Bách phân vị cho biết vị trí tương đối của một mức điểm trong tập dữ liệu, không phải điểm chuẩn hay xác suất đỗ; sau hạn thanh toán, thí sinh cần theo dõi xử lý nguyện vọng và kết quả trên kênh chính thức.",
    readTime: "11 phút đọc",
    hero: "D01 2026\nĐỌC BÁCH PHÂN VỊ",
    images: [{
      src: "/images/editorial/bach-phan-vi-d01-20260722.webp",
      alt: "Minh họa học sinh và phụ huynh xem biểu đồ phân bố, lịch và danh sách kiểm tra tuyển sinh trên máy tính",
      caption: "Minh họa biên tập bằng AI; nhân vật, biểu đồ và giao diện đều là hình ảnh tượng trưng.",
      credit: "ai",
    }],
    publishedAt: "2026-07-22T14:30:00+07:00",
    updatedAt: "2026-07-22T10:46:00+07:00",
    keyFacts: [
      { label: "ĐIỂM THI", value: "Công bố 8:00 · 1/7", note: "Thí sinh tra cứu bằng số báo danh trên hệ thống của Bộ GD&ĐT hoặc các cổng chính thức được công bố." },
      { label: "BÁCH PHÂN VỊ", value: "Vị trí tương đối", note: "Bách phân vị 90 có nghĩa kết quả cao hơn hoặc bằng khoảng 90% tập dữ liệu tham chiếu, không có nghĩa đạt 90 điểm hay chắc chắn trúng tuyển." },
      { label: "XỬ LÝ NGUYỆN VỌNG", value: "4–10/8/2026", note: "Các đơn vị của Bộ GD&ĐT xử lý nguyện vọng trên hệ thống theo kế hoạch tuyển sinh chung." },
      { label: "KẾT QUẢ ĐỢT 1", value: "Trước 17:00 · 13/8", note: "Thí sinh trúng tuyển đợt 1 phải hoàn thành xác nhận nhập học trực tuyến trước 17:00 ngày 21/8/2026." },
    ],
    sourceLinks: [
      {
        label: "Cổng Thông tin điện tử Chính phủ — Bách phân vị A00, A01, B00, C00, D01 năm 2026",
        url: "https://xaydungchinhsach.chinhphu.vn/bach-phan-vi-cac-to-hop-mon-a00-a01-b00-c00-d01-ky-thi-tot-nghiep-thpt-nam-2026-11926070110255949.htm",
      },
      {
        label: "Cổng Thông tin điện tử Chính phủ — Điểm thi và các mốc tuyển sinh đại học 2026",
        url: "https://xaydungchinhsach.chinhphu.vn/tra-cuu-diem-thi-tot-nghiep-thpt-2026-119260618122338248.htm",
      },
      {
        label: "Bộ Giáo dục và Đào tạo — Kế hoạch tuyển sinh đại học, cao đẳng năm 2026",
        url: "https://moet.gov.vn/tin-tuc/tin-tong-hop2/bo-gddt-cong-bo-ke-hoach-tuyen-sinh-dai-hoc-cao-dang-nam-2026.html",
      },
    ],
    sections: [
      {
        heading: "Một câu chuyện về thủ khoa không thể thay thế bảng dữ liệu tuyển sinh",
        paragraphs: [
          "Các từ khóa liên quan giám thị và thủ khoa khối D01 đang được quan tâm, nhưng một câu chuyện nổi bật về một thí sinh không cho biết cơ hội trúng tuyển của hàng trăm nghìn hồ sơ khác. Điểm rất cao có thể giúp hình dung đỉnh của phân bố, song điểm chuẩn còn phụ thuộc chỉ tiêu, số nguyện vọng, thứ tự ưu tiên, phương thức xét tuyển, quy tắc quy đổi và mức cạnh tranh tại từng chương trình. Vì vậy Dabangzz không sử dụng tên, ảnh hay hoàn cảnh của một học sinh để dự báo điểm chuẩn.",
          "Nguồn hữu ích hơn là phổ điểm và bảng bách phân vị do Bộ Giáo dục và Đào tạo công bố. Hai loại dữ liệu trả lời câu hỏi khác nhau. Phổ điểm cho thấy số lượng hoặc mật độ thí sinh ở các khoảng điểm; bách phân vị cho biết một mức điểm đứng ở vị trí tương đối nào trong tập dữ liệu tham chiếu. Chúng giúp so sánh bối cảnh, nhưng vẫn không phải danh sách trúng tuyển của một trường. Muốn ra quyết định, thí sinh phải ghép dữ liệu chung với đề án và thông báo chính thức của cơ sở đào tạo đã đăng ký.",
        ],
        quote: "Bách phân vị mô tả vị trí trong dữ liệu; nó không cấp một tấm vé trúng tuyển cho bất kỳ ngành nào.",
      },
      {
        heading: "Bách phân vị 90 thật sự có nghĩa gì?",
        paragraphs: [
          "Theo phần giải thích được Cổng Thông tin điện tử Chính phủ đăng cùng bảng năm 2026, bách phân vị là thước đo thống kê chia tập dữ liệu đã sắp xếp thành 100 phần để xác định vị trí tương đối. Nếu một mức điểm ở bách phân vị 90, cách hiểu đơn giản là mức đó cao hơn hoặc bằng khoảng 90% các giá trị trong tập tham chiếu. Nó không có nghĩa thí sinh được 90 trên 100, có 90% xác suất đỗ hoặc chắc chắn nằm trong 10% chỉ tiêu của một trường.",
          "Cần đọc đúng ba thành phần: tổ hợp nào, dữ liệu của kỳ thi nào và mức điểm tương ứng với bách phân vị nào. D01 thường được nhắc như một tổ hợp riêng, nên không lấy vị trí của D01 áp sang A00, A01 hay C00. Cũng không so trực tiếp một điểm năm 2026 với điểm chuẩn năm trước mà bỏ qua thay đổi về phân bố và quy tắc tuyển sinh. Bảng bách phân vị giúp đặt hai mức điểm lên cùng một khung so sánh; nó không xóa khác biệt giữa ngành, trường và phương thức.",
        ],
      },
      {
        heading: "Vì sao năm 2026 bảng bách phân vị được chú ý hơn?",
        paragraphs: [
          "Cổng Thông tin điện tử Chính phủ dẫn quy định tuyển sinh 2026 cho biết các phương thức xét tuyển phải dựa vào bảng bách phân vị để quy đổi về thang điểm 30 thống nhất. Mục tiêu là tạo căn cứ so sánh khi một trường sử dụng nhiều nguồn điểm. Tuy nhiên, “dựa vào” không có nghĩa mọi trường dùng một công thức hoàn toàn giống nhau mà người đọc có thể tự đoán từ một ảnh bảng. Cơ sở đào tạo vẫn phải công bố quy tắc, điều kiện và mức nhận hồ sơ của chương trình mình.",
          "Thí sinh nên mở đề án tuyển sinh hoặc thông báo của đúng trường, tìm phần quy đổi giữa các phương thức rồi đối chiếu phiên bản, ngày cập nhật và tổ hợp được chấp nhận. Nếu trường công bố bảng riêng, cần kiểm tra đó là bảng quy đổi chính thức hay chỉ là ví dụ minh họa. Đừng dùng công cụ tính không rõ nguồn rồi thay đổi kỳ vọng chỉ vì kết quả hiển thị nhiều chữ số thập phân. Độ chính xác của phép tính không thể cao hơn độ tin cậy của dữ liệu và công thức đầu vào.",
        ],
      },
      {
        heading: "Hạn đăng ký và thanh toán đã qua: bây giờ hệ thống làm gì?",
        paragraphs: [
          "Theo kế hoạch tuyển sinh chung, thí sinh đăng ký và điều chỉnh nguyện vọng từ ngày 2/7 đến 17 giờ ngày 14/7/2026; giai đoạn nộp lệ phí trực tuyến kéo dài từ ngày 15/7 đến 17 giờ ngày 21/7. Tại thời điểm bài này được cập nhật ngày 22/7, hai cửa sổ đó đã kết thúc. Một bài chia sẻ cũ vẫn kêu gọi đổi nguyện vọng hoặc nộp phí ngay cần được kiểm tra ngày đăng, vì thao tác ngoài lịch chung có thể không được hệ thống ghi nhận.",
          "Bước tiếp theo trong kế hoạch là các đơn vị của Bộ Giáo dục và Đào tạo xử lý nguyện vọng trên hệ thống từ ngày 4/8 đến 17 giờ ngày 10/8. Đây là giai đoạn kỹ thuật và phối hợp tuyển sinh, không phải thời gian để người ngoài hứa “chạy” kết quả. Trước 17 giờ ngày 13/8, cơ sở đào tạo thông báo kết quả trúng tuyển đợt 1. Thí sinh đã trúng tuyển và muốn nhập học phải hoàn thành xác nhận trực tuyến trước 17 giờ ngày 21/8. Mỗi mốc cần được đọc theo giờ Việt Nam và thông báo chính thức.",
        ],
      },
      {
        heading: "Một bảng kiểm an toàn cho thí sinh và phụ huynh",
        paragraphs: [
          "Trước hết, lưu số báo danh, thông tin đăng nhập và bằng chứng thanh toán ở nơi riêng tư; không đăng ảnh chứa mã hồ sơ, mã QR hay số định danh vào nhóm công khai. Tiếp theo, kiểm tra trạng thái hồ sơ trên Hệ thống hỗ trợ tuyển sinh chung thay vì chỉ dựa vào tin nhắn từ một số điện thoại lạ. Với thông báo của trường, gõ lại tên miền chính thức hoặc đi từ trang chủ, không bấm đường link rút gọn được gửi kèm lời thúc giục chuyển tiền.",
          "Khi so điểm, ghi rõ tổ hợp, phương thức, thang điểm, điều kiện phụ và nguồn bảng quy đổi. Khi xem một dự báo điểm chuẩn, hỏi dự báo dùng dữ liệu nào và có tách chỉ tiêu theo chương trình hay không. Khi có sai lệch, chụp lại màn hình nhưng che dữ liệu cá nhân, ghi thời gian xảy ra và liên hệ đầu mối hỗ trợ được công bố trên hệ thống hoặc trang của trường. Một bình luận trong nhóm có thể gợi ý câu hỏi cần hỏi, nhưng không thay thế câu trả lời của cơ quan quản lý hoặc cơ sở đào tạo.",
        ],
      },
      {
        heading: "Ba kết luận không nên rút ra từ một bảng điểm hoặc một tiêu đề",
        paragraphs: [
          "Thứ nhất, không kết luận điểm chuẩn chắc chắn tăng chỉ vì xuất hiện một thủ khoa điểm cao; cần nhìn toàn bộ phân bố và nhu cầu vào từng ngành. Thứ hai, không lấy bách phân vị của một tổ hợp để thay cho bách phân vị của tổ hợp khác. Thứ ba, không coi điểm đủ điều kiện đăng ký là điểm trúng tuyển cuối cùng. Ngưỡng nhận hồ sơ, điểm quy đổi và điểm trúng tuyển là ba khái niệm có thể khác nhau về mục đích và thời điểm công bố.",
          "Dabangzz dùng tín hiệu tìm kiếm để nhận biết nhu cầu giải thích, không dùng Google Trends làm nguồn chứng minh điểm số hoặc lịch tuyển sinh. Các mốc trong bài được đối chiếu với Bộ Giáo dục và Đào tạo và Cổng Thông tin điện tử Chính phủ. Nếu kế hoạch hoặc hướng dẫn được cập nhật, bài sẽ được sửa tại URL này và ghi ngày cập nhật. Trong thời gian chờ kết quả, cách tốt nhất là giữ hồ sơ an toàn, theo dõi đúng kênh và tránh để một câu chuyện lan truyền thay thế dữ liệu của chính mình.",
        ],
      },
    ],
  },
  {
    slug: "hieu-lam-nha-duoi-tang-suot-hai-tuan",
    kind: "story",
    category: "Đời sống · Hàng xóm",
    title: "Hai tuần nói về “nhà dưới tầng” và cú hiểu lầm khiến cả hai bật cười",
    summary: "Người vợ cứ nghĩ chồng đang trò chuyện rất thân với một phụ nữ hàng xóm. Đến khi hai người hỏi lại nhau, họ mới phát hiện mình đã dùng cùng một cách gọi cho hai người hoàn toàn khác.",
    readTime: "8 phút đọc",
    hero: "NHÀ DƯỚI TẦNG\nLÀ AI?",
    images: [{
      src: "/images/editorial/hieu-lam-nha-duoi-tang-20260722.webp",
      alt: "Minh họa một cặp vợ chồng bối rối vì mỗi người gặp một thành viên khác nhau của gia đình sống ở tầng dưới",
      caption: "Minh họa biên tập bằng AI; nhân vật và không gian không đại diện cho người hoặc căn hộ có thật.",
      credit: "ai",
    }],
    publishedAt: "2026-07-22T12:45:00+07:00",
    sections: [
      {
        heading: "Một tháng sau khi chuyển nhà, người vợ bắt đầu để ý gia đình tầng dưới",
        paragraphs: [
          "Một cặp vợ chồng chuyển đến căn hộ mới được khoảng một tháng. Trong những lần đưa con gái đến nhà trẻ rồi đón con về, người vợ thường gặp một phụ nữ trẻ sống ở tầng dưới. Hai người chưa từng trò chuyện dài, chủ yếu chỉ gật đầu chào nhau trong hành lang hoặc trước lối vào tòa nhà. Dù vậy, người vợ vẫn nhớ khuôn mặt ấy vì giờ đi lại của hai gia đình khá giống nhau.",
          "Mọi chuyện vốn không có gì đáng nói cho đến khi người chồng bắt đầu nhắc đến “nhà dưới tầng” thường xuyên hơn. Cách gọi này rất tự nhiên trong tiếng Hàn: thay vì nhớ số căn hộ hoặc gọi tên một người chưa thân, cư dân thường nói “nhà trên”, “nhà dưới” hay “nhà bên cạnh”. Người nghe hiểu đó là gia đình hoặc căn hộ ở vị trí ấy, nhưng cách gọi không cho biết người đang được nhắc đến là chồng, vợ hay thành viên nào khác.",
        ],
      },
      {
        heading: "Chiếc xe điện mới khiến câu chuyện xuất hiện mỗi ngày",
        paragraphs: [
          "Người chồng vừa đặt mua một chiếc xe điện. Khoảng hai tuần trước ngày nhận xe, anh kể rằng người ở nhà dưới tầng hỏi khá nhiều: sạc một lần hết bao nhiêu, quãng đường có đủ cho việc đi làm hay không, được giảm giá gì và tổng chi phí sau ưu đãi là bao nhiêu. Khi xe được giao, anh lại kể người ấy đứng nói chuyện một lúc lâu, hỏi trải nghiệm lái và xem vài chi tiết trên xe.",
          "Trong đầu người vợ, “nhà dưới tầng” đương nhiên là người phụ nữ cô vẫn gặp lúc đưa đón con. Cô hơi ngạc nhiên vì người hàng xóm chỉ chào mình rất ngắn nhưng dường như lại nói chuyện với chồng rất thoải mái. Ban đầu cô tự nhủ có lẽ chồng vừa mua xe nên ai quan tâm đến xe điện cũng dễ hỏi nhiều. Tuy nhiên, khi cùng một chủ đề được nhắc lại nhiều lần, cảm giác lạ bắt đầu lớn dần.",
        ],
      },
      {
        heading: "Câu hỏi nhỏ làm lộ ra một khoảng trống rất lớn",
        paragraphs: [
          "Sau lần người chồng kể chuyện đứng dưới bãi xe khá lâu, người vợ quyết định hỏi thẳng. Cô không buộc tội hay làm ầm lên, chỉ muốn biết vì sao người phụ nữ ấy gần như không nói với mình nhưng lại thường xuyên bắt chuyện với chồng. Cô hỏi đại ý: “Sao cô ấy chẳng nói với em câu nào mà lại nói chuyện với anh nhiều thế?”",
          "Phản ứng của người chồng khiến cô càng bối rối. Anh hỏi lại: “Cô nào? Anh chưa từng gặp người phụ nữ nào ở nhà dưới tầng cả.” Trong vài giây, cả hai đều nghĩ người kia đang bỏ sót một chi tiết quan trọng. Nếu chồng chưa từng gặp người phụ nữ đó, vậy người đã hỏi về chiếc xe suốt hai tuần là ai? Còn nếu vợ chỉ biết một người hàng xóm nữ, tại sao chồng lại chắc chắn rằng mình chỉ nói chuyện với một người khác?",
        ],
        quote: "Cùng một cụm từ, hai người đã đặt vào đó hai khuôn mặt khác nhau mà không ai nhận ra.",
      },
      {
        heading: "Đáp án nằm trong hai tuyến đường không bao giờ trùng nhau",
        paragraphs: [
          "Hai vợ chồng bắt đầu so lại thời gian và nơi gặp. Người vợ luôn đi theo lối nối với nhà trẻ, nên người của “nhà dưới tầng” mà cô gặp là người mẹ. Người chồng lại thường xuống khu vực để xe và trạm sạc vào giờ đi làm, nơi anh gặp người cha của gia đình ấy. Lịch sinh hoạt của hai cặp gần như tách nhau: hai người phụ nữ gặp nhau ở tuyến đưa đón trẻ, còn hai người đàn ông gặp nhau ở tuyến gara.",
          "Vì thế, người hỏi về xe điện không phải người phụ nữ mà vợ vẫn nhìn thấy, mà là chồng của cô ấy. Trong suốt hai tuần, người vợ nghe câu “nhà dưới tầng hỏi về xe” và tự động hình dung người mẹ; người chồng dùng đúng cụm từ đó nhưng lại nghĩ đến người cha. Không ai nói tên, giới tính hoặc nơi gặp vì cả hai đều tin rằng đối phương đã biết “nhà dưới tầng” là ai.",
        ],
      },
      {
        heading: "Vì sao một hiểu lầm đơn giản có thể kéo dài đến hai tuần?",
        paragraphs: [
          "Thông tin mà mỗi người có đều hợp lý với suy đoán của mình. Người vợ từng gặp người mẹ nhiều lần, nên không có lý do để tưởng tượng một khuôn mặt khác. Người chồng chỉ gặp người cha ở bãi xe, nơi câu chuyện về pin, sạc và quãng đường diễn ra rất tự nhiên. Mỗi lần nghe thêm chi tiết, họ không kiểm tra giả định ban đầu mà chỉ đặt chi tiết mới vào bức tranh đã có sẵn.",
          "Đây là kiểu hiểu lầm thường xuất hiện khi gia đình dùng một nhãn chung như “chị ở công ty”, “anh bên giao hàng”, “nhà đối diện” hoặc “phụ huynh cùng lớp”. Những cách gọi này tiết kiệm thời gian, nhưng dễ giấu mất thông tin mà người nói tưởng là hiển nhiên. Khi bối cảnh của hai người khác nhau, cùng một nhãn có thể chỉ hai cá nhân, hai cuộc trò chuyện hoặc thậm chí hai địa điểm hoàn toàn khác nhau.",
        ],
      },
      {
        heading: "Người Việt cũng có thể gặp đúng tình huống này",
        paragraphs: [
          "Trong tiếng Việt, “nhà dưới tầng”, “nhà bên cạnh” hay “phụ huynh lớp con” cũng thường chỉ cả một hộ gia đình hoặc một nhóm người. Vì vậy điểm gây cười của câu chuyện không phụ thuộc hoàn toàn vào tiếng Hàn. Điều khác biệt đáng chú ý là ở chung cư Hàn Quốc, số căn hộ và vị trí tầng thường được dùng như một phần của danh tính hàng xóm trước khi mọi người đủ thân để biết tên nhau.",
          "Muốn tránh hiểu lầm, không cần biến mỗi câu chuyện thành một cuộc thẩm vấn. Chỉ một chi tiết ngắn như “người bố ở căn dưới”, “người mẹ mình gặp ở nhà trẻ” hoặc “anh gặp ở trạm sạc” đã đủ. Khi câu chuyện khiến bạn khó chịu, hỏi lại bối cảnh trước khi kết luận về động cơ cũng hữu ích hơn. Trong trường hợp này, người vợ đã làm đúng điều quan trọng nhất: hỏi trực tiếp và nghe câu trả lời thay vì tiếp tục tự ghép thêm giả thuyết.",
        ],
      },
      {
        heading: "Sau cú ngơ ngác là một câu chuyện để cả hai cùng cười",
        paragraphs: [
          "Khi ghép xong hai tuyến đường, cảm giác nghi ngờ biến thành sự buồn cười. Hai vợ chồng đã dành nửa tháng kể chuyện rất nghiêm túc về hai người khác nhau, trong khi cả hai đều tưởng mình đang nói về cùng một hàng xóm. Không có bí mật, cũng không có mối quan hệ đáng ngờ; chỉ có một cách gọi quá tiện và hai lịch sinh hoạt không giao nhau.",
          "Dabangzz xây dựng lại câu chuyện bằng tiếng Việt từ một tình huống cộng đồng do độc giả cung cấp. Bài viết không dịch nguyên văn, không sử dụng ảnh chụp gốc, tên, tài khoản hoặc chi tiết có thể nhận dạng cá nhân. Điểm đáng giữ lại không phải danh tính của người kể, mà là khoảnh khắc một giả định rất nhỏ có thể tạo nên cả một câu chuyện trong đầu — và được tháo gỡ bằng một câu hỏi bình tĩnh.",
        ],
      },
    ],
  },
];
