import { useState } from "react";
import useQuaryUser from "../hooks/useQuaryUser";
import useQuarySession from "../hooks/useQuarySessions";

const bookingList: React.FC = () => {
    const [update, setUpdate] = useState<number>(0);
    const { isLoading, error, data } = useQuaryUser(user, update);

}

