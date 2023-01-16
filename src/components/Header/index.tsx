import { useContext } from "react";
import { GiCardKingClubs } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../context/user";
import { DropDownMenu } from "../DropDownMenu";
import { Container } from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { isUserLogged, exitRoom, userContext } = useContext(UserContext);

  const handleMenuHover = () => {
    const dropDownMenu = document.getElementsByClassName("drop-down")[0];
    if (dropDownMenu.classList.contains("show")) {
      dropDownMenu.classList.remove("show");
    } else {
      dropDownMenu.classList.add("show");
    }
  }

  const handleMenuOut = () => {
    const dropDownMenu = document.getElementsByClassName("drop-down")[0];
    dropDownMenu.classList.remove("show");
  }

  const handleActionButton = (): JSX.Element => {
    const roomId = sessionStorage.getItem('BPP-roomId');
    const alreadyInARoom = roomId !== null
    if (alreadyInARoom && !location.includes('sala')) {
      return (
        <button className="action-button" type="button" onClick={() => navigate(`/sala/${roomId}`)}>
          <span>Voltar para sala</span>
        </button>
      );
    }

    if (location.includes('sala')) {
      return (
        <button className="action-button" type="button" onClick={() => {
          exitRoom();
          navigate("/");
        }}>
          <span>Sair do jogo</span>
        </button>
      );
    }

    return (
      <button className="action-button" type="button" onClick={() => navigate("/novo-jogo")}>
        <span>Começar novo jogo</span>
      </button>
    );
  }

  return (
    <Container className="header" >
      <div onClick={() => navigate('/')} className="logo">
        <GiCardKingClubs />
      </div>

      <div className="group-buttons">
        <div className="drop-down" onMouseLeave={() => handleMenuOut()}>
          <DropDownMenu
            onMouseLeave={handleMenuOut}
          />
        </div>
        {isUserLogged() ? (
          <button
            className="menu"
            type="button"
            onMouseEnter={() => handleMenuHover()}
          >
            <span>{userContext.userName}</span>
          </button>
        ) : (
          <button className="entrar" type="button" onClick={() => navigate('/login')}>
            <span>Entrar</span>
          </button>
        )
        }
        {handleActionButton()}
      </div >
    </Container >
  );
};
