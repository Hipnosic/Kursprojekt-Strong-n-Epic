import { useEffect, useState } from "react";
import { Session } from "../../types/Session";
import SessionList from "../../components/SessionList";
import cacheService from "../../service/CacheService";
import { useNavigate } from "react-router-dom";
import UserList from "../../components/UserList";
import { UserRole } from "../../types/UserTypes";
import BookingList from "../../components/BookingList";

type HomePageProps = {
  setCurrentSession: React.Dispatch<React.SetStateAction<Session>>;
};

type UserDetails = {
  username: string;
  role: UserRole;
};

const HomePage: React.FC<HomePageProps> = ({ setCurrentSession }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetails>({ username: "", role: "USER" });
  const [showSchedule, setShowSchedule] = useState<boolean>(false);
  const [showMyBookings, setShowMyBookings] = useState<boolean>(false);
  const [showUsers, setShowUsers] = useState<boolean>(false);

  const [showAddSession, setShowAddSession] = useState(false);

  useEffect(() => {
    try {
      setUser(cacheService.getLocalValue("USER"));
    } catch (err) {
      navigate("/");
    }
  }, [navigate]);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "schedule") {
      setShowSchedule(!showSchedule);
      setShowUsers(false);
      setShowMyBookings(false);
    } else if (e.currentTarget.name === "users") {
      setShowUsers((showUsers) => !showUsers);
      setShowSchedule(false);
      setShowMyBookings(false);
    } else if (e.currentTarget.name === "booking") {
      setShowMyBookings((showMyBookings) => !showMyBookings);
      setShowUsers(false);
      setShowSchedule(false);
    } else {
      setShowMyBookings(false);
      setShowUsers(false);
      setShowSchedule(false);
    }

    const toggleSessionAdd = () => {
      // Refresh the session list or update UI as needed after adding a session
      setShowAddSession(!showAddSession); // Hide the form after adding
    };
  };

  return (
    <>
      <div className="menu">
        <button className="menu-home-btn">Home</button>
      </div>

      <div className="nav-btns">
        <button className={`nav-schedule-btn${showSchedule ? " active" : ""}`} name="schedule" onClick={(e) => toggle(e)}>
          Schedule
        </button>
        <button className="nav-bookings-btn" name="booking" onClick={(e) => toggle(e)}>
          My Bookings
        </button>
        {user.role === "ADMIN" && (
          <button className="nav-users-btn" name="users" onClick={(e) => toggle(e)}>
            Users
          </button>
        )}
      </div>
      {showUsers && <UserList />}
      {showSchedule && <SessionList userData={user} />}
      {showMyBookings && <BookingList user={user} />}
    </>
  );
};

export default HomePage;
