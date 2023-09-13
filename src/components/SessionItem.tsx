import { useState, useEffect } from "react";
import { Session } from "../types/Session";
import requestService from "../service/requestService";
import { UserRole } from "../types/UserTypes";
import SessionItemField from "./SessionItemField";
import SessionItemInputForm from "./SessionItemForm";
import SessionItemAdminBtn from "./SessionItemAdminBtn";

interface SessionItemProps {
  session: Session;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
  userData: {
    username: string;
    role: UserRole;
  };
}

const SessionItem: React.FC<SessionItemProps> = ({ session, setUpdate, userData }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [spot] = useState<number>(session.spots);
  const [registerd, setRegistered] = useState<number>(session.registered.length);
  const [isBooked, setIsBooked] = useState<boolean>(false);

  useEffect(() => {
    const isRegisterd = session.registered.find((user) => user.username === userData.username);
    if (isRegisterd !== undefined) {
      setIsBooked(true);
    }
  }, [session.registered, userData]);

  const handleBooking = async () => {
    const quary = {
      username: userData.username,
      title: session.title,
    };
    const res = await requestService.bookSession(quary);
    if (res.status >= 400) {
      return false;
    } else {
      const data = (await res.json()) as Session;
      setIsBooked(true);
      setRegistered(data.registered.length);
    }
  };

  return (
    <div className="Container">
      {(!edit && <SessionItemField session={session} registerd={registerd} userData={userData}/>) || (
        <SessionItemInputForm session={session} setEdit={setEdit} setUpdate={setUpdate} />
      )}

      {!edit &&
        ((isBooked && <button disabled>already booked</button>) || (registerd === spot && <button disabled>Fully Booked</button>) || (
          <button onClick={handleBooking}>Book</button>
        ))}

      {userData.role === "ADMIN" && <SessionItemAdminBtn setUpdate={setUpdate} session={session} setEdit={setEdit} edit={edit} />}
    </div>
  );
};
export default SessionItem;
