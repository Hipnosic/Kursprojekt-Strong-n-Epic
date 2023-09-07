import { Session } from "../types/Session";

const fetchSession = async (): Promise<Session[]> => {
  const response = await fetch("api/session");
  if (response === null) throw new Error("could not find session list");
  const data = await response.json();

  return data as Session[];
};

const requestService = { fetchSession };

export default requestService;
