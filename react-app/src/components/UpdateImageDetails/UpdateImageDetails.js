import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editImageThunk, getImageByIdThunk } from "../../store/image";
import './UpdateImageDetails.css'
import { getUserAlbums } from "../../store/album";

const UpdateImageDetails = () => {
    const { userId, id } = useParams();
    const history = useHistory();
    const currentImage = useSelector(state => state?.imageReducer?.allImages[id])
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')
    const [people, setPeople] = useState('')
    const [album, setAlbum] = useState(0)

    console.log(album)
    const currentUser = useSelector(state => state.session.user)

    const userAlbums = useSelector(state => { return state })
    const userAlbumsArray = Object.values(userAlbums.albumReducer.albumsForUser)

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/images/${id}`)
            const data = await res.json()
            setTitle(data[id]?.title)
            setDescription(data[id]?.description)
            setTags(data[id]?.tags)
            setPeople(data[id]?.people)
        })()
    }, [id])


    useEffect(() => {
        dispatch(getImageByIdThunk(id))
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserAlbums(currentUser.id))
    }, [currentUser.id])


    const updateTitle = (e) => {
        setTitle(e.target.value)
    }
    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const updateTags = (e) => {
        setTags(e.target.value)
    }

    const updatePeople = (e) => {
        setPeople(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const updatedData = {
            imageId: +id,
            title,
            description,
            tags,
            people,
        }
        if (album > 0) {
            updatedData.albums = +album
        }

        const editedData = await dispatch(editImageThunk(updatedData))

        if (editedData) {
            history.push(`/photos/${id}`)
            // dispatch(getImageByIdThunk(id))
        }
    }

    const cancelButton = async (e, id) => {
        e.preventDefault()
        history.push(`/photos/${id}`)
    }

    return (
        <div className='background-for-signup-and-login'>


            <div className="update-image-form-container">
                <div className='sign-up-form'>
                    <div className="confirm-delete-message">
                        <span>What would you like to edit about this images details?</span>
                    </div>
                    <form onSubmit={onSubmit}>

                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Title</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updateTitle}
                                value={title}
                            />
                        </div>

                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Description</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updateDescription}
                                value={description}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Tag</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updateTags}
                                value={tags}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>People</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updatePeople}
                                value={people}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Add To Album</label>
                            <select
                                name="albums"
                                id="albums"
                                value={album}
                                onChange={(e) => setAlbum(e.target.value)}
                                className='sign-up-form-inputs-only'
                            >
                                <option value='' style={{ color: 'grey' }}>Not Required</option>
                                {userAlbumsArray.map((al) => (
                                    <>
                                        {currentImage?.albums.includes(al.id) ? null :
                                            <option value={al.id}>{al.name}</option>
                                        }
                                    </>
                                ))}
                            </select>
                        </div>
                        <div className='delete-cancel-button-div'>
                            <button className='sign-up-submit-button' type='submit'>Save Changes</button>
                            <button className='sign-up-submit-button' onClick={event => cancelButton(event, id)}>Cancel</button>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}

export default UpdateImageDetails
