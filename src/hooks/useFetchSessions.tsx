import { useState, useEffect } from "react";
import { Session } from "../types/Session";
import requestService from "../service/requestService";

/**
 * useFetchSession is a custom hook to fetch all the sessions in the server and sends out when its loading or when there is an error and if everything is fine sends the data out
 * @returns isLoading, error, data
 */

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
