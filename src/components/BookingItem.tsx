import React from "react";
import { SessionList } from "../types/Session";
import requestService from "../service/requestService";

interface BookingItemProps {
  session: SessionList;
  username: string;
}

const BookingItem: React.FC<BookingItemProps> = ({ session, username }) => {
  const handleUnBooking = async () => {
    const res = await requestService.removeBooking(session.id, username);
    console.log(await res.json());
  };

  return (
    <div>
      <h5>{session.title}</h5>
      <p>{session.trainer}</p>
      <p>Starttid: {session.start}</p>
      <p>Sluttid: {session.end}</p>
      <p>Datum: {session.date}</p>
      <button onClick={handleUnBooking}>Unbook</button>
    </div>
  );
};

export default BookingItem;
