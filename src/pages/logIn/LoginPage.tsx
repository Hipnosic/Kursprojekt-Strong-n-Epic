import { useState } from "react";
import { LoginInterface, UserInfo } from "../../types/UserTypes";
import { Link, useNavigate } from "react-router-dom";
import requestService from "../../service/requestService";
import CredentialInputFields from "../../components/CredentialInputFields";
import cacheService from "../../service/CacheService";

const LoginPage: React.FC = () => {
  const [userCredential, setUserCredential] = useState<LoginInterface>({ username: "", password: "" });
  const [msg, setMsg] = useState<string>("");
  const navigate = useNavigate();

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
      navigate("/homePage");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <CredentialInputFields setUserCredential={setUserCredential} />

        {msg !== "" && <p>{msg}</p>}

        <button className="form-btn" type="submit">
          Login
        </button>
        <button className="form-btn" type="reset" onClick={handleCancelBtn}>
          Cancel
        </button>
        <p>
          No account? <Link to="/signup">Click here</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;
