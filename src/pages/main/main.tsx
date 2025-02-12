import { useState } from "react";
import { Login } from "@components/login/login";
import { useAuth } from "@components/providers/auth-provider/useAuth";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/const";
import { formatPhoneNumber } from "@/util/helpers";

export function Main(): JSX.Element {
  const { isLogged, handleSetPhone } = useAuth();
  const [myPhoneNumber, setMyPhoneNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    option?: string
  ) => {
    if (option === "my") {
      setMyPhoneNumber(e.target.value);
    } else {
      setPhoneNumber(e.target.value);
    }
  };
  const handleOpenChatClick = () => {
    if (isNaN(+phoneNumber) || !phoneNumber) {
      alert("please try again");
      setPhoneNumber("");
      throw new Error("The phone number must consist of digits only");
    }
    const finalPhoneMy = formatPhoneNumber(myPhoneNumber);
    const finalPhone = formatPhoneNumber(phoneNumber);

    handleSetPhone(finalPhone, finalPhoneMy);
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
            placeholder="ваш номер без знаков"
            minLength={11}
            value={myPhoneNumber}
            onChange={(e) => handlePhoneChange(e, "my")}
            onKeyDown={(e) => e.key === "Enter" && handleOpenChatClick()}
            className={styles.phone__input}
            required
          />
          <input
            type="text"
            placeholder="номер собеседника без знаков"
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
