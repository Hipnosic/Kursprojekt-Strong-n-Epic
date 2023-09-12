import { useState } from "react";
import useQuaryUser from "../hooks/useQuaryUser";
import { UserRole } from "../types/UserTypes";
import BookingItem from "./BookingItem";

interface bookingListProps {
  user: {
    username: string;
    role: UserRole;
  };
}

interface Session {
  id: string;
}

const BookingList: React.FC<bookingListProps> = ({ user }) => {
  //   const [update, setUpdate] = useState<number>(0);
  const { loading, err, userData } = useQuaryUser(user.username);
  const [unbookedSessions, setUnbookedSessions] = useState<string[]>([]);

  const handleUnbook = (sessionId: string) => {
    setUnbookedSessions((prevSessions) => [...prevSessions, sessionId]);
  };

  return (
    <>
      {(err && <p>404 could not found</p>) ||
        (loading && <p>loading...</p>) ||
        (userData?.sessions.map((session, i) => (
          <div key={i}>
            <BookingItem session={session} />
            {!unbookedSessions.includes(session.id) && (
              <button onClick={() => handleUnbook(session.id)}>Unbook</button>
            )}
          </div>
        )))}
    </>
  );
};
export default BookingList;