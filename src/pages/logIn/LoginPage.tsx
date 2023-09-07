import { useState } from "react";
import { UserInfo } from "../../types/UserTypes";
import { Link } from "react-router-dom";

interface userDetails {
  username: string;
  password: string;
}

type LoginPageProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInfo>>;
};

const LoginPage: React.FC<LoginPageProps> = ({ setCurrentUser }) => {
  const [credential, setCredential] = useState<userDetails>({ username: "", password: "" });

  const handleCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleCancelBtn = () => {
    setCredential({ username: "", password: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Användarnamn</label>
        <input
          name="username"
          type="text"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
      <div>
        <label>Lössenord</label>
        <input
          name="password"
          type="password"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>

      <button type="submit">Login</button>
      <button type="reset" onClick={handleCancelBtn}>
        Cancel
      </button>
      <p>
        No account? <Link to="signup">Click here</Link>
      </p>
    </form>
  );
};

export default LoginPage;
