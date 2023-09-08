import { useState, useEffect } from "react";
import { Session } from "../types/Session";
import useFetchSession from "../hooks/useFetchSessions";

interface SessionItemProps {
  session: Session;
}

const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
  const [spot] = useState<number>(session.spots);
  const [registerds, setRegistereds] = useState<number>(session.registered.length);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null)

    useEffect(() => {
    const savedUser = localStorage.getItem("USER");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUsername(userData.username);
    }
  }, []);


  const handleBooking = async () => {
    if (isBooked) {
      console.log("Session is already booked by the user.");
      return;
    }
    try {
      const requestBody = {
        session,
        username,
      }
      const response = await fetch("/api/bookSession", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
      });
      if (response.ok) {
        setRegistereds(registerds + 1);
        setIsBooked(true);
      } else {
        console.error("Booking failed")
      }
    } catch (error) {
      console.error("Error booking session:", error)
    }
  };

  return (
    <div className="Container">
      <h5>{session.title}</h5>
      <p>{session.trainer}</p>
      <p>Starttid: {session.start}</p>
      <p>Sluttid: {session.end}</p>
      <p>Datum: {session.date}</p>
      <p>
        Antal platser:{registerds}/{session.spots}
      </p>

      {isBooked ? (
        <button disabled>Already Booked</button>
      ) : (
        <>
          {registerds !== spot ? (
            <button onClick={handleBooking}>Book</button>
          ) : (
            <button disabled>Fully Booked</button>
          )}
        </>
      )}
    </div>
  );
};
export default SessionItem;
