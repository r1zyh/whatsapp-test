import { Dispatch } from "react";
import { TChatAction } from "./chat-types";
import { apiUrl } from "@/const";
import { TUser } from "@/type";

export const deleteNotification = async (
  user: TUser,
  dispatch: Dispatch<TChatAction>,
  receiptId: number
) => {
  await fetch(
    `{${apiUrl}}/waInstance{${user.login}}/deleteNotification/{${user.token}}/{${receiptId}}`,
    { method: "DELETE" }
  );

  dispatch({ type: "DELETE_NOTIFICATION", payload: { receiptId } });
};
