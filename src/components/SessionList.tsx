import { useState } from "react";
import { Session } from "../types/Session";
import SessionItem from "./SessionItem";
import useFetchSessions from "../hooks/useFetchSessions"

interface SessionListProps {
  sessions: Session[] | undefined;
}

const SessionList: React.FC<SessionListProps> = ({ sessions }) => {
  const [ update, setUpdate ] = useState<number>(0)
  const { isLoading, error, data } = useFetchSessions(update);
  return (
    <>
      {(error && <p>404 could not found</p>) ||
        (isLoading && <p>loading...</p>) ||
        data?.map((session, i) => <SessionItem key={i} session={session} setUpdate={setUpdate} />)}{" "}
    </>
  );
};

export default SessionList;
