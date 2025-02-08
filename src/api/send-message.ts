import { Dispatch } from "react";
import { TChatAction, TMessage } from "./chat-types";
import { TUser } from "type";
import { apiUrl } from "@/const";

export const sendMessage = async (
  dispatch: Dispatch<TChatAction>,
  user: TUser,
  phoneNumber: number,
  text: string
) => {
  const message: TMessage = {
    chatId: `${phoneNumber}@c.us`,
    message: text,
  };

  dispatch({ type: "SEND_MESSAGE", payload: message });

  await fetch(
   `${apiUrl}/waInstance${user.login}/sendMessage/${user.token}`,
    {
      method: "POST",
      body: JSON.stringify({
        chatId: `${phoneNumber}@c.us`,
        message: text,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
};
