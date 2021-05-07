import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const UserData = () => {
  const user = useSelector(state => authSelectors.getUser(state));

  return (
    <div className="userbox">
      <div className="avatar">
        <img src={user.avatar} alt="avatar" />
      </div>
      <span className="username">{user.name}</span>
    </div>
  );
};

export default UserData;
