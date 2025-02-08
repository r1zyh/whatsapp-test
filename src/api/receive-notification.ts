import { Dispatch } from "react";
import { TChatAction } from "./chat-types";
import { TUser } from "@/type";
import { apiUrl } from "@/const";

export const receiveMessage = async (
  user: TUser,
  timeout: number,
  dispatch: Dispatch<TChatAction>
) => {
  try {
    const response =
      await fetch(`{${apiUrl}}/waInstance{${user.login}}/receiveNotification/{${user.token}}?receiveTimeout={${timeout}}
`);

    if (!response.ok) {
      console.error("Ошибка при получении уведомлений", response.status);
      return;
    }
    const data = await response.json();
    dispatch({ type: "RECEIVE_NOTIFICATION", payload: data });
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
