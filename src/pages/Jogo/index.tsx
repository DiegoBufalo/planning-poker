import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { Modal } from "../../components/Modal";
import RoomContext from "../../context/room";
import UserContext from "../../context/user";
import { mockUsersPlaying } from "../../mock";
import { UserPlaying } from "../../Types";
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

    //temp
    const fibonacciSequence = ['0', '½', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?']

    //contexts
    const { enterRoom, isUserLogged, isUserPlaying, userContext } = useContext(UserContext);
    const { roomContext, isUserInRoom, insertNewUser } = useContext(RoomContext);

    //hooks
    const navigate = useNavigate();
    const { roomId } = useParams();

    //states
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');
    const [usersPlaying, setUsersPlaying] = useState<UserPlaying[]>(mockUsersPlaying());

    // definição de posição na table
    const [topSeat, setTopSeat] = useState<UserPlaying[]>([]);
    const [bottomSeat, setBottomSeat] = useState<UserPlaying[]>([]);
    const [LeftSeat, setLeftSeat] = useState<UserPlaying[]>([]);
    const [rightSeat, setRightSeat] = useState<UserPlaying[]>([]);

    const socket = io(`ws://localhost:3000/sala/${roomId}`);
    socket.on("att-room", (...args) => {
        console.log(args);
    });

    useEffect(() => {
        if (!isUserLogged()) { navigate(`/login?redirect=${roomId}`); }
        if (!isUserPlaying()) { setShowModal(true); }
    })


    useEffect(() => {
        let topSeatTemp: UserPlaying[] = [];
        let rightSeatTemp: UserPlaying[] = [];
        let bottomSeatTemp: UserPlaying[] = [];
        let LeftSeatTemp: UserPlaying[] = [];

        usersPlaying
            .filter(value => !value.isSpectating)
            .map((value, index) => {
                if ([0, 4, 6, 8].includes(index)) {
                    topSeatTemp.push(value);
                } else if ([2, 10].includes(index)) {
                    LeftSeatTemp.push(value);
                } else if ([1, 5, 7, 9].includes(index)) {
                    bottomSeatTemp.push(value);
                } else if ([3, 11].includes(index)) {
                    rightSeatTemp.push(value);
                }
            })

        setTopSeat(topSeatTemp);
        setBottomSeat(bottomSeatTemp);
        setLeftSeat(LeftSeatTemp);
        setRightSeat(rightSeatTemp);
    }, [usersPlaying])


    const handleSubmit = (isSpectator: boolean) => {
        enterRoom(roomId!, isSpectator);
        if (!isUserInRoom) {
            insertNewUser({
                userId: userContext.userId,
                userName: userContext.userName,
                isSpectating: isSpectator,
            } as UserPlaying)
        }
        setShowModal(false);
    }

    return (
        <>
            <Container className="container">
                <TableContainer className="table-container">
                    <div />
                    <TopSideTable className="top">
                        {topSeat.map(value => {
                            return (
                                <UserCard id={value.userId} userName={value.userName} />
                            );
                        })}
                    </TopSideTable>
                    <div />
                    <LeftSideTable className="left" >
                        {LeftSeat.map(value => {
                            return (
                                <UserCard key={value.userId} userName={value.userName} />
                            );
                        })}
                    </LeftSideTable>
                    <Table className="table" ></Table>
                    <RightSideTable className="right" >
                        {rightSeat.map(value => {
                            return (
                                <UserCard key={value.userId} userName={value.userName} />
                            );
                        })}
                    </RightSideTable>
                    <div />
                    <BottomSideTable className="bottom" >
                        {bottomSeat.map(value => {
                            return (
                                <UserCard key={value.userId} userName={value.userName} />
                            );
                        })}
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
                <Modal title="O que você será?">
                    <ModalContent className="modal-content">
                        <button
                            className="button-player"
                            type="button"
                            onClick={() => handleSubmit(false)}
                        >
                            <span>Serei um jogador</span>
                        </button>
                        <button
                            className="button-spectator"
                            type="button"
                            onClick={() => handleSubmit(true)}
                        >
                            <span>Serei um espectador</span>
                        </button>
                    </ModalContent>
                </Modal>
            )
            }
        </>
    );
}