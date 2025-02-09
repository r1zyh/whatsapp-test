import styles from "./chat.module.css";

export const getClassForSender = (
  senderNumber: string | undefined,
  myNumber: string
) => {
  if (!senderNumber) {
    return styles.sent;
  }
  const phoneNumberFromString = senderNumber.split("@")[0];

  return phoneNumberFromString !== myNumber ? styles.received : "";
};
