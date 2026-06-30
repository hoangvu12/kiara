import type { TestContent } from "@/lib/test-engine/types"

export const vi: TestContent = {
  title: "Bài Test Lòng Trắc Ẩn Với Bản Thân",
  tagline: "Bạn đối xử với chính mình dịu dàng tới đâu khi mọi chuyện không ổn",
  description:
    "Thang đo Lòng trắc ẩn với bản thân, thước đo chuẩn về cách bạn đối xử với mình mỗi khi thất bại, chật vật hay thấy mình chưa đủ tốt. Hai mươi sáu câu ngắn chia thành ba mặt của lòng trắc ẩn: bạn đón nhận nỗi đau của mình bằng sự tử tế hay bằng những lời phán xét khắt khe, bạn thấy mình gắn với mọi người hay một mình trong đó, và bạn giữ được những cảm xúc nặng nề ở thế cân bằng hay bị chúng cuốn đi.",
  category: "Lòng trắc ẩn với bản thân",
  scientificBasis:
    "Đây là Thang đo Lòng trắc ẩn với bản thân (Self-Compassion Scale, SCS), do Kristin Neff xây dựng năm 2003 và hiện là thước đo lòng trắc ẩn với bản thân được dùng nhiều nhất trong tâm lý học. Cả hai mươi sáu câu được giữ nguyên văn, và Neff cho phép dùng thang đo này miễn phí cho nghiên cứu, giảng dạy và công việc trị liệu. Nó nhìn vào ba thứ luôn đi cùng nhau mỗi khi bạn gặp chuyện khó: tử tế với mình hay tự trách, thấy mình giống mọi người hay thấy lạc lõng, và giữ được tâm cân bằng hay bị cảm xúc nhấn chìm. Các thang con đều đáng tin cậy và cấu trúc sáu phần này đã được kiểm chứng qua nhiều nghiên cứu và nhiều nền văn hóa; đồng thời hơn chín mươi phần trăm phần khác biệt có ý nghĩa trong câu trả lời được gói gọn trong một điểm tổng duy nhất, nên lòng trắc ẩn với bản thân thường được đọc vừa như một thể thống nhất vừa như từng phần riêng. Nó có chỗ giao với lòng tự trọng nhưng không phải là một: lòng tự trọng nói về việc bạn tự đánh giá mình tốt hay đáng giá tới đâu, thường dựa vào việc làm giỏi hay hơn người, còn lòng trắc ẩn chỉ đơn giản là cách bạn đối xử với mình khi đang khổ, và nó chẳng đòi hỏi gì ở bạn ngoài một phản ứng dịu dàng hơn.",
  disclaimer:
    "Đây là công cụ để tự nhìn lại mình, không phải một bài đánh giá lâm sàng hay một chẩn đoán. Lòng trắc ẩn bạn dành cho mình thay đổi theo những gì bạn đang trải qua, nên đây chỉ là lát cắt của hiện tại, không phải một nét cố định hay một phán quyết về con người bạn. Nếu điểm của bạn ra thấp, hãy đọc nó thật nhẹ nhàng: nó không có nghĩa là bạn có gì sai, mà chỉ là bạn đã quen khắt khe với chính mình, và thói quen đó tập lại được. Các mức thấp, vừa và cao đi theo hướng dẫn ước chừng mà Neff đưa ra, không phải một ranh giới lâm sàng, vì chưa có ngưỡng chính thức nào cả. Nếu bạn đã khổ trong một thời gian dài và khó lòng tử tế với bản thân, hãy thử chia sẻ với một người bạn tin tưởng hoặc một chuyên gia sức khỏe tâm thần.",
  instructions:
    "Hãy nghĩ về cách bạn thường đối xử với chính mình trong những lúc khó khăn. Với mỗi câu, hãy chọn mức độ bạn hay làm như vậy, từ gần như không bao giờ đến gần như luôn luôn. Cố trả lời theo cách bạn thật sự phản ứng, chứ không phải cách bạn nghĩ mình nên làm. Không có câu trả lời đúng hay sai.",
  resultKicker: "Kết quả lòng trắc ẩn của bạn",
  scoresTitle: "Ba mặt của bạn",
  scoresHint:
    "Ở đây lòng trắc ẩn với bản thân có ba mặt, mỗi mặt là một thanh trượt giữa một phản ứng dịu dàng và một phản ứng khắt khe hơn. Nghiêng về phía bên phải ở mỗi mặt nghĩa là bạn có xu hướng đón nhận những khó khăn của mình bằng lòng trắc ẩn. Kết quả tổng của bạn là sự hòa quyện của cả ba mặt, chứ không phải riêng đầu nào.",
  scale: {
    minLabel: "Gần như không bao giờ",
    maxLabel: "Gần như luôn luôn",
    pointLabels: [
      "Gần như không bao giờ",
      "Hiếm khi",
      "Thỉnh thoảng",
      "Thường xuyên",
      "Gần như luôn luôn",
    ],
  },
  dimensions: {
    kindness: {
      label: "Tử tế: tử tế với mình hay tự trách",
      description:
        "Cách bạn nói với chính mình mỗi khi vấp ngã. Nghiêng về bên phải nghĩa là bạn dành cho mình sự ấm áp và kiên nhẫn; nghiêng về bên trái nghĩa là bạn trở nên khắt khe, lạnh lùng với bản thân đúng vào lúc đau nhất.",
      lowLabel: "Tự trách",
      highLabel: "Tử tế với mình",
    },
    humanity: {
      label: "Kết nối: thấy mình không đơn độc hay lạc lõng",
      description:
        "Những lúc khó khăn khiến bạn thấy mình hòa vào dòng người hay bị đẩy ra ngoài. Nghiêng về bên phải nghĩa là bạn nhớ rằng thất bại và thiếu sót là điều ai cũng có, nên bạn không thấy mình đơn độc; nghiêng về bên trái nghĩa là dù khuyết điểm là chuyện thường tình ở mọi người, bạn vẫn thấy như chỉ mình mình mới như vậy và bị tách khỏi mọi người.",
      lowLabel: "Lạc lõng",
      highLabel: "Không đơn độc",
    },
    mindfulness: {
      label: "Cân bằng: giữ tâm cân bằng hay bị cuốn đi",
      description:
        "Cảm xúc đau buồn làm gì bạn ngay trong khoảnh khắc đó. Nghiêng về bên phải nghĩa là bạn giữ được một khoảng lùi để nhìn chúng; nghiêng về bên trái nghĩa là chúng lấn át và cuốn bạn đi.",
      lowLabel: "Bị cảm xúc cuốn đi",
      highLabel: "Giữ tâm cân bằng",
    },
  },
  outcomes: {
    low: {
      name: "Lòng trắc ẩn thấp",
      tagline: "Bạn khắt khe với mình hơn nhiều so với cách bạn đối xử với một người bạn",
      summary:
        "Lúc này, mỗi khi vấp ngã, phản ứng đầu tiên của bạn là quay sang trách móc chính mình. Bạn phán xét gay gắt những khuyết điểm của mình, thấy cô độc giữa những khó khăn, và bị những cảm xúc nặng nề kéo chìm. Sống như vậy rất mệt, và bạn nên biết rằng đó là một thói quen học được, không phải sự thật về con người bạn.",
      longDescription:
        "Điểm thấp nghĩa là cách bạn đối xử với mình trong những lúc khó nghiêng về phía khắt khe, cô lập và quá tải. Bạn sẽ an ủi một người bạn vừa thất bại mà chẳng cần nghĩ ngợi, nhưng khi chuyện xảy ra với chính mình, sự tử tế biến mất và lời chê trách lên ngôi. Thường thì đây là điều bạn nhặt được từ sớm, từ những người từng khắt khe với bạn, hoặc từ niềm tin rằng cứ khắc nghiệt với mình thì mới giữ được mình trong khuôn khổ. Thật ra không phải vậy. Nghiên cứu đã rõ: tự trách phần lớn chỉ nuôi thêm lo âu và buồn chán, còn lòng trắc ẩn với bản thân mới là thứ thật sự giúp người ta hồi phục và đứng dậy làm lại. Phần đáng mừng, cũng là lý do điểm này đáng để bạn để tâm, là lòng trắc ẩn với bản thân là một kỹ năng, không phải thứ bẩm sinh có hay không. Nó lớn lên nhờ luyện tập, và nó thường vững vàng và tốt cho sức khỏe tinh thần hơn cả lòng tự trọng, vì nó không phụ thuộc vào việc bạn thành công hay hơn người. Bạn có thể bắt đầu từ những điều nhỏ, bằng cách nhận ra cái giọng khắt khe ấy và tự hỏi bạn sẽ nói gì với một người mình thương.",
      strengths: [
        "Thành thật với những khó khăn của mình thay vì giả vờ rằng mình vẫn ổn",
        "Thường rộng lượng và ấm áp với những người khác đang tổn thương",
        "Có nhiều chỗ để đi lên nhất trong các mức ở đây, và mức cải thiện về tinh thần có thể rất lớn",
      ],
      growth: [
        "Khi bắt gặp mình đang tự trách gay gắt, hãy hỏi xem bạn sẽ nói gì với một người bạn thân ở hoàn cảnh đó, rồi thử nói câu ấy với chính mình",
        "Đặt tay lên ngực hay lên cánh tay mình trong một khoảnh khắc khó khăn; phần ấm áp của lòng trắc ẩn là chuyện của cơ thể, không chỉ của suy nghĩ",
        "Nhắc mình rằng thất bại và chật vật là điều ai cũng trải qua, không phải lỗi của riêng bạn",
        "Nếu việc quá khắt khe với bản thân đã bào mòn bạn từ lâu, một chuyên gia tâm lý có thể giúp thật sự, và lòng trắc ẩn với bản thân hoàn toàn học được",
      ],
    },
    moderate: {
      name: "Lòng trắc ẩn vừa phải",
      tagline: "Tử tế với mình vào ngày yên ổn, khắt khe hơn vào lúc quan trọng",
      summary:
        "Bạn có thể đối tốt với chính mình, nhưng điều đó chưa thành tự nhiên. Vào những ngày bình thường, bạn cho mình một cơ hội công bằng; nhưng trong những khoảnh khắc thật sự khó, sự tử tế có thể tuột mất và lời tự trách cũ lại len vào. Đây là chỗ thường gặp nhất.",
      longDescription:
        "Điểm vừa phải nghĩa là bạn có lòng trắc ẩn với bản thân, chỉ là chưa ổn định. Có lẽ phần lớn thời gian bạn đối xử với mình khá tử tế, rồi nhận ra rằng một thất bại thật sự hay một cơn xấu hổ vẫn đủ sức đẩy bạn vào phán xét gay gắt, so đo với người khác, hoặc bị cảm xúc nuốt chửng. Đây là nơi đa số người ta dừng lại, và là một điểm xuất phát tốt, vì bạn đã biết cảm giác tử tế với chính mình là như thế nào. Việc cần làm là khiến nó xuất hiện đúng vào lúc bạn cần nhất, cũng chính là lúc khó với tới nó nhất. Hãy nhìn ba thanh trượt của bạn: thanh thấp nhất thường là nơi sự khắt khe len vào, và là chỗ đáng để bạn để tâm nhất.",
      strengths: [
        "Bạn đã biết cách tử tế với chính mình; đó là nền để xây tiếp",
        "Đủ cân bằng để đón một cú vấp mà không phải lúc nào cũng gục",
        "Nhận ra được những lối mòn của chính mình, vốn đã là một nửa của việc thay đổi",
      ],
      growth: [
        "Để ý xem trong ba thanh trượt, thanh nào thấp nhất; đó là nơi bạn khắt khe với mình nhất",
        "Trong một khoảnh khắc tồi tệ, hãy gọi tên thẳng cảm xúc của mình thay vì cuốn theo nó hay gạt phắt nó đi",
        "Xem một sai lầm là bằng chứng rằng bạn cũng là con người, chứ không phải bằng chứng rằng riêng bạn khiếm khuyết",
        "Tập phản ứng tử tế thành thói quen ngay bây giờ, khi mọi thứ còn yên, để dễ với tới nó hơn lúc sóng gió",
      ],
    },
    high: {
      name: "Lòng trắc ẩn cao",
      tagline: "Bạn vẫn đứng về phía mình, ngay cả khi vấp ngã",
      summary:
        "Khi cuộc đời quật ngã bạn, bạn đón lấy chính mình bằng sự ấm áp thay vì trách móc. Bạn nhận một sai lầm mà không xé nát bản thân, nhớ rằng ai cũng có lúc chật vật, và cảm nhận những điều khó mà không chết chìm trong đó. Đó là một sức mạnh lặng lẽ và bền bỉ.",
      longDescription:
        "Điểm cao nghĩa là bạn đang có thứ bảo vệ sức khỏe tinh thần gần như tốt hơn mọi thứ khác: bạn đối xử với mình như một người đáng được tử tế, nhất là khi vừa thất bại. Bạn không giả vờ rằng những cú vấp không đau, nhưng cũng không chất thêm lời tự trách lên trên nó, nên bạn hồi phục nhanh hơn và đi tiếp được. Khác với lòng tự trọng, vốn phải được chống đỡ bằng việc thắng cuộc hay hơn người, lòng trắc ẩn với bản thân ở lại với bạn cả vào những ngày bạn chưa đủ tốt, và đó chính là lý do nó là cái vững vàng hơn trong hai thứ. Điều duy nhất cần để ý là tử tế với mình không bao giờ có nghĩa là dễ dãi bỏ qua cho mình; lòng trắc ẩn thật sự bao gồm cả việc thành thật nhìn ra điều gì đã sai và mong cho mình tốt hơn. Ở mức đẹp nhất, sự ấm áp bạn dành cho chính mình cũng là sự ấm áp bạn có thể trao cho mọi người quanh bạn.",
      strengths: [
        "Bật dậy sau thất bại mà không rơi vào vòng xoáy tự trách",
        "Giữ được những cảm xúc đau buồn một cách vững vàng thay vì bị chúng điều khiển",
        "Một cảm nhận về giá trị bản thân không phụ thuộc vào việc thắng cuộc hay hơn người",
        "Sự tử tế ấy thường cũng lan ra tới những người khác",
      ],
      growth: [
        "Giữ cho lòng trắc ẩn luôn thành thật: vừa an ủi mình vừa nhìn thẳng vào điều mình sẽ làm khác đi",
        "Dùng sự vững vàng của bạn để nâng đỡ những người đang khắt khe với chính họ hơn nhiều",
        "Để ý xem có thanh trượt nào tụt lại không, vì ngay cả người điểm cao cũng có một mặt khó hơn",
        "Cho phép mình đón nhận trọn vẹn những khoảnh khắc đẹp, chứ không chỉ gắng gượng vượt qua những lúc tồi tệ",
      ],
    },
  },
  questionHelpers: {
    scs4: "Kiểu như khi nghĩ tới những điểm mình còn kém, bạn thấy hình như chỉ mình bạn mới vậy, còn ai cũng ổn cả, nên thấy mình lạc lõng với mọi người.",
    scs5: "Kiểu như khi đang buồn khổ, bạn an ủi và nhẹ nhàng với chính mình, giống như cách bạn dỗ dành một người bạn đang buồn, thay vì trách móc bản thân.",
    scs8: "Kiểu như khi đang khổ, bạn tự trách bản thân, ép mình phải gồng lên, không cho mình được mềm yếu hay nghỉ ngơi.",
  },
  questions: {
    scs1: "Tôi thường khắt khe và hay phán xét những khuyết điểm, thiếu sót của chính mình.",
    scs2: "Những lúc buồn, tôi hay ám ảnh và cứ nghĩ mãi về những điều tồi tệ đã xảy ra.",
    scs3: "Khi mọi chuyện trở nên tồi tệ, tôi xem những khó khăn ấy là một phần của cuộc sống mà ai cũng phải trải qua.",
    scs4: "Mỗi khi nghĩ về những thiếu sót của mình, tôi thường thấy mình cô độc và tách biệt khỏi mọi người.",
    scs5: "Những lúc trong lòng đau khổ, tôi cố dịu dàng và yêu thương chính mình.",
    scs6: "Khi thất bại ở một việc quan trọng với mình, tôi bị cảm giác mình kém cỏi nhấn chìm.",
    scs7: "Những lúc buồn, tôi tự nhắc rằng ngoài kia có rất nhiều người cũng đang cảm thấy giống như mình.",
    scs8: "Vào những lúc thật sự khó khăn, tôi thường khắc nghiệt với chính mình.",
    scs9: "Khi có chuyện làm mình buồn bực, tôi cố giữ cho cảm xúc của mình ở thế cân bằng.",
    scs10: "Khi thấy mình kém cỏi ở mặt nào đó, tôi cố nhắc mình rằng hầu hết mọi người đều có lúc cảm thấy như vậy.",
    scs11: "Tôi khó chịu và thiếu kiên nhẫn với những nét tính cách mà mình không thích ở bản thân.",
    scs12: "Khi đang trải qua giai đoạn rất khó khăn, tôi dành cho mình sự quan tâm và dịu dàng mà mình cần.",
    scs13: "Những lúc buồn, tôi hay có cảm giác phần lớn mọi người chắc đang hạnh phúc hơn mình.",
    scs14: "Khi có chuyện đau lòng xảy ra, tôi cố nhìn nhận tình huống một cách cân bằng.",
    scs15: "Tôi cố nhìn những lỗi lầm, thiếu sót của mình như một phần tự nhiên mà ai làm người cũng có.",
    scs16: "Khi nhìn thấy những điểm mình không thích ở bản thân, tôi tự dằn vặt chính mình.",
    scs17: "Khi thất bại ở một việc quan trọng với mình, tôi cố nhìn mọi chuyện một cách chừng mực, không thổi phồng lên.",
    scs18: "Những lúc thật sự chật vật, tôi hay nghĩ rằng người khác chắc đang sống dễ dàng hơn mình nhiều.",
    scs19: "Tôi đối xử tử tế với bản thân trong những lúc khổ đau.",
    scs20: "Khi có chuyện làm mình buồn bực, tôi bị cảm xúc cuốn đi.",
    scs21: "Trong những lúc khổ đau, đôi khi tôi khá lạnh lùng với chính mình.",
    scs22: "Những lúc buồn, tôi cố đón nhận cảm xúc của mình bằng sự tò mò và cởi mở.",
    scs23: "Tôi bao dung với những khuyết điểm và thiếu sót của bản thân.",
    scs24: "Khi có chuyện đau lòng xảy ra, tôi hay thổi phồng nó lên quá mức.",
    scs25: "Khi thất bại ở một việc quan trọng với mình, tôi thường thấy mình cô độc trong thất bại đó.",
    scs26: "Tôi cố thấu hiểu và kiên nhẫn với những nét tính cách mà mình không thích ở bản thân.",
  },
}
