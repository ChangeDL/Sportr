
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Logo from '../assets/misc/Logo.png'
import './NavBar.css'
const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  return (
    <div className='whole-nav-bar'>
      <nav>
        <div className='navbar-main-container'>
          <div className='navbar-left-side'>
            <NavLink className='links-on-nav-bar' to='/' exact={true} activeClassName='active'>
              <div className='container-for-right-navbar-links'>

                <img src={Logo} className='logo-navbar' />
                <div className='container-for-name'>
                  <span className='site-name-navbar'>Sportr</span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className='navbar-right-side'>

            <span>
              <NavLink className='links-on-nav-bar' to='/test' exact={true} activeClassName='active'>
                Upload
              </NavLink>
            </span>
            <span>
              <NavLink className='links-on-nav-bar' to='/photos' exact={true} activeClassName='active'>
                Explore
              </NavLink>
            </span>
            {!sessionUser ?
              <>
                <span>
                  <NavLink className='links-on-nav-bar' to='/login' exact={true} activeClassName='active'>
                    Log in
                  </NavLink>
                </span>
                <span>
                  <NavLink className='link-for-signup' to='/sign-up' exact={true} activeClassName='active'>
                    <span className='sign-up-navbar-text'>
                      Sign Up
                    </span>
                  </NavLink>
                </span>
              </>
              :
              <span>
                <LogoutButton />
              </span>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
