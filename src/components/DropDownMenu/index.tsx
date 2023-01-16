import { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/user";
import { Container } from "./styles";

type DropDownMenuProps = {
    onMouseLeave(): void;
}

export const DropDownMenu = ({ onMouseLeave }: DropDownMenuProps) => {
    const navigate = useNavigate();
    const { userContext, userLogout } = useContext(UserContext);

    const handleLogout = () => {
        const element = document.getElementsByClassName('drop-down')[0];
        element.classList.remove("show");
        userLogout();
        navigate('/');
    }

    return (
        <Container onMouseLeave={() => onMouseLeave()} >
            <div className="actions">
                <div className="logout">
                    <FiLogOut />
                    <span onClick={() => handleLogout()}>Desconectar-se</span>
                </div>
            </div>
        </Container >
    )
}