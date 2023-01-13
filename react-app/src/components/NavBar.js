import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/misc/Logo.png'
import ProfileButton from './ProfileButton';
import './NavBar.css'
import You from './You';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='profile-button-div'>
          <ProfileButton user={sessionUser} className='ProfileButton' />
        </div>

      </>
    )
  }
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
            {sessionUser ?
              <div className='explore-link-navbar'>
                <Link to='/photos' className='left-side-links-navbar'>Explore</Link>
                <div className='you-dropdown-div-navbar'>
                  <You user={sessionUser} />
                </div>
              </div>
              : null}
          </div>
          <div className='navbar-right-side'>
            {sessionUser ?
              <>
                <div className='div-for-profile-button-and-upload'>

                  <span>
                    <NavLink className='links-on-nav-bar' to='/upload' exact={true} activeClassName='active'>
                      <div className='upload-icon-navbar'>
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                      </div>
                    </NavLink>
                  </span>
                  {sessionLinks}
                </div>
              </>
              : null}
            {!sessionUser ?
              <>
                <span>
                  <NavLink className='links-on-nav-bar' to='/photos' exact={true} activeClassName='active'>
                    Explore
                  </NavLink>
                </span>
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
              null
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
