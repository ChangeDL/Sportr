import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteImageThunk, getAllImages } from "../../store/image";
import './ViewImage.css'

const ViewImages = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const imagesObj = useSelector(state => {
        return state
    })

    const sessionUser = useSelector(state => state.session.user)

    const allImages = Object.values(imagesObj.imageReducer.allImages)


    const deleteButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${id}/delete-confirm`)
    }


    useEffect(() => {
        dispatch(getAllImages())
    }, [dispatch])




    return (
        <div className="whole-explore-page-container">
            <div className="mid-navbar-explore-page">
                <Link to='/photos'><span>Explore</span></Link>
                <Link to='/page-in-development'><span>Trending</span></Link>
                <Link to='/page-in-development'><span>Events</span></Link>
            </div>
            <div className="all-images-explore-page">
                {allImages.map((im) => (
                    <div>
                        <img src={im.url} className='images-on-display' />
                        {/* {
                            sessionUser.id === im.owner.id ?
                                <button onClick={event => deleteButton(event, im.id)}>Delete</button>
                                : null
                        } */}
                    </div>

                ))}
            </div>
        </div >
    )
}

export default ViewImages;
