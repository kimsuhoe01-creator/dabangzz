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
