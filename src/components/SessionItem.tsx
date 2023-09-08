import { useState, useEffect } from "react";
import { Session } from "../types/Session";
import cacheService from "../service/CacheService";
import requestService from "../service/requestService";

interface SessionItemProps {
  session: Session;
}

const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
  const [spot] = useState<number>(session.spots);
  const [registerds, setRegistereds] = useState<number>(session.registered.length);
  const [isBooked, setIsBooked] = useState<boolean>(false);

  useEffect(() => {
    const userData = cacheService.getLocalValue("USER");

    const isRegisterd = session.registered.find((user) => user.username === userData.username);
    if (isRegisterd !== undefined) {
      setIsBooked(true);
    }
  }, [session.registered]);

  const handleBooking = async () => {
    const quary = {
      username: cacheService.getLocalValue("USER").username,
      title: session.title,
    };
    const res = await requestService.bookSession(quary);

    console.log(res);
  };

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

      <>
        {(isBooked && <button disabled>already booked</button>) || (registerds !== spot && <button onClick={handleBooking}>Book</button>) || (
          <button disabled>Fully Booked</button>
        )}
      </>
    </div>
  );
};
export default SessionItem;
