import { useState, useRef, useEffect } from "react";
import { sendChatMessage } from "../services/chat.service";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = message.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { text: trimmed, sender: "user" }]);
    setMessage("");
    setLoading(true);

    const res = await sendChatMessage(trimmed);
    const botRaw = res.success ? res.data?.message ?? "(Trống)" : "Đã xảy ra lỗi: " + res.message;

    let current = "";
    const parts = botRaw.split("");
    let i = 0;

    const interval = setInterval(() => {
      current += parts[i];
      setMessages((prev) => {
        const withoutLastBot = prev.filter((m, idx) => !(idx === prev.length - 1 && m.sender === "bot"));
        return [...withoutLastBot, { text: current, sender: "bot" }];
      });
      i++;
      if (i >= parts.length) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 15);
  };

  return (
    <div className={`chatbox-container ${isOpen ? "open" : ""}`}>
      <button className="chat-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">
            <h3>Chat AI</h3>
          </div>

          <div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
                {msg.sender === "bot" ? (
                  <div className="message-content" dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  <div className="message-content">{msg.text}</div>
                )}
              </div>
            ))}
            {loading && <div className="message bot-message">Đang trả lời...</div>}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSubmit} className="message-input-form">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="message-input"
              disabled={loading}
            />
            <button type="submit" className="send-button" disabled={loading}>
              Gửi
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
