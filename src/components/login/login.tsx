import { useState } from "react";

export function Login(): JSX.Element {
  const [formData, setFormData] = useState({ login: "", token: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.login && formData.token) {
      console.log(formData);
      setFormData({ login: "", token: "" });
    }
  };

  return (
    <div className="login__container">
      <h2 className="title">Введи данные инстанса</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login"
          type="text"
          name="login"
          placeholder="idInstance"
          value={formData.login}
          onChange={handleChange}
          required
        />
        <input
          className="token"
          type="text"
          name="token"
          placeholder="token"
          value={formData.token}
          onChange={handleChange}
          required
        />
        <button className="entry" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
