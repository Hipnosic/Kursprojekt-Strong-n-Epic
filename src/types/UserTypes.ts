export interface UserInfo {
    username: string;
    password: string;
    role: "ADMIN" | "USER";
}

export interface LoginInterface {
    username: string;
    password: string;
}