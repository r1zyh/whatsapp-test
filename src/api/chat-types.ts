export type TMessage = {
  chatId: string;
  message: string;
};

type TNotification = {
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
};

export type TChatAction =
  | { type: "SEND_MESSAGE"; payload: TMessage }
  | { type: "RECEIVE_NOTIFICATION"; payload: TNotification }
  | { type: "DELETE_NOTIFICATION"; payload: TDeleteNotification };
