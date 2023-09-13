import React from "react";
import requestService from "../../service/requestService";
import { SessionList } from "../../types/Session";

interface UnBookConfirmationBtnProps {
  session: SessionList;
  username: string;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnBookConfirmationBtn: React.FC<UnBookConfirmationBtnProps> = ({ session, username, setUpdate, setConfirmation }) => {
  const handleUnBooking = async () => {
    const res = await requestService.removeBooking(session.id, username);
    if (res.status >= 400) {
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
      <p>Confirm Booking {session.title}</p>
      <button onClick={handleUnBooking}>Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
};

export default UnBookConfirmationBtn;
