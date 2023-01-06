import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const onLogout = (e) => {

    return history.push('/logout-confirm')

  };

  return <div className='logout-button-div-navbar'><button className='logout-button-navbar' onClick={onLogout}>Logout</button></div>
};

export default LogoutButton;
