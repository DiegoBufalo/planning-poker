import React, { createContext, useContext, useState } from "react";
import { io } from "socket.io-client";
import { RoomContextType, RoundVotes, UserPlaying } from "../../Types";
import UserContext from "../user";

type PropsRoomContext = {
    roomContext: RoomContextType;
    createRoom(roomId: string, gameType: string, owner: UserPlaying): void;
    insertNewUser(player: UserPlaying): void;
    saveVotedRound(round: RoundVotes): void;
    isUserInRoom(): boolean;
}

const DEFAULT_VALUE = {
    roomContext: {
        roomId: "",
        ownerId: "",
        gameType: "",
        users: [],
        rounds: []
    } as RoomContextType,
    createRoom: () => { },
    insertNewUser: () => { },
    saveVotedRound: () => { },
    isUserInRoom: () => false
}

const RoomContext = createContext<PropsRoomContext>(DEFAULT_VALUE);

type RoomProviderProps = {
    children: React.ReactNode;
}

const RoomContextProvider = (props: RoomProviderProps) => {
    const [roomContext, setRoomContext] = useState(DEFAULT_VALUE.roomContext);
    const { userContext } = useContext(UserContext);

    const createRoom = (roomId: string, gameType: string, owner: UserPlaying) => {
        setRoomContext({
            roomId: roomId,
            ownerId: owner.userId,
            gameType: gameType,
            users: [owner],
            rounds: []
        } as RoomContextType);
    }

    //TODO: Mandar para o servidor
    const insertNewUser = (player: UserPlaying) => {
        setRoomContext({
            ...roomContext,
            users: [...roomContext.users, player]
        })
        const socket = io(`ws://localhost:3000/sala/${roomContext.roomId}`);
        socket.emit("att-room", "new-player");
    };

    //TODO: mandar para o servidor
    const saveVotedRound = (round: RoundVotes) => (
        setRoomContext({
            ...roomContext,
            rounds: [...roomContext.rounds, round]
        })
    );

    const isUserInRoom = (): boolean => {
        return roomContext.users.find(x => x.userId === userContext.userId) !== undefined;
    }

    return (
        <RoomContext.Provider
            value={{
                roomContext,
                createRoom,
                insertNewUser,
                saveVotedRound,
                isUserInRoom
            }}
        >
            {props.children}
        </RoomContext.Provider>
    )
}

export { RoomContextProvider };
export default RoomContext;
