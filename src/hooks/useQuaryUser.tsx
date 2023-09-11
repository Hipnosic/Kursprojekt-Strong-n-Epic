import { useState, useEffect } from "react";
import requestService from "../service/requestService";
import { UserInfo } from "../types/UserTypes";

const useQuaryUser = (quary: string) => {
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
  }, [quary]);
  return { loading, err, userData };
};

export default useQuaryUser;
