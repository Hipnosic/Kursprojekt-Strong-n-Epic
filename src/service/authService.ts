interface loginProps {
  username: string;
  password: string;
}

const fetchOptions = async (url: string, method: string, data: loginProps): Promise<Response> => {
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

const authService = { login };
export default authService;
