import { sendMessage } from "@/api/send-message";
import { useChat } from "@/components/providers/chat-provider/useChat";
import { useAuth } from "@components/providers/auth-provider/useAuth";
import { useEffect, useState } from "react";
import { receiveMessage } from "@/api/receive-notification";
import { getClassForSender } from "./getSenderStatus";
import { ErrorRedirect } from "@/components/error/error";
import styles from "./chat.module.css";

export function Chat() {
  const [message, setMessage] = useState("");
  const { user, phone, myPhone } = useAuth();
  const { state, dispatch } = useChat();

  useEffect(() => {
    if (user && !state.isError) {
      const timeout = 7000;
      const fetchNotifications = async () => {
        await receiveMessage(user, timeout, dispatch, state);
      };
      fetchNotifications();
    }
  }, [user, dispatch, state, state.isError]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmitClick = () => {
    if (!user) {
      return;
    }
    sendMessage(dispatch, user, +phone, message);
    setMessage("");
  };
  return (
    <div className={styles.chat__container}>
      <h2 className={styles.title}>{`WhatsApp Green-Api +${phone}`}</h2>

      {state.isError && <ErrorRedirect />}
      {!state.isError && (
        <div className={styles.message__container}>
          <ul className={styles.message__list}>
            {state.messages.map((message, index) => (
              <li
                className={`${
                  styles["message__list--item"]
                } ${getClassForSender(message.sender, myPhone)}`}
                key={`${message.chatId}-${index}`}
              >
                {message.message}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.message__input}>
        <input
          type="text"
          placeholder="Поприветствуйте своего собеседника!"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={(e) => e.key === "Enter" && handleSubmitClick()}
        />
        <button onClick={handleSubmitClick}>Отправить</button>
      </div>
    </div>
  );
}
