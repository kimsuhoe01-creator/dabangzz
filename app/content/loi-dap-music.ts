import type { CommunityPost } from "./community-posts";

export const LOI_DAP_CHANNEL_ID = "UCFKSv3qumWBRQ_ljks7DO6Q";
export const LOI_DAP_CHANNEL_URL = "https://www.youtube.com/channel/UCFKSv3qumWBRQ_ljks7DO6Q";
export const YOUTUBE_VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

type LoiDapVideo = NonNullable<CommunityPost["youtube"]>;

export function isVerifiedLoiDapVideo(video: LoiDapVideo) {
  if (video.channelId !== LOI_DAP_CHANNEL_ID || !YOUTUBE_VIDEO_ID_PATTERN.test(video.videoId)) return false;

  try {
    const watchUrl = new URL(video.watchUrl);
    const channelUrl = new URL(video.channelUrl);
    const thumbnailUrl = new URL(video.thumbnailUrl);

    return watchUrl.protocol === "https:"
      && watchUrl.hostname === "www.youtube.com"
      && watchUrl.pathname === "/watch"
      && watchUrl.searchParams.get("v") === video.videoId
      && [...watchUrl.searchParams.keys()].every(key => key === "v")
      && channelUrl.href === `${LOI_DAP_CHANNEL_URL}`
      && thumbnailUrl.protocol === "https:"
      && thumbnailUrl.hostname === "i.ytimg.com"
      && thumbnailUrl.pathname.startsWith(`/vi/${video.videoId}/`);
  } catch {
    return false;
  }
}

export function getLoiDapEmbedUrl(video: LoiDapVideo) {
  if (!isVerifiedLoiDapVideo(video)) throw new Error("Invalid Lời Đáp YouTube video metadata");
  return `https://www.youtube-nocookie.com/embed/${video.videoId}?controls=1`;
}

