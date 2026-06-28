import type { TestContent } from "@/lib/test-engine/types"

/**
 * Vietnamese content for the childhood-experiences (MACE-adapted) profile.
 * A careful, natural (not formally validated) translation. English stays the
 * scientific reference.
 */

const questions: Record<string, string> = {
  // Bạo hành lời nói từ bố mẹ
  pv1: "Bố mẹ hoặc người nuôi bạn từng chửi, gọi bạn bằng những cái tên khó nghe, hay hạ thấp bạn.",
  pv2: "Bố mẹ từng nói những lời khiến bạn thấy nhục nhã hoặc thấy mình vô dụng.",
  pv3: "Bố mẹ từng có những hành động khiến bạn sợ rằng mình sắp bị đánh.",
  pv4: "Bố mẹ từng dọa bỏ rơi bạn hoặc đuổi bạn đi.",
  // Bạo hành tinh thần (không bằng lời)
  ne1: "Bố mẹ từng nhốt bạn ở một nơi đáng sợ để phạt, như khóa trong phòng, trong tủ, hay dưới tầng hầm.",
  ne2: "Dù bạn làm gì đi nữa, bố mẹ gần như không bao giờ hài lòng.",
  ne3: "Bố mẹ ít có thời gian cho bạn, hoặc có vẻ không mấy quan tâm đến cuộc sống của bạn.",
  ne4: "Bạn phải gánh những trách nhiệm của người lớn khi còn quá nhỏ để làm việc đó.",
  ne5: "Bạn phải mang trên vai nỗi lo tiền bạc của cả gia đình.",
  ne6: "Bố mẹ giấu bạn những chuyện quan trọng mà lẽ ra bạn có quyền được biết.",
  // Bạo hành thể chất từ bố mẹ
  pp1: "Bố mẹ cố ý xô, túm, véo, tát, hay đá bạn.",
  pp2: "Bố mẹ đánh bạn mạnh đến mức để lại vết tích kéo dài hơn vài phút.",
  pp3: "Bố mẹ làm bạn đau đến mức cần đi khám, hoặc lẽ ra phải đi khám.",
  pp4: "Bố mẹ đánh vào mông, tay, hay chân bạn.",
  pp5: "Bố mẹ đánh vào mông trần của bạn.",
  pp6: "Bố mẹ đánh bạn bằng một vật gì đó, như thắt lưng, roi, hay gậy.",
  // Bỏ bê tình cảm (en3–en5 là câu hỏi ngược)
  en1: "Mẹ, hoặc người phụ nữ nuôi bạn, lạnh nhạt về mặt tình cảm với bạn dù chẳng có lý do gì thật sự.",
  en2: "Bố, hoặc người đàn ông nuôi bạn, lạnh nhạt về mặt tình cảm với bạn dù chẳng có lý do gì thật sự.",
  en3: "Trong nhà có người khiến bạn cảm thấy được yêu thương.",
  en4: "Có người trong gia đình giúp bạn thấy mình quan trọng và đặc biệt.",
  en5: "Gia đình thật sự là chỗ dựa và nguồn sức mạnh cho bạn.",
  // Bỏ bê thể chất (pn1, pn2, pn5 là câu hỏi ngược)
  pn1: "Ở nhà có người chăm sóc và giữ cho bạn được an toàn.",
  pn2: "Khi bạn ốm hay bị thương, sẽ có người đưa bạn đi bác sĩ hoặc bệnh viện nếu cần.",
  pn3: "Có những lúc bạn không có đủ đồ ăn.",
  pn4: "Đôi khi bạn phải mặc quần áo bẩn vì chẳng ai giặt giũ cho.",
  pn5: "Mọi người trong nhà quan tâm, lo lắng cho nhau.",
  // Xâm hại tình dục
  sa1: "Bố mẹ hoặc người chăm sóc từng nói với bạn những lời mang ý tình dục khiến bạn thấy không ổn.",
  sa2: "Bố mẹ hoặc người chăm sóc từng đụng chạm bạn theo kiểu tình dục.",
  sa3: "Bố mẹ hoặc người chăm sóc từng bắt bạn đụng chạm họ theo kiểu tình dục.",
  sa4: "Một người lớn khác từng đụng chạm bạn theo kiểu tình dục.",
  sa5: "Một người lớn khác từng quan hệ tình dục với bạn.",
  sa6: "Một người bằng tuổi bạn từng ép bạn vào hành vi tình dục trái với ý muốn của bạn.",
  sa7: "Một người bằng tuổi bạn từng ép hoặc gây áp lực buộc bạn làm những chuyện tình dục mà bạn không muốn.",
  // Bạo hành tinh thần từ bạn bè
  pe1: "Những đứa trẻ khác chửi, gọi bạn bằng tên khó nghe, hay sỉ nhục bạn nhiều hơn một hai lần mỗi năm.",
  pe2: "Những đứa trẻ khác nói những lời khiến bạn thấy nhục nhã nhiều hơn một hai lần mỗi năm.",
  pe3: "Những đứa trẻ khác nói xấu sau lưng hoặc tung tin đồn về bạn.",
  pe4: "Những đứa trẻ khác cố tình tẩy chay, không cho bạn tham gia.",
  pe5: "Những đứa trẻ khác hành xử theo cách khiến bạn sợ mình sắp bị làm đau.",
  // Bắt nạt thể chất từ bạn bè
  pb1: "Một đứa trẻ khác dọa nạt để lấy tiền hay đồ của bạn.",
  pb2: "Một đứa trẻ khác ép bạn làm những việc bạn không muốn.",
  pb3: "Một đứa trẻ khác cố ý xô, đẩy, đấm, hay đá bạn.",
  pb4: "Một đứa trẻ khác đánh bạn mạnh đến mức để lại vết tích kéo dài hơn vài phút.",
  pb5: "Một đứa trẻ khác làm bạn đau đến mức phải đi khám.",
  // Chứng kiến bạo lực giữa bố mẹ
  wi1: "Bạn từng chứng kiến một người lớn trong nhà xô, tát, hay ném đồ vào mẹ bạn (hoặc người phụ nữ nuôi bạn).",
  wi2: "Bạn từng thấy mẹ bị đánh mạnh đến mức để lại vết tích kéo dài hơn vài phút.",
  wi3: "Bạn từng thấy mẹ bị thương nặng đến mức cần được chăm sóc y tế.",
  wi4: "Bạn từng chứng kiến một người lớn trong nhà xô, tát, hay ném đồ vào bố bạn (hoặc người đàn ông nuôi bạn).",
  wi5: "Bạn từng thấy bố bị đánh mạnh đến mức để lại vết tích kéo dài hơn vài phút.",
  // Chứng kiến anh chị em bị hại
  ws1: "Bạn từng thấy bố mẹ hoặc người lớn đánh anh/chị/em của bạn mạnh đến mức để lại vết tích.",
  ws2: "Bạn từng thấy bố mẹ hoặc người lớn làm anh/chị/em của bạn bị thương nặng đến mức cần chăm sóc y tế.",
  ws3: "Bạn từng thấy bố mẹ hoặc người lớn nói với anh/chị/em của bạn những lời mang ý tình dục khiến bạn thấy không ổn.",
  ws4: "Bạn từng thấy bố mẹ hoặc người lớn đụng chạm anh/chị/em của bạn theo kiểu tình dục.",
}

