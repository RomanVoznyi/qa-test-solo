import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { ReactComponent as IconLogo } from '../../images/svg/logo.svg';
import Navigate from './Navigate';
import UserData from './UserData';
import ServiceBtn from './ServiceBtn';

const Header = () => {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <header className="container header">
      <div className="wrapper">
        <NavLink to="/">
          <IconLogo className="icon-logo" />
        </NavLink>
        <Navigate />
        {isLoggedIn && <UserData />}
      </div>
      {isLoggedIn && <ServiceBtn />}
    </header>
  );
};

export default Header;
