import { useContext } from "react";
import { ChatContext } from "./chat-provider";

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be called within ChatProvider");
  }

  return context;
};
