
export type UserType = {
    userId: string;
    userName: string;
    gameInfo: GameInfo | undefined;
}

export type GameInfo = {
    isSpectating: boolean;
    roomId: string;
}

export type UserPlaying = {
    userId: string;
    userName: string;
    isSpectating: boolean;
}

export type RoundVotes = {
    issueVoted: string;
    userId: string;
    pickedCard: string;
}

export type RoomContextType = {
    roomId: string;
    ownerId: string;
    gameType: string;
    users: UserPlaying[];
    rounds: RoundVotes[];
}