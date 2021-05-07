import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../redux/auth/auth-selectors';
import { ROLE } from '../../utils/constants';

const Navigate = () => {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));
  const user = useSelector(state => getUser(state));

  return (
    <nav className="navigate">
      {isLoggedIn && (
        <>
          <NavLink
            to="/"
            className="navLink"
            activeClassName="activeNavLink"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/useful"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Materials
          </NavLink>
          {user.role === ROLE.ADMIN && (
            <NavLink
              to="/admin"
              className="navLink"
              activeClassName="activeNavLink"
            >
              AdminSetting
            </NavLink>
          )}
        </>
      )}
      <NavLink
        to="/contacts"
        className="navLink"
        activeClassName="activeNavLink"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigate;
