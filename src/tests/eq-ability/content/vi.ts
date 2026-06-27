import type { TestContent } from "@/lib/test-engine/types"

/**
 * Vietnamese version. This is a localized adaptation, not a literal translation:
 * character names are Vietnamese and the scenarios are reworded to read like
 * natural Vietnamese. Option order and the emotion-word -> answer-key mapping
 * are unchanged from the English STEU-B/STEM-B, so the scorer stays valid.
 * It has not been separately validated as a psychometric instrument (see
 * disclaimer).
 */
export const vi: TestContent = {
  title: "Bài Test Trí Tuệ Cảm Xúc (Năng lực)",
  tagline: "Đo khả năng bạn thật sự suy luận về cảm xúc, chứ không phải điểm bạn tự chấm cho mình",
  description:
    "Một bài test EQ dựa trên năng lực thật. Thay vì bắt bạn tự đánh giá mình, nó đưa ra các tình huống cảm xúc để bạn giải: một tình huống sẽ làm người ta cảm thấy gì, và cách xử lý nào là hiệu quả nhất. Bài được xây dựng từ STEU và STEM, hai thước đo năng lực đã được kiểm chứng trong nghiên cứu tâm lý học.",
  category: "Trí tuệ cảm xúc",
  scientificBasis:
    "Hai phần thi năng lực theo mô hình Mayer–Salovey: Bài Test Thấu Hiểu Cảm Xúc theo Tình Huống (STEU-B, chấm điểm theo lý thuyết thẩm định của Roseman) và Bài Test Quản Lý Cảm Xúc theo Tình Huống (STEM-B, chấm điểm theo mức hiệu quả do chuyên gia đánh giá). Cả hai đo khả năng suy luận về cảm xúc như một kỹ năng có đáp án đúng/sai. Khác với các 'bài quiz EQ' kiểu tự đánh giá vốn chủ yếu phản ánh tính cách và hình ảnh bản thân, hai bài này nhắm thẳng vào phần suy luận đó. Độ tin cậy nội tại của STEM-B vào khoảng .84.",
  disclaimer:
    "Bài test này đo khả năng bạn suy luận về cảm xúc, vốn khác với cách bạn thật sự hành xử khi bị áp lực. Điểm số là tỉ lệ phần trăm bạn trả lời tốt, không phải thứ hạng hay phân vị, vì bài chưa tích hợp mẫu chuẩn của dân số. Đây là công cụ để hiểu bản thân, không phải đánh giá lâm sàng hay tuyển dụng. Bản tiếng Việt đã được Việt hóa cả tên nhân vật lẫn lời thoại cho dễ hiểu, và chưa được kiểm định riêng như một phiên bản tâm lý học.",
  instructions:
    "Mỗi tình huống đều có một đáp án tốt nhất, hãy chọn đáp án đó. Có câu hỏi nhân vật trong tình huống có thể cảm thấy thế nào; có câu hỏi cách ứng xử nào là hiệu quả nhất. Với những câu về cách ứng xử, hãy chọn cách hiệu quả nhất, chứ không nhất thiết là cách tử tế nhất hay điều chính bạn sẽ làm. Cứ chọn phương án tốt nhất, kể cả khi có vài lựa chọn nghe đều hợp lý.",
  resultKicker: "Kết quả suy luận cảm xúc của bạn",
  scoresTitle: "Các chỉ số của bạn",
  scoresHint:
    "Thấu hiểu và Quản lý là hai kỹ năng được kiểm tra; Tổng quát là trung bình của hai kỹ năng đó. Mỗi chỉ số là tỉ lệ phần trăm bạn trả lời đúng (phần Quản lý cho điểm một phần với những lựa chọn khá tốt nhưng chưa tối ưu). Chúng cho thấy bạn làm bài thế nào, không phải thứ hạng so với người khác.",
  scale: { minLabel: "", maxLabel: "" },
  dimensions: {
    understanding: {
      label: "Thấu hiểu cảm xúc",
      description:
        "Biết một tình huống sẽ tạo ra cảm xúc gì, và cảm xúc hình thành, pha trộn, đổi thay ra sao. Đây là phần suy luận của EQ.",
      lowLabel: "Đang phát triển",
      highLabel: "Đọc cảm xúc chính xác",
    },
    managing: {
      label: "Quản lý cảm xúc",
      description:
        "Biết cách hiệu quả nhất để xử lý một tình huống cảm xúc cho bản thân và người khác, không chỉ là cách tử tế hay dễ thấy nhất.",
      lowLabel: "Đang phát triển",
      highLabel: "Chọn chiến lược hiệu quả",
    },
    overall: {
      label: "Suy luận cảm xúc tổng quát",
      description: "Trung bình của hai chỉ số thấu hiểu và quản lý.",
      lowLabel: "Đang phát triển",
      highLabel: "Mạnh",
    },
  },
  outcomes: {
    developing: {
      name: "Đang phát triển",
      tagline: "Kỹ năng suy luận cảm xúc vẫn đang dần hình thành",
      summary:
        "Trong bài này, bạn hay chọn những đáp án chưa khớp lắm với cách cảm xúc thường vận hành, hoặc những cách xử lý chưa phải hiệu quả nhất. Đó là khoảng trống về kỹ năng, không phải khiếm khuyết tính cách, và suy luận cảm xúc thì hoàn toàn học được.",
      longDescription:
        "Thấu hiểu và quản lý cảm xúc là kỹ năng, mà đã là kỹ năng thì luyện tập sẽ giỏi lên. Điểm thấp ở đây thường chỉ do vài thói quen cụ thể: đọc tình huống hơi vội, hoặc chọn phản ứng nghe tự nhiên thay vì phản ứng thật sự hiệu quả. May là mấy thứ này rất cụ thể và rèn được. Hãy để ý xem điều gì thật sự gây ra cảm xúc trong mỗi tình huống, và phản ứng nào giải quyết được cả cảm xúc lẫn vấn đề gốc.",
      strengths: [
        "Dám nhìn thẳng vào một kỹ năng thật, thay vì một điểm tự chấm cho dễ chịu",
        "Có nhiều dư địa để tiến bộ nhất, nghĩa là dễ thấy kết quả nhanh",
      ],
      growth: [
        "Trước khi phản ứng, hãy gọi tên thứ cụ thể đã gây ra cảm xúc (mất mát? bị đe dọa? ý đồ của ai đó?)",
        "Tự hỏi phản ứng nào xử lý được cả cảm xúc lẫn vấn đề gốc, chứ không chỉ một trong hai",
        "Để ý lúc bạn đang chọn phương án dễ chịu thay vì phương án hiệu quả",
      ],
    },
    capable: {
      name: "Khá vững",
      tagline: "Nắm khá chắc cách cảm xúc vận hành",
      summary:
        "Bạn đọc đúng phần lớn tình huống và thường chọn được cách xử lý hợp lý. Bạn chỉ hụt ở vài tình huống tinh tế hơn, những lúc cảm xúc hiển nhiên hay phản ứng hiển nhiên lại không hẳn là đúng nhất.",
      longDescription:
        "Kết quả 'khá vững' nghĩa là khả năng suy luận cảm xúc của bạn ổn trong các tình huống thường ngày. Điểm hay rơi rớt ở những câu khó hơn: các cảm xúc trông na ná nhau nhưng đến từ những cách nhìn nhận khác nhau (hối tiếc với thất vọng, tức giận với buồn), hoặc tình huống mà phản ứng hiệu quả nhất phải xử lý cả vấn đề lẫn cảm xúc cùng lúc. Muốn thu hẹp khoảng trống đó, chủ yếu là chậm lại ở những câu mơ hồ.",
      strengths: [
        "Đọc chính xác các tình huống cảm xúc thường ngày",
        "Nhìn chung chọn được phản ứng hợp lý, khả thi",
        "Có nền tảng đáng tin để xây dựng phán đoán sắc bén hơn",
      ],
      growth: [
        "Cảnh giác với những cảm xúc trông giống nhau nhưng đến từ nguyên nhân khác (ví dụ hối tiếc với thất vọng)",
        "Ở những câu khó, kiểm tra xem phản ứng của bạn có xử lý được cả vấn đề chứ không riêng tâm trạng",
        "Đừng mặc định né tránh hay trấn an khi một cách trực diện hơn sẽ hiệu quả hơn",
      ],
    },
    strong: {
      name: "Mạnh",
      tagline: "Suy luận về cảm xúc sắc bén, chính xác",
      summary:
        "Bạn đọc đúng phần lớn tình huống, kể cả những tình huống tinh tế, và chọn được cách xử lý hiệu quả một cách đáng tin. Suy luận cảm xúc thật sự là một thế mạnh của bạn.",
      longDescription:
        "Kết quả 'mạnh' nghĩa là bạn không chỉ hiểu người ta cảm thấy gì mà còn hiểu vì sao, và bạn thường chọn được phản ứng gỡ được cả cảm xúc lẫn tình huống đằng sau nó. Bạn phân biệt được những cảm xúc trông giống nhau, và ưu tiên cách thật sự hiệu quả hơn là cách chỉ cho dễ chịu. Phần còn lại cần mài là những tình huống khó và mơ hồ nhất, cộng với chuyện biến kỹ năng suy luận này thành hành vi nhất quán lúc bạn thật sự căng thẳng, điều mà không bài test trên giấy nào đo được.",
      strengths: [
        "Đọc chính xác cả những tình huống cảm xúc tinh tế và mơ hồ",
        "Chọn phản ứng xử lý được cả cảm xúc lẫn vấn đề",
        "Phân biệt được những cảm xúc gần giống nhau dựa trên nguyên nhân của chúng",
      ],
      growth: [
        "Thử sức với những câu khó nhất, nơi cả những đáp án tốt cũng cạnh tranh nhau",
        "Bớt chú tâm vào việc biết nước đi đúng, dồn sức vào việc làm được nó khi thật sự áp lực",
        "Dùng kỹ năng này để hướng dẫn người khác, điều đó cũng làm chính bạn sâu sắc hơn",
      ],
    },
    exceptional: {
      name: "Xuất sắc",
      tagline: "Suy luận cảm xúc ở nhóm dẫn đầu",
      summary:
        "Bạn đọc cảm xúc và chọn phản ứng hiệu quả với độ chính xác hiếm thấy. Trong bài này, rất ít câu qua mặt được bạn.",
      longDescription:
        "Kết quả 'xuất sắc' nghĩa là bạn nhìn ra đúng nguyên nhân thật của một cảm xúc và chọn được phản ứng gỡ được cả cảm xúc lẫn tình huống, kể cả ở những câu tinh tế. Có một lưu ý thẳng thắn nên nhớ: bài này đo suy luận cảm xúc, tức là biết đáp án đúng, vốn không giống với việc nhất quán làm theo nó khi bạn mệt, bị khích, hay đang đặt nhiều cảm xúc vào cuộc. Với bạn, ranh giới không nằm ở kiến thức; mà ở chỗ biến kiến thức đó thành hành vi, lần nào cũng vậy.",
      strengths: [
        "Chỉ ra được thứ thật sự chi phối một cảm xúc, kể cả trong tình huống mơ hồ",
        "Liên tục chọn được phản ứng hiệu quả nhất, không chỉ là một phản ứng tốt",
        "Chất liệu tốt cho vai trò lãnh đạo, hòa giải và tư vấn",
      ],
      growth: [
        "Để ý khoảng cách giữa việc biết phản ứng hiệu quả và việc làm được nó khi căng thẳng",
        "Cẩn thận với việc quá dựa vào phân tích ở những lúc cần sự ấm áp hay hiện diện hơn",
        "Giúp người khác xây lối suy luận vốn đến với bạn một cách dễ dàng",
      ],
    },
  },
  questions: {
    steu1: "Vũ hoàn thành một công việc khó đúng hạn và không vượt quá ngân sách. Theo bạn, Vũ có thể cảm thấy thế nào?",
    steu2: "Nếu tình hình cứ như hiện nay, công ty có thể sẽ chuyển chỗ làm của Trang đến nơi gần nhà hơn nhiều, đúng như cô mong muốn. Theo bạn, Trang có thể cảm thấy thế nào?",
    steu3: "Linh biết được một người bạn của mình vay tiền người khác, nói là để trả mấy khoản gấp, nhưng thật ra lại đem tiêu vào việc khác không quan trọng bằng. Theo bạn, Linh có thể cảm thấy thế nào?",
    steu4: "Khôi hẹn một người bạn đi xem phim. Người bạn đến quá trễ nên hai người lỡ mất buổi chiếu. Theo bạn, Khôi có thể cảm thấy thế nào?",
    steu5: "Một người tin rằng người khác cố tình hại mình. Tình huống lúc này gần như không thể cứu vãn. Theo bạn, người đó có thể cảm thấy thế nào?",
    steu6: "Hùng thích dành ngày thứ Bảy đưa các con ra công viên chơi. Năm nay các con bận hoạt động thể thao vào thứ Bảy nên không đi cùng anh được nữa. Theo bạn, Hùng có thể cảm thấy thế nào?",
    steu7: "Mai đang tìm mua nhà. Có chuyện xảy ra khiến cô thấy hối tiếc. Theo bạn, nhiều khả năng chuyện gì đã xảy ra?",
    steu8: "Hà đang ngồi làm việc ở bàn của mình. Có chuyện xảy ra khiến cô thấy bất ngờ. Theo bạn, nhiều khả năng chuyện gì đã xảy ra?",
    steu9: "Một người nghĩ rằng người khác cố ý làm điều tốt cho mình. Theo bạn, người đó có thể cảm thấy thế nào?",
    steu10: "Nhờ chính nỗ lực của mình, một người đạt được mục tiêu họ mong muốn. Theo bạn, người đó có thể cảm thấy thế nào?",
    steu11: "Một chuyện không mong muốn trở nên khó xảy ra hơn, hoặc dừng hẳn. Theo bạn, người trong cuộc có thể cảm thấy thế nào?",
    steu12: "Tuấn thử dùng chiếc điện thoại mới. Bình thường máy móc nào anh cũng tự mày mò ra cách dùng, nhưng lần này loay hoay mãi vẫn không cho điện thoại chạy được. Theo bạn, Tuấn có thể cảm thấy thế nào?",
    steu13: "Bạn của Nam bị ốm và ho thẳng vào người anh, chẳng buồn quay đi hay che miệng. Theo bạn, Nam có thể cảm thấy thế nào?",
    steu14: "Quân và vợ đang kể cho nhau nghe chuyện trong ngày. Có chuyện khiến Quân thấy bất ngờ. Theo bạn, nhiều khả năng chuyện gì đã xảy ra?",
    steu15: "Một người quản lý khó tính mà ai cũng ngại làm việc cùng vừa chuyển khỏi chỗ làm của Phong. Theo bạn, Phong có thể cảm thấy thế nào?",
    steu16: "Vì những lý do ngoài ý muốn, tính chất công việc của Vân thay đổi, và cô không còn được làm phần việc mình thích nhất nữa. Theo bạn, Vân có thể cảm thấy thế nào?",
    steu17: "Gần đây Ly ngủ không ngon, mà trong cuộc sống chẳng có gì thay đổi để giải thích vì sao. Theo bạn, Ly có thể cảm thấy thế nào?",
    steu18: "Một người tin rằng người khác cố ý làm cho một điều tốt ngừng đến với mình. Nhưng người đó thấy mình vẫn có thể làm gì đó để thay đổi. Theo bạn, người đó có thể cảm thấy thế nào?",
    steu19: "Đạt đã đi làm ở công việc hiện tại được sáu tháng. Có chuyện xảy ra khiến anh thấy hối tiếc. Theo bạn, nhiều khả năng chuyện gì đã xảy ra?",
    stem1: "Quyên và Hương chung văn phòng nhiều năm. Rồi Hương chuyển sang chỗ làm mới, và Quyên dần mất liên lạc với cô. Theo bạn, cách ứng xử nào hiệu quả nhất với Quyên?",
    stem2: "Ông Tâm chỉ còn vài năm nữa là nghỉ hưu thì hay tin vị trí của mình sắp bị cắt. Ông vẫn còn một công việc khác, nhưng vai trò kém quan trọng hơn. Theo bạn, cách ứng xử nào hiệu quả nhất với ông Tâm?",
    stem3: "Sơn vào làm ở một công ty mới, nơi anh chẳng quen ai và thấy mọi người cũng không mấy thân thiện. Theo bạn, cách ứng xử nào hiệu quả nhất với Sơn?",
    stem4: "Khoa chuyển đến sống ở một thành phố xa gia đình và bạn bè. Anh nhận ra bạn bè ít chủ động giữ liên lạc hơn anh tưởng. Theo bạn, cách ứng xử nào hiệu quả nhất với Khoa?",
    stem5: "Bình đi nước ngoài một thời gian dài, nay về thăm gia đình. Mọi thứ đổi thay nhiều đến mức anh thấy mình như người ngoài cuộc. Theo bạn, cách ứng xử nào hiệu quả nhất với Bình?",
    stem6: "Dũng được nhận vào một vị trí danh giá ở nước ngoài, xa gia đình mà anh rất gắn bó. Sau khi cân nhắc, anh và vợ thấy chuyển đi là xứng đáng. Theo bạn, cách ứng xử nào hiệu quả nhất với Dũng?",
    stem7: "Lan nghe điện thoại, biết tin người thân đang nằm viện trong tình trạng nguy kịch. Theo bạn, cách ứng xử nào hiệu quả nhất với Lan?",
    stem8: "Đã mấy tháng cô Thoa không nói chuyện với cháu trai, dù hồi cháu còn nhỏ hai cô cháu rất thân. Cô gọi cho cháu, nhưng cháu chỉ nói chuyện được năm phút. Theo bạn, cách ứng xử nào hiệu quả nhất với cô Thoa?",
    stem9: "Mận và chị dâu bình thường khá hợp nhau, chị cũng hay trông con giúp Mận với một khoản thù lao nhỏ. Nhưng gần đây chị còn quét cả mạng nhện rồi chê nhà bừa bộn, khiến Mận thấy bị xúc phạm. Theo bạn, cách ứng xử nào hiệu quả nhất với Mận?",
    stem10: "Hải khá chắc rằng công ty mình đang sa sút và công việc của anh đang bị đe dọa. Đây là một công ty lớn, mà chưa có thông báo chính thức nào. Theo bạn, cách ứng xử nào hiệu quả nhất với Hải?",
    stem11: "Diệp chuyển từ một công ty nhỏ sang một công ty rất lớn. Ở đó người với người ít gần gũi, và cô thấy thiếu điều đó. Theo bạn, cách ứng xử nào hiệu quả nhất với Diệp?",
    stem12: "Một khách hàng khó tính chiếm rất nhiều thời gian của Giang, rồi còn đòi gặp sếp để phàn nàn về năng lực của cô. Dù sếp trấn an rằng cô làm tốt, Giang vẫn thấy ấm ức. Theo bạn, cách ứng xử nào hiệu quả nhất với Giang?",
    stem13: "Phúc và Bảo hay ra quán cà phê sau mỗi tuần làm việc, ngồi tán chuyện công ty. Sau khi công việc của Bảo bị chuyển sang bộ phận khác, anh thôi không ra quán nữa. Phúc nhớ những buổi cà phê chiều thứ Sáu ấy. Theo bạn, cách ứng xử nào hiệu quả nhất với Phúc?",
    stem14: "Thảo, bạn của My, sắp ra nước ngoài sống cùng người yêu. Hai người thân nhau đã nhiều năm, và lần này Thảo khó có khả năng quay về. Theo bạn, cách ứng xử nào hiệu quả nhất với My?",
    stem15: "Hạnh bị chậm nhận những nguồn lực cần thiết nên công việc trễ tiến độ rất nhiều. Vậy mà trong báo cáo tiến độ, cô không hề nhắc đến chuyện thiếu nguồn lực. Theo bạn, cách ứng xử nào hiệu quả nhất với Hạnh?",
    stem16: "Bạn của Nga nhận xét rằng mấy đứa con nhỏ của bạn ấy có vẻ phát triển nhanh hơn con của Nga. Nga thấy đúng là như vậy. Theo bạn, cách ứng xử nào hiệu quả nhất với Nga?",
    stem17: "Kiên vừa đi học vừa làm bán thời gian ở một chỗ mới. Lịch ca làm trong tuần của anh bị đổi vào phút chót mà chẳng ai hỏi ý anh. Theo bạn, cách ứng xử nào hiệu quả nhất với Kiên?",
    stem18: "Lâu rồi Yến chưa gặp Kha nên rất mong chuyến đi chơi cuối tuần của hai người. Nhưng Kha đã đổi khác nhiều, và Yến thấy cô không còn là người bạn đồng hành thú vị như trước. Theo bạn, cách ứng xử nào hiệu quả nhất với Yến?",
  },
  options: {
    steu1: { a: "Ngạc nhiên", b: "Tự hào", c: "Nhẹ nhõm", d: "Hy vọng", e: "Vui sướng" },
    steu2: { a: "Khổ sở", b: "Vui sướng", c: "Ngạc nhiên", d: "Hy vọng", e: "Sợ hãi" },
    steu3: { a: "Tức giận", b: "Phấn khích", c: "Khinh thường", d: "Xấu hổ", e: "Kinh hãi" },
    steu4: { a: "Chán nản", b: "Bực bội", c: "Tức giận", d: "Khinh thường", e: "Khổ sở" },
    steu5: { a: "Ác cảm", b: "Phẫn nộ", c: "Ghen tị", d: "Ngạc nhiên", e: "Lo âu" },
    steu6: { a: "Tức giận", b: "Buồn", c: "Bực bội", d: "Khổ sở", e: "Xấu hổ" },
    steu7: {
      a: "Cô không trả giá một căn nhà mình muốn, giờ mới đi tìm hiểu xem có còn kịp không.",
      b: "Cô tìm được một căn nhà ưng ý mà trước đó cứ nghĩ là sẽ không tìm ra.",
      c: "Cô không kịp trả giá căn nhà mình thích vì ngân hàng giải ngân không kịp.",
      d: "Cô không trả giá căn nhà mình thích, giờ thì người khác đã mua mất.",
      e: "Cô đã trả giá một căn nhà và đang chờ xem có được chấp nhận không.",
    },
    steu8: {
      a: "Một đồng nghiệp kể một câu đùa nhạt nhẽo.",
      b: "Cô đang làm một việc mới mà trước giờ chưa từng làm.",
      c: "Cô thấy vài kết quả khác với những gì mình tưởng.",
      d: "Cô nhận ra mình sẽ không kịp hoàn thành công việc.",
      e: "Cô phải làm một việc mà bình thường ở chỗ làm cô không làm.",
    },
    steu9: { a: "Hy vọng", b: "Tự hào", c: "Biết ơn", d: "Ngạc nhiên", e: "Nhẹ nhõm" },
    steu10: { a: "Vui sướng", b: "Hy vọng", c: "Nhẹ nhõm", d: "Tự hào", e: "Ngạc nhiên" },
    steu11: { a: "Hối tiếc", b: "Hy vọng", c: "Vui sướng", d: "Buồn bã", e: "Nhẹ nhõm" },
    steu12: { a: "Khổ sở", b: "Bối rối", c: "Ngạc nhiên", d: "Nhẹ nhõm", e: "Bực bội" },
    steu13: { a: "Lo âu", b: "Ác cảm", c: "Ngạc nhiên", d: "Ghen tị", e: "Phẫn nộ" },
    steu14: {
      a: "Vợ anh nói nhiều, điều ít khi xảy ra.",
      b: "Vợ anh nói về những chuyện khác hẳn ngày thường.",
      c: "Vợ anh bảo rằng có thể cô có tin xấu.",
      d: "Vợ anh báo cho Quân một tin không giống như anh nghĩ.",
      e: "Vợ anh kể một câu chuyện vui.",
    },
    steu15: { a: "Vui sướng", b: "Hy vọng", c: "Hối tiếc", d: "Nhẹ nhõm", e: "Buồn bã" },
    steu16: { a: "Xấu hổ", b: "Buồn", c: "Tức giận", d: "Khổ sở", e: "Bực bội" },
    steu17: { a: "Tức giận", b: "Sợ hãi", c: "Buồn", d: "Khổ sở", e: "Tội lỗi" },
    steu18: { a: "Tức giận", b: "Khinh thường", c: "Khổ sở", d: "Chán nản", e: "Bực bội" },
    steu19: {
      a: "Anh không nộp đơn cho một vị trí mình muốn, rồi phát hiện một người kém hơn lại được nhận.",
      b: "Anh không nộp đơn cho một vị trí mình muốn, và đã bắt đầu tìm một vị trí tương tự.",
      c: "Anh phát hiện cơ hội thăng tiến đã không còn nữa.",
      d: "Anh phát hiện mình không được nhận vào vị trí mà cứ tưởng chắc chắn sẽ có.",
      e: "Anh không hề biết đến một vị trí lẽ ra có thể nộp đơn, giờ thì đã quá muộn.",
    },
    stem1: {
      a: "Cứ chấp nhận rằng cô ấy đã đi và tình bạn coi như xong.",
      b: "Gọi cho Hương, rủ cô đi ăn trưa hoặc cà phê để hàn huyên.",
      c: "Liên lạc lại với Hương và hẹn gặp, đồng thời làm quen với người mới thay chỗ cô.",
      d: "Dành thời gian làm quen với những người khác trong văn phòng và bắt đầu những tình bạn mới.",
    },
    stem2: {
      a: "Cân nhắc kỹ các lựa chọn và bàn bạc với gia đình.",
      b: "Nói chuyện với sếp hoặc ban quản lý về việc này.",
      c: "Chấp nhận tình huống, nhưng trong lòng vẫn cay đắng.",
      d: "Bỏ việc đó.",
    },
    stem3: {
      a: "Vui chơi với bạn bè ngoài giờ làm.",
      b: "Tập trung làm tốt công việc ở chỗ mới.",
      c: "Chủ động bắt chuyện và tự mình thân thiện trước.",
      d: "Nghỉ việc và tìm một nơi có môi trường tốt hơn.",
    },
    stem4: {
      a: "Cố hòa nhập cuộc sống ở thành phố mới bằng cách tham gia câu lạc bộ và các hoạt động ở đó.",
      b: "Anh nên chủ động liên lạc với họ, nhưng cũng cố làm quen người mới ở thành phố mới.",
      c: "Buông mấy người bạn cũ, vì họ đã cho thấy là không đáng tin.",
      d: "Nói thẳng với bạn bè rằng anh thất vọng vì họ chẳng liên lạc gì.",
    },
    stem5: {
      a: "Không làm gì cả, rồi mọi chuyện sẽ tự ổn thôi.",
      b: "Nói với gia đình rằng anh thấy mình bị bỏ rơi.",
      c: "Dành thời gian lắng nghe và hòa nhập trở lại.",
      d: "Tự nhủ rằng các mối quan hệ có thể đổi thay theo thời gian.",
    },
    stem6: {
      a: "Nghĩ rằng lẽ ra đã không muốn đi thì đừng nộp đơn làm gì.",
      b: "Lập một cách giữ liên lạc đều đặn, như gọi điện hay email hằng tuần.",
      c: "Nghĩ về những cơ hội tuyệt vời mà thay đổi này mang lại.",
      d: "Không nhận vị trí đó.",
    },
    stem7: {
      a: "Cứ để mình khóc và trút hết cảm xúc bao lâu tùy ý.",
      b: "Nói chuyện với người thân khác cho bình tĩnh lại và nắm tình hình, rồi vào viện.",
      c: "Chẳng có gì cô làm được cả.",
      d: "Vào viện và hỏi nhân viên y tế về tình trạng của người thân.",
    },
    stem8: {
      a: "Hiểu rằng cháu đang lớn, có thể không muốn dành nhiều thời gian cho gia đình như trước nữa.",
      b: "Tính chuyện ghé thăm cháu tận nơi và trò chuyện cho thật lâu.",
      c: "Hiểu rằng các mối quan hệ rồi sẽ đổi thay, nhưng thỉnh thoảng vẫn gọi cho cháu.",
      d: "Buồn vì chuyện đó, nhưng đành chấp nhận là chẳng làm gì được.",
    },
    stem9: {
      a: "Nói với chị dâu rằng mấy lời đó làm mình buồn lòng.",
      b: "Tìm người trông con khác.",
      c: "Biết ơn vì nhà mình được dọn miễn phí.",
      d: "Bảo chị chỉ trông con thôi, đừng dọn dẹp.",
    },
    stem10: {
      a: "Tìm hiểu xem chuyện gì đang xảy ra và chia sẻ nỗi lo với gia đình.",
      b: "Cố gồng cho công ty trụ lại bằng cách làm việc cật lực hơn.",
      c: "Bắt đầu nộp đơn xin việc nơi khác.",
      d: "Coi những chuyện này như cơ hội để bắt đầu lại.",
    },
    stem11: {
      a: "Trò chuyện với đồng nghiệp, cố gắng tạo quan hệ và kết bạn.",
      b: "Bắt đầu tìm việc mới để rời khỏi môi trường đó.",
      c: "Cứ để thời gian trôi, rồi mọi chuyện sẽ ổn.",
      d: "Tập trung vào bạn bè bên ngoài và đồng nghiệp ở các công việc trước.",
    },
    stem12: {
      a: "Tâm sự với bạn bè hoặc đồng nghiệp về chuyện đó.",
      b: "Bỏ qua chuyện đó và bắt tay vào việc tiếp theo.",
      c: "Trấn tĩnh lại bằng cách hít thở sâu hoặc đi dạo một lát.",
      d: "Nghĩ rằng mình vốn vẫn làm tốt, và việc khách này khó tính không phải lỗi của mình.",
    },
    stem13: {
      a: "Ra quán cà phê hoặc giao lưu với các đồng nghiệp khác.",
      b: "Thôi đừng bận tâm, cứ kệ mọi thay đổi và để Bảo yên.",
      c: "Không nói chuyện với Bảo nữa.",
      d: "Rủ Bảo lần nữa, có thể đổi sang một dịp khác.",
    },
    stem14: {
      a: "Quên Thảo đi.",
      b: "Dành thời gian cho những người bạn khác, giữ cho mình bận rộn.",
      c: "Nghĩ rằng Thảo và người yêu rồi sẽ sớm quay về.",
      d: "Cố giữ liên lạc đều qua email, điện thoại hay thư từ.",
    },
    stem15: {
      a: "Trình bày chuyện thiếu nguồn lực với sếp hoặc ban quản lý.",
      b: "Rút ra bài học rằng lần sau nên lên kế hoạch trước.",
      c: "Ghi rõ việc thiếu nguồn lực vào báo cáo tiến độ của mình.",
      d: "Đừng bận tâm chuyện đó làm gì.",
    },
    stem16: {
      a: "Đem chuyện này ra bàn với một người bạn khác.",
      b: "Nổi giận chất vấn bạn vì sao lại nói ra những lời như thế.",
      c: "Hiểu rằng mỗi đứa trẻ phát triển với một nhịp khác nhau.",
      d: "Hỏi bác sĩ xem nhịp phát triển bình thường là như thế nào.",
    },
    stem17: {
      a: "Từ chối làm các ca mới.",
      b: "Tìm hiểu xem có lý do hợp lý nào cho việc đổi ca không.",
      c: "Nói với người quản lý ca rằng anh không hài lòng về chuyện này.",
      d: "Làu bàu chấp nhận và làm các ca đó.",
    },
    stem18: {
      a: "Hủy chuyến đi và về nhà.",
      b: "Nhận ra đã đến lúc dẹp tình bạn này lại và bước tiếp.",
      c: "Hiểu rằng con người ta rồi sẽ đổi thay, nên cứ bước tiếp, nhưng vẫn giữ những kỷ niệm đẹp.",
      d: "Tập trung vào những tình bạn khác trọn vẹn hơn của mình.",
    },
  },
}
