import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupInterface } from "../../types/UserTypes";
import requestService from "../../service/requestService";

export default function SignupPage(): JSX.Element {
  const [signupValues, setSignupValues] = useState<signupInterface>({ username: "", password: "", email: "" });
  const [msg, setMsg] = useState<string>("");

  const handleSignupValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupValues({ ...signupValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupValues.email === undefined || signupValues.username === undefined || signupValues.password === undefined) {
      setMsg("one field is empty");
      return false;
    }
    const res = await requestService.signup(signupValues);

    if (res.status >= 400) {
      setMsg("username already exist");
      return false;
    } else {
      const data = await res.json();
      console.log(data);

      setMsg("successfully created an account");
    }
  };

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input name="username" type="text" className="username-field" onChange={handleSignupValues} />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="text" className="email-field" onChange={handleSignupValues} />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" className="passsword-field" onChange={handleSignupValues} />
      </div>
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
