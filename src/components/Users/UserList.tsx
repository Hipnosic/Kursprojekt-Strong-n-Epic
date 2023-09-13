import { useState } from "react";
import UserItem from "./UserItem";
import useFetchUsers from "../../hooks/useFetchUsers";

const UserList: React.FC = () => {
  const [update, setUpdate] = useState<number>(-1);
  const { isLoading, error, data } = useFetchUsers(update);

  return (
    <>
      {(error && <p>404 could not found</p>) ||
        (isLoading && <p>loading...</p>) ||
        data?.map((user, i) => <UserItem key={i} user={user} setUpdate={setUpdate} />)}{" "}
    </>
  );
};

export default UserList;
