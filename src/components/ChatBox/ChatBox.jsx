import { useState } from "react";
import './ChatBox.css';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const chatbotName = "Son of Anton";

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (isMinimized) {
    return (
      <div className="chatbox-container chatbox-minimized">
        <div className="chatbox-header">
          <span className="chatbox-title">{chatbotName}</span>
          <button 
            onClick={toggleMinimize}
            className="chatbox-toggle-btn"
            title="Expand chat"
          >
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </button>
        </div>
        {messages.length > 0 && (
          <div className="chatbox-notification">
            {messages.length} message{messages.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <span className="chatbox-title">{chatbotName}</span>
        <button 
          onClick={toggleMinimize}
          className="chatbox-toggle-btn"
          title="Minimize chat"
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
      <div className="chatbox-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chatbox-message ${msg.role}`}>
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="chatbox-input"
        placeholder="Ask me anything..."
      />
      <button 
        onClick={sendMessage} 
        disabled={loading}
        className="chatbox-button"
      >
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}
