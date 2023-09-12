import React from "react";
import { SessionList } from "../types/Session";

interface BookingItemProps {
  session: SessionList;
}

const BookingItem: React.FC<BookingItemProps> = ({ session }) => {
  return (
    <div>
      <h5>{session.title}</h5>
      <p>{session.trainer}</p>
      <p>Starttid: {session.start}</p>
      <p>Sluttid: {session.end}</p>
      <p>Datum: {session.date}</p>
    </div>
  );
};

export default BookingItem;
