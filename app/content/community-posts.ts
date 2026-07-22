import { kimReviews } from "./kim-reviews";
import { posts20260722 } from "./posts-2026-07-22";
import { posts20260721 } from "./posts-2026-07-21";
import { posts20260720 } from "./posts-2026-07-20";
import { vietnamNews } from "./vietnam-news";
import { enrichKoreaStory } from "./story-depth";

export type CommunityPost = {
  slug: string;
  kind?: "story" | "news" | "review";
  author?: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  hero: string;
  images?: { src: string; alt: string; caption?: string; credit?: "ai" | "author" }[];
  /** ISO 8601. Posts without a value are already published. */
  publishedAt?: string;
  /** ISO 8601 timestamp for a material editorial update. */
  updatedAt?: string;
  sourceLinks?: { label: string; url: string }[];
  keyFacts?: { label: string; value: string; note: string }[];
  sections: {
    heading: string;
    paragraphs: string[];
    quote?: string;
    images?: { src: string; alt: string; caption?: string; credit?: "ai" | "author" }[];
  }[];
};

export function isPostPublished(post: CommunityPost, now = new Date()) {
  if (!post.publishedAt) return true;
  const scheduledTime = Date.parse(post.publishedAt);
  return Number.isFinite(scheduledTime) && scheduledTime <= now.getTime();
}

export function getPublishedPosts(now = new Date()) {
  return communityPosts.filter(post => isPostPublished(post, now));
}

