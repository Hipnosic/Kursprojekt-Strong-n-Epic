import requestService from "../../service/requestService";
import { Session } from "../../types/Session";
import { UserRole } from "../../types/UserTypes";

interface BookConfirmationBtnProps {
  session: Session;
  user: {
    username: string;
    role: UserRole;
  };
  setIsBooked: React.Dispatch<React.SetStateAction<boolean>>;
  setRegistered: React.Dispatch<React.SetStateAction<number>>;
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookConfirmationBtn: React.FC<BookConfirmationBtnProps> = ({ session, user, setIsBooked, setRegistered, setConfirmation }) => {
  const handleBooking = async () => {
    const quary = {
      username: user.username,
      title: session.title,
    };
    const res = await requestService.bookSession(quary);
    if (res.status >= 400) {
      return false;
    } else {
      const data = (await res.json()) as Session;
      setIsBooked(true);
      setRegistered(data.registered.length);
      setConfirmation(false);
    }
  };

  const handleCancel = () => {
    setConfirmation(false);
  };
  return (
    <>
      <p>Confirm Booking {session.title}</p>
      <button onClick={handleBooking}>Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
};

export default BookConfirmationBtn;
