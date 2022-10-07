import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import logoutIcon from './images/logout.png'
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.btnLogout} type="button" onClick={() => dispatch(logOut())}>
        <img src={logoutIcon} alt="Log Out" width='25'></img>
      </button>
    </div>
  );
};