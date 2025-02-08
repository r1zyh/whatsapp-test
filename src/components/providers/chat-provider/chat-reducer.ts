import { TChatAction, TChatState } from "@/api/chat-types";

export const chatReducer = (
  state: TChatState,
  action: TChatAction
): TChatState => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "RECEIVE_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case "DELETE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.receiptId !== action.payload.receiptId
        ),
      };

    default:
      return state;
  }
};
