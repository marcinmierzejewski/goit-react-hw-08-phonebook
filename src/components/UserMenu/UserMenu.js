import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import logoutIcon from './images/logout.png'
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const {wrapper, username, btnLogout} = styles

  return (
    <div className={wrapper}>
      <p className={username}>Welcome, {user.name}</p>
      <button className={btnLogout} type="button" onClick={() => dispatch(logOut())}>
        <img src={logoutIcon} alt="Log Out" width='25'></img>
      </button>
    </div>
  );
};