import { useState, useEffect } from "react";
import { Session } from "../types/Session";
import requestService from "../service/requestService";

/**

 *useFetchSession is a custom hook to fetch all the sessions in the server if quary is an empty string, if quary isnt empty it search for the objects in the arry
 *  and sends out when its loading or when there is an error and if everything is fine sends the data out
 * @param quary is date in string format exempel '2023-03-08'
 * @param update is a number from useState if the valu changes the hook fetches its again
 * @returns isLoading, error, data
 */
const useQuarySession = (quary: string, update: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Session[]>();
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await requestService.fetchSession();
        if (quary !== "") {
          const matchedData = response.filter((session) => session.date.includes(quary));
          setData(matchedData);
        } else {
          setData(response);
        }
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [quary, update]);
  return { isLoading, error, data };
};

export default useQuarySession;