const rawCommunityPosts: CommunityPost[] = [
  ...kimReviews,
  ...posts20260722,
  ...posts20260721,
  ...vietnamNews,
  ...posts20260720,
  {
    slug: "van-hoa-thang-may-han-quoc",
    category: "Văn hóa · Đời sống",
    title: "Một nút giữ cửa thang máy và cuộc tranh luận rất Hàn Quốc",
    summary: "Giữ cửa bao lâu là lịch sự, và từ lúc nào sự tử tế nhỏ lại trở thành áp lực?",
    readTime: "5 phút đọc",
    hero: "ELEVATOR\nMANNERS",
    sections: [
      { heading: "Một tình huống nhỏ nhưng ai cũng từng gặp", paragraphs: ["Một người đứng trong thang máy thấy hàng xóm đang chạy từ xa nên giữ nút mở cửa. Người phía sau lại cho rằng cả tòa nhà không nên chờ một người. Những câu chuyện như vậy thường tạo ra tranh luận lớn trong cộng đồng Hàn vì chúng chạm vào hai giá trị cùng lúc: nhanh chóng và quan tâm đến người khác.", "Ở chung cư đông dân, vài giây có thể không đáng kể với người này nhưng lại là phần kéo dài của một buổi sáng vội vã với người khác. Không có quy tắc chính thức nào cho khoảng cách phải chờ; mọi người tự đọc tình huống và vì thế dễ bất đồng."], quote: "Phép lịch sự tốt nhất đôi khi là nhìn xem phía sau còn bao nhiêu người đang chờ." },
      { heading: "Văn hóa ppalli-ppalli gặp phép lịch sự", paragraphs: ["Nhịp sống nhanh của đô thị Hàn Quốc khiến thang máy trở thành không gian có quy tắc ngầm. Người bước vào thường nhanh chóng bấm tầng, đứng gọn sang một bên và tránh chặn cửa. Khi phải chuyển đồ hoặc đi cùng trẻ nhỏ, một lời cảm ơn ngắn thường làm không khí nhẹ đi.", "Với người nước ngoài, điều quan trọng không phải học thuộc một đáp án. Hãy quan sát mật độ người, khoảng cách của người đang tới và ưu tiên an toàn. Nếu người kia còn ở quá xa, để chuyến tiếp theo thường là lựa chọn hợp lý hơn." ]},
      { heading: "Bài học nằm ở ranh giới", paragraphs: ["Cuộc tranh luận không thật sự chỉ về chiếc thang máy. Nó cho thấy cách cộng đồng thương lượng giữa quyền của cá nhân và nhịp vận hành chung. Một cử chỉ tử tế vẫn cần tính đến những người không lên tiếng ở phía sau.", "Dabangzz tổng hợp mô-típ thảo luận công khai và viết lại tình huống; không sử dụng thông tin nhận dạng hay lời kể nguyên văn của bất kỳ cá nhân nào." ]}
    ]
  },
  {
    slug: "cach-xung-ho-trong-cong-ty-han",
    category: "Công sở",
    title: "Ngày đầu ở công ty Hàn: gọi đồng nghiệp thế nào mới đúng?",
    summary: "Tên, chức danh hay hậu tố nim — cách xưng hô tiết lộ nhiều hơn một chiếc danh thiếp.",
    readTime: "6 phút đọc",
    hero: "FIRST DAY\nAT WORK",
    sections: [
      { heading: "Đừng vội gọi tên riêng", paragraphs: ["Trong nhiều công ty Hàn, nhân viên mới thường nghe chức danh nhiều hơn tên. Daeri, gwajang hay timjang không chỉ mô tả vị trí mà còn giúp xác định cách nói chuyện. Gắn thêm hậu tố nim thể hiện sự tôn trọng và là lựa chọn an toàn khi chưa thân.", "Tuy nhiên, các công ty trẻ đang thay đổi nhanh. Có nơi dùng tên tiếng Anh, có nơi gọi tên kèm nim và có nhóm chỉ dùng biệt danh trên công cụ nhắn tin. Vì vậy, cách tốt nhất trong ngày đầu là nghe cách mọi người tự giới thiệu và làm theo quy ước của đội." ]},
      { heading: "Khi sơ đồ tổ chức không nói hết mọi chuyện", paragraphs: ["Một người có chức danh thấp hơn nhưng nhiều năm kinh nghiệm vẫn có ảnh hưởng lớn trong nhóm. Ngược lại, quản lý trẻ có thể chủ động yêu cầu giao tiếp ngang hàng. Chức danh là điểm bắt đầu, không phải bản đồ hoàn chỉnh của quan hệ.", "Nếu không chắc, bạn có thể hỏi thẳng một cách lịch sự: ‘Trong nhóm mình tôi nên xưng hô với anh/chị thế nào?’ Câu hỏi này thường được đánh giá tích cực hơn việc đoán sai rồi né tránh."], quote: "Quan sát cách cả nhóm gọi nhau luôn chính xác hơn học một danh sách chức danh trên mạng." },
      { heading: "Điều người Việt dễ thích nghi", paragraphs: ["Tiếng Việt cũng có hệ thống xưng hô theo tuổi và quan hệ, nên người Việt thường hiểu nhanh sắc thái này. Khác biệt nằm ở việc chức danh công việc xuất hiện dày hơn trong hội thoại Hàn.", "Bài viết phản ánh nhiều kiểu văn hóa doanh nghiệp khác nhau; không nên xem một trải nghiệm đơn lẻ là quy tắc áp dụng cho mọi công ty Hàn Quốc." ]}
    ]
  },
  {
    slug: "vi-sao-nguoi-han-hoi-tuoi",
    category: "Văn hóa",
    title: "Vì sao người Hàn hỏi tuổi ngay trong lần đầu gặp?",
    summary: "Một câu hỏi dễ gây ngạc nhiên nhưng thường nhằm chọn cách xưng hô phù hợp.",
    readTime: "5 phút đọc",
    hero: "HOW OLD\nARE YOU?",
    sections: [
      { heading: "Không phải lúc nào cũng là tò mò", paragraphs: ["Trong tiếng Hàn, tuổi có thể ảnh hưởng đến đại từ, đuôi câu và cách hai người xác định quan hệ. Vì vậy câu hỏi về năm sinh đôi khi xuất hiện sớm hơn người Việt mong đợi. Người hỏi có thể chỉ đang tìm một cách nói chuyện thoải mái cho cả hai.", "Điều đó không có nghĩa bạn phải trả lời mọi lúc. Trong môi trường quốc tế hoặc công việc, nhiều người trẻ chủ động tránh hỏi tuổi và giữ lối nói lịch sự trung tính." ]},
      { heading: "Tuổi Hàn đã đơn giản hơn", paragraphs: ["Hàn Quốc hiện sử dụng tuổi quốc tế trong hành chính và pháp luật. Dù vậy, thói quen hỏi năm sinh trong giao tiếp không biến mất ngay vì nó thuộc về quan hệ xã hội chứ không chỉ cách tính số tuổi.", "Nếu cảm thấy không thoải mái, bạn có thể trả lời bằng năm sinh thay vì tuổi hoặc nhẹ nhàng nói rằng mình muốn dùng lối nói lịch sự với nhau. Cách phản hồi rõ ràng thường tránh được hiểu lầm." ]},
      { heading: "Đọc mục đích, không chỉ đọc câu chữ", paragraphs: ["Cùng một câu hỏi có thể là thiện ý, thói quen hoặc sự tò mò quá mức. Hãy nhìn bối cảnh và cách người kia phản ứng khi bạn đặt ranh giới. Người tôn trọng bạn sẽ không ép buộc.", "Nội dung được biên soạn từ những câu hỏi văn hóa thường gặp, không đại diện cho mọi người Hàn Quốc hay mọi thế hệ." ]}
    ]
  },
  {
    slug: "bua-trua-nhanh-o-cong-ty-han",
    category: "Công sở",
    title: "Bữa trưa công ty Hàn: ăn nhanh không có nghĩa là ăn qua loa",
    summary: "Tại sao một bữa ăn đầy đủ có thể kết thúc chỉ trong vài chục phút?",
    readTime: "5 phút đọc",
    hero: "LUNCH\nIN 30",
    sections: [
      { heading: "Một giờ nghỉ có nhiều việc phải làm", paragraphs: ["Tại khu văn phòng, quán ăn quen với lượng khách đổ vào cùng lúc nên món thường được phục vụ rất nhanh. Nhân viên ăn xong còn muốn mua cà phê, đi bộ hoặc xử lý việc cá nhân trước khi trở lại bàn làm việc. Nhịp độ này khiến người mới có cảm giác mọi người đang chạy đua.", "Bữa trưa vẫn có đủ cơm, canh và món phụ; tốc độ không đồng nghĩa với thiếu quan tâm đến đồ ăn. Vấn đề nằm ở lịch làm việc được nén chặt." ]},
      { heading: "Đi cùng nhóm hay ăn một mình?", paragraphs: ["Ở một số đội, ăn cùng nhau giúp trao đổi thông tin và xây dựng quan hệ. Ở nơi khác, nhân viên tự chọn món và thời gian. Văn hóa 혼밥, tức ăn một mình, ngày càng quen thuộc nên việc tách nhóm không còn luôn bị xem là xa cách.", "Người mới nên tham gia vài bữa đầu để hiểu nhịp của nhóm, sau đó nói rõ nhu cầu nếu cần thời gian riêng. Một câu đơn giản như ‘hôm nay tôi có việc cá nhân’ thường là đủ." ]},
      { heading: "Không cần biến bữa trưa thành bài kiểm tra", paragraphs: ["Khác biệt lớn nhất giữa các công ty không nằm ở quốc tịch mà ở tính chất công việc và người quản lý. Đừng vội kết luận cả văn hóa công sở Hàn chỉ từ một đội nhóm.", "Bài viết tổng hợp trải nghiệm phổ biến và được biên tập thành hướng dẫn bối cảnh cho độc giả Việt Nam." ]}
    ]
  },
  {
    slug: "hoi-sik-co-bat-buoc-khong",
    category: "Công sở",
    title: "Hoesik ở công ty Hàn có thật sự bắt buộc?",
    summary: "Bữa tối tập thể đang thay đổi, nhưng nghệ thuật từ chối lịch sự vẫn hữu ích.",
    readTime: "6 phút đọc",
    hero: "TEAM DINNER\nRULES",
    sections: [
      { heading: "Từ nghi thức tập thể đến lựa chọn linh hoạt", paragraphs: ["Hoesik là buổi ăn uống của đồng nghiệp sau giờ làm. Trước đây, sự tham gia thường gắn chặt với tinh thần tập thể. Ngày nay nhiều công ty giới hạn thời gian, chọn bữa trưa thay cho buổi tối hoặc để nhân viên tự nguyện tham dự.", "Dù vậy, trải nghiệm vẫn khác nhau giữa ngành nghề và người quản lý. Một lời mời có thể thật sự tự nguyện ở nơi này nhưng mang áp lực ngầm ở nơi khác." ]},
      { heading: "Cách từ chối mà không tạo câu chuyện dài", paragraphs: ["Nêu lý do ngắn, báo sớm và thể hiện thiện chí tham gia dịp khác thường hiệu quả hơn giải thích quá chi tiết. Bạn cũng có thể ghé phần đầu rồi rời đi vào giờ đã nói trước.", "Không uống rượu không có nghĩa phải tránh cả buổi. Gọi đồ uống không cồn và giữ ly của mình là cách nhiều người lựa chọn. Không ai có quyền ép bạn uống hoặc vượt qua giới hạn sức khỏe."], quote: "Một bữa ăn tốt giúp đồng nghiệp gần nhau hơn; nó không nên là bài kiểm tra lòng trung thành." },
      { heading: "Đọc tín hiệu của nơi làm việc", paragraphs: ["Hãy quan sát xem lãnh đạo có tôn trọng người về sớm, có báo lịch trước và có tính đến nhân viên nuôi con hay không. Những chi tiết đó nói nhiều về văn hóa tổ chức hơn lời quảng cáo tuyển dụng.", "Nội dung mang tính định hướng giao tiếp, không phải tư vấn pháp lý hay chính sách áp dụng cho mọi doanh nghiệp." ]}
    ]
  },
  {
    slug: "tin-nhan-kakao-sau-gio-lam",
    category: "Công sở",
    title: "Tin nhắn Kakao sau giờ làm: trả lời ngay hay chờ đến sáng?",
    summary: "Một dấu chấm chưa đọc có thể tạo áp lực lớn hơn chính nội dung tin nhắn.",
    readTime: "5 phút đọc",
    hero: "AFTER 6 PM\nMESSAGE",
    sections: [
      { heading: "Khi công cụ cá nhân trở thành công cụ công việc", paragraphs: ["KakaoTalk là ứng dụng nhắn tin quen thuộc trong đời sống Hàn Quốc, vì vậy ranh giới giữa nhóm bạn và nhóm công ty dễ bị mờ. Một tin nhắn buổi tối có thể chỉ là thông báo cho ngày mai, nhưng người nhận vẫn cảm thấy phải phản hồi ngay.", "Vấn đề không chỉ nằm ở thời gian gửi mà ở kỳ vọng. Nếu người quản lý thường gửi muộn nhưng không yêu cầu trả lời, áp lực sẽ khác với nơi dùng trạng thái đã đọc để đánh giá thái độ." ]},
      { heading: "Thiết lập quy ước trước khi có xung đột", paragraphs: ["Nhóm làm việc hiệu quả thường thống nhất kênh cho việc khẩn cấp, nội dung nào có thể chờ và thời gian phản hồi dự kiến. Khi chưa có quy ước, người mới nên hỏi đồng nghiệp đáng tin thay vì tự đoán.", "Bạn có thể tắt thông báo nhưng vẫn kiểm tra vào một khung giờ nhất định. Với công việc không trực ca, việc trả lời vào đầu ngày hôm sau là một ranh giới hợp lý nếu tổ chức không có yêu cầu khác." ]},
      { heading: "Công nghệ không tự tạo ra văn hóa", paragraphs: ["Cùng một ứng dụng có thể được dùng rất khác ở hai công ty. Điều quyết định là hành vi của người có quyền và khả năng nói ‘không’ của nhân viên.", "Bài viết tổng hợp các tranh luận công sở phổ biến; người đọc nên đối chiếu hợp đồng và nội quy nơi làm việc của mình." ]}
    ]
  },
  {
    slug: "qua-tang-cho-gia-dinh-khi-ket-hon",
    category: "Gia đình · Hôn nhân",
    title: "Tặng tiền cho người thân sau khi kết hôn: tiền của tôi hay tiền của chúng ta?",
    summary: "Một món quà tốt có thể trở thành mâu thuẫn nếu hai người chưa thống nhất ranh giới tài chính.",
    readTime: "6 phút đọc",
    hero: "FAMILY\nMONEY",
    sections: [
      { heading: "Mâu thuẫn thường bắt đầu từ điều không được nói", paragraphs: ["Một người muốn dùng thu nhập riêng để tặng quà cho em hoặc cha mẹ; người còn lại cho rằng mọi khoản lớn đều cần bàn bạc. Cả hai đều có lý nếu nhìn từ hệ thống tài chính mà họ tưởng rằng gia đình đang sử dụng.", "Vấn đề là nhiều cặp đôi chỉ thảo luận chi phí sinh hoạt mà không nói rõ quà cho hai bên nội ngoại, tiền hiếu hỉ hay khoản hỗ trợ khẩn cấp." ]},
      { heading: "Ba tài khoản dễ hiểu hơn một cuộc tranh cãi", paragraphs: ["Một mô hình thường được nhắc đến là tài khoản chung cho sinh hoạt và mục tiêu, cộng với khoản cá nhân mà mỗi người được tự quyết. Hai người cần thống nhất mức tiền nào phải báo trước và nguyên tắc cân bằng giữa hai gia đình.", "Sự công bằng không nhất thiết là hai bên nhận đúng một con số. Hoàn cảnh có thể khác nhau, nhưng tiêu chuẩn ra quyết định cần nhất quán và minh bạch."], quote: "Tiền riêng vẫn cần ranh giới; tiền chung càng cần một cuộc trò chuyện rõ ràng." },
      { heading: "Đừng biến người thân thành đối thủ", paragraphs: ["Khi tranh luận, hãy nói về ngân sách và cam kết thay vì đánh giá gia đình của đối phương. Nếu một món quà khiến mục tiêu chung bị ảnh hưởng, hai người có thể điều chỉnh thời điểm hoặc chia thành nhiều đợt.", "Đây là bài viết tham khảo về giao tiếp tài chính, không thay thế tư vấn tài chính hoặc pháp lý chuyên môn." ]}
    ]
  },
  {
    slug: "chia-doi-chi-phi-dam-cuoi-han-quoc",
    category: "Gia đình · Hôn nhân",
    title: "Kết hôn ‘50–50’ có thật sự công bằng?",
    summary: "Chia đôi từng hóa đơn nghe đơn giản, cho đến khi tiền bạc gặp công sức và kỳ vọng gia đình.",
    readTime: "6 phút đọc",
    hero: "50 / 50\nMARRIAGE",
    sections: [
      { heading: "Con số giống nhau chưa chắc tạo gánh nặng giống nhau", paragraphs: ["Các cuộc tranh luận về kết hôn 50–50 thường tập trung vào nhà ở, lễ cưới và đồ gia dụng. Nhưng hai người có thể có thu nhập, tài sản ban đầu và trách nhiệm chăm sóc gia đình rất khác. Chia đúng một nửa đôi khi khiến một người mất gần hết khả năng dự phòng.", "Một thỏa thuận bền hơn bắt đầu từ tỷ lệ đóng góp, quyền sở hữu và mức sống mà cả hai cùng chịu được." ]},
      { heading: "Công việc không hóa đơn cũng có giá trị", paragraphs: ["Lập kế hoạch cưới, chuyển nhà, nấu ăn và chăm sóc người thân đều tốn thời gian. Nếu chỉ đo sự công bằng bằng tiền mặt, phần lao động vô hình dễ biến mất khỏi cuộc trò chuyện.", "Hai người nên viết ra các hạng mục lớn, người chịu trách nhiệm và cách xử lý khi hoàn cảnh thay đổi. Thỏa thuận tốt không phải văn bản lạnh lùng; nó giúp giảm những kỳ vọng không được nói ra." ]},
      { heading: "Công bằng là quy trình, không phải khẩu hiệu", paragraphs: ["Không có một tỷ lệ đúng cho mọi cặp đôi. Điều quan trọng là cả hai hiểu dữ liệu, được quyền từ chối và không dùng đóng góp tài chính để kiểm soát người kia.", "Bài viết được biên soạn từ mô-típ tranh luận hôn nhân công khai và không dựa trên một gia đình cụ thể." ]}
    ]
  },
  {
    slug: "mat-khau-nha-cho-bo-me-chong",
    category: "Gia đình · Ranh giới",
    title: "Có nên đưa mật khẩu nhà cho bố mẹ sau khi kết hôn?",
    summary: "Tiện trong tình huống khẩn cấp, nhưng chỉ an toàn khi quyền sử dụng được nói rõ.",
    readTime: "5 phút đọc",
    hero: "DOOR CODE\nBOUNDARY",
    sections: [
      { heading: "Mật khẩu không chỉ là bốn con số", paragraphs: ["Với khóa điện tử phổ biến tại Hàn Quốc, việc chia sẻ mã cửa cho người thân rất dễ. Một bên xem đó là sự tin tưởng và phương án dự phòng; bên kia cảm thấy không gian riêng bị mở mà chưa được đồng ý.", "Xung đột thường xảy ra khi cha mẹ ghé vào mà không báo trước, ngay cả khi họ đến với ý tốt. Cảm giác an toàn trong nhà phụ thuộc vào khả năng biết ai có thể bước vào và khi nào." ]},
      { heading: "Tách quyền truy cập khỏi quyền ghé thăm", paragraphs: ["Hai vợ chồng có thể đồng ý rằng mã chỉ dùng khi có yêu cầu hoặc tình huống khẩn cấp. Một số khóa cho phép tạo mã tạm thời, giúp không phải chia sẻ mã chính lâu dài.", "Nếu đã đưa mã mà một người không thoải mái, hãy đổi mã và giải thích bằng nguyên tắc chung áp dụng cho cả hai gia đình. Cách này giảm cảm giác nhắm riêng vào một bên."], quote: "Tin tưởng không có nghĩa là bỏ qua sự đồng thuận của người cùng sống trong căn nhà." },
      { heading: "Ranh giới rõ giúp quan hệ nhẹ hơn", paragraphs: ["Thông báo trước khi đến, không tự mở tủ hoặc sắp xếp đồ và trả lại chìa khóa sau khi dùng là những quy tắc nhỏ nhưng quan trọng. Khi chúng được nói từ đầu, người thân ít phải đoán ý nhau.", "Nội dung nhằm gợi ý cuộc trò chuyện gia đình, không kết luận một lựa chọn duy nhất là đúng." ]}
    ]
  },
  {
    slug: "nguoi-yeu-hoi-ve-nguoi-cu",
    category: "Tình yêu",
    title: "Người yêu liên tục hỏi về người cũ: thành thật đến mức nào là đủ?",
    summary: "Chia sẻ quá khứ có thể tạo gần gũi, nhưng thẩm vấn thì không.",
    readTime: "5 phút đọc",
    hero: "PAST LOVE\nQUESTIONS",
    sections: [
      { heading: "Câu hỏi thật sự có thể nằm ở hiện tại", paragraphs: ["Khi một người liên tục hỏi về người cũ, họ có thể đang tìm sự bảo đảm rằng mình được yêu hoặc sợ lặp lại một tổn thương. Trả lời thêm chi tiết hiếm khi giải quyết được nỗi lo nếu nguyên nhân chưa được gọi tên.", "Hai người nên phân biệt thông tin có ảnh hưởng đến mối quan hệ hiện tại với chi tiết chỉ phục vụ việc so sánh. Bạn có thể thành thật mà vẫn giữ quyền riêng tư." ]},
      { heading: "Đặt giới hạn bằng một câu rõ ràng", paragraphs: ["Hãy nói điều bạn sẵn sàng chia sẻ, điều không muốn nhắc lại và lý do. Sau đó chuyển cuộc trò chuyện sang nhu cầu hiện tại: điều gì khiến đối phương chưa yên tâm, hai người có thể làm gì để xây dựng niềm tin.", "Nếu câu hỏi đi kèm kiểm tra điện thoại, xúc phạm hoặc cô lập bạn khỏi người khác, đó không còn là sự tò mò bình thường. Khi ấy, bảo vệ an toàn và tìm hỗ trợ đáng tin cậy quan trọng hơn việc chứng minh mình vô tội." ]},
      { heading: "Quá khứ là bối cảnh, không phải vũ khí", paragraphs: ["Một mối quan hệ lành mạnh cho phép cả hai kể chuyện theo nhịp của mình. Thông tin đã chia sẻ không nên bị mang ra để hạ thấp hoặc thắng trong tranh cãi.", "Bài viết tổng hợp mô-típ tư vấn tình cảm phổ biến, không thay thế hỗ trợ tâm lý chuyên môn trong tình huống kiểm soát hoặc bạo lực." ]}
    ]
  }
  ,{
    slug: "khoang-cach-tuoi-trong-tinh-yeu",
    category: "Tình yêu",
    title: "Chênh lệch tuổi trong tình yêu: con số nào mới đáng lo?",
    summary: "Khoảng cách tuổi ít nói lên chất lượng mối quan hệ hơn cách quyền lực được sử dụng.",
    readTime: "5 phút đọc",
    hero: "AGE GAP\nIN LOVE",
    sections: [
      { heading: "Tuổi không phải dữ liệu duy nhất", paragraphs: ["Các cộng đồng tình cảm thường tranh luận xem chênh năm hay bảy tuổi có quá nhiều hay không. Nhưng hai cặp có cùng khoảng cách tuổi có thể hoàn toàn khác nhau về giai đoạn sống, tài chính và mức độc lập.", "Câu hỏi hữu ích hơn là: cả hai có quyền quyết định ngang nhau không, người lớn tuổi hơn có dùng kinh nghiệm hoặc tiền bạc để gây áp lực không, và mục tiêu tương lai có tương thích không." ]},
      { heading: "Những dấu hiệu cần quan sát", paragraphs: ["Nếu một người liên tục nói rằng đối phương ‘còn nhỏ nên không hiểu’, kiểm soát bạn bè hoặc thúc ép cam kết, khoảng cách tuổi đang trở thành công cụ quyền lực. Ngược lại, sự tôn trọng thể hiện qua việc lắng nghe và cho phép cả hai thay đổi ý kiến.", "Chênh lệch tuổi cũng có thể kéo theo khác biệt về kế hoạch con cái, chăm sóc cha mẹ và thời điểm nghỉ hưu. Nói sớm về những điều này thực tế hơn tranh cãi quanh ánh nhìn của người ngoài." ]},
      { heading: "Đừng để bình luận mạng quyết định thay", paragraphs: ["Ý kiến cộng đồng có thể giúp nhìn ra điểm mù, nhưng người ngoài chỉ thấy một phần câu chuyện. Hãy dùng câu hỏi của họ để kiểm tra mối quan hệ, không dùng số đông làm phán quyết cuối cùng.", "Bài viết mang tính giáo dục về quan hệ lành mạnh; trong trường hợp có cưỡng ép hoặc bạo lực, hãy tìm hỗ trợ chuyên môn và người đáng tin." ]}
    ]
  },
  {
    slug: "hanh-phuc-nho-sau-mot-ngay-met",
    category: "Cuộc sống",
    title: "Một bữa tối nhỏ và lý do câu chuyện này khiến cộng đồng dịu lại",
    summary: "Giữa những bài đăng tranh cãi, khoảnh khắc bình thường đôi khi được nhớ lâu nhất.",
    readTime: "4 phút đọc",
    hero: "SMALL\nHAPPINESS",
    sections: [
      { heading: "Không phải câu chuyện nào cũng cần cú sốc", paragraphs: ["Một người trở về sau ngày dài, mua phần ăn giảm giá và bất ngờ được chủ quán tặng thêm món phụ. Không có bí mật lớn hay màn trả đũa, chỉ có cảm giác được quan tâm đúng lúc.", "Những bài viết như vậy thường nhận ít tranh cãi nhưng nhiều lời kể nối tiếp. Người đọc nhớ lại chiếc ô được cho mượn, ghế trên tàu được nhường hoặc tin nhắn hỏi đã về nhà chưa." ]},
      { heading: "Sự tử tế nhỏ có tính lây lan", paragraphs: ["Khi đọc một hành động tốt cụ thể, con người dễ hình dung cách lặp lại nó hơn một lời kêu gọi chung chung. Mua thêm cà phê cho đồng nghiệp hoặc giữ cửa cho người đẩy xe không giải quyết mọi khó khăn, nhưng làm ngày sống dễ chịu hơn.", "Điều quan trọng là đừng biến lòng tốt thành nghĩa vụ phải biết ơn vô hạn. Một món quà nhỏ vẫn nên được trao mà không kèm yêu cầu." ]},
      { heading: "Dành chỗ cho nội dung nhẹ", paragraphs: ["Một trang kể chuyện không chỉ cần drama. Những khoảnh khắc bình thường giúp bức tranh đời sống Hàn Quốc cân bằng hơn và nhắc rằng cộng đồng mạng cũng có thể là nơi lưu giữ điều tử tế.", "Tình huống trong bài là bản dựng tổng hợp từ nhiều mô-típ công khai, không mô tả một cá nhân cụ thể." ]}
    ]
  },
  {
    slug: "nha-ban-ham-seoul",
    category: "Nhà ở · Seoul",
    title: "Nhà bán hầm ở Seoul: rẻ hơn, nhưng cái giá không chỉ là tiền",
    summary: "Ánh sáng, độ ẩm và an toàn khi mưa lớn là những điều cần kiểm tra trước hợp đồng.",
    readTime: "6 phút đọc",
    hero: "SEMI\nBASEMENT",
    sections: [
      { heading: "Vì sao banjiha hấp dẫn người mới đến", paragraphs: ["Nhà bán hầm, hay banjiha, thường có tiền thuê thấp hơn căn hộ cùng khu vực. Với sinh viên hoặc người mới đi làm muốn ở gần tàu điện, chênh lệch đó rất đáng kể.", "Nhưng ảnh chụp góc rộng có thể che mất cửa sổ nhỏ, tường ẩm hoặc khoảng cách quá gần mặt đường. Cần xem nhà vào ban ngày và sau một đợt mưa nếu có thể." ]},
      { heading: "Danh sách kiểm tra thực tế", paragraphs: ["Hãy kiểm tra mùi ẩm, vết mốc, áp lực nước, thông gió phòng tắm và đường thoát khi có sự cố. Hỏi chủ nhà về lịch sử ngập, thiết bị báo cháy và cách xử lý côn trùng.", "Đừng chỉ tính tiền thuê. Máy hút ẩm, sưởi, giặt đồ khó khô và thời gian di chuyển đều làm thay đổi chi phí thực tế. Hợp đồng cần ghi rõ tiền đặt cọc và trách nhiệm sửa chữa." ]},
      { heading: "Rẻ chỉ có ý nghĩa khi vẫn an toàn", paragraphs: ["Nếu căn nhà có dấu hiệu ngập hoặc lối thoát không rõ, mức giá hấp dẫn không bù được rủi ro. Người thuê nước ngoài nên nhờ người hiểu tiếng Hàn đọc hợp đồng và sử dụng dịch vụ tư vấn địa phương khi cần.", "Bài viết cung cấp danh sách quan sát chung, không thay thế kiểm tra kỹ thuật hoặc tư vấn hợp đồng nhà ở." ]}
    ]
  },
  {
    slug: "tui-rac-tinh-phi-o-han-quoc",
    category: "Đời sống Hàn",
    title: "Vì sao ở Hàn Quốc không thể dùng túi bất kỳ để đổ rác?",
    summary: "Chiếc túi chuyên dụng vừa là phí xử lý vừa là cách buộc người dùng phân loại.",
    readTime: "5 phút đọc",
    hero: "TRASH BAG\nRULES",
    sections: [
      { heading: "Mua túi cũng là trả phí xử lý", paragraphs: ["Nhiều địa phương tại Hàn sử dụng túi rác tiêu chuẩn theo khu vực. Giá túi bao gồm một phần chi phí thu gom, vì vậy túi mua ở nơi khác có thể không được chấp nhận.", "Rác thường, thực phẩm và đồ tái chế có cách bỏ khác nhau. Quy định chi tiết thay đổi theo quận và loại nhà, nên lịch dán tại sảnh hoặc hướng dẫn của văn phòng quản lý đáng tin hơn một video cũ trên mạng." ]},
      { heading: "Ba lỗi người mới thường gặp", paragraphs: ["Lỗi đầu tiên là cho rác thức ăn còn nhiều nước vào túi thường. Lỗi thứ hai là bỏ chai lọ mà không làm rỗng. Lỗi thứ ba là mang rác xuống sai ngày hoặc sai điểm tập kết.", "Khi không chắc, hãy chụp ảnh vật cần bỏ và hỏi quản lý tòa nhà. Một câu hỏi ngắn rẻ hơn tiền phạt và tránh làm phiền hàng xóm." ]},
      { heading: "Quy tắc nhỏ, lý do lớn", paragraphs: ["Hệ thống khiến người dân thấy trực tiếp chi phí của lượng rác mình tạo ra. Nó không hoàn hảo, nhưng giúp giải thích vì sao phân loại trở thành phần rõ nét trong đời sống đô thị Hàn.", "Thông tin cụ thể cần được kiểm tra tại địa phương nơi bạn sống vì màu túi, giờ thu gom và danh mục có thể khác nhau." ]}
    ]
  },
  {
    slug: "song-mot-minh-trong-one-room-han",
    category: "Cuộc sống",
    title: "Sống một mình trong one-room Hàn Quốc: tự do đi cùng những hóa đơn nào?",
    summary: "Tiền thuê chỉ là dòng đầu tiên trong ngân sách của người ở một mình.",
    readTime: "6 phút đọc",
    hero: "ONE ROOM\nLIFE",
    sections: [
      { heading: "Căn phòng nhỏ nhưng chi phí không nhỏ", paragraphs: ["One-room thường gộp khu ngủ, bếp và bàn làm việc trong một không gian. Ngoài tiền thuê, người ở còn cần tính phí quản lý, điện, gas, nước, Internet và đồ dùng ban đầu.", "Mức phí quản lý thấp chưa chắc đã bao gồm nhiều dịch vụ. Trước khi ký, hãy yêu cầu danh sách chi tiết và xem hóa đơn mẫu của tháng mùa đông nếu có thể." ]},
      { heading: "Không gian nhỏ cần thói quen rõ", paragraphs: ["Mùi nấu ăn dễ bám vào quần áo, rác thực phẩm cần xử lý thường xuyên và tiếng ồn từ hành lang nghe rõ hơn tưởng tượng. Một giá phơi gọn, hộp kín và lịch vệ sinh đều có giá trị hơn nhiều món trang trí.", "An toàn cũng quan trọng: kiểm tra khóa cửa, camera khu chung, cửa sổ và đường về nhà vào buổi tối. Vị trí gần ga không tự động đồng nghĩa với con đường dễ đi." ]},
      { heading: "Tự do đến từ chuẩn bị", paragraphs: ["Sống một mình giúp chủ động thời gian và không gian, nhưng cũng đòi hỏi quỹ khẩn cấp và khả năng tự xử lý việc nhỏ. Hãy bắt đầu với ngân sách thực tế thay vì hình ảnh căn phòng hoàn hảo trên mạng.", "Bài viết là hướng dẫn tổng quan; chi phí và điều kiện hợp đồng khác nhau đáng kể giữa khu vực." ]}
    ]
  },
  {
    slug: "van-hoa-cua-hang-tien-loi-han-quoc",
    category: "Văn hóa · Tiêu dùng",
    title: "Cửa hàng tiện lợi Hàn Quốc không chỉ là nơi mua đồ ăn",
    summary: "Từ bữa tối một người đến nhận bưu kiện, một không gian nhỏ gánh nhiều vai trò đô thị.",
    readTime: "5 phút đọc",
    hero: "24 HOURS\nCONVENIENCE",
    sections: [
      { heading: "Phòng khách tạm thời của thành phố", paragraphs: ["Bàn ghế trước cửa hàng, lò vi sóng và máy nước nóng khiến nơi đây trở thành điểm ăn nhanh cho học sinh, nhân viên ca đêm và người sống một mình. Bạn có thể ghép cơm, đồ ăn kèm và đồ uống thành một bữa với ngân sách rõ ràng.", "Nhưng chỗ ngồi không phải nhà hàng riêng. Dọn khay, phân loại rác và giữ âm lượng thấp là phép lịch sự cơ bản." ]},
      { heading: "Nhiều dịch vụ trong một quầy nhỏ", paragraphs: ["Tùy cửa hàng, khách có thể nhận bưu kiện, nạp tiền, mua vé hoặc dùng máy ATM. Sự tiện lợi này phản ánh lối sống đô thị có giờ giấc linh hoạt và diện tích nhà nhỏ.", "Sản phẩm hợp tác ngắn hạn và món theo mùa cũng biến cửa hàng thành nơi thử nghiệm xu hướng. Tuy nhiên, giá từng món nhỏ có thể cộng lại nhanh hơn một bữa ăn thông thường." ]},
      { heading: "Trải nghiệm như người địa phương", paragraphs: ["Hãy đọc hướng dẫn trên máy, hỏi nhân viên trước khi dùng thiết bị và đừng chiếm bàn lâu vào giờ đông. Một vài quy tắc nhỏ giúp trải nghiệm thú vị mà không biến nội dung mạng xã hội thành phiền toái cho người làm việc.", "Bài viết mô tả xu hướng phổ biến; dịch vụ thực tế khác nhau theo chuỗi và từng cửa hàng." ]}
    ]
  },
  {
    slug: "im-lang-tren-tau-dien-han-quoc",
    category: "Văn hóa · Giao thông",
    title: "Vì sao toa tàu điện Hàn Quốc đông nhưng thường khá yên?",
    summary: "Im lặng không hẳn là lạnh lùng; đôi khi đó là cách chia sẻ một không gian chật.",
    readTime: "5 phút đọc",
    hero: "QUIET\nSUBWAY",
    sections: [
      { heading: "Không gian chung có âm lượng riêng", paragraphs: ["Trên nhiều tuyến tàu điện, hành khách xem điện thoại, ngủ hoặc đeo tai nghe. Cuộc gọi lớn tiếng dễ thu hút ánh nhìn vì âm thanh lan trong toa kín.", "Đây không phải quy tắc tuyệt đối. Nhóm bạn vẫn nói chuyện và giờ muộn có thể ồn hơn, nhưng mức âm lượng kỳ vọng thường thấp hơn ngoài đường." ]},
      { heading: "Những chi tiết giúp chuyến đi dễ hơn", paragraphs: ["Đợi người bên trong xuống trước khi lên, không đứng chắn cửa và tháo ba lô trong giờ đông là ba thói quen quan trọng. Ghế ưu tiên nên được nhường cho người cần, kể cả khi toa chưa đầy.", "Nếu phải nghe điện thoại khẩn cấp, nói ngắn và nhỏ hoặc xuống ga kế tiếp để gọi lại. Người nước ngoài không cần hoàn hảo; chỉ cần thể hiện mình đang chú ý đến người xung quanh." ]},
      { heading: "Im lặng có thể là sự tôn trọng", paragraphs: ["Sau ngày làm việc dài, một toa tàu yên cho phép hàng trăm người có khoảng nghỉ ngắn. Khi hiểu điều này, ánh nhìn của người khác bớt giống sự lạnh lùng và gần hơn với một lời nhắc về không gian chung.", "Bài viết phản ánh quan sát phổ biến tại đô thị lớn, không mô tả mọi tuyến tàu hay mọi thời điểm." ]}
    ]
  },
  {
    slug: "giao-hang-trong-dem-o-han-quoc",
    category: "Cuộc sống · Tiêu dùng",
    title: "Đặt tối, sáng nhận: tốc độ giao hàng Hàn Quốc được tạo nên thế nào?",
    summary: "Sự tiện lợi trước cửa nhà dựa trên một mạng lưới mà người mua hiếm khi nhìn thấy.",
    readTime: "6 phút đọc",
    hero: "ORDER NOW\nWAKE UP",
    sections: [
      { heading: "Khoảng cách ngắn giữa cú nhấp và cánh cửa", paragraphs: ["Mật độ đô thị cao, kho hàng gần khu dân cư và hệ thống địa chỉ số hóa giúp nhiều đơn được giao rất nhanh. Với thực phẩm, người dùng có thể đặt trước khi ngủ và nhận vào sáng sớm.", "Trải nghiệm này nhanh chóng trở thành tiêu chuẩn, khiến một đơn giao sau hai ngày bị cảm nhận là chậm dù ở nhiều nơi đó vẫn là bình thường." ]},
      { heading: "Tiện lợi có chi phí phía sau", paragraphs: ["Đóng gói lạnh, xe vận chuyển, ca làm đêm và lượng vật liệu dùng một lần đều tạo ra chi phí lao động và môi trường. Người tiêu dùng có thể giảm tác động bằng cách gộp đơn, chọn hộp tái sử dụng khi có và không đặt món chỉ vì khuyến mại ngắn hạn.", "Khi giao nhầm hoặc hỏng, phản hồi bằng ảnh và thông tin rõ ràng giúp giải quyết nhanh hơn việc trút giận lên nhân viên giao hàng." ]},
      { heading: "Tốc độ không nên che mất con người", paragraphs: ["Dịch vụ tốt là thành tựu của cả hệ thống, không phải phép màu. Nhìn thấy công sức phía sau giúp người mua sử dụng tiện ích có trách nhiệm hơn.", "Bài viết giải thích bối cảnh tiêu dùng chung, không đánh giá một doanh nghiệp hoặc nền tảng cụ thể." ]}
    ]
  },
  {
    slug: "lan-dau-di-jjimjilbang",
    category: "Trải nghiệm Hàn",
    title: "Lần đầu đi jjimjilbang: những điều phim Hàn không nói rõ",
    summary: "Khăn nhỏ, tủ giày và khu tắm riêng giới tính — biết quy trình giúp bớt lúng túng.",
    readTime: "6 phút đọc",
    hero: "JIMJILBANG\nFIRST TIME",
    sections: [
      { heading: "Hai khu vực, hai bộ quy tắc", paragraphs: ["Jjimjilbang thường có khu tắm phân theo giới tính và khu xông hơi chung nơi khách mặc bộ đồ được phát. Tại khu tắm, mọi người tắm sạch trước khi vào bồn; đồ bơi thường không được sử dụng.", "Quy trình cụ thể có thể khác nhau, nên hãy nhìn biển hướng dẫn hoặc hỏi nhân viên. Không chụp ảnh trong khu thay đồ và khu tắm là nguyên tắc tuyệt đối về riêng tư." ]},
      { heading: "Khăn nhỏ không phải lỗi dịch vụ", paragraphs: ["Khăn được phát thường nhỏ hơn khăn tắm ở khách sạn. Người địa phương dùng khăn đó để lau nhiều lần và giữ khu vực chung gọn gàng. Bạn có thể mang đồ chăm sóc cá nhân nếu nơi đó cho phép.", "Trong phòng nóng, bắt đầu thời gian ngắn, uống nước và rời khỏi ngay khi thấy chóng mặt. Xông hơi không phải cuộc thi chịu đựng." ]},
      { heading: "Trải nghiệm văn hóa bằng sự tôn trọng", paragraphs: ["Trứng nướng, nước gạo ngọt và kiểu quấn khăn đầu tạo cảm giác quen thuộc từ phim, nhưng trọng tâm vẫn là nghỉ ngơi. Nói nhỏ, dọn chỗ và tôn trọng cơ thể của người khác giúp bạn hòa vào không gian.", "Người có bệnh nền hoặc mang thai nên hỏi chuyên gia y tế trước khi dùng phòng nhiệt cao; bài viết không phải hướng dẫn y khoa." ]}
    ]
  },
  {
    slug: "le-hoi-truong-dai-hoc-han-quoc",
    category: "Du học",
    title: "Lễ hội đại học Hàn Quốc: vui như concert nhưng cần chuẩn bị gì?",
    summary: "Sân khấu nổi tiếng chỉ là một phần của ngày hội do sinh viên vận hành.",
    readTime: "5 phút đọc",
    hero: "CAMPUS\nFESTIVAL",
    sections: [
      { heading: "Không chỉ đến để xem nghệ sĩ", paragraphs: ["Lễ hội trường thường có gian hàng câu lạc bộ, trò chơi, đồ ăn và sân khấu. Nghệ sĩ khách mời thu hút đám đông, nhưng phần thú vị với du học sinh là cơ hội gặp người ngoài lớp học.", "Thông tin vào cửa, khu vực dành cho sinh viên và thời gian xếp hàng thay đổi từng trường. Chỉ nên tin thông báo chính thức thay vì ảnh chụp lịch truyền tay." ]},
      { heading: "Chuẩn bị cho một ngày dài", paragraphs: ["Mang pin dự phòng, nước, áo nhẹ và giày thoải mái. Hãy xác định điểm gặp nếu nhóm bị tách, vì mạng có thể chậm khi quá đông.", "Đồ uống có cồn không phải điều kiện để hòa nhập. Giữ đồ cá nhân, không chen lấn và rời khỏi khu vực khi cảm thấy không an toàn." ]},
      { heading: "Tham gia thay vì chỉ quan sát", paragraphs: ["Một ca trực ngắn tại gian hàng hoặc hoạt động cùng câu lạc bộ thường tạo nhiều kết nối hơn việc chỉ quay sân khấu. Với người học tiếng Hàn, đây là môi trường thực hành tự nhiên nhưng vẫn nên tôn trọng khi người khác không muốn lên hình.", "Bài viết là hướng dẫn chung; hãy kiểm tra quy định của trường và ban tổ chức trong năm bạn tham dự." ]}
    ]
  }
  ,{
    slug: "lam-them-va-kinh-ngu-han-quoc",
    category: "Du học · Việc làm",
    title: "Đi làm thêm ở Hàn và nỗi sợ nói sai kính ngữ",
    summary: "Khách hàng cần sự rõ ràng và thái độ tốt hơn một câu hoàn hảo như sách giáo khoa.",
    readTime: "6 phút đọc",
    hero: "PART-TIME\nKOREAN",
    sections: [
      { heading: "Lớp học không mô phỏng được giờ cao điểm", paragraphs: ["Khi nhiều đơn đến cùng lúc, tốc độ nói của khách và đồng nghiệp có thể khiến du học sinh quên mọi mẫu câu đã học. Điều này bình thường. Giao tiếp tại nơi làm việc là một kỹ năng riêng cần luyện bằng tình huống lặp lại.", "Hãy viết sẵn những câu quan trọng: xác nhận món, báo hết hàng, xin khách chờ và gọi quản lý. Một bộ câu ngắn chính xác hữu ích hơn cố nói dài." ]},
      { heading: "Lịch sự không đồng nghĩa tự hạ thấp", paragraphs: ["Kính ngữ giúp thể hiện vai trò dịch vụ, nhưng khách hàng không có quyền xúc phạm hoặc quấy rối nhân viên. Khi không hiểu, xin người kia nói lại chậm hơn là hành động chuyên nghiệp, không phải thất bại.", "Thống nhất với quản lý về tình huống nào cần chuyển giao. Biết người hỗ trợ và số điện thoại khẩn cấp giúp ca làm an toàn hơn." ]},
      { heading: "Kiểm tra điều kiện làm việc hợp pháp", paragraphs: ["Du học sinh cần kiểm tra quy định về giấy phép, giờ làm và loại công việc được phép theo tình trạng lưu trú của mình. Hãy lưu hợp đồng, bảng giờ và thông tin trả lương.", "Quy định có thể thay đổi; bài viết không thay thế hướng dẫn của cơ quan nhập cư, trường học hoặc tư vấn pháp lý." ]}
    ]
  },
  {
    slug: "mua-he-am-o-han-quoc",
    category: "Đời sống · Thời tiết",
    title: "Mùa hè Hàn Quốc: vì sao 28°C vẫn có thể rất mệt?",
    summary: "Độ ẩm, mùa mưa và căn phòng kín khiến cảm giác nóng khác hẳn con số dự báo.",
    readTime: "5 phút đọc",
    hero: "HUMID\nSUMMER",
    sections: [
      { heading: "Nhiệt độ không kể hết câu chuyện", paragraphs: ["Mùa hè tại nhiều khu vực Hàn Quốc có độ ẩm cao. Mồ hôi khó bay hơi khiến cơ thể cảm thấy nóng hơn, quần áo lâu khô và phòng dễ có mùi ẩm.", "Người mới thường chỉ nhìn nhiệt độ nhưng bỏ qua chỉ số cảm nhận, cảnh báo mưa lớn và chênh lệch lạnh giữa ngoài trời với tàu điện hoặc quán cà phê." ]},
      { heading: "Cách chuẩn bị thực tế", paragraphs: ["Mang ô gọn, áo khoác mỏng cho không gian điều hòa và khăn nhỏ. Ở nhà, thông gió đúng lúc, dùng chế độ hút ẩm và không để quần áo ướt quá lâu giúp hạn chế nấm mốc.", "Uống nước đều và tránh hoạt động mạnh giữa trưa khi có cảnh báo nóng. Nếu thấy chóng mặt hoặc buồn nôn, hãy vào nơi mát và tìm hỗ trợ." ]},
      { heading: "Đừng xem nhẹ mùa mưa", paragraphs: ["Đường dốc, tầng bán hầm và khu vực ven suối cần được chú ý khi mưa lớn. Theo dõi cảnh báo chính thức và không đi qua đoạn nước chảy chỉ để giữ lịch trình.", "Thông tin trong bài mang tính chuẩn bị chung, không thay thế dự báo thời tiết hoặc hướng dẫn khẩn cấp tại địa phương." ]}
    ]
  },
  {
    slug: "kem-chong-nang-moi-ngay-kbeauty",
    category: "K-beauty · Chăm sóc da",
    title: "Kem chống nắng mỗi ngày: thói quen K-beauty nào đáng học?",
    summary: "Sản phẩm tốt nhất không phải loại nổi nhất, mà là loại bạn dùng đủ và dùng lại được.",
    readTime: "6 phút đọc",
    hero: "DAILY\nSUNSCREEN",
    sections: [
      { heading: "Kết cấu quyết định sự đều đặn", paragraphs: ["Cộng đồng làm đẹp Hàn thường bàn nhiều về cảm giác bôi: có nâng tông, cay mắt, bóng hay vón dưới lớp trang điểm không. Những yếu tố này quan trọng vì sản phẩm khó chịu thường bị dùng quá ít hoặc bỏ quên.", "Hãy chọn mức bảo vệ phù hợp với hướng dẫn trên nhãn và nhu cầu tiếp xúc nắng. Da nhạy cảm nên thử trên vùng nhỏ trước khi dùng rộng." ]},
      { heading: "Bôi lại là phần khó nhất", paragraphs: ["Mồ hôi, lau mặt và thời gian ngoài trời làm lớp bảo vệ giảm. Người dùng có thể mang dạng quen thuộc để bôi lại, nhưng không nên cho rằng cushion hay phấn chống nắng luôn thay thế được lớp kem đủ lượng.", "Mũ, kính, bóng râm và quần áo vẫn là phần của chiến lược chống nắng. Mỹ phẩm không cần gánh toàn bộ công việc." ]},
      { heading: "Đừng biến skincare thành nỗi sợ", paragraphs: ["Chống nắng là thói quen chăm sóc, không phải lý do sợ mọi tia sáng. Chọn sản phẩm dễ dùng, theo hướng dẫn và điều chỉnh theo hoạt động thực tế.", "Bài viết mang tính thông tin mỹ phẩm, không chẩn đoán bệnh da. Nếu có phản ứng kéo dài, hãy ngừng dùng và hỏi chuyên gia y tế." ]}
    ]
  },
  {
    slug: "lam-sach-hai-buoc-co-can-thiet",
    category: "K-beauty · Làm sạch",
    title: "Double cleansing có cần thiết với tất cả mọi người?",
    summary: "Hai bước làm sạch hữu ích trong đúng hoàn cảnh, nhưng nhiều hơn không phải lúc nào cũng sạch hơn.",
    readTime: "6 phút đọc",
    hero: "DOUBLE\nCLEANSING",
    sections: [
      { heading: "Mục tiêu là loại bỏ lớp bám trên da", paragraphs: ["Bước dầu hoặc balm giúp hòa tan trang điểm và sản phẩm chống nước; bước rửa bằng nước loại bỏ phần còn lại. Với người trang điểm đậm hoặc dùng chống nắng bền nước, cách này có thể tiện.", "Nếu chỉ dùng sản phẩm nhẹ và sữa rửa mặt đã làm sạch tốt, thêm bước chưa chắc cần thiết. Cảm giác căng rít không phải dấu hiệu duy nhất của da sạch." ]},
      { heading: "Dấu hiệu bạn đang làm quá", paragraphs: ["Da khô căng, đỏ hoặc châm chích sau rửa có thể liên quan đến sản phẩm quá mạnh, nước quá nóng hoặc massage quá lâu. Hãy giảm tần suất và thay đổi từng yếu tố để biết nguyên nhân.", "Không cần dùng bông chà mạnh. Bàn tay sạch, động tác nhẹ và thời gian vừa đủ thường tốt hơn cảm giác kỳ cọ." ]},
      { heading: "Routine nên phục vụ làn da", paragraphs: ["Xu hướng K-beauty dễ biến một bước tùy chọn thành quy tắc bắt buộc. Hãy đánh giá dựa trên thứ cần loại bỏ, phản ứng của da và sự thuận tiện.", "Nội dung không thay thế tư vấn da liễu; người có bệnh da hoặc đang điều trị nên làm theo hướng dẫn chuyên môn." ]}
    ]
  },
  {
    slug: "cushion-han-quoc-hop-voi-ai",
    category: "K-beauty · Trang điểm",
    title: "Cushion Hàn Quốc tiện thật, nhưng hợp với ai?",
    summary: "Lớp nền đẹp phụ thuộc vào da, khí hậu và cách dặm hơn lời quảng cáo ‘mỏng như không’.",
    readTime: "5 phút đọc",
    hero: "CUSHION\nCHECK",
    sections: [
      { heading: "Sức hút nằm ở sự nhanh gọn", paragraphs: ["Cushion kết hợp nền, bông mút và gương trong một hộp nhỏ. Người dùng có thể dặm lớp mỏng, mang theo và sửa trang điểm mà không cần nhiều dụng cụ.", "Đổi lại, lượng sản phẩm lấy ra khó đoán và bảng màu không phải lúc nào cũng phù hợp mọi tông da. Màu trên ảnh quảng cáo còn bị ảnh hưởng bởi ánh sáng." ]},
      { heading: "Dặm thay vì kéo", paragraphs: ["Lấy ít sản phẩm ở lần đầu, phân bố trên nắp trong rồi dặm từ trung tâm khuôn mặt. Vùng khô cần dưỡng vừa đủ; vùng dễ dầu nên dùng lớp mỏng và cố định có chọn lọc.", "Giặt hoặc thay bông mút thường xuyên theo hướng dẫn của hãng. Không dùng chung bông để giảm nguy cơ lây nhiễm và kích ứng." ]},
      { heading: "Đừng mua chỉ vì số màu", paragraphs: ["Tên màu giữa các thương hiệu không hoàn toàn tương đương. Thử ở đường hàm, quan sát dưới ánh sáng tự nhiên và chờ màu ổn định trước khi quyết định.", "Bài viết là hướng dẫn sử dụng mỹ phẩm chung; hãy ngừng dùng nếu xuất hiện phản ứng bất thường." ]}
    ]
  },
  {
    slug: "nuoc-hoa-mui-sach-o-han-quoc",
    category: "K-beauty · Hương thơm",
    title: "Vì sao ‘mùi sạch’ được yêu thích trong cộng đồng nước hoa Hàn?",
    summary: "Xà phòng, khăn vừa giặt và da sau khi tắm tạo cảm giác gần gũi hơn một mùi hương lớn.",
    readTime: "5 phút đọc",
    hero: "CLEAN\nSCENT",
    sections: [
      { heading: "Mùi hương gần da", paragraphs: ["Trong không gian đông như tàu điện và văn phòng, nước hoa tỏa quá mạnh dễ làm người khác khó chịu. Vì thế các mô tả như mùi xà phòng, cotton hoặc dầu gội thường được ưa chuộng.", "‘Sạch’ không phải một nguyên liệu duy nhất. Có mùi thiên phấn, có mùi xạ nhẹ, có mùi cam chanh. Tên gọi giống nhau không bảo đảm cảm giác giống nhau trên da." ]},
      { heading: "Thử trên da, không chỉ trên giấy", paragraphs: ["Nhiệt độ và da làm mùi thay đổi theo thời gian. Hãy xịt một lượng nhỏ, chờ qua lớp hương đầu và kiểm tra trong môi trường bạn thường ở.", "Khi đi làm, một hoặc hai lần xịt thường đủ với mùi bám tốt. Không xịt thêm liên tục chỉ vì mũi đã quen; người bên cạnh vẫn có thể cảm nhận rõ." ]},
      { heading: "Hương thơm cũng là phép lịch sự", paragraphs: ["Mục tiêu không phải để cả phòng biết bạn đã đến. Một mùi hương phù hợp nên nằm trong phạm vi gần và không cạnh tranh với không gian chung.", "Người nhạy cảm với hương liệu nên tránh thử quá nhiều cùng lúc; bài viết không đưa ra tuyên bố an toàn y khoa cho từng sản phẩm." ]}
    ]
  },
  {
    slug: "duong-am-theo-mua-kbeauty",
    category: "K-beauty · Chăm sóc da",
    title: "Skincare Hàn thay đổi theo mùa như thế nào?",
    summary: "Mùa đông khô và mùa hè ẩm đòi hỏi điều chỉnh kết cấu, không nhất thiết mua cả routine mới.",
    readTime: "6 phút đọc",
    hero: "SEASONAL\nSKINCARE",
    sections: [
      { heading: "Giữ mục tiêu, đổi trọng lượng", paragraphs: ["Vào mùa hè ẩm, nhiều người chuyển sang lotion hoặc gel nhẹ và giảm số lớp. Mùa đông có sưởi trong nhà khiến da mất nước nhanh hơn, nên kem đặc hoặc lớp khóa ẩm có thể dễ chịu hơn.", "Điều chỉnh không đồng nghĩa thay toàn bộ sản phẩm. Giữ sữa rửa mặt và chống nắng phù hợp, sau đó thay một bước dưỡng là cách ít rủi ro hơn." ]},
      { heading: "Thêm từng sản phẩm một", paragraphs: ["Khi đổi nhiều món cùng lúc, rất khó biết thứ gì gây bí hoặc kích ứng. Hãy thử từng sản phẩm, theo dõi vài ngày và đọc hướng dẫn sử dụng.", "Độ ẩm không khí, điều hòa, thuốc đang dùng và tình trạng da cá nhân đều ảnh hưởng. Routine của người sống ở Seoul không tự động phù hợp khí hậu Việt Nam." ]},
      { heading: "K-beauty là công cụ, không phải công thức", paragraphs: ["Điều đáng học là khả năng quan sát da và điều chỉnh linh hoạt, không phải số bước. Một routine ba bước ổn định có thể tốt hơn mười sản phẩm thay đổi liên tục.", "Nếu da đỏ, đau hoặc bong kéo dài, hãy tìm tư vấn y tế thay vì tiếp tục thử xu hướng mới." ]}
    ]
  },
  {
    slug: "my-pham-mini-size-han-quoc",
    category: "K-beauty · Tiêu dùng",
    title: "Mỹ phẩm mini-size: tiết kiệm hay khiến bạn mua nhiều hơn?",
    summary: "Kích thước nhỏ giảm rủi ro thử sản phẩm nhưng cũng dễ biến thành bộ sưu tập chưa dùng hết.",
    readTime: "5 phút đọc",
    hero: "MINI SIZE\nBIG CHOICE",
    sections: [
      { heading: "Nhỏ hữu ích khi có mục đích", paragraphs: ["Mini-size phù hợp cho du lịch, thử màu hoặc kiểm tra cảm giác sản phẩm trước khi mua bản lớn. Với món có hạn dùng ngắn sau mở nắp, kích thước nhỏ còn giúp giảm lãng phí.", "Tuy nhiên, giá theo mỗi mililit thường cao hơn. Quà tặng kèm miễn phí cũng có thể khiến giỏ hàng vượt xa nhu cầu ban đầu." ]},
      { heading: "Tính giá trị thay vì đếm món", paragraphs: ["Trước khi mua set, hãy hỏi bạn có dùng từng sản phẩm không và kích thước có đủ để đánh giá không. Son mini có thể dùng lâu, nhưng gói dưỡng một lần khó cho biết phản ứng dài hạn.", "Ghi ngày mở nắp và không giữ mẫu thử vô thời hạn. Sản phẩm đổi mùi, màu hoặc kết cấu nên được bỏ theo hướng dẫn." ]},
      { heading: "Thử ít để chọn chính xác", paragraphs: ["Giá trị lớn nhất của mini-size là cho phép nói ‘không’ với bản đầy đủ nếu sản phẩm không hợp. Nó mất ý nghĩa khi trở thành lý do mua thêm nhiều món cùng lúc.", "Bài viết không đánh giá thương hiệu cụ thể và khuyến khích kiểm tra nhãn, hạn dùng, nơi bán đáng tin cậy." ]}
    ]
  },
  {
    slug: "doc-review-my-pham-cong-dong-han",
    category: "K-beauty · Review",
    title: "Đọc review mỹ phẩm Hàn thế nào để không bị ‘hợp với người ta’ đánh lừa?",
    summary: "Một đánh giá hữu ích cần loại da, thời gian sử dụng và điều kiện thử — không chỉ ảnh đẹp.",
    readTime: "6 phút đọc",
    hero: "READ\nTHE REVIEW",
    sections: [
      { heading: "Tìm bối cảnh trước lời khen", paragraphs: ["Câu ‘thấm nhanh’ có ý nghĩa khác trên da dầu mùa hè và da khô mùa đông. Khi đọc review, hãy tìm loại da, khí hậu, sản phẩm dùng cùng và thời gian theo dõi.", "Ảnh trước–sau có thể khác ánh sáng, góc máy và trang điểm. Một bức ảnh không đủ chứng minh hiệu quả hoặc nguyên nhân." ]},
      { heading: "Nhận diện động cơ thương mại", paragraphs: ["Bài được tặng sản phẩm không tự động vô dụng, nhưng cần được công khai. Mã giảm giá, liên kết mua hàng và ngôn ngữ giống hệt thông cáo là tín hiệu nên đọc thận trọng.", "So sánh nhiều nguồn, ưu tiên nhận xét có cả điểm tốt lẫn hạn chế. Review hoàn toàn tích cực cho mọi loại da thường ít giá trị quyết định." ]},
      { heading: "Biến review thành giả thuyết", paragraphs: ["Đánh giá của người khác chỉ giúp bạn dự đoán, không bảo đảm kết quả. Thử trên vùng nhỏ, thêm từng sản phẩm và giữ routine đơn giản là cách kiểm tra an toàn hơn.", "Không dựa vào review cộng đồng để tự điều trị bệnh da. Các tuyên bố y khoa cần được kiểm tra bằng nguồn chuyên môn." ]}
    ]
  },
  {
    slug: "kbeauty-can-bang-chung",
    category: "K-beauty · Xu hướng",
    title: "K-beauty đang chuyển từ ‘cảm giác tốt’ sang ‘chứng minh được’",
    summary: "Người mua ngày càng hỏi dữ liệu, phương pháp thử và ý nghĩa thật của một con số quảng cáo.",
    readTime: "6 phút đọc",
    hero: "PROOF\nOVER HYPE",
    sections: [
      { heading: "Một con số đẹp chưa đủ", paragraphs: ["Các thương hiệu thường đưa ra tỷ lệ cải thiện sau thử nghiệm. Để hiểu con số, người mua cần biết có bao nhiêu người tham gia, dùng trong bao lâu, chỉ số được đo bằng thiết bị hay tự đánh giá và kết quả có ý nghĩa thực tế không.", "‘Đã thử nghiệm’ không đồng nghĩa sản phẩm phù hợp mọi người. Điều kiện nghiên cứu có thể rất khác cách sử dụng hằng ngày." ]},
      { heading: "Phân biệt mỹ phẩm và điều trị", paragraphs: ["Mỹ phẩm có thể hỗ trợ vẻ ngoài và cảm giác của da, nhưng không nên được quảng cáo như thuốc nếu không đáp ứng yêu cầu tương ứng. Những lời hứa tuyệt đối, hiệu quả tức thì hoặc chữa được nhiều vấn đề cùng lúc cần được xem xét kỹ.", "Người mua có thể kiểm tra danh sách thành phần, hướng dẫn và thông tin công bố chính thức thay vì chỉ dựa vào video ngắn." ]},
      { heading: "Sự hoài nghi lành mạnh giúp thị trường tốt hơn", paragraphs: ["Đặt câu hỏi không có nghĩa chống lại K-beauty. Khi người tiêu dùng yêu cầu bằng chứng rõ, thương hiệu có động lực đầu tư vào dữ liệu và giao tiếp trung thực hơn.", "Bài viết tổng hợp xu hướng ngành và nguyên tắc đọc tuyên bố mỹ phẩm; không phải đánh giá khoa học cho một sản phẩm cụ thể." ]}
    ]
  }
];

export const communityPosts: CommunityPost[] = rawCommunityPosts.map(post =>
  post.kind === "news" || post.kind === "review" ? post : enrichKoreaStory(post),
);
