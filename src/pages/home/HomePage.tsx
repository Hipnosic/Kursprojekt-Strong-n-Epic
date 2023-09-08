import { useState } from "react";
import { Session } from "../../types/Session";
import useFetchSession from "../../hooks/useFetchSessions";
import SessionList from "../../components/SessionList";

type HomePageProps = {
  setCurrentSession: React.Dispatch<React.SetStateAction<Session>>;
};

const HomePage: React.FC<HomePageProps> = ({ setCurrentSession }) => {
  const [dateSearch, setDateSearch] = useState<string>("");
  const { isLoading, error, data } = useFetchSession(dateSearch);

  
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

 
  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  return (
    <>
      <div className="menu">
        <button className="menu-home-btn">Home</button>
        <button className="menu-admin-btn">Admin</button>
      </div>
      <div>
        <div className="nav-btns">
          <button
            className={`nav-schedule-btn${showSchedule ? " active" : ""}`}
            onClick={toggleSchedule}
          >
            Schedule
          </button>
          <button className="nav-bookings-btn">My Bookings</button>
        </div>
        {showSchedule && (
          <>
            <input
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDateSearch(e.target.value)
              }
            />
            <button onClick={() => setDateSearch("")}>Clear Filter</button>
            {(error && <p>404 could not found</p>) ||
              (isLoading && <p>loading...</p>) ||
              (data?.length === 0 && (
                <p>There is no session on {dateSearch}</p>
              )) || <SessionList sessions={data} />}
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;