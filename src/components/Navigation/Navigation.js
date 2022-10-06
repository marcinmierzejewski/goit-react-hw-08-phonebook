// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, LinkHome } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkHome to="/">Home</LinkHome>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
