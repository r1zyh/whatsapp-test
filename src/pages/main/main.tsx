import { useState } from "react";
import { Login } from "../../components/login/login";
import { useAuth } from "../../components/providers/auth-provider/useAuth";
import styles from "./main.module.css";

export function Main(): JSX.Element {
  const { isLogged } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOpenChatClick = () => {
    console.log(phoneNumber);
  };
  return (
    <div className={styles.main__container}>
      {!isLogged ? (
        <Login />
      ) : (
        <>
          <h2 className={styles.title}>Введите номер собеседника</h2>
          <input
            type="text"
            placeholder="номер телефона"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={styles.phone__input}
            required
          />
          <button className={styles.open__chat} onClick={handleOpenChatClick}>
            Открыть чат
          </button>
        </>
      )}
    </div>
  );
}
