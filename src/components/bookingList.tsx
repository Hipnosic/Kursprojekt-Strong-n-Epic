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
const BookingList: React.FC<bookingListProps> = ({ user }) => {
  //   const [update, setUpdate] = useState<number>(0);
  const { loading, err, userData } = useQuaryUser(user.username);

  return (
    <>
      {(err && <p>404 could not found</p>) ||
        (loading && <p>loading...</p>) ||
        userData?.sessions.map((session, i) => <BookingItem session={session} key={i} />)}
    </>
  );
};

export default BookingList;