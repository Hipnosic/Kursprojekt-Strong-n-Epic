import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserInfo, signupInterface } from "../../types/UserTypes";
import requestService from "../../service/requestService";
import CredentialInputFields from "../../components/CredentialInputFields";
import cacheService from "../../service/CacheService";

export default function SignupPage(): JSX.Element {
  const [singupValues, setSingupValues] = useState<signupInterface>({ username: "", password: "", email: "" });
  const [msg, setMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (singupValues.email === undefined || singupValues.username === undefined || singupValues.password === undefined) {
      setMsg("one field is empty");
      return false;
    }
    const res = await requestService.signup(singupValues);

    if (res.status >= 400) {
      setMsg("username already exist");
      return false;
    } else {
      const data = (await res.json()) as UserInfo;
      cacheService.saveLocalValue("USER", { username: data.username, role: data.role });
      setMsg("successfully created an account");
    }
  };

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <CredentialInputFields setSingupValues={setSingupValues} />
      {msg !== "" && <p>{msg}</p>}

      <button className="signup-btn" type="submit">
        Sign up
      </button>
      <p>
        Already has an account? <Link to="/login">Click here</Link>
      </p>
    </form>
  );
}
