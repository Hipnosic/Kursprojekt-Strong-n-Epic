import { useEffect, useState } from "react";
import requestService from "../service/requestService";
import { UserInfo } from "../types/UserTypes";

const useFetchUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<UserInfo[]>();
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const data = await requestService.getUsers();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return { isLoading, error, data };
};

export default useFetchUsers;
