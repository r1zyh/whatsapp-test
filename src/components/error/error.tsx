import { useNavigate } from "react-router-dom";
import styles from "./error.module.css";
import { AppRoute } from "@/const";
import { useAuth } from "../providers/auth-provider/useAuth";
import { useChat } from "../providers/chat-provider/useChat";

export function ErrorRedirect(): JSX.Element {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { dispatch } = useChat();

  const handleRedirect = () => {
    login(null);
    dispatch({ type: "SET_ERROR", payload: false });
    navigate(AppRoute.Main);
  };

  return (
    <div className={styles.error__container}>
      <p className={styles.error__message}>
        Произошла ошибка. Пожалуйста, авторизуйтесь заново.
      </p>
      <button className={styles.redirect__button} onClick={handleRedirect}>
        Перейти на страницу входа
      </button>
    </div>
  );
}
