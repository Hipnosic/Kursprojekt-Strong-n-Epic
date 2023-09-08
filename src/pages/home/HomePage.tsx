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

  return (
    <>
      <input type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateSearch(e.target.value)} />
      <button onClick={() => setDateSearch("")}>Clear Filter</button>
      {(error && <p>404 could not found</p>) ||
        (isLoading && <p>loading...</p>) ||
        (data?.length === 0 && <p>There is no session on {dateSearch}</p>) || <SessionList sessions={data} />}
    </>
  );
};

export default HomePage;
