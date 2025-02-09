import { useState } from "react";
import { useAuth } from "@components/providers/auth-provider/useAuth";
import { TUser } from "../../type";
import styles from "./login.module.css";

export function Login(): JSX.Element {
  const { login } = useAuth();
  const [formData, setFormData] = useState<TUser>({
    login: "",
    token: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isUserValid = ({ login, token }: TUser) => {
    if (!login || !token) {
      throw new Error("Unable to set user data, some info might be missing");
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isUserValid(formData)) {
        login(formData);
        setFormData({ login: "", token: "" });
      }
      console.log(formData);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      } else {
        console.error("An unexpected error occurred", error);
        alert("Oops, something went wrong");
      }
    }
  };

  return (
    <div className={styles.login__container}>
      <h2 className={styles.title}>Введи данные инстанса</h2>
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit}
        className={styles.login__form}
      >
        <input
          className={styles.form__input}
          type="text"
          name="login"
          placeholder="idInstance"
          value={formData.login}
          onChange={handleChange}
          required
        />
        <input
          className={styles.form__input}
          type="password"
          name="token"
          placeholder="token"
          value={formData.token}
          onChange={handleChange}
          required
        />
        <button className={styles.entry} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
