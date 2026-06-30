import type { TestContent } from "@/lib/test-engine/types"

export const vi: TestContent = {
  title: "Bài Test Ý Nghĩa Cuộc Sống",
  tagline: "Bạn thấy đời mình có ý nghĩa tới đâu, và đang ra sức đi tìm ý nghĩa ấy tới mức nào",
  description:
    "Thang đo Ý nghĩa Cuộc sống (MLQ), một thước đo được dùng rộng rãi về ý nghĩa và mục đích sống. Mười câu ngắn chia thành hai điểm: bạn đã thấy đời mình có ý nghĩa tới đâu, và bạn đang nỗ lực đi tìm ý nghĩa ấy tới mức nào. Đặt hai điểm cạnh nhau, bạn sẽ thấy mình đang đứng ở đâu ngay lúc này.",
  category: "Ý nghĩa cuộc sống",
  scientificBasis:
    "Đây là Thang đo Ý nghĩa Cuộc sống (MLQ), do Michael Steger và cộng sự xây dựng năm 2006, nay là một trong những công cụ chuẩn để đo lường ý nghĩa cuộc sống. Cả mười câu được giữ nguyên văn, và tác giả cho dùng thang đo miễn phí cho mục đích giáo dục và nghiên cứu. Nó tách bạch hai thứ người ta hay gộp làm một: ý nghĩa hiện có, tức bạn đã thấy đời mình có ý nghĩa tới đâu, và sự kiếm tìm, tức bạn đang nỗ lực đi tìm hay đào sâu ý nghĩa ấy tới đâu. Cấu trúc hai nhân tố này đứng vững qua nhiều nghiên cứu ở nhiều nền văn hóa; cả hai thang đều đáng tin cậy (tính nhất quán nội tại khoảng .82 đến .88) và điểm số khá ổn định sau một tháng (khoảng .70). Ý nghĩa hiện có là một trong những yếu tố dự báo tốt nhất cho cảm giác hạnh phúc; còn sự kiếm tìm thì có liên hệ phức tạp hơn, và chính điều đó khiến việc đặt hai thang cạnh nhau trở nên thú vị.",
  disclaimer:
    "Đây là công cụ để tự nhìn lại mình, không phải một bài đánh giá lâm sàng hay một chẩn đoán. Cảm giác về ý nghĩa lên xuống theo những gì đang diễn ra trong đời bạn, nên đây chỉ là lát cắt của hiện tại, không phải một phán quyết về tương lai. Điểm kiếm tìm cao không phải một vấn đề cần sửa; với nhiều người, đó còn là dấu hiệu của sự trưởng thành. Hai thang điểm này nên được đọc cùng nhau, chứ đừng rút gọn thành một con số tốt hay xấu. Nếu đã lâu rồi bạn thấy cuộc sống trống rỗng hay vô nghĩa và điều đó đè nặng lên tâm trạng, hãy thử chia sẻ với một người bạn tin tưởng hoặc một chuyên gia sức khỏe tâm thần.",
  instructions:
    "Hãy dành một lát suy nghĩ xem điều gì khiến cuộc đời và sự tồn tại của bạn trở nên quan trọng và đáng giá. Với mỗi câu, hãy chọn xem nó đúng hay không đúng với bạn tới mức nào ngay lúc này. Đây là những câu hỏi rất riêng tư, không có câu trả lời đúng hay sai, nên cứ trả lời thật lòng.",
  resultKicker: "Bức tranh ý nghĩa của bạn",
  scoresTitle: "Hai điểm của bạn",
  scoresHint:
    "Ý nghĩa ở đây là hai điểm tách riêng, không phải một. Ý nghĩa hiện có là mức bạn đã thấy đời mình có ý nghĩa; sự kiếm tìm là mức bạn đang chủ động đi tìm ý nghĩa ấy. Hai điểm nên được nhìn cùng nhau, và điểm kiếm tìm cao không phải là kết quả tệ hơn điểm thấp.",
  scale: {
    minLabel: "Hoàn toàn không đúng",
    maxLabel: "Hoàn toàn đúng",
    pointLabels: [
      "Hoàn toàn không đúng",
      "Phần lớn không đúng",
      "Hơi không đúng",
      "Không chắc đúng hay sai",
      "Hơi đúng",
      "Phần lớn đúng",
      "Hoàn toàn đúng",
    ],
  },
  dimensions: {
    presence: {
      label: "Ý nghĩa hiện có",
      description:
        "Mức độ bạn cảm thấy đời mình lúc này đã có ý nghĩa và một mục đích rõ ràng. Điểm cao nghĩa là bạn thấy cuộc đời mình đang hướng về một điều gì đó.",
      lowLabel: "Còn mơ hồ",
      highLabel: "Thấy có ý nghĩa",
    },
    search: {
      label: "Sự kiếm tìm ý nghĩa",
      description:
        "Mức độ bạn đang chủ động đi tìm ý nghĩa, mục đích, hay một cảm nhận sâu hơn về điều cuộc đời mình hướng tới. Điểm cao nghĩa là câu hỏi ấy còn để ngỏ và bạn đang đi tìm câu trả lời.",
      lowLabel: "Không kiếm tìm",
      highLabel: "Đang kiếm tìm",
    },
  },
  outcomes: {
    anchored: {
      name: "Vững chãi",
      tagline: "Bạn biết đời mình hướng về đâu, và đang sống đúng như vậy",
      summary:
        "Bạn thấy cuộc đời mình có một ý nghĩa rõ ràng, và không cuống cuồng đi tìm thêm. Bạn đã dừng chân ở một nơi mình thấy đúng, và hầu hết thời gian, bạn có thể nói rõ đời mình sống vì điều gì.",
      longDescription:
        "Ý nghĩa hiện có ở mức cao đi cùng nhu cầu kiếm tìm thấp là chỗ an yên nhất trên bản đồ này. Bạn đã có một câu trả lời đủ dùng cho câu hỏi điều gì khiến đời mình đáng sống, dù đó là con người, công việc, niềm tin, một nghề mình theo đuổi, hay một điều gì lặng lẽ hơn, và bạn không trằn trọc tìm cách đổi nó lấy một thứ tốt hơn. Nghiên cứu cho thấy cảm nhận ý nghĩa vững vàng đi liền với tâm trạng ổn định hơn, hài lòng với cuộc sống nhiều hơn, và bật dậy tốt hơn khi gặp chuyện. Điều duy nhất nên để mắt tới là ý nghĩa không phải tấm cúp thắng một lần là xong. Đời người thay đổi, và điều từng là trung tâm năm hai mươi tuổi có thể hóa nhạt nhòa ở tuổi bốn mươi. Giữ cho mình một chút tò mò chính là cách để mục đích sống không âm thầm cũ đi.",
      strengths: [
        "Một cảm nhận rõ ràng và vững vàng về điều đời mình hướng tới",
        "Ít chao đảo trước trắc trở, vì chỗ đứng của bạn không lệ thuộc vào chúng",
        "Có thể cho những người quanh mình một hướng đi",
      ],
      growth: [
        "Giữ lại một sợi tò mò để mục đích sống lớn lên cùng bạn",
        "Để ý xem 'an ổn' có lúc nào âm thầm thành 'đóng cửa' với những hướng đi mới không",
        "Kể lại cách bạn tìm được chỗ đứng; người đang lạc lối học được rất nhiều từ đó",
      ],
    },
    deepening: {
      name: "Đào sâu",
      tagline: "Đã vững chân rồi mà vẫn còn muốn đi xa hơn",
      summary:
        "Bạn đã thấy đời mình có ý nghĩa, vậy mà vẫn tiếp tục khám phá. Với bạn, tìm được mục đích không phải lý do để dừng lại, mà là lý do để đi sâu hơn.",
      longDescription:
        "Điểm cao ở cả ý nghĩa hiện có lẫn sự kiếm tìm là dấu hiệu của người đã có ý nghĩa và xem nó như một thứ còn sống, chứ không phải một câu hỏi đã khép. Bạn kiếm tìm không phải vì thấy thiếu, mà vì bạn tò mò, đang lớn lên, và sẵn lòng để cảm nhận về mục đích của mình rộng mở thêm. Trong nghiên cứu, kiểu kết hợp này thường đi cùng cảm giác hạnh phúc cao và một sự cởi mở thật sự với trải nghiệm, một sự kết hợp vừa hiếm vừa quý. Điều cần để ý là sự bồn chồn không vì mục đích nào cả. Kiếm tìm đẹp nhất khi nó đào sâu thêm điều bạn đang có, chứ không phải khi nó lặng lẽ thì thầm rằng những gì bạn dựng nên vẫn chưa đủ.",
      strengths: [
        "Vừa vững chân vừa không ngừng lớn lên",
        "Cởi mở với điều mới mà không mất đi chỗ đứng",
        "Xem mục đích là thứ mình bồi đắp dần, không phải một ô để tích cho xong",
      ],
      growth: [
        "Cho phép mình tận hưởng điều đã tìm được, thay vì lúc nào cũng đuổi theo một tầng sâu hơn",
        "Kiểm lại xem việc kiếm tìm đang làm đời bạn đầy thêm, chứ không âm thầm phủ nhận những gì đang có",
        "Rủ người khác cùng đi; sự tò mò vừa vững vừa cởi mở của bạn dễ lan lắm",
      ],
    },
    seeking: {
      name: "Đang đi tìm",
      tagline: "Đang giữa hành trình tìm kiếm, chưa tới câu trả lời",
      summary:
        "Bạn đang chủ động đi tìm điều làm cho đời mình có ý nghĩa, và chưa hẳn đã chạm tới. Câu hỏi còn để ngỏ ấy có thể khiến lòng chông chênh, nhưng chính việc đi tìm là cách người ta tìm thấy lối của mình.",
      longDescription:
        "Nhu cầu kiếm tìm mạnh đi cùng cảm nhận ý nghĩa thấp hơn là chỗ rất nhiều người thấy mình rơi vào trong những khúc chuyển lớn của cuộc đời: tuổi đôi mươi, một lần đổi nghề, sau một mất mát, hay bất cứ quãng nào mà những câu trả lời cũ thôi không còn vừa nữa. Nó có thể khiến bạn thấy khó chịu, và ở các mẫu nghiên cứu phương Tây, kiểu kết hợp này quả thật hay đi cùng đôi chút lo âu và sự hài lòng thấp hơn ngay lúc đó. Nhưng kiếm tìm không phải một trạng thái thất bại. Nó chính là động lực của sự trưởng thành, và những người cứ tiếp tục đặt câu hỏi thường đi đến một cảm nhận ý nghĩa chắc chắn hơn so với người chưa bao giờ hỏi. Việc của bạn lúc này là xem hành trình tìm kiếm tự nó đã đáng giá, và đi theo điều thật sự cuốn lấy mình, chứ không phải điều người ta bảo là đáng.",
      strengths: [
        "Đủ thành thật để thừa nhận những câu hỏi lớn vẫn còn để ngỏ",
        "Thật sự dấn thân vào cuộc đời mình thay vì sống theo quán tính",
        "Sẵn sàng để lớn lên, vì kiếm tìm chính là cách dựng nên một cảm nhận ý nghĩa thật sự",
      ],
      growth: [
        "Coi việc đi tìm là một bước tiến, không phải bằng chứng rằng bạn có gì đó không ổn",
        "Đi theo điều thật sự làm bạn rung động, không phải điều bạn nghĩ là mình nên theo",
        "Đi tìm ý nghĩa qua việc làm thực tế: đi tình nguyện, làm ra một thứ gì đó, dành thời gian cho mọi người, thay vì chỉ ngồi nghĩ",
      ],
    },
    adrift: {
      name: "Chông chênh",
      tagline: "Lúc này những câu hỏi lớn lặng đi, và việc kiếm tìm cũng vậy",
      summary:
        "Ngay lúc này bạn không thấy một ý nghĩa nào rõ rệt, mà cũng không chủ động đi tìm. Điều này hay đến trong những quãng nhạt nhòa hay rã rời, và nó phổ biến hơn nhiều so với những gì người ta chịu thừa nhận.",
      longDescription:
        "Ý nghĩa hiện có thấp đi cùng sự kiếm tìm thấp thường hiện ra khi bạn đã cạn sức: kiệt quệ, buồn bã, tê liệt, hay chỉ đang sống cho qua ngày. Nó giống một mùa trong đời hơn là một nét tính cách, và bạn nên nhẹ nhàng với chính mình về điều đó. Trớ trêu là ý nghĩa thường thấy xa vời nhất đúng vào lúc bạn còn ít sức nhất để đi tìm. Đường quay về hiếm khi bắt đầu bằng một câu trả lời lớn lao cho 'đời mình là vì điều gì'. Nó thường bắt đầu từ điều nhỏ: một việc dù chỉ hơi đáng làm, một người đáng để mình có mặt, một khoảnh khắc thật sự đắm vào một thứ gì đó. Nếu sự nhạt nhòa ấy đã kéo dài và kéo tâm trạng bạn đi xuống theo, đó là một lý do thật sự để trò chuyện với người bạn tin tưởng hoặc một chuyên gia, vì cảm giác trống rỗng dai dẳng có thể là một phần của trầm cảm, và trầm cảm thì đáp ứng tốt khi có người đồng hành.",
      strengths: [
        "Không gồng lên giả vờ có một mục đích mà bạn không thật sự cảm thấy",
        "Còn rất nhiều chỗ để dựng nên ý nghĩa từ đây, thường nhiều hơn bạn nghĩ",
        "Đôi khi một quãng nhạt nhòa lại là thứ dọn sạch nền cho một điều chân thật hơn",
      ],
      growth: [
        "Bắt đầu thật nhỏ: một việc đáng làm hôm nay hơn hẳn việc ngồi chờ một câu trả lời lớn lao",
        "Nối lại với mọi người, vì ý nghĩa được dựng nên cùng người khác nhiều hơn là một mình",
        "Nếu cảm giác trống rỗng đã kéo dài và kéo tâm trạng đi xuống, hãy tìm đến một người bạn tin tưởng hoặc một chuyên gia",
      ],
    },
  },
  questions: {
    mlq1: "Tôi hiểu được ý nghĩa cuộc đời mình.",
    mlq2: "Tôi đang đi tìm điều gì đó khiến cuộc đời mình có ý nghĩa.",
    mlq3: "Tôi luôn tìm kiếm mục đích sống của mình.",
    mlq4: "Cuộc đời tôi có một mục đích rõ ràng.",
    mlq5: "Tôi hiểu khá rõ điều gì làm cho cuộc đời mình có ý nghĩa.",
    mlq6: "Tôi đã tìm ra một mục đích sống khiến mình thấy mãn nguyện.",
    mlq7: "Tôi luôn kiếm tìm điều gì đó khiến cuộc đời mình thấy đáng giá.",
    mlq8: "Tôi đang đi tìm một mục đích hoặc một sứ mệnh cho cuộc đời mình.",
    mlq9: "Cuộc đời tôi chẳng có mục đích nào rõ ràng.",
    mlq10: "Tôi đang tìm kiếm ý nghĩa cho cuộc đời mình.",
  },
}
