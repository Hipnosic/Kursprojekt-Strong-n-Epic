import { useEffect, useState } from "react";
import requestService from "../service/requestService";
import { UserInfo } from "../types/UserTypes";

/**
 * useFetchUsers is a hook that fetches all registerd users in the server
 * @param update is a useState value and when it changes it re renders the hook
 * @returns isLoading, error, data
 */

const useFetchUsers = (update: number) => {
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
  }, [update]);
  return { isLoading, error, data };
};

export default useFetchUsers;
