import { UserInfo } from "./UserTypes";

export interface Session {
  title: string;
  trainer: string;
  start: string;
  end: string;
  date: string;
  spots: number;
  registered: UserInfo[];
}
