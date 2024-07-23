import React, { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "./UserContext";
import io from "socket.io-client";
import "./ChatApplication.css";
import male from "./img/male.png";
import axios from "axios";

function ChatApplication() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const { currentUser } = useContext(UserContext);
  const [allMessages, setAllMessages] = useState(true);

  const socketRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/tpo/messages`,
          {
            num: 10,
          }
        );
        setMessages(response.data.messages.reverse());
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    socketRef.current = io(process.env.REACT_APP_BACKEND_URL);

    socketRef.current.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => socketRef.current.close();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "" && socketRef.current) {
      const messageData = {
        text: inputMessage,
        sender: currentUser.name,
        timestamp: new Date(),
      };
      socketRef.current.emit("message", messageData);
      setInputMessage("");
    }
  };

  const fetchAllMessages = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/tpo/messages`
      );
      setMessages(response.data.messages);
      setAllMessages(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div className="chat-container">
      {allMessages ? (
        <button onClick={fetchAllMessages} className="fetch-messages-button">
          Old Messages
        </button>
      ) : null}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-container ${
              msg.sender === currentUser.name ? "user-message" : "other-message"
            }`}
          >
            <div className="name-logo">
              <img src={male} alt="male" />
              {msg.sender}
            </div>
            <div
              className={`talk-bubble tri-right ${
                msg.sender === currentUser.name ? "left-top" : "right-top"
              }`}
            >
              <div className="talktext">
                {msg.text}
                <div className="message-timestamp">
                  {new Date(msg.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button type="submit" className="chat-send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatApplication;
