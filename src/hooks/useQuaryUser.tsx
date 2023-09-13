import { useState, useEffect } from "react";
import requestService from "../service/requestService";
import { UserInfo } from "../types/UserTypes";

/**
 * useQuaryUser is a custom hook to fetch a specific user to get user data
 * @param quary is the username of the user the hook wants to fetch
 * @returns loading, err, userData
 */

const useQuaryUser = (quary: string, update: number) => {
  const [loading, setloading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserInfo>();
  useEffect(() => {
    (async function () {
      try {
        setloading(true);
        const response = await requestService.getUser(quary);
        setUserData(response);
      } catch (err) {
        setErr(true);
      } finally {
        setloading(false);
      }
    })();
  }, [quary, update]);
  return { loading, err, userData };
};

export default useQuaryUser;
