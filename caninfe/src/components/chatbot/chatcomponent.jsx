import React, { useState, useEffect } from "react";
import axios from "axios";

function ChatComponent() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/chat"); // Replace with your backend URL
    setWs(ws);

    ws.onopen = () => console.log("WebSocket connected");
    ws.onclose = () => console.log("WebSocket disconnected");
    ws.onmessage = (event) => setResponse(event.data);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(message);
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>{response && <p>Response: {response}</p>}</div>
    </div>
  );
}

export default ChatComponent;
