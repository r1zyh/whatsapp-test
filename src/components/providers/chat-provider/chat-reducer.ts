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
    case "SAVE_MESSAGE_FROM_NOTIFICATION": {
      const { textMessage } = action.payload.body.messageData.textMessageData;
      const { chatId } = action.payload.body.senderData;
      const { sender } = action.payload.body.senderData;

      return {
        ...state,
        messages: [...state.messages, { chatId, message: textMessage, sender }],
      };
    }
    case "DELETE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.receiptId !== action.payload.receiptId
        ),
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
