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
