import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getUserImages, getImageByIdThunk } from '../../store/image';
import './ProfileAbout.css'
import './ProfilePhotoStream.css'
import ProfilePageBanner from './ProfilePageBanner';


function ProfilePhotoStream() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const userImages = useSelector(state => state.imageReducer?.userImages)
    const currentUser = useSelector(state => state.session.user)
    const images = Object.values(userImages)


    useEffect(() => {
        dispatch(getUserImages(userId))
    }, [dispatch, userId])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const linkClick = (e, photoId) => {
        e.preventDefault()
        dispatch(getImageByIdThunk(photoId))
        setTimeout(() => {
            history.push(`/people/${userId}/photostream/${photoId}`)
        }, 500)
    }

    return (
        <div className='whole-profile-photostream-container'>
            <ProfilePageBanner />
            <div className='mid-navbar-profile-page-container'>
                <Link to={`/people/${userId}`} className='mid-navbar-links-profile'>About</Link>
                <Link to={`/people/${userId}/photostream`} className='mid-navbar-links-profile-active'>Photostream</Link>
                <Link to={`/people/${userId}/albums`} className='mid-navbar-links-profile'>Albums</Link>
                <Link className='mid-navbar-links-profile-in-dev'>Faves</Link>
                <Link className='mid-navbar-links-profile-in-dev'>Galleries</Link>
                <Link className='mid-navbar-links-profile-in-dev'>Groups</Link>
                <Link className='mid-navbar-links-profile-in-dev'>Stats</Link>
            </div>
            {images.length > 0 ?
                <div className='photostream-container-profile'>
                    <>
                        {images.map((im) =>
                            <div key={im.id} className='user-images-container'>
                                <Link to={`/people/${userId}/photostream/${im.id}`} onClick={e => linkClick(e, im.id)}>
                                    <img src={im.url} className='profile-photostream-photos' alt='Images For Display' />
                                </Link>
                            </div>
                        )}
                    </>
                </div>
                :
                <>
                    {+userId === currentUser.id ?
                        <div className='no-images-uploaded'>
                            <h1>Looks like you haven't uploaded anhything yet.</h1>
                            <h1>To upload an image click <Link to='/upload' className='upload-here-profile'>here</Link>.</h1>
                        </div>
                        :
                        <div className='no-images-uploaded'>
                            <h1>This user currently does not have any photos upload.</h1>
                            <h1>Please check back later to see if they have uploaded!</h1>
                        </div>
                    }
                </>
            }
        </div>
    );
}
export default ProfilePhotoStream;
