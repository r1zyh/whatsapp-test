import { Dispatch } from "react";
import { TChatAction, TChatState, TNotification } from "./chat-types";
import { TUser } from "@/type";
import { deleteNotification } from "./delete-notification";

export const receiveMessage = async (
  user: TUser,
  timeout: number,
  dispatch: Dispatch<TChatAction>,
  state: TChatState
) => {
  if (state.isLoading) {
    return;
  }

  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const response = await fetch(
      `${user.apiUrl}/waInstance${user.login}/receiveNotification/${user.token}?receiveTimeout=${timeout}`
    );

    if (!response.ok) {
      console.error("Unable to fetch Notifications", response.status);
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_ERROR", payload: true });
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
    dispatch({ type: "SET_ERROR", payload: true });
    console.error(error);
    throw new Error("Something went wrong while fetching Notifications");
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};
