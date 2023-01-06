import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import ProfileAbout from './components/ProfilePages/ProfileAbout';
import { authenticate } from './store/session';
import UploadPicture from './components/UploadPicture/UploadPicture';
import ViewImages from './components/UploadPicture/ViewImages';
import { getAllImages } from './store/image';
import ConfirmDelete from './components/ConfirmDelete/ConfirmDelete';
import WorkInProgress from './components/WorkInProgress/WorkInProgress';
import SplashPage from './components/SplashPage/SplashPage';
import UpdateImageDetails from './components/UpdateImageDetails/UpdateImageDetails';
import ImageShowRoom from './components/ImageShowRoom/ImageShowRoom';
import ProfilePhotoStream from './components/ProfilePages/ProfilePhotoStream';
import ProfileAlbums from './components/ProfilePages/ProfileAlbums';
import ProfileFaves from './components/ProfilePages/ProfileFaves';
import ProfileGalleries from './components/ProfilePages/ProfileGalleries';
import ProfileStats from './components/ProfilePages/ProfileStats';
import ProfileGroups from './components/ProfilePages/ProfileGroups.js';
import AlbumForm from './components/AlbumForm/AlbumForm';
import AlbumShowRoom from './components/AlbumShowRoom/AlbumShowRoom';
import EditAlbumForm from './components/EditAlbumForm/EditAlbumForm';
import LogoutConfirm from './components/auth/LogoutConfirm';

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
        <Route path='/people/:userId' exact={true} >
          <ProfileAbout />
        </Route>
        <Route path='/people/:userId/photostream' exact={true} >
          <ProfilePhotoStream />
        </Route>
        <Route path='/people/:userId/albums' exact={true} >
          <ProfileAlbums />
        </Route>
        <ProtectedRoute path='/people/:userId/albums/new'>
          <AlbumForm />
        </ProtectedRoute>
        <ProtectedRoute path='/people/:userId/albums/:albumId/edit'>
          <EditAlbumForm />
        </ProtectedRoute>
        <Route path='/people/:userId/albums/:albumId'>
          <AlbumShowRoom />
        </Route>
        <Route path='/people/:userId/favorites' exact={true} >
          <ProfileFaves />
        </Route>
        <Route path='/people/:userId/galleries' exact={true} >
          <ProfileGalleries />
        </Route>
        <Route path='/people/:userId/groups'>
          <ProfileGroups />
        </Route>
        <Route path='/people/:userId/stats' exact={true} >
          <ProfileStats />
        </Route>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <ProtectedRoute path='/upload'>
          <UploadPicture />
        </ProtectedRoute>
        <Route path="/photos" exact={true}>
          <ViewImages />
        </Route>
        <ProtectedRoute path="/photos/:id/delete-confirm">
          <ConfirmDelete />
        </ProtectedRoute>
        <ProtectedRoute path="/photos/:userId/:id/edit-details">
          <UpdateImageDetails />
        </ProtectedRoute>
        <Route path="/photos/:id">
          <ImageShowRoom />
        </Route>
        <Route path='/page-in-development' exact={true}>
          <WorkInProgress />
        </Route>
        <ProtectedRoute path='/logout-confirm'>
          <LogoutConfirm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
