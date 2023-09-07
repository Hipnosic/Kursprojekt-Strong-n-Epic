import { useState } from "react";
import { Session } from "../types/Session";

interface SessionItemProps {
  session: Session;
}

const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
  const [spot] = useState<number>(session.spots);
  const [registerds, setRegistereds] = useState<number>(session.registered.length);

  const handleBooking = async () => {};

  return (
    <div className="Container">
      <h5>{session.title}</h5>
      <p>{session.trainer}</p>
      <p>Starttid: {session.start}</p>
      <p>Sluttid: {session.end}</p>
      <p>Datum: {session.date}</p>
      <p>
        Antal platser:{registerds}/{session.spots}
      </p>

      {registerds !== spot ? <button onClick={handleBooking}>Book</button> : <button>Fully Booked</button>}
    </div>
  );
};
export default SessionItem;
