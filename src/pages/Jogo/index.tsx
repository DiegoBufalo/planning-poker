import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import {
    BottomSideTable,
    Card,
    Container,
    LeftSideTable,
    ModalContent,
    OptionsCards,
    RightSideTable,
    Table,
    TableContainer,
    TopSideTable,
    UserCard
} from "./style";




export const Jogo = () => {
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [isSpectator, setIsSpectator] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const fibonacciSequence = ['0', '½', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?']
    const [selectedCard, setSelectedCard] = useState('');

    const handleSubmit = () => {
        const data = {
            idUsuario: uuidv4(),
            nomeUsuario: nomeUsuario,
            isSpectator: isSpectator,
        }

        console.log(data);
    }

    return (
        <>
            <Container className="container">
                <TableContainer className="table-container">
                    <div />
                    <TopSideTable className="top">
                        <UserCard userName="asdsapolmd koasmdiko" />
                        <UserCard userName="asdsapolmd koasmdiko" />
                        <UserCard userName="user 1" />
                        <UserCard userName="user 1" />
                    </TopSideTable>
                    <div />
                    <LeftSideTable className="left" >
                        <UserCard userName="user 1" />
                        <UserCard userName="user 1" />
                    </LeftSideTable>
                    <Table className="table" ></Table>
                    <RightSideTable className="right" >
                        <UserCard userName="user 1" />
                        <UserCard userName="user 1" />
                    </RightSideTable>
                    <div />
                    <BottomSideTable className="bottom" >
                        <UserCard userName="user 1" />
                        <UserCard userName="user 1" />
                        <UserCard userName="user 1" />
                        <UserCard userName="user 1" />
                    </BottomSideTable>
                    <div />
                </TableContainer>
                <OptionsCards>
                    {fibonacciSequence.map(value => {
                        return (
                            <Card
                                className={`${value === selectedCard ? 'selected' : ''}`}
                                type="button"
                                value={value}
                                onClick={(() => {
                                    if (value === selectedCard) {
                                        setSelectedCard('')
                                    } else setSelectedCard(value)
                                })}
                            />
                        );
                    })}
                </OptionsCards>
            </Container>
            {showModal && (
                <Modal title="Defina seu nome para o jogo">
                    <ModalContent>
                        <Input adptativeSize setValue={setNomeUsuario} placeHolder='Defina seu apelido' />
                        <div className="spec-button">
                            <label className="switch">
                                <input type="checkbox" checked={isSpectator} onChange={() => setIsSpectator(!isSpectator)} />
                                <span className="slider round"></span>
                            </label>
                            <span className="spec">Juntar-se como espectador</span>
                        </div>
                        <button
                            className="start-game"
                            type="button"
                            onClick={() => {
                                handleSubmit();
                                setShowModal(false);
                            }}
                        >
                            <span>Começar o jogo</span>
                        </button>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}