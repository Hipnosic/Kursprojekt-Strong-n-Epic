import { useState } from "react";
import { Session } from "../../types/Session";
import { Link } from "react-router-dom";
import useFetchSession from "../../hooks/useFetchSessions";
import SessionList from "../../components/SessionList";

type HomePageProps = {
  setCurrentSession: React.Dispatch<React.SetStateAction<Session>>;
};

const HomePage: React.FC<HomePageProps> = ({ setCurrentSession }) => {
  const [dateSearch, setDateSearch] = useState<string>("");
  const { isLoading, error, data } = useFetchSession(dateSearch);

  return (
    <>
      <input type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateSearch(e.target.value)} />
      {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <SessionList sessions={data} />}
    </>
  );
};

export default HomePage;
