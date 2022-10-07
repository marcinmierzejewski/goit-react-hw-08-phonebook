// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, LinkHome, NavHome } from './Navigation.styled';
import homeIcon from './images/home.png';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavHome>
      <LinkHome to="/">
        <img src={homeIcon} alt="Home" width="30"></img>
      </LinkHome>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavHome>
  );
};
