import React from "react";
import requestService from "../../service/requestService";
import { Session } from "../../types/Session";
interface DelConfirmationBtnProps {
  session: Session;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const DelConfirmationBtn: React.FC<DelConfirmationBtnProps> = ({ session, setUpdate, setConfirmation }) => {
  const handleDelete = async () => {
    const response = await requestService.deleteSession(session.id);
    if (response.status >= 400) {
      return false;
    } else {
      setUpdate(session.id);
      setConfirmation(false);
    }
  };

  const handleCancel = () => {
    setConfirmation(false);
  };
  return (
    <>
      <p>Are u sure u want to delete {session.title}</p>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
      <button className="positive-btn" onClick={handleCancel}>Cancel</button>
    </>
  );
};

export default DelConfirmationBtn;
