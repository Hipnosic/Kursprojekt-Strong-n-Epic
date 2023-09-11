import { UserInfo } from "../types/UserTypes";

type UserItemProps = {
  user: UserInfo;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
};

const UserItem: React.FC<UserItemProps> = ({ user, setUpdate }) => {
  const handleDeleteUser = () => {};
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <button>Delete user</button>
    </div>
  );
};

export default UserItem;
