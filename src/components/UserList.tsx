import { useState } from "react";
import { UserInfo } from "../types/UserTypes";

const UserList: React.FC = () => {
  const [Users, setUsers] = useState<UserInfo[]>();
  return <div>UserList</div>;
};

export default UserList;
