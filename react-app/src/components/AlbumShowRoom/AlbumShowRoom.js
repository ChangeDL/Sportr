import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'
import { getUserAlbums, oneAlbum, removeAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';


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
        <>
            {albumImages?.map((im) => (
                <div key={im.id}>
                    <img src={im.url} />
                </div>
            ))}
        </>
    )
}

export default AlbumShowRoom
