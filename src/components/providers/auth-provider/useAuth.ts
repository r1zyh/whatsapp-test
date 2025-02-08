import { useContext } from "react";
import { AuthContext } from "./auth-provider";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be called within AuthProvider");
  }
  return context;
}
