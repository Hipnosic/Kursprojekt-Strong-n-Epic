import { useState } from "react";
import { useNavigate } from "react-router";
import { Session } from "../../types/Session";
import useFetchSession from "../../hooks/useFetchSessions";
import SessionList from "../../components/SessionList";
import cacheService from "../../service/CacheService";

type AdminPageProps = {
    setCurrentSession: React.Dispatch<React.SetStateAction<Session>>;
};

const AdminPage: React.FC<AdminPageProps> = ({ setCurrentSession }) => {
    const [dateSearch, setDateSearch] = useState<string>("");
    const { isLoading, error, data } = useFetchSession(dateSearch);
    const [showSchedule, setShowSchedule] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate("/homePage")
    }
    
    const toggleSchedule = () => {
      setShowSchedule(!showSchedule);
    };

    return (
        <>
          <div className="menu">
            <button className="menu-home-btn" onClick={handleHomePage}>Home</button>
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
              <button className="nav-bookings-btn">Users</button>
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

export default AdminPage