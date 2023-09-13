import { useState } from "react";
import { Session } from "../types/Session";
import { UserRole } from "../types/UserTypes";

interface SessionItemFieldProps {
  session: Session;
  registerd: number;
  userData: {
    role: UserRole;
  };
}

const SessionItemField: React.FC<SessionItemFieldProps> = ({ session, registerd, userData }) => {
  return (
    <div>
      <h5>{session.title}</h5>
      <p>{session.trainer}</p>
      <p>Starttid: {session.start}</p>
      <p>Sluttid: {session.end}</p>
      <p>Datum: {session.date}</p>
      <p>
        Antal platser:{registerd}/{session.spots}
      </p>
      {userData.role === "ADMIN" && (
        <p>
          Registrerade användare:{" "}
          {session.registered.length > 0 ? session.registered.map((user) => user.username).join(", ") : "Inga registrerade användare"}
        </p>
      )}
    </div>
  );
};

export default SessionItemField;
