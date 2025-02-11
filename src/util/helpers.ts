import { TUser } from "@/type";

export const isUserValid = ({ apiUrl, login, token }: TUser) => {
  if (!login || !token || !apiUrl) {
    throw new Error("Unable to set user data, some info might be missing");
  }
  return true;
};

export const formatPhoneNumber = (phone: string) => {
  return phone.startsWith("8") ? "7" + phone.slice(1) : phone;
};
