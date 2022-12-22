import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    return history.push('/')

  };

  return <div className='logout-button-navbar'><button onClick={onLogout}>Logout</button></div>
};

export default LogoutButton;
