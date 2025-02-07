import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import { Main } from "../../pages/main/main";
import { Chat } from "../../pages/chat/chat";
import { AuthProvider } from "../providers/auth-provider/auth-provider";

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
