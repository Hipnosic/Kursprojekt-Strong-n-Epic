import { UserInfo } from "./UserTypes";

export interface Session {
  title: string;
  trainer: string;
  start: number;
  end: number;
  date: string;
  spots: number;
  registerd: UserInfo[];
}
