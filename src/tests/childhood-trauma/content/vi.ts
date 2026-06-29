import type { TestContent } from "@/lib/test-engine/types"

/**
 * Vietnamese content for the childhood-experiences (MACE-adapted) profile.
 * A careful, natural (not formally validated) translation. English stays the
 * scientific reference.
 */

const questions: Record<string, string> = {
  // Bạo hành lời nói từ bố mẹ
  pv1: "Bố mẹ hoặc người nuôi bạn từng chửi mắng, lăng mạ, hay hạ thấp bạn.",
  pv2: "Bố mẹ từng nói những lời khiến bạn thấy nhục nhã hoặc thấy mình vô dụng.",
  pv3: "Bố mẹ từng có những hành động khiến bạn sợ mình sắp bị đánh.",
  pv4: "Bố mẹ từng dọa bỏ rơi bạn hoặc đuổi bạn đi.",
  // Bạo hành tinh thần (không bằng lời)
  ne1: "Bố mẹ từng phạt bạn bằng cách nhốt vào một chỗ tối tăm, đáng sợ, như khóa trong phòng, nhốt trong tủ, hay dưới tầng hầm.",
  ne2: "Dù bạn làm gì đi nữa, bố mẹ gần như không bao giờ hài lòng.",
  ne3: "Bố mẹ ít có thời gian cho bạn, hoặc có vẻ không mấy quan tâm đến cuộc sống của bạn.",
  ne4: "Bạn phải gánh vác trách nhiệm của người lớn khi còn quá nhỏ.",
  ne5: "Bạn phải lo cả chuyện tiền bạc của gia đình từ khi còn nhỏ.",
  ne6: "Bố mẹ giấu bạn những chuyện quan trọng mà lẽ ra bạn có quyền được biết.",
  // Bạo hành thể chất từ bố mẹ
  pp1: "Bố mẹ cố ý xô, túm, véo, tát, hay đá bạn.",
  pp2: "Bố mẹ đánh bạn để lại vết hằn trên người, phải một lúc sau mới mờ.",
  pp3: "Bố mẹ làm bạn đau đến mức cần đi khám, hoặc lẽ ra phải đi khám.",
  pp4: "Bố mẹ đánh vào mông, tay, hay chân bạn.",
  pp5: "Bố mẹ đánh vào mông trần của bạn.",
  pp6: "Bố mẹ đánh bạn bằng một vật gì đó, như thắt lưng, roi, hay gậy.",
  // Bỏ bê tình cảm (en3 đến en5 là câu hỏi ngược)
  en1: "Mẹ (hoặc người phụ nữ nuôi bạn) tỏ ra lạnh nhạt, xa cách với bạn mà không vì lý do gì rõ ràng.",
  en2: "Bố (hoặc người đàn ông nuôi bạn) tỏ ra lạnh nhạt, xa cách với bạn mà không vì lý do gì rõ ràng.",
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
  sa1: "Bố mẹ hoặc người chăm sóc từng nói với bạn những lời mang ý tình dục khiến bạn thấy khó chịu, sai trái.",
  sa2: "Bố mẹ hoặc người chăm sóc từng đụng chạm cơ thể bạn theo cách gợi dục.",
  sa3: "Bố mẹ hoặc người chăm sóc từng bắt bạn đụng chạm cơ thể họ theo cách gợi dục.",
  sa4: "Một người lớn khác từng đụng chạm cơ thể bạn theo cách gợi dục.",
  sa5: "Một người lớn khác từng quan hệ tình dục với bạn.",
  sa6: "Một người bằng tuổi bạn từng ép bạn làm chuyện tình dục trái với ý muốn của bạn.",
  sa7: "Một người bằng tuổi bạn từng ép buộc hoặc gây áp lực để bạn làm những chuyện tình dục mà bạn không muốn.",
  // Bạo hành tinh thần từ bạn bè
  pe1: "Những đứa trẻ khác chửi mắng, lăng mạ, hay sỉ nhục bạn, không chỉ một hai lần mỗi năm.",
  pe2: "Những đứa trẻ khác nói những lời khiến bạn thấy nhục nhã, không chỉ một hai lần mỗi năm.",
  pe3: "Những đứa trẻ khác nói xấu sau lưng hoặc tung tin đồn về bạn.",
  pe4: "Những đứa trẻ khác cố tình tẩy chay, không cho bạn tham gia.",
  pe5: "Những đứa trẻ khác có những hành động khiến bạn sợ mình sắp bị làm đau.",
  // Bắt nạt thể chất từ bạn bè
  pb1: "Một đứa trẻ khác dọa nạt để lấy tiền hay đồ của bạn.",
  pb2: "Một đứa trẻ khác ép bạn làm những việc bạn không muốn.",
  pb3: "Một đứa trẻ khác cố ý xô, đẩy, đấm, hay đá bạn.",
  pb4: "Một đứa trẻ khác đánh bạn để lại vết hằn trên người, phải một lúc sau mới mờ.",
  pb5: "Một đứa trẻ khác làm bạn đau đến mức phải đi khám.",
  // Chứng kiến bạo lực giữa bố mẹ
  wi1: "Bạn từng chứng kiến một người lớn trong nhà xô, tát, hay ném đồ vào mẹ bạn (hoặc người phụ nữ nuôi bạn).",
  wi2: "Bạn từng thấy mẹ bị đánh đến mức để lại vết hằn trên người, phải một lúc sau mới mờ.",
  wi3: "Bạn từng thấy mẹ bị đánh đến mức bị thương nặng, cần được chăm sóc y tế.",
  wi4: "Bạn từng chứng kiến một người lớn trong nhà xô, tát, hay ném đồ vào bố bạn (hoặc người đàn ông nuôi bạn).",
  wi5: "Bạn từng thấy bố bị đánh đến mức để lại vết hằn trên người, phải một lúc sau mới mờ.",
  // Chứng kiến anh chị em bị hại
  ws1: "Bạn từng thấy bố mẹ hoặc người lớn đánh anh/chị/em của bạn đến mức để lại vết hằn.",
  ws2: "Bạn từng thấy bố mẹ hoặc người lớn làm anh/chị/em của bạn bị thương nặng đến mức cần chăm sóc y tế.",
  ws3: "Bạn từng thấy bố mẹ hoặc người lớn nói với anh/chị/em của bạn những lời mang ý tình dục khiến bạn thấy khó chịu, sai trái.",
  ws4: "Bạn từng thấy bố mẹ hoặc người lớn đụng chạm cơ thể anh/chị/em của bạn theo cách gợi dục.",
}

