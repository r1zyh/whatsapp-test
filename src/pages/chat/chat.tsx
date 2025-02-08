import { sendMessage } from "@/api/send-message";
import { useChat } from "@/components/providers/chat-provider/useChat";
import { useAuth } from "@components/providers/auth-provider/useAuth";
import { useState } from "react";

type TMessage = {
  id: string;
  //sender: string;
  text: string;
};

export function Chat() {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState<TMessage[]>([]);
  const { user, phone } = useAuth();
  const { dispatch } = useChat();

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmitClick = () => {
    if (!user) {
      return;
    }
    const newMessage: TMessage = {
      id: Date.now().toString(),
      text: message,
    };
    sendMessage(dispatch, user, +phone, message);
    setAllMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };
  return (
    <div className="chat__container">
      <h2>Chat Template</h2>

      <div className="message__container">
        <ul className="message__list">
          {allMessages.map((allMessage) => (
            <li className="message__list--item" key={allMessage.id}>
              {allMessage.text}
            </li>
          ))}
        </ul>
      </div>

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
