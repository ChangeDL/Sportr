import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import UploadPicture from './components/UploadPicture/UploadPicture';
import ViewImages from './components/UploadPicture/ViewImages';
import { getAllImages } from './store/image';
import ConfirmDelete from './components/ConfirmDelete/ConfirmDelete';
import WorkInProgress from './components/WorkInProgress/WorkInProgress';
import SplashPage from './components/SplashPage/SplashPage';
import UpdateImageDetails from './components/UpdateImageDetails/UpdateImageDetails';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);



  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <ProtectedRoute path='/test'>
          <UploadPicture />
        </ProtectedRoute>
        <Route path="/photos" exact={true}>
          <ViewImages />
        </Route>
        <ProtectedRoute path="/photos/:id/delete-confirm">
          <ConfirmDelete />
        </ProtectedRoute>
        <ProtectedRoute path="/photos/:id/edit-details">
          <UpdateImageDetails />
        </ProtectedRoute>
        <Route path='/page-in-development' exact={true}>
          <WorkInProgress />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
