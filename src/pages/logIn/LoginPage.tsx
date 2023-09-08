import { useState } from "react";
import { LoginInterface, UserInfo } from "../../types/UserTypes";
import { Link } from "react-router-dom";
import requestService from "../../service/requestService";
import CredentialInputFields from "../../components/CredentialInputFields";
import cacheService from "../../service/CacheService";

type LoginPageProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInfo>>;
};

const LoginPage: React.FC<LoginPageProps> = ({ setCurrentUser }) => {
  const [userCredential, setUserCredential] = useState<LoginInterface>({ username: "", password: "" });
  const [msg, setMsg] = useState<string>("");

  const handleCancelBtn = () => {
    setUserCredential({ username: "", password: "" });
    setMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await requestService.login(userCredential);
    if (res.status >= 400) {
      setMsg("wrong credentials");
      return false;
    } else {
      const data = (await res.json()) as UserInfo;
      cacheService.saveLocalValue("USER", { username: data.username, role: data.role });
      setMsg("logged in successfully");
      setCurrentUser(data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CredentialInputFields setUserCredential={setUserCredential} />

      {msg !== "" && <p>{msg}</p>}

      <button type="submit">Login</button>
      <button type="reset" onClick={handleCancelBtn}>
        Cancel
      </button>
      <p>
        No account? <Link to="/signup">Click here</Link>
      </p>
    </form>
  );
};

export default LoginPage;
