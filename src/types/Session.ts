import { UserInfo } from "./UserTypes";

export interface SessionList {
  title: string;
  trainer: string;
  start: string;
  end: string;
  date: string;
}

export interface Session {
  id: number;
  title: string;
  trainer: string;
  start: string;
  end: string;
  date: string;
  spots: number;
  registered: UserInfo[];
}

export interface AddSessionData {
  title: string;
  trainer: string;
  start: string; // You might want to change this to a Date object if needed
  end: string;   // You might want to change this to a Date object if needed
  date: string;  // You might want to change this to a Date object if needed
  spots: number; // Number of available spots
}