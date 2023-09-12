import { useEffect, useState } from "react";
import { Session } from "../../types/Session";
import SessionList from "../../components/SessionList";
import useQuarySession from "../../hooks/useQuarySessions";
import useQuaryUser from "../../hooks/useQuaryUser";
import cacheService from "../../service/CacheService";
import { useNavigate } from "react-router-dom";
import UserList from "../../components/UserList";
import { UserRole } from "../../types/UserTypes";

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
  const [dateSearch, setDateSearch] = useState<string>("");
  const { isLoading, error, data } = useQuarySession(dateSearch);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);
  const [showMyBookings, setShowMyBookings] = useState<boolean>(false);
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const { loading, err, userData } = useQuaryUser(user.username);

  useEffect(() => {
    try {
      setUser(cacheService.getLocalValue("USER"));
    } catch (err) {
      navigate("/");
    }
  }, [navigate]);

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  const toggleMyBookings = async () => {
    setShowMyBookings(!showMyBookings);
  };

  const toggleUsers = () => {
    setShowUsers((showUsers) => !showUsers);
  };

  return (
    <>
      <div className="menu">
        <button className="menu-home-btn">Home</button>
      </div>
      <div>
        <div className="nav-btns">
          <button className={`nav-schedule-btn${showSchedule ? " active" : ""}`} onClick={toggleSchedule}>
            Schedule
          </button>
          <button className="nav-bookings-btn" onClick={toggleMyBookings}>My Bookings</button>
          {user.role === "ADMIN" && (
            <button className="nav-users-btn" onClick={toggleUsers}>
              Users
            </button>
          )}
          {showUsers && <UserList />}
        </div>
        {showSchedule && (
          <>
            <input type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateSearch(e.target.value)} />
            <button onClick={() => setDateSearch("")}>Clear Filter</button>
            {(error && <p>404 could not found</p>) ||
              (isLoading && <p>loading...</p>) ||
              (data?.length === 0 && <p>There is no session on {dateSearch}</p>) || <SessionList sessions={data} />}
          </>
        )}
        {showMyBookings && <div>My Bookings content goes here</div>}
      </div>
    </>
  );
};

export default HomePage;
