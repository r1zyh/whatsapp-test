import { useState } from "react";
import { Login } from "../../components/login/login";

export function Main(): JSX.Element {
  const auth = true;
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOpenChatClick = () => {
    console.log(phoneNumber);
  };
  return (
    <div className="main__container">
      {!auth ? (
        <Login />
      ) : (
        <>
          <h2>Введите номер собеседника</h2>
          <input
            type="text"
            placeholder="номер телефона"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
          <button className="open__chat" onClick={handleOpenChatClick}>
            Открыть чат
          </button>
        </>
      )}
    </div>
  );
}
