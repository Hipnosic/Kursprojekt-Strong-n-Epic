import { Session } from "../../types/Session";

interface SessionItemFieldProps {
  session: Session;
  registerd: number;
}

const SessionItemField: React.FC<SessionItemFieldProps> = ({ session, registerd }) => {
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
    </div>
  );
};

export default SessionItemField;