export const loiDapMusicPosts: CommunityPost[] = [
  {
    slug: "em-chang-hieu-anh-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "EM CHẲNG HIỂU ANH: đến khi mất nhau mới nhận ra điều anh cần",
    summary: "Ca khúc emotional hip-hop/R&B kể từ phía cô gái nhớ rất rõ những món quà và chiếc áo của người yêu, nhưng chỉ sau khi chia tay mới hiểu rằng điều quan trọng nhất cô đã bỏ lỡ là trạng thái của trái tim anh.",
    readTime: "5 phút đọc · nghe",
    hero: "EM CHẲNG\nHIỂU ANH",
    publishedAt: "2026-07-29T20:35:00+07:00",
    updatedAt: "2026-07-29T20:35:00+07:00",
    youtube: {
      videoId: "s4IEw-HATdg",
      sourceTitle: "EM CHẲNG HIỂU ANH – Mất Nhau Rồi Mới Hiểu | Nhạc Tâm Trạng Nữ",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-29T13:00:25Z",
      thumbnailUrl: "https://i.ytimg.com/vi/s4IEw-HATdg/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=s4IEw-HATdg",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: null,
      aiDisclosure: "Kênh công bố đây là ca khúc Việt Nam nguyên bản được sáng tác và sản xuất bằng công nghệ AI; mô tả không gắn giọng hát hoặc hình ảnh với một nghệ sĩ có thật.",
    },
    keyFacts: [
      { label: "Công bố", value: "29/7/2026", note: "20:00 theo giờ Việt Nam, dựa trên nguồn cấp dữ liệu công khai của đúng kênh Lời Đáp." },
      { label: "Điểm nhìn", value: "Cô gái hiểu ra sau chia tay", note: "Cô nhớ đồ vật và kỷ niệm nhưng đã không nhận ra trái tim người yêu đang rời xa." },
      { label: "Âm nhạc", value: "Emotional hip-hop/R&B", note: "Giọng nữ và phụ đề tiếng Việt được nêu trong mô tả chính thức." },
      { label: "Quan hệ tác phẩm", value: "Ca khúc độc lập", note: "Kênh không nêu một bài hát cụ thể làm đối tượng hồi đáp." },
    ],
    sourceLinks: [
      { label: "EM CHẲNG HIỂU ANH – video chính thức trên YouTube", url: "https://www.youtube.com/watch?v=s4IEw-HATdg" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Dabangzz biên tập trang nghe từ tiêu đề, ngày công bố và mô tả công khai của video. Nguồn không cung cấp toàn bộ ca từ, công cụ AI hoặc quy trình sản xuất chi tiết nên bài viết không bổ sung những thông tin chưa được xác nhận.",
    sections: [
      {
        heading: "Nhớ mọi món quà nhưng lại bỏ lỡ điều quan trọng nhất",
        paragraphs: [
          "Mô tả chính thức đặt cô gái vào một nghịch lý rất đời thường: cô nhớ rõ từng món quà, từng chiếc áo, nhưng lại không nhận ra trái tim người mình yêu đang dần rời xa. Vì thế, vấn đề không nằm ở việc quên kỷ niệm. Điều cô bỏ lỡ là tín hiệu cảm xúc nằm phía sau những thứ có thể nhìn thấy và cầm nắm.",
          "Nhan đề “Em chẳng hiểu anh” giống một lời thừa nhận đến muộn hơn là lời trách móc. Câu chuyện không buộc người nghe phải chọn bên đúng hay sai, mà gợi một câu hỏi gần gũi: trong một mối quan hệ, ta đang ghi nhớ những món đồ hay thật sự chú ý đến điều người kia cần?",
        ],
      },
      {
        heading: "Đây là ca khúc độc lập, không phải lời hồi đáp được gán thêm",
        paragraphs: [
          "Kênh không nêu tên một ca khúc cụ thể làm đối tượng hồi đáp cho video này. Dù câu chuyện chia tay và cách xưng hô tạo cảm giác như một cuộc đối thoại, Dabangzz không tự gắn tác phẩm với bài hát khác hoặc suy đoán quan hệ bản quyền chỉ từ mô-típ quen thuộc.",
          "Mô tả cũng không kể toàn bộ nguyên nhân dẫn đến chia tay. Khoảng trống đó nên được giữ nguyên: người nghe có thể theo dõi phụ đề tiếng Việt trong video để cảm nhận diễn biến, nhưng không nên xem những chi tiết do người viết tưởng tượng thêm là một phần của câu chuyện chính thức.",
        ],
      },
      {
        heading: "Điểm nghe: emotional hip-hop/R&B và cảm giác nhận ra quá muộn",
        paragraphs: [
          "Kênh giới thiệu ca khúc theo hướng emotional hip-hop/R&B với giọng nữ. Lối thể hiện này phù hợp với một lời độc thoại riêng tư: nhịp điệu giữ câu chuyện tiến về phía trước, còn phần cảm xúc tập trung vào khoảnh khắc cô gái nhìn lại điều mình đã không hiểu.",
          "Điểm đáng chú ý nhất là sự đối lập giữa những vật cụ thể cô nhớ rất rõ và một trái tim đang xa dần mà cô không nhận ra. Video không hứa hẹn một nút thắt hay cuộc đoàn tụ, nên trải nghiệm nghe nằm ở sự thức tỉnh muộn màng ấy.",
        ],
      },
      {
        heading: "Thông tin AI được công bố đến đâu?",
        paragraphs: [
          "Phần mô tả chính thức cho biết đây là ca khúc Việt Nam nguyên bản được sáng tác và sản xuất bằng công nghệ AI. Kênh đồng thời công bố giọng nữ, thể loại emotional hip-hop/R&B và phụ đề tiếng Việt đã được căn theo lời hát.",
          "Nguồn không nêu công cụ, mô hình, dữ liệu huấn luyện hoặc quy trình tạo hình ảnh. Vì vậy Dabangzz chỉ ghi nhận đúng phạm vi đã công bố và không gắn giọng hát với người thật. Nếu kênh bổ sung thông tin sau này, trang này sẽ được cập nhật thay vì tạo một bài trùng lặp.",
        ],
      },
      {
        heading: "Nghe trực tiếp và kiểm tra video gốc",
        paragraphs: [
          "Trình phát bên dưới dùng chế độ tăng cường quyền riêng tư của YouTube, giữ tỷ lệ 16:9 và không tự phát. Người nghe chủ động bấm nút phát, đồng thời có thể bật phụ đề tiếng Việt để theo dõi câu chuyện sát với phần lời đã được kênh cung cấp.",
          "Liên kết video gốc và kênh Lời Đáp được đặt ngay trên trang để người đọc kiểm tra nguồn. Dabangzz dùng mã video s4IEw-HATdg làm khóa chống trùng và không lưu hoặc hiển thị iframe tùy ý từ nguồn khác.",
        ],
      },
    ],
  },
  {
    slug: "tai-troi-mua-nen-em-nho-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "TẠI TRỜI MƯA NÊN EM NHỚ: ký ức cũ trở lại trong một đêm Hà Nội",
    summary: "Ca khúc R&B/melodic hip-hop kể về cô gái không muốn quay lại và cũng không còn chờ tin nhắn, nhưng một đêm mưa kéo dài ở Hà Nội vẫn khiến cô bất chợt nhớ người từng thương.",
    readTime: "5 phút đọc · nghe",
    hero: "TẠI TRỜI MƯA\nNÊN EM NHỚ",
    publishedAt: "2026-07-29T20:36:00+07:00",
    updatedAt: "2026-07-29T20:36:00+07:00",
    youtube: {
      videoId: "RFjwuCDpj7k",
      sourceTitle: "TẠI TRỜI MƯA NÊN EM NHỚ – Mưa Ngừng Rồi Em Sẽ Quên Thôi | Nhạc Mưa Hà Nội",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-29T13:00:16Z",
      thumbnailUrl: "https://i.ytimg.com/vi/RFjwuCDpj7k/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=RFjwuCDpj7k",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: null,
      aiDisclosure: "Kênh công bố đây là ca khúc Việt Nam nguyên bản được sáng tác và sản xuất bằng công nghệ AI; mô tả không nêu nghệ sĩ thật hoặc quy trình tạo hình ảnh.",
    },
    keyFacts: [
      { label: "Công bố", value: "29/7/2026", note: "20:00 theo giờ Việt Nam, dựa trên nguồn cấp dữ liệu công khai của đúng kênh Lời Đáp." },
      { label: "Bối cảnh", value: "Một đêm mưa Hà Nội", note: "Địa danh và thời điểm cảm xúc được nêu trực tiếp trong mô tả chính thức." },
      { label: "Âm nhạc", value: "R&B / melodic hip-hop", note: "Giọng nữ, một đoạn giọng nam ngắn và phụ đề tiếng Việt được kênh công bố." },
      { label: "Quan hệ tác phẩm", value: "Ca khúc độc lập", note: "Kênh không nêu một bài hát cụ thể làm đối tượng hồi đáp." },
    ],
    sourceLinks: [
      { label: "TẠI TRỜI MƯA NÊN EM NHỚ – video chính thức trên YouTube", url: "https://www.youtube.com/watch?v=RFjwuCDpj7k" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Dabangzz biên tập trang nghe từ tiêu đề, ngày công bố và mô tả công khai của video. Bài viết không suy đoán danh tính nhân vật, địa điểm cụ thể tại Hà Nội, toàn bộ ca từ hoặc quy trình AI mà nguồn chưa công bố.",
    sections: [
      {
        heading: "Không muốn quay lại vẫn có thể bất chợt nhớ",
        paragraphs: [
          "Mô tả chính thức xác định ranh giới khá rõ: cô gái không muốn quay lại và cũng không còn chờ tin nhắn của người cũ. Điều làm ký ức trở về không phải một lời mời tái hợp, mà là cơn mưa kéo dài ngoài kia. Cách kể ấy tách hai trạng thái thường bị đánh đồng: nhớ một người không nhất thiết có nghĩa là muốn bắt đầu lại.",
          "Nhan đề “Tại trời mưa nên em nhớ” giống một lời tự giải thích để giữ khoảng cách với cảm xúc vừa trỗi dậy. Quyết định có thể không thay đổi, trong khi ký ức vẫn xuất hiện trong một khoảnh khắc. Chính sự lệch nhịp đó tạo nên phần căng thẳng của câu chuyện.",
        ],
      },
      {
        heading: "Hà Nội là bối cảnh cảm xúc, không phải một địa điểm được bịa thêm",
        paragraphs: [
          "Kênh chỉ nêu một đêm mưa Hà Nội, không chỉ rõ con phố, quán cà phê hay căn phòng nào. Dabangzz vì thế giữ bối cảnh ở đúng mức đã được xác nhận, thay vì thêm một khung cảnh cụ thể có thể khiến người đọc hiểu nhầm là chi tiết trong lời hát.",
          "Mưa ở đây làm nhịp thời gian chậm lại và đưa ký ức cũ trở về. Đó là cách đọc từ phần giới thiệu công khai, không phải một công thức tâm lý áp dụng cho mọi người. Người nghe có thể tự tìm thấy câu chuyện riêng mà không cần một địa chỉ tưởng tượng.",
        ],
      },
      {
        heading: "Điểm nghe: giọng nữ, một đoạn giọng nam và nhịp melodic hip-hop",
        paragraphs: [
          "Thông tin chính thức cho biết ca khúc có giọng nữ cùng một đoạn giọng nam ngắn, đặt trên nền R&B/melodic hip-hop. Nguồn không nói đoạn giọng nam đại diện cho ai, nên bài viết không tự chia vai hoặc gán lời thoại cho người cũ.",
          "Sự mềm mại của R&B và độ trôi của melodic hip-hop hợp với mâu thuẫn giữa lý trí và cảm xúc: cô không chờ nữa nhưng vẫn nhớ. Phần mô tả không xác nhận một cuộc gặp lại, vì vậy điểm nghe nằm ở khoảnh khắc ký ức ghé qua hơn là một kết thúc đoàn tụ.",
        ],
      },
      {
        heading: "Ca khúc nguyên bản có hỗ trợ AI",
        paragraphs: [
          "Lời Đáp công bố đây là ca khúc Việt Nam nguyên bản được sáng tác và sản xuất bằng công nghệ AI. Kênh cũng nêu thể loại, cấu trúc giọng hát và việc video có phụ đề tiếng Việt đã căn theo lời.",
          "Không có thông tin chính thức về công cụ, mô hình, dữ liệu huấn luyện hay cách tạo hình ảnh. Dabangzz không suy đoán các chi tiết đó và không gắn giọng hát với một nghệ sĩ thật. Mọi cập nhật đã xác nhận sẽ được đưa vào cùng trang mang mã video này.",
        ],
      },
      {
        heading: "Nghe trên Dabangzz hoặc mở video gốc",
        paragraphs: [
          "Trình phát dùng miền youtube-nocookie.com, giữ tỷ lệ 16:9 và không tự phát. Người nghe chủ động bấm nút phát, có thể bật phụ đề tiếng Việt và nghe phần giọng nam ngắn trong đúng ngữ cảnh của bản gốc.",
          "Trang cung cấp liên kết trực tiếp đến video và kênh Lời Đáp để kiểm tra nguồn. Mã RFjwuCDpj7k là khóa chống trùng, nhờ đó cùng một video sẽ được cập nhật tại đây thay vì xuất bản thành nhiều bài khác nhau.",
        ],
      },
    ],
  },
  {
    slug: "em-da-khong-tro-ve-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "EM ĐÃ KHÔNG TRỞ VỀ: lời kể của cô gái đã chọn rời đi",
    summary: "Lời hồi đáp cho “Chắc Ai Đó Sẽ Về” chuyển điểm nhìn sang người con gái đã rời khỏi mối quan hệ: cô không còn là người được chờ đợi, mà là người phải tự nói vì sao mình không quay lại.",
    readTime: "5 phút đọc · nghe",
    hero: "EM ĐÃ KHÔNG\nTRỞ VỀ",
    publishedAt: "2026-07-27T20:32:00+07:00",
    updatedAt: "2026-07-27T20:32:00+07:00",
    youtube: {
      videoId: "XAC8VWcOBLM",
      sourceTitle: "EM ĐÃ KHÔNG TRỞ VỀ | Lời hồi đáp “Chắc Ai Đó Sẽ Về”",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-27T13:00:20Z",
      thumbnailUrl: "https://i.ytimg.com/vi/XAC8VWcOBLM/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=XAC8VWcOBLM",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: "Chắc Ai Đó Sẽ Về",
      aiDisclosure: "Lời Đáp công bố đây là sáng tác AI độc lập với giai điệu, ca từ và giọng hát mới; không phải bản cover và không sử dụng bản ghi âm gốc.",
    },
    keyFacts: [
      { label: "Công bố", value: "27/7/2026", note: "20:00 theo giờ Việt Nam, dựa trên nguồn cấp dữ liệu công khai của đúng kênh Lời Đáp." },
      { label: "Điểm nhìn", value: "Người con gái đã rời đi", note: "Thông tin được nêu trực tiếp trong phần mô tả chính thức của video." },
      { label: "Bài được hồi đáp", value: "Chắc Ai Đó Sẽ Về", note: "Lời hồi đáp độc lập, không phải cover và không dùng bản ghi âm gốc." },
    ],
    sourceLinks: [
      { label: "EM ĐÃ KHÔNG TRỞ VỀ – video chính thức trên YouTube", url: "https://www.youtube.com/watch?v=XAC8VWcOBLM" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Dabangzz biên tập trang nghe từ tiêu đề, ngày công bố và mô tả công khai của video. Phần mô tả không cung cấp toàn bộ ca từ hoặc quy trình tạo hình ảnh, vì vậy bài viết không bổ sung chi tiết chưa được xác nhận.",
    sections: [
      {
        heading: "Khi người được chờ đợi tự lên tiếng",
        paragraphs: [
          "Phần giới thiệu chính thức xác định rất rõ điểm nhìn: đây là câu chuyện do người con gái đã rời đi kể lại. Sự thay đổi ấy là trục chính của bài. Thay vì tiếp tục đứng ở phía người chờ một cuộc trở về, người nghe được mời bước sang phía người đã quyết định không quay lại và lắng nghe điều cô muốn nói.",
          "Tiêu đề không hứa hẹn một cuộc đoàn tụ. “Em đã không trở về” là một câu ở thì đã xảy ra, nên cảm xúc nằm ở việc nhìn lại lựa chọn hơn là trì hoãn kết quả. Cách đặt tên này tạo một câu trả lời trực tiếp cho sự mong đợi, đồng thời mở ra câu hỏi khó hơn: rời đi có phải lúc nào cũng đồng nghĩa với không còn tình cảm hay không.",
        ],
      },
      {
        heading: "Quan hệ với “Chắc Ai Đó Sẽ Về” được giới hạn ra sao?",
        paragraphs: [
          "Kênh gọi tác phẩm là lời hồi đáp cho “Chắc Ai Đó Sẽ Về”. Mối liên hệ được dùng ở tầng điểm nhìn và câu chuyện: một bên chờ, bên kia giải thích sự vắng mặt. Dabangzz không diễn giải đây là phần tiếp theo chính thức của tác phẩm kia và cũng không gán thêm quan hệ bản quyền mà nguồn không công bố.",
          "Mô tả video nhấn mạnh đây là sáng tác độc lập, có giai điệu, ca từ và giọng hát mới. Nó không phải bản cover và không sử dụng bản ghi âm gốc. Vì vậy, cách nghe phù hợp là xem bài như một câu chuyện mới đối thoại với một tình huống quen thuộc, chứ không phải phiên bản thay lời trên nền nhạc cũ.",
        ],
      },
      {
        heading: "Điểm nghe nằm ở quyết định, không phải cú ngoặt được bịa thêm",
        paragraphs: [
          "Mô tả công khai không tiết lộ đầy đủ lý do cô gái rời đi, và Dabangzz không tự điền vào khoảng trống đó. Khi nghe, có thể tập trung vào cách nhân vật chịu trách nhiệm cho câu trả lời của mình: cô không còn để người kia tiếp tục đoán rằng một ngày nào đó mình sẽ xuất hiện trước cửa.",
          "Bài cũng gợi ra hai cảm xúc có thể tồn tại cùng lúc: người ở lại có quyền nhớ, còn người rời đi có thể có lý do để không trở về. Chính khoảng cách giữa hai điều này tạo sức nặng cho lời hồi đáp. Muốn theo dõi chi tiết hơn, người nghe nên bật phụ đề của video thay vì dựa vào một bản tóm tắt thay cho ca từ.",
        ],
      },
      {
        heading: "Thông tin AI được công bố đến đâu?",
        paragraphs: [
          "Lời Đáp công bố đây là một sáng tác AI độc lập và xác nhận giai điệu, ca từ, giọng hát đều mới. Kênh cũng nói rõ tác phẩm không dùng bản ghi âm gốc. Dabangzz giữ nguyên phạm vi thông tin đó để người nghe không nhầm video với bản cover hoặc một bản thu của ca sĩ thật.",
          "Phần mô tả hiện không giải thích công cụ, mô hình hoặc quy trình tạo hình ảnh. Vì thế, bài viết không đoán thêm những chi tiết này. Nếu kênh cập nhật thông tin sản xuất, Dabangzz sẽ bổ sung ngay trên cùng trang dựa theo video ID, thay vì tạo thêm một bài trùng lặp.",
        ],
      },
      {
        heading: "Nghe trực tiếp hoặc kiểm tra video gốc",
        paragraphs: [
          "Khung phát trên Dabangzz dùng miền youtube-nocookie.com và không tự động phát. Âm thanh chỉ bắt đầu khi người đọc chủ động bấm nút. Điều này giữ quyền lựa chọn cho người dùng và tránh biến trang bài viết thành một trình phát tự chạy.",
          "Liên kết video gốc và kênh Lời Đáp được đặt ngay trên trang để người nghe có thể xem mô tả mới nhất, phụ đề, bình luận và thông tin do chủ kênh cập nhật. Video ID XAC8VWcOBLM là khóa duy nhất của bài này; mọi chỉnh sửa sau đó sẽ giữ nguyên URL Dabangzz.",
        ],
      },
    ],
  },
  {
    slug: "em-biet-anh-o-phia-sau-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "EM BIẾT ANH Ở PHÍA SAU: cô gái có thật sự không nhận ra?",
    summary: "Lời hồi đáp cho “Phía Sau Một Cô Gái” được kể từ phía cô gái vốn luôn biết có một người lặng lẽ đứng sau mình, biến sự im lặng quen thuộc thành câu hỏi về điều cả hai chưa nói.",
    readTime: "5 phút đọc · nghe",
    hero: "EM BIẾT ANH\nỞ PHÍA SAU",
    publishedAt: "2026-07-27T20:31:00+07:00",
    updatedAt: "2026-07-27T20:31:00+07:00",
    youtube: {
      videoId: "Uco9LpBuiqA",
      sourceTitle: "EM BIẾT ANH Ở PHÍA SAU | Lời hồi đáp “Phía Sau Một Cô Gái”",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-27T13:00:17Z",
      thumbnailUrl: "https://i.ytimg.com/vi/Uco9LpBuiqA/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=Uco9LpBuiqA",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: "Phía Sau Một Cô Gái",
      aiDisclosure: "Lời Đáp công bố đây là sáng tác AI độc lập với giai điệu, ca từ và giọng hát mới; không phải bản cover và không sử dụng bản ghi âm gốc.",
    },
    keyFacts: [
      { label: "Công bố", value: "27/7/2026", note: "20:00 theo giờ Việt Nam, theo nguồn cấp dữ liệu công khai của kênh." },
      { label: "Điểm nhìn", value: "Cô gái đã biết", note: "Cô luôn biết có một người lặng lẽ đứng phía sau mình, theo mô tả chính thức." },
      { label: "Bài được hồi đáp", value: "Phía Sau Một Cô Gái", note: "Tác phẩm mới độc lập, không dùng giai điệu hoặc bản ghi âm gốc." },
    ],
    sourceLinks: [
      { label: "EM BIẾT ANH Ở PHÍA SAU – video chính thức trên YouTube", url: "https://www.youtube.com/watch?v=Uco9LpBuiqA" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Dabangzz chỉ dùng dữ liệu có thể đối chiếu trong nguồn cấp và mô tả công khai của đúng video. Toàn bộ ca từ và quy trình hình ảnh chưa được nguồn công bố nên không được suy đoán trong bài.",
    sections: [
      {
        heading: "Câu trả lời bắt đầu bằng một điều cô đã biết",
        paragraphs: [
          "Mô tả chính thức của video đưa ra tiền đề ngắn nhưng quan trọng: cô gái luôn biết có một người lặng lẽ đứng phía sau mình. Như vậy, lời hồi đáp không dựa trên một phát hiện bất ngờ. Nó bắt đầu từ việc thừa nhận rằng những quan tâm âm thầm đã được nhìn thấy, dù trước đó không được gọi tên.",
          "Tiêu đề “Em biết anh ở phía sau” làm thay đổi vị trí của sự im lặng. Người đứng sau không còn hoàn toàn vô hình, còn cô gái cũng không còn là nhân vật không hay biết gì. Điều chưa rõ không phải cô có nhận ra hay không, mà là vì sao cả hai vẫn giữ khoảng cách dù sự hiện diện ấy đã được nhận biết.",
        ],
      },
      {
        heading: "Một lời hồi đáp về điểm nhìn, không phải bản cover",
        paragraphs: [
          "Kênh xác định “Phía Sau Một Cô Gái” là tác phẩm được hồi đáp. Dabangzz chỉ dùng mối quan hệ được công bố này để giải thích cấu trúc đối thoại: bài mới đặt người nghe vào phía cô gái và cho cô quyền lên tiếng về sự quan tâm âm thầm mà mình đã nhận ra.",
          "Đồng thời, mô tả nói rõ ca khúc có giai điệu, ca từ và giọng hát mới, không phải cover và không dùng bản ghi âm gốc. Vì vậy, người nghe không nên chờ một bản phối lại gần nguyên tác. Điểm nối nằm ở tình huống và góc nhìn, còn âm nhạc được giới thiệu như một sáng tác độc lập.",
        ],
      },
      {
        heading: "Ba câu hỏi đáng mang theo khi nghe",
        paragraphs: [
          "Nguồn công khai không cung cấp toàn bộ lời hát, nên Dabangzz không gán cho cô gái một câu trả lời cụ thể mà cô chưa nói. Thay vào đó, có thể nghe với ba câu hỏi: cô biết từ khi nào, sự im lặng của cô có nghĩa gì, và việc nhận ra một người luôn ở phía sau có đủ để hai người tiến lại gần nhau hay không.",
          "Những câu hỏi này giúp giữ bài hát ở đúng phạm vi câu chuyện đã được xác nhận. Chúng không biến cô gái thành người có lỗi, cũng không mặc định sự kiên trì phải được đáp lại bằng tình yêu. Lời hồi đáp có giá trị nhất khi nó mở thêm điểm nhìn, không phải khi nó đơn giản hóa lựa chọn của một nhân vật.",
        ],
      },
      {
        heading: "Ca khúc AI với phần sáng tác mới",
        paragraphs: [
          "Lời Đáp công khai đây là sáng tác AI độc lập. Giai điệu, ca từ và giọng hát đều được mô tả là mới; bản ghi âm gốc không được sử dụng. Thông tin này được hiển thị để người nghe phân biệt tác phẩm với cover, bản remix hoặc bản thu của một nghệ sĩ có thật.",
          "Mô tả chưa nêu công cụ cụ thể và cũng không giải thích cách tạo hình ảnh của video. Dabangzz không bổ sung giả định về các khâu chưa được xác nhận. Khi nguồn chính thức thay đổi, bài sẽ được cập nhật cùng video ID Uco9LpBuiqA để tránh sinh nhiều trang cho một nội dung.",
        ],
      },
      {
        heading: "Nghe trên Dabangzz, đối chiếu trên YouTube",
        paragraphs: [
          "Video được nhúng bằng trình phát tăng cường quyền riêng tư, giữ tỷ lệ 16:9 và không bật tự động. Người đọc có thể chủ động phát để theo dõi cách cô gái kể câu chuyện, hoặc mở video gốc nếu muốn đọc phần mô tả và phản hồi mới nhất trên YouTube.",
          "Trang luôn hiển thị liên kết đến đúng video và kênh Lời Đáp. Dabangzz không nhận iframe tùy ý; địa chỉ nhúng được tạo từ video ID đã kiểm tra định dạng và channel ID cố định. Cách này vừa giảm nguy cơ nhúng sai nguồn, vừa là cơ chế chống đăng trùng.",
        ],
      },
    ],
  },
  {
    slug: "gap-nhau-khi-khong-con-thuoc-ve-nhau-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "GẶP NHAU KHI KHÔNG CÒN THUỘC VỀ NHAU: cuộc hội ngộ muộn mười năm",
    summary: "Hai người từng yêu gặp lại trong một cuộc họp sau mười năm. Ký ức trở về chỉ bằng một ánh nhìn, nhưng thời điểm ấy đến khi cả hai đã không còn có thể thuộc về nhau.",
    readTime: "5 phút đọc · nghe",
    hero: "GẶP LẠI\nSAU 10 NĂM",
    publishedAt: "2026-07-27T20:30:00+07:00",
    updatedAt: "2026-07-27T20:30:00+07:00",
    youtube: {
      videoId: "YlD-fcB2ZGw",
      sourceTitle: "GẶP NHAU KHI KHÔNG CÒN THUỘC VỀ NHAU | Chuyện Tình Gặp Lại Sau 10 Năm",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-26T12:31:16Z",
      thumbnailUrl: "https://i.ytimg.com/vi/YlD-fcB2ZGw/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=YlD-fcB2ZGw",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: null,
      aiDisclosure: "Lời Đáp công bố đây là ca khúc Việt Nam nguyên bản được sáng tác và sản xuất bằng công nghệ AI.",
    },
    keyFacts: [
      { label: "Công bố", value: "26/7/2026", note: "19:31 theo giờ Việt Nam, dựa trên nguồn cấp dữ liệu công khai của kênh." },
      { label: "Bối cảnh", value: "Gặp lại sau 10 năm", note: "Hai người từng yêu chạm mặt trong một cuộc họp." },
      { label: "Chủ đề", value: "Tình đầu và sự bỏ lỡ", note: "Cuộc gặp xảy ra khi cả hai không còn có thể thuộc về nhau." },
    ],
    sourceLinks: [
      { label: "GẶP NHAU KHI KHÔNG CÒN THUỘC VỀ NHAU – video chính thức", url: "https://www.youtube.com/watch?v=YlD-fcB2ZGw" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Bài được biên tập từ câu chuyện và thông tin AI trong mô tả công khai của video. Dabangzz không bổ sung quan hệ với một ca khúc khác vì nguồn chính thức giới thiệu đây là tác phẩm nguyên bản độc lập.",
    sections: [
      {
        heading: "Một ánh nhìn đánh thức mười năm ký ức",
        paragraphs: [
          "Theo mô tả chính thức, hai người từng yêu nhau gặp lại sau mười năm trong một cuộc họp. Bối cảnh rất bình thường, nhưng chỉ một ánh nhìn đã làm những ký ức tưởng như ngủ yên trở về. Sự đối lập giữa không gian công việc hiện tại và câu chuyện tình cảm cũ tạo nên sức căng đầu tiên của ca khúc.",
          "Mười năm đủ dài để cả hai có một đời sống khác, nhưng ký ức không biến mất chỉ vì thời gian đã trôi. Bài không được giới thiệu như một cuộc quay về để sửa mọi điều đã lỡ. Ngay từ tiêu đề, người nghe đã biết cuộc gặp diễn ra khi hai người không còn có thể thuộc về nhau.",
        ],
      },
      {
        heading: "Điều đau nhất là gặp lại quá muộn",
        paragraphs: [
          "Câu chuyện kết hợp ba lớp cảm xúc được kênh nêu rõ: tình đầu, sự bỏ lỡ và cuộc gặp lại quá muộn. Nếu chỉ có ký ức, nhân vật có thể tiếp tục cất nó trong quá khứ. Nếu chỉ có cuộc gặp, họ có thể chào nhau như những người quen. Khi cả hai xảy ra cùng lúc, ranh giới giữa điều từng có và điều không thể có lại hiện rõ.",
          "Video đặt ra một câu hỏi đáng chú ý trong phần mô tả: nếu ở vào hoàn cảnh ấy, người nghe có hỏi vì sao con gái của người kia lại mang tên mình hay không. Đây là chi tiết do chính kênh đưa ra như một điểm gợi mở. Dabangzz không kết luận câu trả lời hoặc mối quan hệ phía sau khi video chưa công bố thêm.",
        ],
      },
      {
        heading: "Cách nghe mà không biến hoài niệm thành lời khuyên",
        paragraphs: [
          "Bài hát kể một tình huống giàu cảm xúc, nhưng không vì vậy mà mọi cuộc gặp lại đều nên dẫn đến hành động. Cụm “không còn thuộc về nhau” nhắc rằng hiện tại của mỗi người cũng có trọng lượng. Khi nghe, có thể chú ý sự va chạm giữa ký ức trở về rất nhanh và giới hạn hiện tại không thể biến mất chỉ vì một ánh nhìn.",
          "Dabangzz xem đây là câu chuyện về khoảnh khắc nhận ra quá khứ vẫn còn ảnh hưởng, không phải hướng dẫn phá vỡ những cam kết đang có. Phụ đề tiếng Việt của video là nơi phù hợp để theo dõi toàn bộ lời bài hát; bài viết chỉ tóm tắt cấu trúc đã được nguồn chính thức xác nhận.",
        ],
      },
      {
        heading: "Tác phẩm nguyên bản được sản xuất bằng AI",
        paragraphs: [
          "Lời Đáp công bố đây là ca khúc Việt Nam nguyên bản được sáng tác và sản xuất bằng công nghệ AI. Thông tin này được giữ nguyên trên Dabangzz để người nghe biết bản chất sản xuất của tác phẩm và không gán giọng hát trong video cho một ca sĩ thật.",
          "Nguồn hiện không nêu một bài hát khác làm đối tượng hồi đáp, cũng không mô tả chi tiết công cụ hoặc quy trình hình ảnh. Vì vậy, trang xếp ca khúc vào nhóm độc lập và không suy đoán thêm. Nếu kênh cung cấp dữ liệu sản xuất mới, nội dung sẽ được cập nhật tại cùng URL.",
        ],
      },
      {
        heading: "Xem lời bằng phụ đề và mở video gốc",
        paragraphs: [
          "Kênh khuyến nghị bật phụ đề tiếng Việt để theo dõi lời bài hát. Trình phát trên Dabangzz không tự chạy, dùng miền youtube-nocookie.com và giữ tỷ lệ 16:9 trên màn hình nhỏ. Người nghe quyết định khi nào âm thanh bắt đầu.",
          "Nút mở YouTube dẫn thẳng tới video chính thức để người đọc kiểm tra ngày đăng, mô tả và các cập nhật mới. Video ID YlD-fcB2ZGw được dùng làm khóa chống trùng; một video công khai chỉ có một trang âm nhạc trên Dabangzz.",
        ],
      },
    ],
  },
  {
    slug: "mai-lai-gap-anh-nhe-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "MAI LẠI GẶP ANH NHÉ: niềm vui nhỏ sau một buổi hẹn đầu",
    summary: "Ca khúc chill hip-hop pha indie-pop nhìn tình yêu mới từ khoảnh khắc rất nhỏ: vừa tạm biệt ở đầu ngõ, cô gái đã đọc lại lời chúc ngủ ngon và mong ngày mai đến sớm hơn.",
    readTime: "5 phút đọc · nghe",
    hero: "MAI LẠI\nGẶP ANH NHÉ",
    publishedAt: "2026-07-26T01:36:00+07:00",
    updatedAt: "2026-07-26T01:36:00+07:00",
    youtube: {
      videoId: "dW06ZveTgtc",
      sourceTitle: "MAI LẠI GẶP ANH NHÉ | Nhạc Chill Ngọt Ngào Cho Những Ngày Mới Yêu",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-25T13:00:20Z",
      thumbnailUrl: "https://i.ytimg.com/vi/dW06ZveTgtc/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=dW06ZveTgtc",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: null,
      aiDisclosure: "Ca khúc nguyên bản được sáng tác và sản xuất với sự hỗ trợ của AI; không sử dụng giai điệu hoặc giọng hát của nghệ sĩ có thật.",
    },
    keyFacts: [
      { label: "Công bố", value: "25/7/2026", note: "20:00 theo giờ Việt Nam, dựa trên nguồn cấp dữ liệu chính thức của kênh." },
      { label: "Thể loại", value: "Chill hip-hop / indie-pop", note: "Giọng nữ trong trẻo, nhịp nhẹ và cảm giác của những ngày đầu hẹn hò." },
      { label: "Quan hệ với bài khác", value: "Ca khúc độc lập", note: "Mô tả chính thức không nêu một ca khúc có sẵn làm đối tượng hồi đáp." },
    ],
    sourceLinks: [
      { label: "MAI LẠI GẶP ANH NHÉ – video chính thức trên YouTube", url: "https://www.youtube.com/watch?v=dW06ZveTgtc" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Trang nghe nhạc do Dabangzz biên tập từ dữ liệu và mô tả công khai của kênh Lời Đáp. Không lưu mã nhúng tùy ý; trình phát chỉ được tạo từ video ID đã xác minh thuộc đúng kênh.",
    sections: [
      {
        heading: "Vừa chia tay đã mong tới ngày mai",
        paragraphs: [
          "Theo phần giới thiệu chính thức, câu chuyện bắt đầu sau một buổi hẹn trong những ngày đầu yêu nhau. Hai người vừa chào tạm biệt ở đầu ngõ, nhưng cô gái đã mở lại tin nhắn chúc ngủ ngon, mỉm cười một mình và mong thời gian trôi nhanh hơn. Ca khúc chọn một khoảnh khắc rất đời thường thay vì một lời tỏ tình lớn.",
          "Điều làm cảm xúc trở nên rõ ràng là mong muốn được gặp lại. Cô gái không cần một lời hứa xa xôi; chỉ cần cả hai vẫn muốn dành thêm cho nhau một ngày nữa. Vì thế, tiêu đề vừa giống một lời hẹn, vừa là cách nói giản dị rằng cảm giác này đang được đáp lại.",
        ],
      },
      {
        heading: "Một ca khúc độc lập, không gắn với nguyên tác",
        paragraphs: [
          "Mô tả của video gọi đây là ca khúc nguyên bản và không nêu tên một bài hát có sẵn làm đối tượng hồi đáp. Dabangzz vì vậy xếp bài vào nhóm ca khúc độc lập của Lời Đáp, thay vì tự suy đoán mối liên hệ với một nguyên tác khác.",
          "Tinh thần đối thoại vẫn hiện diện trong cách kể. Tin nhắn chúc ngủ ngon của một người nhận lại sự chờ mong từ người kia. Không cần lời đáp trực tiếp trong cùng một câu, hai hành động nhỏ vẫn tạo thành cuộc trò chuyện về sự quan tâm.",
        ],
      },
      {
        heading: "Điểm nghe: nhịp nhẹ và cảm giác tình yêu mới",
        paragraphs: [
          "Kênh giới thiệu bài hát theo hướng chill hip-hop pha indie-pop, với giọng nữ trong trẻo và nhẹ nhàng. Sự kết hợp này giữ cho câu chuyện có nhịp nhưng không làm mất vẻ riêng tư của khoảnh khắc cô gái ngồi đọc lại tin nhắn một mình.",
          "Khi nghe, có thể chú ý sự tương phản giữa không gian đã yên sau buổi hẹn và tâm trạng vẫn còn chuyển động. Niềm vui không bùng lên thành cao trào lớn; nó nằm trong việc nhớ lại một câu ngắn, mỉm cười và bắt đầu đếm thời gian tới lần gặp tiếp theo.",
        ],
      },
      {
        heading: "AI được sử dụng và công khai như thế nào?",
        paragraphs: [
          "Phần mô tả chính thức cho biết đây là ca khúc nguyên bản được sáng tác và sản xuất với sự hỗ trợ của AI. Kênh cũng xác nhận không sử dụng giai điệu hay giọng hát của nghệ sĩ có thật. Dabangzz giữ nguyên phạm vi công bố đó và không suy đoán thêm công cụ hoặc giọng mẫu.",
          "Thông tin này giúp người nghe phân biệt giọng hát và hình ảnh trong video với một ca sĩ hoặc nhân vật có thật. Nếu kênh bổ sung dữ liệu sản xuất, trang sẽ được cập nhật ở cùng URL để video ID không tạo ra nhiều bài trùng lặp.",
        ],
      },
      {
        heading: "Nghe trên Dabangzz hoặc mở video gốc",
        paragraphs: [
          "Trình phát phía trên dùng chế độ tăng cường quyền riêng tư của YouTube và không tự động phát. Người nghe phải chủ động bấm nút phát. Video chính thức có phụ đề tiếng Việt theo thông tin của kênh, phù hợp với người muốn theo dõi mạch kể chi tiết hơn.",
          "Muốn bình luận, đăng ký kênh hoặc đọc toàn bộ mô tả, hãy dùng liên kết “Mở trên YouTube”. Dabangzz chỉ nhúng đúng video công khai thuộc kênh Lời Đáp và không nhận iframe hoặc video từ nguồn tùy ý.",
        ],
      },
    ],
  },
  {
    slug: "them-mot-chut-gan-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "THÊM MỘT CHÚT GẦN: khi đường về nhà bỗng quá ngắn",
    summary: "Ca khúc emotional hip-hop pha alternative R&B kể cảm giác của cô gái mới yêu: chỉ muốn người bên cạnh đi chậm lại và cùng mình thêm một vòng nữa trong đêm Hà Nội.",
    readTime: "5 phút đọc · nghe",
    hero: "THÊM MỘT\nCHÚT GẦN",
    publishedAt: "2026-07-26T01:35:00+07:00",
    updatedAt: "2026-07-26T01:35:00+07:00",
    youtube: {
      videoId: "ZgEZVAPe3Ek",
      sourceTitle: "THÊM MỘT CHÚT GẦN | Nhạc Hip-Hop Cảm Xúc Việt Nam",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-25T13:00:17Z",
      thumbnailUrl: "https://i.ytimg.com/vi/ZgEZVAPe3Ek/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=ZgEZVAPe3Ek",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: null,
      aiDisclosure: "Ca khúc nguyên bản được sáng tác và sản xuất với sự hỗ trợ của AI; không sử dụng giai điệu hoặc giọng hát của nghệ sĩ có thật.",
    },
    keyFacts: [
      { label: "Công bố", value: "25/7/2026", note: "20:00 theo giờ Việt Nam, dựa trên nguồn cấp dữ liệu chính thức của kênh." },
      { label: "Thể loại", value: "Emotional hip-hop / alternative R&B", note: "Giọng nữ khàn, gần gũi và bối cảnh Hà Nội về đêm." },
      { label: "Quan hệ với bài khác", value: "Ca khúc độc lập", note: "Mô tả chính thức không nêu một ca khúc có sẵn làm đối tượng hồi đáp." },
    ],
    sourceLinks: [
      { label: "THÊM MỘT CHÚT GẦN – video chính thức trên YouTube", url: "https://www.youtube.com/watch?v=ZgEZVAPe3Ek" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Trang nghe nhạc do Dabangzz biên tập từ dữ liệu và mô tả công khai của kênh Lời Đáp. Không lưu mã nhúng tùy ý; trình phát chỉ được tạo từ video ID đã xác minh thuộc đúng kênh.",
    sections: [
      {
        heading: "Con đường quen bỗng ngắn hơn bình thường",
        paragraphs: [
          "Mô tả chính thức đặt câu chuyện vào những ngày đầu yêu nhau. Trên đường về nhà, cô gái nhận ra quãng đường dường như trôi qua quá nhanh. Điều cô muốn không phải thay đổi điểm đến, mà kéo dài thêm thời gian được ở cạnh người bên cạnh.",
          "Mong muốn “đi chậm một chút” vì thế có hai lớp nghĩa. Đó là nhịp bước thật trên đường phố, đồng thời là lời đề nghị kín đáo để khoảnh khắc gần nhau chưa kết thúc. Một vòng đi thêm không giải quyết chuyện lớn nào, nhưng đủ cho thấy cô gái đã trân trọng sự hiện diện ấy đến mức nào.",
        ],
      },
      {
        heading: "Không khí Hà Nội về đêm trong câu chuyện mới yêu",
        paragraphs: [
          "Kênh xác định bối cảnh cảm xúc là Hà Nội về đêm. Thành phố ở đây không được dùng như một danh sách địa danh; nó tạo ra khoảng thời gian giữa lúc cuộc hẹn kết thúc và khi mỗi người phải trở về không gian riêng. Chính quãng chuyển tiếp đó khiến lời muốn đi thêm một vòng trở nên tự nhiên.",
          "Dabangzz không bổ sung tuyến đường hay địa điểm không có trong nguồn chính thức. Điểm đáng nghe nằm ở cảm giác phổ quát: khi đang rung động, một đoạn đường vốn đủ dài lại có thể trở nên quá ngắn, và cuộc chia tay bình thường cũng cần thêm chút can đảm.",
        ],
      },
      {
        heading: "Điểm nghe: giọng nữ khàn trên nền emotional hip-hop",
        paragraphs: [
          "Theo giới thiệu của video, bài hát kết hợp emotional hip-hop với alternative R&B và sử dụng giọng nữ khàn, gần gũi. Màu giọng này phù hợp với một lời đề nghị không nói quá lớn: người kể không tuyên bố điều gì kịch tính, chỉ muốn giữ người kia bên cạnh thêm một chút.",
          "Khi nghe, có thể tập trung vào cách nhịp điệu duy trì chuyển động của cuộc đi bộ, còn phần R&B tạo khoảng mềm cho cảm xúc. Bài không cần biến đường về thành một cảnh phim quá hoàn hảo; sự ngập ngừng và mong muốn rất nhỏ đã đủ làm câu chuyện có sức nặng.",
        ],
      },
      {
        heading: "Đây là ca khúc nguyên bản có hỗ trợ AI",
        paragraphs: [
          "Mô tả chính thức khẳng định ca khúc được sáng tác và sản xuất với sự hỗ trợ của AI, không sử dụng giai điệu hoặc giọng hát của nghệ sĩ có thật. Video cũng không nêu tên một bài hát khác làm đối tượng hồi đáp, nên bài được giới thiệu như một ca khúc độc lập.",
          "Dabangzz công khai thông tin AI để người nghe không nhầm giọng hát với một ca sĩ thật hoặc hình ảnh minh họa với cảnh quay tư liệu. Bài viết chỉ sử dụng dữ liệu mà kênh đã công bố, không đoán phần mềm, mô hình hay danh tính của bất kỳ giọng mẫu nào.",
        ],
      },
      {
        heading: "Cách nghe và kiểm tra nguồn gốc",
        paragraphs: [
          "Video không tự chạy trên Dabangzz. Người nghe bấm phát trong khung 16:9 hoặc mở video gốc trên YouTube. Theo mô tả của kênh, video có phụ đề tiếng Việt để người nghe theo dõi lời và mạch cảm xúc.",
          "Liên kết video và kênh chính thức được đặt ngay trên trang. Mỗi video ID chỉ có một bài; nếu phần mô tả hoặc thông tin sản xuất thay đổi, Dabangzz cập nhật cùng URL thay vì tạo một trang mới cho cùng bản ghi.",
        ],
      },
    ],
  },
  {
    slug: "noi-di-em-nghe-loi-dap",
    kind: "music",
    author: "Lời Đáp · Dabangzz biên tập",
    category: "Âm nhạc · Lời Đáp",
    title: "NÓI ĐI, EM NGHE: khi cô gái chỉ muốn nghe một lời thật lòng",
    summary: "Ca khúc emotional hip-hop/R&B kể từ góc nhìn cô gái trong một mối quan hệ chưa có tên: sự quan tâm đã đủ rõ, nhưng lời xác nhận vẫn chưa được nói ra.",
    readTime: "5 phút đọc · nghe",
    hero: "NÓI ĐI,\nEM NGHE",
    publishedAt: "2026-07-25T07:50:00+07:00",
    updatedAt: "2026-07-25T07:50:00+07:00",
    youtube: {
      videoId: "ltjue-nusFw",
      sourceTitle: "NÓI ĐI, EM NGHE | Vietnamese Female Emotional Hip-Hop",
      channelId: LOI_DAP_CHANNEL_ID,
      uploadDate: "2026-07-24T13:00:25Z",
      thumbnailUrl: "https://i.ytimg.com/vi/ltjue-nusFw/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=ltjue-nusFw",
      channelUrl: LOI_DAP_CHANNEL_URL,
      replyTarget: null,
      aiDisclosure: "Âm nhạc, giọng hát và hình ảnh của video được tạo với sự hỗ trợ của AI; phần lời và giai điệu là nội dung nguyên bản do Lời Đáp phát hành.",
    },
    keyFacts: [
      { label: "Công bố", value: "24/7/2026", note: "20:00 theo giờ Việt Nam, dựa trên thời điểm trong nguồn cấp dữ liệu chính thức của kênh." },
      { label: "Thể loại", value: "Emotional hip-hop", note: "Pha alternative R&B, giọng nữ khàn và không khí đêm muộn." },
      { label: "Quan hệ với bài khác", value: "Ca khúc độc lập", note: "Không phải lời hồi đáp cho một bài hát có sẵn." },
    ],
    sourceLinks: [
      { label: "NÓI ĐI, EM NGHE – video chính thức trên YouTube", url: "https://www.youtube.com/watch?v=ltjue-nusFw" },
      { label: "Kênh YouTube chính thức Lời Đáp", url: LOI_DAP_CHANNEL_URL },
    ],
    editorialNote: "Trang nghe nhạc do Dabangzz biên tập từ dữ liệu công khai của kênh Lời Đáp và thông tin sản xuất do chủ sở hữu nội dung cung cấp. Không lưu mã nhúng tùy ý; trình phát chỉ được tạo từ video ID đã xác minh thuộc đúng kênh.",
    sections: [
      {
        heading: "Một mối quan hệ đã gần thành lời",
        paragraphs: [
          "“NÓI ĐI, EM NGHE” bắt đầu từ một tình huống rất gần với đời sống nhắn tin hiện đại. Chàng trai có thể trò chuyện cùng cô gái đến ba giờ sáng, nhớ những điều cô thích và quan tâm bằng nhiều hành động nhỏ. Thế nhưng khi hai người gặp trực tiếp, anh lại né câu chuyện quan trọng nhất. Sự mập mờ không đến từ việc thiếu cảm xúc, mà từ việc không ai chủ động đặt tên cho cảm xúc ấy.",
          "Người kể chuyện là cô gái đang chờ một câu trả lời rõ ràng. Cô không đòi hoa, một lời hứa lớn hay một màn tỏ tình được chuẩn bị cầu kỳ. Điều cô muốn chỉ là sự thành thật đủ để cả hai biết mình đang đứng ở đâu. Nhờ góc nhìn này, ca khúc không biến sự im lặng thành điều lãng mạn tuyệt đối; nó cho thấy chờ đợi quá lâu cũng có thể khiến sự dịu dàng trở nên mệt mỏi.",
        ],
      },
      {
        heading: "Đây không phải một ca khúc hồi đáp",
        paragraphs: [
          "Lời Đáp có nhiều ca khúc được xây dựng theo hình thức reply song, nhưng video mới này được kênh giới thiệu là một ca khúc và giai điệu hoàn toàn nguyên bản. Không có bài hát cụ thể nào được đặt làm đối tượng hồi đáp. Vì vậy, Dabangzz ghi rõ “ca khúc độc lập” thay vì cố gắn nó với một nguyên tác không được nguồn chính thức xác nhận.",
          "Cấu trúc câu chuyện vẫn mang tinh thần đối thoại quen thuộc của kênh: một người giữ điều muốn nói, người còn lại mở ra khoảng trống để câu nói ấy có thể xuất hiện. Điểm xoay không nằm ở một biến cố lớn mà ở lời mời rất ngắn của cô gái. Cô đã nhận ra sự quan tâm, nhưng muốn chàng trai chịu trách nhiệm cho cảm xúc bằng cách tự nói thành lời.",
        ],
      },
      {
        heading: "Điểm nghe: giọng nữ khàn và nhịp kể gần",
        paragraphs: [
          "Theo mô tả chính thức, bài hát đi theo emotional hip-hop kết hợp alternative R&B và sử dụng chất giọng nữ khàn. Cách phối này phù hợp với bối cảnh nhắn tin đêm muộn: nhịp điệu giữ câu chuyện tiến về phía trước, trong khi màu giọng tạo cảm giác như người kể đang nói ngay bên cạnh người nghe. Đây không phải bản ballad chỉ dựa vào cao trào, mà là một cuộc trò chuyện được đặt trên nền nhịp.",
          "Khi nghe, có thể chú ý cách phần kể về những hành động quan tâm dẫn dần tới câu móc trung tâm. Mỗi chi tiết làm tăng cảm giác rằng câu trả lời vốn đã hiện diện, chỉ chưa được thừa nhận. Đến đoạn chính, lời hát không vòng vo thêm mà tóm lại mong muốn của cô gái: nếu thật sự thích, hãy nói ra và đừng để người kia tiếp tục chờ.",
        ],
        quote: "“Nói đi, em nghe. Thích thì nói đi, đừng để em chờ.”",
      },
      {
        heading: "AI được dùng ở đâu?",
        paragraphs: [
          "Âm nhạc, giọng hát và hình ảnh trong video được tạo với sự hỗ trợ của AI. Phần lời và giai điệu được Lời Đáp công bố là nội dung nguyên bản của kênh. Việc dùng AI được ghi rõ để người nghe không nhầm giọng hát với một ca sĩ có thật hoặc hình ảnh minh họa với cảnh quay của nhân vật thật.",
          "Dabangzz chỉ mô tả những gì có thể đối chiếu từ video, phần giới thiệu chính thức và thông tin do chủ sở hữu nội dung cung cấp. Bài viết không suy đoán tên công cụ, quy trình huấn luyện hay danh tính giọng mẫu. Nếu kênh bổ sung thông tin sản xuất, trang này sẽ được cập nhật tại cùng một URL thay vì tạo một bài trùng cho cùng video.",
        ],
      },
      {
        heading: "Nghe trực tiếp và xem phụ đề",
        paragraphs: [
          "Người đọc có thể bấm phát ở trình phát phía trên mà không rời Dabangzz. Video không tự chạy; âm thanh chỉ bắt đầu sau thao tác của người dùng. Kênh cho biết video có lựa chọn phụ đề tiếng Việt, tiếng Hàn, tiếng Anh và tiếng Trung giản thể, hữu ích khi người nghe muốn theo dõi câu chuyện hoặc so sánh cách truyền đạt cảm xúc.",
          "Nếu muốn bình luận, đăng ký kênh hoặc xem phần mô tả đầy đủ, hãy dùng liên kết “Mở trên YouTube”. Trình phát trên Dabangzz sử dụng miền youtube-nocookie.com ở chế độ tăng cường quyền riêng tư. Một số dữ liệu kỹ thuật vẫn có thể được YouTube xử lý khi trình phát được tải hoặc khi người dùng tương tác; chi tiết được nêu trong Chính sách quyền riêng tư của trang.",
        ],
      },
    ],
  },
];

const duplicateVideoIds = loiDapMusicPosts
  .map(post => post.youtube?.videoId)
  .filter((videoId): videoId is string => Boolean(videoId))
  .filter((videoId, index, all) => all.indexOf(videoId) !== index);

if (duplicateVideoIds.length > 0) {
  throw new Error(`Duplicate Lời Đáp video IDs: ${duplicateVideoIds.join(", ")}`);
}

for (const post of loiDapMusicPosts) {
  if (post.kind !== "music" || !post.youtube || !isVerifiedLoiDapVideo(post.youtube)) {
    throw new Error(`Invalid Lời Đáp music post: ${post.slug}`);
  }
}

export function getPublishedLoiDapMusicPosts(posts: CommunityPost[]) {
  return posts.filter(post => post.kind === "music" && post.youtube?.channelId === LOI_DAP_CHANNEL_ID);
}
