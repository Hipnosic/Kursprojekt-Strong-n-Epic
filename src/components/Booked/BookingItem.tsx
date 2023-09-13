import { useState } from "react";
import { SessionList } from "../../types/Session";
import UnBookConfirmationBtn from "./UnBookConfirmationBtn";

interface BookingItemProps {
  session: SessionList;
  username: string;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
}

const BookingItem: React.FC<BookingItemProps> = ({ session, username, setUpdate }) => {
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const handleUnBookBtn = () => {
    setConfirmation((confirmation) => !confirmation);
  };

  return (
    <div className="booking-container">
      <h5>{session.title}</h5>
      <p>{session.trainer}</p>
      <p>Starttid: {session.start}</p>
      <p>Sluttid: {session.end}</p>
      <p>Datum: {session.date}</p>
      {(confirmation && <UnBookConfirmationBtn session={session} username={username} setConfirmation={setConfirmation} setUpdate={setUpdate} />) || (
        <button onClick={handleUnBookBtn}>Unbook</button>
      )}
    </div>
  );
};

export default BookingItem;
