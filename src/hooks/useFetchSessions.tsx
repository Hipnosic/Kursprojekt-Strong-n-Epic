import { useEffect, useState } from "react";
import requestService from "../service/requestService";
import { Session } from "../types/Session";

const useFetchSessions = (update: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Session[]>();
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const data = await requestService.fetchSession();
        console.log(data)
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

export default useFetchSessions;
