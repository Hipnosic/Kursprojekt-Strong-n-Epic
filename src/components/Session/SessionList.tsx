import { useState } from "react";
import SessionItem from "./SessionItem";
import AddSessionComponent from "./AddSessionItem";
import { UserRole } from "../../types/UserTypes";
import useQuarySession from "../../hooks/useQuarySessions";
interface SessionListProps {
  userData: {
    username: string;
    role: UserRole;
  };
}

const SessionList: React.FC<SessionListProps> = ({ userData }) => {
  const [update, setUpdate] = useState<number>(0);
  const [dateSearch, setDateSearch] = useState<string>("");
  const { isLoading, error, data } = useQuarySession(dateSearch, update);

  const [showAddSession, setShowAddSession] = useState<boolean>(false); // State for managing form visibility

  const toggleSessionAdd = () => {
    setShowAddSession(!showAddSession); // Toggle form visibility
  };

  return (
    <>
      {userData.role === "ADMIN" && <button onClick={toggleSessionAdd}>Add Session</button>}
      {showAddSession && <AddSessionComponent setUpdate={setUpdate} />} {/* Conditional rendering of the form */}
      <input type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateSearch(e.target.value)} />
      <button onClick={() => setDateSearch("")}>Clear Filter</button>
      {(error && <p>404 could not found</p>) ||
        (isLoading && <p>loading...</p>) ||
        (data?.length === 0 && <p>There is no session on {dateSearch}</p>) ||
        data?.map((session, i) => <SessionItem userData={userData} key={i} session={session} setUpdate={setUpdate} />)}
    </>
  );
};

export default SessionList;
