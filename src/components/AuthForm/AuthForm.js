import { lazy, Suspense, useState, useEffect } from 'react';
import { useLocation, useHistory, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ReactComponent as IconGoogle } from '../../images/svg/google.svg';

const LoginForm = lazy(() =>
  import(
    './LoginForm'
    /* webpackChunkName: "LoginForm"
     */
  ),
);
const RegisterForm = lazy(() =>
  import(
    './RegisterForm'
    /* webpackChunkName: "RegisterForm"
     */
  ),
);

const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const path = location.pathname;

  useEffect(() => {
    if (path !== '/auth' || path !== '/auth/register') {
      history.push('/auth');
    }
  }, [path, history]);

  const handleClick = evt => {
    if (evt.target.name === 'signin' && path === '/auth/register') {
      history.push('/auth');
    }
    if (evt.target.name === 'signup' && path === '/auth') {
      history.push('/auth/register');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (path === '/auth/register') {
      dispatch(authOperations.registerUser({ name, email, password }));
    }
    if (path === '/auth') {
      dispatch(authOperations.loginUser({ email, password }));
    }

    history.push('/');
    evt.target.reset();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <p className="form-options">
        You can use your Google Account to authorize:
      </p>
      <button className="googleBtn">
        <IconGoogle />
        <span className="googleBtn-title">Google</span>
      </button>
      <Suspense>
        <Switch>
          <Route path="/auth" exact>
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </Route>
          <Route path="/auth/register" exact>
            <RegisterForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </Route>
          {/* <Route>
            <NotFoundView />
          </Route> */}
        </Switch>
      </Suspense>
      <button
        type="submit"
        className="authBtn active"
        name="signin"
        onClick={handleClick}
      >
        Sign in
      </button>
      <button
        type="submit"
        className="authBtn"
        name="signup"
        onClick={handleClick}
      >
        Sign up
      </button>
    </form>
  );
};

export default AuthForm;
