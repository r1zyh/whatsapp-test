import React, { useState } from "react";

export function Chat() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmitClick = () => {
    console.log(message);
  };
  return (
    <div className="chat__container">
      <h2>Chat Template</h2>

      <div className="message__input">
        <input
          type="text"
          placeholder="Поприветствуйте своего собеседника!"
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={handleSubmitClick}>Отправить</button>
      </div>
    </div>
  );
}
