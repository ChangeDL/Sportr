import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProfileAbout.css'
import ProfilePageBanner from './ProfilePageBanner';


function ProfileAbout() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);



  return (
    <div className='whole-profile-page-container'>
      <ProfilePageBanner />
      <div className='mid-navbar-profile-page-container'>
        <Link to={`/people/${userId}`} className='mid-navbar-links-profile-active'>About</Link>
        <Link to={`/people/${userId}/photostream`} className='mid-navbar-links-profile'>Photostream</Link>
        <Link to={`/people/${userId}/albums`} className='mid-navbar-links-profile'>Albums</Link>
        <Link className='mid-navbar-links-profile-in-dev'>Faves</Link>
        <Link className='mid-navbar-links-profile-in-dev'>Galleries</Link>
        <Link className='mid-navbar-links-profile-in-dev'>Groups</Link>
        <Link className='mid-navbar-links-profile-in-dev'>Stats</Link>
      </div>
      <div className='about-container-profile'>
        <h1>PAGE CURRENTLY UNDER DEVELOPMENT</h1>
      </div>
    </div>
  );
}
export default ProfileAbout;
