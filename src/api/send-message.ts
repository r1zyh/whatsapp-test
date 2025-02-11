import { Dispatch } from "react";
import { TChatAction, TMessage } from "./chat-types";
import { TUser } from "type";

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

  try {
    const response = await fetch(
      `${user.apiUrl}/waInstance${user.login}/sendMessage/${user.token}`,
      {
        method: "POST",
        body: JSON.stringify({
          chatId: `${phoneNumber}@c.us`,
          message: text,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    dispatch({ type: "SEND_MESSAGE", payload: message });
  } catch (error) {
    alert("Oops, something went wrong");
    console.error("Some bad network, message was not delivered");
  }
};
