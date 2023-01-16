import React, { createContext, useState } from "react";
import { UserType } from "../../Types";
import { clearStorage } from "../../utils/storage";



type PropsUserContext = {
    userContext: UserType;
    userLogin(userName: string, userId: string): void;
    userLogout(): void;
    isUserLogged(): boolean;
    isUserPlaying(): boolean;
    enterRoom(roomId: string, isSpectating: boolean): void;
    exitRoom(): void;
}

const DEFAULT_VALUE = {
    userContext: {
        userId: localStorage.getItem('BPP-userId') || "",
        userName: localStorage.getItem('BPP-userName') || "",
        gameInfo: undefined,
    } as UserType,
    enterRoom: () => { },
    userLogin: () => { },
    userLogout: () => { },
    exitRoom: () => { },
    isUserLogged: () => false,
    isUserPlaying: () => false
}

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);


type UserProviderProps = {
    children: React.ReactNode;
}

const UserContextProvider = (props: UserProviderProps) => {
    const [userContext, setUserContext] = useState(DEFAULT_VALUE.userContext);

    const enterRoom = (roomId: string, isSpectating: boolean) => {
        setUserContext({
            ...userContext,
            gameInfo: {
                roomId: roomId,
                isSpectating: isSpectating
            }
        })

        sessionStorage.setItem('BPP-roomId', roomId);
        sessionStorage.setItem('BPP-isSpectating', `${isSpectating}`);
    }

    const exitRoom = () => {
        setUserContext({
            ...userContext,
            gameInfo: undefined
        })
        sessionStorage.removeItem('BPP-roomId');
        sessionStorage.removeItem('BPP-isSpectating');
    }

    const userLogin = (userName: string, userId: string) => {
        setUserContext({
            ...userContext,
            userId: userId,
            userName: userName
        })

        localStorage.setItem('BPP-userId', userId);
        localStorage.setItem('BPP-userName', userName);
    }

    const userLogout = () => {
        clearStorage();
        setUserContext(DEFAULT_VALUE.userContext);
    }

    const isUserLogged = (): boolean => {
        return userContext.userId !== "" && userContext.userName !== "";
    }

    const isUserPlaying = (): boolean => {
        return userContext.gameInfo !== undefined
            && userContext.gameInfo.roomId !== ""
            && userContext.gameInfo.isSpectating !== undefined;
    }

    return (
        <UserContext.Provider
            value={{
                userContext,
                userLogin,
                userLogout,
                isUserLogged,
                isUserPlaying,
                enterRoom,
                exitRoom
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContextProvider };
export default UserContext;
