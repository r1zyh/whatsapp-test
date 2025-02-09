import { useState } from "react";
import { Login } from "@components/login/login";
import { useAuth } from "@components/providers/auth-provider/useAuth";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/const";

export function Main(): JSX.Element {
  const { isLogged, handleSetPhone } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOpenChatClick = () => {
    if (isNaN(+phoneNumber) || !phoneNumber) {
      alert("please try again");
      setPhoneNumber("");
      throw new Error("The phone number must consist of digits only");
    }
    const finalPhone = phoneNumber.startsWith("8") ? "7" + phoneNumber.slice(1) : phoneNumber;
    handleSetPhone(finalPhone);
    navigate(AppRoute.Chat);
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
            placeholder="номер телефона без знаков"
            minLength={11}
            value={phoneNumber}
            onChange={handlePhoneChange}
            onKeyDown={(e) => e.key === "Enter" && handleOpenChatClick()}
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
