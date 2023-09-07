interface loginProps {
  username: string;
  password: string;
}

interface signupProps {
  username: string;
  password: string;
  email: string;
}

const fetchOptions = async <T>(url: string, method: string, data: T): Promise<Response> => {
  const options = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await fetch(url, options);
};

async function login(userDetails: loginProps): Promise<Response> {
  return await fetchOptions(`api/login`, "POST", userDetails);
}

async function signup(userDetails: signupProps): Promise<Response> {
  return await fetchOptions(`api/signup`, "POST", userDetails);
}

const authService = { login, signup };
export default authService;
