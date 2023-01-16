import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Input } from "../../components/Input";
import UserContext from "../../context/user";
import { Container } from "./styles";


export const LoginPage = () => {
    const [userName, setUserName] = useState(`user${new Date().getMilliseconds()}`);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const uuid = uuidv4();

    const { userLogin } = useContext(UserContext);

    const handleLogin = () => {
        userLogin(userName, uuid);

        if (searchParams.has('redirect'))
            navigate(`/sala/${searchParams.get('redirect')}`);
        else navigate('/');
    }

    return (
        <Container>
            <h2>Quem esta jogando </h2>
            <Input setValue={setUserName} placeHolder='Nome da sala' />
            <button type="submit" className="criar" onClick={() => handleLogin()}>
                <span>Entrar</span>
            </button>
        </Container>
    );
}