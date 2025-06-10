import { quizQuestions } from "@/data/quiz";
import { useEffect, useRef, useState } from "react";

const QUIZ_TIME = 300; // 5 phút (tính bằng giây)

export default function QuizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Đếm ngược thời gian
  useEffect(() => {
    if (!open || submitted) return;
    timerRef.current = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [open, submitted]);

  // Tự động nộp bài khi hết giờ
  useEffect(() => {
    if (timeLeft <= 0 && !submitted) handleSubmit();
  }, [timeLeft, submitted]);

  // Reset khi mở lại modal
  useEffect(() => {
    if (open) {
      setAnswers(Array(quizQuestions.length).fill(null));
      setSubmitted(false);
      setScore(0);
      setTimeLeft(QUIZ_TIME);
    }
  }, [open]);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((ans) => {
      const copy = [...ans];
      copy[qIdx] = optIdx;
      return copy;
    });
  };

  const handleSubmit = () => {
    if (submitted) return;
    let correct = 0;
    answers.forEach((ans, idx) => {
      if (ans === quizQuestions[idx].answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Hiển thị thời gian mm:ss
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  if (!open) return null;

  return (
    <div className="quiz-modal-overlay" onClick={onClose}>
      <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quiz-modal-close" onClick={onClose} aria-label="Đóng">
          &times;
        </button>
        <h2 className="quiz-modal-title">Trắc nghiệm kiến thức</h2>
        <div className="quiz-timer">
          <span>
            Thời gian còn lại: <b className={timeLeft <= 15 ? "danger" : ""}>{formatTime(timeLeft)}</b>
          </span>
        </div>

        <form
          className="quiz-content-scroll"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {quizQuestions.map((q, qIdx) => (
            <div className="quiz-question" key={qIdx}>
              <p>
                <strong>Câu {qIdx + 1}:</strong> {q.question}
              </p>
              <ul>
                {q.options.map((opt, optIdx) => (
                  <li key={optIdx}>
                    <label
                      className={`quiz-option${submitted && q.answer === optIdx ? " correct" : ""}${
                        submitted && answers[qIdx] === optIdx && answers[qIdx] !== q.answer ? " wrong" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${qIdx}`}
                        checked={answers[qIdx] === optIdx}
                        onChange={() => handleSelect(qIdx, optIdx)}
                        disabled={submitted}
                      />
                      {opt}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {!submitted && (
            <button type="submit" className="quiz-submit-btn">
              Nộp bài
            </button>
          )}
          {submitted && (
            <div className="quiz-result">
              <strong>
                Điểm của bạn: {score}/{quizQuestions.length}
              </strong>
              <div className="quiz-feedback">
                {score === quizQuestions.length
                  ? "Xuất sắc! Bạn đã trả lời đúng tất cả!"
                  : score >= 16
                  ? "Rất tốt! Bạn hiểu biết sâu về Hồ Chí Minh."
                  : score >= 10
                  ? "Khá ổn! Hãy tìm hiểu thêm về Bác nhé."
                  : "Bạn nên đọc thêm về cuộc đời và tư tưởng Hồ Chí Minh."}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
