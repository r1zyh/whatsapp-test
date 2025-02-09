import { Dispatch } from "react";
import { TChatAction, TChatState, TNotification } from "./chat-types";
import { TUser } from "@/type";
import { apiUrl } from "@/const";
import { deleteNotification } from "./delete-notification";

export const receiveMessage = async (
  user: TUser,
  timeout: number,
  dispatch: Dispatch<TChatAction>,
  state: TChatState
) => {
  if (state.isLoading) {
    console.log("request(pending)...");
    return;
  }

  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const response = await fetch(
      `${apiUrl}/waInstance${user.login}/receiveNotification/${user.token}?receiveTimeout=${timeout}`
    );

    if (!response.ok) {
      console.error("Ошибка при получении уведомлений", response.status);
      return;
    }
    const data: TNotification | null = await response.json();

    if (data !== null && data !== undefined) {
      dispatch({ type: "RECEIVE_NOTIFICATION", payload: data });
      dispatch({ type: "SAVE_MESSAGE_FROM_NOTIFICATION", payload: data });

      await deleteNotification(user, dispatch, data.receiptId);
    } else {
      console.warn("Incoming data is null or undefined");
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      console.error(error.message);
    } else {
      alert("Oops, something went wrong");
      console.error("An unexpected error occurred", error);
    }
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};
