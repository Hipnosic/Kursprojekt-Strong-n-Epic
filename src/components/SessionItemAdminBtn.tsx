import React from "react";
import requestService from "../service/requestService";
import { Session } from "../types/Session";

interface SessionItemAdminBtnProps {
  session: Session;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
}

const SessionItemAdminBtn: React.FC<SessionItemAdminBtnProps> = ({ session, setUpdate, setEdit, edit }) => {
  const handleDelete = async () => {
    const response = await requestService.deleteSession(session.id);
    if (response.status >= 400) {
      return false;
    } else {
      setUpdate(session.id);
    }
  };

  const handleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <div>
      <button className="remove-session-btn" onClick={handleDelete}>
        Remove
      </button>
      {!edit && <button onClick={handleEdit}>Edit</button>}
    </div>
  );
};

export default SessionItemAdminBtn;
