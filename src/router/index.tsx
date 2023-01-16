import { Route, Routes } from "react-router-dom";
import { CriarJogo } from "../pages/CriarJogo";
import { Home } from "../pages/Home";
import { Jogo } from "../pages/Jogo";
import { LoginPage } from "../pages/Login";

export const Roteador = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novo-jogo" element={<CriarJogo />} />
      <Route path="/sala/:roomId" element={<Jogo />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<h1>Quer um mapa? Porque acho que você se perdeu</h1>} />
    </Routes>
  );
};
