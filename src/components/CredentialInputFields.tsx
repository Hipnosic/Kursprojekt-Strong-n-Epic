import { useState } from "react";
import { signupInterface, LoginInterface } from "../types/UserTypes";

interface CredentialInterface {
  username: string;
  password: string;
  email?: string;
}

type CredentialInputFieldsProps = {
  setSingupValues?: React.Dispatch<React.SetStateAction<signupInterface>>;
  setUserCredential?: React.Dispatch<React.SetStateAction<LoginInterface>>;
};

const CredentialInputFields: React.FC<CredentialInputFieldsProps> = ({ setSingupValues, setUserCredential }) => {
  const [credential, setCredential] = useState<CredentialInterface>({ username: "", password: "" });

  const handleCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
    if (setSingupValues !== undefined) {
      setSingupValues({ ...credential, [e.target.name]: e.target.value } as signupInterface);
    }
    if (setUserCredential !== undefined) {
      setUserCredential({ ...credential, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      <div>
        <label>Username</label>
        <input
          name="username"
          type="text"
          className="username-field"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
      {setUserCredential === undefined && (
        <div>
          <label>Email</label>
          <input
            name="email"
            type="text"
            className="email-field"
            onChange={(e) => {
              handleCredential(e);
            }}
          />
        </div>
      )}
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="passsword-field"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
    </>
  );
};

export default CredentialInputFields;
