import type { CommunityPost } from "./community-posts";

type StoryExpansion = {
  readTime: string;
  heading: string;
  paragraphs: string[];
};

const expansions: Record<string, StoryExpansion> = {
  "van-hoa-thang-may-han-quoc": {
    readTime: "7 phút đọc",
    heading: "Nếu là người mới đến Hàn Quốc, nên xử lý thế nào?",
    paragraphs: [
      "Trong giờ cao điểm, hãy nhìn cả khoảng cách của người đang chạy tới lẫn số người đã đứng trong cabin. Nếu người kia chỉ cách vài bước và cửa chưa khép, giữ cửa là cử chỉ hợp lý. Nếu họ còn ở cuối hành lang hoặc cabin đã đông, để chuyến sau vận hành thường ít gây áp lực hơn cho mọi người. Khi mang hành lý, xe đẩy hoặc đi cùng người lớn tuổi, ưu tiên an toàn thay vì cố chen vào một cửa đang đóng.",
      "Người Việt không cần biến một tình huống nhỏ thành bài kiểm tra văn hóa. Một ánh mắt, động tác tay hoặc lời cảm ơn ngắn đã đủ để làm rõ ý định. Điều nên tránh là giữ cửa quá lâu rồi tỏ thái độ với người đến muộn, hoặc bấm nút đóng liên tục khi người khác đang bước vào. Quy tắc thực tế nhất vẫn là giảm rủi ro và tôn trọng thời gian chung.",
    ],
  },
  "cach-xung-ho-trong-cong-ty-han": {
    readTime: "8 phút đọc",
    heading: "Một bảng quyết định cho tuần làm việc đầu tiên",
    paragraphs: [
      "Trong email hoặc cuộc họp chính thức, dùng chức danh kèm nim là lựa chọn an toàn cho đến khi người đó đề nghị cách gọi khác. Trong công cụ nhắn tin nội bộ, hãy quan sát chữ ký, tên hiển thị và cách cả nhóm nhắc đến nhau. Nếu công ty dùng tên tiếng Anh, đừng tự động suy ra rằng mọi quan hệ đã hoàn toàn ngang hàng; cách giao việc và mức độ trang trọng vẫn phụ thuộc tình huống.",
      "Khi không nghe rõ chức danh, hỏi lại ngay sẽ tốt hơn né gọi tên suốt nhiều ngày. Bạn có thể nói ngắn gọn rằng mình muốn dùng đúng cách xưng hô của nhóm. Sau khi được hướng dẫn, ghi chú tên, chức danh và cách phát âm cho vài đồng nghiệp thường gặp. Việc này vừa giảm sai sót vừa giúp bạn tập trung vào nội dung công việc thay vì lo lắng mỗi khi cần mở lời.",
    ],
  },
  "vi-sao-nguoi-han-hoi-tuoi": {
    readTime: "7 phút đọc",
    heading: "Trả lời đủ dùng mà vẫn giữ ranh giới cá nhân",
    paragraphs: [
      "Nếu câu hỏi xuất hiện trong một buổi gặp gỡ thân mật, nói năm sinh thường giúp hai bên chọn cách nói mà không cần trao đổi ngày sinh đầy đủ. Trong công việc, bạn có thể đề nghị tiếp tục dùng kính ngữ trung tính. Nếu không muốn trả lời, một câu nhẹ nhàng như ‘chúng ta cứ nói chuyện lịch sự với nhau nhé’ vẫn truyền đạt ranh giới mà không làm cuộc trò chuyện căng thẳng.",
      "Điều quan trọng là phản ứng sau đó của người hỏi. Người tôn trọng bạn sẽ đổi cách nói hoặc chuyển chủ đề; việc tiếp tục ép hỏi, so sánh ngoại hình với tuổi hay dùng tuổi để hạ thấp ý kiến là vấn đề khác. Cũng không nên dùng một cuộc gặp để kết luận rằng mọi người Hàn đều quan tâm tuổi tác giống nhau, vì môi trường quốc tế, thế hệ và văn hóa công ty tạo ra khác biệt lớn.",
    ],
  },
  "bua-trua-nhanh-o-cong-ty-han": {
    readTime: "7 phút đọc",
    heading: "Cách theo nhịp nhóm mà không làm khó cơ thể",
    paragraphs: [
      "Trong tuần đầu, hãy hỏi giờ ăn và thời lượng nghỉ thực tế thay vì chỉ nhìn nội quy. Nếu nhóm thường quyết định món trước khi rời văn phòng, chọn sẵn một hoặc hai phương án giúp tránh kéo dài. Người có hạn chế ăn uống nên báo rõ từ đầu bằng thông tin cụ thể như món không ăn được, thay vì chờ đến lúc cả nhóm đã gọi món mới giải thích.",
      "Ăn nhanh không có nghĩa phải nuốt vội hoặc bỏ bữa. Bạn có thể lấy khẩu phần vừa phải, tập trung ăn trước rồi trò chuyện sau, hoặc xin tách nhóm khi cần một bữa chậm hơn. Một văn hóa làm việc lành mạnh phải cho phép nhân viên đáp ứng nhu cầu sức khỏe cơ bản; câu chuyện cộng đồng chỉ mô tả một nhịp phổ biến, không biến nó thành nghĩa vụ cho mọi công ty.",
    ],
  },
  "hoi-sik-co-bat-buoc-khong": {
    readTime: "8 phút đọc",
    heading: "Phân biệt lời mời, kỳ vọng của nhóm và áp lực không phù hợp",
    paragraphs: [
      "Hãy đọc kỹ cách sự kiện được thông báo: có nằm trong lịch làm việc, công ty chi trả hay không, và quản lý có nói rõ việc tham dự là tự nguyện không. Nếu cần từ chối, báo sớm và đưa ra câu trả lời ngắn thay vì dựng một lý do phức tạp. Tham dự phần ăn đầu tiên rồi rời đi đúng giờ cũng có thể là phương án trung gian khi bạn muốn làm quen đồng nghiệp nhưng không muốn kéo dài đến khuya.",
      "Không uống rượu không đồng nghĩa thiếu hòa đồng. Bạn có thể chọn đồ không cồn, tự giữ ly của mình và không tranh luận về lý do cá nhân. Nếu việc từ chối dẫn đến chế giễu, ép uống hoặc ảnh hưởng bất hợp lý đến đánh giá công việc, đó không còn là câu chuyện nghi thức đơn giản. Nên ghi nhận sự việc và tìm kênh hỗ trợ phù hợp trong tổ chức.",
    ],
  },
  "tin-nhan-kakao-sau-gio-lam": {
    readTime: "8 phút đọc",
    heading: "Thiết lập quy tắc trả lời trước khi có việc khẩn cấp",
    paragraphs: [
      "Một nhóm nên thống nhất kênh nào dành cho thông báo thông thường, kênh nào dùng cho sự cố và ai thực sự trực ngoài giờ. Khi nhận tin không khẩn cấp, nhân viên có thể đọc vào sáng hôm sau nếu không có thỏa thuận khác. Với quản lý, thêm câu ‘không cần trả lời tối nay’ và hẹn giờ gửi giúp giảm áp lực mà không làm gián đoạn luồng công việc.",
      "Nếu công việc có ca trực, lịch trực cần nêu rõ thời gian, phạm vi trách nhiệm và cách chuyển giao. Đừng để dấu ‘đã xem’ trở thành tiêu chuẩn duy nhất để đánh giá thái độ, vì người nhận có thể mở nhầm hoặc đang ở hoàn cảnh không thể xử lý. Lưu lại quyết định quan trọng trong công cụ chính thức cũng tốt hơn để chúng nằm rải rác trong đoạn chat cá nhân.",
    ],
  },
  "qua-tang-cho-gia-dinh-khi-ket-hon": {
    readTime: "8 phút đọc",
    heading: "Ba câu hỏi nên trả lời trước khi chuyển tiền",
    paragraphs: [
      "Hai người cần làm rõ đây là quà tặng một lần, khoản hỗ trợ định kỳ hay khoản vay; tiền lấy từ tài khoản cá nhân hay ngân sách chung; và mức nào cần trao đổi trước. Viết ra con số không làm tình cảm trở nên lạnh lùng. Nó ngăn một người nghĩ mình chỉ đang giúp trong khả năng, trong khi người kia hiểu rằng gia đình mới phải gánh một cam kết dài hạn.",
      "Cũng nên tách hoàn cảnh khẩn cấp khỏi thói quen chi tiêu. Một khoản viện trợ trong biến cố không tạo ra quy tắc vĩnh viễn, còn hỗ trợ đều đặn cần được tính cùng tiền nhà, tiết kiệm và kế hoạch con cái. Bài viết không đưa ra chuẩn tiền chung cho mọi cặp đôi; mục tiêu là giúp hai người nhìn cùng một bảng thông tin trước khi quyết định.",
    ],
  },
  "chia-doi-chi-phi-dam-cuoi-han-quoc": {
    readTime: "8 phút đọc",
    heading: "Công bằng nên được đo bằng khả năng và quyền quyết định",
    paragraphs: [
      "Chia đôi hóa đơn chỉ hợp lý khi hai bên có khả năng tài chính tương đương và cùng có tiếng nói về quy mô buổi lễ. Nếu một gia đình yêu cầu địa điểm đắt hơn hoặc danh sách khách dài hơn, con số 50–50 có thể che giấu sự chênh lệch quyền lực. Bảng dự toán nên ghi ai đề xuất, ai hưởng lợi và khoản nào có thể cắt mà không ảnh hưởng mục tiêu chung.",
      "Ngoài chi phí ngày cưới, hãy đặt cạnh tiền thuê hoặc mua nhà, đồ dùng, tuần trăng mật và quỹ dự phòng sau lễ. Một cặp đôi có thể chọn tỷ lệ theo thu nhập, mỗi bên phụ trách nhóm chi phí khác nhau hoặc giới hạn ngân sách chung. Thỏa thuận tốt là thỏa thuận cả hai có thể giải thích lại giống nhau, không phải một con số nhìn có vẻ đẹp trên giấy.",
    ],
  },
  "mat-khau-nha-cho-bo-me-chong": {
    readTime: "8 phút đọc",
    heading: "Thiết kế quyền truy cập thay vì tranh luận đúng–sai",
    paragraphs: [
      "Trước tiên, hai người nên thống nhất những tình huống nào thật sự cần người thân vào nhà: chăm thú cưng, kiểm tra sự cố hay hỗ trợ khi mất liên lạc. Có thể dùng mã tạm thời, chìa khóa niêm phong hoặc giao cho một người đáng tin cậy thay vì chia sẻ mật khẩu sử dụng hằng ngày. Nếu hệ thống khóa có nhật ký, cũng cần nói rõ ai được xem dữ liệu đó.",
      "Ranh giới phải áp dụng tương tự cho cả hai bên gia đình. Việc báo trước khi ghé, không tự ý mở tủ hoặc mời người khác vào nhà là những quy tắc cụ thể hơn câu nói ‘hãy tôn trọng chúng tôi’. Khi từng xảy ra xâm phạm, đổi mã và nói lại thỏa thuận không phải hành động trừng phạt mà là khôi phục quyền kiểm soát không gian sống chung.",
    ],
  },
  "nguoi-yeu-hoi-ve-nguoi-cu": {
    readTime: "8 phút đọc",
    heading: "Thông tin nào giúp mối quan hệ hiện tại, thông tin nào chỉ gây tổn thương?",
    paragraphs: [
      "Những điều có ảnh hưởng hiện tại như còn liên lạc, nghĩa vụ chung hoặc ranh giới với bạn cũ nên được nói rõ. Ngược lại, yêu cầu so sánh ngoại hình, tình cảm hay chi tiết riêng tư của mối quan hệ trước thường không tạo ra sự an toàn lâu dài. Hai người có thể thống nhất câu hỏi nào được trả lời một lần và chủ đề nào sẽ không tiếp tục lặp lại.",
      "Nếu sự bất an khiến một người kiểm tra điện thoại, ép chứng minh liên tục hoặc dùng quá khứ để kiểm soát hiện tại, vấn đề không còn nằm ở lượng thông tin. Hãy tập trung vào hành vi đang làm giảm niềm tin và điều kiện cần để tiếp tục quan hệ. Sự thành thật không đồng nghĩa từ bỏ toàn bộ quyền riêng tư của bản thân và người cũ.",
    ],
  },
  "khoang-cach-tuoi-trong-tinh-yeu": {
    readTime: "8 phút đọc",
    heading: "Đánh giá chênh lệch bằng quyền lực, không chỉ bằng số năm",
    paragraphs: [
      "Hãy so sánh giai đoạn sống, mức tự chủ tài chính, kinh nghiệm quan hệ và khả năng nói ‘không’ của mỗi người. Cùng cách nhau mười tuổi nhưng một cặp có nghề nghiệp ổn định và mạng lưới riêng sẽ khác với cặp mà một người kiểm soát tiền, chỗ ở và quan hệ xã hội của người kia. Con số tuổi chỉ là tín hiệu để đặt thêm câu hỏi.",
      "Dấu hiệu tốt là cả hai có thể thương lượng công khai, giữ bạn bè riêng và thay đổi quyết định mà không sợ bị trừng phạt. Dấu hiệu đáng lo là người lớn tuổi hơn dùng kinh nghiệm để phủ nhận cảm xúc, quyết định thay hoặc thúc ép cam kết. Bài viết chỉ bàn về quan hệ giữa người trưởng thành và không áp dụng cho bất kỳ tình huống liên quan đến người chưa thành niên.",
    ],
  },
  "hanh-phuc-nho-sau-mot-ngay-met": {
    readTime: "7 phút đọc",
    heading: "Vì sao những câu chuyện bình thường vẫn có giá trị?",
    paragraphs: [
      "Nội dung cộng đồng thường ưu tiên xung đột vì dễ thu hút phản hồi, nên một bữa tối yên tĩnh có thể trở thành điểm nghỉ hiếm hoi. Giá trị của nó không nằm ở việc lãng mạn hóa thiếu thốn, mà ở khả năng nhận ra một hành động có thể lặp lại: dọn một góc bàn, ăn món vừa sức và dành ít phút không nhìn màn hình.",
      "Nếu đang kiệt sức, đừng biến ‘hạnh phúc nhỏ’ thành thêm một nhiệm vụ phải hoàn thành đẹp mắt. Một bữa mua sẵn, căn phòng chưa gọn hoặc buổi tối chỉ để ngủ vẫn hợp lệ. Điều hữu ích là tìm một nhịp hồi phục phù hợp nguồn lực hiện có, không so sánh với hình ảnh được dàn dựng của người khác.",
    ],
  },
  "nha-ban-ham-seoul": {
    readTime: "9 phút đọc",
    heading: "Danh sách kiểm tra trước khi ký hợp đồng thuê",
    paragraphs: [
      "Người thuê nên xem nhà vào cả ban ngày lẫn sau mưa, kiểm tra mùi ẩm, vết nước ở chân tường, khả năng mở cửa sổ và đường thoát. Hỏi rõ ai chịu trách nhiệm sửa chống thấm, chi phí sưởi mùa đông và việc đồ đạc có kê sát tường hay không. Ảnh chụp ngày xem nhà nên đi kèm ngày giờ và được giữ cùng hợp đồng.",
      "Giá thấp cần được so sánh với tổng chi phí: máy hút ẩm, điện sưởi, thời gian đi lại và rủi ro hư hỏng đồ dùng. Không nên chỉ dựa vào mô tả ‘bán hầm’ vì độ sâu, cửa sổ và hệ thống thoát nước khác nhau. Người thuê nước ngoài cần đọc điều khoản hoàn cọc và xác minh người có quyền cho thuê trước khi chuyển khoản lớn.",
    ],
  },
  "tui-rac-tinh-phi-o-han-quoc": {
    readTime: "8 phút đọc",
    heading: "Cách tránh lỗi phổ biến khi mới chuyển đến",
    paragraphs: [
      "Quy định túi rác, lịch thu gom và phân loại có thể khác theo quận hoặc tòa nhà, vì vậy hãy chụp bảng hướng dẫn tại khu đổ rác và hỏi quản lý nơi mua đúng loại túi. Rác thực phẩm, chai lọ, giấy và vật cồng kềnh thường có quy trình riêng. Nhãn trên bao bì không phải lúc nào cũng quyết định cuối cùng nếu vật liệu đã dính bẩn.",
      "Trước khi bỏ đồ lớn, kiểm tra thủ tục đăng ký và tem phí thay vì đặt cạnh thùng chung. Với hộp giao hàng, tháo băng dính và nhãn có thông tin cá nhân khi hướng dẫn địa phương yêu cầu. Khi không chắc, giữ món đồ lại một ngày để hỏi sẽ tốt hơn bỏ sai rồi gây chi phí xử lý cho cả tòa nhà.",
    ],
  },
  "song-mot-minh-trong-one-room-han": {
    readTime: "9 phút đọc",
    heading: "Lập ngân sách theo tháng đầu tiên, không chỉ theo tiền thuê",
    paragraphs: [
      "Bên cạnh tiền thuê và đặt cọc, hãy liệt kê phí quản lý, điện, nước, khí đốt, internet, đồ giặt và chi phí di chuyển. Hỏi chủ nhà hoặc người thuê trước mức phí mùa đông và mùa hè vì phòng nhỏ không đồng nghĩa hóa đơn luôn thấp. Một quỹ dự phòng cho sửa khóa, chuyển nhà hoặc đồ điện hỏng giúp tránh phải vay gấp.",
      "Không gian một phòng cũng cần quy tắc an toàn: lối thoát không bị chắn, thiết bị sưởi có khoảng cách, đồ ẩm không chất sát tường và số liên hệ quản lý được lưu sẵn. Người sống một mình nên cho một người tin cậy biết địa chỉ nhưng vẫn giữ mã cửa riêng tư. Tự do bền vững đến từ hệ thống nhỏ có thể duy trì, không chỉ cảm giác ở riêng.",
    ],
  },
  "van-hoa-cua-hang-tien-loi-han-quoc": {
    readTime: "7 phút đọc",
    heading: "Dùng không gian chung mà không biến nó thành phòng riêng",
    paragraphs: [
      "Nếu cửa hàng có chỗ ngồi, hãy kiểm tra biển báo về giờ sử dụng, đồ ăn được phép hâm và cách phân loại rác. Giờ đông, một người nên tránh giữ nhiều ghế bằng túi xách; khi gọi điện dài hoặc xem video, tai nghe giúp giảm ảnh hưởng. Nhân viên có thể phải quản lý cả quầy, giao hàng và khu ăn uống nên yêu cầu đặc biệt cần ngắn gọn, rõ ràng.",
      "Các tiện ích như nước nóng, lò vi sóng hay nhà vệ sinh không giống nhau ở mọi điểm bán. Đừng coi một video trải nghiệm là cam kết áp dụng cho toàn bộ chuỗi. Quan sát hướng dẫn tại chỗ và mua món phù hợp trước khi dùng khu vực ăn giúp mối quan hệ giữa khách, nhân viên và người đến sau dễ chịu hơn.",
    ],
  },
  "im-lang-tren-tau-dien-han-quoc": {
    readTime: "7 phút đọc",
    heading: "Ba quy tắc đủ dùng cho người đi tàu lần đầu",
    paragraphs: [
      "Để người trong toa xuống trước, di chuyển vào giữa khi cửa đông và giữ âm lượng thiết bị ở mức không lọt ra ngoài tai nghe. Ba hành động này quan trọng hơn việc cố bắt chước mọi cử chỉ của người địa phương. Ba lô lớn nên đưa xuống phía trước cơ thể; hành lý có bánh cần được giữ để không trôi khi tàu tăng tốc.",
      "Ghế ưu tiên cần được nhường theo biển báo và tình huống, nhưng không nên phán đoán sức khỏe người khác chỉ bằng vẻ ngoài. Khi phải gọi điện khẩn cấp, nói ngắn và nhỏ hoặc xuống ga gần nhất nếu có thể. Sự yên lặng trên tàu không có nghĩa hành khách lạnh lùng; đó chủ yếu là cách chia sẻ một không gian dày đặc với ít va chạm hơn.",
    ],
  },
  "giao-hang-trong-dem-o-han-quoc": {
    readTime: "8 phút đọc",
    heading: "Tốc độ có chi phí mà người mua ít nhìn thấy",
    paragraphs: [
      "Đơn hàng đến sớm phụ thuộc vào kho gần đô thị, dự báo tồn kho, phân loại tự động và nhiều ca lao động nối tiếp. Một mốc giao dự kiến không có nghĩa mọi kiện hàng đi cùng tuyến hoặc mọi tài xế có điều kiện giống nhau. Thời tiết xấu, địa chỉ khó tìm và yêu cầu giao tận cửa có thể làm tăng rủi ro cho người thực hiện.",
      "Người mua có thể giảm ma sát bằng địa chỉ đầy đủ, hướng dẫn vào tòa nhà rõ nhưng không chứa thông tin nhạy cảm, và chọn thời gian linh hoạt khi món đồ không khẩn cấp. Không nên yêu cầu tài xế gọi nhiều lần vào ban đêm hoặc để lại kiện ở nơi nguy hiểm. Tiện lợi đáng đánh giá cùng điều kiện lao động và lượng bao bì, không chỉ số giờ từ đặt đến nhận.",
    ],
  },
  "lan-dau-di-jjimjilbang": {
    readTime: "8 phút đọc",
    heading: "Chuẩn bị thực tế trước khi bước vào khu tắm",
    paragraphs: [
      "Quy trình có thể khác theo cơ sở, nhưng khách thường cất giày, nhận chìa khóa tủ và thay trang phục theo khu vực được chỉ dẫn. Hãy đọc biển về khu tắm riêng, khu sinh hoạt chung, giờ nghỉ và vật dụng được mang vào. Điện thoại không nên dùng ở nơi thay đồ hoặc tắm; quyền riêng tư của người khác quan trọng hơn việc lưu ảnh trải nghiệm.",
      "Tắm sạch trước khi vào bồn, buộc tóc gọn và không chiếm chỗ bằng nhiều đồ cá nhân là những nguyên tắc an toàn. Người có tình trạng sức khỏe cần thận trọng với phòng quá nóng hoặc thay đổi nhiệt độ đột ngột và nên rời khu vực nếu thấy không ổn. Đây là trải nghiệm thư giãn, không phải thử thách chịu nóng.",
    ],
  },
  "le-hoi-truong-dai-hoc-han-quoc": {
    readTime: "8 phút đọc",
    heading: "Một kế hoạch đi lễ hội ít mệt và ít rủi ro hơn",
    paragraphs: [
      "Trước khi đi, kiểm tra trang chính thức của trường về quyền vào cửa, sơ đồ sân khấu, vật dụng bị cấm và phương án khi mưa. Các bài đăng bán vé hoặc vòng tay không chính thức cần được xem thận trọng. Hẹn điểm gặp cụ thể bên ngoài khu đông, vì mạng di động và việc gọi nhau có thể khó khi chương trình kết thúc cùng lúc.",
      "Mang nước theo quy định, pin dự phòng, áo khoác nhẹ và giày phù hợp đứng lâu. Không dựa vào việc người nổi tiếng được nhắc trên cộng đồng nếu trường chưa xác nhận. Khi rời sự kiện, đi theo luồng điều tiết và tránh chen lên chuyến tàu đầu tiên nếu sân ga quá đông. Một kế hoạch về đường về quan trọng không kém danh sách tiết mục.",
    ],
  },
  "lam-them-va-kinh-ngu-han-quoc": {
    readTime: "8 phút đọc",
    heading: "Một bộ câu ngắn an toàn hơn việc cố nói thật phức tạp",
    paragraphs: [
      "Người mới có thể chuẩn bị câu chào, xác nhận đơn hàng, xin nhắc lại và báo lỗi bằng dạng lịch sự nhất quán. Khi không hiểu, nói rõ mình cần người kia lặp chậm sẽ ít rủi ro hơn gật đầu rồi làm sai. Ghi lại từ chuyên môn của cửa hàng và luyện theo đúng tình huống giúp tiến bộ nhanh hơn học một danh sách kính ngữ rời rạc.",
      "Chủ lao động nên hướng dẫn quy trình bằng ví dụ, không dùng lỗi ngôn ngữ để hạ thấp nhân viên nước ngoài. Người làm thêm cũng cần biết lịch, lương, thời gian nghỉ và kênh báo sự cố được ghi ở đâu. Kính ngữ giúp giao tiếp, nhưng không thay thế hợp đồng rõ ràng hoặc quyền được làm việc trong môi trường tôn trọng.",
    ],
  },
  "mua-he-am-o-han-quoc": {
    readTime: "8 phút đọc",
    heading: "Đọc nhiệt độ cùng độ ẩm và không gian sống",
    paragraphs: [
      "Cùng mức 28°C nhưng căn phòng ít gió, tàu đông hoặc quãng đi bộ dưới nắng có thể tạo cảm giác rất khác. Theo dõi nhiệt độ ban đêm, độ ẩm trong phòng và khả năng thoát nhiệt giúp chọn cách ứng phó chính xác hơn. Thông gió vào thời điểm phù hợp, che nắng trực tiếp và dùng thiết bị theo hướng dẫn thường hiệu quả hơn hạ nhiệt độ thật sâu rồi mở cửa liên tục.",
      "Quần áo, chăn và tường cần khoảng trống để khô; mùi ẩm là tín hiệu nên kiểm tra lưu thông không khí và nguồn nước. Khi có cảnh báo nắng nóng hoặc mưa dông, ưu tiên thông tin địa phương thay vì chỉ nhìn ứng dụng mặc định. Bài viết mô tả sinh hoạt mùa hè, không thay thế hướng dẫn y tế cho triệu chứng do nhiệt.",
    ],
  },
  "kem-chong-nang-moi-ngay-kbeauty": {
    readTime: "8 phút đọc",
    heading: "Biến lời khuyên chung thành lựa chọn có thể duy trì",
    paragraphs: [
      "Hãy bắt đầu từ thời gian ở ngoài trời, khả năng đổ mồ hôi, loại hoạt động và cảm giác trên da. Một sản phẩm rất cao cấp nhưng khiến bạn ngại dùng đủ hoặc không thể thoa lại có thể kém thực tế hơn sản phẩm dễ chịu, có nhãn rõ và được mua từ kênh đáng tin cậy. Trang điểm, khẩu trang và mũ bảo hiểm cũng ảnh hưởng cách lớp chống nắng duy trì.",
      "Che chắn bằng quần áo, bóng râm và sắp xếp giờ di chuyển vẫn quan trọng; mỹ phẩm không phải lớp bảo vệ duy nhất. Khi thử sản phẩm mới, thay một yếu tố mỗi lần và ngừng dùng nếu xuất hiện phản ứng bất thường. Không nên lấy trải nghiệm của người sáng tạo nội dung làm bằng chứng rằng một công thức phù hợp với mọi làn da và khí hậu.",
    ],
  },
  "lam-sach-hai-buoc-co-can-thiet": {
    readTime: "8 phút đọc",
    heading: "Quyết định dựa trên thứ cần loại bỏ vào cuối ngày",
    paragraphs: [
      "Nếu bạn dùng lớp trang điểm bền, chống nắng chống nước hoặc sản phẩm nhiều sáp, bước làm sạch dầu có thể giúp hòa tan chúng trước sữa rửa mặt. Nếu ngày đó chỉ dùng sản phẩm nhẹ và da đã sạch với một bước dịu, thêm bước không tự động mang lại lợi ích. Quan sát cặn còn lại, cảm giác căng và tần suất kích ứng thay vì làm theo lịch cố định.",
      "Mỗi bước cần lượng vừa đủ, thao tác nhẹ và thời gian rửa sạch. Dầu tẩy trang không nên được massage quá lâu chỉ vì video hướng dẫn, còn sữa rửa mặt tạo nhiều bọt không đồng nghĩa sạch hơn. Khăn, bông và tay cần sạch; thay đổi chậm giúp xác định nguyên nhân nếu da phản ứng.",
    ],
  },
  "cushion-han-quoc-hop-voi-ai": {
    readTime: "8 phút đọc",
    heading: "Kiểm tra cushion trong điều kiện giống ngày bạn sẽ dùng",
    paragraphs: [
      "Màu nên được xem dưới ánh sáng tự nhiên sau khi lớp nền ổn định, không chỉ ngay lúc dặm trên tay. Hãy thử cách sản phẩm bám ở vùng mũi, đường khẩu trang và nơi da thường khô. Độ che phủ ban đầu chưa nói hết việc lớp nền xuống tông, tách hay bám vào nếp sau vài giờ trong khí hậu nóng ẩm.",
      "Bông cushion tiếp xúc nhiều lần với da và hộp sản phẩm nên cần được giặt hoặc thay theo hướng dẫn, để khô hoàn toàn và không dùng chung. Khi dặm lại, thấm dầu hoặc mồ hôi trước rồi dùng lượng nhỏ. Một hộp tiện mang theo chỉ thật sự tiện khi vệ sinh, màu sắc và cách sửa nền phù hợp thói quen của bạn.",
    ],
  },
  "nuoc-hoa-mui-sach-o-han-quoc": {
    readTime: "7 phút đọc",
    heading: "‘Sạch’ là cảm giác văn hóa, không phải một công thức duy nhất",
    paragraphs: [
      "Có người liên tưởng mùi sạch với xà phòng, khăn cotton, phấn nhẹ hoặc không khí sau khi giặt. Vì vậy tên gọi giống nhau có thể tạo ấn tượng khác trên da và trong thời tiết nóng. Thử trên da với lượng nhỏ, chờ qua tầng hương đầu và quan sát trong không gian kín giúp đánh giá thực tế hơn ngửi nhanh trên giấy.",
      "Ở văn phòng, tàu điện hoặc lớp học, độ lan tỏa quan trọng không kém việc người dùng thích mùi. Xịt ít và tránh dặm lại trong phòng đông là cách tôn trọng người nhạy cảm với hương. Không nên dùng nước hoa để che mùi ẩm trên quần áo; xử lý nguồn mùi và thông thoáng vẫn cần thiết.",
    ],
  },
  "duong-am-theo-mua-kbeauty": {
    readTime: "8 phút đọc",
    heading: "Giữ mục tiêu ổn định, thay kết cấu theo môi trường",
    paragraphs: [
      "Mùa lạnh và phòng sưởi có thể khiến người dùng cần lớp khóa ẩm tốt hơn, trong khi mùa nóng ẩm thường phù hợp lượng ít hoặc kết cấu nhẹ. Tuy nhiên, tên gel hay cream không đủ để dự đoán; công thức, lượng dùng và các bước bên dưới mới quyết định cảm giác. Ghi lại một tuần trước khi đổi giúp tránh mua thêm vì một ngày da thay đổi.",
      "Khi mang routine từ Hàn Quốc sang Việt Nam, hãy tính thời gian ở ngoài trời, điều hòa, mồ hôi và khả năng thoa chống nắng. Không cần giữ nguyên số bước của người khác. Một chu trình ngắn, dễ lặp lại và không gây khó chịu thường có giá trị hơn nhiều lớp sản phẩm chỉ phù hợp khí hậu hoặc lịch sinh hoạt khác.",
    ],
  },
  "my-pham-mini-size-han-quoc": {
    readTime: "7 phút đọc",
    heading: "Một phép tính nhỏ trước khi chọn bộ mini",
    paragraphs: [
      "Hãy chia giá cho dung tích để so với bản đầy đủ, rồi ước tính số lần dùng thực tế. Bộ có năm món không phải lựa chọn tốt nếu chỉ hai món phù hợp nhu cầu. Với sản phẩm cần nhiều tuần mới đánh giá được, dung tích quá nhỏ có thể chỉ cho biết mùi và kết cấu chứ chưa nói gì về trải nghiệm dài hạn.",
      "Mẫu thử cũng cần nhãn, hạn dùng và nơi bán rõ ràng. Không mua nhiều gói đã tách khỏi bao bì gốc nếu không xác định được thông tin. Lập một hộp ‘dùng trước’ và ghi ngày mở giúp mini-size hoàn thành vai trò thử nghiệm, thay vì bị quên cho đến khi chất lượng thay đổi.",
    ],
  },
  "doc-review-my-pham-cong-dong-han": {
    readTime: "8 phút đọc",
    heading: "Chấm một review bằng năm dữ kiện thay vì cảm xúc",
    paragraphs: [
      "Một review hữu ích nên cho biết loại da tự nhận, khí hậu, thời gian dùng, sản phẩm dùng cùng và điểm không phù hợp. Thiếu một dữ kiện không khiến bài vô giá trị, nhưng càng thiếu nhiều thì khả năng áp dụng cho bạn càng thấp. Ảnh đẹp và câu chuyện hấp dẫn nên được tách khỏi bằng chứng về cách sản phẩm hoạt động.",
      "Hãy đối chiếu ít nhất một nguồn không bán hàng và một đánh giá dài hạn nếu quyết định mua món đắt. Kiểm tra ngày đăng vì công thức hoặc bao bì có thể đã đổi. Sau cùng, ghi lại giả thuyết rất cụ thể như ‘kết cấu có thể hợp buổi sáng’ rồi thử trên vùng nhỏ; đừng biến lời khen của người khác thành kết luận về da mình.",
    ],
  },
  "kbeauty-can-bang-chung": {
    readTime: "9 phút đọc",
    heading: "Bốn dòng chữ nhỏ quyết định ý nghĩa của con số lớn",
    paragraphs: [
      "Khi thấy tỷ lệ cải thiện, hãy tìm số người tham gia, thời gian thử, cách đo và nhóm so sánh. Kết quả tự đánh giá khác với đo bằng thiết bị; thay đổi trung bình không có nghĩa mọi người đều nhận cùng mức. Một thử nghiệm do thương hiệu tài trợ vẫn có thể cung cấp thông tin, nhưng phương pháp và giới hạn cần được công bố đủ để người đọc hiểu.",
      "Tuyên bố ‘đã kiểm nghiệm’ nên được nối với đúng công dụng, không kéo rộng sang chữa trị hoặc bảo đảm tuyệt đối. Người mua có thể ưu tiên nhãn rõ, hướng dẫn hợp lý và kênh phản hồi minh bạch hơn một câu quảng cáo khoa học nhưng thiếu bối cảnh. Sự hoài nghi tốt không phủ nhận sản phẩm; nó yêu cầu bằng chứng tương xứng với lời hứa.",
    ],
  },
  "giay-uot-khi-den-cong-ty-han": {
    readTime: "7 phút đọc",
    heading: "Chuẩn bị theo ba điểm: đường đi, lối vào và bàn làm việc",
    paragraphs: [
      "Trước khi rời nhà, chọn đôi giày dễ khô hoặc mang bọc phù hợp; tại lối vào, tìm khay, tủ hoặc vị trí không cản đường; dưới bàn, giữ túi kín cho tất ướt và khăn đã dùng. Tách từng điểm xử lý giúp bạn không phải đặt cả đôi giày nhỏ nước cạnh chỗ ngồi hoặc mượn thiết bị của đồng nghiệp vào phút cuối.",
      "Nếu sàn đã ướt, lau hoặc báo người phụ trách thay vì lặng lẽ bỏ đi. Không dùng máy sấy tóc, lò sưởi hay thiết bị chung khi chưa được phép. Một bộ dự phòng nhỏ có thể dùng nhiều lần trong mùa mưa và phù hợp hơn việc mua đồ dùng một lần mỗi khi dự báo thay đổi.",
    ],
  },
  "my-pham-online-re-bat-thuong": {
    readTime: "9 phút đọc",
    heading: "Đối chiếu theo chuỗi, không tìm một ‘dấu hiệu hàng giả’ duy nhất",
    paragraphs: [
      "Bắt đầu từ tên pháp lý của người bán, kênh phân phối, dung tích, thị trường dành cho sản phẩm và chính sách hoàn trả. Sau đó so sánh mã lô, nhãn phụ, hạn dùng và hình thức niêm phong với thông tin chính thức. Mỗi chi tiết riêng lẻ có thể thay đổi theo lô hoặc thị trường; nhiều điểm không nhất quán cùng lúc mới là lý do mạnh để dừng giao dịch.",
      "Khi nhận hàng, quay quá trình mở kiện trong một cảnh liên tục nếu nền tảng cho phép khiếu nại bằng video. Không thử lên toàn mặt để ‘kiểm tra cho chắc’ khi mùi, màu hoặc bao bì có bất thường. Giữ hóa đơn, trao đổi trong hệ thống của sàn và mô tả sự khác biệt bằng dữ kiện thay vì công khai cáo buộc khi chưa có kết luận chuyên môn.",
    ],
  },
  "mu-bao-hiem-sau-mot-ngay-nong-am": {
    readTime: "7 phút đọc",
    heading: "Một lịch chăm sóc không làm hỏng cấu tạo bảo vệ",
    paragraphs: [
      "Sau mỗi chuyến đi, mở kính, tháo phụ kiện rời nếu hướng dẫn cho phép và để mũ ở nơi có luồng khí. Hằng tuần, kiểm tra lớp lót, quai, khóa và mùi ẩm; vệ sinh theo đúng vật liệu thay vì ngâm cả mũ. Không dùng dung môi mạnh hoặc nhiệt cao lên lớp xốp và keo vì sạch bề mặt không đáng để đánh đổi cấu tạo.",
      "Nếu mũ bị va đập mạnh, nứt, biến dạng hoặc các bộ phận giữ không còn chắc, vệ sinh không giải quyết được vấn đề an toàn. Hỏi nhà sản xuất hoặc thay theo khuyến nghị phù hợp. Mũ cần khô hoàn toàn trước khi cất, nhưng cũng không nên phơi lâu dưới nắng gắt chỉ để rút ngắn thời gian.",
    ],
  },
  "nen-mong-khong-troi-ngay-nong-am": {
    readTime: "8 phút đọc",
    heading: "Thử độ bền bằng một ngày bình thường, không chỉ trước gương",
    paragraphs: [
      "Sau khi hoàn thành lớp nền, chờ vài phút rồi kiểm tra dưới ánh sáng cửa sổ và chụp một ảnh không dùng bộ lọc. Ghi lại vùng tách, bóng hoặc bám khẩu trang sau quãng đi xe, giờ trưa và cuối ngày. Thử từng thay đổi như giảm kem dưỡng, đổi lượng phấn hoặc cách dặm; thay cả routine một lúc khiến bạn không biết bước nào tạo khác biệt.",
      "Mang theo giấy thấm, bông sạch và một lượng nhỏ sản phẩm thay vì toàn bộ bàn trang điểm. Khi sửa, thấm mồ hôi rồi ấn nhẹ, không phủ lớp mới lên bề mặt còn ướt. Mục tiêu thực tế là lớp nền xuống đều và dễ sửa, không phải giữ nguyên tuyệt đối trong nhiệt độ, độ ẩm và ma sát thay đổi.",
    ],
  },
  "duong-am-nhe-trong-khi-hau-am": {
    readTime: "8 phút đọc",
    heading: "Theo dõi ba thời điểm để biết kết cấu có phù hợp",
    paragraphs: [
      "Đánh giá ngay sau khi thoa cho biết độ dễ chịu ban đầu; giữa ngày cho thấy mức bóng, bí hoặc vón với chống nắng; cuối ngày cho biết da có căng sau điều hòa và làm sạch hay không. Ba điểm quan sát này đáng tin cậy hơn việc kết luận từ cảm giác mát trong vài phút đầu.",
      "Nếu da khó chịu, giảm số lớp và lượng dùng trước khi mua một sản phẩm hoàn toàn mới. Thử trên vùng nhỏ, giữ dụng cụ sạch và tránh kết hợp đồng thời nhiều hoạt chất mạnh. Nội dung mỹ phẩm chỉ hỗ trợ lựa chọn hằng ngày; tình trạng kéo dài, đau hoặc lan rộng cần được đánh giá bởi người có chuyên môn.",
    ],
  },
  "chong-nang-cho-nguoi-di-xe-may": {
    readTime: "9 phút đọc",
    heading: "Lập kế hoạch cho một tuyến đường thật, không phải phòng thử nghiệm",
    paragraphs: [
      "Người đi xe máy cần tính thời gian phơi nắng, mồ hôi, khẩu trang, quai mũ và khả năng dừng để thoa lại. Chọn kết cấu bám dễ chịu ở vùng thường ma sát, mang lượng vừa đủ trong bao bì sạch và kết hợp áo dài tay, găng, kính hoặc bóng râm. Không có một lớp mỹ phẩm nào bù hoàn toàn cho nhiều giờ nắng trực tiếp.",
      "Trước khi dùng trên chuyến đi dài, thử trong một ngày ngắn để xem sản phẩm có cay mắt, vón với lớp dưỡng hoặc lem lên đồ bảo hộ không. Đọc hướng dẫn về lượng và khả năng chống nước trên nhãn chính thức. Video K-beauty có thể gợi ý kết cấu, nhưng quyết định cuối phải dựa vào điều kiện giao thông và khí hậu Việt Nam.",
    ],
  },
  "dong-ca-phe-mot-minh-an-toan": {
    readTime: "8 phút đọc",
    heading: "Checklist đóng cửa nên để lại bằng chứng, không dựa vào trí nhớ",
    paragraphs: [
      "Danh sách nên đi theo một chiều cố định: kiểm tiền theo quy định, tắt thiết bị không cần thiết, kiểm nguồn nhiệt và nước, khóa cửa phụ, dọn lối thoát rồi xác nhận cửa chính. Mỗi mục cần mô tả hành động cụ thể thay vì chỉ ghi ‘kiểm tra quán’. Nếu có camera hoặc ứng dụng báo động, xác nhận trạng thái nhưng không chia sẻ mã truy cập trong nhóm chat rộng.",
      "Người làm một mình cần giờ liên lạc dự kiến và một đầu mối gọi khi có tình huống bất thường. Không nên tự đối đầu với người lạ hoặc quay lại quán tối một mình để kiểm tra khi có dấu hiệu nguy hiểm; tuân theo quy trình của doanh nghiệp và liên hệ hỗ trợ phù hợp. Sự gan dạ không thay thế thiết kế ca làm an toàn.",
    ],
  },
  "khi-ung-dung-nhom-cong-ty-bi-gian-doan": {
    readTime: "8 phút đọc",
    heading: "Một kế hoạch dự phòng cần tên người, kênh và thời hạn",
    paragraphs: [
      "Nhóm nên xác định trước hệ thống chính, kênh dự phòng và người có quyền tuyên bố chuyển kênh. Danh sách số điện thoại khẩn cấp phải được lưu ở nơi khác với ứng dụng có thể gặp sự cố. Khi gián đoạn xảy ra, một thông báo ngắn cần nêu phạm vi, việc tạm dừng, kênh thay thế và thời điểm cập nhật tiếp theo.",
      "Không chuyển toàn bộ tài liệu nội bộ sang tài khoản cá nhân chỉ vì tiện. Sau sự cố, ghi lại quyết định đã đưa ra và đưa thông tin quan trọng về hệ thống chính khi hoạt động trở lại. Buổi rà soát nên tìm lỗ hổng quy trình thay vì đổ lỗi cho người không trả lời trên một kênh mà cả nhóm chưa từng thống nhất là dự phòng.",
    ],
  },
  "mot-nguoi-ngoi-ban-bon-cho-o-ca-phe": {
    readTime: "7 phút đọc",
    heading: "Đọc không gian trước khi phán xét người đang ngồi",
    paragraphs: [
      "Một bàn lớn có thể là chỗ duy nhất gần ổ điện, phù hợp xe lăn hoặc đang được nhân viên sắp xếp. Trước khi kết luận, hãy nhìn mức độ đông, biển hướng dẫn và thời gian người đó đã sử dụng. Nếu cần ghế, hỏi lịch sự xem có thể ngồi chung hoặc đổi bàn thay vì quay phim, chụp ảnh rồi đưa lên mạng.",
      "Người ngồi một mình cũng có thể chủ động thu gọn đồ và chuyển sang bàn nhỏ khi quán bắt đầu đông. Quán nên dùng biển hoặc nhân viên hướng dẫn trong giờ cao điểm để khách không phải tự tranh luận về quy tắc vô hình. Một giải pháp rõ ràng có giá trị hơn việc biến tình huống vài phút thành phán xét nhân cách.",
    ],
  },
  "dat-do-an-ngay-mua-o-han-quoc": {
    readTime: "8 phút đọc",
    heading: "Giảm rủi ro từ lúc đặt hàng, không chỉ lúc nhận",
    paragraphs: [
      "Kiểm tra dự báo, chọn quán gần hơn và tránh yêu cầu thời gian quá sát khi mưa lớn. Địa chỉ, tên tòa nhà, cổng vào và điểm để đồ cần chính xác; ghi chú ngắn tốt hơn một đoạn dài khó đọc khi đang di chuyển. Nếu nền tảng cho phép, chọn giao không tiếp xúc ở vị trí khô và an toàn.",
      "Khi đơn chậm, xem trạng thái hệ thống trước khi gọi liên tục cho tài xế. Không yêu cầu họ đi vào khu vực ngập, leo cầu thang nguy hiểm hoặc bỏ qua quy định tòa nhà. Lời cảm ơn có ý nghĩa, nhưng lựa chọn giảm quãng đường và chấp nhận thời gian linh hoạt mới trực tiếp giảm áp lực trong điều kiện xấu.",
    ],
  },
  "phoi-do-trong-one-room-mua-am": {
    readTime: "8 phút đọc",
    heading: "Sắp luồng khí trước khi mua thêm thiết bị",
    paragraphs: [
      "Vắt đúng chế độ, giũ từng món và để khoảng cách giữa các lớp vải giúp không khí tiếp xúc nhiều hơn. Đặt giá phơi theo hướng luồng quạt hoặc nơi thông gió, nhưng không chặn lối đi và không để nước nhỏ gần ổ điện. Quần dày, khăn và đồ có nhiều lớp nên được tách khỏi áo mỏng để không giữ ẩm cho cả giá.",
      "Nếu dùng máy hút ẩm hoặc điều hòa, đóng mở cửa theo hướng dẫn và theo dõi nước ngưng. Thiết bị không thay thế việc vệ sinh lưới lọc, xử lý nguồn rò nước hoặc khoảng trống sau tủ. Mùi ẩm lặp lại dù đã phơi đúng là lý do kiểm tra căn phòng, không chỉ xịt thêm hương lên quần áo.",
    ],
  },
  "o-uot-trong-sanh-van-phong-han": {
    readTime: "7 phút đọc",
    heading: "Một quy trình nhỏ giúp sảnh không thành điểm trơn trượt",
    paragraphs: [
      "Khi vào tòa nhà, đóng ô ở khu có thảm hoặc rãnh thoát nước, lắc nhẹ ngoài cửa nếu được phép và dùng túi hoặc giá theo hướng dẫn. Không đặt ô mở ngang lối đi hay tựa vào cửa kính. Nếu dùng túi bọc, giữ lại để tái sử dụng khi phù hợp và bỏ đúng nơi, thay vì để nước chảy từ túi xuống thang máy.",
      "Tên hoặc dấu nhận biết nhỏ giúp tránh cầm nhầm, nhưng không nên ghi số điện thoại đầy đủ ở vị trí lộ ra. Tòa nhà đông người cần giá đủ chắc, biển chỉ dẫn và lịch lau sàn trong giờ mưa. Trách nhiệm không chỉ thuộc về người mang ô; thiết kế lối vào tốt cũng quyết định mức an toàn.",
    ],
  },
};

function topicLabel(category: string) {
  const first = category.split(" · ")[0];
  if (first === "Đời sống Hàn") return "Đời sống";
  if (first === "Trải nghiệm Hàn") return "Trải nghiệm";
  return first;
}

export function enrichKoreaStory(post: CommunityPost): CommunityPost {
  const expansion = expansions[post.slug];
  return {
    ...post,
    kind: "story",
    category: `Chuyện Hàn Quốc · ${topicLabel(post.category)}`,
    readTime: expansion?.readTime ?? post.readTime,
    sections: expansion
      ? [...post.sections, { heading: expansion.heading, paragraphs: expansion.paragraphs }]
      : post.sections,
  };
}
