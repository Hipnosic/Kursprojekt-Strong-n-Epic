import { useState, useEffect } from "react";

import { Session } from "../types/Session";
import requestService from "../service/requestService";

const useFetchSession = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Session[]>();
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await requestService.fetchSession();
        setData(response);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return { isLoading, error, data };
};

export default useFetchSession;
