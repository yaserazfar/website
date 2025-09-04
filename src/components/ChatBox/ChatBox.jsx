import { useState, useEffect, useRef } from "react";
import './ChatBox.css';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  const chatbotName = "Son of Anton";
  const suggestionMessages = [
    "what is your purpose?",
    "what programming languages does yaser know?",
    "what does yaser do for work?"
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (messageText = null) => {
    const messageToSend = messageText || input;
    if (!messageToSend.trim()) return;
    
    setLoading(true);
    setShowSuggestions(false);

    const newMessages = [...messages, { role: "user", content: messageToSend }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend })
      });

      if (!res.ok) {
        throw new Error('API request failed');
      }

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { 
        role: "assistant", 
        content: "I'm having some technical difficulties right now. Please try again later." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
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
        <div ref={messagesEndRef} />
      </div>
      {showSuggestions && messages.length === 0 && (
        <div className="chatbox-suggestions">
          {suggestionMessages.map((suggestion, index) => (
            <button
              key={index}
              className="chatbox-suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
      <input
        value={input}
        onChange={e => {
          setInput(e.target.value);
          if (e.target.value.trim() && showSuggestions) {
            setShowSuggestions(false);
          }
        }}
        onKeyDown={handleKeyDown}
        className="chatbox-input"
        placeholder="Ask me anything..."
      />
      <button 
        onClick={(e) => {
          sendMessage();
        }} 
        disabled={loading}
        className="chatbox-button"
        type="button"
      >
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}
