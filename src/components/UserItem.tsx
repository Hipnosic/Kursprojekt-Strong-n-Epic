import requestService from "../service/requestService";
import { UserInfo } from "../types/UserTypes";

type UserItemProps = {
  user: UserInfo;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
};

const UserItem: React.FC<UserItemProps> = ({ user, setUpdate }) => {
  const handleDeleteUser = async () => {
    const res = await requestService.deleteUser(user.id);
    if (res.status >= 400) {
      return false;
    } else {
      setUpdate(user.id);
    }

    const handleClick = () => {};
  };
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>
        {user.role} <button>change role to {user.role === "ADMIN" ? "user" : "admin"}</button>
      </p>
      <button onClick={handleDeleteUser}>Delete user</button>
    </div>
  );
};

export default UserItem;
