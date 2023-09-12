import { useState } from "react";
import { Session } from "../types/Session";
import requestService from "../service/requestService";

interface SessionItemInputFormProps {
  session: Session;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

type updateSessionDetails = {
  title: string;
  trainer: string;
  start: string;
  end: string;
  date: string;
  spots: number;
};

const SessionItemInputForm: React.FC<SessionItemInputFormProps> = ({ session, setEdit }) => {
  const [updateSession, setUpdateSession] = useState<updateSessionDetails>({ title: "", trainer: "", start: "", end: "", date: "", spots: 0 });

  const handleUpdateSession = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateSession({ ...updateSession, [e.target.name]: e.target.value });
  };

  const handleCancelBtn = () => {
    setEdit(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await requestService.updateSession(session.id, updateSession);
    console.log(await res.json());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> title: {session.title}</label>
        <input type="text" name="title" placeholder="Write the new Title" onChange={(e) => handleUpdateSession(e)} />
      </div>
      <div>
        <label> trainer: {session.trainer}</label>
        <input type="text" name="trainer" placeholder="Write the new Trainer" onChange={(e) => handleUpdateSession(e)} />
      </div>
      <div>
        <label> start time: {session.start}</label>
        <input type="time" name="start" onChange={(e) => handleUpdateSession(e)} />
      </div>
      <div>
        <label> end time: {session.end}</label>
        <input type="time" name="end" onChange={(e) => handleUpdateSession(e)} />
      </div>
      <div>
        <label> date: {session.date}</label>
        <input type="date" name="date" onChange={(e) => handleUpdateSession(e)} />
      </div>
      <div>
        <label> spots: {session.spots}</label>
        <input type="number" name="spots" onChange={(e) => handleUpdateSession(e)} />
      </div>
      <button type="submit">Save</button>
      <button type="reset" onClick={handleCancelBtn}>
        Cancel
      </button>
    </form>
  );
};

export default SessionItemInputForm;
