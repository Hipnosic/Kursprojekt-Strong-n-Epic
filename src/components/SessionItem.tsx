import { useState, useEffect } from "react";
import { Session } from "../types/Session";
import cacheService from "../service/CacheService";
import requestService from "../service/requestService";

interface SessionItemProps {
  session: Session;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
}

const SessionItem: React.FC<SessionItemProps> = ({ session, setUpdate }) => {
  const [spot] = useState<number>(session.spots);
  const [registerds, setRegistereds] = useState<number>(session.registered.length);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [username] = useState<string>(cacheService.getLocalValue("USER").username);
  const userRole = cacheService.getLocalValue("USER").role;

  useEffect(() => {
    const isRegisterd = session.registered.find((user) => user.username === username);
    if (isRegisterd !== undefined) {
      setIsBooked(true);
    }
  }, [session.registered, username]);

  const handleDelete = async () => {
    const response = await requestService.deleteSession(session.id);
    console.log(await response.json());
    setUpdate(session.id);
  };

  const handleBooking = async () => {
    const quary = {
      username: username,
      title: session.title,
    };
    const res = await requestService.bookSession(quary);
    if (res.status >= 400) {
      return false;
    } else {
      const data = (await res.json()) as Session;
      setIsBooked(true);
      setRegistereds(data.registered.length);
    }
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
        {isBooked ? (
          <button disabled>already booked</button>
        ) : registerds !== spot ? (
          <button onClick={handleBooking}>Book</button>
        ) : (
          <button disabled>Fully Booked</button>
        )}
      </>
      {userRole === "ADMIN" && (
        <button className="remove-session-btn" onClick={handleDelete}>
          Remove
        </button>
      )}
    </div>
  );
};
export default SessionItem;
