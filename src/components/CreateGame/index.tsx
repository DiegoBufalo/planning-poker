import { useState } from "react";
import { Container } from "./styles";


export const CriarJogo = () => {
    const [nomeSala, setNomeSala] = useState("");

    return (
        <Container>
            <h2>Novo jogo </h2>
            <h3>Defina o nome e um sistema de votação para seu jogo</h3>

            <input type="text" onChange={(event) => setNomeSala(event.target.value)} placeholder='Nome da sala' />
            <select name="select" onChange={(event) => console.log(event.target)}>
                <option className="opcao" value="fibonacci">Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... )</option>
            </select>
            <button type="submit" className="criar">
                <span>Criar Jogo</span>
            </button>
        </Container>
    );
}