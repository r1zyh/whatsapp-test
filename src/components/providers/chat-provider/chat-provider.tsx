import { TChatAction, TChatState } from "@/api/chat-types";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { chatReducer } from "./chat-reducer";

export const ChatContext = createContext<{
  state: TChatState;
  dispatch: Dispatch<TChatAction>;
} | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(chatReducer, {
    messages: [],
    notifications: [],
    isLoading: false,
    isError: false,
  });

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
