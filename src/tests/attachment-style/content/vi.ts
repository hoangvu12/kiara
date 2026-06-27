import type { TestContent } from "@/lib/test-engine/types"

/**
 * Vietnamese content for the attachment test. The English ECR-R remains the
 * scientific reference; this is a careful translation written to read naturally,
 * not a formally back-translated and validated Vietnamese instrument.
 */
export const vi: TestContent = {
  title: "Bài test phong cách gắn bó",
  tagline: "Khám phá cách bạn kết nối trong những mối quan hệ thân thiết",
  description:
    "Đo lường các khuôn mẫu gắn bó của bạn trên hai thang đo, lo âu và né tránh, dựa trên bộ câu hỏi ECR-R trong nghiên cứu tâm lý học.",
  category: "Quan hệ",
  scientificBasis:
    "Dựa trên bộ câu hỏi Experiences in Close Relationships-Revised (ECR-R), một trong những thước đo gắn bó ở người trưởng thành được kiểm chứng nhiều nhất trong tâm lý học. Mỗi thang đo của nó thường đạt độ tin cậy nội tại trên .90.",
  disclaimer:
    "Đây là một công cụ để hiểu bản thân, dựa trên một bộ câu hỏi nghiên cứu. Nó không phải là chẩn đoán y khoa. Gắn bó thật ra nằm trên hai thang đo trượt, nên hãy xem tên phong cách chỉ là một bản tóm tắt thân thiện về nơi bạn rơi vào. Nó cũng có thể thay đổi theo thời gian.",
  instructions:
    "Hãy trả lời theo cảm nhận chung của bạn trong các mối quan hệ tình cảm gần gũi, dù là trong quá khứ, hiện tại hay bạn hình dung ra. Nếu bạn chưa từng yêu, hãy trả lời theo cách bạn nghĩ mình sẽ cảm thấy.",
  resultKicker: "Phong cách gắn bó của bạn",
  scale: {
    minLabel: "Hoàn toàn không đồng ý",
    maxLabel: "Hoàn toàn đồng ý",
    pointLabels: [
      "Hoàn toàn không đồng ý",
      "Không đồng ý",
      "Hơi không đồng ý",
      "Trung lập",
      "Hơi đồng ý",
      "Đồng ý",
      "Hoàn toàn đồng ý",
    ],
  },
  dimensions: {
    anxiety: {
      label: "Lo âu gắn bó",
      description:
        "Mức độ bạn lo lắng về việc người kia có thật sự ở bên bạn hay không. Điểm cao nghĩa là bạn hay sợ bị bỏ rơi hoặc sợ mình không được yêu đủ.",
      lowLabel: "Yên tâm với sự gần gũi",
      highLabel: "Sợ bị bỏ rơi",
    },
    avoidance: {
      label: "Né tránh gắn bó",
      description:
        "Mức độ bạn thấy không thoải mái khi gần gũi và dựa vào người khác. Điểm cao nghĩa là bạn có xu hướng tự lực và giữ một khoảng cách cảm xúc.",
      lowLabel: "Thoải mái khi dựa vào nhau",
      highLabel: "Né tránh sự gần gũi",
    },
  },
  contexts: {
    single: "Độc thân",
    partnered: "Đang trong một mối quan hệ",
    parent: "Khi làm cha mẹ",
  },
  perspectives: {
    romantic: {
      label: "Quan hệ tình cảm",
      instruction:
        "Hãy trả lời theo cảm nhận chung của bạn trong các mối quan hệ tình cảm gần gũi, dù là trong quá khứ, hiện tại hay bạn hình dung ra. Nếu bạn chưa từng yêu, hãy trả lời theo cách bạn nghĩ mình sẽ cảm thấy.",
    },
    general: {
      label: "Quan hệ thân thiết nói chung",
      instruction:
        "Hãy trả lời theo cảm nhận chung của bạn với những người thân thiết nhất, như bạn thân hay gia đình. Hãy hiểu chữ \"người ấy\" là bất kỳ ai bạn thấy gần gũi nhất.",
      note:
        "Phong cách gắn bó hình thành từ sớm, qua cách những người nuôi dạy bạn đối xử với bạn, nên bạn vẫn có một phong cách gắn bó kể cả khi chưa từng yêu. Cách trả lời theo những gì bạn hình dung, hoặc nghĩ về bạn thân và gia đình thay vì người yêu, là một hướng được dùng rộng rãi và đã được kiểm chứng trong nghiên cứu.",
    },
  },
  outcomes: {
    secure: {
      name: "An toàn",
      tagline: "Thoải mái với cả sự gần gũi lẫn sự độc lập",
      summary:
        "Bạn thấy an toàn khi gần gũi với người khác, và cũng không suy sụp khi phải xa cách. Bạn có thể nhờ cậy người khác, mà cũng có thể để cho người ta khoảng trời riêng.",
      longDescription:
        "Kết quả an toàn nghĩa là bạn có điểm thấp ở cả lo âu lẫn né tránh. Bạn phần lớn tin rằng những người thân thiết sẽ ở bên mình, nên việc dựa vào họ (và để họ dựa vào mình) là chuyện bình thường. Bạn nói ra được điều mình cần, không xem mỗi lần bất đồng là dấu chấm hết cho mối quan hệ, và hồi phục nhanh sau một trận cãi vã. Các nghiên cứu cho thấy kiểu gắn bó này gắn liền với những mối quan hệ hài lòng và bền vững hơn. Có một điều đáng biết: gắn bó không phải là cố định. Người ta dần trở nên an toàn hơn theo thời gian, nhờ những mối quan hệ tốt và một chút tự nhận thức về bản thân.",
      strengths: [
        "Nói ra điều mình cần mà không làm quá lên",
        "Tin tưởng người khác mà không cần được trấn an liên tục",
        "Xem mâu thuẫn là vấn đề để cùng giải quyết, chứ không phải mối đe dọa",
        "Thoải mái khi ở gần và cũng thoải mái khi ở xa",
      ],
      growth: [
        "Nhớ rằng một người có kiểu gắn bó khác có thể cần được trấn an nhiều hơn, hoặc cần nhiều khoảng riêng hơn bạn",
        "Để mắt đến nhu cầu của chính mình, đừng chỉ lo làm chỗ dựa vững vàng cho mọi người",
      ],
      contexts: {
        single:
          "Khi độc thân, bạn thường ổn khi ở một mình và sẵn lòng gặp gỡ ai đó mà không ép buộc. Bạn có xu hướng chọn những người mang lại cảm giác vững vàng thay vì đuổi theo những mối quan hệ đầy kịch tính.",
        partnered:
          "Trong một mối quan hệ, bạn thường là người điềm tĩnh. Bạn có thể gần gũi mà không đánh mất chính mình, và cho người kia khoảng trời riêng mà không thấy bị bỏ rơi. Bạn hay là người giữ cho mọi thứ thành thật và thẳng thắn.",
        parent:
          "Khi làm cha mẹ, điều này thường thể hiện ở việc bạn là một điểm tựa đáng tin: có mặt khi con buồn, và vui vẻ để con đi khám phá thế giới. Hãy nhớ rằng kiểu gắn bó của bạn với con có thể khác với kiểu gắn bó của bạn với người yêu.",
      },
    },
    anxious: {
      name: "Lo âu - Bận tâm",
      tagline: "Khao khát gần gũi, nhưng lo rằng nó không được đáp lại",
      summary:
        "Bạn rất coi trọng sự kết nối và nhận ra cả những thay đổi nhỏ trong các mối quan hệ của mình. Mặt trái là bạn dễ lo rằng người kia không cảm thấy như vậy, và sự trấn an thường nhanh chóng phai đi.",
      longDescription:
        "Kết quả này nghĩa là lo âu cao và né tránh thấp. Bạn khao khát sự gần gũi, đôi khi rất nhiều, nhưng cũng nhanh chóng nhận ra những dấu hiệu xa cách và có thể đọc ra sự cự tuyệt từ những điều hóa ra chẳng có gì. Điểm hay thì có thật: bạn thường nhận ra những điều người khác bỏ lỡ. Phần khó là làm dịu chính mình khi cảm thấy mối kết nối đang tuột đi. Việc cần làm ở đây có hai phần. Thứ nhất, học được rằng một người hơi xa cách trong một buổi tối không có nghĩa là họ đang rời bỏ bạn. Thứ hai, giỏi hơn trong việc trấn tĩnh bản thân trước khi đi tìm sự trấn an.",
      strengths: [
        "Để tâm đến người khác và thật lòng đầu tư cho họ",
        "Sẵn lòng bỏ công sức cho một mối quan hệ",
        "Ấm áp và bày tỏ tình cảm một cách cởi mở",
      ],
      growth: [
        "Hãy trấn tĩnh bản thân một chút trước khi xin được trấn an, để nó thật sự có tác dụng",
        "Nói thẳng điều mình muốn (\"lúc này được trấn an một chút sẽ giúp em\") thay vì thử lòng hay giận dỗi",
        "Khi câu chuyện \"họ đang xa dần\" bắt đầu, hãy đối chiếu nó với những gì thật sự đã xảy ra",
      ],
      contexts: {
        single:
          "Khi độc thân, bạn có thể cảm nhận rõ khoảng trống khi không có người yêu, và dễ muốn tiến nhanh khi gặp ai đó có vẻ hứa hẹn. Chậm lại và để ý xem họ có nhất quán hay không thường mang lại kết quả tốt.",
        partnered:
          "Trong một mối quan hệ, cảm giác xa cách có thể đẩy bạn đến chỗ đi tìm sự trấn an hoặc thử lòng người kia. Một người luôn ấm áp và ổn định sẽ giúp bạn yên lòng.",
        parent:
          "Khi làm cha mẹ, sự nhạy cảm của bạn là một món quà, nhưng chính nỗi lo ấy cũng có thể trở thành kiểm soát quá mức. Để con có khoảng tự lập riêng là điều bạn nên luyện tập.",
      },
    },
    dismissive: {
      name: "Né tránh - Coi nhẹ",
      tagline: "Rất tự lập, giữ sự gần gũi ở một khoảng cách",
      summary:
        "Bạn độc lập và tự mình xoay xở mọi thứ. Việc trở nên thật gần gũi, hay dựa vào ai đó, có thể khiến bạn thấy không thoải mái hoặc đơn giản là không cần thiết.",
      longDescription:
        "Kết quả này nghĩa là lo âu thấp và né tránh cao. Bạn không mấy lo về chuyện bị bỏ rơi, nhưng bạn giữ khoảng cách và đề cao việc không cần đến ai. Bạn có thể xem nhẹ tầm quan trọng của các mối quan hệ, thấy ngột ngạt khi ai đó muốn nhiều hơn, và tự mình giải quyết cảm xúc của mình. Kiểu này thường hình thành khi việc dựa vào người khác đã từng không đáng tin, nên tự xoay xở một mình trở thành lựa chọn an toàn. Việc cần làm ở đây là để vài người đáng tin đến gần hơn một chút, và nhận ra những nhu cầu mà bạn đã quá quen với việc phớt lờ.",
      strengths: [
        "Điềm tĩnh và xoay xở tốt khi mọi thứ căng thẳng",
        "Giữ được sự độc lập và ranh giới rõ ràng",
        "Không bị nỗi sợ bị cự tuyệt chi phối",
      ],
      growth: [
        "Chia sẻ những chuyện nhỏ trước khi chúng dồn lại thành chuyện lớn",
        "Khi căng thẳng khiến bạn muốn rút lui, hãy thử ở lại trong cuộc trò chuyện",
        "Khi người kia tìm đến bạn, hãy hiểu đó là sự kết nối chứ không phải áp lực",
      ],
      contexts: {
        single:
          "Khi độc thân, bạn thường thấy thật sự ổn khi ở một mình. Điều đó là lành mạnh, nhưng nó cũng có thể âm thầm trở thành cách để né tránh sự tổn thương khi cho ai đó bước vào đời mình.",
        partnered:
          "Trong một mối quan hệ, có lẽ bạn cần nhiều khoảng riêng hơn người kia, và căng thẳng có thể khiến bạn thu mình. Nói ra rằng bạn cần khoảng riêng, thay vì im lặng biến mất vào đó, sẽ giúp người kia không hiểu lầm là bị cự tuyệt.",
        parent:
          "Khi làm cha mẹ, bạn có thể vững vàng và đáng tin nhưng lại thấy lúng túng trước những khoảnh khắc nhiều cảm xúc. Có mặt trong những khoảnh khắc đó là điều giúp con bạn cảm thấy an toàn.",
      },
    },
    fearful: {
      name: "Sợ hãi - Né tránh",
      tagline: "Vừa khao khát gần gũi vừa sợ nó, cùng một lúc",
      summary:
        "Bạn khao khát sự kết nối, nhưng nó cũng có thể khiến bạn thấy mạo hiểm, nên bạn giằng co giữa việc tìm đến người khác và lùi lại. Sự gần gũi mang đến cả hy vọng lẫn thôi thúc muốn tự bảo vệ mình.",
      longDescription:
        "Kết quả này nghĩa là lo âu cao và né tránh cao (đôi khi còn gọi là kiểu hỗn loạn). Bạn có thể vừa khao khát sự gần gũi mãnh liệt vừa hoài nghi nó cùng một lúc, khiến các mối quan hệ giống như một sự giằng co: đến gần thì khơi lên nỗi sợ bị tổn thương, còn lùi lại thì khơi lên nỗi sợ bị cô đơn. Kiểu này thường bắt nguồn từ những lúc người mà bạn cần đến lại cũng chính là nguồn gây căng thẳng hay tổn thương. Nó thường đi kèm với cảm xúc mạnh và khả năng nhận ra rất nhanh khi có gì đó không an toàn. Tin tốt là nó đáp ứng tốt với việc từ từ xây dựng cảm giác an toàn, và nhiều người thấy nó dịu đi theo thời gian, nhất là khi có sự hỗ trợ.",
      strengths: [
        "Có khả năng đồng cảm thật sự và thấu hiểu cảm xúc",
        "Rất nhạy với những gì đang diễn ra trong một mối quan hệ, kể cả khuôn mẫu của chính mình",
        "Thật lòng khao khát một sự kết nối sâu sắc",
      ],
      growth: [
        "Xây dựng cảm giác an toàn từ từ, với những người kiên nhẫn và ổn định",
        "Khi thôi thúc muốn bám lấy hoặc bỏ chạy ập đến, hãy thử ngồi lại với nó trước khi hành động",
        "Hãy cân nhắc gặp một nhà trị liệu. Kiểu gắn bó này đáp ứng đặc biệt tốt với sự hỗ trợ đó",
      ],
      contexts: {
        single:
          "Khi độc thân, bạn có thể vừa khao khát một mối quan hệ mãnh liệt vừa thấy nhẹ nhõm khi có khoảng cách. Chỉ cần nhận ra khuôn mẫu đó, mà không tự trách mình, đã là bước đầu tiên.",
        partnered:
          "Trong một mối quan hệ, bạn có thể lật qua lật lại giữa gần gũi và rút lui, điều này có thể khiến người kia bối rối. Sự kiên nhẫn, ổn định, và việc thật sự nói ra khuôn mẫu này sẽ giúp ích rất nhiều.",
        parent:
          "Khi làm cha mẹ, những cảm xúc mạnh có thể khó kiểm soát trong khoảnh khắc. Việc bạn tự xây dựng cảm giác an toàn cho mình, cùng với sự hỗ trợ, là điều giúp con bạn nhiều nhất.",
      },
    },
  },
  questions: {
    anx1: "Tôi sợ rằng mình sẽ đánh mất tình yêu của người ấy.",
    anx2: "Tôi hay lo rằng người ấy sẽ không muốn ở lại bên tôi.",
    anx3: "Tôi hay lo rằng người ấy không thật sự yêu tôi.",
    anx4: "Tôi lo rằng người yêu sẽ không quan tâm đến tôi nhiều như tôi quan tâm đến họ.",
    anx5: "Tôi thường ước gì tình cảm của người ấy dành cho tôi cũng mạnh mẽ như tình cảm tôi dành cho họ.",
    anx6: "Tôi lo lắng rất nhiều về các mối quan hệ của mình.",
    anx7: "Khi không có người ấy bên cạnh, tôi lo rằng họ có thể để ý đến một người khác.",
    anx8: "Khi tôi bày tỏ tình cảm với người yêu, tôi sợ rằng họ không cảm thấy như vậy với tôi.",
    anx9: "Tôi hiếm khi lo rằng người ấy sẽ rời bỏ tôi.",
    anx10: "Người yêu khiến tôi nghi ngờ chính mình.",
    anx11: "Tôi không hay lo rằng mình sẽ bị bỏ rơi.",
    anx12: "Tôi thấy rằng người ấy không muốn gần gũi nhiều như tôi mong muốn.",
    anx13: "Đôi khi người yêu thay đổi tình cảm với tôi mà không có lý do rõ ràng.",
    anx14: "Mong muốn được thật gần gũi của tôi đôi khi khiến người khác e ngại mà rời xa.",
    anx15: "Tôi sợ rằng khi người yêu hiểu rõ tôi, họ sẽ không thích con người thật của tôi.",
    anx16: "Tôi bực bội khi không nhận được sự quan tâm và chỗ dựa mình cần từ người ấy.",
    anx17: "Tôi lo rằng mình không bằng được người khác.",
    anx18: "Hình như người ấy chỉ để ý đến tôi khi tôi giận.",
    avo1: "Tôi không thích cho người ấy thấy những gì mình cảm nhận sâu thẳm bên trong.",
    avo2: "Tôi thấy thoải mái khi chia sẻ những suy nghĩ và cảm xúc riêng tư với người ấy.",
    avo3: "Tôi thấy khó để cho phép mình dựa vào người yêu.",
    avo4: "Tôi thấy rất thoải mái khi gần gũi với người yêu.",
    avo5: "Tôi thấy không thoải mái khi mở lòng với người yêu.",
    avo6: "Tôi không thích quá gần gũi với người yêu.",
    avo7: "Tôi thấy khó chịu khi người yêu muốn thật gần gũi.",
    avo8: "Tôi thấy khá dễ để trở nên gần gũi với người ấy.",
    avo9: "Với tôi, việc trở nên gần gũi với người ấy không khó.",
    avo10: "Tôi thường tâm sự những vấn đề và lo lắng của mình với người ấy.",
    avo11: "Tìm đến người yêu những lúc cần giúp tôi thấy đỡ hơn.",
    avo12: "Tôi kể cho người ấy nghe gần như mọi chuyện.",
    avo13: "Tôi bàn bạc mọi chuyện với người ấy.",
    avo14: "Tôi thấy bất an khi người yêu trở nên quá gần gũi với tôi.",
    avo15: "Tôi thấy thoải mái khi dựa vào người yêu.",
    avo16: "Tôi thấy dễ dàng khi dựa vào người yêu.",
    avo17: "Tôi dễ dàng thể hiện sự âu yếm với người ấy.",
    avo18: "Người ấy thật sự hiểu tôi và những nhu cầu của tôi.",
  },
  // Với lăng kính "quan hệ thân thiết nói chung", những câu vốn ghi rõ "người
  // yêu" được đổi thành "người ấy" trung tính (cách diễn đạt của ECR-RS), để
  // bài test đọc tự nhiên với bạn thân hay gia đình. Các câu còn lại vốn đã
  // dùng "người ấy" — phần hướng dẫn đã dặn hiểu chữ này theo nghĩa rộng.
  questionsByPerspective: {
    general: {
      anx4: "Tôi lo rằng người ấy sẽ không quan tâm đến tôi nhiều như tôi quan tâm đến họ.",
      anx8: "Khi tôi bày tỏ tình cảm với người ấy, tôi sợ rằng họ không cảm thấy như vậy với tôi.",
      anx13: "Đôi khi người ấy thay đổi tình cảm với tôi mà không có lý do rõ ràng.",
      anx15: "Tôi sợ rằng khi người ấy hiểu rõ tôi, họ sẽ không thích con người thật của tôi.",
      avo3: "Tôi thấy khó để cho phép mình dựa vào người ấy.",
      avo4: "Tôi thấy rất thoải mái khi gần gũi với người ấy.",
      avo5: "Tôi thấy không thoải mái khi mở lòng với người ấy.",
      avo6: "Tôi không thích quá gần gũi với người ấy.",
      avo7: "Tôi thấy khó chịu khi người ấy muốn thật gần gũi.",
      avo11: "Tìm đến người ấy những lúc cần giúp tôi thấy đỡ hơn.",
      avo14: "Tôi thấy bất an khi người ấy trở nên quá gần gũi với tôi.",
      avo15: "Tôi thấy thoải mái khi dựa vào người ấy.",
      avo16: "Tôi thấy dễ dàng khi dựa vào người ấy.",
    },
  },
  sources: [
    {
      label: "Fraley, Waller & Brennan (2000), thước đo ECR-R (UIUC)",
      url: "http://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm",
    },
    {
      label: "Fraley, Heffernan, Vicary & Brumbaugh (2011), ECR-RS, đo gắn bó trong các quan hệ nói chung",
      url: "https://labs.psychology.illinois.edu/~rcfraley/measures/relstructures.htm",
    },
    {
      label: "Brennan, Clark & Shaver (1998), ECR gốc và mô hình hai thang đo",
      url: "http://labs.psychology.illinois.edu/~rcfraley/measures/measures.html",
    },
    {
      label: "Bartholomew & Horowitz (1991), mô hình bốn kiểu gắn bó ở người trưởng thành",
      url: "https://en.wikipedia.org/wiki/Attachment_in_adults",
    },
  ],
}
