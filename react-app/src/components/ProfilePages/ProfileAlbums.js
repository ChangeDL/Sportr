import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import './ProfileAbout.css'
import { getUserAlbums, removeAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import './ProfileAlbum.css'
import ProfilePageBanner from './ProfilePageBanner';



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
            <ProfilePageBanner />
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
                <div className='add-album-container'>
                    <h1>Albums</h1>
                    {currentUser?.id === +userId ?
                        <button className='button-to-add-album' onClick={e => addAlbumButton(e, userId)}><i className="fa-regular fa-square-plus"></i></button>
                        : null}
                </div>
                <div className='all-albums-container'>
                    {userAlbumsArray.map((al) => (
                        <>
                            {al.images.length > 0 ?
                                <>
                                    <div className='album-showroom-container'>
                                        <Link className='link-to-album' to={`/people/${userId}/albums/${al.id}`} style={{ backgroundImage: `url(${al.images[0].url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', textDecoration: 'none', color: 'white' }} />
                                        <div key={al.id} className='album-name-and-buttons'>
                                            <div className='span-tag-album-name-link'>
                                                <span key={al.name}>{al.name.toUpperCase()}</span>
                                            </div>
                                            {currentUser?.id === +userId ?
                                                <div className='album-edit-delete-buttons'>
                                                    <button className='edit-delete-buttons-albums' onClick={e => editAlbumButton(e, userId, al.id)}><i class="fa-regular fa-pen-to-square"></i></button>
                                                    <button className='edit-delete-buttons-albums' onClick={e => deleteAlbumButton(e, al.id)}><i class="fa-regular fa-trash-can"></i></button>
                                                </div>
                                                : null}
                                        </div>
                                    </div>
                                </>
                                : null
                            }
                        </>
                    ))}
                </div>
            </div>
        </div >
    );
}
export default ProfileAlbums;
