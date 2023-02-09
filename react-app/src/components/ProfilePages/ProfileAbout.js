import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { viewUserProfile } from '../../store/profile';
import './ProfileAbout.css'
import ProfilePageBanner from './ProfilePageBanner';


function ProfileAbout() {
  const { userId } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userId) {
      return;
    }
    dispatch(viewUserProfile(userId))
  }, [userId]);

  const userBeingViewed = useSelector(state => state.profileReducer?.profile)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const createdOnArray = userBeingViewed?.createdOn.split(' ')
  let joinedOn;
  if (createdOnArray?.length > 0) {
    joinedOn = (months.indexOf(createdOnArray[2]) + 1 + '-' + createdOnArray[1] + '-' + createdOnArray[3])
  }


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
        <div className='email-joined-on'>
          <span>Joined On: {joinedOn}</span>
          <span>Email: {userBeingViewed?.email}</span>
          <span>Bio coming soon</span>
        </div>
      </div>
    </div>
  );
}
export default ProfileAbout;
