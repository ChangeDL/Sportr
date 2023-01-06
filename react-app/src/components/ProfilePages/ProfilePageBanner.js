import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import './ProfileAbout.css'
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'
import { getUserAlbums, removeAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import { oneAlbum } from '../../store/album';
import './ProfileAlbum.css'



function ProfilePageBanner() {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()

    const userAlbums = useSelector(state => { return state })
    const currentUser = useSelector(state => state?.session?.user)

    const userAlbumsArray = Object.values(userAlbums.albumReducer.albumsForUser)


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

    useEffect(() => {
        dispatch(getUserAlbums(userId))
    }, [dispatch, userId])

    const addAlbumButton = (e, id) => {
        e.preventDefault()

        history.push(`/people/${id}/albums/new`)

    }

    const deleteAlbumButton = (e, id) => {
        e.preventDefault()
        dispatch(removeAlbum(id))
        setTimeout(() => {
            dispatch(getUserAlbums(userId));
        }, 100)

    }

    const editAlbumButton = (e, userId, albumId) => {
        e.preventDefault()
        history.push(`/people/${userId}/albums/${albumId}/edit`)
    }

    return (
        <div className='profile-banner-image'>
            <div className='user-information-profile'>
                <div className='profile-picture-div-profile'>
                    <img className='profile-picture-profile-page' src={DefaultProfilePic} />
                </div>
                <div className='split-div-for-information'>
                    <div className='full-name-and-button'>
                        <span className='full-name-span-profile'>{user.fullName}</span>
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
    );
}
export default ProfilePageBanner;
