import { SessionList } from './Session'

export type UserRole = "ADMIN" | "USER"

export interface UserInfo {
    id: number;
    username: string;
    password: string;
    email: string;
    role: UserRole;
    sessions: SessionList[];
}

export interface LoginInterface {
    username: string;
    password: string;
}

export interface signupInterface {
    username: string;
    password: string;
    email: string;
}