import type { Locale } from "./config"

/**
 * Interface chrome strings (everything that isn't test content). Test content
 * like questions and outcomes is translated inside each test's content/ folder.
 */
export type UIStrings = {
  header: { tagline: string }
  footer: string
  common: {
    allTests: string
    testNotFound: string
    backToAll: string
    min: string
    questions: string
    sources: string
  }
  catalog: { heroTitle: string; heroSubtitle: string; moreSoon: string }
  intro: {
    science: string
    howToRead: string
    start: string
    continue: string
    perspectiveTitle: string
    perspectiveHint: string
  }
  runner: {
    question: string
    back: string
    next: string
    seeResults: string
    allAnswered: string
  }
  results: {
    kicker: string
    twoScores: string
    twoScoresHint: string
    whereYouLand: string
    whatThisLooksLike: string
    strengths: string
    growth: string
    retake: string
    explore: string
    youAreHere: string
    quadrant: { vertical: string; bottom: string; top: string }
  }
  levels: { low: string; medium: string; high: string }
}

const en: UIStrings = {
  header: { tagline: "Tests for self-understanding" },
  footer:
    "These are self-reflection tools for learning about yourself, not clinical diagnoses.",
  common: {
    allTests: "All tests",
    testNotFound: "Test not found.",
    backToAll: "Back to all tests",
    min: "min",
    questions: "questions",
    sources: "Sources & references",
  },
  catalog: {
    heroTitle: "Understand yourself, one test at a time",
    heroSubtitle:
      "Each test here is built on real psychology research, not a personality quiz you'd find in a magazine. No sign-up, and your answers stay on your device.",
    moreSoon: "More tests coming soon.",
  },
  intro: {
    science: "The science behind it",
    howToRead: "How to read your result",
    start: "Start test",
    continue: "Continue test",
    perspectiveTitle: "Who should you have in mind?",
    perspectiveHint: "Pick whichever fits you. You can change it anytime.",
  },
  runner: {
    question: "Question",
    back: "Back",
    next: "Next",
    seeResults: "See my results",
    allAnswered: "You've answered everything. See your results →",
  },
  results: {
    kicker: "Your result",
    twoScores: "Your two scores",
    twoScoresHint:
      "These two scores are the actual result. Your style is just the corner they land in.",
    whereYouLand: "Where you land",
    whatThisLooksLike: "What this looks like for you:",
    strengths: "Strengths",
    growth: "Growth edges",
    retake: "Retake test",
    explore: "Explore more tests",
    youAreHere: "You are here",
    quadrant: { vertical: "Vertical", bottom: "bottom", top: "top" },
  },
  levels: { low: "low", medium: "medium", high: "high" },
}

const vi: UIStrings = {
  header: { tagline: "Bài test để hiểu bản thân" },
  footer:
    "Đây là những công cụ tự khám phá để hiểu bản thân hơn, không phải chẩn đoán y khoa.",
  common: {
    allTests: "Tất cả bài test",
    testNotFound: "Không tìm thấy bài test.",
    backToAll: "Về trang tất cả bài test",
    min: "phút",
    questions: "câu hỏi",
    sources: "Nguồn & tài liệu tham khảo",
  },
  catalog: {
    heroTitle: "Hiểu bản thân, từng bài test một",
    heroSubtitle:
      "Mỗi bài test ở đây đều dựa trên nghiên cứu tâm lý học thật sự, không phải mấy bài trắc nghiệm tính cách trên báo. Không cần đăng ký, và câu trả lời của bạn chỉ nằm trên máy của bạn.",
    moreSoon: "Sắp có thêm nhiều bài test.",
  },
  intro: {
    science: "Cơ sở khoa học",
    howToRead: "Cách đọc kết quả của bạn",
    start: "Bắt đầu bài test",
    continue: "Tiếp tục bài test",
    perspectiveTitle: "Bạn nên nghĩ về ai khi trả lời?",
    perspectiveHint: "Chọn cách hợp với bạn nhất. Bạn đổi lúc nào cũng được.",
  },
  runner: {
    question: "Câu hỏi",
    back: "Quay lại",
    next: "Tiếp",
    seeResults: "Xem kết quả",
    allAnswered: "Bạn đã trả lời hết rồi. Xem kết quả →",
  },
  results: {
    kicker: "Kết quả của bạn",
    twoScores: "Hai chỉ số của bạn",
    twoScoresHint:
      "Hai chỉ số này mới là kết quả thật sự. Tên phong cách chỉ là góc mà bạn rơi vào thôi.",
    whereYouLand: "Bạn nằm ở đâu",
    whatThisLooksLike: "Điều này trông như thế nào với bạn:",
    strengths: "Điểm mạnh",
    growth: "Điều cần phát triển",
    retake: "Làm lại bài test",
    explore: "Khám phá thêm bài test",
    youAreHere: "Bạn ở đây",
    quadrant: { vertical: "Trục dọc", bottom: "dưới", top: "trên" },
  },
  levels: { low: "thấp", medium: "trung bình", high: "cao" },
}

export const uiStrings: Record<Locale, UIStrings> = { en, vi }
