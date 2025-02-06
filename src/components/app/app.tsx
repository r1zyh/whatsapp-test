import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import { Main } from "../../pages/main/main";
import { Chat } from "../../pages/chat/chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Chat} element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
