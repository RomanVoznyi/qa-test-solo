import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/auth',
  ...props
}) => {
  const match = useRouteMatch('/auth');
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <Route {...props}>
      {!restricted || (!match && isLoggedIn) || (match && !isLoggedIn) ? (
        children
      ) : (
        <Redirect to={redirectTo} />
      )}
    </Route>
  );
};

export default PublicRoute;
