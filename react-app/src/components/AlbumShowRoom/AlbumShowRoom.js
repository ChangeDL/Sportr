import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'
import { getUserAlbums, oneAlbum, removeAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import './AlbumShowRoom.css'
import Footer from '../Footer/Footer';


function AlbumShowRoom() {
    const [user, setUser] = useState({});
    const { userId, albumId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()

    const userAlbums = useSelector(state => { return state })
    const currentUser = useSelector(state => state.session.user)

    const currentAlbum = Object.values(userAlbums.albumReducer.currentAlbum)

    const albumImages = (currentAlbum[2])


    useEffect(() => {
        dispatch(oneAlbum(albumId))
    }, [dispatch, albumId])

    return (
        <div className='whole-album-showroom-container'>
            <div className='link-back-to-album-list-div'>
                <Link to={`/people/${userId}/albums`} className="back-to-album-list-link-div">
                    <div className="icon-for-back-to-explore">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <span className="back-to-album-list-link">Back to album list</span>
                </Link>
            </div>
            <div className='album-banner-showroom'>
                <div className='album-name-description-div'>
                    <span className='album-name-showroom'>{currentAlbum[3]?.substring(0, 30)}</span>
                    <span className='album-description-showroom'>{currentAlbum[0]?.substring(0, 45)}</span>
                </div>
                <img className='album-image-banner' src={albumImages?.length > 0 ? albumImages[0]?.url : null} />
            </div>

            <div className='all-images-in-album'>
                {albumImages?.map((im) => (
                    <div key={im.id}>
                        <Link to={`/people/${im.username}/albums/${albumId}/photos/${im.id}`}><img className='images-album-showroom' src={im.url} /></Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default AlbumShowRoom
