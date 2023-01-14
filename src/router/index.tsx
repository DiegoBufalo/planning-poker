import { Route, Routes } from "react-router-dom";
import { CriarJogo } from "../components/CreateGame";
import { Home } from "../pages/home";

export const Roteador = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-jogo" element={<CriarJogo />} />

        <Route path="*" element={<h1>Quer um mapa? Porque acho que você se perdeu</h1>} />
      </Routes>
  );
};
