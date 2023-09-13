import { useState, useEffect } from "react";
import SessionItemField from "./SessionItemField";
import SessionItemInputForm from "./SessionItemForm";
import SessionItemAdminBtn from "./SessionItemAdminBtn";
import { UserRole } from "../../types/UserTypes";
import { Session } from "../../types/Session";
import BookConfirmationBtn from "./BookConfirmationBtn";

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
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const handleBookBtn = () => {
    setConfirmation((confirmation) => !confirmation);
  };

  useEffect(() => {
    const isRegisterd = session.registered.find((user) => user.username === userData.username);
    if (isRegisterd !== undefined) {
      setIsBooked(true);
    }
  }, [session.registered, userData]);

  return (
    <div className="Container">
      {(!edit && <SessionItemField session={session} registerd={registerd} userData={userData}/>) || (
        <SessionItemInputForm session={session} setEdit={setEdit} setUpdate={setUpdate} />
      )}

      {(confirmation && (
        <BookConfirmationBtn
          session={session}
          user={userData}
          setConfirmation={setConfirmation}
          setIsBooked={setIsBooked}
          setRegistered={setRegistered}
        />
      )) || (
        <>
          {!edit &&
            ((isBooked && <button disabled>already booked</button>) || (registerd === spot && <button disabled>Fully Booked</button>) || (
              <button onClick={handleBookBtn}>Book</button>
            ))}
        </>
      )}

      {userData.role === "ADMIN" && <SessionItemAdminBtn setUpdate={setUpdate} session={session} setEdit={setEdit} edit={edit} />}
    </div>
  );
};
export default SessionItem;
