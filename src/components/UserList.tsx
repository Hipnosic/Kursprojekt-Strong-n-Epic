import { useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import UserItem from "./UserItem";

const UserList: React.FC = () => {
  const { isLoading, error, data } = useFetchUsers();
  const [, setUpdate] = useState<number>(0);

  return (
    <>
      {(error && <p>404 could not found</p>) ||
        (isLoading && <p>loading...</p>) ||
        data?.map((user, i) => <UserItem key={i} user={user} setUpdate={setUpdate} />)}{" "}
    </>
  );
};

export default UserList;
