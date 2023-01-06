import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProfileAbout.css'
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'
import ProfilePageBanner from './ProfilePageBanner';


function ProfileGalleries() {
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
                <Link to={`/people/${userId}`} className='mid-navbar-links-profile'>About</Link>
                <Link to={`/people/${userId}/photostream`} className='mid-navbar-links-profile'>Photostream</Link>
                <Link to={`/people/${userId}/albums`} className='mid-navbar-links-profile'>Albums</Link>
                <Link to={`/people/${userId}/favorites`} className='mid-navbar-links-profile'>Faves</Link>
                <Link to={`/people/${userId}/galleries`} className='mid-navbar-links-profile-active'>Galleries</Link>
                <Link to={`/people/${userId}/groups`} className='mid-navbar-links-profile'>Groups</Link>
                <Link to={`/people/${userId}/stats`} className='mid-navbar-links-profile'>Stats</Link>
            </div>
            <div className='about-container-profile'>
                <h1>PAGE CURRENTLY UNDER DEVELOPMENT</h1>
            </div>
        </div>
    );
}
export default ProfileGalleries;
