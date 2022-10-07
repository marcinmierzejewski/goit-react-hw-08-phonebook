import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import styles from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { header } = styles;

  return (
    <header className={header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
