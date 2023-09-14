import React, { useState } from "react";
import DelConfirmationBtn from "./DelConfirmationBtn";
import { Session } from "../../types/Session";

interface SessionItemAdminBtnProps {
  session: Session;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
}

const SessionItemAdminBtn: React.FC<SessionItemAdminBtnProps> = ({ session, setUpdate, setEdit, edit }) => {
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const handleRemove = async () => {
    setConfirmation((confirmation) => !confirmation);
  };

  const handleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <div>
      {(confirmation && <DelConfirmationBtn session={session} setUpdate={setUpdate} setConfirmation={setConfirmation} />) || (
        <>
          <button className="remove-session-btn" onClick={handleRemove}>
            Remove
          </button>
          {!edit && <button onClick={handleEdit}>Edit</button>}
        </>
      )}
    </div>
  );
};

export default SessionItemAdminBtn;
