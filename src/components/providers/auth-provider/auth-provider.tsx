import { createContext, ReactNode, useState } from "react";
import { TUser } from "../../../type";

type TAuthContext = {
  user: TUser | null;
  login: (user: TUser | null) => void;
  isLogged: boolean;
  phone: string;
  myPhone: string;
  handleSetPhone: (value1: string, value2: string) => void;
};

type TAuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<TAuthContext | null>(null);

export function AuthProvider({ children }: TAuthProviderProps) {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [phone, setPhone] = useState("");
  const [myPhone, setMyPhone] = useState("");

  const handleSetPhone = (value1: string, value2: string) => {
    setPhone(value1);
    setMyPhone(value2);
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
      value={{ user, login, isLogged, phone, myPhone, handleSetPhone }}
    >
      {children}
    </AuthContext.Provider>
  );
}
