export type TMessage = {
  chatId: string;
  message: string;
  sender?: string;
};

export type TNotification = {
  receiptId: number;
  body: {
    typeWebhook: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      sender: string;
      senderName: string;
      senderContactName: string;
    };
    messageData: {
      typeMessage: string;
      textMessageData: {
        textMessage: string;
      };
    };
  };
};

type TDeleteNotification = {
  receiptId: number;
};

export type TChatState = {
  messages: TMessage[];
  notifications: TNotification[];
  isLoading: boolean;
  isError: boolean;
};

export type TChatAction =
  | { type: "SEND_MESSAGE"; payload: TMessage }
  | { type: "RECEIVE_NOTIFICATION"; payload: TNotification }
  | { type: "DELETE_NOTIFICATION"; payload: TDeleteNotification }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: boolean }
  | { type: "SAVE_MESSAGE_FROM_NOTIFICATION"; payload: TNotification };