const options = Object.fromEntries(
  Object.keys(questions).map((id) => [id, { no: "Không", yes: "Có" }])
)

export const vi: TestContent = {
  title: "Bản đồ trải nghiệm tuổi thơ",
  tagline: "Nhẹ nhàng nhìn lại những gì bạn đã đi qua khi còn nhỏ",
  description:
    "Bài này điểm qua những kiểu trải nghiệm khó khăn có thể xảy ra hồi nhỏ, ở nhà và với bạn bè cùng trang lứa, rồi cho bạn thấy bạn đã trải qua những gì và đến mức nào. Nó không dán cho bạn cái nhãn kiểu \"người mang tổn thương\". Thứ nó mang lại là một tấm bản đồ chân thật về những năm đầu đời, để mọi thứ rõ ràng và bớt rối hơn. Một lưu ý nhỏ: bài có nhắc thẳng đến những chuyện như bạo hành thể chất và tình dục, nên bạn hãy chỉ làm khi thấy đủ vững vàng, và dừng lại bất cứ lúc nào bạn cần.",
  category: "Tuổi thơ & sang chấn",
  scientificBasis:
    "Phỏng theo thang đo MACE (Maltreatment and Abuse Chronology of Exposure; Teicher & Parigger, 2015), một công cụ nghiên cứu mở, đo riêng mười kiểu ngược đãi thời thơ ấu thay vì gộp hết vào một con số. Đó cũng là điểm khác chính so với bảng hỏi ACE cũ hơn: mỗi kiểu có điểm riêng, nên bạn thấy được cả một bức tranh chứ không chỉ một tổng điểm. Cả 52 câu hỏi và mười kiểu ở đây đều khớp đúng với thang đo đã công bố, và ngưỡng để một kiểu được tính là có cũng lấy từ chính nghiên cứu gốc, nên phần đó vẫn bám sát bản đã được kiểm định. Phần được chỉnh chỉ là bề ngoài: câu chữ được Việt hóa cho dễ đọc và gần gũi, còn mỗi cột chỉ cho thấy tỉ lệ trên những gì bạn trả lời, chứ không phải cách tính điểm phức tạp của nghiên cứu. Vậy nên hãy xem đây là một bản phỏng theo trung thành để nhìn lại mình, không phải công cụ lâm sàng nguyên gốc từng chữ.",
  disclaimer:
    "Bài này để bạn hiểu thêm về chính mình, không phải để chẩn đoán. Điểm cao ở một kiểu nào đó không có nghĩa là bạn \"có vấn đề\", và điểm thấp cũng không xóa đi những gì đã xảy ra. Chỉ một trải nghiệm đau lòng thôi cũng đã đáng kể, dù cột nào cao hay thấp. Tuổi thơ định hình con người bạn ra sao còn tùy thuộc vào nhiều thứ hơn những gì một bài test có thể nắm bắt, trong đó có chỗ dựa mà bạn từng có và đang có. Nếu những điều này khơi lên quá nhiều cảm xúc, hãy tìm người để chia sẻ. Tại Việt Nam, đường dây hỗ trợ tâm lý Ngày Mai là 096 306 1414, và Tổng đài quốc gia bảo vệ trẻ em là 111. Nếu bạn đang gặp nguy hiểm ngay lúc này, hãy gọi dịch vụ khẩn cấp tại địa phương.",
  instructions:
    "Hãy nghĩ lại cả thời thơ ấu và tuổi mới lớn của bạn. Với mỗi câu, chọn \"Có\" nếu chuyện đó từng xảy ra với bạn, kể cả chỉ một hai lần, và \"Không\" nếu chưa từng. Ở đây không có câu trả lời đúng hay sai, chỉ có điều gì là thật với bạn. Nếu một câu không hợp với hoàn cảnh của bạn, cứ chọn \"Không\" rồi đi tiếp.",
  resultKicker: "Câu trả lời của bạn gợi lên điều gì",
  scoresTitle: "Hồ sơ của bạn qua mười nhóm trải nghiệm",
  scoresHint:
    "Mỗi cột là một kiểu trải nghiệm hồi nhỏ, cột càng cao nghĩa là bạn càng từng gặp nhiều điều thuộc kiểu đó. Hãy xem nó như một tấm gương để nhìn ra những gì lặp lại, chứ không phải điểm số để bạn tự chấm mình. Và một cột thấp không có nghĩa là chuyện đó không quan trọng: nó không xóa đi điều gì bạn từng trải qua, và một chuyện nghiêm trọng vẫn rất đáng kể, dù cột của nó có ngắn.",
  insightsTitle: "Những điều này có thể biểu hiện ra sao về sau",
  insightsIntro:
    "Với những kiểu hiện lên rõ hơn ở bạn, đây là những điều mà các nhà nghiên cứu hay bắt gặp ở người lớn từng trải qua chúng. Hãy xem chúng như những xu hướng thường gặp, chứ không phải một lời khẳng định chắc chắn về bạn. Có thể vài điều đúng với bạn, vài điều lại chẳng hợp chút nào, và không điều nào là cố định mãi mãi cả. Mục đích chỉ là gọi tên những gì có lẽ bạn đã cảm thấy từ trước, để dễ hiểu và dễ xoay xở hơn.",
  scale: { minLabel: "Không", maxLabel: "Có" },
  dimensions: {
    verbalAbuse: {
      label: "Bạo hành lời nói ở nhà",
      description:
        "Bị bố mẹ hoặc người chăm sóc chửi mắng, hạ thấp, sỉ nhục, hay dọa nạt.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
      insight:
        "Những lời nghe từ nhỏ thường trở thành giọng nói bên trong mà bạn mang theo. Nhiều người từng nghe nhiều lời như vậy lớn lên với một tiếng nói tự phê phán khắc nghiệt, hay nhanh chóng cho rằng mình đang bị đánh giá, hoặc thấy nhói lên trước lời chê nhiều hơn mức đáng có. Nếu bạn bắt gặp mình tự nói với bản thân bằng giọng điệu chẳng ai dùng với một người bạn, thì rất có thể nó đã học cách cất tiếng từ đây.",
    },
    nonverbalAbuse: {
      label: "Bạo hành tinh thần ở nhà",
      description:
        "Bị làm cho sợ hãi, kiểm soát, phớt lờ, hay đè nặng theo cách không phải đòn roi nhưng vẫn đau.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
      insight:
        "Khi ở nhà mọi thứ khó đoán, có lẽ bạn đã học cách dò xét không khí liên tục, luôn đi trước tâm trạng của người khác một bước. Lớn lên, điều đó có thể biểu hiện thành khó thả lỏng, thói quen luôn đề phòng có chuyện gì đó sắp hỏng, hay khó tin rằng mình thật sự được chào đón chứ không phải chỉ được người ta cố chịu đựng.",
    },
    physicalAbuse: {
      label: "Bạo hành thể chất ở nhà",
      description:
        "Bị bố mẹ hoặc người chăm sóc đánh, phạt đòn, hay làm cho đau về thân thể.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
      insight:
        "Cơ thể vẫn nhớ cảm giác không an toàn ngay cả khi đầu óc đã bước tiếp. Sự tức giận hay xung đột ở gần có thể làm bùng lên một phản ứng thân thể rất nhanh, căng người, đứng im, muốn rời đi, trước cả khi bạn kịp suy nghĩ. Đó không phải là phản ứng thái quá. Đó là một chiếc còi báo động cũ đã học cách kêu lên thật sớm.",
    },
    emotionalNeglect: {
      label: "Bỏ bê tình cảm",
      description:
        "Lớn lên mà thiếu hơi ấm, sự quan tâm, hay cảm giác mình được yêu thương và có ý nghĩa.",
      lowLabel: "Được quan tâm",
      highLabel: "Thường bị thiếu",
      insight:
        "Khi cảm xúc không được đón nhận hay để ý tới, có lẽ bạn đã học cách tự lo liệu mọi thứ và lặng im về những gì mình cần. Về sau, điều đó có thể giống như không thật sự biết mình đang cảm thấy gì, cảm giác mình phải tỏ ra có ích thì mới xứng đáng được yêu thương, hay một sự trống trải khó gọi tên ngay cả khi bề ngoài cuộc sống vẫn ổn.",
    },
    physicalNeglect: {
      label: "Bỏ bê thể chất",
      description:
        "Những nhu cầu cơ bản không được đáp ứng đều đặn: cái ăn, quần áo sạch, sự an toàn, hay được chăm sóc khi ốm.",
      lowLabel: "Được đáp ứng",
      highLabel: "Thường bị thiếu",
      insight:
        "Khi sự chăm sóc thất thường, niềm tin rằng sẽ có người lo cho mình rất khó hình thành. Điều này có thể biểu hiện thành ôm đồm quá nhiều trách nhiệm, khó nghỉ ngơi hay khó mở lời nhờ giúp đỡ, hoặc một niềm tin thầm lặng rằng mình chỉ có một mình và phải tự lo hết mọi thứ.",
    },
    sexualAbuse: {
      label: "Xâm hại tình dục",
      description:
        "Bất kỳ đụng chạm hay ép buộc tình dục nào từ người lớn hoặc bạn bè trong thời thơ ấu.",
      lowLabel: "Không có",
      highLabel: "Có",
      insight:
        "Đây là một trong những trải nghiệm đáng để bạn dịu dàng nhất với chính mình, và cũng là nơi sự hỗ trợ giúp ích nhiều nhất. Nó có thể để lại một mối quan hệ phức tạp với cơ thể, với sự gần gũi, với lòng tin hay ranh giới, và một nỗi xấu hổ mà đáng lẽ bạn chưa bao giờ phải mang. Không điều gì là lỗi của bạn, và bạn không phải tự mình hiểu cho ra lẽ. Một chuyên gia hiểu về sang chấn có thể giúp ích thật sự ở đây.",
    },
    peerEmotional: {
      label: "Bị bạn bè bắt nạt tinh thần",
      description:
        "Bị những đứa trẻ khác sỉ nhục, tẩy chay, chế giễu, hay nhắm vào bằng tin đồn.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
      insight:
        "Bị bạn bè nhắm vào hay cho ra rìa dạy bạn luôn để ý xem điều đó có lặp lại không. Lớn lên, nó có thể giống như dò xét một nhóm để tìm dấu hiệu đầu tiên rằng mình không được chào đón, mặc định rằng mình sẽ bị ghét trước khi ai đó kịp có lý do, hay rất dễ chạnh lòng mỗi khi cảm thấy bị từ chối trong các tình huống giao tiếp.",
    },
    peerPhysical: {
      label: "Bị bạn bè bắt nạt thể chất",
      description:
        "Bị những đứa trẻ khác dọa nạt, ép buộc, hay làm cho đau về thân thể.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
      insight:
        "Khi những đứa trẻ khác là một mối đe dọa thân thể, có lẽ bạn đã học cách luôn cảnh giác và thủ thế, nhất là ở những nơi mới hay có tính cạnh tranh. Sự đề phòng đó từng giữ bạn an toàn. Về sau, nó có thể khiến bạn căng thẳng quanh những người mình chưa tin, hay nhanh chóng đọc một tình huống thành mối đe dọa khi nó chưa hẳn là vậy.",
    },
    witnessParents: {
      label: "Chứng kiến bạo lực giữa bố mẹ",
      description:
        "Tận mắt thấy một người lớn trong nhà làm người kia đau về thân thể.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
      insight:
        "Chứng kiến những người lẽ ra phải an toàn lại làm nhau đau có thể khiến chuyện xung đột, tự nó, trở nên đáng sợ. Bạn có thể đứng im, vội vàng dàn hòa, hay phản ứng mạnh trước tiếng quát tháo. Nó cũng có thể âm thầm định hình cách bạn hình dung tình yêu và sự gần gũi đáng lẽ phải như thế nào, đôi khi theo cách bạn chẳng bao giờ tự chọn.",
    },
    witnessSibling: {
      label: "Chứng kiến anh chị em bị hại",
      description:
        "Tận mắt thấy bố mẹ hoặc người lớn làm anh/chị/em của bạn đau về thân thể hoặc xâm hại tình dục.",
      lowLabel: "Hiếm hoặc không",
      highLabel: "Thường xuyên",
      insight:
        "Thấy anh chị em mình bị làm đau có thể để lại một gánh nặng riêng: cảm giác tội lỗi vì không ngăn được, một thôi thúc muốn bảo vệ người khác, và phản ứng mạnh mỗi khi bạn cảm nhận ai đó đang bị đối xử tệ. Cảm giác bất lực khi xưa vẫn có thể trỗi dậy mỗi lần bạn nhìn người mình thương phải chịu đựng.",
    },
  },
  outcomes: {
    minimal: {
      name: "Một tuổi thơ phần lớn yên ổn",
      tagline: "Rất ít trải nghiệm khó khăn trong số này từng xảy ra với bạn",
      summary:
        "Qua mười kiểu này, những gì bạn chọn cho thấy rất ít tổn thương mà bài có hỏi đến. Điều đó gợi ra một tuổi thơ, xét trên những gì đo được ở đây, tương đối an toàn và có chỗ dựa.",
      longDescription:
        "Điều này không có nghĩa tuổi thơ bạn hoàn hảo, và chẳng bài test nào nói được điều đó. Rất nhiều nỗi đau có thật, như mất mát, cô đơn, áp lực gia đình, hay những chuyện xảy ra về sau, vốn nằm ngoài phạm vi bài này. Điều nó gợi ra là: những kiểu ngược đãi và bỏ bê cụ thể được đo ở đây không chiếm phần lớn những năm đầu đời của bạn. Còn nếu nhìn lại mà vẫn thấy có điều gì nặng lòng, cảm giác đó là chính đáng và đáng được xem trọng theo cách riêng của nó.",
      strengths: [
        "Nhiều khả năng bạn từng có ít nhất vài mối quan hệ ấm áp, vững vàng khi lớn lên",
        "Bạn đã thành thật nhìn lại, một việc không phải lúc nào cũng dễ, kể cả khi câu trả lời nghe nhẹ nhõm",
      ],
      growth: [
        "Nếu vẫn còn điều gì đau mà bài này chưa gọi tên, bạn hoàn toàn có thể tìm hiểu thêm",
        "Hãy nhận ra và trân trọng những người đã ở bên bạn, ngày xưa và bây giờ",
      ],
    },
    some: {
      name: "Vài giai đoạn khó khăn",
      tagline: "Một hai kiểu khó khăn nổi lên rõ hơn",
      summary:
        "Có một hoặc hai mảng hiện lên rõ trong câu trả lời của bạn. Điều đó là thật, và đáng được thừa nhận thay vì lướt qua. Những trải nghiệm này có thể định hình cách bạn cảm nhận và gắn kết với người khác, đôi khi theo cách dễ bị bỏ sót.",
      longDescription:
        "Có một hai mảng nổi lên là chuyện khá thường gặp, và nó không định nghĩa con người bạn. Điều thường giúp ích là gọi tên đúng mảng đó một cách thành thật, thay vì xem nhẹ (\"có gì đâu mà ghê gớm\") hay để nó phủ bóng lên mọi thứ. Hãy nhìn xem mảng nào nổi lên với bạn, và nó còn có thể vọng lại đến hôm nay ra sao, trong các mối quan hệ, trong phản ứng của bạn, hay trong cách bạn đối xử với chính mình. Nhiều người thấy nhẹ hơn khi nói ra những điều này với người mình tin tưởng, hoặc một chuyên gia tâm lý.",
      strengths: [
        "Vượt qua khó khăn ở vài mảng trong khi những phần khác của tuổi thơ vẫn còn lành lặn hơn",
        "Sẵn lòng nhìn thẳng vào điều từng khó khăn, và đó là nơi sự thấu hiểu bắt đầu",
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
        "Nhiều mảng hiện lên rõ trong câu trả lời của bạn. Mang trong mình hơn một kiểu nghịch cảnh thời thơ ấu là rất nặng, và việc bạn chịu nhìn vào nó lúc này là một sự can đảm thật sự.",
      longDescription:
        "Khi nhiều kiểu chồng lên nhau, chúng thường tác động qua lại chứ không chỉ cộng dồn, và ảnh hưởng có thể kéo dài đến tuổi trưởng thành: cảm giác an toàn, cách bạn xử lý sự gần gũi và căng thẳng, và lòng tự trọng. Nhưng đó không phải bản án chung thân, và tuyệt đối không phải lỗi của bạn. Người ta vẫn chữa lành được, nhất là khi có chỗ dựa và sự tự hiểu mình mà bạn đang dần xây nên ngay lúc này. Nếu chưa từng, đây có thể là dấu hiệu cho thấy làm việc với một nhà trị liệu hiểu về sang chấn sẽ rất đáng giá.",
      strengths: [
        "Cho thấy sức bền thật sự khi đi tới được hôm nay sau khi mang vác rất nhiều",
        "Đối diện cùng lúc nhiều sự thật khó là điều can đảm mà nhiều người né tránh",
        "Sự tự hiểu mình là một trong những nền móng vững nhất cho việc chữa lành",
      ],
      growth: [
        "Cân nhắc làm việc với một nhà trị liệu hiểu về sang chấn nếu bạn có điều kiện",
        "Hãy nhẹ nhàng, vì nhìn lại nhiều chuyện khó cùng lúc có thể khơi lên rất nhiều",
        "Vun đắp và dựa vào những mối quan hệ khiến bạn thấy an toàn, vững vàng",
      ],
    },
    pervasive: {
      name: "Nghịch cảnh trải khắp nhiều mặt",
      tagline: "Khó khăn chạm đến nhiều phần trong những năm đầu đời của bạn",
      summary:
        "Rất nhiều kiểu hiện lên rõ trong câu trả lời của bạn. Điều đó cho thấy một tuổi thơ gánh nhiều nghịch cảnh, cả về mức độ lẫn số mặt bị chạm tới. Việc bạn đi được tới đây, lại còn chịu nhìn vào nó, là điều rất đáng quý.",
      longDescription:
        "Khi có nhiều mảng bị ảnh hưởng đến vậy, thường nó nói lên điều gì đó về môi trường bạn lớn lên, chứ không phải về bạn hay bất cứ điều gì bạn đã làm. Nghịch cảnh rộng như thế có thể để lại dấu vết thật lên sức khỏe, các mối quan hệ, và cách bạn nhìn chính mình, và bạn xứng đáng có được sự hỗ trợ thật sự để đi qua nó, chứ không phải một kết quả trắc nghiệm. Xin đừng xem đây như một lời phán xét, mà hãy coi nó như một lời nhắc nhẹ rằng bạn nên tìm đến sự chăm sóc. Trị liệu hiểu về sang chấn đã giúp rất nhiều người vượt qua đúng những điều như thế, và việc tìm đến nó là một điểm mạnh, không phải điểm yếu. Bạn không cần phải gánh nó một mình.",
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
