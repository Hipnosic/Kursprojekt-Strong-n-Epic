import { useState } from "react";
import { Session } from "../../types/Session";
import { Link } from "react-router-dom";
import authService from "../../service/authService";

type HomePageProps = {
  setCurrentSession: React.Dispatch<React.SetStateAction<Session>>;
};

const LoginPage: React.FC<HomePageProps> = ({ setCurrentSession }) => {

  return (
    <></>
  );
};

export default LoginPage;
