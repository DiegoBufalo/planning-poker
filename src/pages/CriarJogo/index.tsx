import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Input } from "../../components/Input";
import { Container } from "./styles";


export const CriarJogo = () => {
    const [nomeSala, setNomeSala] = useState("");
    const navigate = useNavigate();
    const uuid = uuidv4();

    return (
        <Container>
            <h2>Novo jogo </h2>
            <h3>Defina o nome e um sistema de votação para seu jogo</h3>

            <Input setValue={setNomeSala} placeHolder='Nome da sala' />
            <select name="select" onChange={(event) => console.log(event.target)}>
                <option className="opcao" value="fibonacci">Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... )</option>
            </select>
            <button type="submit" className="criar" onClick={() => navigate(`/jogo/${uuid}`)}>
                <span>Criar Jogo</span>
            </button>
        </Container>
    );
}