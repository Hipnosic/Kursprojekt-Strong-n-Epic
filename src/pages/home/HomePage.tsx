import { useState } from "react";
import { Session } from "../../types/Session";
import { Link } from "react-router-dom";
import authService from "../../service/requestService";
import useFetchSession from "../../hooks/useFetchSessions";
import SessionList from "../../components/SessionList";

type HomePageProps = {
  setCurrentSession: React.Dispatch<React.SetStateAction<Session>>;
};

const HomePage: React.FC<HomePageProps> = ({ setCurrentSession }) => {
    const { isLoading, error, data } = useFetchSession();
    
    return (
        <>
        {(error && <p>404 could not found</p>)||(isLoading && <p>loading...</p>)||<SessionList sessions={data}  />}
        </>
    );
};

export default HomePage;
