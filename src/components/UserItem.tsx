import { UserInfo } from "../types/UserTypes";

type UserItemProps = {
  user: UserInfo;
};

const UserItem: React.FC<UserItemProps> = ({ user }) => {
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
