import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://localhost:4000");

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // חיבור לשרת
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // שמיעה להודעה מהשרת
    socket.on("message", (data: string) => {
      console.log("Received message:", data); // הוספנו כאן console.log כדי לוודא שההודעה התקבלה
      setMessage(data); // עדכון ה-state עם ההודעה
    });

    // ניתוק מהשרת
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // ניקוי כאשר רכיב נפרד
    return () => {
      socket.off("message");
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div>
      <h1>Socket.io React Client</h1>
      <p>{message ? message : "Waiting for message..."}</p>
    </div>
  );
};

export default App;
