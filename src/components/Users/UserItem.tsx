import requestService from "../../service/requestService";
import { UserInfo, UserRole } from "../../types/UserTypes";

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
  };

  const isRole = async (role: UserRole) => {
    if (role === "ADMIN") {
      return await requestService.updateUser(user.id, "USER");
    } else {
      return await requestService.updateUser(user.id, "ADMIN");
    }
  };

  const handleClick = async () => {
    const res = await isRole(user.role);

    if (res.status >= 400) {
      return false;
    } else {
      const randomNumber = Math.random() * user.id;
      setUpdate(randomNumber);
    }
  };
  return (
    <div className="user-container">
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>
        {user.role} <button onClick={handleClick}>change role to {user.role === "ADMIN" ? "user" : "admin"}</button>
      </p>
      <button onClick={handleDeleteUser}>Delete user</button>
    </div>
  );
};

export default UserItem;
