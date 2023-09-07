import { Session } from './Session'

export interface UserInfo {
    id: number;
    username: string;
    password: string;
    role: "ADMIN" | "USER";
    sessions: Session[];
}

export interface LoginInterface {
    username: string;
    password: string;
}