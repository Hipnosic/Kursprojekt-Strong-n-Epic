import { Session } from "../types/Session";

interface SessionItemInputFieldProps {
  session: Session;
}

const SessionItemInputField: React.FC<SessionItemInputFieldProps> = ({ session }) => {
  return (
    <form>
      <div>
        <label>current title {session.title}</label>
        <input type="text" placeholder="Write the new Title" />
      </div>
      <div>
        <label>current trainer {session.trainer}</label>
        <input type="text" placeholder="Write the new Trainer" />
      </div>
      <div>
        <label>current start time {session.start}</label>
        <input type="datetime-local" />
      </div>
      <div>
        <label>current end time {session.end}</label>
        <input type="datetime-local" />
      </div>
      <div>
        <label>current date {session.date}</label>
        <input type="date" />
      </div>
      <div>
        <label>current spots {session.spots}</label>
        <input type="number" />
      </div>
    </form>
  );
};

export default SessionItemInputField;
