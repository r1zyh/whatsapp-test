import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import { AuthProvider } from "@components/providers/auth-provider/auth-provider";
import { Main } from "@pages/main/main";
import { Chat } from "@pages/chat/chat";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Chat} element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
