import type { TestContent } from "@/lib/test-engine/types"

export const vi: TestContent = {
  title: "16 Nhóm Tính Cách",
  tagline: "Tìm ra nhóm tính cách bốn chữ của bạn",
  description:
    "Một phiên bản hiện đại của hệ thống 16 nhóm tính cách quen thuộc. Bốn thang đo nhanh (bạn hướng năng lượng ra đâu, tiếp nhận mọi thứ thế nào, ra quyết định ra sao, và sắp xếp ngày sống của mình kiểu gì) gộp lại thành một trong mười sáu nhóm, kèm theo điểm số thật của bạn ở phía sau.",
  category: "Tính cách",
  scientificBasis:
    "Dựa trên lý thuyết các kiểu tâm lý của Carl Jung và trên Big Five, mô hình mà giới tâm lý học thật sự tin dùng. Bốn thang đo ở đây tương ứng với Hướng ngoại, Sự cởi mở, Sự dễ chịu và Sự tận tâm (McCrae & Costa, 1989). Đây là một bài test độc lập với bộ câu hỏi riêng. Nó không phải MBTI® và không liên quan tới MBTI®. Chúng tôi đo mỗi thang như một thanh trượt chứ không phải một cái hộp cứng nhắc, vì đó mới là điều nghiên cứu ủng hộ.",
  disclaimer:
    "Đây là bài test để hiểu thêm về bản thân, không phải chẩn đoán y khoa hay khoa học. Kết quả gồm bốn chữ cái, nhưng phần quan trọng là điểm số đằng sau chúng. Mỗi nét tính cách được chấm theo thang điểm, nên nếu điểm của bạn nằm gần giữa thì chữ cái đó dễ đổi khi làm lại; cứ xem nhẹ là được.",
  instructions:
    "Hãy trả lời thật lòng theo con người thường ngày của bạn, chứ không phải con người bạn muốn trở thành hay cách bạn cư xử trong một tình huống cụ thể nào đó. Không có câu trả lời đúng hay sai, và không nhóm nào hơn nhóm nào.",
  resultKicker: "Nhóm tính cách của bạn",
  scoresTitle: "Bốn thang đo của bạn",
  scoresHint:
    "Bốn điểm số này mới là kết quả thật. Thanh nào càng gần giữa thì bạn càng dựa vào cả hai bên, và chữ cái đó càng khó nói chắc.",
  scale: {
    minLabel: "Rất không đồng ý",
    maxLabel: "Rất đồng ý",
    pointLabels: [
      "Rất không đồng ý",
      "Không đồng ý",
      "Trung lập",
      "Đồng ý",
      "Rất đồng ý",
    ],
  },
  dimensions: {
    mind: {
      label: "Tâm trí: Hướng nội hay Hướng ngoại",
      description:
        "Bạn lấy năng lượng từ đâu. Điểm càng cao thì càng hướng ngoại, tức là ở bên mọi người và thế giới bên ngoài làm bạn thấy sung sức; điểm càng thấp thì càng hướng nội, nạp lại năng lượng nhờ sự yên tĩnh và thời gian ở một mình. Rơi vào gần giữa thì bạn có cả hai.",
      lowLabel: "Hướng nội",
      highLabel: "Hướng ngoại",
    },
    energy: {
      label: "Năng lượng: Thực tế hay Trực giác",
      description:
        "Cách bạn tiếp nhận thế giới. Điểm càng cao thì càng thiên về trực giác, để ý tới quy luật, ý tưởng và những điều có thể xảy ra; điểm càng thấp thì càng thực tế, bám vào sự việc, chi tiết và những gì đang có sẵn. Gần giữa thì bạn dùng cả hai.",
      lowLabel: "Thực tế",
      highLabel: "Trực giác",
    },
    nature: {
      label: "Bản chất: Lý trí hay Cảm xúc",
      description:
        "Cách bạn ra quyết định. Điểm càng cao thì càng thiên về cảm xúc, dựa vào giá trị và việc người khác sẽ bị ảnh hưởng ra sao; điểm càng thấp thì càng thiên về lý trí, dựa vào logic và sự nhất quán. Gần giữa thì bạn cân cả hai.",
      lowLabel: "Lý trí",
      highLabel: "Cảm xúc",
    },
    tactics: {
      label: "Cách sống: Nguyên tắc hay Linh hoạt",
      description:
        "Cách bạn đối diện với thế giới bên ngoài. Điểm càng cao thì càng linh hoạt, thoải mái, ngẫu hứng, thích để ngỏ lựa chọn; điểm càng thấp thì càng theo nguyên tắc, có kế hoạch, ngăn nắp, thích mọi thứ rõ ràng dứt khoát. Gần giữa thì bạn có một chút của cả hai.",
      lowLabel: "Nguyên tắc",
      highLabel: "Linh hoạt",
    },
  },
  outcomes: {
    intj: {
      name: "INTJ, Nhà Chiến Lược",
      tagline: "Nhìn được đường dài và âm thầm đi từng nước",
      summary:
        "Bạn nhìn ra mọi chuyện đang đi về đâu và âm thầm vạch sẵn kế hoạch để tới đó. Bạn thích tự mình làm chủ một vấn đề theo cách của riêng mình hơn là để người khác chỉ bảo phải làm sao.",
      longDescription:
        "INTJ vừa có tầm nhìn xa vừa có kỷ luật để biến nó thành việc làm thật. Bạn nghĩ theo hệ thống và theo lộ trình dài, đặt cho mình tiêu chuẩn cao, và tin vào cách nhìn của chính mình ngay cả khi nó ngược với số đông. Mặt trái là đôi khi bạn trông lạnh lùng, hoặc thiếu kiên nhẫn với những ai chưa theo kịp dòng suy nghĩ của bạn. Điều đáng tập là xem ý kiến của người khác, và cả cảm xúc của họ nữa, cũng là thứ đáng nghe.",
      strengths: [
        "Tư duy chiến lược, nhìn được bức tranh lớn",
        "Độc lập và tự thân vận động",
        "Quyết đoán một khi đã cân nhắc kỹ",
        "Đặt tiêu chuẩn cao và làm đến nơi đến chốn",
      ],
      growth: [
        "Cho người khác cùng vào cuộc sớm hơn, thay vì đưa ra một kế hoạch đã xong xuôi",
        "Coi cảm xúc, của bạn và của người khác, là thông tin có thật",
        "Nhớ rằng không phải việc gì cũng phải một mình gánh",
      ],
    },
    intp: {
      name: "INTP, Nhà Phân Tích",
      tagline: "Vui nhất khi có một vấn đề hóc búa để mổ xẻ",
      summary:
        "Bạn thích mổ xẻ ý tưởng để xem nó thật sự chạy ra sao. Một bài toán hay ho hay một lập luận hớ hênh có thể giữ đầu óc bạn bận rộn một cách thích thú hàng giờ liền.",
      longDescription:
        "INTP bị cuốn theo chuyện hiểu cho bằng được, hiểu vì thích chứ không vì gì khác. Bạn chặt chẽ về logic, nhanh chóng thấy chỗ nào không khớp, và thoải mái để ngỏ một câu hỏi cho tới khi câu trả lời thật sự thuyết phục. Chính cái chiều sâu đó đôi khi làm bạn khó chốt một kết luận, hoặc ngại cái phần bắt tay làm cho xong, cái phần biến ý tưởng thành thứ có thật. Bạn phát huy tốt nhất khi để suy nghĩ của mình bước ra ngoài đời, thay vì mài giũa mãi trong đầu.",
      strengths: [
        "Tư duy phân tích sắc bén và độc đáo",
        "Nhìn ra lỗ hổng và những giả định mà người khác bỏ qua",
        "Cởi mở và thành thật trong suy nghĩ",
        "Giữ được sự điềm tĩnh, khách quan khi tranh luận",
      ],
      growth: [
        "Chia sẻ ý tưởng trước khi nó kịp hoàn hảo",
        "Coi chừng kiểu phân tích mãi mà thực ra là đang né",
        "Nhớ rằng con người không phải bài toán để giải",
      ],
    },
    entj: {
      name: "ENTJ, Nhà Chỉ Huy",
      tagline: "Thấy việc cần làm là đứng ra cầm trịch",
      summary:
        "Bạn thấy điều gì cần xảy ra và tự nhiên đứng ra lo cho nó thành hiện thực. Mục tiêu, sự ngăn nắp và cái đà tiến về phía trước là thứ khiến bạn hăng lên.",
      longDescription:
        "ENTJ có tầm nhìn chiến lược đi kèm với động lực tập hợp con người và nguồn lực lại quanh nó. Bạn tự tin, thẳng thắn, và giỏi biến một tham vọng còn mơ hồ thành một kế hoạch cụ thể có thời hạn hẳn hoi. Rủi ro là bạn dễ cán qua mọi thứ: đi nhanh và chắc đến mức bỏ sót những tiếng nói rụt rè hơn, hoặc làm người khác chạnh lòng dọc đường. Khả năng dẫn dắt của bạn sắc hơn hẳn vào ngày bạn ghép sự quyết đoán với một chút kiên nhẫn và biết lắng nghe thật sự.",
      strengths: [
        "Khả năng lãnh đạo tự nhiên, tự tin",
        "Biến tầm nhìn thành kế hoạch cụ thể",
        "Quyết đoán và hướng tới kết quả",
        "Càng có thử thách càng hăng",
      ],
      growth: [
        "Chậm lại đủ để nghe những tiếng nói rụt rè hơn",
        "Để người khác tự đi đến kết luận mà không bị thúc",
        "Làm dịu sự thẳng thắn bằng một chút ấm áp",
      ],
    },
    entp: {
      name: "ENTP, Người Đổi Mới",
      tagline: "Sống vì một ý tưởng mới và một cuộc tranh luận ra trò",
      summary:
        "Bạn nhảy hết ý tưởng này tới khả năng khác, và xem một cuộc tranh luận hay là cách để nghĩ thành lời. Lối mòn làm bạn chán; cái gì mới mẻ thì làm bạn sáng cả mắt.",
      longDescription:
        "ENTP là cái máy đẻ ý tưởng: nhanh, tò mò, và vui nhất khi lật một vấn đề ra đủ mọi phía. Bạn bắt bẻ các giả định một cách nhẹ nhàng và có thể nói cho người khác xuôi theo một hướng mới chỉ bằng sự hào hứng. Cái kẹt nằm ở khúc kết. Tia sáng của một ý tưởng mới thì vui hơn nhiều so với cảnh cặm cụi gói ghém cho xong cái cũ. Bạn làm được những việc tốt nhất khi chĩa sức sáng tạo đó vào một thứ mà bạn chịu theo tới cùng.",
      strengths: [
        "Bật ý tưởng nhanh và sáng tạo",
        "Nối được những ý tưởng từ các lĩnh vực rất khác nhau",
        "Thuyết phục và phản xạ nhanh",
        "Càng thay đổi, càng thử thách thì càng sung",
      ],
      growth: [
        "Làm cho xong thứ đang dở trước khi đuổi theo ý mới",
        "Chọn cuộc tranh luận đáng; không phải gì cũng cần cãi",
        "Dựng vài thói quen để giữ cho những dự án lớn không bỏ ngang",
      ],
    },
    infj: {
      name: "INFJ, Người Tâm Giao",
      tagline: "Lý tưởng một cách thầm lặng, thấu người rất sâu",
      summary:
        "Bạn đọc con người và tình huống rất sâu, và có một cảm nhận riêng về việc mọi thứ nên như thế nào dẫn lối cho bạn. Bạn muốn đời mình có ý nghĩa.",
      longDescription:
        "INFJ trộn sự đồng cảm với niềm tin vững. Bạn cảm được điều người khác đang cảm, và giữ những niềm tin chắc chắn về cách con người đáng được đối xử. Bạn thường cho đi nhiều, và nghĩ về ý nghĩa lâu dài hơn là cái lợi trước mắt. Cái nguy là âm thầm kiệt sức, hoặc đặt cho mình và cho cả thế giới một mức mà chẳng ai với tới nổi. Bạn vững nhất khi để vài người mình tin thật sự thấy con người thật của bạn, chứ không chỉ thấy một người luôn lo cho người khác.",
      strengths: [
        "Thấu hiểu sâu con người và điều thúc đẩy họ",
        "Sống theo những giá trị vững vàng, nhất quán",
        "Ấm áp, nhưng có chính kiến",
        "Sống vì ý nghĩa, không chỉ vì thành công",
      ],
      growth: [
        "Giữ sức cho mình trước khi cạn kiệt",
        "Để người khác nâng đỡ bạn, chứ không chỉ một chiều",
        "Cho phép thế giới, và cả bản thân, được chưa hoàn hảo",
      ],
    },
    infp: {
      name: "INFP, Người Mộng Mơ",
      tagline: "Dịu dàng, giàu tưởng tượng, sống đúng với giá trị của mình",
      summary:
        "Một chiếc la bàn nội tâm sâu sắc và một trí tưởng tượng phong phú dẫn lối cho bạn. Điều quan trọng nhất với bạn là sống thật với những gì mình tin.",
      longDescription:
        "INFP cảm nhận mọi thứ rất sâu và để tâm tới chuyện sống sao cho thật lòng và tử tế. Bạn thấy được tiềm năng trong con người và ý tưởng, và vui nhất khi tạo ra hoặc đứng ra bảo vệ một điều mình tin. Phần khó là thực tế hiếm khi khớp với bức tranh trong đầu bạn, và điều đó dễ trượt thành tự trách hoặc chùn lại. Mọi thứ chuyển động khi bạn biến cái lý tưởng thành một bước nhỏ, có thật, thay vì đợi đúng thời điểm hoàn hảo.",
      strengths: [
        "Một hệ giá trị riêng rõ ràng, vững vàng",
        "Đồng cảm sâu và bao dung",
        "Giàu trí tưởng tượng và sáng tạo",
        "Nhìn ra điều tốt đẹp ở người khác",
      ],
      growth: [
        "Biến lý tưởng thành những bước nhỏ làm được ngay hôm nay",
        "Nhẹ tay với bản thân khi thực tế không như ý",
        "Nói thẳng điều mình cần thay vì rút lui",
      ],
    },
    enfj: {
      name: "ENFJ, Người Dẫn Dắt",
      tagline: "Ấm áp, truyền cảm hứng, tinh ý với con người",
      summary:
        "Bạn khơi ra điều tốt nhất ở người khác mà chẳng cần cố, và rất để tâm tới những người quanh mình. Giúp ai đó lớn lên gần như là một lẽ sống của bạn.",
      longDescription:
        "ENFJ ấm áp, dễ khiến người ta đi theo, và thật lòng quan tâm tới chuyện người khác rồi sẽ ra sao. Bạn đọc bầu không khí giỏi, gom mọi người lại quanh một điều tốt đẹp, và để những người bên cạnh thấy mình được nhìn nhận. Rủi ro là đánh mất mình giữa nhu cầu của mọi người, hoặc ôm lấy những cảm xúc vốn chẳng phải việc của bạn để gánh. Bạn mạnh nhất khi lo cho nhu cầu của chính mình kỹ như khi lo cho mọi người.",
      strengths: [
        "Nâng đỡ và truyền cảm hứng cho những người quanh mình",
        "Đọc được những luồng cảm xúc trong một căn phòng",
        "Ấm áp, biết động viên, và trung thành",
        "Gom mọi người lại quanh một mục tiêu chung",
      ],
      growth: [
        "Lo cho nhu cầu của mình, không chỉ của người khác",
        "Để người khác tự gánh vấn đề và lựa chọn của họ",
        "Chấp nhận rằng bạn không thể làm vừa lòng tất cả",
      ],
    },
    enfp: {
      name: "ENFP, Người Truyền Lửa",
      tagline: "Tò mò, ấm áp, đâu cũng thấy điều có thể xảy ra",
      summary:
        "Đâu bạn cũng thấy điều có thể xảy ra, và bạn mang một nguồn năng lượng lây lan tới con người lẫn ý tưởng. Sự kết nối quan trọng với bạn, và sự tự do cũng vậy.",
      longDescription:
        "ENFP ấm áp, giàu biểu cảm, và tò mò không dứt về con người và những gì có thể xảy ra. Bạn kết bạn dễ, thấy được tiềm năng mà người khác đi lướt qua, và lao vào bất cứ điều gì làm mình hứng. Thử thách là ở lại với một việc sau khi cơn hứng ban đầu nguội đi, và đừng gật đầu với mọi thứ chỉ để mọi người vui. Bạn đi xa nhất khi neo hết nguồn năng lượng đó vào vài điều mình thật sự theo tới cùng.",
      strengths: [
        "Nhiệt huyết và sự ấm áp dễ lây",
        "Thấy được tiềm năng trong con người và ý tưởng",
        "Dễ thích nghi và ngẫu hứng",
        "Hợp với đủ kiểu người",
      ],
      growth: [
        "Theo tới cùng sau khi cái mới mẻ nguội đi",
        "Đừng ôm quá nhiều chỉ để chiều lòng người",
        "Dựng một chút khuôn nếp để giữ lấy các ý tưởng",
      ],
    },
    istj: {
      name: "ISTJ, Người Trụ Cột",
      tagline: "Đáng tin tới tận gốc, làm gì cũng tới nơi tới chốn",
      summary:
        "Bạn là người ai cũng trông cậy để làm cho đúng và làm cho xong. Bạn coi trọng sự ngăn nắp, trách nhiệm, và việc giữ lời.",
      longDescription:
        "ISTJ điềm đạm, thực tế, và đáng tin vào loại bậc nhất. Bạn tôn trọng sự thật và những cách làm đã được kiểm chứng, đã nói là làm, và mang một tinh thần trách nhiệm điềm tĩnh vào bất cứ việc gì mình nhận. Mặt trái là hơi cứng với cái mới, hoặc chậm tin một cách làm còn chưa được thử. Bạn lớn lên khi cởi mở hơn với những cách làm mới, và khi để sự quan tâm nằm sau vẻ đáng tin của mình lộ ra ngoài.",
      strengths: [
        "Đáng tin, và giữ đúng lời",
        "Kỹ lưỡng và cẩn thận với chi tiết",
        "Điềm tĩnh, thực tế, khó bị làm cho rối",
        "Tinh thần trách nhiệm và ngăn nắp cao",
      ],
      growth: [
        "Cởi mở hơn với những cách làm mới, chưa được thử",
        "Để lộ ra sự ấm áp nằm sau vẻ đáng tin của bạn",
        "Bớt ôm khư khư mấy chuyện nhỏ nhặt",
      ],
    },
    isfj: {
      name: "ISFJ, Người Chở Che",
      tagline: "Lặng lẽ chăm lo cho mọi người, mà chu đáo",
      summary:
        "Bạn chăm lo cho những người quanh mình bằng sự quan tâm bền bỉ và thiết thực. Bạn để ý ai đó đang cần gì rồi lặng lẽ lo cho xong.",
      longDescription:
        "ISFJ ấm áp, chu đáo, và rất trung thành. Bạn nhớ những chuyện nhỏ, có mặt hết lần này tới lần khác, và thật sự tự hào khi chăm lo cho người khác chu đáo. Rủi ro là đặt mình xuống cuối nhiều tới mức nhu cầu của chính bạn cứ thế bị bỏ quên, hoặc giữ một nỗi bực trong lòng cho tới khi nó chai thành oán giận. Bạn ổn hơn khi để mình cũng được chăm, và khi gọi tên điều mình cần trước lúc nó tràn ra.",
      strengths: [
        "Tận tâm và nhanh nhận ra người khác cần gì",
        "Trung thành và đáng tin cậy",
        "Thực tế và để ý tới chi tiết",
        "Kiên nhẫn và vững vàng",
      ],
      growth: [
        "Nói ra điều mình cần trước khi oán giận tích lại",
        "Đôi khi cứ để người khác chăm lo cho mình",
        "Xử lý xích mích từ sớm thay vì nuốt vào trong",
      ],
    },
    estj: {
      name: "ESTJ, Người Tổ Chức",
      tagline: "Mang lại trật tự và làm cho mọi việc chạy",
      summary:
        "Đi đâu bạn cũng mang theo cấu trúc và một định hướng rõ ràng. Bạn thích mọi thứ làm cho đúng, đúng hạn, và theo một chuẩn mà ai cũng biết.",
      longDescription:
        "ESTJ quyết đoán, ngăn nắp, và giỏi làm cho mọi thứ chạy thật sự. Bạn đặt ra kỳ vọng rõ ràng, coi trọng sự đáng tin và nề nếp, và không ngại đứng ra nhận trách nhiệm. Điểm yếu là nóng ruột với cái gì còn mập mờ, hoặc với những người làm việc theo kiểu không giống bạn. Bạn dẫn dắt khéo nhất khi cân được cái chuẩn cao của mình với một chút linh hoạt và việc thật lòng nghe người khác nghĩ gì.",
      strengths: [
        "Ngăn nắp và đáng tin cậy",
        "Quyết đoán và thẳng thắn",
        "Tinh thần trách nhiệm cao",
        "Làm xong việc gọn gàng, không lằng nhằng",
      ],
      growth: [
        "Chừa chỗ cho những cách làm không giống của bạn",
        "Chịu được cái mập mờ trước khi ép ra một quyết định",
        "Thi thoảng dẫn dắt bằng một câu hỏi, đừng chỉ ra lệnh",
      ],
    },
    esfj: {
      name: "ESFJ, Người Gắn Kết",
      tagline: "Ấm áp, hòa đồng, giữ cho cả nhóm gắn với nhau",
      summary:
        "Đâu có bạn là ở đó có sự ấm áp và cảm giác thuộc về. Bạn tinh ý với con người, rộng rãi khi giúp đỡ, và vui nhất khi những người quanh mình ổn.",
      longDescription:
        "ESFJ thân thiện, ngăn nắp, và thật lòng quan tâm. Bạn giữ cho mọi người gắn với nhau, nhớ điều gì quan trọng với từng người, và bỏ công sức thật cho sự hòa thuận và chỗ dựa. Rủi ro là dựa quá nhiều vào chuyện được người ta quý, hoặc xuê xoa một cuộc nói chuyện khó chỉ để giữ hòa khí. Bạn ở trạng thái tốt nhất khi sự rộng lượng của mình bắt nguồn từ giá trị bên trong, chứ không phải từ nhu cầu được mọi người công nhận.",
      strengths: [
        "Ấm áp, hòa đồng, và rộng lượng",
        "Để ý tới cảm giác của người khác",
        "Ngăn nắp và đáng tin cậy",
        "Tạo dựng sự kết nối và cảm giác thuộc về",
      ],
      growth: [
        "Đừng treo giá trị bản thân lên sự công nhận của người khác",
        "Nói thẳng chuyện khó thay vì lấp liếm cho qua",
        "Để giá trị của chính bạn dẫn lối, không chỉ tâm trạng của số đông",
      ],
    },
    istp: {
      name: "ISTP, Người Thợ Lành Nghề",
      tagline: "Điềm tĩnh, thực tế, học bằng cách bắt tay vào làm",
      summary:
        "Bạn học bằng cách làm, và giữ được bình tĩnh khi mọi thứ rối tung. Đưa cho bạn một vấn đề có thật và một chút không gian, kiểu gì bạn cũng gỡ ra.",
      longDescription:
        "ISTP độc lập, tinh ý, và rất giỏi gỡ những vấn đề thực tế ngay tại chỗ. Bạn thích hiểu cái gì chạy ra sao, giữ được cái đầu lạnh dưới áp lực, và quý sự tự do hơn mấy luật lệ đặt ra chỉ để có luật. Mặt trái là dễ im bặt hoặc rút khỏi cuộc khi mọi chuyện chạm tới cảm xúc, và khó chịu khi bị gò. Bạn lớn lên khi có mặt trọn vẹn cho phần con người, chứ không chỉ cho phần máy móc kỹ thuật.",
      strengths: [
        "Điềm tĩnh và làm được việc trong lúc rối ren",
        "Tay nghề gỡ vấn đề thực tế khéo léo",
        "Độc lập và dễ thích nghi",
        "Thực tế và khó bị làm cho cuống",
      ],
      growth: [
        "Ở lại trong cuộc khi câu chuyện chạm tới cảm xúc",
        "Nói ra điều đang diễn ra bên trong nhiều hơn",
        "Chốt một lựa chọn trước khi vắt cạn mọi phương án",
      ],
    },
    isfp: {
      name: "ISFP, Người Nghệ Sĩ",
      tagline: "Dịu dàng, sống ở hiện tại, làm nhiều hơn nói",
      summary:
        "Bạn đón nhận thế giới qua giác quan và qua giá trị của mình, và bạn nói lên con người mình qua những gì mình làm ra. Bạn sống ở hiện tại.",
      longDescription:
        "ISFP ấm áp, dễ chịu, và rất nhạy với cái đẹp và với khoảnh khắc mình đang ở trong đó. Giá trị của riêng bạn dẫn lối, bạn thích tránh xung đột, và hay để con người mình lộ ra qua việc làm hơn là qua lời nói. Thử thách là lên tiếng cho chính mình, và nhìn xa hơn hiện tại một chút tới cái kế hoạch dài hơi. Bạn thật sự là chính mình khi để người khác thấy thế giới bên trong của bạn và nói ra những niềm tin lặng lẽ thành lời.",
      strengths: [
        "Nhạy với cái đẹp và với khoảnh khắc hiện tại",
        "Ấm áp, bao dung, và dễ ở bên",
        "Lấy giá trị cá nhân chân thật làm gốc",
        "Nói lên mình qua hành động và sự sáng tạo",
      ],
      growth: [
        "Lên tiếng cho điều mình muốn và cần",
        "Lên kế hoạch xa hơn hiện tại một chút",
        "Đừng né xung đột cho tới khi nó âm ỉ rồi vỡ",
      ],
    },
    estp: {
      name: "ESTP, Người Xông Pha",
      tagline: "Táo bạo, nhanh nhẹn, sống nhờ hành động",
      summary:
        "Bạn sống ở hiện tại và bừng lên khi được bắt tay vào làm. Khi người khác còn đang cân nhắc, bạn đã làm rồi và vừa làm vừa chỉnh.",
      longDescription:
        "ESTP tràn năng lượng, thực tế, và táo bạo. Bạn đọc tình huống nhanh, dám liều ở chỗ người khác còn chần chừ, và giữ được sự bình thản khi áp lực dồn tới. Điểm yếu là ít kiên nhẫn với lý thuyết và bị cuốn theo cái phấn khích của ngay-bây-giờ hơn là cái giá phải trả về sau. Bạn ở trạng thái tốt nhất khi đặt cái bản năng hành động đó cạnh một thoáng nghĩ xem nó dẫn tới đâu.",
      strengths: [
        "Táo bạo và hành động nhanh",
        "Đọc tình huống và xoay chuyển cực nhanh",
        "Điềm tĩnh và tháo vát dưới áp lực",
        "Tràn năng lượng và vui khi ở cạnh",
      ],
      growth: [
        "Dừng một nhịp để cân cái giá trước khi làm",
        "Cho lý thuyết và việc lên kế hoạch một cơ hội công bằng",
        "Coi chừng những cú liều chỉ vì buồn chán",
      ],
    },
    esfp: {
      name: "ESFP, Người Trình Diễn",
      tagline: "Ngẫu hứng, vui tươi, tràn đầy sức sống",
      summary:
        "Đi đâu bạn cũng mang theo niềm vui, sự ấm áp và năng lượng. Bạn yêu con người, mê những trải nghiệm hay ho, và làm cho khoảnh khắc hiện tại vui hơn cho mọi người trong đó.",
      longDescription:
        "ESFP ấm áp, sôi nổi, và hào phóng với năng lượng của mình. Bạn ngẫu hứng, tinh ý với những người quanh mình, và có tài làm bầu không khí vui lên rồi kéo mọi người lại với nhau. Rủi ro là né mấy thứ khó nhằn, kém vui: cái kế hoạch dài hạn, cái cảm xúc nặng nề, cái việc chán mà vẫn phải làm. Bạn rực rỡ nhất khi cho phép mình ở lại với cả những khoảnh khắc nghiêm túc, chứ không chỉ những lúc tươi sáng.",
      strengths: [
        "Ấm áp, vui, và tràn đầy năng lượng",
        "Tinh ý với con người và với khoảnh khắc hiện tại",
        "Hào phóng và ngẫu hứng",
        "Làm bầu không khí vui lên và kéo mọi người lại gần",
      ],
      growth: [
        "Đối diện việc chán hay khó thay vì né",
        "Nghĩ trước một bước, đừng chỉ nghĩ tới hiện tại",
        "Ở lại với một cảm xúc khó thay vì với tay tìm thứ làm xao nhãng",
      ],
    },
  },
  questions: {
    mind1: "Gặp gỡ người mới tiếp thêm năng lượng cho tôi chứ không làm tôi mệt.",
    mind2: "Tôi hay vừa nói vừa nghĩ, nói ra rồi mới rõ mình muốn nói gì.",
    mind3: "Ở một buổi tụ tập, tôi thường là một trong những người giữ cho câu chuyện rôm rả.",
    mind4: "Sau một ngày dài gặp gỡ nhiều người, tôi thấy hứng khởi chứ không kiệt sức.",
    mind5: "Tôi cần kha khá thời gian ở một mình để nạp lại năng lượng.",
    mind6: "Tôi thích có vài người bạn thân hơn là quen biết thật rộng.",
    mind7: "Tôi thường nghĩ kỹ trong đầu trước khi nói ra.",
    mind8: "Giao tiếp nhiều quá làm tôi chỉ muốn lánh đi đâu đó một mình.",
    energy1: "Tôi để ý tới cái tổng thể nhiều hơn là từng chi tiết nhỏ.",
    energy2: "Tôi thích tìm hiểu mọi thứ vận hành ra sao, và vì sao chúng lại thành ra như vậy.",
    energy3: "Tôi hay nhận ra hai thứ tưởng chẳng liên quan lại có điểm chung.",
    energy4: "Thấy người ta làm gì đó theo cách thông thường, trong đầu tôi liền nảy ra một cách khác hẳn.",
    energy5: "Tôi tin vào sự thật và những gì mình từng trải hơn là tin vào linh cảm.",
    energy6: "Tôi để ý kỹ những chi tiết cụ thể ngay trước mắt.",
    energy7: "Tôi thích làm theo cách quen thuộc, đã biết chắc là ổn, hơn là thử cách mới chưa biết thế nào.",
    energy8: "Tôi tập trung vào chuyện đang xảy ra ngay lúc này, hơn là chuyện có thể xảy ra sau này.",
    nature1: "Khi ra quyết định, tôi quan tâm nhiều đến cảm xúc của những người liên quan.",
    nature2: "Tôi cố đặt mình vào vị trí người khác trước khi vội đánh giá.",
    nature3: "Với tôi, mọi người trong nhóm hòa thuận với nhau là điều rất quan trọng.",
    nature4: "Khi quyết định việc gì, tôi nghe theo trái tim nhiều hơn là cái đầu.",
    nature5: "Tôi thích quyết định bằng lý lẽ, kể cả khi điều đó làm vài người phật ý.",
    nature6: "Tôi thà giữ đúng quan điểm của mình còn hơn chỉ gật theo cho vừa lòng người khác.",
    nature7: "Tôi có thể lùi lại phân tích vấn đề mà không để cảm xúc xen vào.",
    nature8: "Với tôi, thành thật quan trọng hơn là khéo léo.",
    tactics1: "Tôi thích cứ để mọi thứ thoải mái hơn là chốt sẵn một kế hoạch cố định.",
    tactics2: "Tôi hay làm theo hứng, lúc có hứng thì làm dồn một lúc, chứ không làm đều đặn mỗi ngày.",
    tactics3: "Tôi thấy thoải mái khi cứ bắt tay vào làm rồi tới đâu tính tới đó.",
    tactics4: "Khi có gì đó thay đổi vào phút chót, tôi thấy hào hứng hơn là căng thẳng.",
    tactics5: "Tôi thấy nhẹ người hơn khi một quyết định đã được chốt xong.",
    tactics6: "Tôi thích lên kế hoạch trước và bám theo nó.",
    tactics7: "Tôi giữ công việc và chỗ của mình gọn gàng, ngăn nắp.",
    tactics8: "Tôi thích làm xong mọi việc từ sớm, chứ không đợi tới sát hạn chót.",
  },
  sources: [
    {
      label: "Carl Jung (1921), Psychological Types, lý thuyết mà bốn thang đo bắt nguồn từ đó",
      url: "https://en.wikipedia.org/wiki/Psychological_Types",
    },
    {
      label: "McCrae & Costa (1989), nhìn lại kiểu tâm lý của Jung qua lăng kính Big Five",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-6494.1989.tb00759.x",
    },
    {
      label:
        "Pittenger (1993), vì sao nhóm bốn chữ dễ đổi khi làm lại, lý do chúng tôi hiển thị điểm số liên tục",
      url: "https://www.researchgate.net/publication/232494957_Cautionary_comments_regarding_the_Myers-Briggs_Type_Indicator",
    },
    {
      label: "Open-Source Psychometrics Project, các thang đo kiểu Jung mở và dữ liệu",
      url: "https://openpsychometrics.org/tests/OEJTS/",
    },
  ],
}
