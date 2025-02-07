import { useState } from "react";
import { useAuth } from "@components/providers/auth-provider/useAuth";
import { TUser } from "../../type";
import styles from "./login.module.css";

export function Login(): JSX.Element {
  const { login } = useAuth();
  const [formData, setFormData] = useState<TUser>({
    user: { login: "", token: "" },
  });

  const { user } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const isUserValid = ({ user }: TUser) => {
    if (!user.login || !user.token) {
      throw new Error("Unable to set user data, some info might be missing");
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isUserValid(formData)) {
        login(formData);
        setFormData({ user: { login: "", token: "" } });
      }
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
      <form onSubmit={handleSubmit} className={styles.login__form}>
        <input
          className={styles.form__input}
          type="text"
          name="login"
          placeholder="idInstance"
          value={user.login}
          onChange={handleChange}
          required
        />
        <input
          className={styles.form__input}
          type="text"
          name="token"
          placeholder="token"
          value={user.token}
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
