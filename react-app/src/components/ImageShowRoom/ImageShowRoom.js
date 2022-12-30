import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteImageThunk, getAllImages, getImageByIdThunk } from "../../store/image";
import './ImageShowRoom.css'
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'


const ImageShowRoom = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    const currentImage = useSelector(state => state?.imageReducer?.currentImage[id])



    useEffect(() => {
        dispatch(getImageByIdThunk(id))
    }, [dispatch])

    return (
        <>
            <div className="image-container-showroom">
                <div>
                    <Link to='/photos' className="back-to-explore-link-div">
                        <div className="icon-for-back-to-explore">
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        <span className="back-to-explore-link">Back to explore</span>
                    </Link>
                </div>
                <div className="showroom-image-div">
                    <img className="showroom-image" src={currentImage?.url} />
                </div>
                <div className="bottom-of-showroom-image">
                    <div className="icons-for-showroom-image">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-square-plus"></i>
                        <i className="fa-solid fa-share"></i>
                        <i className="fa-solid fa-download"></i>
                    </div>
                </div>
            </div>
            <div className="rest-of-showroom-container">
                <div className="profile-username-title-follow">
                    <div className="profile-picture-pro-showroom">
                        <Link to={`/people/${currentImage?.owner.id}/photostream`}><img className="profile-picture-showroom" src={DefaultProfilePic} /></Link>
                        <div className="span-tag-pro-div">
                            <span className="span-tag-pro">PRO</span>
                        </div>
                    </div>
                    <div className="username-title-showroom">
                        <div className="username-follow-button-div-showroom">
                            <Link to={`/people/${currentImage?.owner.id}/photostream`} className='username-image-showroom-link'><span>{currentImage?.owner.username}</span></Link>
                            <div className="follow-button-showroom-div">
                                <button className="follow-button-showroom"><i className="fa-solid fa-plus"></i> Follow</button>
                            </div>
                        </div>
                        <span>IMAGE TITLE HERE</span> {/*ADD TITLE TO TABLE */}
                        <span className="description-showroom-span">{currentImage?.description}</span> {/*ADD TITLE TO TABLE */}
                    </div>
                </div>
                <div className="border-div-showroom" />
                <span>PLACEHOLDER</span>
            </div>
        </>
    )
}

export default ImageShowRoom
