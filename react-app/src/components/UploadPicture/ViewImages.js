import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteImageThunk, getAllImages } from "../../store/image";
import Footer from "../Footer/Footer";
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

    const editButton = async (e, id) => {
        e.preventDefault()

        return history.push(`photos/${sessionUser.id}/${id}/edit-details`)
    }


    useEffect(() => {
        dispatch(getAllImages())
    }, [dispatch])




    return (
        <div className="background-for-explore-page">

            <div className="whole-explore-page-container">
                <div className="fix-position-container-mid-navbar">

                    <div className="mid-navbar-explore-page">
                        <Link className="links-on-mid-navbar-active" to='/photos'><span>Explore</span></Link>
                        <Link className="links-on-mid-navbar" to='/page-in-development'><span>Trending</span></Link>
                        <Link className="links-on-mid-navbar" to='/page-in-development'><span>Events</span></Link>
                    </div>
                </div>
                <div className="all-images-explore-page">
                    {allImages.map((im) => (
                        <div key={im.id}>
                            <Link to={`/photos/${im.id}`}>
                                <img src={im.url} className='images-on-display' />
                            </Link>
                            {
                                sessionUser && sessionUser.id === im.owner.id ?
                                    <div>
                                        <button onClick={event => editButton(event, im.id)}>Edit</button>
                                        <button onClick={event => deleteButton(event, im.id)}>Delete</button>
                                    </div>
                                    : null
                            }
                        </div>

                    ))}
                </div>
                <Footer />
            </div >
        </div>
    )
}

export default ViewImages;
