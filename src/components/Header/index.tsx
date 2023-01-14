import { GiCardKingClubs } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container className="header">
      <div className="logo">
        <GiCardKingClubs />
      </div>

      <div className="group-buttons">
        <button className="entrar" type="button" onClick={() => navigate('/')}>
          <span>Entrar</span>
        </button>
        <button className="novo-jogo" type="button" onClick={() =>  navigate("/novo-jogo")}>
          <span>Começar novo jogo</span>
        </button>
      </div>
    </Container>
  );
};
