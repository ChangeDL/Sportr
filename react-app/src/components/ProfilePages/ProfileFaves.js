import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProfileAbout.css'
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'


function ProfileFaves() {
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
            <div className='profile-banner-image'>
                <div className='user-information-profile'>
                    <div className='profile-picture-div-profile'>
                        <img className='profile-picture-profile-page' src={DefaultProfilePic} />
                    </div>
                    <div className='split-div-for-information'>
                        <div className='full-name-and-button'>
                            <span className='full-name-span-profile'>FULL NAME</span>
                            <div className='extra-button-profile-div'>
                                <button className='edit-button-profile-info'><span className='ellipsis-icon-profile'><i className="fa-solid fa-ellipsis"></i></span></button>
                            </div>
                        </div>
                        <div className='username-followers-following'>
                            <span>{user.username}</span>
                            <span>0 Followers</span>
                            <span>0 Following</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mid-navbar-profile-page-container'>
                <Link to={`/people/${userId}`} className='mid-navbar-links-profile'>About</Link>
                <Link to={`/people/${userId}/photostream`} className='mid-navbar-links-profile'>Photostream</Link>
                <Link to={`/people/${userId}/albums`} className='mid-navbar-links-profile'>Albums</Link>
                <Link to={`/people/${userId}/favorites`} className='mid-navbar-links-profile-active'>Faves</Link>
                <Link to={`/people/${userId}/galleries`} className='mid-navbar-links-profile'>Galleries</Link>
                <Link to={`/people/${userId}/groups`} className='mid-navbar-links-profile'>Groups</Link>
                <Link to={`/people/${userId}/stats`} className='mid-navbar-links-profile'>Stats</Link>
            </div>
            <div className='about-container-profile'>
                <h1>PAGE CURRENTLY UNDER DEVELOPMENT</h1>
            </div>
        </div>
    );
}
export default ProfileFaves;
