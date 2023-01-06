import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import './ProfileAbout.css'
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'
import { getUserAlbums, removeAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import { oneAlbum } from '../../store/album';
import './ProfileAlbum.css'



function ProfileAlbums() {
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
        <div className='whole-profile-page-container'>
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
            <div className='mid-navbar-profile-page-container'>
                <Link to={`/people/${userId}`} className='mid-navbar-links-profile'>About</Link>
                <Link to={`/people/${userId}/photostream`} className='mid-navbar-links-profile'>Photostream</Link>
                <Link to={`/people/${userId}/albums`} className='mid-navbar-links-profile-active'>Albums</Link>
                <Link to={`/people/${userId}/favorites`} className='mid-navbar-links-profile'>Faves</Link>
                <Link to={`/people/${userId}/galleries`} className='mid-navbar-links-profile'>Galleries</Link>
                <Link to={`/people/${userId}/groups`} className='mid-navbar-links-profile'>Groups</Link>
                <Link to={`/people/${userId}/stats`} className='mid-navbar-links-profile'>Stats</Link>
            </div>
            <div className='album-container-profile'>
                {currentUser?.id === +userId ?
                    <button onClick={e => addAlbumButton(e, userId)}>Add album</button>
                    : null}
                <div className='all-albums-container'>
                    {userAlbumsArray.map((al) => (
                        <>
                            {al.images.length > 0 ?
                                <Link className='link-to-album' to={`/people/${userId}/albums/${al.id}`} style={{ backgroundImage: `url(${al.images[0].url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', textDecoration: 'none', color: 'white' }} >
                                    <div key={al.id} className='album-name-and-buttons'>
                                        <div className='span-tag-album-name-link'>
                                            <span>{al.name.toUpperCase()}</span>
                                        </div>
                                        {currentUser?.id === +userId ?
                                            <div className='album-edit-delete-buttons'>
                                                <button onClick={e => deleteAlbumButton(e, al.id)}>Delete</button>
                                                <button onClick={e => editAlbumButton(e, userId, al.id)}>Edit</button>
                                            </div>
                                            : null}
                                    </div>
                                </Link>
                                : <Link className='link-to-album' to={`/people/${userId}/albums/${al.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                    <div key={al.id} className='album-name-and-buttons'>
                                        <div className='span-tag-album-name-link'>
                                            <span>{al.name.toUpperCase()}</span>
                                        </div>
                                        {currentUser?.id === +userId ?
                                            <div className='album-edit-delete-buttons'>
                                                <button onClick={e => deleteAlbumButton(e, al.id)}>Delete</button>
                                                <button onClick={e => editAlbumButton(e, userId, al.id)}>Edit</button>
                                            </div>
                                            : null}
                                    </div>
                                </Link>
                            }
                        </>
                    ))}
                </div>
            </div>
        </div >
    );
}
export default ProfileAlbums;
