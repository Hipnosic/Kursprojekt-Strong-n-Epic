import { useState } from "react";
import BookingItem from "./BookingItem";
import { UserRole } from "../../types/UserTypes";
import useQuaryUser from "../../hooks/useQuaryUser";

interface bookingListProps {
  user: {
    username: string;
    role: UserRole;
  };
}
const BookingList: React.FC<bookingListProps> = ({ user }) => {
  const [update, setUpdate] = useState<number>(0);
  const { loading, err, userData } = useQuaryUser(user.username, update);

  return (
    <>
      {(err && <p>404 could not found</p>) ||
        (loading && <p>loading...</p>) ||
        userData?.sessions.map((session, i) => <BookingItem session={session} key={i} username={user.username} setUpdate={setUpdate} />)}
    </>
  );
};

export default BookingList;
