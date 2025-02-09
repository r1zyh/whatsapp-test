import { Dispatch } from "react";
import { TChatAction } from "./chat-types";
import { apiUrl } from "@/const";
import { TUser } from "@/type";

export const deleteNotification = async (
  user: TUser,
  dispatch: Dispatch<TChatAction>,
  receiptId: number
) => {
  try {
    const response = await fetch(
      `${apiUrl}/waInstance${user.login}/deleteNotification/${user.token}/${receiptId}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    dispatch({ type: "DELETE_NOTIFICATION", payload: { receiptId } });
  } catch (error) {
    console.error("Some bad network, failed to delete notification");
  }
};