const options = Object.fromEntries(
  Object.keys(questions).map((id) => [id, { no: "Không", yes: "Có" }])
)

export const vi: TestContent = {
  title: "Bản đồ trải nghiệm tuổi thơ",
  tagline: "Nhẹ nhàng nhìn lại những gì bạn đã đi qua khi còn nhỏ",
  description:
    "Bài này điểm qua những kiểu trải nghiệm khó khăn có thể xảy ra thời thơ ấu — ở nhà, và với bạn bè cùng trang lứa — rồi cho bạn thấy bạn đã trải qua những gì và đến mức nào. Nó không dán cho bạn cái nhãn kiểu “người mang tổn thương”. Thứ nó mang lại là một tấm bản đồ chân thật về những năm đầu đời, để bức tranh trở nên rõ ràng và bớt rối hơn. Lưu ý nhỏ: bài có nhắc thẳng đến những chuyện như bạo hành thể chất và tình dục, nên hãy chỉ làm khi bạn thấy đủ vững vàng, và dừng lại bất cứ lúc nào bạn cần.",
  category: "Tuổi thơ & sang chấn",
  scientificBasis:
    "Phỏng theo thang đo MACE (Maltreatment and Abuse Chronology of Exposure; Teicher & Parigger, 2015), một công cụ nghiên cứu mở đo riêng mười kiểu ngược đãi thời thơ ấu thay vì gộp tất cả vào một con số — đó cũng là điểm khác biệt chính so với bảng hỏi ACE cũ hơn. Mỗi kiểu có điểm riêng, nên bạn nhìn thấy cả một hồ sơ chứ không phải một tổng điểm duy nhất. Câu chữ ở đây đã được Việt hóa cho dễ đọc và gần gũi, nên hãy xem đây là một phiên bản phỏng theo cẩn thận, không phải bản gốc đã được kiểm định từng chữ.",
  disclaimer:
    "Bài này để bạn hiểu thêm về chính mình, không phải để chẩn đoán. Điểm cao ở một kiểu nào đó không có nghĩa bạn “có vấn đề”, và điểm thấp cũng không xóa đi những gì đã xảy ra — chỉ một trải nghiệm đau lòng thôi cũng đã đáng kể, dù cột nào cao hay thấp. Tuổi thơ định hình bạn ra sao còn phụ thuộc vào nhiều thứ hơn những gì một bảng hỏi nắm bắt được, trong đó có chỗ dựa mà bạn từng có và đang có. Nếu những điều này khơi lên quá nhiều cảm xúc, hãy tìm người để chia sẻ. Tại Việt Nam, đường dây hỗ trợ tâm lý Ngày Mai là 096 306 1414, và Tổng đài quốc gia bảo vệ trẻ em là 111. Nếu bạn đang gặp nguy hiểm ngay lúc này, hãy gọi dịch vụ khẩn cấp tại địa phương.",
  instructions:
    "Hãy nghĩ lại suốt thời thơ ấu và tuổi mới lớn của bạn. Với mỗi câu, chọn “Có” nếu chuyện đó từng xảy ra với bạn, kể cả chỉ một hai lần, và “Không” nếu chưa từng. Ở đây không có câu trả lời đúng hay sai, chỉ có điều gì là thật với bạn. Nếu một câu không hợp với hoàn cảnh của bạn, cứ chọn “Không” rồi đi tiếp.",
  resultKicker: "Câu trả lời của bạn gợi lên điều gì",
  scoresTitle: "Hồ sơ của bạn qua mười kiểu",
  scoresHint:
    "Mỗi cột là một kiểu trải nghiệm thời thơ ấu, và cột càng cao thì kiểu đó bạn báo lại càng nhiều. Đây là một tấm gương để bạn nhận ra các khuôn mẫu, không phải một thước điểm để bạn tự đánh giá mình. Xin hãy đọc một cột thấp thật nhẹ nhàng: nó không xóa đi điều gì bạn từng trải qua, và một trải nghiệm nghiêm trọng vẫn đáng kể ngay cả khi cột của nó ngắn.",
  scale: { minLabel: "Không", maxLabel: "Có" },
  dimensions: {
    verbalAbuse: {
      label: "Bạo hành lời nói ở nhà",
      description:
        "Bị bố mẹ hoặc người chăm sóc chửi mắng, hạ thấp, sỉ nhục, hay dọa nạt.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
    },
    nonverbalAbuse: {
      label: "Bạo hành tinh thần ở nhà",
      description:
        "Bị làm cho sợ hãi, kiểm soát, phớt lờ, hay đè nặng theo cách không phải đòn roi nhưng vẫn đau.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
    },
    physicalAbuse: {
      label: "Bạo hành thể chất ở nhà",
      description:
        "Bị bố mẹ hoặc người chăm sóc đánh, phạt đòn, hay làm cho đau về thân thể.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
    },
    emotionalNeglect: {
      label: "Bỏ bê tình cảm",
      description:
        "Lớn lên mà thiếu hơi ấm, sự quan tâm, hay cảm giác mình được yêu thương và có ý nghĩa.",
      lowLabel: "Được quan tâm",
      highLabel: "Thường bị thiếu",
    },
    physicalNeglect: {
      label: "Bỏ bê thể chất",
      description:
        "Những nhu cầu cơ bản không được đáp ứng đều đặn — cái ăn, quần áo sạch, sự an toàn, hay được chăm khi ốm.",
      lowLabel: "Được đáp ứng",
      highLabel: "Thường bị thiếu",
    },
    sexualAbuse: {
      label: "Xâm hại tình dục",
      description:
        "Bất kỳ đụng chạm hay ép buộc tình dục nào từ người lớn hoặc bạn bè trong thời thơ ấu.",
      lowLabel: "Không có",
      highLabel: "Có",
    },
    peerEmotional: {
      label: "Bị bạn bè bắt nạt tinh thần",
      description:
        "Bị những đứa trẻ khác sỉ nhục, tẩy chay, chế giễu, hay nhắm vào bằng tin đồn.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
    },
    peerPhysical: {
      label: "Bị bạn bè bắt nạt thể chất",
      description:
        "Bị những đứa trẻ khác dọa nạt, ép buộc, hay làm cho đau về thân thể.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
    },
    witnessParents: {
      label: "Chứng kiến bạo lực giữa bố mẹ",
      description:
        "Tận mắt thấy một người lớn trong nhà làm người kia đau về thân thể.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
    },
    witnessSibling: {
      label: "Chứng kiến anh chị em bị hại",
      description:
        "Tận mắt thấy bố mẹ hoặc người lớn làm anh/chị/em của bạn đau về thân thể hoặc xâm hại tình dục.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
    },
  },
  outcomes: {
    minimal: {
      name: "Một tuổi thơ phần lớn yên ổn",
      tagline: "Rất ít trong những trải nghiệm khó khăn này xuất hiện với bạn",
      summary:
        "Qua mười kiểu này, bạn báo lại rất ít những tổn thương mà bài hỏi đến. Điều đó cho thấy một tuổi thơ, xét trên những thước đo này, tương đối an toàn và có chỗ dựa.",
      longDescription:
        "Điều này không có nghĩa tuổi thơ bạn hoàn hảo, và không bảng hỏi nào nói được điều đó. Rất nhiều nỗi đau có thật — mất mát, cô đơn, áp lực gia đình, hay những chuyện xảy ra về sau — nằm ngoài phạm vi bài này. Cái nó gợi ra là những kiểu ngược đãi và bỏ bê cụ thể được đo ở đây không phải là phần lớn trong những năm đầu đời của bạn. Nếu nhìn lại mà vẫn thấy có điều gì nặng lòng, cảm giác đó là chính đáng và đáng được xem trọng theo cách riêng của nó.",
      strengths: [
        "Nhiều khả năng bạn từng có ít nhất vài mối quan hệ ấm áp, vững vàng khi lớn lên",
        "Đã thành thật nhìn lại, điều không phải lúc nào cũng dễ kể cả khi câu trả lời nhẹ nhõm",
      ],
      growth: [
        "Nếu vẫn còn điều gì đau mà bài này chưa gọi tên, bạn hoàn toàn có thể tìm hiểu thêm",
        "Hãy nhận ra và trân trọng những người đã ở bên bạn, ngày xưa và bây giờ",
      ],
    },
    some: {
      name: "Vài chương khó khăn",
      tagline: "Một hai kiểu khó khăn nổi lên rõ hơn",
      summary:
        "Bạn báo lại một khuôn mẫu rõ ở một hoặc hai mảng. Điều đó là thật, và đáng được thừa nhận thay vì lướt qua — những trải nghiệm này có thể định hình cách bạn cảm nhận và kết nối, đôi khi theo cách dễ bị bỏ sót.",
      longDescription:
        "Có một hai kiểu nổi lên là chuyện khá phổ biến, và nó không định nghĩa con người bạn. Điều thường giúp ích là gọi tên mảng đó một cách trung thực, thay vì xem nhẹ (“có gì đâu mà ghê gớm”) hay để nó nhuốm màu lên mọi thứ. Hãy nhìn xem kiểu nào nổi lên với bạn, và nó còn có thể vọng lại đến hôm nay ra sao — trong các mối quan hệ, trong phản ứng của bạn, hay trong cách bạn đối xử với chính mình. Nhiều người thấy nhẹ hơn khi chia sẻ những điều này với người mình tin tưởng, hoặc một chuyên gia tâm lý.",
      strengths: [
        "Đi qua khó khăn ở vài mảng mà những phần khác của tuổi thơ vẫn còn nguyên vẹn hơn",
        "Sẵn lòng nhìn thẳng vào điều từng khó khăn, đó là nơi sự thấu hiểu bắt đầu",
      ],
      growth: [
        "Tò mò một chút xem mảng nổi lên kia còn xuất hiện thế nào trong đời bạn hôm nay",
        "Hãy dịu dàng với đứa trẻ năm xưa như bạn sẽ dịu dàng với một đứa trẻ mình thương",
        "Cân nhắc chia sẻ với người bạn tin tưởng hoặc một chuyên gia",
      ],
    },
    several: {
      name: "Nhiều kiểu nghịch cảnh",
      tagline: "Một số trải nghiệm khó khăn khác nhau chạy suốt tuổi thơ bạn",
      summary:
        "Bạn báo lại những khuôn mẫu rõ ở nhiều mảng. Mang trong mình hơn một kiểu nghịch cảnh thời thơ ấu là rất nặng, và việc bạn chịu nhìn vào nó lúc này là một sự can đảm thật sự.",
      longDescription:
        "Khi nhiều kiểu chồng lên nhau, chúng thường tác động qua lại chứ không chỉ cộng dồn, và ảnh hưởng có thể kéo dài đến tuổi trưởng thành — đến cảm giác an toàn, đến cách bạn xử lý sự gần gũi, căng thẳng, và lòng tự trọng. Nhưng đó không phải bản án chung thân, và tuyệt đối không phải lỗi của bạn. Người ta vẫn chữa lành được, nhất là khi có chỗ dựa và sự tự hiểu mình mà bạn đang dần xây nên ngay lúc này. Nếu chưa từng, đây có thể là dấu hiệu cho thấy làm việc với một nhà trị liệu hiểu về sang chấn sẽ rất đáng giá.",
      strengths: [
        "Cho thấy sức bền thật sự khi đi tới được hôm nay sau khi mang vác rất nhiều",
        "Đối diện cùng lúc nhiều sự thật khó là điều can đảm mà nhiều người né tránh",
        "Sự tự hiểu mình là một trong những nền móng vững nhất cho việc chữa lành",
      ],
      growth: [
        "Cân nhắc làm việc với một nhà trị liệu hiểu về sang chấn nếu bạn có điều kiện",
        "Hãy nhẹ nhàng — nhìn lại nhiều chuyện khó cùng lúc có thể khơi lên rất nhiều",
        "Vun đắp và dựa vào những mối quan hệ khiến bạn thấy an toàn, vững vàng",
      ],
    },
    pervasive: {
      name: "Nghịch cảnh trải khắp nhiều mặt",
      tagline: "Khó khăn chạm đến nhiều phần trong những năm đầu đời của bạn",
      summary:
        "Bạn báo lại những khuôn mẫu rõ ở rất nhiều kiểu. Điều đó cho thấy một tuổi thơ mang gánh nặng nghịch cảnh dày và rộng — và việc bạn đi được tới đây, lại còn chịu nhìn vào nó, là điều rất đáng quý.",
      longDescription:
        "Khi có nhiều mảng bị ảnh hưởng đến vậy, thường nó nói lên điều gì đó về môi trường bạn lớn lên, chứ không phải về bạn hay bất cứ điều gì bạn đã làm. Nghịch cảnh rộng như thế có thể để lại dấu vết thật lên sức khỏe, các mối quan hệ, và cách bạn nhìn chính mình, và bạn xứng đáng có được sự hỗ trợ thật sự để đi qua nó — chứ không phải một kết quả trắc nghiệm. Xin hãy xem đây ít hơn như một lời phán, và nhiều hơn như một lời nhắc nhẹ hãy tìm đến sự chăm sóc. Trị liệu hiểu về sang chấn đã giúp được rất nhiều người với đúng những điều này, và việc tìm đến là một điểm mạnh, không phải điểm yếu. Bạn không cần phải gánh nó một mình.",
      strengths: [
        "Đã đi qua rất nhiều và vẫn còn ở đây, vẫn chịu nhìn vào nó một cách thành thật",
        "Can đảm thật sự khi đối diện một tuổi thơ khó đến vậy thay vì ngoảnh đi",
        "Tìm đến sự thấu hiểu tự nó đã là một bước có ý nghĩa hướng tới chữa lành",
      ],
      growth: [
        "Xin hãy cân nhắc tìm đến một nhà trị liệu hoặc chuyên viên hiểu về sang chấn",
        "Hãy dựa vào các đường dây hỗ trợ phía trên nếu sau bài này bạn thấy nặng lòng",
        "Đi thật chậm và dịu dàng, và vây quanh mình bằng những người an toàn",
      ],
    },
  },
  questions,
  options,
}
