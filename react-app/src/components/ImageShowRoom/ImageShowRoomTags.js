import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getImageByIdThunk } from "../../store/image";
import './ImageShowRoom.css'
import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'
import Footer from "../Footer/Footer";


const ImageShowRoomTags = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { tag, photoId } = useParams()
    const currentImage = useSelector(state => state?.imageReducer?.currentImage[photoId])
    const currentUser = useSelector(state => state.session.user)
    let imageTags;
    if (currentImage?.tags !== null && currentImage?.tags.includes(',')) imageTags = currentImage?.tags.split(',')
    else if (currentImage?.tags !== null) imageTags = [currentImage?.tags]


    useEffect(() => {
        dispatch(getImageByIdThunk(photoId))
    }, [dispatch, photoId])

    const deleteButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${id}/delete-confirm`)
    }

    const editButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${currentUser.id}/${id}/edit-details`)
    }


    return (
        <>
            <div className="image-container-showroom">
                <div>
                    <Link to={`/photos/tags/${tag}`} className="back-to-explore-link-div">
                        <div className="icon-for-back-to-explore">
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        <span className="back-to-explore-link">Back to tags</span>
                    </Link>
                </div>
                <div className="showroom-image-div">
                    <img className="showroom-image" src={currentImage?.url} />
                </div>
                <div className="bottom-of-showroom-image">
                    <div className="icons-for-showroom-image">
                        {currentUser.id === currentImage?.username ?
                            <div className="edit-delete-button-image-showroom-div">
                                <button className="edit-delete-button-image-showroom" onClick={event => editButton(event, currentImage?.id)}><i class="fa-regular fa-pen-to-square"></i></button>
                                <button className="edit-delete-button-image-showroom" onClick={event => deleteButton(event, currentImage?.id)}><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                            :
                            <i className="fa-regular fa-star"></i>
                        }
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
                            {currentImage?.owner.id !== currentUser.id ?
                                <div className="follow-button-showroom-div">
                                    <button className="follow-button-showroom"><i className="fa-solid fa-plus"></i> Follow</button>
                                    <span className="under-dev-follow-button">Follow Button Under Development</span>
                                </div>
                                : null}
                        </div>
                        <div className="title-showroom-span-div">
                            <span>{currentImage?.title}</span> {/*ADD TITLE TO TABLE */}
                        </div>
                        <div className="description-showroom-span-div">
                            <span className="description-showroom-span">{currentImage?.description}</span> {/*ADD TITLE TO TABLE */}
                        </div>
                        <div>
                            {imageTags?.map((tag) => (
                                <Link to={`/photos/tags/${tag}`}>{tag}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-div-showroom" />
                <span>PLACEHOLDER</span>
            </div>
            <Footer />
        </>
    )
}

export default ImageShowRoomTags
