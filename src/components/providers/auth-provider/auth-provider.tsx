import { createContext, ReactNode, useState } from "react";
import { TUser } from "../../../type";

type TAuthContext = {
  user: TUser | null;
  login: (user: TUser) => void;
  isLogged: boolean;
};

type TAuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<TAuthContext | null>(null);

export function AuthProvider({ children }: TAuthProviderProps) {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const login = ({ user }: TUser) => {
    setUser({ user });
    setIsLogged(true);
  };

  return (
    <AuthContext.Provider value={{ user, login, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}
