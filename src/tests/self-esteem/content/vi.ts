import type { TestContent } from "@/lib/test-engine/types"

export const vi: TestContent = {
  title: "Bài Test Lòng Tự Trọng",
  tagline: "Bạn coi trọng và chấp nhận bản thân tới đâu",
  description:
    "Thang đo Lòng tự trọng Rosenberg, thước đo lòng tự trọng được dùng nhiều nhất trong tâm lý học. Mười câu ngắn về cách bạn nhìn nhận chính mình gộp lại thành một điểm tổng, từ cách bạn nói về giá trị bản thân cho tới mức độ bạn sẵn lòng chấp nhận những thiếu sót của mình.",
  category: "Lòng tự trọng",
  scientificBasis:
    "Đây là Thang đo Lòng tự trọng Rosenberg (RSE), do nhà xã hội học Morris Rosenberg xây dựng năm 1965 và đến nay vẫn là thước đo lòng tự trọng tiêu chuẩn. Cả mười câu được giữ nguyên văn; thang đo đã được Đại học Maryland đưa vào phạm vi công cộng. Nó đo lòng tự trọng như một thể thống nhất: năm câu nói theo hướng tích cực và năm câu theo hướng tiêu cực để cân lại thói quen dễ gật đầu, nhưng tất cả cộng lại thành một điểm chứ không phải nhiều nét riêng. Độ tin cậy rất tốt (tính nhất quán nội tại khoảng .77 đến .88; làm lại sau hai tuần đạt .85 đến .88) và nó tương quan đúng như dự đoán với trầm cảm, lo âu cùng các thước đo lòng tự trọng khác.",
  disclaimer:
    "Đây là công cụ để tự nhìn lại mình, không phải một bài đánh giá lâm sàng hay một chẩn đoán. Lòng tự trọng lên xuống theo những gì đang diễn ra trong đời bạn, nên một lần làm chỉ là lát cắt của hiện tại chứ không phải một nét cố định. Các mức thấp, bình thường và cao đi theo những ngưỡng quen thuộc của thang đo này, nhưng chỉ là hướng dẫn để hiểu chứ không phải ranh giới lâm sàng, vì Rosenberg chưa bao giờ đặt ra ngưỡng đó. Nếu cảm giác kém giá trị cứ đè nặng lên bạn dai dẳng, hãy thử chia sẻ với một người bạn tin tưởng hoặc một chuyên gia sức khỏe tâm thần.",
  instructions:
    "Với mỗi câu, hãy chọn mức đồng ý hay không đồng ý sao cho đúng với cảm nhận thường ngày của bạn về bản thân, chứ không phải con người bạn mong muốn hay cảm giác trong một ngày bất thường. Không có câu trả lời đúng hay sai; cứ trả lời thật lòng.",
  resultKicker: "Kết quả lòng tự trọng của bạn",
  scoresTitle: "Điểm của bạn",
  scoresHint:
    "Lòng tự trọng ở đây là một điểm tổng duy nhất. Thanh hiển thị trên thang 100; còn theo điểm gốc của thang đo thì nó chạy từ 0 đến 30, trong đó dưới 15 thường được hiểu là lòng tự trọng thấp, 15 đến 25 là mức bình thường, và 26 đến 30 là cao. Điểm này phản ánh cảm nhận của bạn về chính mình ngay lúc này, không phải một phán quyết vĩnh viễn.",
  scale: {
    minLabel: "Rất không đồng ý",
    maxLabel: "Rất đồng ý",
    pointLabels: ["Rất không đồng ý", "Không đồng ý", "Đồng ý", "Rất đồng ý"],
  },
  dimensions: {
    selfEsteem: {
      label: "Lòng tự trọng tổng thể",
      description:
        "Cảm nhận chung của bạn về giá trị bản thân: bạn tôn trọng, coi trọng và chấp nhận chính mình tới đâu, khi nhìn cả mặt tốt lẫn mặt chưa tốt.",
      lowLabel: "Thấp",
      highLabel: "Cao",
    },
  },
  outcomes: {
    low: {
      name: "Lòng tự trọng thấp",
      tagline: "Lúc này bạn đang khắt khe với chính mình",
      summary:
        "Câu trả lời của bạn cho thấy hiện tại bạn ít coi trọng bản thân: bạn hay chăm chăm vào những thiếu sót của mình, nghi ngờ giá trị bản thân, và ít rộng lượng với mình hơn nhiều so với cách bạn đối xử với một người bạn đang ở trong hoàn cảnh tương tự. Điều này rất thường gặp, nó khiến người ta đau, và nó không kéo dài mãi.",
      longDescription:
        "Điểm thấp nghĩa là giọng nói bên trong đang nghiêng về phía tiêu cực: bạn dễ dàng kể ra những điều mình chưa được, nhưng lại khó đón nhận một lời khen hay một thành công. Lòng tự trọng không phải một sự thật cố định về bạn, mà là một thói quen tự đánh giá, và thói quen thì thay đổi được. Nó thường đi theo những gì đang diễn ra trong đời bạn (một giai đoạn khó khăn, một mất mát, một môi trường khắc nghiệt) chứ không nói lên giá trị thật của bạn. Cách hiệu quả nhất không phải là tự nhủ rằng mình tuyệt vời, mà là đối xử với bản thân công bằng như cách bạn dành cho người mình thương, và để những việc nhỏ bạn làm được dần dần tích lại thành bằng chứng.",
      strengths: [
        "Thành thật và biết nhìn lại mình, không tô vẽ để tự bảo vệ",
        "Thường dễ đồng cảm với nỗi khổ của người khác",
        "Còn nhiều chỗ để đi lên, và mức cải thiện về tinh thần có thể rất lớn",
      ],
      growth: [
        "Khi tự trách, hãy hỏi xem bạn có nói câu đó với một người bạn thân không, rồi thử nói với mình theo cách dịu dàng hơn ấy",
        "Ghi lại những việc nhỏ bạn làm tốt, vì lòng tự trọng thấp hay lọc bỏ chúng đi",
        "Để ý kiểu dán nhãn được ăn cả ngã về không (\"tôi là kẻ thất bại\") và thay bằng chuyện thật sự đã xảy ra",
        "Nếu cảm giác nặng nề cứ dai dẳng, hãy cân nhắc gặp chuyên gia tâm lý; lòng tự trọng đáp ứng rất tốt khi có người đồng hành",
      ],
    },
    typical: {
      name: "Lòng tự trọng bình thường",
      tagline: "Một cảm nhận khá vững và thực tế về giá trị của mình",
      summary:
        "Lòng tự trọng của bạn nằm ở mức bình thường: bạn nhìn nhận được cả điểm mạnh lẫn thiếu sót mà không để bên nào lấn át. Phần lớn thời gian chắc bạn thấy ổn về bản thân, kèm theo những lúc chùng xuống khi mọi chuyện không như ý.",
      longDescription:
        "Điểm ở mức này là kết quả thường gặp nhất, và đây là một chỗ đứng lành mạnh. Bạn giữ một cái nhìn về bản thân cơ bản là tích cực nhưng thực tế: đủ tự tin để đón nhận thử thách và thất vọng mà không bị chúng định nghĩa con người mình, đủ vững vàng để thừa nhận sai lầm. Lòng tự trọng ở mức này vẫn dịch chuyển theo hoàn cảnh, nên cứ chuẩn bị tinh thần là nó sẽ chao đảo trong những giai đoạn khó và chắc lại khi mọi thứ thuận lợi. Chỗ để bạn đi lên thường nằm ở sự ổn định: đừng để giá trị bản thân phụ thuộc quá nhiều vào một kết quả, một mối quan hệ, hay sự công nhận của người khác.",
      strengths: [
        "Cái nhìn cân bằng, nhận ra điểm mạnh mà không cần thổi phồng",
        "Đón nhận được lời chê và thất bại mà không gục ngã",
        "Thường thừa nhận được sai lầm mà vẫn thấy ổn về bản thân",
      ],
      growth: [
        "Để ý xem giá trị bản thân của bạn đang neo vào đâu (công việc, một mối quan hệ, thành tích) và mở rộng cái nền đó ra",
        "Tập đón nhận lời khen bằng một câu cảm ơn đơn giản thay vì gạt đi",
        "Tạo thói quen tự động viên mình trước khi mọi chuyện hỏng, chứ không chỉ sau đó",
      ],
    },
    high: {
      name: "Lòng tự trọng cao",
      tagline: "Một cảm nhận mạnh mẽ và vững vàng về giá trị của mình",
      summary:
        "Câu trả lời của bạn cho thấy bạn coi trọng bản thân một cách chắc chắn và tích cực: bạn quý con người mình, chấp nhận thiếu sót mà không làm quá lên, và không phải dựa nhiều vào sự công nhận của người khác mới thấy ổn. Đó là một thế mạnh thật sự.",
      longDescription:
        "Điểm cao nghĩa là bạn thật lòng coi trọng bản thân: bạn gọi tên được điểm mạnh của mình, chịu được lời chê, và bật dậy sau những lần vấp mà cái nền giá trị bên trong không bị lung lay. Lòng tự trọng cao một cách lành mạnh thì lặng lẽ và vững vàng chứ không ồn ào; nó không cần liên tục chứng minh. Điều duy nhất đáng để ý là sự khác nhau giữa lòng tự trọng vững (ổn định, không phụ thuộc vào việc thắng thua) và một kiểu tự tin mong manh phải lên gân phòng thủ mỗi khi bị thử thách. Kiểu vững vàng cho phép bạn nghe những góp ý khó nghe mà vẫn cởi mở; giữ được sự cởi mở ấy chính là điều giúp tự tin không trở nên giòn gãy.",
      strengths: [
        "Kiên cường trước lời chê và thất bại",
        "Thấy thoải mái là chính mình mà không cần liên tục được trấn an",
        "Sẵn lòng nhận lấy thử thách và rủi ro mà nhiều người né tránh",
      ],
      growth: [
        "Giữ sự cởi mở với cả những góp ý làm mình nhói lòng; tự tin vững vàng thì nghe được mà không xù lông",
        "Để lòng tự trọng đi cùng sự khiêm tốn; coi trọng mình không có nghĩa là phải hơn người",
        "Dùng sự vững vàng của bạn để nâng đỡ những người còn chông chênh về giá trị bản thân",
      ],
    },
  },
  questions: {
    rse1: "Nhìn chung, tôi hài lòng với bản thân mình.",
    rse2: "Đôi lúc tôi thấy mình chẳng ra gì.",
    rse3: "Tôi thấy mình có nhiều điểm tốt.",
    rse4: "Tôi có thể làm mọi việc tốt như phần lớn mọi người.",
    rse5: "Tôi thấy mình chẳng có mấy điều để tự hào.",
    rse6: "Có những lúc tôi thấy mình thật vô dụng.",
    rse7: "Tôi thấy mình là người có giá trị, ít nhất là ngang bằng với những người khác.",
    rse8: "Tôi ước mình có thể tôn trọng bản thân nhiều hơn.",
    rse9: "Nói chung, tôi hay nghiêng về cảm giác mình là một kẻ thất bại.",
    rse10: "Tôi có cái nhìn tích cực về bản thân.",
  },
}
