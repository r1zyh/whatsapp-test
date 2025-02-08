import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import { AuthProvider } from "@components/providers/auth-provider/auth-provider";
import { Main } from "@pages/main/main";
import { Chat } from "@pages/chat/chat";
import { ChatProvider } from "../providers/chat-provider/chat-provider";

export default function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.Main} element={<Main />} />
            <Route path={AppRoute.Chat} element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </AuthProvider>
  );
}
