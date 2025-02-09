import { createContext, ReactNode, useState } from "react";
import { TUser } from "../../../type";

type TAuthContext = {
  user: TUser | null;
  login: (user: TUser | null) => void;
  isLogged: boolean;
  phone: string;
  handleSetPhone: (value: string) => void;
};

type TAuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<TAuthContext | null>(null);

export function AuthProvider({ children }: TAuthProviderProps) {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSetPhone = (value: string) => {
    setPhone(value);
  };

  const login = (user: TUser | null) => {
    if (!user || user === null) {
      setUser(null);
      setIsLogged(false);
    } else {
      setUser(user);
      setIsLogged(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, isLogged, phone, handleSetPhone }}
    >
      {children}
    </AuthContext.Provider>
  );
}
