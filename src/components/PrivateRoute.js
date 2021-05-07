import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../redux/auth/auth-selectors';
import { ROLE } from '../utils/constants';

const PrivateRoute = ({
  children,
  restricted = false,
  redirectTo = '/auth',
  ...props
}) => {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));
  const user = useSelector(state => getUser(state));

  return (
    <Route {...props}>
      {!isLoggedIn || (isLoggedIn && restricted && user.role !== ROLE.ADMIN) ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PrivateRoute;
