import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from './redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader';

import 'modern-normalize';
import './styles/main.scss';

const AuthView = lazy(() =>
  import('./views/AuthView' /* webpackChunkName: "AuthView"*/),
);
const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView"*/),
);
const TestView = lazy(() =>
  import('./views/TestView' /* webpackChunkName: "TestView"*/),
);
const AdminView = lazy(() =>
  import('./views/AdminView' /* webpackChunkName: "AdminView"*/),
);
const ResultView = lazy(() =>
  import('./views/ResultView' /* webpackChunkName: "ResultView"*/),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView"*/),
);
const UsefulView = lazy(() =>
  import('./views/UsefulView' /* webpackChunkName: "UsefulView"*/),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView'
    /* webpackChunkName: "NotFoundView"
     */
  ),
);
function App() {
  const isLoading = useSelector(state => authSelectors.getIsLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/" restricted>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/auth" redirectTo="/" restricted>
              <AuthView />
            </PublicRoute>
            <PrivateRoute path="/admin" restricted>
              <AdminView />
            </PrivateRoute>
            <PrivateRoute path="/test">
              <TestView />
            </PrivateRoute>
            <PrivateRoute path="/result">
              <ResultView />
            </PrivateRoute>
            <PublicRoute path="/contacts">
              <ContactsView />
            </PublicRoute>
            <PrivateRoute path="/useful">
              <UsefulView />
            </PrivateRoute>
            <PublicRoute>
              <NotFoundView />
            </PublicRoute>
          </Switch>
        </Suspense>
      )}
      <Footer />
    </div>
  );
}

export default App;
